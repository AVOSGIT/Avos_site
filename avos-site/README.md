# AVOS — Marketing Site

> **Industrial Telemetry into Autonomous Action.**  
> The official landing page for AVOS — the first AI-native operating system for modern machine fleets.

---

## Overview

This is the public-facing marketing site for AVOS, built with **Next.js 15** and **vanilla CSS**. It presents AVOS's core value proposition, architecture, key capabilities, and enterprise features to industrial operations teams, OEMs, and plant engineers.

### Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Headline, CTAs, supported protocol badges |
| Terminal Demo | `#terminal-demo` | Animated natural-language query demo |
| Core Pillars | `#pillars` | Three core competencies with icons |
| Architecture | `#architecture` | Four-engine architecture breakdown + diagram |
| Solutions | `#solutions` | Target scenarios with outcome metrics |
| Enterprise | `#specs` | Enterprise capabilities (security, deployment) |
| CTA | `#cta` | Demo booking call-to-action |

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS with CSS Modules — no Tailwind, no UI library
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- **Animations:** Pure CSS keyframes + `IntersectionObserver` for scroll-spy

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run locally

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
avos-site/
├── app/
│   ├── globals.css        # Design tokens, resets, global utilities
│   ├── layout.tsx         # Root layout with metadata + font loading
│   └── page.tsx           # Page assembly (imports all sections)
├── components/
│   ├── Navbar.tsx          # Fixed nav with scroll-spy active states
│   ├── Hero.tsx            # Full-viewport hero section
│   ├── TerminalDemo.tsx    # Animated terminal query demo
│   ├── CoreCompetencies.tsx
│   ├── Architecture.tsx
│   ├── TargetScenarios.tsx
│   ├── Enterprise.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
└── next.config.ts
```

Each component has a co-located `*.module.css` file for scoped styles.

---

## Navbar Behaviour

- **Scroll-spy:** `IntersectionObserver` highlights the active section link as you scroll
- **Smooth scroll:** All anchor clicks use a custom `scrollToHash()` helper that offsets for the fixed navbar height (72px)
- **Mobile:** Hamburger menu appears at `≤768px`; desktop CTA and badge are hidden via scoped CSS Module classes

---

## Design Tokens

All design decisions live in `app/globals.css` under `:root`:

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#00d4aa` | Teal accent, CTAs, highlights |
| `--color-bg` | `#080b0d` | Page background |
| `--color-surface` | `#111620` | Card backgrounds |
| `--color-text-1` | `#f0f4f8` | Primary text |
| `--color-text-2` | `#8a9bb0` | Secondary / muted text |
| `--font-sans` | Inter | Body + UI |
| `--font-mono` | JetBrains Mono | Code, terminal, badges |

---

## Deployment

Deploy to [Vercel](https://vercel.com) in one click — it's the recommended platform for Next.js.

```bash
npx vercel
```

Or connect the GitHub repo to Vercel for automatic deployments on every push to `main`.

---

## Contributing

1. Branch off `main`
2. Make changes
3. Open a pull request with a descriptive title

Commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) format:  
`type(scope): description` — e.g. `fix(navbar): correct active link scroll offset`
