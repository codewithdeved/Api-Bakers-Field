const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'extracted_content');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const summary = {};

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  // Match content inside entry-content or similar
  const match = content.match(/<div class="entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i) ||
                content.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  
  if (match) {
    const raw = match[1];
    // Strip scripts and styles
    const clean = raw.replace(/<script[\s\S]*?<\/script>/gi, '')
                     .replace(/<style[\s\S]*?<\/style>/gi, '')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/&nbsp;/g, ' ')
                     .replace(/&#8217;/g, "'")
                     .replace(/&#8220;/g, '"')
                     .replace(/&#8221;/g, '"')
                     .replace(/&#8211;/g, '–')
                     .replace(/\s+/g, ' ')
                     .trim();
    summary[f] = clean;
  }
});

fs.writeFileSync(path.join(__dirname, 'cleaned_content_summary.json'), JSON.stringify(summary, null, 2));
console.log('Processed', Object.keys(summary).length, 'HTML pages successfully');
