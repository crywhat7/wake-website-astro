import type { APIRoute } from 'astro';
import { SEO, SITE } from '../data/constants';

/**
 * Web App Manifest.
 *
 * Además de habilitar "Añadir a pantalla de inicio", Google lo usa para el
 * nombre corto en resultados móviles y Lighthouse penaliza su ausencia
 * (y Lighthouse alimenta las métricas que sí influyen en posicionamiento).
 */
export const GET: APIRoute = () => {
  const manifest = {
    name: SITE.name,
    short_name: 'WAKE',
    description:
      'Software a la medida y sistemas para clínicas y empresas en Honduras, Latinoamérica y Estados Unidos.',
    id: '/',
    start_url: '/?utm_source=pwa',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: SEO.themeColor,
    theme_color: SEO.themeColor,
    lang: 'es-HN',
    dir: 'ltr',
    categories: ['business', 'productivity', 'medical'],
    icons: [
      { src: '/favicon-96.png', sizes: '96x96', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      {
        src: '/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      { name: 'WAKE Health', url: '/health' },
      { name: 'Blog', url: '/blog' },
      { name: 'Cobertura', url: '/cobertura' },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
