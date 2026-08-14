/**
 * ============================================================================
 *  WAKE — ARCHIVO CENTRAL DE CONSTANTES
 * ============================================================================
 *  Todo lo que cambia con frecuencia (precios, enlaces, redes sociales,
 *  contacto, IDs de Paddle) vive AQUÍ y en ningún otro lugar.
 *  Si necesitas cambiar un precio o una URL, este es el único archivo que
 *  tienes que tocar.
 * ============================================================================
 */

/* --------------------------------------------------------------------------
 *  1. PRECIOS
 *  Cambia `healthMonthly` y el precio se actualiza en TODO el sitio:
 *  landing principal, sitio de Wake Health, JSON-LD (Google), FAQ y sitemap.
 * ------------------------------------------------------------------------ */
export const PRICING = {
  /** Precio mensual de WAKE HEALTH en dólares. ← CAMBIA SOLO ESTE NÚMERO */
  healthMonthly: 24.99,
  /** Moneda ISO usada en los datos estructurados de Google */
  currency: 'USD',
  /** Símbolo que se muestra antes del número */
  symbol: '$',
  /** Días de prueba gratuita (no hay reembolso; en su lugar se da prueba) */
  trialDays: 3,
} as const;

/** "19.99" — solo el número, para JSON-LD / schema.org */
export const healthPriceRaw = PRICING.healthMonthly.toFixed(2);
/** "$19.99" — para mostrar en pantalla */
export const healthPriceLabel = `${PRICING.symbol}${healthPriceRaw}`;

/* --------------------------------------------------------------------------
 *  2. IDENTIDAD Y CONTACTO
 * ------------------------------------------------------------------------ */
export const BRAND = {
  name: 'WAKE SOLUTIONS',
  healthName: 'WAKE HEALTH',
  url: 'https://wake.solutions',
  email: 'ventas@wake.solutions',
  whatsapp: '50433292869',
  whatsappDisplay: '+504 3329-2869',
  foundingYear: 2024,
  copyrightYear: 2026,
} as const;

export const LOCATION = {
  country: 'Honduras',
  region: 'Centroamérica',
  city: 'Tegucigalpa',
  addressRegion: 'Francisco Morazán',
  geoRegionEs: 'HN',
  geoRegionEn: 'US',
  latitude: 14.0723,
  longitude: -87.1921,
} as const;

/* --------------------------------------------------------------------------
 *  3. REDES SOCIALES
 *  Reemplaza los '#' por las URLs reales cuando las tengas.
 *  Los iconos que sigan en '#' se muestran igual pero no navegan;
 *  usa `activeSocialLinks` si prefieres ocultarlos hasta tenerlas.
 * ------------------------------------------------------------------------ */
export const SOCIAL = {
  facebook: '#',
  instagram: '#',
  linkedin: '#',
  tiktok: '#',
  youtube: '#',
  x: '#',
} as const;

export type SocialKey = keyof typeof SOCIAL;

/** Orden y iconos (Font Awesome) de los enlaces sociales del footer */
export const SOCIAL_LINKS: Array<{
  key: SocialKey;
  label: string;
  icon: string;
}> = [
  { key: 'facebook', label: 'Facebook', icon: 'fa-brands fa-facebook' },
  { key: 'instagram', label: 'Instagram', icon: 'fa-brands fa-instagram' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
  { key: 'tiktok', label: 'TikTok', icon: 'fa-brands fa-tiktok' },
  { key: 'youtube', label: 'YouTube', icon: 'fa-brands fa-youtube' },
  { key: 'x', label: 'X', icon: 'fa-brands fa-x-twitter' },
];

/** Solo las redes que ya tienen URL real (útil para JSON-LD `sameAs`) */
export const activeSocialLinks = SOCIAL_LINKS.filter(
  ({ key }) => SOCIAL[key] !== '#' && typeof SOCIAL[key] === 'string' && (SOCIAL[key] as string).length > 0,
);

/* --------------------------------------------------------------------------
 *  4. PAGOS (Paddle)
 *  IMPORTANTE: el precio mostrado arriba y el precio configurado en Paddle
 *  deben coincidir. Si cambias `PRICING.healthMonthly`, crea el precio nuevo
 *  en Paddle y pega su ID en `paddle.prices.health`.
 * ------------------------------------------------------------------------ */
export const PADDLE = {
  token: 'live_2361ad8192506b03ec7b58407db',
  prices: {
    /** Precio único de WAKE HEALTH — debe reflejar PRICING.healthMonthly */
    health: 'pri_01krmbnb8c7nskjpaj785ry82v',
  },
} as const;

/* --------------------------------------------------------------------------
 *  5. ENLACES EXTERNOS Y ASSETS
 * ------------------------------------------------------------------------ */
export const LINKS = {
  healthAppLogin: 'https://wakehealth.vercel.app/login',
} as const;

export const ASSETS = {
  healthLogo:
    'https://lh3.googleusercontent.com/d/1Bkvz0VkWBsWgZIh6ewkMzUFqVQfj3FOQ',
  healthLogoSvg:
    'https://pub-c91a757ecc0647fc9f8436786c936eff.r2.dev/logos/WAKE%20healt%20svg.svg',
  healthHeroBg:
    'https://pub-f6d32fe4d40f4f899fa753aab8eb28d5.r2.dev/healthwpp.png',
  trustLogos: [
    'https://lh3.googleusercontent.com/d/1ZwSVPhyS1dJcbxYjlJH8PfO0Q9sc64NB',
    'https://lh3.googleusercontent.com/d/1dFJNLP-3p855R1hCtLvAnAEDIBlzuPEr',
    'https://lh3.googleusercontent.com/d/18bvpl-104yGuCtGxQ-3w_XzOX-Vk576p',
    'https://lh3.googleusercontent.com/d/1S3byR29fdjwN_VtF8eecd5NhSGk5oCMY',
    'https://lh3.googleusercontent.com/d/1-Ioj0XeJoDFmjQpkEftAVIgM81WknWe0',
  ],
  gallery: [
    {
      src: 'https://pub-f6d32fe4d40f4f899fa753aab8eb28d5.r2.dev/capturaswakehealth/wkhpantallaprincipal.png',
      key: 'dashboard',
    },
    {
      src: 'https://pub-f6d32fe4d40f4f899fa753aab8eb28d5.r2.dev/capturaswakehealth/wkhcontroltotal.png',
      key: 'appointments',
    },
    {
      src: 'https://pub-f6d32fe4d40f4f899fa753aab8eb28d5.r2.dev/capturaswakehealth/wkhdatos.png',
      key: 'records',
    },
    {
      src: 'https://pub-f6d32fe4d40f4f899fa753aab8eb28d5.r2.dev/capturaswakehealth/wkhatenciondirecta.png',
      key: 'directCare',
    },
    {
      src: 'https://pub-f6d32fe4d40f4f899fa753aab8eb28d5.r2.dev/capturaswakehealth/wkhoptimizadoconia.png',
      key: 'aiDiagnosis',
    },
    {
      src: 'https://pub-f6d32fe4d40f4f899fa753aab8eb28d5.r2.dev/capturaswakehealth/wkhresponsivo.png',
      key: 'multidevice',
    },
  ],
} as const;

/* --------------------------------------------------------------------------
 *  6. AGREGADO — objeto único usado por los componentes
 * ------------------------------------------------------------------------ */
export const SITE = {
  ...BRAND,
  location: LOCATION,
  social: SOCIAL,
  socialLinks: SOCIAL_LINKS,
  healthAppLogin: LINKS.healthAppLogin,
  paddle: PADDLE,
  pricing: PRICING,
  assets: ASSETS,
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
