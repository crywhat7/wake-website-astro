import { healthPriceLabel, PRICING } from './constants';
import {
  allLandingSeeds,
  featureSeeds,
  sectorSeeds,
  specialtySeeds,
  type LandingKind,
  type LandingSeed,
} from './landing-seeds';
import type { Locale } from '../i18n/config';

export type { LandingKind, LandingSeed };

export interface LandingBenefit {
  icon: string;
  title: string;
  desc: string;
}

export interface LandingCopy {
  name: string;
  title: string;
  description: string;
  keywords: string;
  tag: string;
  h1: string;
  intro: string[];
  benefitsTitle: string;
  benefits: LandingBenefit[];
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faqTitle: string;
  faq: Array<{ q: string; a: string }>;
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  relatedTitle: string;
  breadcrumbRoot: string;
}

/* ==========================================================================
 *  RUTAS
 * ======================================================================== */

const HUB_SEGMENT: Record<LandingKind, Record<Locale, string>> = {
  specialty: { es: 'especialidades', en: 'en/specialties' },
  feature: { es: 'funciones', en: 'en/features' },
  sector: { es: 'soluciones', en: 'en/solutions' },
};

export function getHubPath(kind: LandingKind, locale: Locale): string {
  return `/${HUB_SEGMENT[kind][locale]}`;
}

export function getLandingPath(
  kind: LandingKind,
  locale: Locale,
  slug: string,
): string {
  return `${getHubPath(kind, locale)}/${slug}`;
}

export function seedsForKind(kind: LandingKind): LandingSeed[] {
  if (kind === 'specialty') return specialtySeeds;
  if (kind === 'feature') return featureSeeds;
  return sectorSeeds;
}

/** Which product a landing kind belongs to — drives CTAs and theme */
export function productForKind(kind: LandingKind): 'health' | 'core' {
  return kind === 'sector' ? 'core' : 'health';
}

/* ==========================================================================
 *  HUBS
 * ======================================================================== */

export interface HubCopy {
  title: string;
  description: string;
  keywords: string;
  tag: string;
  h1: string;
  intro: string;
  listTitle: string;
}

const HUB_COPY: Record<LandingKind, Record<Locale, HubCopy>> = {
  specialty: {
    es: {
      title: 'Software Médico por Especialidad | WAKE HEALTH',
      description:
        'WAKE Health adaptado a cada especialidad médica: pediatría, dermatología, odontología, ginecología, psicología, nutrición y más. Un solo sistema, plan único.',
      keywords:
        'software médico por especialidad, sistema para pediatras, software dermatología, sistema odontológico, software ginecología, WAKE Health',
      tag: 'Especialidades',
      h1: 'Software clínico para cada especialidad',
      intro:
        'Una clínica de pediatría no opera igual que un laboratorio ni que un centro de fisioterapia. WAKE Health es el mismo sistema, configurado alrededor de lo que cada especialidad realmente registra y cobra.',
      listTitle: 'Especialidades que atendemos',
    },
    en: {
      title: 'Medical Software by Specialty | WAKE HEALTH',
      description:
        'WAKE Health tailored to each medical specialty: pediatrics, dermatology, dentistry, OB-GYN, psychology, nutrition, and more. One system, one plan.',
      keywords:
        'specialty medical software, pediatric EHR, dermatology software, dental practice software, OB-GYN software, WAKE Health',
      tag: 'Specialties',
      h1: 'Clinic software for every specialty',
      intro:
        'A pediatric practice does not run like a lab or a physical therapy center. WAKE Health is the same system, configured around what each specialty actually records and bills.',
      listTitle: 'Specialties we serve',
    },
  },
  feature: {
    es: {
      title: 'Funciones del Sistema Clínico | WAKE HEALTH',
      description:
        'Expediente clínico electrónico, agenda médica, recetas digitales, facturación, laboratorio, farmacia, diagnóstico con IA y más. Todas las funciones de WAKE Health.',
      keywords:
        'expediente clínico electrónico, agenda médica online, recetas digitales, facturación médica, diagnóstico con IA, módulo de laboratorio, WAKE Health',
      tag: 'Funciones',
      h1: 'Todo lo que hace WAKE Health',
      intro:
        'Cada módulo resuelve un punto concreto de la operación clínica, y todos comparten el mismo expediente. No hay integraciones que mantener ni información duplicada entre sistemas.',
      listTitle: 'Módulos y funciones',
    },
    en: {
      title: 'Clinic System Features | WAKE HEALTH',
      description:
        'Electronic health records, medical scheduling, digital prescriptions, billing, laboratory, pharmacy, AI-assisted diagnosis, and more. Every WAKE Health feature.',
      keywords:
        'electronic health records, medical scheduling software, e-prescribing, medical billing, AI diagnosis, laboratory module, WAKE Health',
      tag: 'Features',
      h1: 'Everything WAKE Health does',
      intro:
        'Each module solves a concrete point in clinical operations, and all of them share the same chart. There are no integrations to maintain and no information duplicated across systems.',
      listTitle: 'Modules and features',
    },
  },
  sector: {
    es: {
      title: 'Soluciones Tecnológicas por Sector | WAKE SOLUTIONS',
      description:
        'Automatización, software e infraestructura tecnológica para clínicas, retail, restaurantes, logística, manufactura, educación y más sectores en LATAM y USA.',
      keywords:
        'soluciones tecnológicas por sector, software retail, software restaurantes, software logística, automatización manufactura, WAKE Solutions',
      tag: 'Sectores',
      h1: 'Soluciones por sector',
      intro:
        'El problema operativo cambia según el rubro: en retail es el inventario, en un restaurante el costo por platillo, en una clínica el expediente. Estas son las soluciones que construimos para cada uno.',
      listTitle: 'Sectores que atendemos',
    },
    en: {
      title: 'Technology Solutions by Industry | WAKE SOLUTIONS',
      description:
        'Automation, software, and technology infrastructure for clinics, retail, restaurants, logistics, manufacturing, education, and more across LATAM and the USA.',
      keywords:
        'technology solutions by industry, retail software, restaurant software, logistics software, manufacturing automation, WAKE Solutions',
      tag: 'Industries',
      h1: 'Solutions by industry',
      intro:
        'The operational problem changes with the industry: inventory in retail, cost per dish in a restaurant, the chart in a clinic. These are the solutions we build for each of them.',
      listTitle: 'Industries we serve',
    },
  },
};

export function getHubCopy(kind: LandingKind, locale: Locale): HubCopy {
  return HUB_COPY[kind][locale];
}

/* ==========================================================================
 *  CONSTRUCCIÓN DEL COPY DE CADA LANDING
 * ======================================================================== */

const SHARED_BENEFITS: Record<
  'health' | 'core',
  Record<Locale, LandingBenefit[]>
> = {
  health: {
    es: [
      {
        icon: 'fa-notes-medical',
        title: 'Expediente único',
        desc: 'Toda la historia del paciente en un solo lugar, disponible durante la consulta sin buscar en carpetas.',
      },
      {
        icon: 'fa-calendar-check',
        title: 'Agenda compartida',
        desc: 'Recepción y profesionales sobre el mismo calendario, con estados de cita y menos horarios cruzados.',
      },
      {
        icon: 'fa-file-invoice-dollar',
        title: 'Control financiero',
        desc: 'Cobros, servicios y cierre de caja conectados al expediente, con reportes de ingresos por periodo.',
      },
    ],
    en: [
      {
        icon: 'fa-notes-medical',
        title: 'One chart',
        desc: 'The whole patient history in one place, available during the visit without digging through folders.',
      },
      {
        icon: 'fa-calendar-check',
        title: 'Shared schedule',
        desc: 'Front desk and providers on the same calendar, with appointment states and fewer conflicts.',
      },
      {
        icon: 'fa-file-invoice-dollar',
        title: 'Financial control',
        desc: 'Charges, services, and the daily close tied to the chart, with revenue reports by period.',
      },
    ],
  },
  core: {
    es: [
      {
        icon: 'fa-layer-group',
        title: 'Información centralizada',
        desc: 'Una sola fuente de verdad para operaciones, ventas y administración en lugar de versiones paralelas.',
      },
      {
        icon: 'fa-bolt',
        title: 'Automatización real',
        desc: 'Eliminamos los pasos manuales que solo existen para mover información de un sistema a otro.',
      },
      {
        icon: 'fa-chart-line',
        title: 'Decisiones con datos',
        desc: 'Reportes que salen del uso diario del sistema, no de hojas de cálculo armadas a fin de mes.',
      },
    ],
    en: [
      {
        icon: 'fa-layer-group',
        title: 'Centralized information',
        desc: 'One source of truth for operations, sales, and administration instead of parallel versions.',
      },
      {
        icon: 'fa-bolt',
        title: 'Real automation',
        desc: 'We remove the manual steps that exist only to move information from one system to another.',
      },
      {
        icon: 'fa-chart-line',
        title: 'Decisions on data',
        desc: 'Reports that come out of daily system use, not spreadsheets assembled at month end.',
      },
    ],
  },
};

/**
 * Título corto para la tarjeta de beneficio: toma la primera cláusula del
 * punto y la recorta en un límite de palabra, nunca a mitad de una.
 */
function shortTitle(point: string, max = 42): string {
  const clause = point.split(/[:,;(]/)[0].trim();
  if (clause.length <= max) return clause;
  const words = clause.split(' ');
  const out: string[] = [];
  for (const word of words) {
    if ([...out, word].join(' ').length > max) break;
    out.push(word);
  }
  return (out.length > 0 ? out.join(' ') : words[0]) + '…';
}

const BENEFIT_ICONS = ['fa-circle-check', 'fa-arrow-trend-up'];

const KIND_LABEL: Record<LandingKind, Record<Locale, string>> = {
  specialty: { es: 'Especialidad', en: 'Specialty' },
  feature: { es: 'Función', en: 'Feature' },
  sector: { es: 'Sector', en: 'Industry' },
};

function esCopy(seed: LandingSeed): LandingCopy {
  const c = seed.es;
  const product = productForKind(seed.kind);
  const isHealth = product === 'health';
  const brand = isHealth ? 'WAKE HEALTH' : 'WAKE SOLUTIONS';

  const h1 =
    seed.kind === 'specialty'
      ? `Software para ${c.name}`
      : seed.kind === 'feature'
        ? c.name
        : `Tecnología para ${c.name}`;

  const title =
    seed.kind === 'specialty'
      ? `Software para ${c.name} | Sistema Clínico ${brand}`
      : seed.kind === 'feature'
        ? `${c.name} | ${brand}`
        : `Soluciones Tecnológicas para ${c.name} | ${brand}`;

  const description =
    seed.kind === 'feature'
      ? `${c.name} en WAKE Health: ${c.points[0].toLowerCase()}. Plan único de ${healthPriceLabel} al mes con ${PRICING.trialDays} días de prueba gratuita.`
      : isHealth
        ? `Sistema clínico para ${c.audience}: ${c.points[0].toLowerCase()}. Plan único de ${healthPriceLabel} al mes y ${PRICING.trialDays} días de prueba gratuita.`
        : `Software, automatización e infraestructura tecnológica para ${c.audience}. ${c.points[0]}.`;

  return {
    name: c.name,
    title,
    description,
    keywords: `${c.keywords}, ${brand}, Honduras, Latinoamérica`,
    tag: KIND_LABEL[seed.kind].es,
    h1,
    intro: [
      `En la práctica, el problema recurrente es este: ${c.pain}. Ese detalle parece menor hasta que se multiplica por cada día de operación.`,
      isHealth
        ? `WAKE Health aborda ese punto sin obligar al equipo a aprender un sistema complicado. Todo vive sobre el mismo expediente, con plan único de ${healthPriceLabel} al mes y ${PRICING.trialDays} días de prueba gratuita antes de pagar.`
        : `WAKE Solutions ordena esa operación con software centralizado, automatización de los pasos repetitivos y una implementación gradual que no detiene el negocio.`,
    ],
    benefitsTitle:
      seed.kind === 'feature' ? 'Qué incluye' : 'Qué resuelve para tu operación',
    benefits: [
      ...c.points.map((point, i) => ({
        icon: i === 0 ? seed.icon : BENEFIT_ICONS[i - 1],
        title: shortTitle(point),
        desc: point,
      })),
      ...SHARED_BENEFITS[product].es,
    ],
    sections: [
      {
        heading: 'Por qué el papel y las hojas de cálculo dejan de alcanzar',
        paragraphs: [
          `Excel y las libretas funcionan bien al inicio porque son flexibles y no cuestan nada. El problema aparece con el volumen: aparecen versiones distintas del mismo archivo, se pierde el rastro de quién cambió qué y la información deja de ser confiable justo cuando más se necesita.`,
          `Para ${c.audience}, esa pérdida de confianza en los datos se traduce en tiempo perdido reconstruyendo información que ya existía.`,
        ],
      },
      {
        heading: isHealth
          ? 'Cómo se implementa sin frenar la atención'
          : 'Cómo se implementa sin frenar la operación',
        paragraphs: [
          isHealth
            ? `La puesta en marcha es por etapas: primero pacientes y agenda, después expediente clínico y finalmente facturación y módulos avanzados. El equipo aprende de a poco y la clínica nunca se detiene.`
            : `Auditamos la operación actual, desplegamos de forma modular y acompañamos la adopción. Cada etapa entrega algo utilizable en lugar de esperar a un único lanzamiento final.`,
          isHealth
            ? `Los ${PRICING.trialDays} días de prueba gratuita están pensados justamente para eso: validar el sistema con la operación real antes de comprometer un pago.`
            : `El criterio de éxito se define antes de empezar, con indicadores concretos sobre tiempo ahorrado, errores reducidos o visibilidad ganada.`,
        ],
      },
      {
        heading: `Qué cambia en el día a día de ${c.audience}`,
        paragraphs: [
          `${c.points[1]}. ${c.points[2]}. Son cambios pequeños vistos de uno en uno, pero juntos eliminan la mayor parte del trabajo administrativo que hoy consume horas del equipo.`,
          isHealth
            ? `Y como todo comparte el mismo expediente, no hay que mantener integraciones ni copiar datos entre herramientas distintas.`
            : `Y como todo comparte la misma base de información, los reportes dejan de armarse a mano y salen del uso normal del sistema.`,
        ],
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      isHealth
        ? {
            q: `¿Cuánto cuesta WAKE Health para ${c.audience}?`,
            a: `Es un plan único de ${healthPriceLabel} al mes con todos los módulos incluidos, sin importar la especialidad. Incluye ${PRICING.trialDays} días de prueba gratuita antes de cualquier cobro.`,
          }
        : {
            q: `¿Cómo se cotiza un proyecto para ${c.audience}?`,
            a: 'Partimos de una auditoría corta de la operación actual para definir alcance y prioridades. A partir de ahí se cotiza por etapas, no como un único proyecto cerrado.',
          },
      {
        q: '¿Hay que instalar algo?',
        a: 'No. El sistema funciona desde el navegador en computadora, tablet o celular, con respaldos automáticos en la nube.',
      },
      {
        q: '¿Se puede migrar la información que ya tenemos?',
        a: 'Sí. Lo habitual es cargar primero lo que está activo y agregar el histórico de forma progresiva, sin detener la operación.',
      },
      isHealth
        ? {
            q: '¿Sirve si somos un solo profesional?',
            a: 'Sí. El mismo sistema se usa en consultorios individuales y en clínicas con varios especialistas; los módulos se activan según lo que se necesite.',
          }
        : {
            q: '¿Trabajan con empresas fuera de Honduras?',
            a: 'Sí. Atendemos empresas en Centroamérica, Latinoamérica, España y Estados Unidos, de forma remota y presencial según el alcance.',
          },
    ],
    ctaTitle: isHealth
      ? `Prueba WAKE Health en tu operación`
      : 'Hablemos de tu operación',
    ctaBody: isHealth
      ? `${PRICING.trialDays} días de prueba gratuita, sin tarjeta de crédito. Después, plan único de ${healthPriceLabel} al mes con todo incluido.`
      : 'Analizamos tus procesos actuales y te decimos con claridad qué conviene automatizar primero.',
    ctaPrimary: isHealth ? 'Probar el sistema' : 'Hablar por WhatsApp',
    ctaSecondary: isHealth ? 'Ver planes' : 'Ver soluciones',
    relatedTitle:
      seed.kind === 'specialty'
        ? 'Otras especialidades'
        : seed.kind === 'feature'
          ? 'Otras funciones'
          : 'Otros sectores',
    breadcrumbRoot: HUB_COPY[seed.kind].es.tag,
  };
}

function enCopy(seed: LandingSeed): LandingCopy {
  const c = seed.en;
  const product = productForKind(seed.kind);
  const isHealth = product === 'health';
  const brand = isHealth ? 'WAKE HEALTH' : 'WAKE SOLUTIONS';

  const h1 =
    seed.kind === 'specialty'
      ? `${c.name} Software`
      : seed.kind === 'feature'
        ? c.name
        : `Technology for ${c.name}`;

  const title =
    seed.kind === 'specialty'
      ? `${c.name} Software | ${brand} Clinic System`
      : seed.kind === 'feature'
        ? `${c.name} | ${brand}`
        : `Technology Solutions for ${c.name} | ${brand}`;

  const description =
    seed.kind === 'feature'
      ? `${c.name} in WAKE Health: ${c.points[0].toLowerCase()}. Single plan at ${healthPriceLabel} per month with a ${PRICING.trialDays}-day free trial.`
      : isHealth
        ? `Clinic system for ${c.audience}: ${c.points[0].toLowerCase()}. Single plan at ${healthPriceLabel} per month and a ${PRICING.trialDays}-day free trial.`
        : `Software, automation, and technology infrastructure for ${c.audience}. ${c.points[0]}.`;

  return {
    name: c.name,
    title,
    description,
    keywords: `${c.keywords}, ${brand}, Latin America, United States`,
    tag: KIND_LABEL[seed.kind].en,
    h1,
    intro: [
      `In practice the recurring problem is this: ${c.pain}. It looks minor until you multiply it by every day of operation.`,
      isHealth
        ? `WAKE Health addresses that without forcing staff to learn a complicated system. Everything lives on the same chart, at a single plan of ${healthPriceLabel} per month with a ${PRICING.trialDays}-day free trial before you pay.`
        : `WAKE Solutions brings order with centralized software, automation of the repetitive steps, and a staged rollout that never stops the business.`,
    ],
    benefitsTitle:
      seed.kind === 'feature' ? 'What it includes' : 'What it solves for you',
    benefits: [
      ...c.points.map((point, i) => ({
        icon: i === 0 ? seed.icon : BENEFIT_ICONS[i - 1],
        title: shortTitle(point),
        desc: point,
      })),
      ...SHARED_BENEFITS[product].en,
    ],
    sections: [
      {
        heading: 'Why paper and spreadsheets stop being enough',
        paragraphs: [
          `Spreadsheets and notebooks work well early on because they are flexible and free. The trouble starts with volume: different versions of the same file appear, nobody can tell who changed what, and the data stops being trustworthy exactly when it matters most.`,
          `For ${c.audience}, that loss of confidence turns into time spent rebuilding information that already existed.`,
        ],
      },
      {
        heading: isHealth
          ? 'How it rolls out without interrupting care'
          : 'How it rolls out without interrupting operations',
        paragraphs: [
          isHealth
            ? `Go-live happens in stages: patients and scheduling first, then clinical records, then billing and advanced modules. Staff learn gradually and the clinic never stops.`
            : `We audit the current operation, deploy modularly, and support adoption. Each stage delivers something usable instead of waiting for one final launch.`,
          isHealth
            ? `The ${PRICING.trialDays}-day free trial exists for exactly this: validating the system against real operations before committing to a payment.`
            : `Success criteria are defined before we start, with concrete indicators on time saved, errors reduced, or visibility gained.`,
        ],
      },
      {
        heading: `What changes day to day for ${c.audience}`,
        paragraphs: [
          `${c.points[1]}. ${c.points[2]}. Taken one at a time these are small changes, but together they remove most of the administrative work that currently eats into the team's hours.`,
          isHealth
            ? `And because everything shares the same chart, there are no integrations to maintain and no copying data between separate tools.`
            : `And because everything shares the same information base, reports stop being assembled by hand and fall out of normal system use.`,
        ],
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      isHealth
        ? {
            q: `How much does WAKE Health cost for ${c.audience}?`,
            a: `It is a single plan at ${healthPriceLabel} per month with every module included, regardless of specialty. It comes with a ${PRICING.trialDays}-day free trial before any charge.`,
          }
        : {
            q: `How is a project for ${c.audience} scoped?`,
            a: 'We start with a short audit of the current operation to define scope and priorities. From there it is quoted in stages rather than as one closed project.',
          },
      {
        q: 'Is there anything to install?',
        a: 'No. The system runs in the browser on desktop, tablet, or phone, with automatic cloud backups.',
      },
      {
        q: 'Can we migrate the information we already have?',
        a: 'Yes. The usual approach is to load what is active first and add history progressively, without stopping operations.',
      },
      isHealth
        ? {
            q: 'Does it work if we are a solo practice?',
            a: 'Yes. The same system runs solo practices and multi-specialty clinics; modules are enabled based on what is needed.',
          }
        : {
            q: 'Do you work with companies outside Honduras?',
            a: 'Yes. We serve companies across Central America, Latin America, Spain, and the United States, remotely and on-site depending on scope.',
          },
    ],
    ctaTitle: isHealth
      ? 'Try WAKE Health on your own operation'
      : 'Let’s talk about your operation',
    ctaBody: isHealth
      ? `A ${PRICING.trialDays}-day free trial, no credit card. After that, a single plan at ${healthPriceLabel} per month with everything included.`
      : 'We review your current processes and tell you plainly what is worth automating first.',
    ctaPrimary: isHealth ? 'Try the system' : 'Chat on WhatsApp',
    ctaSecondary: isHealth ? 'See pricing' : 'See solutions',
    relatedTitle:
      seed.kind === 'specialty'
        ? 'Other specialties'
        : seed.kind === 'feature'
          ? 'Other features'
          : 'Other industries',
    breadcrumbRoot: HUB_COPY[seed.kind].en.tag,
  };
}

export function buildLandingCopy(
  seed: LandingSeed,
  locale: Locale,
): LandingCopy {
  return locale === 'es' ? esCopy(seed) : enCopy(seed);
}

/** Every landing URL, for the sitemap and internal linking */
export function getAllLandingPaths(): Array<{
  kind: LandingKind;
  locale: Locale;
  slug: string;
  path: string;
}> {
  const locales: Locale[] = ['es', 'en'];
  return allLandingSeeds.flatMap((seed) =>
    locales.map((locale) => ({
      kind: seed.kind,
      locale,
      slug: seed.slug,
      path: getLandingPath(seed.kind, locale, seed.slug),
    })),
  );
}

export function getAllHubPaths(): Array<{
  kind: LandingKind;
  locale: Locale;
  path: string;
}> {
  const kinds: LandingKind[] = ['specialty', 'feature', 'sector'];
  const locales: Locale[] = ['es', 'en'];
  return kinds.flatMap((kind) =>
    locales.map((locale) => ({ kind, locale, path: getHubPath(kind, locale) })),
  );
}

export { allLandingSeeds, featureSeeds, sectorSeeds, specialtySeeds };
