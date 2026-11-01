const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testOverflow() {
  const browser = await puppeteer.launch({ 
    executablePath: CHROME_PATH, 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const viewports = [360, 390, 768, 1024, 1180, 1280, 1366, 1440, 1536, 1920];

  for (const w of viewports) {
    await page.setViewport({ width: w, height: 800 });
    await page.goto('http://127.0.0.1:3000/#/', { waitUntil: 'domcontentloaded' });
    
    const overflowInfo = await page.evaluate((width) => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      const hasHorizontalScroll = scrollWidth > clientWidth;

      // Find all overflowing elements
      const overflowingElements = [];
      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > width + 1) { // 1px margin of error
          const cls = typeof el.className === 'string' ? el.className.slice(0, 100) : '';
          overflowingElements.push({
            tag: el.tagName,
            className: cls,
            id: el.id,
            right: Math.round(rect.right),
            excess: Math.round(rect.right - width)
          });
        }
      });

      return { width, scrollWidth, clientWidth, hasHorizontalScroll, overflowingElements: overflowingElements.slice(0, 10) };
    }, w);

    if (overflowInfo.hasHorizontalScroll) {
      console.log(`[OVERFLOW at ${w}px] document.scrollWidth=${overflowInfo.scrollWidth} > clientWidth=${overflowInfo.clientWidth} (Excess: ${overflowInfo.scrollWidth - overflowInfo.clientWidth}px)`);
      console.log('Top overflowing elements:', JSON.stringify(overflowInfo.overflowingElements, null, 2));
    } else {
      console.log(`[OK at ${w}px] No overflow detected.`);
    }
  }

  await browser.close();
}

testOverflow().catch(console.error);
