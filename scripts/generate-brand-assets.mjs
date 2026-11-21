import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");

async function main() {
  const faviconSvg = await fs.readFile(path.join(PUBLIC_DIR, "favicon.svg"));

  // 1. Apple touch icon (180x180 PNG)
  await sharp(faviconSvg)
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));

  // 2. Classic favicon.ico (valid ICO wrapping a 32x32 PNG)
  const png32 = await sharp(faviconSvg).resize(32, 32).png().toBuffer();
  const icoHeader = Buffer.alloc(6 + 16);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // count = 1
  icoHeader.writeUInt8(32, 6); // width
  icoHeader.writeUInt8(32, 7); // height
  icoHeader.writeUInt8(0, 8); // colors
  icoHeader.writeUInt8(0, 9); // reserved
  icoHeader.writeUInt16LE(1, 10); // planes
  icoHeader.writeUInt16LE(32, 12); // bpp
  icoHeader.writeUInt32LE(png32.length, 14); // image size
  icoHeader.writeUInt32LE(22, 18); // image offset
  await fs.writeFile(
    path.join(PUBLIC_DIR, "favicon.ico"),
    Buffer.concat([icoHeader, png32])
  );

  // 3. Branded Tech Modern default-og.jpg (1200x630)
  const ogSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0B1120"/>
        <stop offset="55%" stop-color="#0F172A"/>
        <stop offset="100%" stop-color="#082F49"/>
      </linearGradient>
      <radialGradient id="glow" cx="80%" cy="25%" r="55%">
        <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#1E293B" stroke-width="1" opacity="0.65"/>
      </pattern>
    </defs>

    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>

    <!-- Border frame -->
    <rect x="44" y="44" width="1112" height="542" rx="28" fill="#0F172A" fill-opacity="0.72" stroke="#1E293B" stroke-width="2"/>

    <!-- Brand mark -->
    <g transform="translate(96, 108)">
      <rect width="68" height="68" rx="18" fill="#0B1120" stroke="#1E293B" stroke-width="2"/>
      <circle cx="34" cy="34" r="22" fill="none" stroke="#0284C7" stroke-opacity="0.45" stroke-width="2.5"/>
      <path d="M50 34a16 16 0 0 1-16 16" fill="none" stroke="#38BDF8" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M18 34a16 16 0 0 1 16-16" fill="none" stroke="#38BDF8" stroke-width="3.2" stroke-linecap="round"/>
      <circle cx="34" cy="34" r="5.5" fill="#38BDF8"/>
    </g>

    <!-- Eyebrow badge -->
    <rect x="184" y="124" width="218" height="36" rx="18" fill="#0C4A6E" stroke="#0284C7" stroke-width="1.2"/>
    <circle cx="206" cy="142" r="5" fill="#38BDF8"/>
    <text x="222" y="148" fill="#E0F2FE" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" letter-spacing="1.4">EDICION DIARIA TECH</text>

    <!-- Main headline -->
    <text x="96" y="292" fill="#F8FAFC" font-family="system-ui, -apple-system, sans-serif" font-size="84" font-weight="800" letter-spacing="-2">Ping Diario</text>

    <!-- Subtitle -->
    <text x="96" y="362" fill="#CBD5E1" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="400">El pulso diario de Cloud Native, IA, Kubernetes,</text>
    <text x="96" y="404" fill="#CBD5E1" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="400">Seguridad e Infraestructura empresarial.</text>

    <!-- Category pills -->
    <g font-family="ui-monospace, monospace" font-size="16" font-weight="600">
      <rect x="96" y="456" width="66" height="36" rx="10" fill="#1E293B" stroke="#334155"/>
      <text x="129" y="480" text-anchor="middle" fill="#A78BFA">IA</text>
      <rect x="174" y="456" width="96" height="36" rx="10" fill="#1E293B" stroke="#334155"/>
      <text x="222" y="480" text-anchor="middle" fill="#38BDF8">CLOUD</text>
      <rect x="282" y="456" width="144" height="36" rx="10" fill="#1E293B" stroke="#334155"/>
      <text x="354" y="480" text-anchor="middle" fill="#7DD3FC">KUBERNETES</text>
      <rect x="438" y="456" width="132" height="36" rx="10" fill="#1E293B" stroke="#334155"/>
      <text x="504" y="480" text-anchor="middle" fill="#FB7185">SEGURIDAD</text>
      <rect x="582" y="456" width="104" height="36" rx="10" fill="#1E293B" stroke="#334155"/>
      <text x="634" y="480" text-anchor="middle" fill="#34D399">DEVOPS</text>
    </g>

    <!-- Footer domain -->
    <text x="1104" y="534" text-anchor="end" fill="#38BDF8" font-family="ui-monospace, monospace" font-size="24" font-weight="700">pingdiario.com</text>
    <text x="96" y="534" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="20">Nauta Lab · @pingdiario</text>
  </svg>`;

  await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(PUBLIC_DIR, "default-og.jpg"));

  console.log("[brand-assets] Generados favicon.ico, apple-touch-icon.png y default-og.jpg");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
