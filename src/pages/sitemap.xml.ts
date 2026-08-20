import type { APIRoute } from 'astro';
import { SITE } from '../data/constants';
import { getAllRoutes } from '../data/routes';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? `${SITE.url}/`).replace(/\/?$/, '/');
  const lastmod = new Date().toISOString();

  const urls = getAllRoutes()
    .map(({ path, changefreq, priority }) => {
      const loc = new URL(path, base).href;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
