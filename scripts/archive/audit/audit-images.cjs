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
let totalImages = 0;
let missingAlt = [];
let emptyAlt = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const imgRegex = /<img\b([^>]*?)>/gi;
  let m;
  while ((m = imgRegex.exec(content)) !== null) {
    totalImages++;
    const attrs = m[1];
    const altMatch = attrs.match(/\balt=["']([^"']*)["']/i);
    if (!altMatch) {
      missingAlt.push({ file: path.relative('dist', f), tag: m[0] });
    } else if (altMatch[1].trim() === '') {
      emptyAlt.push({ file: path.relative('dist', f), tag: m[0] });
    }
  }
});

console.log('Total img tags scanned:', totalImages);
console.log('Missing alt attribute:', missingAlt.length);
console.log('Empty alt attribute:', emptyAlt.length);
if (missingAlt.length > 0) {
  console.log('Sample missing alt:', missingAlt.slice(0, 3));
}
if (emptyAlt.length > 0) {
  console.log('Sample empty alt:', emptyAlt.slice(0, 3));
}
