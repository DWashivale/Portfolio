# Dattatray Washivale — Portfolio

A stunning, dark-themed portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Setup Guide (Step-by-Step)

### Prerequisites
- **Node.js** v18+ (check: `node -v`)
- **npm** v9+ or **yarn** (check: `npm -v`)

---

### Step 1 — Install Dependencies

```bash
npm install
```

This installs all packages from `package.json`:
- `next`, `react`, `react-dom` — core framework
- `framer-motion` — animations
- `lucide-react` — icons
- `clsx` — conditional class utility
- `tailwindcss`, `autoprefixer`, `postcss` — styling

---

### Step 2 — Run Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Step 3 — Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles, fonts, utilities
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx          # Sticky navigation with active section detection
│   ├── Hero.tsx            # Animated hero with canvas particles
│   ├── About.tsx           # Bio + stats cards
│   ├── Skills.tsx          # Animated skill bars + tech badges
│   ├── Experience.tsx      # Work history with timeline cards
│   ├── Projects.tsx        # Project showcase cards
│   ├── Education.tsx       # Academic background
│   └── Contact.tsx         # Contact links + CTA
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── next.config.js
```

---

## 🎨 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.3 | React framework with App Router |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^3.4 | Utility-first styling |
| Framer Motion | ^11 | Animations (optional, not used in current build) |
| Lucide React | ^0.383 | Icons |

---

## 🛠 Customization

To update your info, edit these files:
- **Personal details** → `components/Hero.tsx`, `components/Contact.tsx`
- **Skills** → `components/Skills.tsx` (update `skillData` array)
- **Experience** → `components/Experience.tsx` (update `experiences` array)
- **Projects** → `components/Projects.tsx` (update `projects` array)
- **Education** → `components/Education.tsx` (update `education` array)
- **Colors/fonts** → `app/globals.css` and `tailwind.config.ts`

---

## 🌐 Deployment (Vercel — Recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com) — it auto-detects Next.js.

---

## ✨ Features

- **Particle canvas animation** in hero section
- **Smooth scroll reveal** animations on every section
- **Animated skill bars** triggered by intersection observer
- **Glass morphism** card design with hover effects
- **Active section detection** in navbar
- **Fully responsive** — mobile, tablet, desktop
- **Dark theme** with purple accent system
- **Custom scrollbar** matching the theme
