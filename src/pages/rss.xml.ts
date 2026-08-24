import type { APIRoute } from 'astro';
import { SITE } from '../data/constants';
import { buildRss } from '../data/rss';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? `${SITE.url}/`).replace(/\/?$/, '/');
  return new Response(buildRss('es', base), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
