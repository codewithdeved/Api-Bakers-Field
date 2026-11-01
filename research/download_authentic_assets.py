import requests
import re
import os
from urllib.parse import urljoin

ASSETS = [
    # Logo
    "https://www.apibakersfield.com/wp-content/uploads/2021/08/API-San-Joaquin-Valley-Chapter.png",
    # Chairman
    "https://www.apibakersfield.com/wp-content/uploads/2022/02/Russell-John-Chafin.jpg",
    # Background texture
    "https://www.apibakersfield.com/wp-content/themes/energyapi/images/bg-01.jpg",
    # Sponsor logos
    "https://www.apibakersfield.com/wp-content/uploads/2023/07/CRC-Logo-Color-High-Res.jpg",
    "https://www.apibakersfield.com/wp-content/uploads/2023/07/chevron-logo.png",
    "https://www.apibakersfield.com/wp-content/uploads/2023/07/enterprise-logo.png",
    "https://www.apibakersfield.com/wp-content/uploads/2023/07/cal-coast-acidizing-logo.jpg",
    "https://www.apibakersfield.com/wp-content/uploads/2023/07/sentinel-peak-resources-logo.png",
]

def download():
    os.makedirs("public/images", exist_ok=True)
    session = requests.Session()
    session.headers.update({"User-Agent": "Mozilla/5.0"})

    for url in ASSETS:
        filename = os.path.basename(url)
        dest = os.path.join("public/images", filename)
        print(f"Downloading {filename}...")
        try:
            r = session.get(url, timeout=15)
            if r.status_code == 200:
                with open(dest, "wb") as f:
                    f.write(r.content)
                print(f"  ✓ Saved {filename} ({len(r.content)} bytes)")
            else:
                print(f"  ✗ Status {r.status_code}")
        except Exception as e:
            print(f"  ✗ Error: {e}")

    # Also find all sponsor images from sponsors.html
    try:
        with open("research/data/extracted_content/sponsors.html", "r", encoding="utf-8") as f:
            html = f.read()
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
        print(f"Found {len(imgs)} sponsor images in sponsors.html")
        for src in imgs:
            if "wp-content/uploads" in src:
                full_url = urljoin("https://www.apibakersfield.com/", src)
                fname = os.path.basename(full_url.split("?")[0])
                dest = os.path.join("public/images", fname)
                if not os.path.exists(dest):
                    try:
                        r = session.get(full_url, timeout=10)
                        if r.status_code == 200:
                            with open(dest, "wb") as f:
                                f.write(r.content)
                            print(f"  ✓ Saved sponsor: {fname}")
                    except Exception as e:
                        pass
    except Exception as e:
        print("Sponsors parse notice:", e)

if __name__ == "__main__":
    download()
