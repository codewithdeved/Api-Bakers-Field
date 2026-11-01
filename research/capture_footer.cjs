const puppeteer = require('puppeteer-core');
const path = require('path');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:3000/#/', { waitUntil: 'domcontentloaded' });
  await sleep(1000);

  const footer = await page.$('footer');
  if (footer) {
    const outPath = path.join(__dirname, 'screenshots', 'redesign', 'footer_fixed.png');
    await footer.screenshot({ path: outPath });
    console.log('Saved footer screenshot to', outPath);
  } else {
    console.log('Footer element not found');
  }

  await browser.close();
}

main().catch(console.error);
