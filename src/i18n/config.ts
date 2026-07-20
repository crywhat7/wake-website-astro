export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeBcp47: Record<Locale, string> = {
  es: 'es-HN',
  en: 'en-US',
};

export const ogLocale: Record<Locale, string> = {
  es: 'es_HN',
  en: 'en_US',
};

export const localeLabels: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
};

export type PageKey = 'home' | 'health' | 'blog' | 'legal';

export const paths: Record<PageKey, Record<Locale, string>> = {
  home: { es: '/', en: '/en' },
  health: { es: '/health', en: '/en/health' },
  blog: { es: '/blog', en: '/en/blog' },
  legal: { es: '/legal', en: '/en/legal' },
};

export function getLocalizedPath(page: PageKey, locale: Locale): string {
  return paths[page][locale];
}

export function getAlternateUrls(page: PageKey, siteUrl: string) {
  return locales.map((locale) => ({
    locale,
    href: new URL(paths[page][locale], siteUrl).href,
    hreflang: localeBcp47[locale],
  }));
}
