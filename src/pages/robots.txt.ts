import type { APIRoute } from 'astro';
import { SITE } from '../data/constants';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? `${SITE.url}/`).replace(/\/?$/, '/');

  const body = `User-agent: *
Allow: /

# Asistentes de IA: contexto del sitio en llms.txt
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: ${new URL('sitemap.xml', base).href}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
