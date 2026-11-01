import re
import html
import json

with open('research/data/extracted_content/board_of_directors.html', 'r', encoding='utf-8') as f:
    content = f.read()

sections = re.findall(r'<h3>(.*?)</h3>\s*<ul>(.*?)</ul>', content, re.S)
data = []

for s_title, s_body in sections:
    sec_name = re.sub(r'<[^>]+>', '', s_title).strip()
    members = []
    items = re.findall(r'<li>(.*?)</li>', s_body, re.S)
    for it in items:
        # Decode any html entities in mailto
        it_clean = html.unescape(it)
        name_m = re.search(r'class="name[^"]*">(?:<span>)?([^<]+)', it_clean)
        name = name_m.group(1).strip() if name_m else ''
        
        # Get role / company
        spans = re.findall(r'<span>([^<]+)</span>', it_clean)
        role = spans[-1].strip() if spans else ''
        
        # Email
        email_m = re.search(r'mailto:([^"\s>]+)', it_clean)
        email = email_m.group(1).strip() if email_m else ''

        if name:
            members.append({
                "name": name,
                "role": role,
                "email": email
            })
    data.append({
        "section": sec_name,
        "members": members
    })

with open('research/data/extracted_content/board_clean.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Extracted {len(data)} board categories!")
for d in data:
    print(f"{d['section']}: {len(d['members'])} members")
