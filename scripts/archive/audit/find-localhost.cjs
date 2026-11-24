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
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/https?:\/\/(?:localhost|127\.0\.0\.1)[^\s"'>]*/gi);
  if (m) console.log(path.relative('dist', f), m);
});
