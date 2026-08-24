/**
 * ============================================================================
 *  WAKE — GENERADOR DE ASSETS SOCIALES E ICONOS
 * ============================================================================
 *  Crea, dentro de `public/`, todo lo que las redes sociales y los navegadores
 *  necesitan y que no se puede resolver con un SVG:
 *
 *    public/og/wake-solutions.png       1200x630  (Open Graph / WhatsApp / X)
 *    public/og/wake-solutions-en.png    1200x630
 *    public/og/wake-health.png          1200x630
 *    public/og/wake-health-en.png       1200x630
 *    public/og/wake-solutions-square.png 1200x1200 (WhatsApp/Telegram cuadrado)
 *    public/og/wake-health-square.png    1200x1200
 *    public/favicon.ico                 16+32+48  (multi-resolución real)
 *    public/favicon-96.png
 *    public/apple-touch-icon.png        180x180
 *    public/icon-192.png                192x192
 *    public/icon-512.png                512x512
 *    public/icon-512-maskable.png       512x512 con safe-zone Android
 *
 *  IMPORTANTE (WhatsApp): WhatsApp solo previsualiza imágenes JPG/PNG con URL
 *  absoluta y menos de ~300 KB. Por eso todo aquí sale en PNG comprimido.
 *
 *  Uso:  node scripts/generate-assets.mjs
 *  Se ejecuta solo en `npm run build`; los PNG quedan versionados en git.
 * ============================================================================
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(process.cwd());
const publicDir = path.join(root, 'public');
const ogDir = path.join(publicDir, 'og');
const logoSvg = path.join(publicDir, 'favicon.svg');

fs.mkdirSync(ogDir, { recursive: true });

/* -------------------------------------------------------------------------
 *  Paleta (espejo de src/styles/global.css)
 * ---------------------------------------------------------------------- */
const C = {
  ink: '#0c0c0d',
  health: '#141618',
  accent: '#00f59b',
  accentSoft: '#adfcdc',
  white: '#ffffff',
  muted: '#8e8e93',
};

const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "'Menlo', 'Geist Mono', ui-monospace, monospace";

/** Escapa texto para incrustarlo en XML/SVG. */
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c],
  );

/* -------------------------------------------------------------------------
 *  Tarjeta Open Graph 1200x630
 * ---------------------------------------------------------------------- */
function ogCard({ bg, eyebrow, title, subtitle, footer, accent = C.accent }) {
  const lines = Array.isArray(title) ? title : [title];
  const titleY = lines.length > 1 ? 268 : 300;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="82%" cy="14%" r="62%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.30"/>
      <stop offset="55%" stop-color="${accent}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="${C.accentSoft}"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="${C.white}" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="${bg}"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#bar)"/>

  <text x="88" y="164" font-family="${MONO}" font-size="22" font-weight="500"
        letter-spacing="6" fill="${accent}">${esc(eyebrow.toUpperCase())}</text>

  ${lines
    .map(
      (line, i) =>
        `<text x="84" y="${titleY + i * 84}" font-family="${FONT}" font-size="76" font-weight="700"
        letter-spacing="-2.5" fill="${C.white}">${esc(line)}</text>`,
    )
    .join('\n  ')}

  <text x="88" y="${titleY + lines.length * 84 + 34}" font-family="${FONT}" font-size="30"
        font-weight="400" fill="#c9c9ce">${esc(subtitle)}</text>

  <rect x="88" y="536" width="46" height="3" fill="${accent}"/>
  <text x="88" y="580" font-family="${MONO}" font-size="24" font-weight="500"
        letter-spacing="1" fill="${C.muted}">${esc(footer)}</text>
</svg>`;
}

/** Renderiza una tarjeta OG y le compone el logo arriba a la derecha. */
async function writeOgCard(file, card, logoSize = 132) {
  const logo = await sharp(logoSvg)
    .resize({ width: logoSize, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const { height } = await sharp(logo).metadata();

  await sharp(Buffer.from(card))
    .composite([{ input: logo, left: 1200 - logoSize - 84, top: 128 - Math.round(height / 2) }])
    .png({ compressionLevel: 9 })
    .toFile(file);
}

/* -------------------------------------------------------------------------
 *  Iconos
 * ---------------------------------------------------------------------- */
/** Icono cuadrado: el logo (30x22) centrado sobre fondo sólido con padding. */
async function squareIcon(size, { bg = C.ink, pad = 0.16, radius = 0 } = {}) {
  const inner = Math.round(size * (1 - pad * 2));
  const logo = await sharp(logoSvg)
    .resize({ width: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const { height } = await sharp(logo).metadata();

  const base =
    radius > 0
      ? sharp(
          Buffer.from(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="${bg}"/></svg>`,
          ),
        )
      : sharp({
          create: { width: size, height: size, channels: 4, background: bg },
        });

  return base
    .composite([
      {
        input: logo,
        left: Math.round((size - inner) / 2),
        top: Math.round((size - height) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/**
 * Empaqueta varios PNG en un .ico real (multi-resolución).
 * El formato ICO admite PNG embebido desde Vista; todos los navegadores
 * actuales lo leen, y así evitamos depender de ImageMagick.
 */
function buildIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo: 1 = icono
  header.writeUInt16LE(pngs.length, 4);

  let offset = 6 + pngs.length * 16;
  const entries = [];

  for (const { size, data } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // ancho (0 = 256)
    e.writeUInt8(size >= 256 ? 0 : size, 1); // alto
    e.writeUInt8(0, 2); // paleta
    e.writeUInt8(0, 3); // reservado
    e.writeUInt16LE(1, 4); // planos
    e.writeUInt16LE(32, 6); // bits por pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    entries.push(e);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

/* -------------------------------------------------------------------------
 *  Ejecución
 * ---------------------------------------------------------------------- */
const cards = [
  {
    file: 'wake-solutions.png',
    bg: C.ink,
    eyebrow: 'Software a la medida',
    title: ['Sistemas que ordenan', 'tu operación'],
    subtitle: 'Software para clínicas y empresas en Honduras, LATAM y USA.',
    footer: 'wake.solutions',
  },
  {
    file: 'wake-solutions-en.png',
    bg: C.ink,
    eyebrow: 'Custom software',
    title: ['Systems that put', 'your operation in order'],
    subtitle: 'Software for clinics and companies across LATAM and the US.',
    footer: 'wake.solutions',
  },
  {
    file: 'wake-health.png',
    bg: C.health,
    eyebrow: 'WAKE Health',
    title: ['El sistema para', 'clínicas y consultorios'],
    subtitle: 'Citas, expediente digital e IA clínica en una sola plataforma.',
    footer: 'wake.solutions/health',
  },
  {
    file: 'wake-health-en.png',
    bg: C.health,
    eyebrow: 'WAKE Health',
    title: ['The system for', 'clinics and practices'],
    subtitle: 'Scheduling, digital records and clinical AI in one platform.',
    footer: 'wake.solutions/en/health',
  },
];

for (const { file, ...card } of cards) {
  await writeOgCard(path.join(ogDir, file), ogCard(card));
}

// Variante cuadrada: algunos clientes (Telegram, ciertos WhatsApp) recortan a 1:1.
for (const [src, dest] of [
  ['wake-solutions.png', 'wake-solutions-square.png'],
  ['wake-health.png', 'wake-health-square.png'],
]) {
  await sharp(path.join(ogDir, src))
    .resize(1200, 1200, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9 })
    .toFile(path.join(ogDir, dest));
}

const icoSizes = [16, 32, 48];
const icoPngs = [];
for (const size of icoSizes) {
  icoPngs.push({ size, data: await squareIcon(size, { pad: 0.1 }) });
}
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), buildIco(icoPngs));

fs.writeFileSync(path.join(publicDir, 'favicon-96.png'), await squareIcon(96, { pad: 0.12 }));
fs.writeFileSync(
  path.join(publicDir, 'apple-touch-icon.png'),
  // iOS no aplica esquinas redondeadas al recorte, pero sí exige fondo opaco.
  await squareIcon(180, { pad: 0.18 }),
);
fs.writeFileSync(path.join(publicDir, 'icon-192.png'), await squareIcon(192, { pad: 0.16 }));
fs.writeFileSync(path.join(publicDir, 'icon-512.png'), await squareIcon(512, { pad: 0.16 }));
// Maskable: Android recorta hasta un 20% por lado, así que el logo va más chico.
fs.writeFileSync(
  path.join(publicDir, 'icon-512-maskable.png'),
  await squareIcon(512, { pad: 0.28 }),
);

const report = [
  ...cards.map((c) => `og/${c.file}`),
  'og/wake-solutions-square.png',
  'og/wake-health-square.png',
  'favicon.ico',
  'favicon-96.png',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png',
];

for (const f of report) {
  const kb = (fs.statSync(path.join(publicDir, f)).size / 1024).toFixed(1);
  console.log(`[assets] public/${f.padEnd(30)} ${kb.padStart(7)} KB`);
}
console.log(`[assets] ${report.length} archivos generados.`);
