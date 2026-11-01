import os
import re
import json

def clean_html(text):
    text = re.sub(r'<!--.*?-->', '', text, flags=re.S)
    text = re.sub(r'<script.*?</script>', '', text, flags=re.I|re.S)
    text = re.sub(r'<style.*?</style>', '', text, flags=re.I|re.S)
    return text.strip()

def extract_main_text(html):
    # Find between <main> and </main>
    m = re.search(r'<main\b[^>]*>(.*?)</main>', html, re.I | re.S)
    if m:
        return m.group(1)
    # Or between #content
    m = re.search(r'<div id="content"[^>]*>(.*?)</div>\s*<!-- /#content -->', html, re.I | re.S)
    if m:
        return m.group(1)
    return html

def parse_board(html):
    # Table rows of board members
    rows = []
    matches = re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.I | re.S)
    for row in matches:
        cells = re.findall(r'<td[^>]*>(.*?)</td>', row, re.I | re.S)
        if len(cells) >= 3:
            title = re.sub(r'<[^>]+>', '', cells[0]).strip()
            name = re.sub(r'<[^>]+>', '', cells[1]).strip()
            company = re.sub(r'<[^>]+>', '', cells[2]).strip()
            email_m = re.search(r'href=["\']mailto:([^"\']+)["\']', cells[1] + (cells[3] if len(cells) > 3 else ""))
            email = email_m.group(1).strip() if email_m else ""
            if not email and len(cells) > 3:
                email = re.sub(r'<[^>]+>', '', cells[3]).strip()
            if title or name:
                rows.append({
                    "title": title,
                    "name": name,
                    "company": company,
                    "email": email
                })
    return rows

def parse_sponsors(html):
    # Find sponsor images and names
    sponsors = []
    # Find blocks or images
    for img_m in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\'](?:[^>]*alt=["\']([^"\']*)["\'])?', html, re.I):
        src = img_m.group(1)
        alt = img_m.group(2) or ""
        if "wp-content/uploads" in src and "API-San-Joaquin-Valley-Chapter" not in src:
            filename = os.path.basename(src.split("?")[0])
            sponsors.append({
                "src": "/images/" + filename,
                "alt": alt if alt else filename.replace(".png", "").replace(".jpg", "").replace("-", " ")
            })
    return sponsors

def run():
    files = {
        "home": "research/data/extracted_content/home.html",
        "board": "research/data/extracted_content/board_of_directors.html",
        "sponsors": "research/data/extracted_content/sponsors.html",
        "membership": "research/data/extracted_content/membership.html",
        "fall_fun_shoot": "research/data/extracted_content/fall_fun_shoot.html",
        "chairmans_message": "research/data/extracted_content/chairmans_message.html",
        "about_us": "research/data/extracted_content/about_us.html",
        "scholarships": "research/data/extracted_content/scholarships.html",
        "contact_us": "research/data/extracted_content/contact_us.html",
        "newsletter": "research/data/extracted_content/newsletter.html"
    }

    parsed = {}
    for key, path in files.items():
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                html = f.read()
            main_block = extract_main_text(html)
            parsed[key] = {
                "raw_main": main_block[:3000],
                "char_length": len(main_block)
            }
            if key == "board":
                parsed["board_members"] = parse_board(html)
            elif key == "sponsors":
                parsed["sponsor_list"] = parse_sponsors(html)

    with open("research/data/extracted_content/parsed_summary.json", "w", encoding="utf-8") as f:
        json.dump(parsed, f, indent=2)

    print("Parsed summary generated successfully!")

if __name__ == "__main__":
    run()
