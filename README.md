# Lupo Studios — Portfolio

Personal portfolio and showcase site for Anthony Lupo.

## Stack

- **Astro 5** — static-first, zero JS by default
- **Tailwind v4** — CSS-first configuration
- **TypeScript** — strict mode
- **Cloudflare Pages** — edge deployment

## Quick Start

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # production build → dist/
npm run preview      # preview production build
```

## How It Works

Static site built with Astro Content Collections. Case studies are Markdown files in `src/content/work/`. Design tokens live in `src/styles/tokens.css` as CSS custom properties. Light/dark theme via `data-theme` attribute.

No client JavaScript ships by default. Interactive islands (theme toggle, mobile nav) hydrate independently via Astro's island architecture.

## Deploy

Connected to Cloudflare Pages. Push to `main` triggers a production deploy. PRs get preview deployments automatically.

**Live:** [humanlup.com](https://humanlup.com)

## License

MIT
