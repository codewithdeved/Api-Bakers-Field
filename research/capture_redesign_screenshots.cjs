const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.join(__dirname, 'screenshots', 'redesign');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  const page = await browser.newPage();

  const pagesToCapture = [
    { name: 'home', route: '#/', desktopHeight: 2800 },
    { name: 'about', route: '#/about-us', desktopHeight: 2200 },
    { name: 'board', route: '#/about-us/board-of-directors', desktopHeight: 2400 },
    { name: 'pay_online', route: '#/pay-online', desktopHeight: 2200 },
    { name: 'sponsors', route: '#/sponsors', desktopHeight: 2200 },
    { name: 'newsletter', route: '#/newsletter', desktopHeight: 2000 },
    { name: 'contact', route: '#/contact-us', desktopHeight: 2200 },
    { name: 'monthly_dinner', route: '#/pay-online/api-monthly-dinner-meeting', desktopHeight: 2000 }
  ];

  for (const item of pagesToCapture) {
    console.log(`Capturing Desktop: ${item.name}...`);
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://localhost:3000/${item.route}`, { waitUntil: 'networkidle0', timeout: 15000 });
    await sleep(500);
    await page.screenshot({
      path: path.join(OUTPUT_DIR, `redesign_desktop_${item.name}.png`),
      fullPage: true
    });

    console.log(`Capturing Mobile: ${item.name}...`);
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.goto(`http://localhost:3000/${item.route}`, { waitUntil: 'networkidle0', timeout: 15000 });
    await sleep(500);
    await page.screenshot({
      path: path.join(OUTPUT_DIR, `redesign_mobile_${item.name}.png`),
      fullPage: true
    });
  }

  await browser.close();
  console.log('All redesign screenshots captured successfully!');
}

run().catch(err => {
  console.error('Screenshot capture error:', err);
  process.exit(1);
});
