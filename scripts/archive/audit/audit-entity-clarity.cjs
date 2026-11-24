const fs = require('fs');

const content = fs.readFileSync('dist/reviews/guangsu/index.html', 'utf8');
const brandCount = (content.match(/光速云/g) || []).length;
const pronounCount = (content.match(/(?:这家|该机场|它(?![a-zA-Z]))/g) || []).length;

console.log('Entity mentions "光速云":', brandCount);
console.log('Ambiguous pronouns ("这家", "该机场", "它"):', pronounCount);
console.log('Entity clarity ratio:', (brandCount / (brandCount + pronounCount)).toFixed(2));
