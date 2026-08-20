import { PRICING, healthPriceLabel } from '../../data/constants';
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
    updated: 'Last updated: August 2026',
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
        id: 'health-terms',
        title: '3. WAKE HEALTH Terms and Conditions',
        blocks: [
          {
            heading: 'Purpose of the service',
            paragraphs: [
              'WAKE HEALTH is a clinic management platform offered by Wake Solutions under a monthly subscription. It covers patients, appointments, clinical records, billing, and related operational modules.',
              'WAKE HEALTH is an administrative and support tool. It does not replace the clinical judgment of a healthcare professional and is not a medical device; its AI-assisted features are supporting suggestions whose final validation always rests with the treating professional.',
            ],
          },
          {
            heading: 'Accounts and user profiles',
            paragraphs: [
              'The contracting clinic is responsible for creating, managing, and revoking staff access. Each user must have individual, non-transferable credentials; shared accounts are the clinic’s sole responsibility.',
            ],
          },
          {
            heading: 'Patient data and confidentiality',
            paragraphs: [
              'The contracting clinic is the controller of its patients’ data and confirms it has the consent and legal basis required to record them on the platform. Wake Solutions acts as a processor and handles that information solely to deliver the service.',
              'Wake Solutions does not sell or trade patient clinical information, and applies technical and administrative measures aimed at protecting the confidentiality of records.',
            ],
          },
          {
            heading: 'Subscription, billing, and renewal',
            paragraphs: [
              'The WAKE HEALTH subscription is billed monthly and renews automatically until the user cancels. Payments are processed through our authorized payment provider.',
              'Prices may be updated; any change will be announced with reasonable notice and applies from the next billing cycle.',
            ],
          },
          {
            heading: 'Availability, backups, and support',
            paragraphs: [
              'The service is delivered over the web and may require maintenance windows. Periodic backups are performed, which does not constitute an absolute guarantee of recovery in force-majeure events.',
              'A clinic may request an export of its information while the subscription is active.',
            ],
          },
          {
            heading: 'Acceptable use',
            paragraphs: [],
            list: [
              'Do not record false information or non-existent patients',
              'Do not use the platform for purposes other than clinical management',
              'Do not attempt to access data from other clinics or accounts',
              'Do not resell, replicate, or reverse-engineer the system',
            ],
          },
          {
            heading: 'Termination',
            paragraphs: [
              'A clinic may cancel at any time from its account or through official channels. Wake Solutions may suspend or terminate access for breach of these terms, misuse, or non-payment.',
            ],
          },
        ],
      },
      {
        id: 'refund',
        title: '4. Trial, Cancellation, and Refund Policy',
        blocks: [
          {
            heading: `${PRICING.trialDays}-day free trial`,
            paragraphs: [
              `Instead of a refund window, we offer a ${PRICING.trialDays}-day free trial so you can evaluate the full system before paying. During the trial you get access to the platform at no cost and with no commitment.`,
              'We recommend using those days to validate the system with your actual team: scheduling, records, and billing.',
            ],
          },
          {
            heading: 'No refunds',
            paragraphs: [
              `Subscription payments are non-refundable. Because a ${PRICING.trialDays}-day free trial is provided beforehand, no full or partial refunds are issued once a charge has been processed, including cases where the service was not used during the paid cycle.`,
            ],
          },
          {
            heading: 'Cancellation',
            paragraphs: [
              'You may cancel your subscription at any time to avoid future charges. Cancellation stops automatic renewal, and the service stays active until the end of the cycle already paid for.',
            ],
          },
          {
            heading: 'Custom services',
            paragraphs: [
              'Custom development, special integrations, data migrations, and on-site training are quoted separately and are not eligible for a refund.',
            ],
          },
          {
            heading: 'Service suspension',
            paragraphs: [
              'Wake Solutions may suspend access for breach of terms, misuse, or non-payment, without this creating any right to a refund.',
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
      cta: 'Book a diagnostic',
      blog: 'Blog',
    },
    hero: {
      tag: 'Systematization and automation',
      titleBefore: 'Your operation, centralized.',
      titleAccent: 'Sales, inventory, and finance in one system.',
      subtitle:
        'We audit your operation, show you exactly what to automate, and implement it. Centralized software and AI for companies in Honduras and Central America — in weeks, not months.',
      ctaPrimary: 'Book a free diagnostic',
      ctaSecondary: 'See WAKE Health',
      note: 'Free diagnostic · No commitment · We reply in under 24h',
      imageAlt:
        'WAKE Health dashboard showing patients, appointments, and operational control on a single screen',
      badge: 'WAKE_CORE // ACTIVE',
    },
    audience: {
      tag: 'Start with what you have',
      title: 'What kind of operation are you trying to fix?',
      subtitle: 'Each path takes you straight to what you need to see first.',
      options: [
        {
          icon: 'fa-stethoscope',
          title: 'I run a clinic or private practice',
          desc: 'WAKE Health is ready today: patients, appointments, clinical records, billing, and medical inventory from US$29/mo.',
          cta: 'See WAKE Health',
          target: 'health',
        },
        {
          icon: 'fa-building',
          title: 'I run a different kind of business',
          desc: 'We design and implement systematization around your actual processes: sales, inventory, finance, and automation.',
          cta: 'Book a free diagnostic',
          target: 'contact',
        },
      ],
    },
    trust: {
      text: 'Companies and partners already working with WAKE',
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
        num: '1',
        desc: 'One dashboard for sales, inventory, and finance. No more scattered spreadsheets.',
      },
    ],
    benefitsNote:
      'Target ranges we aim for on every implementation. Actual results depend on where your operation starts, and we define them with you during the initial diagnostic.',
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
      logoAlt: 'WAKE Health — clinic software for Honduras and LATAM',
      featuresTitle: 'What the system includes',
      illustrationNote:
        'Interface illustration. Any figures shown are examples and do not represent real patient data.',
      features: [
        {
          icon: 'fa-notes-medical',
          title: 'Clinical Records',
          desc: 'Digital chart per patient: diagnoses, prescriptions, and lab results available in seconds during the visit.',
        },
        {
          icon: 'fa-brain',
          title: 'AI-assisted Diagnosis',
          desc: 'Clinical suggestions powered by artificial intelligence to reduce error margin and speed up consultations.',
        },
        {
          icon: 'fa-truck-medical',
          title: 'Direct Emergency Care',
          desc: 'An immediate-care button that skips administrative steps when every second counts.',
        },
        {
          icon: 'fa-calendar-check',
          title: 'Medical Scheduling',
          desc: 'A shared calendar for front desk and physicians, with appointment states and fewer conflicts.',
        },
        {
          icon: 'fa-file-invoice-dollar',
          title: 'Billing and Cash',
          desc: 'Charges, services, and daily close connected to the chart, with revenue reports by period.',
        },
        {
          icon: 'fa-mobile-screen',
          title: 'Multi-device',
          desc: 'The same information from desktop, tablet, or phone, with automatic cloud backups.',
        },
      ],
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
      badge: `${PRICING.trialDays}-day free trial`,
      planName: 'Wake Health',
      planDesc:
        'All-in-one clinical software for doctors and clinics ready to digitize operations.',
      price: healthPriceLabel,
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
      trialTitle: `Start free for ${PRICING.trialDays} days`,
      trialNote: 'No credit card. No commitment.',
      cta: 'Create my free account',
      ctaNote: 'Takes you straight to account creation. No form in between.',
      guarantee:
        'Full refund within the first 3 days. Cancel anytime, no penalty.',
      secondaryCta: 'I would rather see a demo first',
      secondaryWhatsappMsg:
        'Hi! I would like a walkthrough of WAKE Health before creating an account.',
      audienceNote:
        'Run a clinic or private practice? This product is ready to use today.',
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
      message: 'Message or operational goals (optional)',
      submit: 'Book a free diagnostic',
      sending: 'Sending…',
      success: 'Message sent. We’ll get back to you soon.',
      error: 'Could not send. Try again or email ventas@wake.solutions.',
      mailSubject: 'Technology Infrastructure Request',
      whatsappCta: 'Message us on WhatsApp',
      whatsappMsg: 'Hi! I would like to book a free diagnostic for my company.',
      orLabel: 'or if you prefer something more direct',
      responseNote: 'We reply within one business day.',
      privacyNote: 'We only use your details to reply. We never share them.',
      privacyLink: 'Read the privacy policy',
    },
    proof: {
      tag: 'Results',
      title: 'What changed for the companies that did it',
      subtitle: 'Real cases from businesses that put their operation in order with WAKE.',
    },
    faq: {
      tag: 'Common questions',
      title: 'Before you ask',
      subtitle: 'What almost everyone wants to know before starting.',
      items: [
        {
          q: 'How much does a systematization project cost?',
          a: 'It depends on scope: automating billing is not the same as redesigning an entire operation. That is why the initial diagnostic is free and ends with a defined scope and a fixed price before you commit to anything. If what you need is clinical software, WAKE Health has public pricing: US$29 per month.',
        },
        {
          q: 'How long does implementation take?',
          a: 'WAKE Health is active the same day you create your account. Custom projects are implemented modularly and gradually, starting with the workflow that hurts most, so your daily operation never stops. The exact timeline comes out of the diagnostic.',
        },
        {
          q: 'I already use another system or Excel. Do I start from scratch?',
          a: 'No. We migrate your data and, when your current system still earns its keep, we integrate it rather than replace it. A large part of our work is connecting tools that currently do not talk to each other.',
        },
        {
          q: 'What happens to my data?',
          a: 'Your data is yours. We apply technical and administrative measures to protect it from unauthorized access, WAKE Health runs automatic backups, and we only use your information to deliver the service and support you. It is all detailed in our privacy policy.',
        },
        {
          q: 'Does my team need technical skills?',
          a: 'No. We configure the tools around how your team actually works and train them as part of the implementation. If something needs a 40-page manual to be used, we designed it badly.',
        },
        {
          q: 'Can I cancel if it does not work for me?',
          a: 'Yes. WAKE Health includes a refund guarantee within the first 3 days, and you can cancel at any time to avoid future charges. Custom development follows the scope agreed before kickoff.',
        },
      ],
    },
    ctaBand: {
      title: 'Ready to put your operation in order?',
      subtitle:
        'We start with a free diagnostic of your current processes. No commitment and no unnecessary technical jargon.',
      primary: 'Book a free diagnostic',
      secondary: 'Message us on WhatsApp',
      whatsappMsg: 'Hi! I would like to book a free diagnostic for my company.',
    },
    whatsappFab: {
      label: 'Message us on WhatsApp',
      msg: 'Hi! I would like more information about WAKE Solutions.',
    },
    footer: {
      brand: 'Building predictive technology for growing companies.',
      company: 'Company',
      legal: 'Legal',
      location: 'Location',
      locationText: 'Honduras & Central America',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      refund: 'Trial & Refunds',
      healthTerms: 'WAKE HEALTH Terms',
      social: 'Follow us',
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
      tag: 'Single plan',
      title: 'Everything your clinic needs.',
      subtitle:
        'A complete platform to manage patients, appointments, and operations without complexity.',
      badge: `${PRICING.trialDays}-day free trial`,
      planName: 'Wake Health',
      planDesc:
        'All-in-one clinical software for doctors and clinics ready to digitize operations.',
      price: healthPriceLabel,
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
      trialTitle: `Start free for ${PRICING.trialDays} days`,
      trialNote: 'No credit card. No commitment.',
      cta: 'Start free trial',
      start: 'Start Now',
      quote: 'Request Quote',
      enterpriseTitle: 'Large clinic or hospital network?',
      enterpriseNote:
        'If you need multi-branch, custom API integration, a dedicated server, or on-site training, we put together a tailored proposal.',
      enterpriseWhatsappMsg:
        'Hi! I need a custom quote for my clinic network with Wake Health',
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
      refund: 'Trial & Refunds',
      healthTerms: 'WAKE HEALTH Terms',
      social: 'Follow us',
      backHome: 'WAKE SOLUTIONS',
    },
  },
};
