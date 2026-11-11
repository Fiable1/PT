# Munezero Fiable — Personal Portfolio Website

A fast, modern personal portfolio built for **Munezero Fiable** (Full-Stack Developer & CTO) using **ReactJS**, **Vite**, **Tailwind CSS**, and **Lucide React**.

Designed with an electric **Black & Neon Orange** color scheme, glassmorphism UI elements, rich scroll animations, responsive layouts, and full hosting support.

---

## ⚡ Features

- **Hero Section**: Typewriter role animation, staggered entrance, floating tech badges, animated profile frame, quick stats, and contact CTA.
- **About Me**: In-depth story, leadership pillars, Kigali location cards, and animated language proficiency meters (Kinyarwanda, English, French).
- **Skills & Tech Stack**: Smoothly animated tab switching between Frontend (React, **TypeScript**, Tailwind, Flutter), Backend & Database, and Mobile / AI / DevOps, with animated proficiency meters and soft skills.
- **Experience Timeline**: Scroll-revealed career timeline covering **CTO at Beacon Rwanda LTD**, Full-Stack Engineering (PulseForge), **Mobile Application Engineer at Isomero Tech**, Database Administration at Solvify, and earlier roles.
- **Education**: Software Development Diploma at ST KIZITO SAVE TSS.
- **Projects Portfolio**: 13 projects — including MACOCO, MOTEL, SURA Rwanda, AFYACARE, BRAILLEWALK, TechRise, the Rwanda School Book Scanning app, PulseForge, MFFLMH, IBYUNGURA, LAND O'CLOCK, Isomero Tech, and Fishot — with animated filtering, detail modals, and live/source links.
- **Endorsements / References**: Verified reference cards with direct contact links.
- **Contact & WhatsApp**: Message form that pre-fills an email, direct WhatsApp link, email, phone, and CAT (UTC+2) timezone status.
- **Polish**: Scroll progress bar, scroll-triggered reveals, animated gradient text, shine effects, back-to-top button, and reduced-motion support.

---

## 🛠️ Local Development

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## 🚀 Deployment Guide (How to Upload & Host)

This repository is pre-configured for instant static hosting:

### Option 1: Vercel (Recommended - Free & 1-Click)
1. Push your code to GitHub.
2. Go to [Vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects `Vite` and `vercel.json`. Click **Deploy**. Your site will be live in seconds!

### Option 2: Netlify (Free & Fast)
1. Go to [Netlify.com](https://netlify.com) and sign in.
2. Drag and drop the `dist/` folder directly onto Netlify, OR connect your GitHub repository.
3. The included `netlify.toml` and `public/_redirects` ensure smooth single-page routing.

### Option 3: GitHub Pages
1. Run `npm run build`.
2. Deploy the generated `dist/` folder to your `gh-pages` branch.

---

## 📂 Project Structure

```
munezero-portfolio/
├── public/
│   ├── profile.png        # Profile photo
│   └── _redirects         # Netlify SPA routing fallback
├── src/
│   ├── assets/            # Project assets & images
│   ├── components/        # Modular UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Typewriter.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── References.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Reveal.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── BackToTop.jsx
│   │   ├── AnimatedCounter.jsx
│   │   └── SkeletonLoader.jsx
│   ├── data/
│   │   └── cvData.js      # Centralized CV dataset
│   ├── hooks/
│   │   └── useIntersectionObserver.js
│   ├── App.jsx            # Main app composition
│   ├── index.css          # Tailwind CSS & custom design tokens
│   └── main.jsx           # React DOM entrypoint
├── netlify.toml           # Netlify build rules
├── vercel.json            # Vercel deployment configuration
├── tailwind.config.js     # Tailwind theme, colors & animations
└── vite.config.js         # Fast Vite build configuration
```
