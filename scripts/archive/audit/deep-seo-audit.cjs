const fs = require('fs');
const path = require('path');

const distDir = path.resolve('dist');

// Helper to get all HTML files
function getFiles(dir, list = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      getFiles(full, list);
    } else if (item.endsWith('.html')) {
      list.push(full);
    }
  }
  return list;
}

const htmlFiles = getFiles(distDir);
console.log(`Found ${htmlFiles.length} HTML files.`);

// 1. Robots.txt check
const robotsPath = path.join(distDir, 'robots.txt');
let robotsContent = '';
if (fs.existsSync(robotsPath)) {
  robotsContent = fs.readFileSync(robotsPath, 'utf8');
}

// 2. Sitemap check
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
let sitemapIndexContent = '';
if (fs.existsSync(sitemapIndexPath)) {
  sitemapIndexContent = fs.readFileSync(sitemapIndexPath, 'utf8');
}
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
let sitemap0Content = '';
let sitemapUrls = [];
if (fs.existsSync(sitemap0Path)) {
  sitemap0Content = fs.readFileSync(sitemap0Path, 'utf8');
  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  let m;
  while ((m = locRegex.exec(sitemap0Content)) !== null) {
    sitemapUrls.push(m[1]);
  }
}

// 3. Scan each HTML file
const results = {
  totalHtml: htmlFiles.length,
  robotsExists: !!robotsContent,
  sitemapUrlsCount: sitemapUrls.length,
  canonicalIssues: [],
  soft404Pages: [],
  missingRelLinks: [],
  trackingCodes: [],
  infrastructureLeaks: [],
  wordCounts: {},
  titleDupes: {},
  descDupes: {},
  schemaIssues: [],
  h1Missing: [],
  h1Multiple: [],
  noindexPages: [],
  emptyAnchorTags: []
};

// Check for tracker patterns
const trackerPatterns = [
  /G-[A-Z0-9]+/g,
  /UA-\d+-\d+/g,
  /hm\.baidu\.com/g,
  /adsbygoogle/g,
  /googletagmanager\.com/g
];

// Infrastructure leak patterns
const leakPatterns = [
  /192\.168\.\d+\.\d+/g,
  /10\.\d+\.\d+\.\d+/g,
  /172\.(1[6-9]|2[0-9]|3[0-1])\.\d+\.\d+/g,
  /C:\\Users\\/gi,
  /\/home\/[a-z0-9_-]+\//gi
];

htmlFiles.forEach(file => {
  const relPath = path.relative(distDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // Noindex check
  const hasNoindex = /<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(content);
  if (hasNoindex) {
    results.noindexPages.push(relPath);
  }

  // Canonical check
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    results.canonicalIssues.push({ file: relPath, issue: 'Missing canonical' });
  } else {
    const cUrl = canonicalMatch[1];
    if (!cUrl.startsWith('https://jichang.biz/')) {
      results.canonicalIssues.push({ file: relPath, issue: `Non-standard domain: ${cUrl}` });
    }
    if (!cUrl.endsWith('/') && !cUrl.includes('.')) {
      results.canonicalIssues.push({ file: relPath, issue: `Missing trailing slash: ${cUrl}` });
    }
  }

  // H1 check
  const h1Matches = content.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1Matches) {
    results.h1Missing.push(relPath);
  } else if (h1Matches.length > 1) {
    results.h1Multiple.push({ file: relPath, count: h1Matches.length });
  }

  // Title & Description
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  if (title) {
    results.titleDupes[title] = (results.titleDupes[title] || 0) + 1;
  }

  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const desc = descMatch ? descMatch[1].trim() : '';
  if (desc) {
    results.descDupes[desc] = (results.descDupes[desc] || 0) + 1;
  }

  // Word count (Chinese characters + English words in body, excluding script/style/svg)
  let bodyContent = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  bodyContent = bodyContent.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  bodyContent = bodyContent.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '');
  const bodyTextMatch = bodyContent.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const bodyText = bodyTextMatch ? bodyTextMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  const chineseChars = (bodyText.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (bodyText.match(/[a-zA-Z0-9_-]+/g) || []).length;
  const totalCount = chineseChars + englishWords;
  results.wordCounts[relPath] = { total: totalCount, zh: chineseChars, en: englishWords };

  // Empty anchor check
  const emptyAnchorRegex = /<a(?![^>]*\bhref\b)[^>]*>/gi;
  if (emptyAnchorRegex.test(content)) {
    results.emptyAnchorTags.push(relPath);
  }

  // Affiliate / external link check
  const anchorRegex = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>/gi;
  let am;
  while ((am = anchorRegex.exec(content)) !== null) {
    const fullTag = am[0];
    const href = am[2];
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith('https://jichang.biz') && !href.startsWith('http://localhost') && !href.startsWith('http://192.168.')) {
        // External link
        const isAff = /code=|aff|register|\/aff\.php|sahude/i.test(href);
        const hasNofollow = /rel=["'][^"']*nofollow[^"']*["']/i.test(fullTag);
        const hasSponsored = /rel=["'][^"']*sponsored[^"']*["']/i.test(fullTag);
        const hasNoopener = /rel=["'][^"']*noopener[^"']*["']/i.test(fullTag);
        const hasBlank = /target=["']_blank["']/i.test(fullTag);

        if (isAff && (!hasNofollow || !hasSponsored || !hasNoopener || !hasBlank)) {
          results.missingRelLinks.push({ file: relPath, href, fullTag });
        }
      }
    }
  }

  // Tracker codes
  trackerPatterns.forEach(p => {
    const tm = content.match(p);
    if (tm) {
      results.trackingCodes.push({ file: relPath, match: tm });
    }
  });

  // Leak patterns
  leakPatterns.forEach(p => {
    const lm = content.match(p);
    if (lm) {
      results.infrastructureLeaks.push({ file: relPath, match: lm });
    }
  });
});

fs.writeFileSync('reports/audit-raw-results.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Audit raw results written to reports/audit-raw-results.json');
