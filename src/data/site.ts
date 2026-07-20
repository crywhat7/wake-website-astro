export const SITE = {
  name: 'WAKE SOLUTIONS',
  healthName: 'WAKE HEALTH',
  url: 'https://wake.solutions',
  email: 'ventas@wake.solutions',
  whatsapp: '50433292869',
  whatsappDisplay: '+504 3329-2869',
  location: {
    country: 'Honduras',
    region: 'Centroamérica',
    geoRegionEs: 'HN',
    geoRegionEn: 'US',
  },
  social: {
    facebook: '#',
    linkedin: '#',
    instagram: '#',
  },
  healthAppLogin: 'https://wakehealth.vercel.app/login',
  paddle: {
    token: 'live_2361ad8192506b03ec7b58407db',
    prices: {
      basic: 'pri_01krmbgr56p436gyy0vpk98pgn',
      plus: 'pri_01krmbnb8c7nskjpaj785ry82v',
    },
  },
  assets: {
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
  },
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
