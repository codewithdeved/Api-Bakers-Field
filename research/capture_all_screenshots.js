const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const PAGES = [
  { name: '01_homepage', url: 'https://www.apibakersfield.com/' },
  { name: '02_news_events', url: 'https://www.apibakersfield.com/news-events/' },
  { name: '03_fall_fun_shoot', url: 'https://www.apibakersfield.com/news-events/fall-fun-shoot/' },
  { name: '04_board_christmas_dinner', url: 'https://www.apibakersfield.com/pay-online/board-christmas-dinner/' },
  { name: '05_education_community', url: 'https://www.apibakersfield.com/news-events/education-and-community-involvement/' },
  { name: '06_oil_news_california', url: 'https://www.apibakersfield.com/news-events/oil-news-around-california/' },
  { name: '07_past_events', url: 'https://www.apibakersfield.com/news-events/past-events/' },
  { name: '08_scholarships', url: 'https://www.apibakersfield.com/scholarships/' },
  { name: '09_about_us', url: 'https://www.apibakersfield.com/about-us/' },
  { name: '10_chairmans_message', url: 'https://www.apibakersfield.com/about-us/chairmans-message/' },
  { name: '11_becoming_a_member_legacy_slug', url: 'https://www.apibakersfield.com/about-us/membership/lorem-ipsum-dolor/' },
  { name: '12_lifetime_members', url: 'https://www.apibakersfield.com/about-us/lifetime-api-members/' },
  { name: '13_membership_overview', url: 'https://www.apibakersfield.com/about-us/membership/' },
  { name: '14_board_of_directors', url: 'https://www.apibakersfield.com/about-us/board-of-directors/' },
  { name: '15_pay_online_landing', url: 'https://www.apibakersfield.com/pay-online/' },
  { name: '16_membership_application_pay', url: 'https://www.apibakersfield.com/pay-online/membership-application/' },
  { name: '17_fall_fun_shoot_pay_form', url: 'https://www.apibakersfield.com/pay-online/fall-fun-shoot/' },
  { name: '18_direct_scholarship_donations_pay', url: 'https://www.apibakersfield.com/pay-online/direct-scholarship-donations/' },
  { name: '19_sponsorship_payments', url: 'https://www.apibakersfield.com/pay-online/sponsorship-payments/' },
  { name: '20_sponsors', url: 'https://www.apibakersfield.com/sponsors/' },
  { name: '21_resources_landing', url: 'https://www.apibakersfield.com/resources/' },
  { name: '22_job_board_providers', url: 'https://www.apibakersfield.com/resources/job-board/' },
  { name: '23_job_board_seekers', url: 'https://www.apibakersfield.com/resources/job-board-seekers/' },
  { name: '24_available_interns', url: 'https://www.apibakersfield.com/resources/available-interns/' },
  { name: '25_available_internships', url: 'https://www.apibakersfield.com/resources/available-internships/' },
  { name: '26_newsletter_archive', url: 'https://www.apibakersfield.com/newsletter/' },
  { name: '27_contact_us', url: 'https://www.apibakersfield.com/contact-us/' },
  { name: '28_adopt_a_highway', url: 'https://www.apibakersfield.com/news-events/adopt-a-highway-2/' }
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
  const desktopDir = path.resolve(__dirname, 'screenshots', 'desktop');
  const mobileDir = path.resolve(__dirname, 'screenshots', 'mobile');
  const compDir = path.resolve(__dirname, 'screenshots', 'components');

  fs.mkdirSync(desktopDir, { recursive: true });
  fs.mkdirSync(mobileDir, { recursive: true });
  fs.mkdirSync(compDir, { recursive: true });

  console.log('Launching Chrome via puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(15000);

  for (let i = 0; i < PAGES.length; i++) {
    const item = PAGES[i];
    console.log(`[${i+1}/${PAGES.length}] Processing ${item.name}...`);

    try {
      // 1. Desktop
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
      await page.goto(item.url, { waitUntil: 'domcontentloaded' });
      await sleep(500);

      const desktopPath = path.join(desktopDir, `${item.name}.png`);
      await page.screenshot({ path: desktopPath, fullPage: true });
      console.log(`  ✓ Desktop: ${item.name}.png`);

      // Components on homepage
      if (item.name === '01_homepage') {
        try {
          const headerEl = await page.$('header');
          if (headerEl) {
            await headerEl.screenshot({ path: path.join(compDir, '01_header_nav.png') });
          }
          const footerEl = await page.$('footer, #footer');
          if (footerEl) {
            await footerEl.screenshot({ path: path.join(compDir, '03_footer.png') });
          }
        } catch (e) {}
      }

      // Components on payment form
      if (item.name === '17_fall_fun_shoot_pay_form') {
        try {
          const formEl = await page.$('form');
          if (formEl) {
            await formEl.screenshot({ path: path.join(compDir, '04_event_registration_form.png') });
          }
        } catch (e) {}
      }

      // 2. Mobile (fast viewport switch without reload)
      await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
      await sleep(400);
      const mobilePath = path.join(mobileDir, `${item.name}_mobile.png`);
      await page.screenshot({ path: mobilePath, fullPage: true });
      console.log(`  ✓ Mobile: ${item.name}_mobile.png`);

    } catch (err) {
      console.error(`  ✗ Error on ${item.name}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('\nAll 28 pages captured in desktop & mobile!');
}

run().catch(console.error);
