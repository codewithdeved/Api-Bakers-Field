import requests
import re
import json
import os
from urllib.parse import urljoin, urlparse

# List of all known pages from the navigation and sitemap
TARGET_URLS = [
    "https://www.apibakersfield.com/",
    "https://www.apibakersfield.com/news-events/",
    "https://www.apibakersfield.com/news-events/fall-fun-shoot/",
    "https://www.apibakersfield.com/pay-online/board-christmas-dinner/",
    "https://www.apibakersfield.com/news-events/education-and-community-involvement/",
    "https://www.apibakersfield.com/news-events/oil-news-around-california/",
    "https://www.apibakersfield.com/news-events/past-events/",
    "https://www.apibakersfield.com/scholarships/",
    "https://www.apibakersfield.com/about-us/",
    "https://www.apibakersfield.com/about-us/chairmans-message/",
    "https://www.apibakersfield.com/about-us/membership/lorem-ipsum-dolor/",
    "https://www.apibakersfield.com/about-us/lifetime-api-members/",
    "https://www.apibakersfield.com/about-us/membership/",
    "https://www.apibakersfield.com/about-us/board-of-directors/",
    "https://www.apibakersfield.com/pay-online/",
    "https://www.apibakersfield.com/pay-online/membership-application/",
    "https://www.apibakersfield.com/pay-online/fall-fun-shoot/",
    "https://www.apibakersfield.com/pay-online/direct-scholarship-donations/",
    "https://www.apibakersfield.com/pay-online/sponsorship-payments/",
    "https://www.apibakersfield.com/sponsors/",
    "https://www.apibakersfield.com/resources/",
    "https://www.apibakersfield.com/resources/job-board/",
    "https://www.apibakersfield.com/resources/job-board-seekers/",
    "https://www.apibakersfield.com/resources/available-interns/",
    "https://www.apibakersfield.com/resources/available-internships/",
    "https://www.apibakersfield.com/newsletter/",
    "https://www.apibakersfield.com/contact-us/",
    "https://www.apibakersfield.com/news-events/adopt-a-highway-2/",
    "https://www.apibakersfield.com/news-events/calendar/",
    "https://www.apibakersfield.com/pay-online/2015-membership-application/",
    "https://www.apibakersfield.com/pay-online/api-monthly-dinner-meeting/"
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def analyze():
    session = requests.Session()
    session.headers.update(HEADERS)
    results = {}

    for url in TARGET_URLS:
        print(f"Auditing: {url} ...", flush=True)
        try:
            r = session.get(url, timeout=12)
            html = r.text
            
            # Extract title
            title_m = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
            title = title_m.group(1).strip() if title_m else ""
            
            # Extract meta
            desc_m = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)["\']', html, re.I)
            if not desc_m:
                desc_m = re.search(r'<meta[^>]+content=["\']([^"\']*)["\'][^>]+name=["\']description["\']', html, re.I)
            desc = desc_m.group(1).strip() if desc_m else ""

            og_title_m = re.search(r'<meta[^>]+property=["\']og:title["\'][^>]+content=["\']([^"\']*)["\']', html, re.I)
            og_title = og_title_m.group(1).strip() if og_title_m else ""

            viewport_m = re.search(r'<meta[^>]+name=["\']viewport["\'][^>]+content=["\']([^"\']*)["\']', html, re.I)
            viewport = viewport_m.group(1).strip() if viewport_m else ""

            h1s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)]
            h2s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.I | re.S)]

            # Check for gravity forms
            gforms = re.findall(r'<form[^>]+id=["\']gform_(\d+)["\'][^>]*>', html, re.I)
            all_forms = re.findall(r'<form\b[^>]*>', html, re.I)

            # Images
            imgs = re.findall(r'<img\b([^>]*)>', html, re.I)
            missing_alts = 0
            for img in imgs:
                alt = re.search(r'alt=["\']([^"\']*)["\']', img, re.I)
                if not alt or not alt.group(1).strip():
                    missing_alts += 1

            # Check text body length / word count
            body_text = re.sub(r'<script.*?</script>', '', html, flags=re.I|re.S)
            body_text = re.sub(r'<style.*?</style>', '', html, flags=re.I|re.S)
            body_text = re.sub(r'<[^>]+>', ' ', body_text)
            words = [w for w in body_text.split() if len(w) > 1]

            results[url] = {
                "status_code": r.status_code,
                "title": title,
                "meta_description": desc,
                "has_og_title": bool(og_title),
                "viewport": viewport,
                "h1_count": len(h1s),
                "h1_tags": h1s,
                "h2_count": len(h2s),
                "h2_tags": h2s[:5],
                "form_count": len(all_forms),
                "gforms": gforms,
                "total_images": len(imgs),
                "images_missing_alt": missing_alts,
                "approx_word_count": len(words),
                "content_length_bytes": len(r.content),
                "response_time_ms": round(r.elapsed.total_seconds() * 1000, 1)
            }
        except Exception as e:
            results[url] = {
                "status_code": 0,
                "error": str(e)
            }
            print(f"Error on {url}: {e}", flush=True)

    os.makedirs("research/data", exist_ok=True)
    with open("research/data/detailed_page_audit.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)

    print("\nSuccessfully audited all target URLs. Saved to research/data/detailed_page_audit.json", flush=True)

if __name__ == "__main__":
    analyze()
