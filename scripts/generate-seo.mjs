import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://wake.solutions';
const publicDir = path.resolve('public');
const geoPath = path.resolve('src/data/geo.json');

const locales = ['es', 'en'];

const corePaths = {
  home: { es: '/', en: '/en' },
  health: { es: '/health', en: '/en/health' },
  blog: { es: '/blog', en: '/en/blog' },
  legal: { es: '/legal', en: '/en/legal' },
};

const coreMeta = {
  home: { changefreq: 'weekly', priority: '1.0' },
  health: { changefreq: 'weekly', priority: '0.9' },
  blog: { changefreq: 'weekly', priority: '0.85' },
  legal: { changefreq: 'yearly', priority: '0.5' },
};

const blogSlugs = [
  'sistema-para-clinicas-orden-operativo',
  'soluciones-tecnologicas-empresas-clinicas',
];

const compareSlugs = ['wake-health-vs-excel', 'wake-health-vs-paper'];

function absoluteUrl(pathname) {
  return new URL(pathname, `${SITE}/`).href;
}

function geoUrl(kind, region) {
  if (region.locale === 'es') {
    return kind === 'home' ? `/${region.slug}` : `/health/${region.slug}`;
  }
  return kind === 'home' ? `/en/${region.slug}` : `/en/health/${region.slug}`;
}

function compareUrl(locale, slug) {
  return locale === 'es' ? `/comparar/${slug}` : `/en/compare/${slug}`;
}

function urlEntry(loc, changefreq, priority, lastmod) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function buildSitemap() {
  const lastmod = new Date().toISOString();
  const regions = JSON.parse(fs.readFileSync(geoPath, 'utf8'));
  const entries = [];

  for (const page of Object.keys(corePaths)) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          absoluteUrl(corePaths[page][locale]),
          coreMeta[page].changefreq,
          coreMeta[page].priority,
          lastmod,
        ),
      );
    }
  }

  for (const region of regions) {
    for (const kind of ['home', 'health']) {
      entries.push(urlEntry(absoluteUrl(geoUrl(kind, region)), 'weekly', '0.8', lastmod));
    }
  }

  for (const slug of blogSlugs) {
    entries.push(urlEntry(absoluteUrl(`/blog/${slug}`), 'monthly', '0.75', lastmod));
    entries.push(urlEntry(absoluteUrl(`/en/blog/${slug}`), 'monthly', '0.75', lastmod));
  }

  for (const slug of compareSlugs) {
    entries.push(urlEntry(absoluteUrl(compareUrl('es', slug)), 'monthly', '0.8', lastmod));
    entries.push(urlEntry(absoluteUrl(compareUrl('en', slug)), 'monthly', '0.8', lastmod));
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
}

function buildLlmsTxt() {
  return `# WAKE SOLUTIONS

> Technology infrastructure and clinic software (WAKE Health) for businesses and medical practices across Honduras, Latin America, and the United States.

WAKE SOLUTIONS builds operational technology: automation, systematization, and software. WAKE Health is the clinic management product (patients, scheduling, clinical records, billing).

## Primary pages

- [Home (ES)](${SITE}/): Corporate site in Spanish
- [Home (EN)](${SITE}/en): Corporate site in English
- [WAKE Health (ES)](${SITE}/health): Clinic software product page
- [WAKE Health (EN)](${SITE}/en/health): Clinic software product page (EN)
- [Blog (ES)](${SITE}/blog): Guides on clinic systems and tech solutions
- [Blog (EN)](${SITE}/en/blog): Same blog in English
- [Legal (ES)](${SITE}/legal): Terms, privacy, refund policy
- [Legal (EN)](${SITE}/en/legal): Legal policies in English

## Comparisons

- [WAKE Health vs Excel (ES)](${SITE}/comparar/wake-health-vs-excel)
- [WAKE Health vs Excel (EN)](${SITE}/en/compare/wake-health-vs-excel)
- [WAKE Health vs paper (ES)](${SITE}/comparar/wake-health-vs-paper)
- [WAKE Health vs paper (EN)](${SITE}/en/compare/wake-health-vs-paper)

## Blog posts

- [Clinic system / operational order (ES)](${SITE}/blog/sistema-para-clinicas-orden-operativo)
- [Clinic system / operational order (EN)](${SITE}/en/blog/sistema-para-clinicas-orden-operativo)
- [Tech solutions for businesses & clinics (ES)](${SITE}/blog/soluciones-tecnologicas-empresas-clinicas)
- [Tech solutions for businesses & clinics (EN)](${SITE}/en/blog/soluciones-tecnologicas-empresas-clinicas)

## Contact

- Website: ${SITE}
- Email: ventas@wake.solutions
- WhatsApp: +504 3329-2869

## Optional

- [Sitemap](${SITE}/sitemap.xml)
- [robots.txt](${SITE}/robots.txt)
`;
}

const sitemap = buildSitemap();
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), buildRobots());
fs.writeFileSync(path.join(publicDir, 'llms.txt'), buildLlmsTxt());

const urlCount = (sitemap.match(/<loc>/g) || []).length;
console.log('[generate-seo] Wrote public/sitemap.xml');
console.log('[generate-seo] Wrote public/robots.txt');
console.log('[generate-seo] Wrote public/llms.txt');
console.log(`[generate-seo] ${urlCount} URLs · classic sitemap (no xhtml namespace)`);
