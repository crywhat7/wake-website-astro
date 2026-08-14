import { PRICING, healthPriceLabel } from '../../data/constants';

export const es = {
  common: {
    company: 'WAKE SOLUTIONS',
    healthProduct: 'WAKE HEALTH',
    language: 'Idioma',
    switchTo: 'English',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    learnMore: 'Saber más',
    blog: 'Blog',
    home: 'Inicio',
  },
  blog: {
    tag: 'Recursos',
    title: 'Blog WAKE',
    subtitle:
      'Guías prácticas sobre sistemas para clínicas, automatización y soluciones tecnológicas en Latinoamérica y Estados Unidos.',
    seo: {
      title: 'Blog WAKE | Software clínico, automatización y soluciones tecnológicas',
      description:
        'Artículos sobre sistemas para clínicas, infraestructura tecnológica y automatización para empresas en Honduras, LATAM y USA.',
      keywords:
        'blog software clínicas, automatización LATAM, soluciones tecnológicas empresas, WAKE Health, WAKE Solutions',
    },
  },
  legal: {
    tag: 'Legal',
    title: 'Políticas legales',
    subtitle: 'Transparencia, privacidad y seguridad para nuestros usuarios.',
    updated: 'Última actualización: Agosto 2026',
    backHome: 'Volver al inicio',
    seo: {
      title: 'Políticas Legales | WAKE SOLUTIONS',
      description:
        'Términos y condiciones, política de privacidad y política de reembolso de WAKE Solutions y WAKE Health.',
      keywords:
        'términos WAKE Solutions, política de privacidad, reembolso, cancelación, legal Wake Health',
    },
    sections: [
      {
        id: 'terms',
        title: '1. Términos y Condiciones',
        blocks: [
          {
            heading: 'Uso del servicio',
            paragraphs: [
              'Los servicios digitales proporcionados por Wake Solutions están diseñados para apoyar la gestión, organización y operación de negocios mediante herramientas tecnológicas accesibles desde internet.',
            ],
          },
          {
            heading: 'Acceso y cuentas',
            paragraphs: [
              'El usuario es responsable de mantener la confidencialidad de sus credenciales y del uso realizado desde su cuenta.',
            ],
          },
          {
            heading: 'Disponibilidad del servicio',
            paragraphs: [
              'Nos esforzamos por mantener nuestros servicios disponibles de forma continua; sin embargo, pueden existir interrupciones temporales por mantenimiento o fallas técnicas.',
            ],
          },
          {
            heading: 'Propiedad intelectual',
            paragraphs: [
              'Todo el contenido, software, diseño, estructura y marcas pertenecen a Wake Solutions.',
            ],
          },
          {
            heading: 'Uso indebido',
            paragraphs: [],
            list: [
              'Actividades ilícitas',
              'Intentos de vulnerar la seguridad',
              'Copiar o modificar el software sin autorización',
              'Uso malicioso de la plataforma',
            ],
          },
          {
            heading: 'Limitación de responsabilidad',
            paragraphs: [
              'Wake Solutions no será responsable por pérdidas indirectas derivadas del uso incorrecto del sistema.',
            ],
          },
        ],
      },
      {
        id: 'privacy',
        title: '2. Política de Privacidad',
        blocks: [
          {
            heading: 'Información recopilada',
            paragraphs: [],
            list: [
              'Nombre',
              'Correo electrónico',
              'Número telefónico',
              'Información empresarial',
              'Datos generados dentro del sistema',
            ],
          },
          {
            heading: 'Uso de la información',
            paragraphs: [
              'La información recopilada se utiliza para brindar acceso al sistema, soporte técnico y mejorar la experiencia del usuario.',
            ],
          },
          {
            heading: 'Protección de datos',
            paragraphs: [
              'Implementamos medidas técnicas y administrativas orientadas a proteger la información de accesos no autorizados.',
            ],
          },
          {
            heading: 'Cookies',
            paragraphs: [
              'Nuestros servicios pueden utilizar cookies para mejorar la navegación y experiencia del usuario.',
            ],
          },
        ],
      },
      {
        id: 'health-terms',
        title: '3. Términos y Condiciones de WAKE HEALTH',
        blocks: [
          {
            heading: 'Objeto del servicio',
            paragraphs: [
              'WAKE HEALTH es una plataforma de gestión clínica ofrecida por Wake Solutions bajo modalidad de suscripción mensual. Permite administrar pacientes, citas, expediente clínico, facturación y módulos operativos relacionados.',
              'WAKE HEALTH es una herramienta administrativa y de apoyo. No sustituye el juicio clínico del profesional de la salud ni constituye un dispositivo médico, y sus funciones asistidas por inteligencia artificial son sugerencias de apoyo cuya validación final corresponde siempre al profesional tratante.',
            ],
          },
          {
            heading: 'Cuentas y perfiles de usuario',
            paragraphs: [
              'La clínica contratante es responsable de crear, administrar y revocar los accesos de su personal. Cada usuario debe contar con credenciales individuales e intransferibles; el uso compartido de cuentas es responsabilidad exclusiva de la clínica.',
            ],
          },
          {
            heading: 'Datos de pacientes y confidencialidad',
            paragraphs: [
              'La clínica contratante es la responsable del tratamiento de los datos de sus pacientes y declara contar con el consentimiento y la base legal necesarios para registrarlos en la plataforma. Wake Solutions actúa como encargado del tratamiento y procesa dicha información únicamente para prestar el servicio.',
              'Wake Solutions no vende ni comercializa información clínica de pacientes, y aplica medidas técnicas y administrativas orientadas a proteger la confidencialidad de los registros.',
            ],
          },
          {
            heading: 'Suscripción, facturación y renovación',
            paragraphs: [
              'La suscripción de WAKE HEALTH se cobra de forma mensual y se renueva automáticamente hasta que el usuario la cancele. Los pagos se procesan a través de nuestro proveedor de pagos autorizado.',
              'Los precios pueden actualizarse; cualquier cambio se notificará con antelación razonable y aplicará a partir del siguiente ciclo de facturación.',
            ],
          },
          {
            heading: 'Disponibilidad, respaldos y soporte',
            paragraphs: [
              'El servicio se presta en modalidad web y puede requerir ventanas de mantenimiento. Se realizan respaldos periódicos de la información, sin que ello constituya una garantía absoluta de recuperación ante eventos de fuerza mayor.',
              'La clínica puede solicitar una exportación de su información mientras la suscripción se encuentre activa.',
            ],
          },
          {
            heading: 'Uso aceptable',
            paragraphs: [],
            list: [
              'No registrar información falsa o de pacientes inexistentes',
              'No utilizar la plataforma para fines distintos a la gestión clínica',
              'No intentar acceder a datos de otras clínicas o cuentas',
              'No revender, replicar ni realizar ingeniería inversa del sistema',
            ],
          },
          {
            heading: 'Terminación',
            paragraphs: [
              'La clínica puede cancelar en cualquier momento desde su cuenta o solicitándolo por los canales oficiales. Wake Solutions podrá suspender o terminar el acceso ante incumplimiento de estos términos, uso indebido o falta de pago.',
            ],
          },
        ],
      },
      {
        id: 'refund',
        title: '4. Política de Prueba, Cancelación y Reembolso',
        blocks: [
          {
            heading: `Prueba gratuita de ${PRICING.trialDays} días`,
            paragraphs: [
              `En lugar de un período de reembolso, ofrecemos una prueba gratuita de ${PRICING.trialDays} días para que evalúes el sistema completo antes de pagar. Durante la prueba tienes acceso a la plataforma sin costo y sin compromiso.`,
              'Recomendamos usar esos días para validar el sistema con tu equipo real de trabajo: agenda, expediente y facturación.',
            ],
          },
          {
            heading: 'No hay reembolsos',
            paragraphs: [
              `Los pagos de suscripción no son reembolsables. Al existir un período de prueba gratuita previo de ${PRICING.trialDays} días, no se emiten devoluciones totales ni parciales una vez procesado un cobro, incluidos los casos de falta de uso del servicio durante el ciclo pagado.`,
            ],
          },
          {
            heading: 'Cancelación',
            paragraphs: [
              'Puedes cancelar la suscripción en cualquier momento para evitar cobros futuros. La cancelación detiene la renovación automática y el servicio permanece activo hasta el final del ciclo ya pagado.',
            ],
          },
          {
            heading: 'Servicios personalizados',
            paragraphs: [
              'Los desarrollos a medida, integraciones especiales, migraciones de datos y capacitaciones presenciales se cotizan por separado y no son elegibles para reembolso.',
            ],
          },
          {
            heading: 'Suspensión del servicio',
            paragraphs: [
              'Wake Solutions podrá suspender el acceso por incumplimiento de términos, uso indebido o falta de pago, sin que ello genere derecho a reembolso.',
            ],
          },
        ],
      },
    ],
  },
  home: {
    seo: {
      title:
        'WAKE SOLUTIONS | Infraestructura Tecnológica Empresarial en Honduras y LATAM',
      description:
        'Infraestructura tecnológica, automatización e IA para empresas en Honduras, Centroamérica, Latinoamérica y Estados Unidos. Software empresarial, sistematización y WAKE Health para clínicas.',
      keywords:
        'infraestructura tecnológica Honduras, software empresarial Centroamérica, automatización LATAM, transformación digital Honduras, software clínicas Honduras, WAKE Solutions, tecnología empresarial Tegucigalpa, IT consulting Latin America, business automation Honduras, enterprise software USA Latin America',
    },
    nav: {
      about: 'Nosotros',
      services: 'Servicios',
      products: 'Productos',
      pricing: 'Planes',
      contact: 'Contacto',
      cta: 'Consultoría',
      blog: 'Blog',
    },
    hero: {
      tag: 'Infraestructura del Crecimiento',
      titleBefore: 'Menos caos.',
      titleAccent: 'Más orden operativo.',
      subtitle:
        'Construimos las bases tecnológicas para empresas en Honduras y Centroamérica. Automatizamos operaciones, configuramos software centralizado e integramos IA para escalar sin fricciones.',
      ctaPrimary: 'Probar software',
      ctaSecondary: 'Ver soluciones',
      badge: 'WAKE_CORE // ACCIONADO',
    },
    trust: {
      text: 'Infraestructura de confianza regional',
      logoAlts: [
        'Socio de negocio 1 — WAKE Solutions Honduras',
        'Socio de negocio 2 — clientes LATAM',
        'Socio de negocio 3 — infraestructura empresarial',
        'Socio de negocio 4 — partners Centroamérica',
        'Socio de negocio 5 — tecnología regional',
      ],
    },
    benefits: [
      {
        num: '-50%',
        desc: 'Reducción drástica en errores operativos directamente en administración.',
      },
      {
        num: '100%',
        desc: 'Control centralizado en inventario en tiempo real, ventas y flujos.',
      },
      {
        num: '0%',
        desc: 'Fricción manual. Automatización completa de tareas administrativas repetitivas.',
      },
      {
        num: 'DATA',
        desc: 'Mayor claridad financiera total para decisiones estratégicas inmediatas.',
      },
    ],
    services: {
      tag: 'Capacidades',
      title: '¿Qué resolvemos?',
      subtitle:
        'Diseñamos arquitecturas lógicas y configuramos software robusto para empresas que exigen crecer con métricas predecibles.',
      items: [
        {
          icon: 'fa-layer-group',
          title: 'Sistematización',
          desc: 'Centralizamos flujos de ventas, control logístico de inventarios y finanzas en una sola consola de comando operativa.',
        },
        {
          icon: 'fa-code',
          title: 'Desarrollo de soluciones',
          desc: 'Ingeniería de software a la medida construida exclusivamente alrededor de los procesos reales de tu negocio.',
        },
        {
          icon: 'fa-bolt',
          title: 'Automatización',
          desc: 'Eliminamos permanentemente cuellos de botella manuales e interconectamos sistemas dispares.',
        },
        {
          icon: 'fa-server',
          title: 'Infraestructura',
          desc: 'Diseño de una arquitectura tecnológica escalable lista para absorber demandas masivas de transacciones.',
        },
        {
          icon: 'fa-chart-line',
          title: 'Consultoría Estratégica',
          desc: 'Auditoría tecnológica profunda de tu operación para trazar una hoja de ruta con retornos de inversión medibles.',
        },
        {
          icon: 'fa-robot',
          title: 'Inteligencia Artificial',
          desc: 'Despliegue e integración de modelos de lenguaje e IA avanzada para automatizar flujos complejos de atención y análisis.',
        },
      ],
    },
    products: {
      tag: 'Ecosistema Propio',
      title: 'Productos Core',
      subtitle:
        'Software especializado listo para operar de forma vertical en tu industria.',
      healthTitle: 'Gestión clínica avanzada de grado médico',
      healthDesc:
        'El sistema integral unificado para optimizar el control absoluto de pacientes, flujos de citas médicas, agendas dinámicas e historiales clínicos confidenciales bajo máxima seguridad estructural.',
      healthCta: 'Explorar WAKE Health',
      logoAlt: 'WAKE Health — software para clínicas en Honduras y LATAM',
      featuresTitle: 'Lo que trae el sistema',
      illustrationNote:
        'Ilustración de la interfaz. Las cifras mostradas son de ejemplo y no representan datos reales de pacientes.',
      features: [
        {
          icon: 'fa-notes-medical',
          title: 'Historial Clínico',
          desc: 'Expediente digital por paciente: diagnósticos, recetas y exámenes disponibles en segundos durante la consulta.',
        },
        {
          icon: 'fa-brain',
          title: 'Diagnóstico con IA',
          desc: 'Sugerencias clínicas asistidas por inteligencia artificial para reducir el margen de error y agilizar la consulta.',
        },
        {
          icon: 'fa-truck-medical',
          title: 'Atención directa de emergencias',
          desc: 'Botón de atención inmediata que salta el proceso administrativo cuando cada segundo cuenta.',
        },
        {
          icon: 'fa-calendar-check',
          title: 'Agenda médica',
          desc: 'Calendario compartido entre recepción y médicos, con estados de cita y menos horarios cruzados.',
        },
        {
          icon: 'fa-file-invoice-dollar',
          title: 'Facturación y caja',
          desc: 'Cobros, servicios y cierre de caja conectados al expediente, con reportes de ingresos por periodo.',
        },
        {
          icon: 'fa-mobile-screen',
          title: 'Multidispositivo',
          desc: 'La misma información desde computadora, tablet o celular, con respaldos automáticos en la nube.',
        },
      ],
    },
    about: {
      tag: 'Manifiesto',
      title: 'Tecnología sin fricciones ni rodeos técnicos.',
      subtitle:
        'Nos convertimos en el socio tecnológico estratégico que acompaña de punta a punta el desarrollo corporativo en Centroamérica, transformando la complejidad informática en ventajas competitivas nítidas.',
      pillars: [
        {
          icon: 'fa-crosshairs',
          title: 'Enfoque en Retorno',
          desc: 'Diseñamos e implementamos soluciones enfocadas rigurosamente en la obtención de resultados cuantificables y eficiencia de costes organizacionales.',
        },
        {
          icon: 'fa-gears',
          title: 'Ejecución Limpia',
          desc: 'Instalamos herramientas informáticas avanzadas alineadas exactamente al ritmo operacional real de tu equipo de trabajo.',
        },
        {
          icon: 'fa-laptop-code',
          title: 'Transformación Digital',
          desc: 'Modernizamos la operación de tu empresa con plataformas tecnológicas diseñadas para adaptarse a tus procesos y crecer junto a tu negocio.',
        },
      ],
    },
    process: {
      tag: 'Metodología',
      title: 'El camino al orden',
      subtitle: 'Cómo estructuramos la transición tecnológica de tu empresa.',
      steps: [
        {
          num: '01 // AUDITORÍA',
          title: 'Análisis operativo',
          desc: 'Evaluamos tus flujos de trabajo actuales para identificar fugas de control y oportunidades críticas de automatización.',
        },
        {
          num: '02 // DESPLIEGUE',
          title: 'Implementación modular',
          desc: 'Configuramos e interconectamos tus sistemas de manera gradual, asegurando cero interrupciones en tu operación diaria.',
        },
        {
          num: '03 // OPTIMIZACIÓN',
          title: 'Soporte y escalabilidad',
          desc: 'Monitoreamos el rendimiento, capacitamos a tu equipo y ajustamos la infraestructura para soportar un crecimiento continuo.',
        },
      ],
    },
    pricing: {
      tag: 'Plan único',
      title: 'Todo lo que tu clínica necesita.',
      subtitle:
        'Una plataforma completa para gestionar pacientes, citas y operaciones sin complicaciones.',
      badge: `Prueba gratuita ${PRICING.trialDays} días`,
      planName: 'Wake Health',
      planDesc:
        'Software clínico todo incluido para médicos y clínicas que buscan digitalizar su operación.',
      price: healthPriceLabel,
      period: '/mes',
      featuresLeft: [
        'Expediente clínico digital',
        'Agenda de citas',
        'Historial médico',
        'Recetas digitales',
        'Facturación y caja',
        'Inventario médico',
      ],
      featuresRight: [
        'Reportes inteligentes',
        'Multiusuario',
        'Acceso desde cualquier dispositivo',
        'Copias de seguridad automáticas',
        'Actualizaciones incluidas',
        'Soporte asistido por IA',
      ],
      trialTitle: `Empieza gratis durante ${PRICING.trialDays} días`,
      trialNote: 'Sin tarjeta de crédito. Sin compromiso.',
      cta: 'Comenzar prueba gratuita',
    },
    contact: {
      tag: 'Contacto directo',
      title: 'Hablemos de tu negocio.',
      subtitle:
        'Analizamos tus necesidades técnicas de inmediato. Tu infraestructura de crecimiento comienza aquí.',
      name: 'Nombre completo *',
      company: 'Empresa corporativa',
      email: 'Correo electrónico *',
      phone: 'Teléfono de contacto',
      message: 'Mensaje u objetivos operativos',
      submit: 'Enviar consulta',
      sending: 'Enviando…',
      success: 'Mensaje enviado. Te contactaremos pronto.',
      error: 'No se pudo enviar. Intenta de nuevo o escríbenos a ventas@wake.solutions.',
      mailSubject: 'Solicitud de Infraestructura Tecnológica',
    },
    footer: {
      brand:
        'Construyendo tecnología predictiva para empresas en expansión.',
      company: 'Compañía',
      legal: 'Legal',
      location: 'Ubicación',
      locationText: 'Honduras & Centroamérica',
      terms: 'Términos de Servicio',
      privacy: 'Política de Privacidad',
      refund: 'Prueba y Reembolso',
      healthTerms: 'Términos WAKE HEALTH',
      social: 'Síguenos',
      rights: '© 2026 WAKE SOLUTIONS. Todos los derechos reservados.',
    },
  },
  health: {
    seo: {
      title:
        'WAKE HEALTH | Sistema para Clínicas en Honduras, LATAM y USA',
      description:
        'Software médico para clínicas: pacientes, citas, historial clínico, facturación, laboratorio y diagnósticos con IA. Ideal para Honduras, Latinoamérica y Estados Unidos. Prueba WAKE Health hoy.',
      keywords:
        'software clínicas Honduras, sistema médico LATAM, expediente clínico digital, agenda médica online, software para doctores Honduras, clinic management software USA, EHR Latinoamérica, facturación médica, WAKE Health, historia clínica electrónica Tegucigalpa, software consultorio médico',
    },
    nav: {
      home: 'Inicio',
      problems: 'Problemas',
      modules: 'Sistema',
      gallery: 'Capturas',
      demo: 'Demo',
      access: 'Acceso Sistema',
    },
    hero: {
      tag: 'Software clínico',
      titleBefore: 'Tu clínica no necesita más',
      chaos: 'caos',
      titleMid: ', necesita',
      control: 'control',
      subtitle:
        'Deja atrás el papel, las citas desordenadas y la falta de control. Con WAKE HEALTH organizas toda tu clínica en un solo sistema.',
      ctaWhatsapp: 'Hablar por WhatsApp',
      ctaSystem: 'Ver sistema',
      ctaTry: 'Probar Sistema Ahora',
      whatsappMsg:
        'Hola! Necesito más información sobre WAKE HEALTH!',
      badge: 'WAKE_HEALTH // LISTO',
    },
    problems: {
      tag: 'Diagnóstico',
      title: 'Si esto te pasa… necesitas un cambio',
      subtitle: 'Señales claras de que tu operación clínica está perdiendo control.',
      items: [
        'Se pierden citas o se desordenan los horarios',
        'Todo se maneja en papel o Excel',
        'No tienes control claro de ingresos',
        'El historial de pacientes es lento de consultar',
      ],
    },
    solution: {
      tag: 'Solución',
      title: 'Un sistema. Todo bajo control.',
      subtitle:
        'WAKE HEALTH centraliza pacientes, citas, consultas y finanzas en un solo lugar.',
      ctaEnter: 'Entrar al Sistema',
      ctaDemo: 'Solicitar Demo Personalizada',
      whatsappMsg:
        'Hola! Necesito más información sobre WAKE HEALTH!',
    },
    modules: {
      tag: 'Capacidades',
      title: 'Módulos del Sistema',
      subtitle: 'Todo lo que tu clínica necesita, en una sola plataforma operativa.',
      items: [
        { icon: 'fa-user', title: 'Pacientes' },
        { icon: 'fa-calendar-check', title: 'Citas' },
        { icon: 'fa-stethoscope', title: 'Consulta' },
        { icon: 'fa-notes-medical', title: 'Historial' },
        { icon: 'fa-file-invoice-dollar', title: 'Facturación' },
        { icon: 'fa-calculator', title: 'Contabilidad' },
        { icon: 'fa-vials', title: 'Laboratorio' },
        { icon: 'fa-pills', title: 'Farmacia' },
        { icon: 'fa-cog', title: 'Configuración' },
      ],
    },
    gallery: {
      tag: 'Producto',
      title: 'Explora la Interfaz',
      subtitle: 'Capturas reales del sistema listo para operar en tu clínica.',
      items: {
        dashboard: {
          title: 'Panel Principal',
          desc: 'Visualiza tus métricas, citas del día, recordatorios importantes de un vistazo.',
          alt: 'Dashboard WAKE Health — panel principal de clínica',
        },
        appointments: {
          title: 'Control de Citas',
          desc: 'Calendario inteligente para evitar cruces y organizar a tus médicos eficientemente.',
          alt: 'Control de citas médicas WAKE Health',
        },
        records: {
          title: 'Expediente Digital',
          desc: 'Accede a diagnósticos previos, recetas y exámenes de laboratorio en segundos.',
          alt: 'Expediente clínico digital WAKE Health',
        },
        directCare: {
          title: 'Atención Directa',
          desc: 'Prioridad máxima cuando cada segundo cuenta. Nuestro botón de atención directa permite saltar procesos burocráticos para atender emergencias al instante.',
          alt: 'Atención directa de emergencias en WAKE Health',
        },
        aiDiagnosis: {
          title: 'Diagnósticos con IA',
          desc: 'Precisión clínica potenciada por Inteligencia Artificial. Optimiza tus diagnósticos con sugerencias basadas en datos, reduciendo el margen de error y agilizando la consulta.',
          alt: 'Diagnósticos con inteligencia artificial WAKE Health',
        },
        multidevice: {
          title: 'Multidispositivo',
          desc: 'Tu clínica en tu bolsillo. Accede a toda la información desde tu celular, tablet o computadora con una interfaz que se adapta perfectamente a cualquier pantalla.',
          alt: 'WAKE Health responsive en móvil, tablet y desktop',
        },
      },
    },
    pricing: {
      tag: 'Plan único',
      title: 'Todo lo que tu clínica necesita.',
      subtitle:
        'Una plataforma completa para gestionar pacientes, citas y operaciones sin complicaciones.',
      badge: `Prueba gratuita ${PRICING.trialDays} días`,
      planName: 'Wake Health',
      planDesc:
        'Software clínico todo incluido para médicos y clínicas que buscan digitalizar su operación.',
      price: healthPriceLabel,
      period: '/mes',
      featuresLeft: [
        'Expediente clínico digital',
        'Agenda de citas',
        'Historial médico',
        'Recetas digitales',
        'Facturación y caja',
        'Inventario médico',
      ],
      featuresRight: [
        'Reportes inteligentes',
        'Multiusuario',
        'Acceso desde cualquier dispositivo',
        'Copias de seguridad automáticas',
        'Actualizaciones incluidas',
        'Soporte asistido por IA',
      ],
      trialTitle: `Empieza gratis durante ${PRICING.trialDays} días`,
      trialNote: 'Sin tarjeta de crédito. Sin compromiso.',
      cta: 'Comenzar prueba gratuita',
      start: 'Comenzar Ahora',
      quote: 'Solicitar Cotización',
      enterpriseTitle: '¿Clínica grande o red hospitalaria?',
      enterpriseNote:
        'Si necesitas multi-sucursales, integración por API, servidor dedicado o capacitación presencial, armamos una propuesta a la medida.',
      enterpriseWhatsappMsg:
        'Hola! Necesito una cotización a la medida para mi red de clínicas con Wake Health',
    },
    cta: {
      tag: 'Siguiente paso',
      title: 'Agenda tu demostración',
      subtitle:
        'O si prefieres, entra directamente y conoce la interfaz ahora mismo.',
      whatsapp: 'Hablar por WhatsApp',
      try: 'Probar Sistema',
      whatsappMsg:
        'Hola! Necesito más información sobre WAKE HEALTH!',
    },
    footer: {
      brand: 'Software clínico para clínicas que quieren orden operativo.',
      company: 'Producto',
      legal: 'Legal',
      location: 'Ubicación',
      locationText: 'Honduras & Centroamérica',
      copy: '© 2026 WAKE HEALTH. Todos los derechos reservados.',
      terms: 'Términos de Servicio',
      privacy: 'Política de Privacidad',
      refund: 'Prueba y Reembolso',
      healthTerms: 'Términos WAKE HEALTH',
      social: 'Síguenos',
      backHome: 'WAKE SOLUTIONS',
    },
  },
} as const;

export type Dictionary = typeof es;
