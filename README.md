# Rainbow Fern Portfolio

A modern portfolio website built with [Astro](https://astro.build), featuring server-rendered static pages, Tailwind CSS styling, and AI-discoverability features.

## Features

- **Server-rendered pages** — Zero client-side JavaScript shipped to the browser
- **Tailwind CSS 4** — Modern utility-first CSS, same design as the original React version
- **AI Discoverability** — [`/llms.txt`](https://rainbowfern.com/llms.txt) endpoint for LLM indexing
- **Structured Data** — Schema.org JSON-LD on every page
- **Open Graph + Twitter Cards** — Social media preview optimization
- **Auto-generated sitemap** — `@astrojs/sitemap` integration
- **Contact form** — Static `mailto:` form (no backend needed)
- **Netlify deployment** — Pre-configured adapter

## Tech Stack

- [Astro 5](https://astro.build) — Static site framework
- [Tailwind CSS 4](https://tailwindcss.com) — Styling
- [Netlify](https://netlify.com) — Hosting

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Note: `astro preview` is not supported by the Netlify adapter. To test the production build locally, serve `dist/` with any static server, e.g. `python3 -m http.server --directory dist`.

## AI Discoverability

This site implements [llms.txt](https://llmstxt.org/) standard:

- **`/llms.txt`** — Primary index with descriptions and links to all pages
- **`/robots.txt`** — Explicitly allows LLM crawlers to access llms.txt
- **Server-rendered HTML** — All content is accessible as plain text without JavaScript

## Deployment

Deploy to [Netlify](https://netlify.com):

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

Or any static hosting provider (Vercel, Cloudflare Pages, GitHub Pages, etc.)

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ProjectCard.astro
│   └── ServicesHero.astro
├── pages/               # Static page routes
│   ├── index.astro          → /
│   ├── projects.astro       → /projects
│   ├── experience.astro     → /experience
│   ├── education.astro      → /education
│   ├── contact.astro        → /contact
│   ├── llms.txt.ts          → /llms.txt (AI endpoint)
│   └── robots.txt.ts        → /robots.txt (SEO)
└── assets/            # Images and media
```

## Key Differences from Original

| Feature | Original (React/Vite) | Astro Version |
|---------|----------------------|---------------|
| Client JS | ~300KB React bundle | **0 bytes** |
| Rendering | Client-side (SPA) | Server-rendered (SSG) |
| SEO | Manual meta tags | Schema.org + OG + Twitter |
| AI Discovery | None | `/llms.txt` endpoint |
| Build Size | ~1MB+ (with dependencies) | ~224KB (total output) |
| Framework | React 19 + React Router | Pure Astro `.astro` files |
