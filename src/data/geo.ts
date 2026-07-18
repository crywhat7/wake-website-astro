import geoJson from './geo.json';

export type GeoMarket = 'latam' | 'us';
export type GeoLocale = 'es' | 'en';
export type GeoPageKind = 'home' | 'health';

export interface GeoCopy {
  title: string;
  description: string;
  keywords: string;
  heroTag: string;
  heroSubtitle: string;
  focusTitle: string;
  focusBody: string;
  focusPoints: string[];
}

export interface GeoRegion {
  slug: string;
  market: GeoMarket;
  locale: GeoLocale;
  name: string;
  hreflang: string;
  cities: string[];
  home: GeoCopy;
  health: GeoCopy;
}

export const regions = geoJson as GeoRegion[];

export const latamRegions = regions.filter((r) => r.market === 'latam');
export const usRegions = regions.filter((r) => r.market === 'us');

export function getRegion(slug: string, locale: GeoLocale): GeoRegion | undefined {
  return regions.find((r) => r.slug === slug && r.locale === locale);
}

export function getGeoPath(
  kind: GeoPageKind,
  region: Pick<GeoRegion, 'slug' | 'locale'>,
): string {
  if (region.locale === 'es') {
    return kind === 'home' ? `/${region.slug}` : `/health/${region.slug}`;
  }
  return kind === 'home' ? `/en/${region.slug}` : `/en/health/${region.slug}`;
}

export function getAllGeoPaths(): Array<{
  kind: GeoPageKind;
  region: GeoRegion;
  path: string;
}> {
  return regions.flatMap((region) =>
    (['home', 'health'] as GeoPageKind[]).map((kind) => ({
      kind,
      region,
      path: getGeoPath(kind, region),
    })),
  );
}
