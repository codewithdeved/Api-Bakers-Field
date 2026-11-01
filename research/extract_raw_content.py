import requests
import json
import os
import re
from urllib.parse import urlparse

TARGET_PAGES = {
    "home": "https://www.apibakersfield.com/",
    "news_events": "https://www.apibakersfield.com/news-events/",
    "fall_fun_shoot": "https://www.apibakersfield.com/news-events/fall-fun-shoot/",
    "board_christmas_dinner": "https://www.apibakersfield.com/pay-online/board-christmas-dinner/",
    "education_community": "https://www.apibakersfield.com/news-events/education-and-community-involvement/",
    "oil_news_california": "https://www.apibakersfield.com/news-events/oil-news-around-california/",
    "past_events": "https://www.apibakersfield.com/news-events/past-events/",
    "scholarships": "https://www.apibakersfield.com/scholarships/",
    "about_us": "https://www.apibakersfield.com/about-us/",
    "chairmans_message": "https://www.apibakersfield.com/about-us/chairmans-message/",
    "becoming_a_member": "https://www.apibakersfield.com/about-us/membership/lorem-ipsum-dolor/",
    "lifetime_members": "https://www.apibakersfield.com/about-us/lifetime-api-members/",
    "membership": "https://www.apibakersfield.com/about-us/membership/",
    "board_of_directors": "https://www.apibakersfield.com/about-us/board-of-directors/",
    "pay_online": "https://www.apibakersfield.com/pay-online/",
    "pay_membership": "https://www.apibakersfield.com/pay-online/membership-application/",
    "pay_fall_fun_shoot": "https://www.apibakersfield.com/pay-online/fall-fun-shoot/",
    "pay_scholarship_donations": "https://www.apibakersfield.com/pay-online/direct-scholarship-donations/",
    "pay_sponsorship": "https://www.apibakersfield.com/pay-online/sponsorship-payments/",
    "sponsors": "https://www.apibakersfield.com/sponsors/",
    "resources": "https://www.apibakersfield.com/resources/",
    "job_board": "https://www.apibakersfield.com/resources/job-board/",
    "job_board_seekers": "https://www.apibakersfield.com/resources/job-board-seekers/",
    "available_interns": "https://www.apibakersfield.com/resources/available-interns/",
    "available_internships": "https://www.apibakersfield.com/resources/available-internships/",
    "newsletter": "https://www.apibakersfield.com/newsletter/",
    "contact_us": "https://www.apibakersfield.com/contact-us/",
    "adopt_a_highway": "https://www.apibakersfield.com/news-events/adopt-a-highway-2/",
    "calendar": "https://www.apibakersfield.com/news-events/calendar/"
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def extract_all():
    os.makedirs("research/data/extracted_content", exist_ok=True)
    all_data = {}
    session = requests.Session()
    session.headers.update(HEADERS)

    for slug, url in TARGET_PAGES.items():
        print(f"Extracting {slug} from {url}...")
        try:
            r = session.get(url, timeout=20)
            if r.status_code != 200:
                print(f"  Status {r.status_code}")
                continue
            
            html = r.text
            
            # Save raw html
            with open(f"research/data/extracted_content/{slug}.html", "w", encoding="utf-8") as f:
                f.write(html)
                
            # Extract main content
            # The theme uses <main> or <div id="content"> or <div class="content">
            main_m = re.search(r'<main[^>]*>(.*?)</main>', html, re.I | re.S)
            main_html = main_m.group(1) if main_m else html
            
            all_data[slug] = {
                "url": url,
                "status": r.status_code,
                "length": len(html)
            }
        except Exception as e:
            print(f"  Error on {slug}: {e}")

    with open("research/data/extracted_content/manifest.json", "w", encoding="utf-8") as f:
        json.dump(all_data, f, indent=2)
    print("Done extracting raw pages!")

if __name__ == "__main__":
    extract_all()
