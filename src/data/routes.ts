/**
 * Registro único de TODAS las URLs del sitio.
 *
 * El sitemap, robots.txt y llms.txt se generan desde aquí, así que cualquier
 * página nueva aparece automáticamente en los tres sin editar nada más.
 */
import { getAllCityPaths, getAllGeoPaths } from './geo';
import { getAllHubPaths, getAllLandingPaths } from './landings';
import { getBlogPath, posts } from './blog';
import { comparePages, getComparePath } from './compare';
import { locales, paths, type Locale, type PageKey } from '../i18n/config';

export interface RouteEntry {
  path: string;
  locale: Locale;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;
  group:
    | 'core'
    | 'geo-region'
    | 'geo-city'
    | 'landing-hub'
    | 'landing'
    | 'blog'
    | 'compare';
}

const CORE_META: Record<PageKey, { changefreq: RouteEntry['changefreq']; priority: string }> = {
  home: { changefreq: 'weekly', priority: '1.0' },
  health: { changefreq: 'weekly', priority: '0.95' },
  blog: { changefreq: 'weekly', priority: '0.8' },
  legal: { changefreq: 'yearly', priority: '0.4' },
};

export function getAllRoutes(): RouteEntry[] {
  const entries: RouteEntry[] = [];

  // Core pages
  for (const page of Object.keys(paths) as PageKey[]) {
    for (const locale of locales) {
      entries.push({
        path: paths[page][locale],
        locale,
        changefreq: CORE_META[page].changefreq,
        priority: CORE_META[page].priority,
        group: 'core',
      });
    }
  }

  // Coverage hubs
  entries.push(
    { path: '/cobertura', locale: 'es', changefreq: 'weekly', priority: '0.7', group: 'core' },
    { path: '/en/coverage', locale: 'en', changefreq: 'weekly', priority: '0.7', group: 'core' },
  );

  // Country / state landings
  for (const { region, path } of getAllGeoPaths()) {
    entries.push({
      path,
      locale: region.locale,
      changefreq: 'weekly',
      priority: '0.8',
      group: 'geo-region',
    });
  }

  // City landings
  for (const { city, path } of getAllCityPaths()) {
    entries.push({
      path,
      locale: city.region.locale,
      changefreq: 'monthly',
      priority: '0.6',
      group: 'geo-city',
    });
  }

  // Specialty / feature / sector hubs
  for (const { locale, path } of getAllHubPaths()) {
    entries.push({
      path,
      locale,
      changefreq: 'weekly',
      priority: '0.8',
      group: 'landing-hub',
    });
  }

  // Specialty / feature / sector landings
  for (const { locale, path } of getAllLandingPaths()) {
    entries.push({
      path,
      locale,
      changefreq: 'monthly',
      priority: '0.75',
      group: 'landing',
    });
  }

  // Blog posts
  for (const post of posts) {
    for (const locale of locales) {
      entries.push({
        path: getBlogPath(locale, post.slug),
        locale,
        changefreq: 'monthly',
        priority: '0.7',
        group: 'blog',
      });
    }
  }

  // Comparisons
  for (const page of comparePages) {
    for (const locale of locales) {
      entries.push({
        path: getComparePath(locale, page.slug),
        locale,
        changefreq: 'monthly',
        priority: '0.75',
        group: 'compare',
      });
    }
  }

  // De-duplicate defensively (a path should only appear once)
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.path)) return false;
    seen.add(entry.path);
    return true;
  });
}

export function routeCount(): number {
  return getAllRoutes().length;
}
