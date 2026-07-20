import type { Locale } from '../i18n';

export interface CompareRow {
  criterion: string;
  alternative: string;
  wake: string;
}

export interface CompareLocale {
  title: string;
  description: string;
  keywords: string;
  tag: string;
  subtitle: string;
  alternativeLabel: string;
  wakeLabel: string;
  intro: string[];
  rows: CompareRow[];
  sections: Array<{ heading: string; paragraphs: string[] }>;
  verdictTitle: string;
  verdictBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  otherCompareLabel: string;
}

export interface ComparePage {
  slug: string;
  es: CompareLocale;
  en: CompareLocale;
  otherSlug: string;
}

export const comparePages: ComparePage[] = [
  {
    slug: 'wake-health-vs-excel',
    otherSlug: 'wake-health-vs-paper',
    es: {
      title: 'WAKE Health vs Excel | Sistema para clínicas vs hojas de cálculo',
      description:
        'Compara WAKE Health con Excel para clínicas: agenda, expediente, facturación y control operativo. Por qué las hojas de cálculo dejan de escalar.',
      keywords:
        'WAKE Health vs Excel, software clínicas vs Excel, expediente clínico Excel, sistema médico vs hojas de cálculo, digitalizar clínica',
      tag: 'Comparación',
      subtitle:
        'Excel ayuda a empezar. Un sistema clínico ayuda a operar sin perder citas, historiales ni control.',
      alternativeLabel: 'Excel',
      wakeLabel: 'WAKE Health',
      intro: [
        'Muchas clínicas en Honduras, Centroamérica, Latinoamérica y Estados Unidos arrancan con Excel porque es familiar y barato. El problema aparece cuando crecen: varias hojas, versiones distintas, errores de tipeo y cero trazabilidad clínica.',
        'Esta comparación resume diferencias prácticas entre gestionar una clínica en hojas de cálculo y hacerlo con WAKE Health.',
      ],
      rows: [
        {
          criterion: 'Agenda y citas',
          alternative: 'Hojas, colores y recordatorios manuales; fácil chocar horarios.',
          wake: 'Agenda centralizada, estados de cita y menos doble booking.',
        },
        {
          criterion: 'Expediente clínico',
          alternative: 'Archivos sueltos, columnas improvisadas, difícil de auditar.',
          wake: 'Historial estructurado por paciente, accesible en consulta.',
        },
        {
          criterion: 'Equipo multi-usuario',
          alternative: 'Copias locales o OneDrive con conflictos de versión.',
          wake: 'Un sistema compartido para recepción, médicos y administración.',
        },
        {
          criterion: 'Facturación y caja',
          alternative: 'Tablas separadas; conciliación lenta al cierre del día.',
          wake: 'Flujo administrativo alineado a la atención del paciente.',
        },
        {
          criterion: 'Seguridad y respaldo',
          alternative: 'Depende de quién guarde el archivo y dónde.',
          wake: 'Acceso controlado y operación pensada para continuidad.',
        },
        {
          criterion: 'Escalabilidad',
          alternative: 'Se vuelve frágil al sumar sedes, médicos o volumen.',
          wake: 'Crece con la clínica sin multiplicar hojas y procesos.',
        },
      ],
      sections: [
        {
          heading: '¿Cuándo Excel todavía tiene sentido?',
          paragraphs: [
            'Si eres un consultorio muy pequeño, con un solo profesional y poco volumen, Excel puede servir como puente temporal para listas simples.',
            'Deja de ser suficiente cuando hay recepción, varios médicos, historiales que deben consultarse rápido o reportes que nadie confía del todo.',
          ],
        },
        {
          heading: 'Qué gana una clínica al salir de Excel',
          paragraphs: [
            'Menos tiempo buscando información, menos errores entre turnos y más claridad de ocupación e ingresos. El equipo deja de “arreglar la hoja” y vuelve a atender.',
            'WAKE Health está diseñado para ese salto: digitalizar agenda, pacientes y operación clínica sin depender de archivos frágiles.',
          ],
        },
      ],
      verdictTitle: 'Veredicto',
      verdictBody:
        'Excel es una herramienta general. WAKE Health es un sistema para clínicas. Si tu operación ya depende de varias hojas, el costo oculto ya es mayor que el de un software clínico.',
      ctaPrimary: 'Probar WAKE Health',
      ctaSecondary: 'Ver vs papel',
      otherCompareLabel: 'También puedes comparar WAKE Health con el papel',
    },
    en: {
      title: 'WAKE Health vs Excel | Clinic software vs spreadsheets',
      description:
        'Compare WAKE Health with Excel for clinics: scheduling, records, billing, and operational control—and why spreadsheets stop scaling.',
      keywords:
        'WAKE Health vs Excel, clinic software vs Excel, medical records spreadsheet, EHR vs Excel, digitize clinic',
      tag: 'Comparison',
      subtitle:
        'Excel helps you start. A clinic system helps you run without losing appointments, charts, or control.',
      alternativeLabel: 'Excel',
      wakeLabel: 'WAKE Health',
      intro: [
        'Many clinics across Latin America and the United States start with Excel because it is familiar and inexpensive. Problems appear with growth: multiple sheets, conflicting versions, typing errors, and weak clinical traceability.',
        'This page compares running a clinic on spreadsheets versus running it on WAKE Health.',
      ],
      rows: [
        {
          criterion: 'Scheduling',
          alternative: 'Sheets, colors, and manual reminders; easy double-booking.',
          wake: 'Centralized calendar, appointment states, fewer conflicts.',
        },
        {
          criterion: 'Clinical records',
          alternative: 'Loose files and improvised columns; hard to audit.',
          wake: 'Structured patient history available during the visit.',
        },
        {
          criterion: 'Multi-user teams',
          alternative: 'Local copies or shared drives with version clashes.',
          wake: 'One shared system for front desk, providers, and admin.',
        },
        {
          criterion: 'Billing and cash close',
          alternative: 'Separate tables; slow end-of-day reconciliation.',
          wake: 'Admin flow aligned with patient care.',
        },
        {
          criterion: 'Security and backup',
          alternative: 'Depends on who stores the file and where.',
          wake: 'Controlled access and continuity-oriented operation.',
        },
        {
          criterion: 'Scalability',
          alternative: 'Gets fragile as providers, sites, or volume grow.',
          wake: 'Grows with the clinic without multiplying spreadsheets.',
        },
      ],
      sections: [
        {
          heading: 'When Excel still makes sense',
          paragraphs: [
            'For a very small solo practice with low volume, Excel can be a temporary bridge for simple lists.',
            'It stops being enough once you have front desk staff, multiple providers, charts that must be found quickly, or reports nobody fully trusts.',
          ],
        },
        {
          heading: 'What clinics gain by leaving Excel',
          paragraphs: [
            'Less time hunting for information, fewer handoff errors, and clearer occupancy and revenue visibility. The team stops “fixing the sheet” and returns to care.',
            'WAKE Health is built for that shift: digitize scheduling, patients, and clinic operations without fragile files.',
          ],
        },
      ],
      verdictTitle: 'Verdict',
      verdictBody:
        'Excel is a general-purpose tool. WAKE Health is clinic software. If your operation already depends on multiple sheets, the hidden cost is already higher than a clinic system.',
      ctaPrimary: 'Try WAKE Health',
      ctaSecondary: 'See vs paper',
      otherCompareLabel: 'You can also compare WAKE Health with paper workflows',
    },
  },
  {
    slug: 'wake-health-vs-paper',
    otherSlug: 'wake-health-vs-excel',
    es: {
      title: 'WAKE Health vs papel | Digitalizar la clínica sin perder control',
      description:
        'Compara WAKE Health con procesos en papel: citas, expedientes y administración. Por qué el papel frena clínicas en LATAM y USA.',
      keywords:
        'WAKE Health vs papel, digitalizar clínica, expediente papel, agenda médica manual, software clínico vs papel',
      tag: 'Comparación',
      subtitle:
        'El papel es inmediato. Un sistema clínico es buscable, compartible y medible.',
      alternativeLabel: 'Papel',
      wakeLabel: 'WAKE Health',
      intro: [
        'Libretas, fichas y carpetas todavía sostienen muchas clínicas. Funcionan… hasta que un expediente no aparece, una cita se anota mal o nadie sabe la ocupación real de la semana.',
        'Aquí comparamos la operación en papel frente a WAKE Health, con foco en velocidad de atención y control administrativo.',
      ],
      rows: [
        {
          criterion: 'Búsqueda de información',
          alternative: 'Buscar en carpetas y libretas; minutos que se acumulan.',
          wake: 'Paciente e historial en segundos desde un solo lugar.',
        },
        {
          criterion: 'Continuidad entre turnos',
          alternative: 'Notas incompletas o ilegibles entre recepción y médico.',
          wake: 'Misma fuente de verdad para todo el equipo.',
        },
        {
          criterion: 'Pérdida o daño',
          alternative: 'Hojas extraviadas, humedad, archivos incompletos.',
          wake: 'Registro digital disponible cuando lo necesitas.',
        },
        {
          criterion: 'Reportes y decisión',
          alternative: 'Contar a mano; poca visibilidad de no-shows e ingresos.',
          wake: 'Operación con datos para priorizar y mejorar.',
        },
        {
          criterion: 'Espacio y orden',
          alternative: 'Archivos físicos que crecen sin control.',
          wake: 'Expediente digital sin saturar la clínica.',
        },
        {
          criterion: 'Experiencia del paciente',
          alternative: 'Esperas por trámites y re-registro manual.',
          wake: 'Flujo más ágil desde la recepción hasta la consulta.',
        },
      ],
      sections: [
        {
          heading: 'El papel no es “gratis”',
          paragraphs: [
            'El costo real del papel está en el tiempo del equipo: reescribir datos, buscar historiales y corregir errores de agenda. Ese tiempo no aparece en una factura, pero sí en la capacidad de atender.',
            'Digitalizar no significa complicar la clínica: significa mover la misma información a un flujo que no se pierde entre turnos.',
          ],
        },
        {
          heading: 'Cómo migrar sin frenar la atención',
          paragraphs: [
            'La ruta práctica es gradual: primero agenda y pacientes, luego historial y administración. Así el equipo adopta el sistema mientras sigue atendiendo.',
            'WAKE Health está pensado para clínicas que quieren salir del papel con orden operativo, en Latinoamérica y Estados Unidos.',
          ],
        },
      ],
      verdictTitle: 'Veredicto',
      verdictBody:
        'El papel sirve para anotar. WAKE Health sirve para operar. Si tu clínica ya siente fricción buscando fichas o cruzando citas, el siguiente paso es un sistema clínico.',
      ctaPrimary: 'Probar WAKE Health',
      ctaSecondary: 'Ver vs Excel',
      otherCompareLabel: 'También puedes comparar WAKE Health con Excel',
    },
    en: {
      title: 'WAKE Health vs paper | Digitize the clinic without losing control',
      description:
        'Compare WAKE Health with paper workflows: appointments, charts, and admin. Why paper slows clinics across LATAM and the USA.',
      keywords:
        'WAKE Health vs paper, digitize clinic, paper medical records, manual scheduling, clinic software vs paper',
      tag: 'Comparison',
      subtitle:
        'Paper is immediate. A clinic system is searchable, shareable, and measurable.',
      alternativeLabel: 'Paper',
      wakeLabel: 'WAKE Health',
      intro: [
        'Notebooks, charts, and folders still run many clinics. They work—until a record goes missing, an appointment is written wrong, or nobody knows true weekly occupancy.',
        'This page compares paper operations with WAKE Health, focused on care speed and administrative control.',
      ],
      rows: [
        {
          criterion: 'Finding information',
          alternative: 'Searching folders and notebooks; minutes that add up.',
          wake: 'Patient and history in seconds from one place.',
        },
        {
          criterion: 'Handoffs between shifts',
          alternative: 'Incomplete or illegible notes between front desk and providers.',
          wake: 'One source of truth for the whole team.',
        },
        {
          criterion: 'Loss or damage',
          alternative: 'Misplaced sheets, damaged files, incomplete charts.',
          wake: 'Digital record available when you need it.',
        },
        {
          criterion: 'Reporting and decisions',
          alternative: 'Manual counts; weak visibility into no-shows and revenue.',
          wake: 'Operations with data to prioritize and improve.',
        },
        {
          criterion: 'Space and order',
          alternative: 'Physical archives that grow without control.',
          wake: 'Digital charts without cluttering the clinic.',
        },
        {
          criterion: 'Patient experience',
          alternative: 'Waits caused by paperwork and re-registration.',
          wake: 'A smoother flow from front desk to consultation.',
        },
      ],
      sections: [
        {
          heading: 'Paper is not “free”',
          paragraphs: [
            'The real cost of paper is staff time: rewriting data, hunting charts, and fixing schedule mistakes. That time does not show up as a line item, but it does limit capacity.',
            'Digitizing does not mean complicating care—it means moving the same information into a flow that does not get lost between shifts.',
          ],
        },
        {
          heading: 'How to migrate without stopping care',
          paragraphs: [
            'The practical path is gradual: scheduling and patients first, then records and admin. Teams adopt while care continues.',
            'WAKE Health is built for clinics that want to leave paper behind with operational order across Latin America and the United States.',
          ],
        },
      ],
      verdictTitle: 'Verdict',
      verdictBody:
        'Paper is for jotting things down. WAKE Health is for running the clinic. If your team already feels friction finding charts or coordinating appointments, the next step is clinic software.',
      ctaPrimary: 'Try WAKE Health',
      ctaSecondary: 'See vs Excel',
      otherCompareLabel: 'You can also compare WAKE Health with Excel',
    },
  },
];

export function getCompare(slug: string): ComparePage | undefined {
  return comparePages.find((p) => p.slug === slug);
}

export function getComparePath(locale: Locale, slug?: string): string {
  const base = locale === 'es' ? '/comparar' : '/en/compare';
  return slug ? `${base}/${slug}` : base;
}

export function getCompareLocale(page: ComparePage, locale: Locale): CompareLocale {
  return locale === 'es' ? page.es : page.en;
}
