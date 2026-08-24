import { SEO, SITE } from './constants';
import { getBlogPath, getPostLocale, posts, type BlogLocale } from './blog';

/** Escapa texto para XML (RSS rompe con `&` y `<` sin escapar). */
function esc(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[
        c
      ]!,
  );
}

/**
 * Feed RSS 2.0 del blog.
 *
 * Sirve para dos cosas: agregadores clásicos y, sobre todo, para que
 * rastreadores y asistentes de IA descubran los artículos nuevos sin esperar
 * a que Google recorra el sitemap.
 */
export function buildRss(locale: BlogLocale, base: string): string {
  const site = base.replace(/\/?$/, '/');
  const feedUrl = new URL(
    locale === 'en' ? 'en/rss.xml' : 'rss.xml',
    site,
  ).href;
  const blogUrl = new URL(getBlogPath(locale), site).href;

  const title =
    locale === 'en' ? `${SITE.name} — Blog` : `${SITE.name} — Blog`;
  const description =
    locale === 'en'
      ? 'Practical articles on clinic software, digital records and operations for LATAM and the US.'
      : 'Artículos prácticos sobre software clínico, expediente digital y operación para Latinoamérica y Estados Unidos.';

  const sorted = [...posts].sort((a, b) =>
    b.published.localeCompare(a.published),
  );

  const items = sorted
    .map((post) => {
      const copy = getPostLocale(post, locale);
      const url = new URL(getBlogPath(locale, post.slug), site).href;
      const pubDate = new Date(`${post.published}T09:00:00Z`).toUTCString();
      const body = copy.sections
        .map(
          (s) =>
            `<h2>${esc(s.heading)}</h2>` +
            s.paragraphs.map((p) => `<p>${esc(p)}</p>`).join(''),
        )
        .join('');

      return `    <item>
      <title>${esc(copy.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${esc(copy.description)}</description>
      <category>${esc(post.category[locale])}</category>
      <dc:creator>${esc(SITE.name)}</dc:creator>
      <content:encoded><![CDATA[${body}]]></content:encoded>
    </item>`;
    })
    .join('\n');

  const lastBuild = new Date().toUTCString();
  const ogImage = new URL(SEO.ogImage.replace(/^\//, ''), site).href;

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${esc(title)}</title>
    <link>${blogUrl}</link>
    <description>${esc(description)}</description>
    <language>${locale === 'en' ? 'en-us' : 'es-hn'}</language>
    <copyright>© ${SITE.copyrightYear} ${esc(SITE.name)}</copyright>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <generator>Astro</generator>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${ogImage}</url>
      <title>${esc(title)}</title>
      <link>${blogUrl}</link>
    </image>
${items}
  </channel>
</rss>
`;
}
