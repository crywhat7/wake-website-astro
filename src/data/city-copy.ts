import type { GeoCity, GeoPageKind } from './geo';
import { healthPriceLabel, PRICING } from './constants';

export interface CityCopy {
  title: string;
  description: string;
  keywords: string;
  heroTag: string;
  heroSubtitle: string;
  focusTitle: string;
  focusBody: string;
  focusPoints: string[];
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faq: Array<{ q: string; a: string }>;
  citiesLabel: string;
  relatedLabel: string;
  countryLabel: string;
}

/** Deterministic variant picker so neighbouring cities don't share prose. */
function variant(seed: string, buckets: number): number {
  let hash = 7;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 1000003;
  }
  return hash % buckets;
}

/* ==========================================================================
 *  ESPAÑOL
 * ======================================================================== */

function esHealthCity(city: GeoCity): CityCopy {
  const { name, region } = city;
  const country = region.name;
  const v = variant(`${region.slug}-${city.slug}-h`, 3);

  const heroSubtitles = [
    `Organiza pacientes, citas e historial clínico de tu consultorio en ${name} desde un solo sistema, sin depender del papel.`,
    `Software clínico para médicos y clínicas en ${name}: agenda, expediente digital y facturación conectados entre sí.`,
    `Deja atrás las agendas físicas y las hojas sueltas: WAKE Health ordena la operación de tu clínica en ${name}.`,
  ];

  const focusBodies = [
    `Las clínicas de ${name} suelen crecer más rápido que sus procesos: más pacientes, más citas y la misma libreta de recepción. WAKE Health centraliza esa información para que consultorio y administración trabajen sobre el mismo expediente.`,
    `Ya sea un consultorio de un solo médico o un centro con varias especialidades en ${name}, el problema es el mismo: información dispersa. WAKE Health la reúne en una plataforma que tu equipo puede usar desde el primer día.`,
    `En ${name} el tiempo de consulta es el recurso más caro. WAKE Health reduce el tiempo administrativo por paciente para que el equipo médico se concentre en atender, no en buscar papeles.`,
  ];

  const sectionSets = [
    [
      {
        heading: `Qué resuelve WAKE Health en una clínica de ${name}`,
        paragraphs: [
          `El punto de partida casi siempre es el mismo: citas anotadas en distintos lugares, expedientes en carpetas físicas y un cierre de caja que no cuadra con lo atendido. Al centralizar agenda, consulta y cobro en un solo flujo, la clínica deja de reconstruir su propia información al final del día.`,
          `Para un consultorio en ${name} esto significa menos llamadas de confirmación perdidas, historial disponible en segundos durante la consulta y reportes de ingresos que reflejan la operación real.`,
        ],
      },
      {
        heading: 'Implementación sin frenar la atención',
        paragraphs: [
          `La puesta en marcha es gradual: primero pacientes y agenda, luego expediente clínico y finalmente facturación y módulos avanzados. Así el equipo aprende por etapas y la clínica no se detiene.`,
          `Incluye ${PRICING.trialDays} días de prueba gratuita para validar el sistema con pacientes reales antes de pagar.`,
        ],
      },
    ],
    [
      {
        heading: `Agenda y expediente digital para clínicas en ${name}`,
        paragraphs: [
          `La agenda compartida evita que recepción y médicos trabajen con calendarios distintos. Cada cita tiene estado (agendada, confirmada, atendida, cancelada), lo que reduce huecos y dobles reservas en horas pico.`,
          `El expediente digital acompaña al paciente: diagnósticos previos, recetas, exámenes de laboratorio e indicaciones quedan asociados a su historia y disponibles en la siguiente visita.`,
        ],
      },
      {
        heading: 'Control financiero y decisiones con datos',
        paragraphs: [
          `Facturación, servicios y cierre de caja quedan conectados al expediente, de modo que los reportes de ingresos por periodo, por médico o por servicio salen del uso diario y no de una hoja de cálculo aparte.`,
          `Con esa información, una clínica en ${name} puede decidir qué horarios abrir, qué servicios impulsar y dónde se está perdiendo capacidad instalada.`,
        ],
      },
    ],
    [
      {
        heading: `De la libreta al sistema: el cambio en ${name}`,
        paragraphs: [
          `Migrar no significa reescribir años de historia clínica de golpe. La mayoría de clínicas en ${name} empieza registrando a los pacientes activos y va incorporando el resto a medida que vuelven a consulta.`,
          `En pocas semanas la operación diaria ya vive en el sistema, y el papel queda solo como respaldo histórico.`,
        ],
      },
      {
        heading: 'Herramientas que el equipo sí usa',
        paragraphs: [
          `Un sistema clínico solo sirve si recepción lo abre todos los días. Por eso WAKE Health prioriza pantallas simples, búsqueda rápida de pacientes y accesos por rol, en lugar de configuraciones interminables.`,
          `Los módulos de laboratorio, farmacia, diagnóstico asistido por IA y atención directa de emergencias se activan cuando la clínica los necesita.`,
        ],
      },
    ],
  ];

  return {
    title: `Software para Clínicas en ${name}, ${country} | WAKE HEALTH`,
    description: `Sistema médico para clínicas y consultorios en ${name}, ${country}: agenda, expediente clínico digital, facturación y reportes. Prueba gratis ${PRICING.trialDays} días.`,
    keywords: `software clínicas ${name}, sistema médico ${name}, expediente clínico digital ${name}, agenda médica ${name} ${country}, software para doctores ${name}, WAKE Health ${country}`,
    heroTag: `Clínicas en ${name}`,
    heroSubtitle: heroSubtitles[v],
    focusTitle: `Software clínico para consultorios en ${name}`,
    focusBody: focusBodies[v],
    focusPoints: [
      `Agenda médica compartida para clínicas en ${name}`,
      'Expediente clínico digital disponible en segundos',
      'Facturación, caja y reportes conectados al expediente',
    ],
    sections: sectionSets[v],
    faq: [
      {
        q: `¿WAKE Health funciona para clínicas en ${name}?`,
        a: `Sí. WAKE Health es una plataforma web, así que funciona en ${name} y en el resto de ${country} desde computadora, tablet o celular con conexión a internet.`,
      },
      {
        q: `¿Cuánto cuesta el sistema en ${name}?`,
        a: `WAKE Health tiene un plan único de ${healthPriceLabel} al mes con todos los módulos incluidos, más ${PRICING.trialDays} días de prueba gratuita antes de cualquier cobro.`,
      },
      {
        q: '¿Sirve para un consultorio de un solo médico?',
        a: `Sí. El mismo sistema se usa en consultorios individuales y en clínicas con varios especialistas; los módulos se activan según lo que necesite la operación.`,
      },
      {
        q: '¿Puedo migrar la información que ya tengo en papel o Excel?',
        a: 'Sí. Lo habitual es empezar cargando los pacientes activos y su historial reciente, e ir incorporando el resto conforme regresan a consulta.',
      },
    ],
    citiesLabel: 'Otras ciudades con cobertura',
    relatedLabel: `Ver cobertura nacional`,
    countryLabel: country,
  };
}

function esHomeCity(city: GeoCity): CityCopy {
  const { name, region } = city;
  const country = region.name;
  const v = variant(`${region.slug}-${city.slug}-c`, 3);

  const heroSubtitles = [
    `Automatizamos operaciones e integramos software centralizado para empresas en ${name}, ${country}.`,
    `Infraestructura tecnológica para negocios en ${name}: menos tareas manuales, más control y datos confiables.`,
    `Ayudamos a empresas de ${name} a ordenar su operación con sistemas que crecen junto al negocio.`,
  ];

  const focusBodies = [
    `Muchas empresas en ${name} llegan a un punto en que el crecimiento se sostiene con esfuerzo manual: hojas de cálculo, mensajes sueltos y reportes que se arman a mano. Ese es el momento de instalar infraestructura real.`,
    `Trabajamos con equipos administrativos, comerciales y operativos de ${name} para centralizar información y eliminar los pasos que solo existen porque "siempre se hizo así".`,
    `En ${name} la diferencia entre una operación que escala y una que se traba suele estar en los procesos, no en el mercado. Nuestro trabajo es dejar esos procesos claros y automatizados.`,
  ];

  const sectionSets = [
    [
      {
        heading: `Sistematización de procesos en ${name}`,
        paragraphs: [
          `Centralizamos ventas, inventario, facturación y reportes en una sola consola operativa, de forma que cada área trabaje sobre la misma información en lugar de reconciliar versiones distintas.`,
          `El resultado para una empresa en ${name} es visibilidad diaria: qué se vendió, qué queda en existencia y dónde se está perdiendo margen.`,
        ],
      },
      {
        heading: 'Automatización e integración con IA',
        paragraphs: [
          `Eliminamos los cuellos de botella manuales — reenvíos de correo, copiado entre sistemas, reportes armados a mano — e interconectamos las herramientas que la empresa ya usa.`,
          `Cuando tiene sentido, integramos modelos de lenguaje para automatizar atención, clasificación de solicitudes y análisis de información operativa.`,
        ],
      },
    ],
    [
      {
        heading: `Infraestructura tecnológica para empresas de ${name}`,
        paragraphs: [
          `Diseñamos arquitecturas simples de mantener: menos piezas, mejor documentadas y preparadas para absorber más volumen sin rehacerlo todo cada año.`,
          `Eso incluye definir quién accede a qué, cómo se respalda la información y cómo se mide el desempeño de la operación en ${name}.`,
        ],
      },
      {
        heading: 'Implementación por etapas',
        paragraphs: [
          `Auditamos la operación actual, desplegamos de forma modular y acompañamos la adopción del equipo. En ningún momento se detiene la atención al cliente ni la facturación.`,
          `Cada etapa se mide contra indicadores acordados desde el inicio, para que la inversión tecnológica se justifique con números.`,
        ],
      },
    ],
    [
      {
        heading: `Software a la medida cuando el estándar no alcanza`,
        paragraphs: [
          `Hay procesos en ${name} que ningún software de catálogo cubre bien. Para esos casos desarrollamos soluciones construidas alrededor del flujo real del negocio, no al revés.`,
          `El criterio es siempre el mismo: que el sistema reduzca trabajo, no que agregue una pantalla más que llenar.`,
        ],
      },
      {
        heading: 'Consultoría con retorno medible',
        paragraphs: [
          `Antes de escribir código, auditamos dónde se pierde tiempo y dinero. Muchas veces la primera mejora no es un sistema nuevo, sino reordenar lo que ya existe.`,
          `A partir de ahí trazamos una hoja de ruta con prioridades claras para los siguientes trimestres.`,
        ],
      },
    ],
  ];

  return {
    title: `Software Empresarial y Automatización en ${name}, ${country} | WAKE SOLUTIONS`,
    description: `Infraestructura tecnológica, automatización e integración de IA para empresas en ${name}, ${country}. Sistematizamos operaciones para escalar con orden.`,
    keywords: `software empresarial ${name}, automatización ${name}, transformación digital ${name} ${country}, infraestructura tecnológica ${name}, consultoría tecnológica ${country}, WAKE Solutions`,
    heroTag: `${name}, ${country}`,
    heroSubtitle: heroSubtitles[v],
    focusTitle: `Orden operativo para empresas en ${name}`,
    focusBody: focusBodies[v],
    focusPoints: [
      'Centralización de ventas, inventario y administración',
      'Automatización de tareas repetitivas y reportes',
      'Infraestructura lista para absorber más volumen',
    ],
    sections: sectionSets[v],
    faq: [
      {
        q: `¿Atienden empresas ubicadas en ${name}?`,
        a: `Sí. Trabajamos con empresas en ${name} y en el resto de ${country}, de forma remota y presencial según el alcance del proyecto.`,
      },
      {
        q: '¿Con qué tamaño de empresa trabajan?',
        a: 'Desde negocios en crecimiento con equipos pequeños hasta operaciones con varias sucursales. Lo que define el proyecto es la complejidad del proceso, no la cantidad de empleados.',
      },
      {
        q: '¿Cuánto toma una implementación?',
        a: 'Depende del alcance, pero el enfoque es modular: se entregan mejoras utilizables por etapas en lugar de un único lanzamiento al final.',
      },
      {
        q: '¿También ofrecen software para clínicas?',
        a: `Sí. WAKE Health es nuestro producto de gestión clínica, con plan único de ${healthPriceLabel} al mes y ${PRICING.trialDays} días de prueba gratuita.`,
      },
    ],
    citiesLabel: 'Otras ciudades con cobertura',
    relatedLabel: 'Ver cobertura nacional',
    countryLabel: country,
  };
}

/* ==========================================================================
 *  ENGLISH
 * ======================================================================== */

function enHealthCity(city: GeoCity): CityCopy {
  const { name, region } = city;
  const state = region.name;
  const v = variant(`${region.slug}-${city.slug}-h`, 3);

  const heroSubtitles = [
    `Organize patients, appointments, and clinical records for your ${name} practice in one system — no paper required.`,
    `Clinic software for physicians and practices in ${name}: scheduling, digital charts, and billing that talk to each other.`,
    `Leave paper calendars and loose charts behind. WAKE Health brings order to your practice in ${name}.`,
  ];

  const focusBodies = [
    `Practices in ${name} usually outgrow their processes before they outgrow their space: more patients, more appointments, same front-desk notebook. WAKE Health centralizes that information so the exam room and the front office work from one record.`,
    `Whether it is a solo practice or a multi-specialty center in ${name}, the underlying problem is scattered information. WAKE Health pulls it together into a platform staff can use from day one.`,
    `In ${name}, appointment time is the most expensive resource you have. WAKE Health cuts the administrative minutes per patient so clinicians spend them on care instead of paperwork.`,
  ];

  const sectionSets = [
    [
      {
        heading: `What WAKE Health solves for a practice in ${name}`,
        paragraphs: [
          `The starting point is almost always the same: appointments recorded in several places, charts in physical folders, and a daily close that never quite matches what was seen. Putting scheduling, the visit, and payment into one flow means the practice stops reconstructing its own data at the end of the day.`,
          `For a ${name} practice that means fewer missed confirmations, chart history available in seconds during the visit, and revenue reports that reflect what actually happened.`,
        ],
      },
      {
        heading: 'Rollout without interrupting care',
        paragraphs: [
          `Go-live is gradual: patients and scheduling first, then clinical records, then billing and advanced modules. Staff learn in stages and the practice never stops.`,
          `It includes a ${PRICING.trialDays}-day free trial so you can validate the system with real patients before paying.`,
        ],
      },
    ],
    [
      {
        heading: `Scheduling and digital charts for ${name} clinics`,
        paragraphs: [
          `A shared calendar keeps the front desk and physicians off separate schedules. Every appointment carries a state — booked, confirmed, seen, cancelled — which cuts both gaps and double bookings during peak hours.`,
          `The digital chart follows the patient: prior diagnoses, prescriptions, lab results, and instructions stay attached to their history and are ready at the next visit.`,
        ],
      },
      {
        heading: 'Financial control and decisions on real data',
        paragraphs: [
          `Billing, services, and the daily close connect back to the chart, so revenue reports by period, by provider, or by service come out of everyday use rather than a separate spreadsheet.`,
          `With that in hand, a ${name} practice can decide which hours to open, which services to push, and where installed capacity is going unused.`,
        ],
      },
    ],
    [
      {
        heading: `From notebook to system in ${name}`,
        paragraphs: [
          `Migrating does not mean retyping years of charts at once. Most practices in ${name} start by entering active patients and add the rest as they return for care.`,
          `Within a few weeks daily operations live in the system, and paper stays only as a historical backup.`,
        ],
      },
      {
        heading: 'Tools staff will actually open',
        paragraphs: [
          `A clinical system only helps if the front desk opens it every morning. That is why WAKE Health favors simple screens, fast patient search, and role-based access over endless configuration.`,
          `Laboratory, pharmacy, AI-assisted diagnosis, and direct emergency care modules switch on when the practice needs them.`,
        ],
      },
    ],
  ];

  return {
    title: `Clinic Software in ${name}, ${state} | WAKE HEALTH`,
    description: `Practice management software for clinics in ${name}, ${state}: scheduling, digital charts, billing, and reporting. Free ${PRICING.trialDays}-day trial.`,
    keywords: `clinic software ${name}, EHR ${name} ${state}, medical scheduling ${name}, practice management software ${name}, physician software ${state}, WAKE Health`,
    heroTag: `Clinics in ${name}`,
    heroSubtitle: heroSubtitles[v],
    focusTitle: `Clinic software for practices in ${name}`,
    focusBody: focusBodies[v],
    focusPoints: [
      `Shared medical scheduling for ${name} practices`,
      'Digital clinical records available in seconds',
      'Billing, cash, and reporting tied to the chart',
    ],
    sections: sectionSets[v],
    faq: [
      {
        q: `Does WAKE Health work for practices in ${name}?`,
        a: `Yes. WAKE Health is a web platform, so it works in ${name} and anywhere else in ${state} from a computer, tablet, or phone with an internet connection.`,
      },
      {
        q: `How much does the system cost in ${name}?`,
        a: `WAKE Health has a single plan at ${healthPriceLabel} per month with every module included, plus a ${PRICING.trialDays}-day free trial before any charge.`,
      },
      {
        q: 'Is it suitable for a solo practice?',
        a: 'Yes. The same system runs solo practices and multi-specialty clinics; modules are enabled based on what the operation needs.',
      },
      {
        q: 'Can I migrate what I already have on paper or in spreadsheets?',
        a: 'Yes. The usual approach is to load active patients and their recent history first, then add the rest as they come back for care.',
      },
    ],
    citiesLabel: 'Other cities we cover',
    relatedLabel: 'See statewide coverage',
    countryLabel: state,
  };
}

function enHomeCity(city: GeoCity): CityCopy {
  const { name, region } = city;
  const state = region.name;
  const v = variant(`${region.slug}-${city.slug}-c`, 3);

  const heroSubtitles = [
    `We automate operations and deploy centralized software for companies in ${name}, ${state}.`,
    `Technology infrastructure for ${name} businesses: less manual work, more control, data you can trust.`,
    `We help ${name} companies bring order to operations with systems that grow alongside the business.`,
  ];

  const focusBodies = [
    `Many companies in ${name} reach a point where growth is held together by manual effort: spreadsheets, scattered messages, and reports assembled by hand. That is the moment to install real infrastructure.`,
    `We work with administrative, sales, and operations teams across ${name} to centralize information and remove the steps that exist only because "that's how it's always been done."`,
    `In ${name}, the difference between an operation that scales and one that stalls is usually process, not market. Our job is to make those processes explicit and automated.`,
  ];

  const sectionSets = [
    [
      {
        heading: `Process systematization in ${name}`,
        paragraphs: [
          `We centralize sales, inventory, billing, and reporting into one operational console so every area works from the same information instead of reconciling versions.`,
          `For a company in ${name} the result is daily visibility: what sold, what is in stock, and where margin is leaking.`,
        ],
      },
      {
        heading: 'Automation and AI integration',
        paragraphs: [
          `We remove manual bottlenecks — forwarded emails, copying between systems, hand-built reports — and interconnect the tools the company already uses.`,
          `Where it makes sense, we integrate language models to automate support, request triage, and analysis of operational data.`,
        ],
      },
    ],
    [
      {
        heading: `Technology infrastructure for ${name} companies`,
        paragraphs: [
          `We design architectures that are simple to maintain: fewer moving parts, better documented, and ready to absorb more volume without a rebuild every year.`,
          `That includes defining who accesses what, how information is backed up, and how operational performance is measured in ${name}.`,
        ],
      },
      {
        heading: 'Staged implementation',
        paragraphs: [
          `We audit the current operation, deploy modularly, and support team adoption. Customer service and billing never stop along the way.`,
          `Each stage is measured against indicators agreed at the start, so the technology investment is justified in numbers.`,
        ],
      },
    ],
    [
      {
        heading: 'Custom software when off-the-shelf falls short',
        paragraphs: [
          `Some processes in ${name} are not covered well by any catalog product. For those we build solutions around the real business flow rather than the other way around.`,
          `The test is always the same: the system should remove work, not add one more screen to fill in.`,
        ],
      },
      {
        heading: 'Consulting with measurable return',
        paragraphs: [
          `Before writing code, we audit where time and money leak. Often the first improvement is not a new system but reordering what already exists.`,
          `From there we lay out a roadmap with clear priorities for the coming quarters.`,
        ],
      },
    ],
  ];

  return {
    title: `Business Software and Automation in ${name}, ${state} | WAKE SOLUTIONS`,
    description: `Technology infrastructure, automation, and AI integration for companies in ${name}, ${state}. We systematize operations so you can scale with order.`,
    keywords: `business software ${name}, automation ${name} ${state}, digital transformation ${name}, technology infrastructure ${name}, IT consulting ${state}, WAKE Solutions`,
    heroTag: `${name}, ${state}`,
    heroSubtitle: heroSubtitles[v],
    focusTitle: `Operational order for companies in ${name}`,
    focusBody: focusBodies[v],
    focusPoints: [
      'Centralized sales, inventory, and administration',
      'Automation of repetitive tasks and reporting',
      'Infrastructure ready to absorb more volume',
    ],
    sections: sectionSets[v],
    faq: [
      {
        q: `Do you serve companies located in ${name}?`,
        a: `Yes. We work with companies in ${name} and across ${state}, remotely and on-site depending on project scope.`,
      },
      {
        q: 'What size of company do you work with?',
        a: 'From growing businesses with small teams to multi-location operations. Process complexity defines the project, not headcount.',
      },
      {
        q: 'How long does an implementation take?',
        a: 'It depends on scope, but the approach is modular: usable improvements ship in stages rather than in one launch at the end.',
      },
      {
        q: 'Do you also offer clinic software?',
        a: `Yes. WAKE Health is our clinic management product, with a single plan at ${healthPriceLabel} per month and a ${PRICING.trialDays}-day free trial.`,
      },
    ],
    citiesLabel: 'Other cities we cover',
    relatedLabel: 'See statewide coverage',
    countryLabel: state,
  };
}

export function buildCityCopy(city: GeoCity, kind: GeoPageKind): CityCopy {
  if (city.region.locale === 'es') {
    return kind === 'health' ? esHealthCity(city) : esHomeCity(city);
  }
  return kind === 'health' ? enHealthCity(city) : enHomeCity(city);
}
