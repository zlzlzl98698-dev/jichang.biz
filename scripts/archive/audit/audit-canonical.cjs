const fs = require('fs');
const pages = [
  'index.html',
  'recommend/index.html',
  'pricing/index.html',
  'brands/index.html',
  'vpn/index.html',
  'clients/index.html',
  'compatibility/index.html',
  'network/index.html',
  'guides/index.html',
  'troubleshooting/index.html',
  'risk/index.html',
  'recommend/rankings/index.html',
  'recommend/reliable/index.html',
  'pricing/cheap/index.html',
  'pricing/monthly/index.html',
  'vpn/free/index.html',
  'reviews/guangsu/index.html',
  'reviews/muguang/index.html',
  'reviews/weifeng/index.html',
  'reviews/feimao/index.html',
  'reviews/shandianshu/index.html',
  'brands/guangsu/index.html',
  'brands/weifeng/index.html',
  'brands/dalaoyun/index.html',
  'compare/guangsu-vs-muguang/index.html',
  'compare/feimao-vs-weifeng/index.html',
  'guides/clash-verge-rev-tutorial/index.html',
  'guides/tun-mode-explained/index.html',
  'troubleshooting/node-timeout/index.html',
  'troubleshooting/ai-access-denied-1020/index.html',
  'compatibility/chatgpt-node-guide/index.html',
  'network/iepl-vs-iplc/index.html'
];
pages.forEach(p => {
  const content = fs.readFileSync('dist/' + p, 'utf8');
  const m = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  console.log(p.padEnd(45), m ? m[1] : 'MISSING');
});
