# 🚀 Kevin Maximiliano Palma Romero — Portfolio

Personal portfolio website for **Kevin Maximiliano Palma Romero**, Azure Cloud Engineer at Readymind. Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

🔗 **Live:** [kevin-m-palma-r.vercel.app](https://kevin-m-palma-r.vercel.app/)

## ✨ Features

- **🌐 Internationalization (i18n)** — Full support for English and Spanish
- **🌙 Dark Mode** — Toggle between light and dark themes
- **🎨 Glassmorphism Design** — Modern, premium UI with backdrop blur and gradients
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop
- **✨ Scroll-Reveal Animations** — Sections and cards fade in with staggered delays on scroll
- **📄 CV Download** — Language-aware resume download (ES/EN)
- **🔒 Contact Privacy** — Email, LinkedIn, and GitHub are hidden from bots and only revealed on click
- **📜 Timeline Layout** — Education and experience displayed as vertical timelines

## 📸 Sections

| Section | Description |
|---|---|
| **Hero** | Introduction with role badge, bio, and CTA buttons |
| **About** | Certifications (linked to Microsoft Learn), education timeline, experience timeline |
| **Cloud Solutions** | 5 case study cards with Challenge/Solution narrative format and distinct icons |
| **Skills** | Technical skills, soft skills, and languages — categorized cards with gradient hover effects |
| **Contact** | Privacy-first contact cards (click to reveal) |

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) v5
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v3
- **Language:** TypeScript
- **Deployment:** [Vercel](https://vercel.com/)

## 🏗️ Project Structure

```
├── public/
│   ├── cv/
│   │   ├── es/    # Spanish CV
│   │   └── en/    # English CV
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro          # Cloud Solutions section
│   │   ├── CaseStudyCard.astro     # Narrative case study card
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── LanguageSelector.astro
│   ├── i18n/
│   │   └── utils.ts        # Translation strings (ES/EN)
│   ├── layouts/
│   │   └── Layout.astro     # Global layout + scroll-reveal system
│   └── pages/
│       ├── es/index.astro   # Spanish page
│       ├── en/index.astro   # English page
│       └── index.astro      # Redirect
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Getting Started

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

The dev server will start at `http://localhost:4321/`.

## 📜 Certifications

- [AZ-104 — Azure Administrator](https://learn.microsoft.com/en-gb/users/kevinmaximilianopalmaromero-4986/credentials/48112e50f0667613)
- [AZ-700 — Azure Network Engineer](https://learn.microsoft.com/en-us/users/kevinmaximilianopalmaromero-4986/credentials/b43015bfda159018)
- [AZ-900 — Azure Fundamentals](https://learn.microsoft.com/en-us/users/kevinmaximilianopalmaromero-4986/credentials/64d4b26fcc71de2c)
- [DP-900 — Azure Data Fundamentals](https://learn.microsoft.com/en-gb/users/kevinmaximilianopalmaromero-4986/credentials/80c3d30098977b49)

## 📝 License

This project is for personal use. All rights reserved.

---

Built with ❤️ by Kevin
