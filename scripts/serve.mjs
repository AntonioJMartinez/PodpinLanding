import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be 1–65535.');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png' };
const server = http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  try {
    const url = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    if (pathname.includes('\\') || pathname.includes('\0')) throw new Error('invalid path');
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root.slice(0, -1) && !file.startsWith(root)) throw new Error('invalid path');
    let stat;
    try { stat = await fs.stat(file); } catch (error) { if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error; }
    if (stat?.isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(301, { Location: `${url.pathname}/${url.search}` }); res.end(); return; }
      file = path.join(file, 'index.html');
    } else if (pathname.endsWith('/index.html')) {
      res.writeHead(301, { Location: url.pathname.slice(0, -10) + url.search }); res.end(); return;
    }
    let data;
    try { data = await fs.readFile(file); } catch (error) {
      if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error;
      file = path.join(root, '404.html'); data = await fs.readFile(file); res.statusCode = 404;
    }
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain' }); res.end('Bad request');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Podpin preview: http://127.0.0.1:${port}`));
