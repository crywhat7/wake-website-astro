import type { Locale } from '../i18n';

/**
 * Prueba social del homepage.
 *
 * IMPORTANTE: solo datos reales y verificables. Si el arreglo de un idioma está
 * vacío, la sección `Proof` no se renderiza — nunca se muestran testimonios
 * de relleno. Cada caso debería poder respaldarse con el cliente si lo piden.
 */
export interface CaseStudyMetric {
  /** Cifra concreta: "-40%", "2 semanas", "3x". */
  value: string;
  /** Qué mide esa cifra. */
  label: string;
}

export interface CaseStudy {
  /** Nombre real del cliente. */
  client: string;
  /** Rubro o industria. */
  industry: string;
  /** Qué se implementó, en una frase. */
  summary: string;
  /** Cita textual del cliente. */
  quote: string;
  /** Quién lo dice. */
  author: string;
  /** Cargo de quien lo dice. */
  role: string;
  /** Entre 1 y 3 métricas. */
  metrics: CaseStudyMetric[];
}

export const caseStudies: Record<Locale, CaseStudy[]> = {
  es: [],
  en: [],
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return caseStudies[locale] ?? [];
}
