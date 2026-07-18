import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function findCssFiles() {
  const assetsDir = path.join(dist, 'assets');
  if (!fs.existsSync(assetsDir)) return [];
  return fs
    .readdirSync(assetsDir)
    .filter((f) => f.endsWith('.css'))
    .map((f) => path.join(assetsDir, f));
}

function inlineCss() {
  const cssFiles = findCssFiles();
  if (cssFiles.length === 0) {
    console.warn('[prepare-pages] No CSS found in dist/assets');
    return;
  }

  const css = cssFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
  const styleTag = `<style data-wake-css>\n${css}\n</style>`;

  const htmlFiles = walk(dist).filter((f) => f.endsWith('.html'));

  for (const file of htmlFiles) {
    let html = fs.readFileSync(file, 'utf8');

    // Remove built stylesheet links (absolute or relative)
    html = html.replace(
      /<link[^>]+href=["'][^"']*\/?assets\/[^"']+\.css["'][^>]*>\s*/gi,
      '',
    );

    if (html.includes('data-wake-css')) {
      html = html.replace(
        /<style data-wake-css>[\s\S]*?<\/style>/,
        styleTag,
      );
    } else if (html.includes('</head>')) {
      html = html.replace('</head>', `${styleTag}</head>`);
    } else {
      html = styleTag + html;
    }

    fs.writeFileSync(file, html);
  }

  console.log(
    `[prepare-pages] Inlined CSS into ${htmlFiles.length} HTML file(s)`,
  );
}

// GitHub Pages / Jekyll: allow underscore paths if any remain
fs.writeFileSync(path.join(dist, '.nojekyll'), '');

inlineCss();

console.log('[prepare-pages] Ready. Copy EVERYTHING inside dist/ to your Pages repo.');
