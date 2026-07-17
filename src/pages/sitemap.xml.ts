import type { APIRoute } from 'astro';
import { paths, localeBcp47, locales, type PageKey } from '../i18n/config';

const pages: PageKey[] = ['home', 'health'];

const meta: Record<PageKey, { changefreq: string; priority: string }> = {
  home: { changefreq: 'weekly', priority: '1.0' },
  health: { changefreq: 'weekly', priority: '0.9' },
};

function absoluteUrl(site: string, path: string) {
  return new URL(path, site.endsWith('/') ? site : `${site}/`).href;
}

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.href ?? 'https://wake.solutions';
  const lastmod = new Date().toISOString();

  const urls = pages
    .flatMap((page) =>
      locales.map((locale) => {
        const loc = absoluteUrl(siteUrl, paths[page][locale]);
        const alternates = locales
          .map((alt) => {
            const href = absoluteUrl(siteUrl, paths[page][alt]);
            return `    <xhtml:link rel="alternate" hreflang="${localeBcp47[alt]}" href="${href}"/>`;
          })
          .concat([
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(siteUrl, paths[page].es)}"/>`,
          ])
          .join('\n');

        return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${meta[page].changefreq}</changefreq>
    <priority>${meta[page].priority}</priority>
${alternates}
  </url>`;
      }),
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
