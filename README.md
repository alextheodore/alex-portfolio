# Alexander Theodore — Portfolio

A premium, dark-themed portfolio for a Software Engineer. Built with an "Aurora Field" design language: a cool near-black base, a drifting multi-hue aurora, glassmorphism, and orchestrated scroll animations.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **TailwindCSS** (custom design tokens)
- **Framer Motion** — reveals, timeline, modal, micro-interactions
- **GSAP** — available for advanced scroll choreography
- **Lenis** — smooth scrolling (respects `prefers-reduced-motion`)
- **Lucide** icons
- **next-themes** — dark / light toggle

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

Requires Node 18.18+ (Node 20+ recommended).

## Make it yours

| What | Where |
|------|-------|
| Name, contact, socials, hero copy | `src/data/site.ts` |
| Skills | `src/data/skills.ts` |
| Experience | `src/data/experience.ts` |
| Projects (full case studies) | `src/data/projects.ts` |
| Design tokens (colors, type, motion) | `tailwind.config.ts` |

### Add your assets to `/public`
- `portrait.jpg` — professional portrait (shown in the hero; a gradient monogram is used as fallback).
- `resume.pdf` — linked from the nav and hero.
- `og.png` — 1200×630 social preview image.
- `projects/<slug>/...` — optional project gallery images.

### GitHub section
`src/components/sections/Github.tsx` renders live stats via public services
(`github-readme-stats`, `ghchart`, `streak-stats`) — no API token needed. For a
fully self-hosted contribution graph, add an `/app/api/github` route that queries
the GitHub GraphQL API and render from that instead.

## Structure

```
src/
├── app/            layout (SEO, fonts, JSON-LD), page, globals, sitemap, robots
├── components/
│   ├── providers/  Lenis smooth scroll, theme
│   ├── layout/     Navbar, Footer, ScrollProgress
│   ├── ui/         Aurora, Grid, CursorGlow, Particles, GlassCard, Reveal, …
│   └── sections/   Hero, About, Skills, Experience, Projects, Research, …
├── data/           content — edit these, not the components
└── lib/            utils (cn)
```

## Accessibility & performance

- Semantic landmarks, visible keyboard focus, labelled controls.
- `prefers-reduced-motion` disables Lenis, particles, and heavy animation.
- `next/font` self-hosts fonts; images use `next/image`; atmosphere layers are
  pure CSS/canvas. Aim for Lighthouse 95+.

## Deploy

Zero-config on **Vercel**: push to GitHub, import, deploy. Set the production URL
in `src/data/site.ts` (`url`) so metadata and the sitemap resolve correctly.
