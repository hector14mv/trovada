import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
const isVercel = process.env.VERCEL === '1';
const siteUrl = isVercel ? 'https://actrovada.es/' : 'https://hector14mv.github.io/trovada/';

export default defineConfig({
  base: isVercel ? '/' : '/trovada/',
  resolve: { alias: { '@': fileURLToPath(new URL('.', import.meta.url)) } },
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [
    react(),
    {
      name: 'site-canonical-url',
      transformIndexHtml: (html) => html.replace('__SITE_URL__', siteUrl),
    },
  ],
});
