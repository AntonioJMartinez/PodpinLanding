import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const outputDir = path.join(rootDir, 'dist');

await fs.rm(outputDir, { recursive: true, force: true });
await fs.mkdir(outputDir, { recursive: true });

process.env.SITE_OUTPUT_DIR = 'dist';
await import('./build-site.mjs');

for (const file of ['styles.css', 'script.js']) {
  await fs.copyFile(path.join(rootDir, file), path.join(outputDir, file));
}

await fs.cp(path.join(rootDir, 'assets'), path.join(outputDir, 'assets'), {
  recursive: true,
});

await fs.writeFile(path.join(outputDir, '.nojekyll'), '');
