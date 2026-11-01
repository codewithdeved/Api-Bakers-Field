const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function verify() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });
  const page = await browser.newPage();
  
  for (const w of [1280, 1440, 1920]) {
    await page.setViewport({ width: w, height: 800 });
    await page.goto('http://127.0.0.1:3000/#/', { waitUntil: 'domcontentloaded' });
    
    const layout = await page.evaluate(() => {
      const logo = document.querySelector('header img').getBoundingClientRect();
      const navItems = Array.from(document.querySelectorAll('header nav button')).map(b => {
        const r = b.getBoundingClientRect();
        return { text: b.innerText.trim(), x: Math.round(r.x), width: Math.round(r.width), right: Math.round(r.right) };
      });
      const cta = document.querySelector('#header-pay-cta')?.getBoundingClientRect();
      return { 
        logo: { right: Math.round(logo.right) }, 
        navItems,
        cta: cta ? { x: Math.round(cta.x), right: Math.round(cta.right) } : null
      };
    });

    console.log(`=== Viewport: ${w}px ===`);
    console.log('Logo right edge:', layout.logo.right);
    console.log('Nav start x:', layout.navItems[0]?.x, 'Nav end right:', layout.navItems[layout.navItems.length - 1]?.right);
    console.log('CTA button x:', layout.cta?.x);

    let hasOverlap = false;
    if (layout.navItems.length > 0 && layout.logo.right > layout.navItems[0].x) {
      console.log('OVERLAP DETECTED between logo and first nav item!');
      hasOverlap = true;
    }
    for (let i = 0; i < layout.navItems.length - 1; i++) {
      if (layout.navItems[i].right > layout.navItems[i+1].x) {
        console.log(`OVERLAP DETECTED between item ${i} and ${i+1}!`);
        hasOverlap = true;
      }
    }
    if (layout.cta && layout.navItems.length > 0 && layout.navItems[layout.navItems.length - 1].right > layout.cta.x) {
      console.log('OVERLAP DETECTED between last nav item and CTA button!');
      hasOverlap = true;
    }

    if (!hasOverlap) {
      console.log(`PASSED: 100% clean layout, zero overlap at ${w}px.`);
    }
  }

  // Also check tablet / mobile at 1024px: hamburger should be visible
  await page.setViewport({ width: 1024, height: 800 });
  await page.goto('http://127.0.0.1:3000/#/', { waitUntil: 'domcontentloaded' });
  const hasHamburger = await page.evaluate(() => {
    const btn = document.querySelector('header button[aria-label="Toggle Navigation Menu"]');
    return btn && btn.offsetParent !== null;
  });
  console.log(`=== Viewport: 1024px === Hamburger visible: ${hasHamburger}`);

  await browser.close();
}

verify().catch(console.error);
