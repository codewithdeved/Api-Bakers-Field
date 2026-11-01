const fs = require('fs');
const path = require('path');
const allPageTexts = JSON.parse(fs.readFileSync('research/data/all_page_texts.json', 'utf8'));

// Get all text from src files
const srcFiles = [];
function readDirRecursive(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) readDirRecursive(full);
    else if (full.endsWith('.jsx') || full.endsWith('.js')) srcFiles.push(fs.readFileSync(full, 'utf8'));
  });
}
readDirRecursive('src');
// Strip JSX/HTML tags and normalize whitespace
const combined = srcFiles.join(' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

const missing = [];
for (const [page, data] of Object.entries(allPageTexts)) {
  (data.paragraphs || []).forEach(p => {
    const clean = p.replace(/\s+/g, ' ').trim();
    if (clean.length > 20) {
      // Check first 30 chars
      const target = clean.slice(0, 30);
      if (!combined.includes(target)) {
        missing.push({ page, clean });
      }
    }
  });
}

console.log('Total missing snippets:', missing.length);
missing.forEach((m, idx) => {
  console.log(`[${idx+1}] (${m.page}): ${m.clean.slice(0, 100)}`);
});
