import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, '.site-public');

const files = ['styles.css', 'script.js', 'robots.txt', 'sitemap.xml'];
const directories = ['assets', 'de', 'es', 'fr', 'it', 'pt', 'zh'];

await fs.rm(publicDir, { recursive: true, force: true });
await fs.mkdir(publicDir, { recursive: true });

for (const file of files) {
  await fs.copyFile(path.join(rootDir, file), path.join(publicDir, file));
}

for (const directory of directories) {
  await fs.cp(path.join(rootDir, directory), path.join(publicDir, directory), {
    recursive: true,
  });
}
