import type { Dictionary } from './es';

export const en: Dictionary = {
  common: {
    company: 'WAKE SOLUTIONS',
    healthProduct: 'WAKE HEALTH',
    language: 'Language',
    switchTo: 'Español',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    learnMore: 'Learn more',
    blog: 'Blog',
    home: 'Home',
  },
  blog: {
    tag: 'Resources',
    title: 'WAKE Blog',
    subtitle:
      'Practical guides on clinic systems, automation, and technology solutions across Latin America and the United States.',
    seo: {
      title: 'WAKE Blog | Clinic software, automation, and tech solutions',
      description:
        'Articles on clinic systems, technology infrastructure, and business automation for Honduras, LATAM, and the USA.',
      keywords:
        'clinic software blog, business automation LATAM USA, technology solutions, WAKE Health, WAKE Solutions',
    },
  },
  legal: {
    tag: 'Legal',
    title: 'Legal policies',
    subtitle: 'Transparency, privacy, and security for our users.',
    updated: 'Last updated: May 2026',
    backHome: 'Back to home',
    seo: {
      title: 'Legal Policies | WAKE SOLUTIONS',
      description:
        'Terms of service, privacy policy, and refund policy for WAKE Solutions and WAKE Health.',
      keywords:
        'WAKE Solutions terms, privacy policy, refund policy, cancellation, Wake Health legal',
    },
    sections: [
      {
        id: 'terms',
        title: '1. Terms and Conditions',
        blocks: [
          {
            heading: 'Use of the service',
            paragraphs: [
              'The digital services provided by Wake Solutions are designed to support business management, organization, and operations through technology tools accessible online.',
            ],
          },
          {
            heading: 'Access and accounts',
            paragraphs: [
              'Users are responsible for keeping their credentials confidential and for all activity carried out from their account.',
            ],
          },
          {
            heading: 'Service availability',
            paragraphs: [
              'We strive to keep our services available continuously; however, temporary interruptions may occur due to maintenance or technical issues.',
            ],
          },
          {
            heading: 'Intellectual property',
            paragraphs: [
              'All content, software, design, structure, and trademarks belong to Wake Solutions.',
            ],
          },
          {
            heading: 'Misuse',
            paragraphs: [],
            list: [
              'Illegal activities',
              'Attempts to breach security',
              'Copying or modifying the software without authorization',
              'Malicious use of the platform',
            ],
          },
          {
            heading: 'Limitation of liability',
            paragraphs: [
              'Wake Solutions will not be liable for indirect losses resulting from incorrect use of the system.',
            ],
          },
        ],
      },
      {
        id: 'privacy',
        title: '2. Privacy Policy',
        blocks: [
          {
            heading: 'Information collected',
            paragraphs: [],
            list: [
              'Name',
              'Email address',
              'Phone number',
              'Business information',
              'Data generated within the system',
            ],
          },
          {
            heading: 'Use of information',
            paragraphs: [
              'Collected information is used to provide system access, technical support, and improve the user experience.',
            ],
          },
          {
            heading: 'Data protection',
            paragraphs: [
              'We implement technical and administrative measures intended to protect information from unauthorized access.',
            ],
          },
          {
            heading: 'Cookies',
            paragraphs: [
              'Our services may use cookies to improve navigation and the user experience.',
            ],
          },
        ],
      },
      {
        id: 'refund',
        title: '3. Refund and Cancellation Policy',
        blocks: [
          {
            heading: 'Guarantee period',
            paragraphs: [
              'Users may request a refund within the first 3 calendar days after the initial subscription.',
            ],
          },
          {
            heading: 'Cancellation',
            paragraphs: [
              'Users may cancel the service at any time to avoid future charges.',
            ],
          },
          {
            heading: 'Custom services',
            paragraphs: [
              'Custom developments or special configurations may not be eligible for a refund.',
            ],
          },
          {
            heading: 'Service suspension',
            paragraphs: [
              'Wake Solutions may suspend access for terms violations or misuse.',
            ],
          },
        ],
      },
    ],
  },
  home: {
    seo: {
      title:
        'WAKE SOLUTIONS | Enterprise Tech Infrastructure for Honduras, LATAM & USA',
      description:
        'Technology infrastructure, automation, and AI for businesses in Honduras, Central America, Latin America, and the United States. Enterprise software, systematization, and WAKE Health for clinics.',
      keywords:
        'enterprise technology Honduras, business software Latin America, automation LATAM, digital transformation Honduras, clinic software Honduras, WAKE Solutions, IT consulting Central America, business automation USA, enterprise software Latin America, tech infrastructure Tegucigalpa',
    },
    nav: {
      about: 'About',
      services: 'Services',
      products: 'Products',
      pricing: 'Pricing',
      contact: 'Contact',
      cta: 'Consulting',
      blog: 'Blog',
    },
    hero: {
      tag: 'Growth Infrastructure',
      titleBefore: 'Less chaos.',
      titleAccent: 'More operational order.',
      subtitle:
        'We build the technology foundations for businesses in Honduras and Central America. We automate operations, configure centralized software, and integrate AI so you can scale without friction.',
      ctaPrimary: 'Try software',
      ctaSecondary: 'See solutions',
      badge: 'WAKE_CORE // ACTIVE',
    },
    trust: {
      text: 'Trusted regional infrastructure',
      logoAlts: [
        'Business partner 1 — WAKE Solutions Honduras',
        'Business partner 2 — LATAM clients',
        'Business partner 3 — enterprise infrastructure',
        'Business partner 4 — Central America partners',
        'Business partner 5 — regional technology',
      ],
    },
    benefits: [
      {
        num: '-50%',
        desc: 'Sharp reduction in operational errors across administration.',
      },
      {
        num: '100%',
        desc: 'Centralized real-time control of inventory, sales, and workflows.',
      },
      {
        num: '0%',
        desc: 'Manual friction. Full automation of repetitive admin tasks.',
      },
      {
        num: 'DATA',
        desc: 'Total financial clarity for immediate strategic decisions.',
      },
    ],
    services: {
      tag: 'Capabilities',
      title: 'What do we solve?',
      subtitle:
        'We design logical architectures and configure robust software for companies that need to grow with predictable metrics.',
      items: [
        {
          icon: 'fa-layer-group',
          title: 'Systematization',
          desc: 'We centralize sales flows, inventory logistics, and finance in a single operational command console.',
        },
        {
          icon: 'fa-code',
          title: 'Custom development',
          desc: 'Bespoke software engineering built exclusively around your real business processes.',
        },
        {
          icon: 'fa-bolt',
          title: 'Automation',
          desc: 'We permanently eliminate manual bottlenecks and interconnect disparate systems.',
        },
        {
          icon: 'fa-server',
          title: 'Infrastructure',
          desc: 'Scalable technology architecture designed to absorb massive transaction demand.',
        },
        {
          icon: 'fa-chart-line',
          title: 'Strategic consulting',
          desc: 'Deep technology audits of your operation to map a roadmap with measurable ROI.',
        },
        {
          icon: 'fa-robot',
          title: 'Artificial Intelligence',
          desc: 'Deployment and integration of language models and advanced AI to automate complex support and analysis workflows.',
        },
      ],
    },
    products: {
      tag: 'Own Ecosystem',
      title: 'Core Products',
      subtitle:
        'Specialized software ready to operate vertically in your industry.',
      healthTitle: 'Advanced medical-grade clinic management',
      healthDesc:
        'The unified system to optimize absolute control of patients, appointment flows, dynamic schedules, and confidential clinical records under maximum structural security.',
      healthCta: 'Explore WAKE Health',
      patientsLabel: 'ACTIVE PATIENTS',
      patientsCount: '1,240',
      logoAlt: 'WAKE Health — clinic software for Honduras and LATAM',
    },
    about: {
      tag: 'Manifesto',
      title: 'Technology without friction or technical detours.',
      subtitle:
        'We become the strategic technology partner that accompanies corporate growth end-to-end across Central America, turning IT complexity into clear competitive advantages.',
      pillars: [
        {
          icon: 'fa-crosshairs',
          title: 'ROI focus',
          desc: 'We design and implement solutions rigorously focused on quantifiable results and organizational cost efficiency.',
        },
        {
          icon: 'fa-gears',
          title: 'Clean execution',
          desc: 'We install advanced tools aligned exactly to your team’s real operational pace.',
        },
        {
          icon: 'fa-laptop-code',
          title: 'Digital transformation',
          desc: 'We modernize your company operations with platforms designed to fit your processes and grow with your business.',
        },
      ],
    },
    process: {
      tag: 'Methodology',
      title: 'The path to order',
      subtitle: 'How we structure your company’s technology transition.',
      steps: [
        {
          num: '01 // AUDIT',
          title: 'Operational analysis',
          desc: 'We evaluate your current workflows to identify control leaks and critical automation opportunities.',
        },
        {
          num: '02 // DEPLOY',
          title: 'Modular implementation',
          desc: 'We configure and interconnect your systems gradually, ensuring zero disruption to daily operations.',
        },
        {
          num: '03 // OPTIMIZE',
          title: 'Support and scalability',
          desc: 'We monitor performance, train your team, and tune infrastructure to support continuous growth.',
        },
      ],
    },
    pricing: {
      tag: 'Single plan',
      title: 'Everything your clinic needs.',
      subtitle:
        'A complete platform to manage patients, appointments, and operations without complexity.',
      badge: '3-day free trial',
      planName: 'Wake Health',
      planDesc:
        'All-in-one clinical software for doctors and clinics ready to digitize operations.',
      price: 'US$29',
      period: '/mo',
      featuresLeft: [
        'Digital clinical records',
        'Appointment scheduling',
        'Medical history',
        'Digital prescriptions',
        'Billing and cash',
        'Medical inventory',
      ],
      featuresRight: [
        'Smart reports',
        'Multi-user',
        'Access from any device',
        'Automatic backups',
        'Updates included',
        'AI-assisted support',
      ],
      trialTitle: 'Start free for 3 days',
      trialNote: 'No credit card. No commitment.',
      cta: 'Start free trial',
    },
    contact: {
      tag: 'Direct contact',
      title: 'Let’s talk about your business.',
      subtitle:
        'We analyze your technical needs immediately. Your growth infrastructure starts here.',
      name: 'Full name *',
      company: 'Company',
      email: 'Email *',
      phone: 'Phone',
      message: 'Message or operational goals',
      submit: 'Send inquiry',
      sending: 'Sending…',
      success: 'Message sent. We’ll get back to you soon.',
      error: 'Could not send. Try again or email ventas@wake.solutions.',
      mailSubject: 'Technology Infrastructure Request',
    },
    footer: {
      brand: 'Building predictive technology for growing companies.',
      company: 'Company',
      legal: 'Legal',
      location: 'Location',
      locationText: 'Honduras & Central America',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      refund: 'Refund Policy',
      rights: '© 2026 WAKE SOLUTIONS. All rights reserved.',
    },
  },
  health: {
    seo: {
      title:
        'WAKE HEALTH | Clinic Management Software for Honduras, LATAM & USA',
      description:
        'Medical clinic software: patients, appointments, clinical records, billing, lab, and AI-assisted diagnosis. Built for Honduras, Latin America, and the United States. Try WAKE Health today.',
      keywords:
        'clinic software Honduras, medical system LATAM, digital clinical records, online medical scheduling, doctor software Honduras, clinic management software USA, EHR Latin America, medical billing, WAKE Health, electronic health records Tegucigalpa, practice management software',
    },
    nav: {
      home: 'Home',
      problems: 'Problems',
      modules: 'System',
      gallery: 'Screenshots',
      demo: 'Demo',
      access: 'System Access',
    },
    hero: {
      tag: 'Clinical software',
      titleBefore: 'Your clinic doesn’t need more',
      chaos: 'chaos',
      titleMid: ', it needs',
      control: 'control',
      subtitle:
        'Leave paper, messy appointments, and lack of control behind. With WAKE HEALTH you organize your entire clinic in one system.',
      ctaWhatsapp: 'Chat on WhatsApp',
      ctaSystem: 'See the system',
      ctaTry: 'Try the System Now',
      whatsappMsg: 'Hi! I need more information about WAKE HEALTH!',
      badge: 'WAKE_HEALTH // READY',
    },
    problems: {
      tag: 'Diagnosis',
      title: 'If this sounds familiar… you need a change',
      subtitle: 'Clear signs your clinic operations are losing control.',
      items: [
        'Appointments get lost or schedules get messy',
        'Everything runs on paper or Excel',
        'No clear control of revenue',
        'Patient history is slow to look up',
      ],
    },
    solution: {
      tag: 'Solution',
      title: 'One system. Everything under control.',
      subtitle:
        'WAKE HEALTH centralizes patients, appointments, consultations, and finances in one place.',
      ctaEnter: 'Enter the System',
      ctaDemo: 'Request a Custom Demo',
      whatsappMsg: 'Hi! I need more information about WAKE HEALTH!',
    },
    modules: {
      tag: 'Capabilities',
      title: 'System Modules',
      subtitle: 'Everything your clinic needs, in one operational platform.',
      items: [
        { icon: 'fa-user', title: 'Patients' },
        { icon: 'fa-calendar-check', title: 'Appointments' },
        { icon: 'fa-stethoscope', title: 'Consultation' },
        { icon: 'fa-notes-medical', title: 'History' },
        { icon: 'fa-file-invoice-dollar', title: 'Billing' },
        { icon: 'fa-calculator', title: 'Accounting' },
        { icon: 'fa-vials', title: 'Laboratory' },
        { icon: 'fa-pills', title: 'Pharmacy' },
        { icon: 'fa-cog', title: 'Settings' },
      ],
    },
    gallery: {
      tag: 'Product',
      title: 'Explore the Interface',
      subtitle: 'Real screenshots of the system ready to run your clinic.',
      items: {
        dashboard: {
          title: 'Main Dashboard',
          desc: 'See metrics, today’s appointments, and important reminders at a glance.',
          alt: 'WAKE Health dashboard — clinic main panel',
        },
        appointments: {
          title: 'Appointment Control',
          desc: 'Smart calendar to avoid conflicts and organize physicians efficiently.',
          alt: 'WAKE Health medical appointment control',
        },
        records: {
          title: 'Digital Records',
          desc: 'Access prior diagnoses, prescriptions, and lab exams in seconds.',
          alt: 'WAKE Health digital clinical records',
        },
        directCare: {
          title: 'Direct Care',
          desc: 'Maximum priority when every second counts. Our direct-care button skips bureaucracy to handle emergencies instantly.',
          alt: 'WAKE Health direct emergency care',
        },
        aiDiagnosis: {
          title: 'AI Diagnosis',
          desc: 'Clinical precision powered by Artificial Intelligence. Optimize diagnoses with data-driven suggestions, reducing error and speeding up consultations.',
          alt: 'WAKE Health AI-assisted diagnosis',
        },
        multidevice: {
          title: 'Multi-device',
          desc: 'Your clinic in your pocket. Access everything from phone, tablet, or computer with an interface that adapts to any screen.',
          alt: 'WAKE Health responsive on mobile, tablet, and desktop',
        },
      },
    },
    pricing: {
      tag: 'Pricing',
      title: 'Plans designed for your growth',
      subtitle: 'Choose the plan that fits the size and pace of your clinic.',
      recommended: 'RECOMMENDED',
      period: '/mo',
      choose: 'Choose Plan',
      start: 'Start Now',
      quote: 'Request Quote',
      basic: {
        name: 'Basic',
        price: '$9.99',
        features: [
          'Up to 500 patients',
          'Medical scheduling',
          'Clinical records',
          'Email support',
        ],
      },
      plus: {
        name: 'Plus',
        price: '$17.99',
        features: [
          'Unlimited patients',
          'Laboratory module',
          'Billing and accounting',
          '24/7 priority support',
          'AI diagnoses',
        ],
      },
      business: {
        name: 'Business',
        price: 'Custom',
        note: 'For large clinics or hospital networks that need a tailored solution.',
        features: [
          'Multi-branch',
          'Custom API integration',
          'Dedicated server',
          'On-site training',
        ],
        whatsappMsg:
          'Hi! I need a quote for the Wake Health Business Plan',
      },
    },
    cta: {
      tag: 'Next step',
      title: 'Book your demo',
      subtitle:
        'Or jump in directly and explore the interface right now.',
      whatsapp: 'Chat on WhatsApp',
      try: 'Try the System',
      whatsappMsg: 'Hi! I need more information about WAKE HEALTH!',
    },
    footer: {
      brand: 'Clinical software for clinics that want operational order.',
      company: 'Product',
      legal: 'Legal',
      location: 'Location',
      locationText: 'Honduras & Central America',
      copy: '© 2026 WAKE HEALTH. All rights reserved.',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      refund: 'Refund Policy',
      backHome: 'WAKE SOLUTIONS',
    },
  },
};
