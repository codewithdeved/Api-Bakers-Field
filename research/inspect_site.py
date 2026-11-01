import requests
import re
import json
import time
from urllib.parse import urljoin, urlparse, urldefrag
from collections import deque

BASE_URL = "https://www.apibakersfield.com/"
DOMAIN = "apibakersfield.com"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
}

def clean_url(url):
    url, _ = urldefrag(url)
    return url.strip()

def crawl():
    visited = set()
    queue = deque([BASE_URL])
    pages = {}
    external_links = set()
    assets = set()
    forms = []

    session = requests.Session()
    session.headers.update(HEADERS)

    print(f"Starting crawl at {BASE_URL}...")

    while queue:
        current_url = queue.popleft()
        current_url = clean_url(current_url)

        if current_url in visited:
            continue
        
        parsed = urlparse(current_url)
        if DOMAIN not in parsed.netloc:
            external_links.add(current_url)
            continue

        # Skip binary files from crawling HTML, but record them
        if any(current_url.lower().endswith(ext) for ext in ['.pdf', '.jpg', '.jpeg', '.png', '.gif', '.zip', '.doc', '.docx']):
            assets.add(current_url)
            visited.add(current_url)
            try:
                head = session.head(current_url, timeout=10, allow_redirects=True)
                pages[current_url] = {
                    "url": current_url,
                    "status_code": head.status_code,
                    "content_type": head.headers.get("content-type", ""),
                    "is_asset": True
                }
                print(f"[ASSET {head.status_code}] {current_url}")
            except Exception as e:
                pages[current_url] = {"url": current_url, "error": str(e), "is_asset": True}
            continue

        visited.add(current_url)
        print(f"[CRAWLING] {current_url} ...")

        t0 = time.time()
        try:
            resp = session.get(current_url, timeout=15)
            elapsed = time.time() - t0
        except Exception as e:
            pages[current_url] = {
                "url": current_url,
                "error": str(e)
            }
            print(f"[ERROR] {current_url}: {e}")
            continue

        content_type = resp.headers.get("content-type", "")
        if "text/html" not in content_type:
            pages[current_url] = {
                "url": current_url,
                "status_code": resp.status_code,
                "content_type": content_type,
                "is_asset": True
            }
            continue

        html = resp.text
        
        # Title
        title_m = re.search(r'<title[^>]*>(.*?)</title>', html, re.I | re.S)
        title = title_m.group(1).strip() if title_m else ""

        # Meta tags
        meta_desc_m = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)["\']', html, re.I)
        if not meta_desc_m:
            meta_desc_m = re.search(r'<meta[^>]+content=["\']([^"\']*)["\'][^>]+name=["\']description["\']', html, re.I)
        meta_desc = meta_desc_m.group(1).strip() if meta_desc_m else ""

        meta_robots_m = re.search(r'<meta[^>]+name=["\']robots["\'][^>]+content=["\']([^"\']*)["\']', html, re.I)
        meta_robots = meta_robots_m.group(1).strip() if meta_robots_m else ""

        # Generator
        gen_m = re.search(r'<meta[^>]+name=["\']generator["\'][^>]+content=["\']([^"\']*)["\']', html, re.I)
        generator = gen_m.group(1).strip() if gen_m else ""

        # Headings
        h1s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)]
        h2s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.I | re.S)]
        h3s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h3[^>]*>(.*?)</h3>', html, re.I | re.S)]

        # Forms
        form_matches = re.findall(r'<form\b([^>]*)>(.*?)</form>', html, re.I | re.S)
        page_forms = []
        for f_attrs, f_body in form_matches:
            action_m = re.search(r'action=["\']([^"\']*)["\']', f_attrs, re.I)
            method_m = re.search(r'method=["\']([^"\']*)["\']', f_attrs, re.I)
            inputs = re.findall(r'<input\b([^>]*)>', f_body, re.I)
            buttons = re.findall(r'<button\b([^>]*)>(.*?)</button>', f_body, re.I | re.S)
            page_forms.append({
                "action": action_m.group(1) if action_m else "",
                "method": method_m.group(1) if method_m else "GET",
                "input_count": len(inputs),
                "button_labels": [re.sub(r'<[^>]+>', '', b[1]).strip() for b in buttons]
            })

        # Nav items
        nav_matches = re.findall(r'<nav\b[^>]*>(.*?)</nav>', html, re.I | re.S)
        
        # Links
        hrefs = re.findall(r'href=["\']([^"\']+)["\']', html, re.I)
        page_internal = set()
        page_external = set()

        for href in hrefs:
            href_clean = clean_url(href)
            if not href_clean or href_clean.startswith(('javascript:', 'mailto:', 'tel:', '#')):
                continue
            full_link = urljoin(current_url, href_clean)
            p = urlparse(full_link)
            if DOMAIN in p.netloc:
                page_internal.add(full_link)
                if full_link not in visited and full_link not in queue:
                    queue.append(full_link)
            else:
                page_external.add(full_link)
                external_links.add(full_link)

        # Images
        imgs = re.findall(r'<img\b([^>]*)>', html, re.I)
        img_info = []
        for img in imgs:
            src_m = re.search(r'src=["\']([^"\']*)["\']', img, re.I)
            alt_m = re.search(r'alt=["\']([^"\']*)["\']', img, re.I)
            img_info.append({
                "src": src_m.group(1) if src_m else "",
                "alt": alt_m.group(1) if alt_m else "",
                "has_alt": bool(alt_m and alt_m.group(1).strip())
            })

        pages[current_url] = {
            "url": current_url,
            "status_code": resp.status_code,
            "response_time_ms": round(elapsed * 1000, 2),
            "content_length": len(resp.content),
            "content_type": content_type,
            "title": title,
            "meta_description": meta_desc,
            "meta_robots": meta_robots,
            "generator": generator,
            "h1": h1s,
            "h2": h2s[:10],
            "h3": h3s[:10],
            "forms": page_forms,
            "internal_links_count": len(page_internal),
            "external_links_count": len(page_external),
            "total_images": len(img_info),
            "images_missing_alt": sum(1 for img in img_info if not img["has_alt"]),
            "is_asset": False
        }

        print(f"  -> Title: {title} | Status: {resp.status_code} | H1s: {len(h1s)} | Forms: {len(page_forms)}")

    summary = {
        "crawl_timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "base_url": BASE_URL,
        "total_internal_urls_crawled": len(pages),
        "total_external_links_found": len(external_links),
        "pages": pages,
        "external_links": sorted(list(external_links)),
        "assets": sorted(list(assets))
    }

    with open("research/data/crawl_results.json", "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)

    print(f"\n[DONE] Crawled {len(pages)} pages. Saved to research/data/crawl_results.json")

if __name__ == "__main__":
    crawl()
