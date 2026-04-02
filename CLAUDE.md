# Portfolio — Project Instructions

## What This Is
Lupo Studios portfolio site. Astro 5 + Tailwind v4 + TypeScript. Deployed to Cloudflare Pages at humanlup.com.

## Design DNA
Inspired by Poolside.ai (enterprise minimalism, content-first) and Glenn Hitchcock's design principles (precision over decoration, typography-driven hierarchy, Swiss design influence).

### Tokens
- All design values live in `src/styles/tokens.css` as CSS custom properties
- Light/dark mode via `[data-theme="dark"]` on `<html>`
- 8pt spacing grid, fluid type scale via `clamp()`
- Physics easing curves, no `ease` or `ease-in-out`

### Typography
- Headings: Geist Sans (light weight, tight letter-spacing)
- Body: Inter (16px/1.7 line-height)
- Mono: IBM Plex Mono (labels, dates, metadata)
- Display text uses `clamp()` — never fixed `font-size`

### Colors
- Warm white `#fafaf9` base (not pure white)
- Accent blue `#2563eb` / `#1d4ed8`
- 1px border-driven design — no shadows for card elevation
- Glass panels: `backdrop-filter: blur()` + translucent backgrounds

### Motion
- CSS only — no animation libraries
- Physics easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo out)
- Staggered entrances via `--stagger` custom property
- Always include `prefers-reduced-motion: reduce`

## Content
- Case studies are Markdown in `src/content/work/`
- Real career stories — never placeholder content
- Brand voice: direct, specific, honest about friction

## Stack Rules
- Zero client JS by default (Astro islands only where needed)
- Tailwind v4 CSS-first config mapped to design tokens
- All files kebab-case (enforced by hook)
- No `console.log` in production
- Semantic HTML, ARIA labels on icon-only buttons
- `alt` on all images, `aria-hidden="true"` on decorative SVGs

## Commands
```
npm run dev        # local dev server
npm run build      # production build
npm run preview    # preview build
```
