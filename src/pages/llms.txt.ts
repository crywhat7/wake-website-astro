import type { APIRoute } from 'astro';
import { healthPriceLabel, PRICING, SITE } from '../data/constants';
import { cities, regionsForLocale } from '../data/geo';
import {
  getHubPath,
  getLandingPath,
  seedsForKind,
  type LandingKind,
} from '../data/landings';
import { getBlogPath, posts } from '../data/blog';
import { comparePages, getComparePath } from '../data/compare';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? `${SITE.url}/`).replace(/\/?$/, '/');
  const abs = (path: string) => new URL(path, base).href;

  const esRegions = regionsForLocale('es');
  const enRegions = regionsForLocale('en');
  const esCities = cities.filter((c) => c.region.locale === 'es');
  const enCities = cities.filter((c) => c.region.locale === 'en');

  const landingSection = (kind: LandingKind, heading: string) =>
    [
      `## ${heading}`,
      '',
      ...seedsForKind(kind).map(
        (seed) =>
          `- [${seed.es.name}](${abs(getLandingPath(kind, 'es', seed.slug))}) · [EN](${abs(getLandingPath(kind, 'en', seed.slug))})`,
      ),
      '',
    ].join('\n');

  const body = `# WAKE SOLUTIONS

> Infraestructura tecnológica y software clínico (WAKE HEALTH) para empresas y clínicas en Honduras, Latinoamérica, España y Estados Unidos.

WAKE SOLUTIONS construye tecnología operativa: automatización, sistematización e integración de IA. WAKE HEALTH es el producto de gestión clínica (pacientes, citas, expediente clínico, facturación, laboratorio y diagnóstico asistido por IA).

## Datos clave

- Precio de WAKE HEALTH: ${healthPriceLabel} USD al mes, plan único con todos los módulos incluidos.
- Prueba gratuita: ${PRICING.trialDays} días. No hay reembolsos; la prueba sustituye el período de garantía.
- Idiomas: español (por defecto) e inglés bajo /en.
- Cobertura: ${esRegions.length} países/regiones en español y ${enRegions.length} estados en Estados Unidos, con ${esCities.length + enCities.length} páginas de ciudad.

## Páginas principales

- [Inicio (ES)](${abs('/')}) · [Home (EN)](${abs('/en')})
- [WAKE Health (ES)](${abs('/health')}) · [WAKE Health (EN)](${abs('/en/health')})
- [Cobertura (ES)](${abs('/cobertura')}) · [Coverage (EN)](${abs('/en/coverage')})
- [Blog (ES)](${abs(getBlogPath('es'))}) · [Blog (EN)](${abs(getBlogPath('en'))})
- [Legal y términos (ES)](${abs('/legal')}) · [Legal (EN)](${abs('/en/legal')})

## Hubs

- [Especialidades médicas](${abs(getHubPath('specialty', 'es'))}) · [Specialties](${abs(getHubPath('specialty', 'en'))})
- [Funciones del sistema](${abs(getHubPath('feature', 'es'))}) · [Features](${abs(getHubPath('feature', 'en'))})
- [Soluciones por sector](${abs(getHubPath('sector', 'es'))}) · [Industries](${abs(getHubPath('sector', 'en'))})

${landingSection('specialty', 'Especialidades médicas')}
${landingSection('feature', 'Funciones de WAKE HEALTH')}
${landingSection('sector', 'Sectores atendidos')}
## Países y regiones (ES)

${esRegions.map((r) => `- [${r.name}](${abs(`/${r.slug}`)}) · [clínicas](${abs(`/health/${r.slug}`)})`).join('\n')}

## Estados (EN)

${enRegions.map((r) => `- [${r.name}](${abs(`/en/${r.slug}`)}) · [clinics](${abs(`/en/health/${r.slug}`)})`).join('\n')}

## Blog

${posts.map((post) => `- [${post.es.title}](${abs(getBlogPath('es', post.slug))}) · [EN](${abs(getBlogPath('en', post.slug))})`).join('\n')}

## Comparaciones

${comparePages.map((page) => `- [${page.es.title}](${abs(getComparePath('es', page.slug))}) · [EN](${abs(getComparePath('en', page.slug))})`).join('\n')}

## Contacto

- Sitio web: ${SITE.url}
- Correo: ${SITE.email}
- WhatsApp: ${SITE.whatsappDisplay}

## Opcional

- [Sitemap](${abs('/sitemap.xml')})
- [robots.txt](${abs('/robots.txt')})
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
