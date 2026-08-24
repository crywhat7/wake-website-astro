import type { APIRoute } from 'astro';
import { SEO } from '../data/constants';

/** Tiles de Windows / Edge anclado. Pequeño, pero es una de las piezas que
 *  auditorías como Lighthouse y Ahrefs marcan como faltante. */
export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/icon-192.png"/>
      <square310x310logo src="/icon-512.png"/>
      <TileColor>${SEO.themeColor}</TileColor>
    </tile>
  </msapplication>
</browserconfig>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
