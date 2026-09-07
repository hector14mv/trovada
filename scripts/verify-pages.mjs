import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
assert(html.includes('Quiénes somos'), 'The homepage must be prerendered');
assert(!html.includes('<!--app-html-->'), 'Prerender slot must be replaced');
assert(html.includes('trovada-logo-clean.png'), 'The restored logo must be included');
assert(!html.includes('noindex'), 'The public site must allow indexing');
const paths = new Set();
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const url = match[1];
  if (url.startsWith('#') || /^https?:\/\//.test(url)) continue;
  assert(url.startsWith('/trovada/'), `Missing Pages base path: ${url}`);
  const local = resolve(root, decodeURIComponent(url.slice('/trovada/'.length).split(/[?#]/)[0]));
  assert(local.startsWith(root + sep), `Asset escapes the output directory: ${url}`);
  assert((await stat(local)).isFile(), `Missing static asset: ${url}`);
  paths.add(local);
}
assert(paths.size >= 5, 'Expected CSS, JS, logo, photo, favicon and PDF assets');
assert((await stat(resolve(root, '.nojekyll'))).isFile());
console.log(`Validated prerendered homepage and ${paths.size} local assets.`);
