import { defaultLocale, type Locale } from './config';
import { en } from './ui/en';
import { es, type Dictionary } from './ui/es';

export const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function t(locale: string): Dictionary {
  const resolved = (locale === 'en' ? 'en' : 'es') as Locale;
  return getDictionary(resolved);
}

export type { Dictionary };
export {
  defaultLocale,
  getAlternateUrls,
  getLocalizedPath,
  localeBcp47,
  localeLabels,
  locales,
  ogLocale,
  paths,
  type Locale,
  type PageKey,
} from './config';
