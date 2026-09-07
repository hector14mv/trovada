import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';

const path = new URL('../dist/index.html', import.meta.url);
const template = await readFile(path, 'utf8');
if (!template.includes('<!--app-html-->')) throw new Error('Missing prerender slot');
await writeFile(path, template.replace('<!--app-html-->', render()));
await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');
console.log('Prerendered the homepage for static hosting.');
