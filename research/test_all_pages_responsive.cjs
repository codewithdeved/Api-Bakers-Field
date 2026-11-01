const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const routes = [
  '/',
  '/#/about-us',
  '/#/about-us/chairmans-message',
  '/#/about-us/board-of-directors',
  '/#/about-us/membership',
  '/#/about-us/becoming-a-member',
  '/#/about-us/lifetime-api-members',
  '/#/about-us/past-events',
  '/#/news-events/calendar',
  '/#/news-events/adopt-a-highway',
  '/#/scholarships',
  '/#/pay-online',
  '/#/pay-online/membership-application',
  '/#/pay-online/fall-fun-shoot',
  '/#/pay-online/board-christmas-dinner',
  '/#/pay-online/direct-scholarship-donations',
  '/#/pay-online/sponsorship-payments',
  '/#/pay-online/api-monthly-dinner-meeting',
  '/#/pay-online/thank-you',
  '/#/sponsors',
  '/#/resources',
  '/#/resources/job-board',
  '/#/resources/job-board-seekers',
  '/#/resources/available-interns',
  '/#/resources/available-internships',
  '/#/resources/newsletter-archive',
  '/#/contact-us'
];

const viewports = [
  { name: 'Mobile SE', width: 320, height: 600 },
  { name: 'Mobile Standard', width: 360, height: 740 },
  { name: 'iPhone 14/15', width: 390, height: 844 },
  { name: 'Tablet Portrait', width: 768, height: 1024 },
  { name: 'Tablet Landscape', width: 1024, height: 768 },
  { name: 'Laptop', width: 1280, height: 800 },
  { name: 'Desktop HD', width: 1440, height: 900 },
  { name: 'Desktop FHD', width: 1920, height: 1080 }
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  let totalIssues = 0;
  const issues = [];

  console.log(`Auditing ${routes.length} routes across ${viewports.length} viewports (${routes.length * viewports.length} checks)...`);

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    
    for (const r of routes) {
      const url = `http://127.0.0.1:3000${r}`;
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      await new Promise(res => setTimeout(res, 80));

      const res = await page.evaluate((width) => {
        const docScrollWidth = document.documentElement.scrollWidth;
        const docClientWidth = document.documentElement.clientWidth;
        const bodyScrollWidth = document.body.scrollWidth;
        const hasOverflow = docScrollWidth > docClientWidth + 1 || bodyScrollWidth > docClientWidth + 1;

        // Find elements spilling outside right boundary
        const overflowing = [];
        document.querySelectorAll('body *').forEach(el => {
          // ignore hidden or script elements
          if (el.offsetWidth === 0 && el.offsetHeight === 0) return;
          const rect = el.getBoundingClientRect();
          if (rect.right > width + 2) {
            // Check if element is inside an explicitly horizontally scrollable container
            let parent = el.parentElement;
            let insideScrollContainer = false;
            while (parent && parent !== document.body) {
              const overflowX = window.getComputedStyle(parent).overflowX;
              if (overflowX === 'auto' || overflowX === 'scroll' || overflowX === 'hidden') {
                insideScrollContainer = true;
                break;
              }
              parent = parent.parentElement;
            }

            if (!insideScrollContainer) {
              overflowing.push({
                tag: el.tagName,
                class: (el.className && typeof el.className === 'string') ? el.className.slice(0, 70) : '',
                right: Math.round(rect.right),
                excess: Math.round(rect.right - width)
              });
            }
          }
        });

        return { hasOverflow, docScrollWidth, docClientWidth, overflowing: overflowing.slice(0, 3) };
      }, vp.width);

      if (res.hasOverflow || res.overflowing.length > 0) {
        totalIssues++;
        issues.push({
          viewport: `${vp.name} (${vp.width}px)`,
          route: r,
          docScroll: res.docScrollWidth,
          docClient: res.docClientWidth,
          elements: res.overflowing
        });
      }
    }
  }

  // Also test Mobile Hamburger Menu
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:3000/#/', { waitUntil: 'domcontentloaded' });
  const menuTest = await page.evaluate(async () => {
    // Find mobile menu button
    const menuBtn = document.querySelector('button[aria-label="Toggle Navigation Menu"]');
    if (!menuBtn) return { found: false };
    menuBtn.click();
    await new Promise(r => setTimeout(r, 200));
    const navOpen = document.body.innerText.includes('Home') && document.body.innerText.includes('News & Events');
    const scrollWidthAfterOpen = document.documentElement.scrollWidth;
    const clientWidth = document.documentElement.clientWidth;
    return { found: true, navOpen, overflows: scrollWidthAfterOpen > clientWidth + 1 };
  });

  await browser.close();

  console.log('\n--- AUDIT SUMMARY ---');
  console.log(`Total Checks: ${routes.length * viewports.length}`);
  console.log(`Issues Found: ${totalIssues}`);
  console.log(`Mobile Menu Test:`, JSON.stringify(menuTest));

  if (issues.length > 0) {
    console.log('\nIssues Detail:');
    issues.forEach(i => {
      console.log(`[${i.viewport}] Route: ${i.route} -> scrollWidth: ${i.docScroll}/${i.docClient}`);
      if (i.elements.length > 0) {
        console.log('   Offending elements:', JSON.stringify(i.elements));
      }
    });
  } else {
    console.log('\nPERFECT: All pages pass 100% responsive check across all tested viewports with ZERO overflow!');
  }
}

run().catch(console.error);
