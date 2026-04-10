<div align="center">

<img src="public/favicon.svg" alt="Logo" width="64" height="64" />

# Kevin Maximiliano Palma Romero

### Azure Cloud Engineer · Portfolio

[![Live](https://img.shields.io/badge/Live-kevmpr.vercel.app-3b82f6?style=flat-square&logo=vercel&logoColor=white)](https://kevmpr.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-6.1-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## Overview

Personal portfolio built with **Astro v6** and **Tailwind CSS v4**. Designed with an editorial system — consistent accent line + label + heading pattern — across every section. Fully bilingual (ES / EN), dark/light mode, and optimized for performance and accessibility.

---

## Features

<table>
<tr>
<td valign="top" width="50%">

**Design & UX**
- Editorial design system across all sections
- Dark / Light mode with canvas starfield (dark) and CSS dot-grid (light)
- Scroll-triggered reveal animations with `IntersectionObserver`
- Scroll progress bar
- Full-viewport mobile menu overlay with staggered entrance

</td>
<td valign="top" width="50%">

**Interactions**
- 3D tilt on profile photo (mouse tracking)
- 3D tilt on contact tiles
- Typewriter heading in Contact section
- Count-up stats (numeric, months→year, A1→B2 for English level)
- Accordion layout for Cloud Solutions (scales to any number of entries)

</td>
</tr>
<tr>
<td valign="top" width="50%">

**i18n & Routing**
- Full ES / EN support via Astro's built-in i18n with `prefixDefaultLocale: true`
- Language-aware CV download
- `hreflang` alternate links for SEO

</td>
<td valign="top" width="50%">

**Performance & SEO**
- Astro static output — zero JS by default
- Non-blocking font and icon loading (`preload` + `onload`)
- `content-visibility: auto` on heavy sections
- Open Graph, Twitter Card, canonical, structured data (JSON-LD)
- JS minified with Terser; CSS minified with esbuild
- `prefers-reduced-motion` respected throughout

</td>
</tr>
</table>

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, role badge, 3D photo tilt, CTA buttons, animated scroll indicator, count-up stats |
| **About Me** | Bio, LinkedIn-style experience timeline, education timeline, certification cards |
| **Cloud Solutions** | Accordion with 5 real Azure case studies (Challenge / Solution / Impact) + 2 internal tools (ACIM & ACIM-ARGUS) |
| **Skills** | Editorial row layout — Cloud, Frontend, Backend, Databases, Soft Skills, Languages |
| **Contact** | Typewriter animated heading, 3D tilt contact tiles (Email, LinkedIn, GitHub) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build/) v6 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 + `@tailwindcss/vite` |
| Language | TypeScript |
| Icons | [Devicon](https://devicon.dev/) + inline SVG + emoji fallbacks |
| Images | Astro Image (WebP optimization) |
| JS minification | Terser |
| CSS minification | esbuild |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
├── public/
│   ├── cv/
│   │   ├── es/              # Spanish CV PDF
│   │   └── en/              # English CV PDF
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── certs/           # Azure certification badge images
│   │   ├── logos/           # Company / institution logos
│   │   └── imgProfile.png   # Profile photo
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── CaseStudyCard.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── LanguageSelector.astro
│   ├── i18n/
│   │   └── utils.ts         # Translation strings (ES / EN) + routing helpers
│   ├── layouts/
│   │   └── Layout.astro     # Global layout — meta tags, starfield, scroll-reveal
│   ├── styles/
│   │   └── global.css       # Tailwind v4 CSS config (@theme, @variant dark)
│   └── pages/
│       ├── es/index.astro
│       ├── en/index.astro
│       └── index.astro      # Redirect → /es/
├── astro.config.mjs
└── package.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:4321/`.

---

## i18n Setup

Routing is handled by Astro's built-in i18n with `defaultLocale: 'es'` and `prefixDefaultLocale: true`. Both `/es/` and `/en/` are prefixed routes. `src/i18n/utils.ts` holds all translation strings and exports:

- `getLangFromUrl(url)` — detects locale from the URL pathname
- `useTranslations(lang)` — returns a typed `t(key)` helper
- `getLocalizedPath(lang, hash)` — builds a language-aware anchor link

---

## Azure Certifications

<table>
<tr>
<td>

[![AZ-104](https://img.shields.io/badge/AZ--104-Azure%20Administrator%20Associate-0078d4?style=flat-square&logo=microsoftazure&logoColor=white)](https://learn.microsoft.com/en-gb/users/kevinmaximilianopalmaromero-4986/credentials/48112e50f0667613)

</td>
<td>

[![AZ-700](https://img.shields.io/badge/AZ--700-Azure%20Network%20Engineer%20Associate-0078d4?style=flat-square&logo=microsoftazure&logoColor=white)](https://learn.microsoft.com/en-us/users/kevinmaximilianopalmaromero-4986/credentials/b43015bfda159018)

</td>
</tr>
<tr>
<td>

[![AZ-900](https://img.shields.io/badge/AZ--900-Azure%20Fundamentals-0078d4?style=flat-square&logo=microsoftazure&logoColor=white)](https://learn.microsoft.com/en-us/users/kevinmaximilianopalmaromero-4986/credentials/64d4b26fcc71de2c)

</td>
<td>

[![DP-900](https://img.shields.io/badge/DP--900-Azure%20Data%20Fundamentals-0078d4?style=flat-square&logo=microsoftazure&logoColor=white)](https://learn.microsoft.com/en-gb/users/kevinmaximilianopalmaromero-4986/credentials/80c3d30098977b49)

</td>
</tr>
</table>

---

## Notable Implementation Details

- **Tailwind v4 layer cascade** — Critical inline CSS is unlayered and wins over `@layer utilities`. Removed heading and anchor resets from the inline block to avoid overriding utility classes like `text-5xl` and `text-white`.
- **Dark mode variant** — Configured via `@variant dark (&:where(.dark, .dark *))` in the CSS file instead of a JS config.
- **Astro i18n routing** — Uses `prefixDefaultLocale: true` so both `/es/` and `/en/` are explicit routes; `index.astro` at the root redirects to `/es/`.
- **CaseStudyCard component** — Extracted accordion card for Cloud Solutions and Internal Tools entries, driven entirely by translation strings.
- **Timeline** — Flex-column dot + `flex-1 w-px` connecting line pattern so the line only runs between dots, never beyond them.
- **Count-up animation** — `performance.now()` + ease-out quad for smooth numeric counters; level animation (A1→B2) uses fixed step intervals.
- **Build optimizations** — Terser (`drop_console`, `drop_debugger`) for JS; esbuild for CSS minification, configured in `astro.config.mjs`.

---

<div align="center">

**[kevmpr.vercel.app](https://kevmpr.vercel.app)** · Personal use only · All rights reserved

</div>
