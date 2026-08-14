import geoJson from './geo.json';
import {
  buildRegionFromFacts,
  extraCities,
  extraRegionFacts,
} from './geo-extra';

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

export interface GeoCity {
  /** URL-safe city slug, e.g. "san-pedro-sula" */
  slug: string;
  /** Display name, e.g. "San Pedro Sula" */
  name: string;
  region: GeoRegion;
}

/** "Ciudad de Guatemala" → "ciudad-de-guatemala" */
export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const baseRegions = (geoJson as GeoRegion[]).map((region) => ({
  ...region,
  cities: [...region.cities, ...(extraCities[region.slug] ?? [])],
}));

const generatedRegions = extraRegionFacts.map(
  (facts) => buildRegionFromFacts(facts) as GeoRegion,
);

export const regions: GeoRegion[] = [...baseRegions, ...generatedRegions];

export const latamRegions = regions.filter((r) => r.market === 'latam');
export const usRegions = regions.filter((r) => r.market === 'us');

export function regionsForLocale(locale: GeoLocale): GeoRegion[] {
  return locale === 'es' ? latamRegions : usRegions;
}

export function getRegion(
  slug: string,
  locale: GeoLocale,
): GeoRegion | undefined {
  return regions.find((r) => r.slug === slug && r.locale === locale);
}

/** Every city of every region, flattened, with a back-reference to its region */
export const cities: GeoCity[] = regions.flatMap((region) =>
  region.cities.map((name) => ({
    slug: slugify(name),
    name,
    region,
  })),
);

export function citiesForRegion(region: GeoRegion): GeoCity[] {
  return cities.filter((c) => c.region.slug === region.slug);
}

/** Other cities in the same region — used for internal linking */
export function siblingCities(city: GeoCity, limit = 7): GeoCity[] {
  return cities
    .filter((c) => c.region.slug === city.region.slug && c.slug !== city.slug)
    .slice(0, limit);
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

export function getCityPath(kind: GeoPageKind, city: GeoCity): string {
  const { region } = city;
  if (region.locale === 'es') {
    return kind === 'home'
      ? `/${region.slug}/${city.slug}`
      : `/health/${region.slug}/${city.slug}`;
  }
  return kind === 'home'
    ? `/en/${region.slug}/${city.slug}`
    : `/en/health/${region.slug}/${city.slug}`;
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

export function getAllCityPaths(): Array<{
  kind: GeoPageKind;
  city: GeoCity;
  path: string;
}> {
  return cities.flatMap((city) =>
    (['home', 'health'] as GeoPageKind[]).map((kind) => ({
      kind,
      city,
      path: getCityPath(kind, city),
    })),
  );
}
