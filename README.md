# Kevin Maximiliano Palma Romero — Portfolio

Personal portfolio for **Kevin Maximiliano Palma Romero**, Azure Cloud Engineer at Readymind. Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

**Live:** [kevmpr.vercel.app](https://kevmpr.vercel.app/)

---

## Features

- **Internationalization (i18n)** — Full ES / EN support with language-aware routing
- **Dark / Light mode** — Toggle with persistent preference; each mode has its own background effect
- **Animated starfield** — Canvas-based twinkling stars in dark mode; dot-grid CSS pattern in light mode
- **Editorial design** — Consistent accent line + label + heading pattern across all sections
- **Scroll-triggered animations** — Sections and elements animate in via IntersectionObserver with staggered delays
- **Count-up stats** — Animated counters in About Me: months → year, A1→A2→B1→B2 for English level, numeric counts for certs and projects
- **Typewriter heading** — Contact section cycles through phrases with a blinking cursor
- **3D tilt tiles** — Contact channel tiles follow the mouse with perspective transform
- **Accordion projects** — Cloud Solutions section uses a collapsible accordion that scales to any number of projects
- **Timeline fix** — Experience and education timelines use flex-column dots where the connecting line runs exactly between dots
- **Active nav detection** — Navbar highlights the current section via scroll position
- **Responsive** — Mobile-first, optimized for all screen sizes
- **CV download** — Language-aware resume download (ES / EN)

---

## Sections

| Section | Description |
|---|---|
| **Inicio / Hero** | Full name, role badge, entrance animations, animated mouse scroll indicator |
| **Sobre Mí / About** | Stats with count-up animation, LinkedIn-style experience timeline, education timeline, certification cards with badge images |
| **Soluciones Cloud / Projects** | Accordion list of 5 real Azure case studies (Challenge / Solution / Impact) |
| **Habilidades / Skills** | Editorial row layout: Cloud, Frontend, Backend, Databases, Soft Skills, Languages — all pills white/slate, emoji fallbacks for tools without devicons |
| **Contacto / Contact** | Typewriter animated heading, 3D tilt contact tiles (Email, LinkedIn, GitHub) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build/) v5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v3 |
| Language | TypeScript |
| Icons | [Devicon](https://devicon.dev/) + inline SVG |
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
│   │   └── logos/           # Company / institution logos
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro   # Cloud Solutions accordion
│   │   ├── CaseStudyCard.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── LanguageSelector.astro
│   ├── i18n/
│   │   └── utils.ts         # All translation strings (ES / EN)
│   ├── layouts/
│   │   └── Layout.astro     # Global layout, starfield canvas, dot-grid, scroll-reveal
│   └── pages/
│       ├── es/index.astro
│       ├── en/index.astro
│       └── index.astro      # Redirect to /es
├── astro.config.mjs
├── tailwind.config.mjs
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

## Certifications

- [AZ-104 — Azure Administrator Associate](https://learn.microsoft.com/en-gb/users/kevinmaximilianopalmaromero-4986/credentials/48112e50f0667613)
- [AZ-700 — Azure Network Engineer Associate](https://learn.microsoft.com/en-us/users/kevinmaximilianopalmaromero-4986/credentials/b43015bfda159018)
- [AZ-900 — Azure Fundamentals](https://learn.microsoft.com/en-us/users/kevinmaximilianopalmaromero-4986/credentials/64d4b26fcc71de2c)
- [DP-900 — Azure Data Fundamentals](https://learn.microsoft.com/en-gb/users/kevinmaximilianopalmaromero-4986/credentials/80c3d30098977b49)

---

## License

Personal use only. All rights reserved.
