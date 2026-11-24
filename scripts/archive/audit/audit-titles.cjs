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
const longTitles = [];
const shortTitles = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const tm = content.match(/<title>([^<]+)<\/title>/i);
  if (tm) {
    const title = tm[1];
    if (title.length > 70) {
      longTitles.push({ file: path.relative('dist', f), length: title.length, title });
    } else if (title.length < 15) {
      shortTitles.push({ file: path.relative('dist', f), length: title.length, title });
    }
  }
});

console.log('Total titles > 70 chars:', longTitles.length);
if (longTitles.length > 0) {
  console.log('Sample long titles:', longTitles.slice(0, 5));
}
console.log('Total titles < 15 chars:', shortTitles.length);
if (shortTitles.length > 0) {
  console.log('Sample short titles:', shortTitles.slice(0, 5));
}
