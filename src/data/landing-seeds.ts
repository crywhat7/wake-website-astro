/**
 * Semillas de las landings programáticas.
 *
 * Cada entrada define lo mínimo distintivo (nombre, dolor principal, tres
 * puntos concretos). El texto largo se arma en `landings.ts` a partir de esto,
 * de modo que agregar una especialidad/función/sector nueva sea una sola
 * entrada en este archivo.
 */

export type LandingKind = 'specialty' | 'feature' | 'sector';

export interface LandingSeedCopy {
  /** Nombre corto que aparece en listados y breadcrumbs */
  name: string;
  /** Cómo se nombra al profesional o negocio: "pediatras", "retail stores" */
  audience: string;
  /** El dolor principal, una frase */
  pain: string;
  /** Tres capacidades concretas y específicas del rubro */
  points: [string, string, string];
  /** Términos extra para la meta keywords */
  keywords: string;
}

export interface LandingSeed {
  slug: string;
  kind: LandingKind;
  icon: string;
  es: LandingSeedCopy;
  en: LandingSeedCopy;
}

/* ==========================================================================
 *  ESPECIALIDADES MÉDICAS (producto: WAKE HEALTH)
 * ======================================================================== */
export const specialtySeeds: LandingSeed[] = [
  {
    slug: 'pediatria',
    kind: 'specialty',
    icon: 'fa-child',
    es: {
      name: 'Pediatría',
      audience: 'pediatras',
      pain: 'el control de crecimiento y el esquema de vacunas se pierden entre carnets de papel y recordatorios manuales',
      points: [
        'Historial de crecimiento y desarrollo por paciente, visita tras visita',
        'Control de esquema de vacunación con seguimiento de dosis pendientes',
        'Ficha con datos del tutor responsable y contacto para recordatorios',
      ],
      keywords: 'software pediatría, expediente pediátrico, control de vacunas, consultorio pediátrico',
    },
    en: {
      name: 'Pediatrics',
      audience: 'pediatricians',
      pain: 'growth tracking and immunization schedules get lost between paper cards and manual reminders',
      points: [
        'Growth and development history per patient, visit after visit',
        'Immunization schedule tracking with pending doses flagged',
        'Guardian details on file for reminders and follow-up',
      ],
      keywords: 'pediatric EHR, pediatric practice software, immunization tracking, pediatric charting',
    },
  },
  {
    slug: 'dermatologia',
    kind: 'specialty',
    icon: 'fa-hand-dots',
    es: {
      name: 'Dermatología',
      audience: 'dermatólogos',
      pain: 'la evolución visual de una lesión se pierde si las fotos viven en el celular y no en el expediente',
      points: [
        'Registro fotográfico por consulta asociado al expediente del paciente',
        'Seguimiento de tratamientos prolongados y control de recaídas',
        'Historial de procedimientos estéticos y clínicos en una sola línea de tiempo',
      ],
      keywords: 'software dermatología, expediente dermatológico, seguimiento de tratamientos, clínica dermatológica',
    },
    en: {
      name: 'Dermatology',
      audience: 'dermatologists',
      pain: 'the visual progression of a lesion disappears when photos live on a phone instead of the chart',
      points: [
        'Photo documentation per visit attached to the patient chart',
        'Follow-up on long treatment courses and relapse tracking',
        'Clinical and aesthetic procedure history on one timeline',
      ],
      keywords: 'dermatology EHR, dermatology practice software, treatment tracking, skin clinic software',
    },
  },
  {
    slug: 'odontologia',
    kind: 'specialty',
    icon: 'fa-tooth',
    es: {
      name: 'Odontología',
      audience: 'odontólogos',
      pain: 'los tratamientos por etapas y los planes de pago se descuadran entre la agenda y la caja',
      points: [
        'Plan de tratamiento por piezas con avance por sesión',
        'Presupuestos y planes de pago ligados al expediente',
        'Agenda de citas largas sin bloquear el sillón de más',
      ],
      keywords: 'software odontológico, sistema para dentistas, odontograma digital, clínica dental',
    },
    en: {
      name: 'Dentistry',
      audience: 'dentists',
      pain: 'staged treatments and payment plans drift apart between the schedule and the front desk',
      points: [
        'Treatment plan by tooth with progress logged per session',
        'Estimates and payment plans linked to the chart',
        'Long-appointment scheduling without over-blocking the chair',
      ],
      keywords: 'dental practice software, dental charting, dental clinic management, dentist scheduling',
    },
  },
  {
    slug: 'ginecologia',
    kind: 'specialty',
    icon: 'fa-venus',
    es: {
      name: 'Ginecología y Obstetricia',
      audience: 'ginecólogos y obstetras',
      pain: 'el control prenatal exige una secuencia de citas y estudios que el papel no recuerda por ti',
      points: [
        'Control prenatal con seguimiento de semanas y estudios pendientes',
        'Historial gineco-obstétrico completo disponible en consulta',
        'Recordatorio de controles periódicos y resultados de laboratorio',
      ],
      keywords: 'software ginecología, control prenatal digital, expediente obstétrico, consultorio ginecológico',
    },
    en: {
      name: 'OB-GYN',
      audience: 'OB-GYN practices',
      pain: 'prenatal care runs on a sequence of visits and studies that paper will not remember for you',
      points: [
        'Prenatal tracking by gestational week with pending studies flagged',
        'Complete obstetric and gynecologic history available in the room',
        'Reminders for periodic checkups and lab results',
      ],
      keywords: 'OB-GYN software, prenatal charting, obstetric EHR, womens health practice software',
    },
  },
  {
    slug: 'psicologia',
    kind: 'specialty',
    icon: 'fa-brain',
    es: {
      name: 'Psicología y Salud Mental',
      audience: 'psicólogos y terapeutas',
      pain: 'las notas de sesión son el activo más sensible de la consulta y suelen estar en cuadernos sin respaldo',
      points: [
        'Notas de sesión privadas con acceso restringido por rol',
        'Seguimiento de objetivos terapéuticos a lo largo del proceso',
        'Agenda de sesiones recurrentes con control de asistencia',
      ],
      keywords: 'software para psicólogos, notas de sesión digitales, consultorio psicológico, terapia',
    },
    en: {
      name: 'Psychology and Mental Health',
      audience: 'psychologists and therapists',
      pain: 'session notes are the most sensitive asset in the practice and usually live in unbacked notebooks',
      points: [
        'Private session notes with role-restricted access',
        'Therapeutic goal tracking across the course of treatment',
        'Recurring session scheduling with attendance tracking',
      ],
      keywords: 'therapy practice software, mental health EHR, session notes software, psychologist scheduling',
    },
  },
  {
    slug: 'nutricion',
    kind: 'specialty',
    icon: 'fa-apple-whole',
    es: {
      name: 'Nutrición',
      audience: 'nutricionistas',
      pain: 'la comparación de medidas entre consultas se hace de memoria o rehaciendo cálculos a mano',
      points: [
        'Registro de medidas antropométricas y comparación entre consultas',
        'Planes alimenticios asociados al expediente del paciente',
        'Seguimiento de metas y adherencia a lo largo del tratamiento',
      ],
      keywords: 'software nutrición, expediente nutricional, control antropométrico, consultorio nutricional',
    },
    en: {
      name: 'Nutrition',
      audience: 'dietitians and nutritionists',
      pain: 'comparing measurements between visits happens from memory or by redoing the math by hand',
      points: [
        'Anthropometric measurements recorded and compared across visits',
        'Meal plans attached to the patient chart',
        'Goal and adherence tracking throughout the program',
      ],
      keywords: 'nutrition practice software, dietitian EHR, body composition tracking, nutrition charting',
    },
  },
  {
    slug: 'oftalmologia',
    kind: 'specialty',
    icon: 'fa-eye',
    es: {
      name: 'Oftalmología',
      audience: 'oftalmólogos',
      pain: 'la graduación histórica y los estudios de imagen se consultan tarde porque están en otro archivo',
      points: [
        'Historial de agudeza visual y graduación por consulta',
        'Estudios e imágenes asociados al expediente del paciente',
        'Control de seguimiento posoperatorio con citas programadas',
      ],
      keywords: 'software oftalmología, expediente oftalmológico, clínica de ojos, optometría',
    },
    en: {
      name: 'Ophthalmology',
      audience: 'ophthalmologists and optometrists',
      pain: 'prior refraction and imaging get pulled up late because they live in a separate file',
      points: [
        'Visual acuity and refraction history per visit',
        'Imaging and studies attached to the patient chart',
        'Post-operative follow-up with scheduled visits',
      ],
      keywords: 'ophthalmology EHR, optometry practice software, eye clinic management, vision charting',
    },
  },
  {
    slug: 'cardiologia',
    kind: 'specialty',
    icon: 'fa-heart-pulse',
    es: {
      name: 'Cardiología',
      audience: 'cardiólogos',
      pain: 'el seguimiento de pacientes crónicos depende de recordar quién no volvió a control',
      points: [
        'Seguimiento de pacientes crónicos con controles programados',
        'Registro de estudios cardiológicos y resultados en el expediente',
        'Historial de medicación y ajustes de tratamiento en el tiempo',
      ],
      keywords: 'software cardiología, expediente cardiológico, seguimiento de pacientes crónicos, clínica cardiovascular',
    },
    en: {
      name: 'Cardiology',
      audience: 'cardiologists',
      pain: 'chronic patient follow-up depends on remembering who never came back',
      points: [
        'Chronic patient follow-up with scheduled checkups',
        'Cardiac studies and results recorded in the chart',
        'Medication history and treatment adjustments over time',
      ],
      keywords: 'cardiology EHR, cardiology practice software, chronic care tracking, cardiovascular clinic',
    },
  },
  {
    slug: 'fisioterapia',
    kind: 'specialty',
    icon: 'fa-person-walking',
    es: {
      name: 'Fisioterapia y Rehabilitación',
      audience: 'fisioterapeutas',
      pain: 'los paquetes de sesiones se descuentan mal y nadie sabe cuántas quedan',
      points: [
        'Control de paquetes de sesiones y saldo por paciente',
        'Registro de evolución funcional entre sesiones',
        'Agenda recurrente con asistencia y reprogramaciones',
      ],
      keywords: 'software fisioterapia, control de sesiones, centro de rehabilitación, terapia física',
    },
    en: {
      name: 'Physical Therapy',
      audience: 'physical therapists',
      pain: 'session packages get miscounted and nobody knows how many are left',
      points: [
        'Session package tracking with remaining balance per patient',
        'Functional progress recorded between sessions',
        'Recurring scheduling with attendance and reschedules',
      ],
      keywords: 'physical therapy software, rehab clinic management, session package tracking, PT scheduling',
    },
  },
  {
    slug: 'medicina-general',
    kind: 'specialty',
    icon: 'fa-user-doctor',
    es: {
      name: 'Medicina General',
      audience: 'médicos generales',
      pain: 'el volumen de consulta diaria deja poco margen para buscar expedientes en papel',
      points: [
        'Búsqueda de paciente e historial en segundos durante la consulta',
        'Recetas digitales listas para imprimir o enviar',
        'Alta rotación de citas con agenda organizada por turno',
      ],
      keywords: 'software medicina general, consultorio médico, expediente clínico general, sistema para médicos',
    },
    en: {
      name: 'Family and General Medicine',
      audience: 'general practitioners',
      pain: 'daily visit volume leaves no room for digging through paper charts',
      points: [
        'Patient lookup and history in seconds during the visit',
        'Digital prescriptions ready to print or send',
        'High appointment turnover with schedules organized by shift',
      ],
      keywords: 'family medicine EHR, general practice software, primary care charting, GP scheduling',
    },
  },
  {
    slug: 'laboratorio-clinico',
    kind: 'specialty',
    icon: 'fa-vials',
    es: {
      name: 'Laboratorio Clínico',
      audience: 'laboratorios clínicos',
      pain: 'las órdenes y los resultados viajan por WhatsApp y se pierde la trazabilidad',
      points: [
        'Órdenes de laboratorio ligadas al paciente y al médico solicitante',
        'Entrega de resultados con trazabilidad de cada muestra',
        'Catálogo de estudios con precios y control de facturación',
      ],
      keywords: 'software laboratorio clínico, gestión de muestras, resultados de laboratorio, LIS',
    },
    en: {
      name: 'Clinical Laboratory',
      audience: 'clinical labs',
      pain: 'orders and results travel over messaging apps and traceability disappears',
      points: [
        'Lab orders linked to the patient and the ordering physician',
        'Result delivery with traceability for every sample',
        'Test catalog with pricing and billing control',
      ],
      keywords: 'clinical lab software, LIS system, sample tracking, lab results management',
    },
  },
  {
    slug: 'clinica-estetica',
    kind: 'specialty',
    icon: 'fa-wand-magic-sparkles',
    es: {
      name: 'Clínica Estética',
      audience: 'clínicas estéticas',
      pain: 'los tratamientos por paquetes y el antes/después se registran en libretas y álbumes sueltos',
      points: [
        'Paquetes de tratamiento con sesiones consumidas y pendientes',
        'Registro fotográfico de evolución por procedimiento',
        'Consentimientos y fichas de procedimiento en el expediente',
      ],
      keywords: 'software clínica estética, medicina estética, control de paquetes, centro de belleza médica',
    },
    en: {
      name: 'Aesthetic Clinic',
      audience: 'aesthetic clinics',
      pain: 'treatment packages and before/after records end up in notebooks and loose photo albums',
      points: [
        'Treatment packages with sessions used and remaining',
        'Photo documentation of progress per procedure',
        'Consents and procedure forms stored in the chart',
      ],
      keywords: 'aesthetic clinic software, medspa management, treatment package tracking, cosmetic practice software',
    },
  },
  {
    slug: 'veterinaria',
    kind: 'specialty',
    icon: 'fa-paw',
    es: {
      name: 'Veterinaria',
      audience: 'clínicas veterinarias',
      pain: 'un mismo dueño con varias mascotas rompe cualquier control hecho en hoja de cálculo',
      points: [
        'Expediente por mascota vinculado al dueño responsable',
        'Control de desparasitación y vacunas con próximas fechas',
        'Venta de productos e insumos ligada a la consulta',
      ],
      keywords: 'software veterinario, clínica veterinaria, expediente de mascotas, gestión veterinaria',
    },
    en: {
      name: 'Veterinary',
      audience: 'veterinary clinics',
      pain: 'one owner with several pets breaks any tracking built in a spreadsheet',
      points: [
        'Chart per pet linked to the responsible owner',
        'Deworming and vaccination tracking with upcoming dates',
        'Product and supply sales tied to the visit',
      ],
      keywords: 'veterinary practice software, vet clinic management, pet records software, veterinary scheduling',
    },
  },
  {
    slug: 'ortopedia',
    kind: 'specialty',
    icon: 'fa-bone',
    es: {
      name: 'Ortopedia y Traumatología',
      audience: 'ortopedistas y traumatólogos',
      pain: 'los estudios de imagen y el seguimiento posquirúrgico quedan repartidos entre sobres y mensajes',
      points: [
        'Estudios de imagen asociados al expediente del paciente',
        'Seguimiento posquirúrgico con controles programados',
        'Historial de lesiones y procedimientos en una sola vista',
      ],
      keywords: 'software ortopedia, traumatología, expediente ortopédico, seguimiento posquirúrgico',
    },
    en: {
      name: 'Orthopedics',
      audience: 'orthopedic surgeons',
      pain: 'imaging and post-surgical follow-up end up split between envelopes and messages',
      points: [
        'Imaging studies attached to the patient chart',
        'Post-surgical follow-up with scheduled checkups',
        'Injury and procedure history in a single view',
      ],
      keywords: 'orthopedic EHR, orthopedics practice software, post-op tracking, musculoskeletal charting',
    },
  },
  {
    slug: 'otorrinolaringologia',
    kind: 'specialty',
    icon: 'fa-head-side-cough',
    es: {
      name: 'Otorrinolaringología',
      audience: 'otorrinolaringólogos',
      pain: 'los estudios audiológicos y endoscópicos se archivan aparte del historial del paciente',
      points: [
        'Registro de estudios audiológicos y endoscópicos en el expediente',
        'Seguimiento de tratamientos recurrentes y alergias',
        'Historial de procedimientos con notas por consulta',
      ],
      keywords: 'software otorrinolaringología, ORL, expediente otorrino, audiología',
    },
    en: {
      name: 'ENT / Otolaryngology',
      audience: 'ENT specialists',
      pain: 'audiology and endoscopy studies get filed away from the patient history',
      points: [
        'Audiology and endoscopy studies recorded in the chart',
        'Follow-up on recurring treatments and allergies',
        'Procedure history with notes per visit',
      ],
      keywords: 'ENT EHR, otolaryngology software, audiology records, ENT practice management',
    },
  },
  {
    slug: 'urologia',
    kind: 'specialty',
    icon: 'fa-stethoscope',
    es: {
      name: 'Urología',
      audience: 'urólogos',
      pain: 'el seguimiento de estudios periódicos depende de que el paciente recuerde volver',
      points: [
        'Control de estudios periódicos con recordatorio de próxima fecha',
        'Historial de resultados de laboratorio por paciente',
        'Seguimiento de tratamientos prolongados y procedimientos',
      ],
      keywords: 'software urología, expediente urológico, seguimiento de estudios, consultorio urológico',
    },
    en: {
      name: 'Urology',
      audience: 'urologists',
      pain: 'periodic screening depends on the patient remembering to come back',
      points: [
        'Periodic study tracking with next-due reminders',
        'Lab result history per patient',
        'Follow-up on long treatments and procedures',
      ],
      keywords: 'urology EHR, urology practice software, screening tracking, urologist charting',
    },
  },
];

/* ==========================================================================
 *  FUNCIONES DEL SISTEMA (producto: WAKE HEALTH)
 * ======================================================================== */
export const featureSeeds: LandingSeed[] = [
  {
    slug: 'expediente-clinico-electronico',
    kind: 'feature',
    icon: 'fa-notes-medical',
    es: {
      name: 'Expediente Clínico Electrónico',
      audience: 'clínicas y consultorios',
      pain: 'buscar el historial de un paciente en carpetas físicas cuesta minutos de consulta cada vez',
      points: [
        'Historial completo por paciente: diagnósticos, recetas y estudios',
        'Búsqueda inmediata por nombre, documento o teléfono',
        'Acceso por rol para que cada usuario vea solo lo que le corresponde',
      ],
      keywords: 'expediente clínico electrónico, historia clínica digital, EHR, historial médico digital',
    },
    en: {
      name: 'Electronic Health Records',
      audience: 'clinics and practices',
      pain: 'pulling a patient history from physical folders costs minutes of visit time every single time',
      points: [
        'Complete history per patient: diagnoses, prescriptions, and studies',
        'Instant search by name, ID, or phone number',
        'Role-based access so each user sees only what they should',
      ],
      keywords: 'electronic health records, EHR software, digital patient charts, medical records system',
    },
  },
  {
    slug: 'agenda-medica',
    kind: 'feature',
    icon: 'fa-calendar-check',
    es: {
      name: 'Agenda Médica',
      audience: 'recepción y equipo médico',
      pain: 'recepción y médicos trabajan con calendarios distintos y aparecen citas cruzadas',
      points: [
        'Calendario compartido entre recepción, médicos y consultorios',
        'Estados de cita: agendada, confirmada, atendida y cancelada',
        'Vista por día, médico o sala para llenar huecos de agenda',
      ],
      keywords: 'agenda médica online, sistema de citas médicas, calendario clínico, gestión de citas',
    },
    en: {
      name: 'Medical Scheduling',
      audience: 'front desk and clinical staff',
      pain: 'the front desk and physicians run separate calendars, and double bookings show up',
      points: [
        'Shared calendar across front desk, providers, and rooms',
        'Appointment states: booked, confirmed, seen, and cancelled',
        'Views by day, provider, or room to fill schedule gaps',
      ],
      keywords: 'medical scheduling software, appointment booking system, clinic calendar, patient scheduling',
    },
  },
  {
    slug: 'recetas-digitales',
    kind: 'feature',
    icon: 'fa-prescription',
    es: {
      name: 'Recetas Digitales',
      audience: 'médicos tratantes',
      pain: 'las recetas manuscritas se pierden, se malinterpretan y no dejan rastro en el historial',
      points: [
        'Recetas generadas desde la consulta y guardadas en el expediente',
        'Historial de medicación previa visible al momento de prescribir',
        'Formato legible listo para imprimir o enviar al paciente',
      ],
      keywords: 'recetas digitales, prescripción electrónica, receta médica online, historial de medicación',
    },
    en: {
      name: 'Digital Prescriptions',
      audience: 'treating physicians',
      pain: 'handwritten prescriptions get lost, misread, and leave no trace in the chart',
      points: [
        'Prescriptions issued from the visit and stored in the chart',
        'Prior medication history visible at the moment of prescribing',
        'Legible format ready to print or send to the patient',
      ],
      keywords: 'digital prescriptions, e-prescribing, electronic prescription software, medication history',
    },
  },
  {
    slug: 'facturacion-medica',
    kind: 'feature',
    icon: 'fa-file-invoice-dollar',
    es: {
      name: 'Facturación Médica y Caja',
      audience: 'administración de la clínica',
      pain: 'el cierre de caja no cuadra con lo atendido porque cobro y consulta viven en sistemas distintos',
      points: [
        'Cobros y servicios ligados a la consulta y al expediente',
        'Cierre de caja diario con desglose por método de pago',
        'Reportes de ingresos por periodo, médico o servicio',
      ],
      keywords: 'facturación médica, caja clínica, cobros consultorio, control de ingresos clínica',
    },
    en: {
      name: 'Medical Billing and Cash',
      audience: 'clinic administration',
      pain: 'the daily close never matches what was seen because payments and visits live in separate systems',
      points: [
        'Charges and services tied to the visit and the chart',
        'Daily close with a breakdown by payment method',
        'Revenue reports by period, provider, or service',
      ],
      keywords: 'medical billing software, clinic payments, practice revenue reporting, patient billing',
    },
  },
  {
    slug: 'diagnostico-con-ia',
    kind: 'feature',
    icon: 'fa-microchip',
    es: {
      name: 'Diagnóstico Asistido con IA',
      audience: 'médicos tratantes',
      pain: 'revisar antecedentes extensos bajo presión de tiempo aumenta el margen de error',
      points: [
        'Sugerencias clínicas basadas en la información del expediente',
        'Resumen de antecedentes relevantes antes de la consulta',
        'Apoyo al criterio médico, nunca sustitución del profesional',
      ],
      keywords: 'diagnóstico con inteligencia artificial, IA médica, apoyo diagnóstico, software clínico con IA',
    },
    en: {
      name: 'AI-Assisted Diagnosis',
      audience: 'treating physicians',
      pain: 'reviewing extensive history under time pressure widens the margin for error',
      points: [
        'Clinical suggestions grounded in the information already in the chart',
        'Summary of relevant history before the visit begins',
        'Support for clinical judgment, never a replacement for the professional',
      ],
      keywords: 'AI diagnosis software, clinical decision support, AI medical assistant, AI EHR',
    },
  },
  {
    slug: 'modulo-de-laboratorio',
    kind: 'feature',
    icon: 'fa-vials',
    es: {
      name: 'Módulo de Laboratorio',
      audience: 'clínicas con laboratorio propio o aliado',
      pain: 'las órdenes salen por un canal y los resultados vuelven por otro, sin quedar en el expediente',
      points: [
        'Órdenes de estudio generadas desde la consulta',
        'Resultados cargados directamente al expediente del paciente',
        'Catálogo de estudios con precios y facturación integrada',
      ],
      keywords: 'módulo de laboratorio, órdenes de laboratorio, resultados clínicos, integración laboratorio clínica',
    },
    en: {
      name: 'Laboratory Module',
      audience: 'clinics with in-house or partner labs',
      pain: 'orders leave through one channel and results come back through another, never reaching the chart',
      points: [
        'Study orders generated straight from the visit',
        'Results loaded directly into the patient chart',
        'Test catalog with pricing and integrated billing',
      ],
      keywords: 'laboratory module, lab orders software, clinical results integration, lab management',
    },
  },
  {
    slug: 'farmacia-e-inventario',
    kind: 'feature',
    icon: 'fa-pills',
    es: {
      name: 'Farmacia e Inventario',
      audience: 'clínicas con dispensario',
      pain: 'el inventario de insumos se descuadra porque nadie descuenta lo que se usó en consulta',
      points: [
        'Descuento automático de insumos usados en la consulta',
        'Alertas de existencias bajas y control de vencimientos',
        'Venta de medicamentos ligada al expediente del paciente',
      ],
      keywords: 'inventario médico, farmacia clínica, control de insumos, dispensario médico',
    },
    en: {
      name: 'Pharmacy and Inventory',
      audience: 'clinics with a dispensary',
      pain: 'supply inventory drifts because nobody deducts what was used during the visit',
      points: [
        'Automatic deduction of supplies used during the visit',
        'Low-stock alerts and expiration tracking',
        'Medication sales linked to the patient chart',
      ],
      keywords: 'medical inventory software, clinic pharmacy management, supply tracking, dispensary software',
    },
  },
  {
    slug: 'reportes-y-analitica',
    kind: 'feature',
    icon: 'fa-chart-line',
    es: {
      name: 'Reportes y Analítica',
      audience: 'dirección de la clínica',
      pain: 'las decisiones se toman con la sensación del mes y no con números del sistema',
      points: [
        'Ingresos por periodo, médico, servicio y método de pago',
        'Ocupación de agenda y detección de horarios muertos',
        'Volumen de pacientes nuevos versus recurrentes',
      ],
      keywords: 'reportes clínicos, analítica médica, indicadores de clínica, KPIs consultorio',
    },
    en: {
      name: 'Reporting and Analytics',
      audience: 'clinic leadership',
      pain: 'decisions get made on a feeling about the month instead of numbers from the system',
      points: [
        'Revenue by period, provider, service, and payment method',
        'Schedule utilization and detection of dead hours',
        'New versus returning patient volume',
      ],
      keywords: 'clinic reporting software, healthcare analytics, practice KPIs, medical business intelligence',
    },
  },
  {
    slug: 'atencion-de-emergencias',
    kind: 'feature',
    icon: 'fa-truck-medical',
    es: {
      name: 'Atención Directa de Emergencias',
      audience: 'clínicas con atención de urgencias',
      pain: 'en una urgencia el proceso administrativo normal cuesta minutos que el paciente no tiene',
      points: [
        'Registro inmediato saltando los pasos administrativos habituales',
        'Regularización del expediente después de estabilizar al paciente',
        'Trazabilidad de la atención de urgencia dentro del historial',
      ],
      keywords: 'atención de emergencias, urgencias médicas, ingreso rápido de paciente, triage digital',
    },
    en: {
      name: 'Direct Emergency Care',
      audience: 'clinics handling urgent care',
      pain: 'in an emergency the normal intake process costs minutes the patient does not have',
      points: [
        'Immediate intake that skips the usual administrative steps',
        'Chart completion after the patient is stabilized',
        'Full traceability of urgent care within the history',
      ],
      keywords: 'emergency intake software, urgent care management, rapid patient registration, digital triage',
    },
  },
  {
    slug: 'multisucursal',
    kind: 'feature',
    icon: 'fa-building',
    es: {
      name: 'Multi-sucursal',
      audience: 'redes de clínicas',
      pain: 'cada sucursal opera como una isla y la dirección no ve el panorama completo',
      points: [
        'Operación por sucursal con visión consolidada para dirección',
        'Pacientes que pueden ser atendidos en cualquier sede',
        'Permisos y reportes segmentados por ubicación',
      ],
      keywords: 'clínica multisucursal, red de clínicas, gestión multi sede, consolidado de sucursales',
    },
    en: {
      name: 'Multi-branch',
      audience: 'clinic networks',
      pain: 'each location runs as an island and leadership never sees the full picture',
      points: [
        'Per-location operation with a consolidated view for leadership',
        'Patients who can be seen at any site',
        'Permissions and reports segmented by location',
      ],
      keywords: 'multi-location clinic software, clinic network management, multi-site healthcare, consolidated reporting',
    },
  },
  {
    slug: 'acceso-movil',
    kind: 'feature',
    icon: 'fa-mobile-screen',
    es: {
      name: 'Acceso Móvil y Multidispositivo',
      audience: 'médicos en movimiento',
      pain: 'la información solo está disponible en la computadora del consultorio',
      points: [
        'Misma información desde computadora, tablet o celular',
        'Interfaz que se adapta a la pantalla sin instalar aplicaciones',
        'Consulta de agenda e historial fuera del consultorio',
      ],
      keywords: 'software médico móvil, acceso desde celular, clínica en la nube, sistema web médico',
    },
    en: {
      name: 'Mobile and Multi-device Access',
      audience: 'physicians on the move',
      pain: 'the information is only available on the computer sitting in the office',
      points: [
        'The same information from desktop, tablet, or phone',
        'An interface that adapts to the screen with nothing to install',
        'Schedule and history available outside the office',
      ],
      keywords: 'mobile medical software, cloud clinic system, web-based EHR, access from phone',
    },
  },
  {
    slug: 'respaldos-y-seguridad',
    kind: 'feature',
    icon: 'fa-shield-halved',
    es: {
      name: 'Respaldos y Seguridad',
      audience: 'responsables de la información clínica',
      pain: 'un expediente en papel se pierde una sola vez y no hay forma de recuperarlo',
      points: [
        'Copias de seguridad automáticas de la información clínica',
        'Accesos por rol con registro de quién consulta qué',
        'Exportación de la información de la clínica cuando se solicite',
      ],
      keywords: 'seguridad datos clínicos, respaldo de expedientes, confidencialidad médica, backup clínica',
    },
    en: {
      name: 'Backups and Security',
      audience: 'those responsible for clinical data',
      pain: 'a paper chart gets lost exactly once, and there is no way to get it back',
      points: [
        'Automatic backups of clinical information',
        'Role-based access with a record of who viewed what',
        'Export of the clinic’s information on request',
      ],
      keywords: 'clinical data security, medical records backup, patient data confidentiality, healthcare data protection',
    },
  },
];

/* ==========================================================================
 *  SECTORES (producto: WAKE SOLUTIONS)
 * ======================================================================== */
export const sectorSeeds: LandingSeed[] = [
  {
    slug: 'clinicas-y-centros-medicos',
    kind: 'sector',
    icon: 'fa-hospital',
    es: {
      name: 'Clínicas y Centros Médicos',
      audience: 'clínicas y centros médicos',
      pain: 'la operación clínica y la administrativa avanzan por caminos separados',
      points: [
        'Implementación de WAKE Health con acompañamiento del equipo',
        'Integración de facturación clínica con la contabilidad general',
        'Reportes de ocupación, ingresos y productividad por médico',
      ],
      keywords: 'tecnología para clínicas, digitalización centros médicos, software sector salud',
    },
    en: {
      name: 'Clinics and Medical Centers',
      audience: 'clinics and medical centers',
      pain: 'clinical and administrative operations run down two separate tracks',
      points: [
        'WAKE Health rollout with hands-on team support',
        'Clinical billing integrated with general accounting',
        'Utilization, revenue, and provider productivity reporting',
      ],
      keywords: 'healthcare technology, medical center digitization, healthcare sector software',
    },
  },
  {
    slug: 'retail-y-comercio',
    kind: 'sector',
    icon: 'fa-store',
    es: {
      name: 'Retail y Comercio',
      audience: 'comercios y cadenas de tiendas',
      pain: 'el inventario real y el inventario del sistema dejan de coincidir en cuanto hay varias sucursales',
      points: [
        'Inventario centralizado con visibilidad por sucursal',
        'Punto de venta conectado a existencias y facturación',
        'Reportes de rotación, margen y productos de baja salida',
      ],
      keywords: 'software retail, sistema punto de venta, control de inventario multisucursal, comercio',
    },
    en: {
      name: 'Retail and Commerce',
      audience: 'retailers and store chains',
      pain: 'physical inventory and system inventory stop matching the moment there is more than one location',
      points: [
        'Centralized inventory with per-location visibility',
        'Point of sale wired to stock levels and billing',
        'Turnover, margin, and slow-moving product reporting',
      ],
      keywords: 'retail software, point of sale system, multi-location inventory control, commerce technology',
    },
  },
  {
    slug: 'restaurantes',
    kind: 'sector',
    icon: 'fa-utensils',
    es: {
      name: 'Restaurantes',
      audience: 'restaurantes y cadenas de comida',
      pain: 'el costo real de cada platillo se estima porque las compras y el consumo no están conectados',
      points: [
        'Control de insumos con descuento por receta vendida',
        'Comandas y caja conectadas al inventario de cocina',
        'Reportes de costo por platillo y merma',
      ],
      keywords: 'software restaurantes, control de insumos cocina, sistema de comandas, costeo de recetas',
    },
    en: {
      name: 'Restaurants',
      audience: 'restaurants and food chains',
      pain: 'the true cost of each dish is a guess because purchasing and consumption are not connected',
      points: [
        'Supply tracking with deduction per recipe sold',
        'Orders and cash tied to kitchen inventory',
        'Cost-per-dish and waste reporting',
      ],
      keywords: 'restaurant software, kitchen inventory control, POS for restaurants, recipe costing',
    },
  },
  {
    slug: 'logistica-y-distribucion',
    kind: 'sector',
    icon: 'fa-truck',
    es: {
      name: 'Logística y Distribución',
      audience: 'distribuidoras y operadores logísticos',
      pain: 'el estado de un pedido depende de llamar a quien lo despachó',
      points: [
        'Trazabilidad de pedidos desde la orden hasta la entrega',
        'Control de rutas, despachos y confirmación de recepción',
        'Inventario de bodega sincronizado con ventas',
      ],
      keywords: 'software logística, gestión de distribución, trazabilidad de pedidos, control de bodega',
    },
    en: {
      name: 'Logistics and Distribution',
      audience: 'distributors and logistics operators',
      pain: 'the status of an order depends on calling whoever dispatched it',
      points: [
        'Order traceability from purchase order to delivery',
        'Route, dispatch, and delivery-confirmation control',
        'Warehouse inventory synced with sales',
      ],
      keywords: 'logistics software, distribution management, order tracking, warehouse control',
    },
  },
  {
    slug: 'servicios-profesionales',
    kind: 'sector',
    icon: 'fa-briefcase',
    es: {
      name: 'Servicios Profesionales',
      audience: 'despachos y firmas de servicios',
      pain: 'las horas facturables y el avance de cada proyecto se reconstruyen a fin de mes',
      points: [
        'Registro de tiempo y avance por proyecto o cliente',
        'Facturación recurrente y seguimiento de cobros',
        'Expediente por cliente con documentos y comunicaciones',
      ],
      keywords: 'software servicios profesionales, gestión de proyectos, control de horas facturables, despachos',
    },
    en: {
      name: 'Professional Services',
      audience: 'firms and professional practices',
      pain: 'billable hours and project progress get reconstructed at the end of the month',
      points: [
        'Time and progress tracking per project or client',
        'Recurring billing with collections follow-up',
        'Client file with documents and communications',
      ],
      keywords: 'professional services software, project management, billable hours tracking, firm management',
    },
  },
  {
    slug: 'manufactura',
    kind: 'sector',
    icon: 'fa-industry',
    es: {
      name: 'Manufactura',
      audience: 'plantas y talleres de producción',
      pain: 'no se sabe el costo real de producción hasta que ya se vendió el lote',
      points: [
        'Órdenes de producción con consumo de materia prima',
        'Costeo por lote y control de mermas',
        'Inventario de producto terminado conectado a ventas',
      ],
      keywords: 'software manufactura, control de producción, costeo de lotes, ERP producción',
    },
    en: {
      name: 'Manufacturing',
      audience: 'plants and production shops',
      pain: 'true production cost is unknown until the batch has already been sold',
      points: [
        'Production orders with raw-material consumption',
        'Cost per batch and waste control',
        'Finished-goods inventory connected to sales',
      ],
      keywords: 'manufacturing software, production control, batch costing, production ERP',
    },
  },
  {
    slug: 'educacion',
    kind: 'sector',
    icon: 'fa-graduation-cap',
    es: {
      name: 'Educación',
      audience: 'centros educativos y academias',
      pain: 'matrícula, pagos y expediente académico viven en tres sistemas que no se hablan',
      points: [
        'Matrícula y expediente del estudiante en un solo lugar',
        'Control de pagos, mensualidades y morosidad',
        'Reportes de asistencia y desempeño por grupo',
      ],
      keywords: 'software educativo, gestión escolar, control de matrícula, administración academia',
    },
    en: {
      name: 'Education',
      audience: 'schools and academies',
      pain: 'enrollment, payments, and academic records live in three systems that never talk',
      points: [
        'Enrollment and student records in one place',
        'Payment, tuition, and delinquency tracking',
        'Attendance and performance reporting by group',
      ],
      keywords: 'education software, school management system, enrollment tracking, academy administration',
    },
  },
  {
    slug: 'inmobiliaria',
    kind: 'sector',
    icon: 'fa-building-user',
    es: {
      name: 'Inmobiliaria',
      audience: 'inmobiliarias y administradoras',
      pain: 'el seguimiento de prospectos y contratos depende de la memoria de cada asesor',
      points: [
        'Inventario de propiedades con estado y disponibilidad',
        'Seguimiento de prospectos y etapas de negociación',
        'Control de contratos, rentas y vencimientos',
      ],
      keywords: 'software inmobiliario, CRM inmobiliario, gestión de propiedades, control de rentas',
    },
    en: {
      name: 'Real Estate',
      audience: 'brokerages and property managers',
      pain: 'lead and contract follow-up depends on each agent’s memory',
      points: [
        'Property inventory with status and availability',
        'Lead tracking through negotiation stages',
        'Contract, rent, and renewal-date control',
      ],
      keywords: 'real estate software, real estate CRM, property management system, lease tracking',
    },
  },
  {
    slug: 'farmacias',
    kind: 'sector',
    icon: 'fa-prescription-bottle-medical',
    es: {
      name: 'Farmacias',
      audience: 'farmacias y cadenas farmacéuticas',
      pain: 'los vencimientos se detectan cuando ya no se puede vender el producto',
      points: [
        'Control de lotes y fechas de vencimiento con alertas',
        'Punto de venta conectado al inventario en tiempo real',
        'Reportes de rotación y reposición sugerida',
      ],
      keywords: 'software farmacia, control de lotes, punto de venta farmacia, inventario farmacéutico',
    },
    en: {
      name: 'Pharmacies',
      audience: 'pharmacies and pharmacy chains',
      pain: 'expirations get noticed once the product can no longer be sold',
      points: [
        'Batch and expiration tracking with alerts',
        'Point of sale wired to real-time inventory',
        'Turnover reports with suggested restocking',
      ],
      keywords: 'pharmacy software, batch tracking, pharmacy POS, pharmaceutical inventory',
    },
  },
  {
    slug: 'hoteles-y-turismo',
    kind: 'sector',
    icon: 'fa-hotel',
    es: {
      name: 'Hoteles y Turismo',
      audience: 'hoteles y operadores turísticos',
      pain: 'la disponibilidad real se confirma llamando a recepción',
      points: [
        'Control de reservas y disponibilidad en tiempo real',
        'Consumos y cargos ligados a la habitación',
        'Reportes de ocupación e ingresos por temporada',
      ],
      keywords: 'software hotelero, gestión de reservas, control de ocupación, turismo',
    },
    en: {
      name: 'Hotels and Tourism',
      audience: 'hotels and tour operators',
      pain: 'real availability gets confirmed by calling the front desk',
      points: [
        'Reservation and availability control in real time',
        'Consumption and charges tied to the room',
        'Occupancy and revenue reporting by season',
      ],
      keywords: 'hotel software, reservation management, occupancy control, tourism technology',
    },
  },
];

export const allLandingSeeds: LandingSeed[] = [
  ...specialtySeeds,
  ...featureSeeds,
  ...sectorSeeds,
];
