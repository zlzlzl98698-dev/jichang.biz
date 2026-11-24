/**
 * High-performance Markdown to semantic HTML parser for technical articles
 * Converts markdown headings, bold, inline code, blockquotes, lists, tables, and callouts
 * with beautiful Tailwind typography.
 */
export function parseMarkdown(md: string): string {
  if (!md) return '';

  const lines = md.trim().split('\n');
  const output: string[] = [];
  let inUl = false;
  let inOl = false;
  let inTable = false;
  let inBlockquote = false;
  let blockquoteBuffer: string[] = [];

  function closeLists() {
    if (inUl) {
      output.push('</ul>');
      inUl = false;
    }
    if (inOl) {
      output.push('</ol>');
      inOl = false;
    }
  }

  function closeTable() {
    if (inTable) {
      output.push('</tbody></table></div>');
      inTable = false;
    }
  }

  function closeBlockquote() {
    if (inBlockquote) {
      const bqContent = blockquoteBuffer.join(' ');
      let calloutClass = 'bg-blue-50/70 border-l-4 border-brand-info text-blue-900';
      let icon = 'ℹ️';
      let title = '说明提示';

      if (bqContent.includes('[!WARNING]') || bqContent.includes('高危') || bqContent.includes('警告') || bqContent.includes('注意')) {
        calloutClass = 'bg-amber-50/80 border-l-4 border-amber-500 text-amber-950';
        icon = '⚠️';
        title = '风险预警';
      } else if (bqContent.includes('[!DANGER]') || bqContent.includes('致命') || bqContent.includes('防骗') || bqContent.includes('红线')) {
        calloutClass = 'bg-rose-50/80 border-l-4 border-rose-500 text-rose-950';
        icon = '🚨';
        title = '高危红线';
      } else if (bqContent.includes('[!TIP]') || bqContent.includes('贴士') || bqContent.includes('技巧')) {
        calloutClass = 'bg-emerald-50/80 border-l-4 border-brand-teal text-emerald-950';
        icon = '💡';
        title = '实战技巧';
      }

      const cleanText = bqContent.replace(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|DANGER)\]/g, '').trim();
      output.push(`
        <div class="my-6 p-4 sm:p-5 rounded-r-xl border ${calloutClass} text-xs sm:text-sm leading-relaxed shadow-2xs">
          <div class="font-bold flex items-center gap-2 mb-2 text-sm sm:text-base">
            <span>${icon}</span>
            <span>${title}</span>
          </div>
          <div class="space-y-1">${inlineFormat(cleanText)}</div>
        </div>
      `);
      inBlockquote = false;
      blockquoteBuffer = [];
    }
  }

  function inlineFormat(text: string): string {
    return text
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-brand-dark">$1</strong>')
      // Inline Code
      .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded text-xs font-mono bg-emerald-50 text-brand-teal border border-emerald-200/60 font-semibold">$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-teal hover:underline font-semibold underline-offset-2">$1</a>');
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Empty line
    if (!line) {
      closeLists();
      closeBlockquote();
      closeTable();
      continue;
    }

    // Blockquote
    if (line.startsWith('>')) {
      closeLists();
      closeTable();
      inBlockquote = true;
      blockquoteBuffer.push(line.replace(/^>\s*/, ''));
      continue;
    } else {
      closeBlockquote();
    }

    // Markdown Table
    if (line.startsWith('|') && line.endsWith('|')) {
      closeLists();
      // Separator row (e.g. | :--- | :--- |)
      if (/^\|(\s*:?-+:?\s*\|)+$/.test(line)) {
        continue;
      }

      const cells = line
        .slice(1, -1)
        .split('|')
        .map(c => c.trim());

      if (!inTable) {
        // Table Header
        inTable = true;
        output.push(`
          <div class="my-6 overflow-x-auto rounded-xl border border-brand-border shadow-2xs bg-white">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="bg-brand-light border-b border-brand-border text-brand-dark font-bold">
                  ${cells.map(c => `<th class="p-3.5 border-r border-brand-border last:border-r-0">${inlineFormat(c)}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
        `);
      } else {
        // Table Row
        output.push(`
          <tr class="border-b border-brand-border hover:bg-slate-50/70 transition-colors last:border-b-0">
            ${cells.map(c => `<td class="p-3.5 border-r border-brand-border last:border-r-0 text-brand-muted">${inlineFormat(c)}</td>`).join('')}
          </tr>
        `);
      }
      continue;
    } else {
      closeTable();
    }

    // Headings
    if (line.startsWith('### ')) {
      closeLists();
      const text = line.substring(4);
      output.push(`
        <h3 class="text-base sm:text-lg font-bold text-brand-dark mt-8 mb-3 flex items-center gap-2 tracking-tight">
          <span class="w-2 h-2 rounded-full bg-brand-teal shrink-0"></span>
          <span>${inlineFormat(text)}</span>
        </h3>
      `);
      continue;
    }

    if (line.startsWith('## ')) {
      closeLists();
      const text = line.substring(3);
      output.push(`
        <h2 class="text-lg sm:text-xl font-extrabold text-brand-dark mt-10 mb-4 pb-2 border-b border-brand-border/70 flex items-center gap-2 tracking-tight">
          <span>${inlineFormat(text)}</span>
        </h2>
      `);
      continue;
    }

    // Unordered List (- or *)
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (inOl) closeLists();
      if (!inUl) {
        output.push('<ul class="my-4 space-y-2.5 pl-1">');
        inUl = true;
      }
      const itemText = line.substring(2);
      output.push(`
        <li class="flex items-start gap-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
          <span class="flex-1">${inlineFormat(itemText)}</span>
        </li>
      `);
      continue;
    }

    // Numbered List (1. 2. etc.)
    const olMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (olMatch) {
      if (inUl) closeLists();
      if (!inOl) {
        output.push('<ol class="my-4 space-y-3 pl-1">');
        inOl = true;
      }
      const num = olMatch[1];
      const itemText = olMatch[2];
      output.push(`
        <li class="flex items-start gap-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
          <span class="w-5 h-5 rounded-full bg-emerald-100 text-brand-teal font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
            ${num}
          </span>
          <span class="flex-1">${inlineFormat(itemText)}</span>
        </li>
      `);
      continue;
    }

    // Regular paragraph
    closeLists();
    output.push(`
      <p class="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
        ${inlineFormat(line)}
      </p>
    `);
  }

  closeLists();
  closeBlockquote();
  closeTable();

  return output.join('\n');
}
