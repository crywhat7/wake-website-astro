/**
 * Expansión geográfica.
 *
 * `geo.json` contiene las 20 regiones originales con copy escrito a mano.
 * Aquí se agregan:
 *   1. Más ciudades para esas regiones (`extraCities`)
 *   2. Regiones nuevas (`extraRegionFacts`) cuyo copy se arma con plantillas
 *      variadas para que cada landing tenga texto distinto y no duplicado.
 */

export interface RegionFacts {
  slug: string;
  market: 'latam' | 'us';
  locale: 'es' | 'en';
  name: string;
  /** Gentilicio / adjetivo: "empresas hondureñas", "clinics in Texas" */
  demonym: string;
  hreflang: string;
  cities: string[];
}

/* ---------------------------------------------------------------------------
 * 1. Ciudades adicionales para las regiones que ya existen en geo.json
 * ------------------------------------------------------------------------ */
export const extraCities: Record<string, string[]> = {
  honduras: ['El Progreso', 'Comayagua', 'Danlí', 'Puerto Cortés'],
  guatemala: ['Escuintla', 'Huehuetenango', 'Cobán', 'Antigua Guatemala'],
  'el-salvador': ['Mejicanos', 'Apopa', 'Sonsonate', 'Usulután'],
  'costa-rica': ['Liberia', 'Puntarenas', 'Limón', 'Pérez Zeledón'],
  panama: ['Santiago', 'Chitré', 'La Chorrera', 'Penonomé'],
  mexico: ['Tijuana', 'Mérida', 'Querétaro', 'León'],
  colombia: ['Cartagena', 'Bucaramanga', 'Pereira', 'Santa Marta'],
  peru: ['Chiclayo', 'Piura', 'Iquitos', 'Huancayo'],
  'republica-dominicana': ['San Cristóbal', 'Puerto Plata', 'Higüey', 'Moca'],
  ecuador: ['Manta', 'Loja', 'Portoviejo', 'Machala'],
  texas: ['Fort Worth', 'El Paso', 'Laredo', 'McAllen'],
  california: ['Sacramento', 'Fresno', 'Long Beach', 'Bakersfield'],
  florida: ['Fort Lauderdale', 'Hialeah', 'St. Petersburg', 'Cape Coral'],
  'new-york': ['Yonkers', 'Syracuse', 'New Rochelle', 'White Plains'],
  illinois: ['Joliet', 'Springfield', 'Elgin', 'Peoria'],
  arizona: ['Scottsdale', 'Glendale', 'Gilbert', 'Tempe'],
  georgia: ['Macon', 'Athens', 'Sandy Springs', 'Roswell'],
  'north-carolina': ['Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington'],
  'new-jersey': ['Edison', 'Woodbridge', 'Trenton', 'Camden'],
  washington: ['Vancouver', 'Everett', 'Kent', 'Renton'],
};

/* ---------------------------------------------------------------------------
 * 2. Regiones nuevas (solo datos; el copy se genera abajo)
 * ------------------------------------------------------------------------ */
export const extraRegionFacts: RegionFacts[] = [
  {
    slug: 'chile',
    market: 'latam',
    locale: 'es',
    name: 'Chile',
    demonym: 'chilenas',
    hreflang: 'es-CL',
    cities: [
      'Santiago',
      'Valparaíso',
      'Concepción',
      'Viña del Mar',
      'Antofagasta',
      'Temuco',
      'La Serena',
      'Rancagua',
    ],
  },
  {
    slug: 'argentina',
    market: 'latam',
    locale: 'es',
    name: 'Argentina',
    demonym: 'argentinas',
    hreflang: 'es-AR',
    cities: [
      'Buenos Aires',
      'Córdoba',
      'Rosario',
      'Mendoza',
      'La Plata',
      'Mar del Plata',
      'Salta',
      'Tucumán',
    ],
  },
  {
    slug: 'nicaragua',
    market: 'latam',
    locale: 'es',
    name: 'Nicaragua',
    demonym: 'nicaragüenses',
    hreflang: 'es-NI',
    cities: [
      'Managua',
      'León',
      'Granada',
      'Masaya',
      'Chinandega',
      'Matagalpa',
      'Estelí',
      'Jinotega',
    ],
  },
  {
    slug: 'bolivia',
    market: 'latam',
    locale: 'es',
    name: 'Bolivia',
    demonym: 'bolivianas',
    hreflang: 'es-BO',
    cities: [
      'La Paz',
      'Santa Cruz de la Sierra',
      'Cochabamba',
      'Sucre',
      'Oruro',
      'Tarija',
      'Potosí',
      'El Alto',
    ],
  },
  {
    slug: 'paraguay',
    market: 'latam',
    locale: 'es',
    name: 'Paraguay',
    demonym: 'paraguayas',
    hreflang: 'es-PY',
    cities: [
      'Asunción',
      'Ciudad del Este',
      'San Lorenzo',
      'Luque',
      'Encarnación',
      'Capiatá',
      'Lambaré',
      'Fernando de la Mora',
    ],
  },
  {
    slug: 'uruguay',
    market: 'latam',
    locale: 'es',
    name: 'Uruguay',
    demonym: 'uruguayas',
    hreflang: 'es-UY',
    cities: [
      'Montevideo',
      'Salto',
      'Ciudad de la Costa',
      'Paysandú',
      'Las Piedras',
      'Rivera',
      'Maldonado',
      'Punta del Este',
    ],
  },
  {
    slug: 'puerto-rico',
    market: 'latam',
    locale: 'es',
    name: 'Puerto Rico',
    demonym: 'puertorriqueñas',
    hreflang: 'es-PR',
    cities: [
      'San Juan',
      'Bayamón',
      'Carolina',
      'Ponce',
      'Caguas',
      'Mayagüez',
      'Arecibo',
      'Guaynabo',
    ],
  },
  {
    slug: 'venezuela',
    market: 'latam',
    locale: 'es',
    name: 'Venezuela',
    demonym: 'venezolanas',
    hreflang: 'es-VE',
    cities: [
      'Caracas',
      'Maracaibo',
      'Valencia',
      'Barquisimeto',
      'Maracay',
      'Ciudad Guayana',
      'Maturín',
      'Barcelona',
    ],
  },
  {
    slug: 'espana',
    market: 'latam',
    locale: 'es',
    name: 'España',
    demonym: 'españolas',
    hreflang: 'es-ES',
    cities: [
      'Madrid',
      'Barcelona',
      'Valencia',
      'Sevilla',
      'Zaragoza',
      'Málaga',
      'Bilbao',
      'Murcia',
    ],
  },
  {
    slug: 'nevada',
    market: 'us',
    locale: 'en',
    name: 'Nevada',
    demonym: 'Nevada',
    hreflang: 'en-US',
    cities: [
      'Las Vegas',
      'Henderson',
      'Reno',
      'North Las Vegas',
      'Sparks',
      'Carson City',
      'Enterprise',
      'Spring Valley',
    ],
  },
  {
    slug: 'colorado',
    market: 'us',
    locale: 'en',
    name: 'Colorado',
    demonym: 'Colorado',
    hreflang: 'en-US',
    cities: [
      'Denver',
      'Colorado Springs',
      'Aurora',
      'Fort Collins',
      'Lakewood',
      'Thornton',
      'Boulder',
      'Pueblo',
    ],
  },
  {
    slug: 'pennsylvania',
    market: 'us',
    locale: 'en',
    name: 'Pennsylvania',
    demonym: 'Pennsylvania',
    hreflang: 'en-US',
    cities: [
      'Philadelphia',
      'Pittsburgh',
      'Allentown',
      'Erie',
      'Reading',
      'Scranton',
      'Bethlehem',
      'Lancaster',
    ],
  },
  {
    slug: 'massachusetts',
    market: 'us',
    locale: 'en',
    name: 'Massachusetts',
    demonym: 'Massachusetts',
    hreflang: 'en-US',
    cities: [
      'Boston',
      'Worcester',
      'Springfield',
      'Cambridge',
      'Lowell',
      'Brockton',
      'Quincy',
      'New Bedford',
    ],
  },
  {
    slug: 'ohio',
    market: 'us',
    locale: 'en',
    name: 'Ohio',
    demonym: 'Ohio',
    hreflang: 'en-US',
    cities: [
      'Columbus',
      'Cleveland',
      'Cincinnati',
      'Toledo',
      'Akron',
      'Dayton',
      'Parma',
      'Canton',
    ],
  },
  {
    slug: 'michigan',
    market: 'us',
    locale: 'en',
    name: 'Michigan',
    demonym: 'Michigan',
    hreflang: 'en-US',
    cities: [
      'Detroit',
      'Grand Rapids',
      'Warren',
      'Sterling Heights',
      'Ann Arbor',
      'Lansing',
      'Flint',
      'Dearborn',
    ],
  },
  {
    slug: 'tennessee',
    market: 'us',
    locale: 'en',
    name: 'Tennessee',
    demonym: 'Tennessee',
    hreflang: 'en-US',
    cities: [
      'Nashville',
      'Memphis',
      'Knoxville',
      'Chattanooga',
      'Clarksville',
      'Murfreesboro',
      'Franklin',
      'Jackson',
    ],
  },
  {
    slug: 'virginia',
    market: 'us',
    locale: 'en',
    name: 'Virginia',
    demonym: 'Virginia',
    hreflang: 'en-US',
    cities: [
      'Virginia Beach',
      'Norfolk',
      'Chesapeake',
      'Richmond',
      'Arlington',
      'Alexandria',
      'Newport News',
      'Roanoke',
    ],
  },
  {
    slug: 'maryland',
    market: 'us',
    locale: 'en',
    name: 'Maryland',
    demonym: 'Maryland',
    hreflang: 'en-US',
    cities: [
      'Baltimore',
      'Columbia',
      'Germantown',
      'Silver Spring',
      'Rockville',
      'Frederick',
      'Gaithersburg',
      'Annapolis',
    ],
  },
];

/* ---------------------------------------------------------------------------
 * 3. Plantillas de copy
 *    Se elige una variante determinista por slug para que las landings no
 *    compartan exactamente el mismo texto.
 * ------------------------------------------------------------------------ */
function variantIndex(slug: string, buckets: number): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 100000;
  }
  return hash % buckets;
}

function esHome(facts: RegionFacts) {
  const { name, demonym, cities } = facts;
  const [c1, c2, c3] = cities;
  const v = variantIndex(facts.slug, 3);

  const focusBodies = [
    `Trabajamos con equipos que operan en ${c1}, ${c2} y ${c3}: ordenamos ventas, inventario y administración para que la tecnología siga el ritmo del negocio y no al revés.`,
    `Desde comercios hasta operaciones de servicio en ${c1} y ${c2}, diseñamos sistemas que se adaptan a la realidad operativa de ${name}, con despliegue gradual y soporte en español.`,
    `Acompañamos a empresas ${demonym} que ya crecieron más rápido que sus procesos: centralizamos información, eliminamos tareas manuales y damos visibilidad real de resultados en ${c1}, ${c2} y ${c3}.`,
  ];

  const heroSubtitles = [
    `Construimos las bases tecnológicas para empresas ${demonym} que necesitan centralizar procesos y escalar sin caos operativo.`,
    `Automatizamos operaciones, configuramos software centralizado e integramos IA para empresas en ${name}.`,
    `Ayudamos a compañías en ${name} a reducir fricción administrativa y tomar decisiones con datos confiables.`,
  ];

  const focusPointSets = [
    [
      'Arquitecturas simples de mantener y de escalar',
      'Automatización de tareas repetitivas en administración',
      'Integración con las herramientas que ya usas',
    ],
    [
      'Implementación gradual sin frenar ventas ni atención',
      'Procesos claros para inventario, facturación y reportes',
      'Acompañamiento en español durante toda la adopción',
    ],
    [
      'Digitalización de los procesos administrativos clave',
      'Reportes claros para dirección y operaciones',
      'Infraestructura lista para absorber más volumen',
    ],
  ];

  return {
    title: `Infraestructura Tecnológica en ${name} | WAKE SOLUTIONS`,
    description: `Automatización, software empresarial e IA para empresas en ${name}. Orden operativo para negocios en ${c1}, ${c2} y todo el país.`,
    keywords: `software empresarial ${name}, automatización ${c1}, infraestructura tecnológica ${c2}, transformación digital ${name}, WAKE Solutions`,
    heroTag: name,
    heroSubtitle: heroSubtitles[v],
    focusTitle: `Orden operativo para empresas en ${name}`,
    focusBody: focusBodies[v],
    focusPoints: focusPointSets[v],
  };
}

function esHealth(facts: RegionFacts) {
  const { name, demonym, cities } = facts;
  const [c1, c2, c3] = cities;
  const v = variantIndex(facts.slug, 3);

  const focusBodies = [
    `WAKE Health ayuda a consultorios y clínicas en ${name} a dejar el papel y Excel: menos citas perdidas, historial más rápido y mejor visibilidad de ingresos en ${c1}, ${c2} y ${c3}.`,
    `Para centros médicos ${demonym} que quieren profesionalizar la atención sin complicar al equipo con software difícil de usar.`,
    `Pensado para la operación real de una clínica en ${name}: recepción, consulta y administración trabajando sobre la misma información.`,
  ];

  const heroSubtitles = [
    `Organiza pacientes, citas e historial clínico en un solo sistema pensado para clínicas en ${name}.`,
    `Centraliza la operación de tu clínica en ${name}: menos desorden en citas, historial ágil y control financiero claro.`,
    `Da estructura a tu clínica en ${name}: citas organizadas, expediente disponible y finanzas más claras.`,
  ];

  const focusPointSets = [
    [
      'Agenda médica con menos cruces de horarios',
      'Expediente digital accesible desde consultorio o recepción',
      'Facturación y reportes para decidir con datos reales',
    ],
    [
      'Flujo de cita → consulta → historial en un solo lugar',
      'Menos dependencia de papel y archivos dispersos',
      'Visibilidad de ocupación e ingresos por periodo',
    ],
    [
      'Agenda compartida entre recepción y médicos',
      'Historial clínico digital seguro y rápido de consultar',
      'Mejor seguimiento de pagos, servicios y laboratorio',
    ],
  ];

  return {
    title: `Software para Clínicas en ${name} | WAKE HEALTH`,
    description: `Sistema médico para clínicas y consultorios en ${name}: citas, expediente digital, facturación y control operativo. Ideal para ${c1}, ${c2} y el resto del país.`,
    keywords: `software clínicas ${name}, expediente clínico ${c1}, agenda médica ${c2}, sistema para doctores ${name}, WAKE Health`,
    heroTag: `Clínicas en ${name}`,
    heroSubtitle: heroSubtitles[v],
    focusTitle: `Control clínico sin depender del papel en ${name}`,
    focusBody: focusBodies[v],
    focusPoints: focusPointSets[v],
  };
}

function enHome(facts: RegionFacts) {
  const { name, cities } = facts;
  const [c1, c2, c3] = cities;
  const v = variantIndex(facts.slug, 3);

  const focusBodies = [
    `We work with teams operating across ${c1}, ${c2}, and ${c3}: tightening sales, inventory, and admin so technology follows the pace of the business instead of slowing it down.`,
    `From service operations to multi-location businesses in ${c1} and ${c2}, we design systems that fit how ${name} companies actually run, deployed gradually and supported bilingually.`,
    `We partner with ${name} companies that outgrew their processes: centralizing information, removing manual work, and giving leadership real visibility across ${c1}, ${c2}, and ${c3}.`,
  ];

  const heroSubtitles = [
    `We build the technology foundation for ${name} companies that need to centralize processes and scale without operational chaos.`,
    `Automation, centralized software, and AI integration for businesses operating in ${name}.`,
    `We help ${name} organizations cut administrative friction and make decisions on data they can trust.`,
  ];

  const focusPointSets = [
    [
      'Architectures that are simple to maintain and scale',
      'Automation of repetitive administrative work',
      'Integration with the tools your team already uses',
    ],
    [
      'Gradual rollout that never stops sales or service',
      'Clear processes for inventory, billing, and reporting',
      'Bilingual support throughout adoption',
    ],
    [
      'Digitization of core administrative processes',
      'Clear reporting for leadership and operations',
      'Infrastructure ready to absorb more volume',
    ],
  ];

  return {
    title: `Technology Infrastructure in ${name} | WAKE SOLUTIONS`,
    description: `Automation, business software, and AI for companies in ${name}. Operational order for businesses in ${c1}, ${c2}, and statewide.`,
    keywords: `business software ${name}, automation ${c1}, technology infrastructure ${c2}, digital transformation ${name}, WAKE Solutions`,
    heroTag: name,
    heroSubtitle: heroSubtitles[v],
    focusTitle: `Operational order for companies in ${name}`,
    focusBody: focusBodies[v],
    focusPoints: focusPointSets[v],
  };
}

function enHealth(facts: RegionFacts) {
  const { name, cities } = facts;
  const [c1, c2, c3] = cities;
  const v = variantIndex(facts.slug, 3);

  const focusBodies = [
    `WAKE Health helps practices in ${name} move off paper and spreadsheets: fewer missed appointments, faster chart access, and clearer revenue visibility across ${c1}, ${c2}, and ${c3}.`,
    `Built for ${name} medical practices that want to professionalize care without burdening staff with software that is hard to use.`,
    `Designed around how a clinic in ${name} actually runs: front desk, exam room, and administration working from the same record.`,
  ];

  const heroSubtitles = [
    `Organize patients, appointments, and clinical records in one system built for practices in ${name}.`,
    `Centralize your ${name} practice: less scheduling chaos, faster charts, and clear financial control.`,
    `Give your ${name} clinic structure: organized appointments, records on hand, and clearer finances.`,
  ];

  const focusPointSets = [
    [
      'Scheduling with far fewer double bookings',
      'Digital charts available from exam room or front desk',
      'Billing and reports to decide on real numbers',
    ],
    [
      'Appointment → visit → record in a single flow',
      'Less reliance on paper and scattered files',
      'Visibility into utilization and revenue by period',
    ],
    [
      'A shared calendar for front desk and physicians',
      'Secure digital records that load fast',
      'Better tracking of payments, services, and labs',
    ],
  ];

  return {
    title: `Clinic Software in ${name} | WAKE HEALTH`,
    description: `Medical practice software for clinics in ${name}: scheduling, digital charts, billing, and operational control. Built for ${c1}, ${c2}, and statewide practices.`,
    keywords: `clinic software ${name}, EHR ${c1}, medical scheduling ${c2}, practice management ${name}, WAKE Health`,
    heroTag: `Clinics in ${name}`,
    heroSubtitle: heroSubtitles[v],
    focusTitle: `Clinical control without paper in ${name}`,
    focusBody: focusBodies[v],
    focusPoints: focusPointSets[v],
  };
}

export function buildRegionFromFacts(facts: RegionFacts) {
  const isEs = facts.locale === 'es';
  return {
    slug: facts.slug,
    market: facts.market,
    locale: facts.locale,
    name: facts.name,
    hreflang: facts.hreflang,
    cities: facts.cities,
    home: isEs ? esHome(facts) : enHome(facts),
    health: isEs ? esHealth(facts) : enHealth(facts),
  };
}
