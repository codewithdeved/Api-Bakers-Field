const fs = require('fs');
const path = require('path');

const extractedDir = path.join(__dirname, 'data', 'extracted_content');
const srcDir = path.join(__dirname, '..', 'src');

// Read all files from src/pages and src/data
const pagesDir = path.join(srcDir, 'pages');
const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));
const siteContentText = fs.readFileSync(path.join(srcDir, 'data', 'siteContent.js'), 'utf8');

let allSrcText = siteContentText;
pageFiles.forEach(f => {
  allSrcText += ' ' + fs.readFileSync(path.join(pagesDir, f), 'utf8');
});

// Also include components
const compDir = path.join(srcDir, 'components');
fs.readdirSync(compDir).filter(f => f.endsWith('.jsx')).forEach(f => {
  allSrcText += ' ' + fs.readFileSync(path.join(compDir, f), 'utf8');
});

// Read the crawled text repository
const allPageTexts = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'all_page_texts.json'), 'utf8'));

console.log('=== SYSTEMATIC 100% CONTENT AUDIT AGAINST LIVE SITE ===');

let totalChecks = 0;
let passedChecks = 0;
const missingPhrases = [];

// Critical organizational entities to check
const criticalPhrases = [
  "American Petroleum Institute",
  "San Joaquin Valley Chapter",
  "95-3086622",
  "P.O. Box 1064",
  "Bakersfield, CA 93302",
  "John Chafin",
  "jchafin@calcoastacidizing.com",
  "apibakersfieldchapter@gmail.com",
  "661.343.7900",
  "Scott Bender",
  "sbender024@gmail.com",
  "Mike Handren",
  "mhandren@yahoo.com",
  "Dustin Trahan",
  "Dtrahan8@slb.com",
  "Amy Galanski",
  "amygalanski@chevron.com",
  "Kaylene Ransom",
  "kaylene.ransom@anacapa.com",
  "David Budy",
  "DBudy@sentinelpeakresources.com",
  "Bill Graham",
  "Lonnie Kerley",
  "Jim Roberts",
  "jroberts3@bak.rr.com",
  "Ryan Knapp",
  "ryknapp@kern.org",
  "661-472-3529",
  "Tim Frame",
  "661-447-5123",
  "Golden Bull Restaurant",
  "Enos Lane",
  "The objective of this organization is to foster a spirit of cooperation",
  "We are proud to award API Scholarships each year",
  "2027 API SCHOLARSHIP APPLICATION:",
  "coming soon!!",
  "Californians for Energy & Science – Unleash California Energy",
  "California Resources Corporation is our Silver Sponsor",
  "Chevron and Enterprise",
  "Carbon TerraVault",
  "26-R reservoir",
  "Elk Hills Field",
  "Francisco Leon",
  "In 2022, California imported a record 74% of its oil from overseas sources",
  "1.7 billion barrels of proved oil reserves",
  "A GLOBAL ENERGY CRISIS, AN AMERICAN SOLUTION",
  "2023 State of American Energy",
  "Oil Baron’s Ball",
  "Fall Fun Shoot",
  "Board Christmas Dinner"
];

criticalPhrases.forEach(phrase => {
  totalChecks++;
  if (allSrcText.includes(phrase)) {
    passedChecks++;
  } else {
    missingPhrases.push(phrase);
  }
});

console.log(`Critical Entity Checks: ${passedChecks}/${totalChecks} (${Math.round(passedChecks/totalChecks * 100)}% Match)`);
if (missingPhrases.length > 0) {
  console.log('Missing items:', missingPhrases);
} else {
  console.log('ALL CRITICAL PHRASES VERIFIED VERBATIM IN REDESIGN SOURCE!');
}

// Now check each page's extracted headings and paragraphs
let pageCount = 0;
let totalParas = 0;
let matchedParas = 0;
const unmatchedDetails = [];

for (const [pageKey, pageData] of Object.entries(allPageTexts)) {
  pageCount++;
  if (pageData.paragraphs) {
    pageData.paragraphs.forEach(p => {
      const cleanP = p.replace(/\s+/g, ' ').trim();
      // Skip empty or tiny noise
      if (cleanP.length > 15) {
        totalParas++;
        // Check if substring of 25+ chars exists in src text
        const snippet = cleanP.slice(0, Math.min(cleanP.length, 40));
        if (allSrcText.includes(snippet)) {
          matchedParas++;
        } else {
          unmatchedDetails.push({ pageKey, snippet });
        }
      }
    });
  }
}

console.log(`\nDetailed Paragraph Match: ${matchedParas}/${totalParas} (${Math.round(matchedParas/totalParas * 100)}% Match across ${pageCount} pages)`);
if (unmatchedDetails.length > 0) {
  console.log('Unmatched sample snippets (up to 5):', unmatchedDetails.slice(0, 5));
} else {
  console.log('100% OF EXTRACTED PARAGRAPHS VERIFIED IN REDESIGN!');
}
