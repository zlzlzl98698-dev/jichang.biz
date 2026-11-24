const fs = require('fs');
const path = require('path');

function getFiles(dir, list = []) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) getFiles(full, list);
    else if (item.endsWith('.html')) list.push(full);
  }
  return list;
}

const files = getFiles('dist');
const headingSkips = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const headings = [...content.matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => parseInt(m[1][1]));
  let prev = 0;
  for (let i = 0; i < headings.length; i++) {
    const curr = headings[i];
    if (prev > 0 && curr - prev > 1) {
      headingSkips.push({ file: path.relative('dist', f), from: `H${prev}`, to: `H${curr}` });
      break;
    }
    prev = curr;
  }
});

console.log('Total pages with heading level skips (e.g. H1 -> H3):', headingSkips.length);
if (headingSkips.length > 0) {
  console.log('Sample pages:', headingSkips.slice(0, 5));
}
