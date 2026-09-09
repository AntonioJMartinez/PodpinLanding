import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'assets/optimized');
const names = ['player', 'episode-detail', 'library-dark', 'library-light', 'podcast-detail-dark', 'podcast-detail-light', 'podcast-page'];
await fs.mkdir(output, { recursive: true });
const manifest = {};
for (const name of names) {
  const input = path.join(root, 'assets', `${name}.png`);
  const metadata = await sharp(input).metadata();
  const widths = [320, 640, 960].filter(width => width <= metadata.width);
  manifest[name] = { width: metadata.width, height: metadata.height, widths };
  for (const width of widths) {
    await sharp(input).resize({ width }).webp({ quality: 80, effort: 5 }).toFile(path.join(output, `${name}-${width}.webp`));
  }
}
const icon = await sharp(path.join(root, 'assets/app-icon.png')).metadata();
manifest['app-icon'] = { width: icon.width, height: icon.height };
await fs.writeFile(path.join(output, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Optimized ${names.length} screenshots at three responsive widths.`);

