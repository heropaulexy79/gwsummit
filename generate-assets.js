import fs from 'node:fs';
import path from 'node:path';

function makeSvg(title, subtitle, category, width, height, bg1, bg2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
    <defs>
      <linearGradient id="grad-${title.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg1}" />
        <stop offset="100%" stop-color="${bg2}" />
      </linearGradient>
      <radialGradient id="glow-${title.replace(/\s+/g, '')}" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#C6A96B" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.75" />
      </radialGradient>
      <pattern id="pattern-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F6F3EB" stroke-opacity="0.04" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#grad-${title.replace(/\s+/g, '')})" />
    <rect width="${width}" height="${height}" fill="url(#glow-${title.replace(/\s+/g, '')})" />
    <rect width="${width}" height="${height}" fill="url(#pattern-grid)" />

    <!-- Editorial border -->
    <rect x="24" y="24" width="${width - 48}" height="${height - 48}" fill="none" stroke="#C6A96B" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="8 8" />
    
    <!-- Gold accent corners -->
    <path d="M 24 54 L 24 24 L 54 24" fill="none" stroke="#C6A96B" stroke-width="2.5" />
    <path d="M ${width - 24} 54 L ${width - 24} 24 L ${width - 54} 24" fill="none" stroke="#C6A96B" stroke-width="2.5" />
    <path d="M 24 ${height - 54} L 24 ${height - 24} L 54 ${height - 24}" fill="none" stroke="#C6A96B" stroke-width="2.5" />
    <path d="M ${width - 24} ${height - 54} L ${width - 24} ${height - 24} L ${width - 54} ${height - 24}" fill="none" stroke="#C6A96B" stroke-width="2.5" />

    <!-- Badge -->
    <rect x="${width / 2 - 140}" y="55" width="280" height="38" rx="19" fill="#252820" fill-opacity="0.85" stroke="#C6A96B" stroke-width="1" />
    <text x="${width / 2}" y="79" font-family="'Manrope', sans-serif" font-size="12" letter-spacing="3" fill="#F6F3EB" text-anchor="middle" font-weight="600">${category.toUpperCase()} • 2026 ARCHIVE</text>

    <!-- Center Icon Symbol -->
    <circle cx="${width / 2}" cy="${height / 2 - 45}" r="50" fill="#3F4B2B" stroke="#C6A96B" stroke-width="1.5" />
    <circle cx="${width / 2}" cy="${height / 2 - 45}" r="40" fill="none" stroke="#F6F3EB" stroke-opacity="0.3" stroke-width="1" stroke-dasharray="4 4" />
    <text x="${width / 2}" y="${height / 2 - 37}" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" letter-spacing="2" fill="#C6A96B" text-anchor="middle" font-weight="bold">GWS</text>

    <!-- Typography -->
    <text x="${width / 2}" y="${height / 2 + 50}" font-family="'Playfair Display', Georgia, serif" font-size="${width > 1200 ? 38 : 30}" font-weight="bold" letter-spacing="1" fill="#FFFFFF" text-anchor="middle">${title}</text>
    <text x="${width / 2}" y="${height / 2 + 90}" font-family="'Manrope', sans-serif" font-size="16" fill="#EAE5D8" fill-opacity="0.9" text-anchor="middle">${subtitle}</text>

    <!-- Notice -->
    <rect x="${width / 2 - 180}" y="${height - 75}" width="360" height="32" rx="6" fill="#000000" fill-opacity="0.65" stroke="#69764A" stroke-width="0.8" />
    <text x="${width / 2}" y="${height - 54}" font-family="'Manrope', sans-serif" font-size="11" letter-spacing="1.5" fill="#C6A96B" text-anchor="middle">[ OFFICIAL 2026 SUMMIT PHOTOGRAPHY ARCHIVE ]</text>
  </svg>`;
}

// Hero SVG
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14180E" />
      <stop offset="35%" stop-color="#2D361F" />
      <stop offset="70%" stop-color="#3F4B2B" />
      <stop offset="100%" stop-color="#1E2316" />
    </linearGradient>
    <radialGradient id="spotlight" cx="65%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#C6A96B" stop-opacity="0.32" />
      <stop offset="50%" stop-color="#69764A" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#0F120A" stop-opacity="0.9" />
    </radialGradient>
    <radialGradient id="ambientLeft" cx="20%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#A5AE8B" stop-opacity="0.12" />
      <stop offset="100%" stop-color="transparent" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#bgGrad)" />
  <rect width="1920" height="1080" fill="url(#spotlight)" />
  <rect width="1920" height="1080" fill="url(#ambientLeft)" />
  
  <!-- Subtle silhouette representing women in fellowship & prayer -->
  <g opacity="0.22" fill="#F6F3EB">
    <circle cx="1320" cy="400" r="130" />
    <ellipse cx="1320" cy="740" rx="240" ry="260" />
    <circle cx="1100" cy="450" r="110" />
    <ellipse cx="1100" cy="780" rx="200" ry="240" />
    <circle cx="1540" cy="460" r="120" />
    <ellipse cx="1540" cy="790" rx="210" ry="250" />
    <circle cx="1720" cy="510" r="95" />
    <ellipse cx="1720" cy="830" rx="190" ry="220" />
  </g>

  <!-- Golden light bokeh -->
  <circle cx="1300" cy="350" r="280" fill="#C6A96B" opacity="0.08" />
  <circle cx="950" cy="600" r="200" fill="#A5AE8B" opacity="0.06" />
</svg>`;

fs.writeFileSync(path.join('public', 'images', 'hero', 'hero-main.jpg'), heroSvg);

const storySvg = makeSvg(
  'A Sanctuary for Every Wife',
  'Strength, vulnerability, and grace intertwined in holy sisterhood',
  'Vision & Heart',
  1200, 1400,
  '#252C1A', '#3F4B2B'
);
fs.writeFileSync(path.join('public', 'images', 'story-portrait.jpg'), storySvg);

const expectSvg = makeSvg(
  'The 2027 Atmosphere',
  'Anticipating a profound horizon of spiritual and relational elevation',
  'Next Chapter',
  1200, 900,
  '#20241A', '#525E3B'
);
fs.writeFileSync(path.join('public', 'images', 'expectations.jpg'), expectSvg);

const g1 = makeSvg('The General Assembly', 'Global Gathering of Wives • Main Session 2026', 'General Assembly', 1600, 1000, '#1E2514', '#3F4B2B');
const g2 = makeSvg('Sacred Intimacy & Worship', 'Lifting holy hands in unanimous prayer', 'Worship & Faith', 1200, 900, '#3F4B2B', '#69764A');
const g3 = makeSvg('Wisdom from the Stage', 'Insightful keynote panels and teachings', 'Keynotes', 1200, 900, '#252820', '#3F4B2B');
const g4 = makeSvg('Laughter, Tears & Sisterhood', 'Cherished fellowship between general sessions', 'Sisterhood', 1200, 900, '#465330', '#252820');
const g5 = makeSvg('Renewed Minds & Practical Circles', 'Interactive breakout workshop pods', 'Masterclasses', 1200, 900, '#3F4B2B', '#1A2012');
const g6 = makeSvg('The Holy Embrace', 'Unconditional support across generations of wives', 'Breakthrough Moments', 1200, 900, '#535F3A', '#252820');

fs.writeFileSync(path.join('public', 'images', 'gws-2026', 'gws-2026-main.jpg'), g1);
fs.writeFileSync(path.join('public', 'images', 'gws-2026', 'gws-2026-worship.jpg'), g2);
fs.writeFileSync(path.join('public', 'images', 'gws-2026', 'gws-2026-speakers.jpg'), g3);
fs.writeFileSync(path.join('public', 'images', 'gws-2026', 'gws-2026-fellowship.jpg'), g4);
fs.writeFileSync(path.join('public', 'images', 'gws-2026', 'gws-2026-audience.jpg'), g5);
fs.writeFileSync(path.join('public', 'images', 'gws-2026', 'gws-2026-moments.jpg'), g6);

console.log('Successfully written all assets!');
