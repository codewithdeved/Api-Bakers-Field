const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 667 });
  await page.goto('http://127.0.0.1:3000/#/', { waitUntil: 'domcontentloaded' });
  
  const menuBtn = await page.$('button[aria-label="Toggle Navigation Menu"]');
  await menuBtn.click();
  await new Promise(r => setTimeout(r, 300));
  
  const drawerInfo = await page.evaluate(() => {
    const drawer = document.querySelector('.xl\\:hidden.bg-white.border-b');
    const buttons = Array.from(drawer.querySelectorAll('button')).map(b => b.innerText.trim());
    return {
      buttons,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    };
  });
  
  console.log('Drawer Buttons:', drawerInfo.buttons);
  console.log('ScrollWidth vs ClientWidth:', drawerInfo.scrollWidth, '===', drawerInfo.clientWidth);
  
  // Test clicking a sub-dropdown inside drawer (e.g., News & Events)
  const newsDropdown = await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('.xl\\:hidden.bg-white.border-b button')).find(b => b.innerText.includes('News & Events'));
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  });
  
  await new Promise(r => setTimeout(r, 200));
  const expandedInfo = await page.evaluate(() => {
    const calendarBtn = Array.from(document.querySelectorAll('.xl\\:hidden.bg-white.border-b button')).find(b => b.innerText.includes('Calendar'));
    const fallFunShootBtn = Array.from(document.querySelectorAll('.xl\\:hidden.bg-white.border-b button')).find(b => b.innerText.includes('Fall Fun Shoot'));
    return {
      hasCalendarBtn: !!calendarBtn,
      hasFallFunShootBtn: !!fallFunShootBtn,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    };
  });
  
  console.log('Submenu Expanded Info:', expandedInfo);
  await browser.close();
})();
