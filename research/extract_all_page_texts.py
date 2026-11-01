import os
import re
import html
import json

PAGES = [
    "home", "news_events", "fall_fun_shoot", "board_christmas_dinner",
    "education_community", "oil_news_california", "past_events", "scholarships",
    "about_us", "chairmans_message", "becoming_a_member", "lifetime_members",
    "membership", "board_of_directors", "pay_online", "pay_membership",
    "pay_fall_fun_shoot", "pay_scholarship_donations", "pay_sponsorship",
    "sponsors", "resources", "job_board", "job_board_seekers", "available_interns",
    "available_internships", "newsletter", "contact_us", "adopt_a_highway", "calendar"
]

def clean_tags(h):
    h = re.sub(r'<(script|style)\b[^>]*>.*?</\1>', '', h, flags=re.I|re.S)
    h = re.sub(r'<!--.*?-->', '', h, flags=re.S)
    # extract title
    t_m = re.search(r'<title>(.*?)</title>', h, re.I)
    title = html.unescape(t_m.group(1)).strip() if t_m else ''
    
    # extract main content block
    content_m = re.search(r'<div id="content"[^>]*>(.*?)</div>\s*<!-- /#content -->', h, re.I|re.S)
    if not content_m:
        content_m = re.search(r'<div class="main"[^>]*>(.*?)</div>\s*<!-- /#main -->', h, re.I|re.S)
    if not content_m:
        content_m = re.search(r'<main[^>]*>(.*?)</main>', h, re.I|re.S)
    
    raw = content_m.group(1) if content_m else h
    return title, raw

def run():
    out = {}
    for p in PAGES:
        fpath = f"research/data/extracted_content/{p}.html"
        if os.path.exists(fpath):
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
            title, raw_main = clean_tags(content)
            # Find all headings
            headings = [html.unescape(re.sub(r'<[^>]+>', '', hd).strip()) for hd in re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', raw_main, re.I|re.S)]
            # Find all paragraphs
            paras = [html.unescape(re.sub(r'<[^>]+>', ' ', pr).strip()) for pr in re.findall(r'<p[^>]*>(.*?)</p>', raw_main, re.I|re.S)]
            paras = [re.sub(r'\s+', ' ', p) for p in paras if p and not p.isspace()]
            # Find all links
            links = []
            for l_m in re.finditer(r'<a\b[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', raw_main, re.I|re.S):
                l_url = l_m.group(1).strip()
                l_text = html.unescape(re.sub(r'<[^>]+>', '', l_m.group(2)).strip())
                if l_url and not l_url.startswith('javascript:'):
                    links.append({"url": l_url, "text": l_text})

            out[p] = {
                "title": title,
                "headings": headings,
                "paragraphs": paras,
                "links": links,
                "raw_html": raw_main
            }

    with open("research/data/all_page_texts.json", "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2)
    print(f"Parsed {len(out)} pages into all_page_texts.json successfully!")

if __name__ == "__main__":
    run()
