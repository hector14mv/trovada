# Trovada

Public website for Asociación Cultural Trovada, Madrid.

Custom domain: https://actrovada.es/ (DNS setup pending).

GitHub Pages fallback: https://hector14mv.github.io/trovada/

## Development

Use Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

## Build and publish

```sh
npm run check
npm run build
npm run verify:pages
```

The build prerenders the React homepage to HTML. React hydrates the timetable tabs in the browser. GitHub Actions publishes only `dist/` to GitHub Pages on a push to `main`.

GitHub Pages must use **GitHub Actions** as its publishing source. Vite selects the base path and canonical URL in `vite.config.ts`: `/trovada/` for GitHub Pages, `/` and `https://actrovada.es/` when `VERCEL=1`. Asset links use the same Vite base during prerendering and hydration.

## Vercel

The Vercel project uses `vercel.json` to install, build, verify, and publish `dist/`.
Validate the root-domain build locally with:

```sh
VERCEL=1 npm run build
VERCEL=1 npm run verify:pages
```

The domain remains registered at DonDominio. Update only the apex website record and `www` to the values supplied by the Vercel project; preserve unrelated DNS records.

## Content

- `app/page.tsx`: association history, navigation and social links.
- `app/schedule-data.ts`: timetable for the 2026–2027 course.
- `app/globals.css`: layout and visual styling.
- `public/`: logo, association archive photo and original timetable PDF.

The association supplied its timetable and logo reference. The history and archive photograph come from https://trovada.wordpress.com/about/ and https://trovada.wordpress.com/galeria/ensayo-banda-trovada/. The restored logo is derived from the supplied reference.

The starting time of Tuesday's “Flauta + IGN” remains unconfirmed in the original timetable and is explicitly marked as such. Current contact details are awaiting confirmation.
