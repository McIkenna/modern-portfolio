# Ikenna Ifekaonwu — Interactive Portfolio

A game-inspired portfolio built with React, Vite, Tailwind CSS, Framer Motion, and React Three Fiber. Visitors "boot up," land on a hub styled as a world map, and travel to each section like unlocking areas of a game — without ever feeling like an actual game.

## Stack

- **React 19 + Vite** — app shell, routing, lazy-loaded pages
- **Tailwind CSS** — design tokens (colors, type, motion) in `tailwind.config.js`
- **Framer Motion** — all interface motion (page transitions, hover physics, shared layout animations, springs)
- **React Three Fiber + drei** — a single minimal 3D object in the hero (kept sparing, on purpose)
- **React Router** — client-side routing between the seven pages
- **lucide-react** — iconography

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
npm run lint       # oxlint
```

## Design system

Tokens live in `tailwind.config.js` and `src/index.css`:

- **Palette** — near-black `void` background, warm off-white `fog` text, `signal` (violet) as the primary interactive accent, `teal` for secondary/success states, `gold` reserved for achievements and rare highlights.
- **Type** — `Space Grotesk` for display/headlines, `Inter` for body copy, `JetBrains Mono` for HUD labels, stats, and terminal text.
- **Motion** — spring-based, GPU-friendly transforms only (`transform`/`opacity`/`filter`), `prefers-reduced-motion` is respected globally in `index.css`.

## Folder structure

```
src/
  components/
    layout/       Nav, Layout, BootScreen, CustomCursor, MouseGlow,
                   ParticleField, PageTransition, DevConsole, EasterEggToast, Footer
    ui/            MagneticButton, SectionHeader (shared primitives)
    home/          Hero, HeroScene (R3F), WorldMap (hub navigation)
    projects/      MissionCard, MissionDetail
    skills/        SkillConstellation
    experience/    QuestLog
    hobbies/       HobbyGrid
    contact/       Terminal
  pages/           One file per route — composes the components above
  data/            Editable content: projects.js, skills.js, experience.js, hobbies.js
  hooks/           useMousePosition, useKonami
  App.jsx          Boot gate + router
  main.jsx         Entry point
```

## Editing content

All copy lives in `src/data/`. Update the arrays in `projects.js`, `skills.js`, `experience.js`, and `hobbies.js` — the UI re-renders automatically. Bio copy and stats for the About page live directly in `src/pages/About.jsx`.

## Game-inspired features

- **Press Start** boot screen (`BootScreen.jsx`) before entering the site
- **World Map** hub on the home page — orbiting nodes with a radar sweep, click to travel
- **Mission Select** — Projects page, cards tilt in 3D on hover and open an animated full brief
- **Character Stats** — Skills page, an orbiting constellation instead of progress bars
- **Quest Log** — Experience page with an XP bar and per-role XP rewards
- **Side Quests** — Hobbies page
- **Comms terminal** — Contact page styled as a communication console
- **Secret developer console** — press the backtick key (`` ` ``) anywhere to open a typeable terminal (`help`, `projects`, `whoami`, `matrix`, `exit`, …)
- **Hidden achievement** — a classic arrow-key + B/A sequence unlocks a toast notification

## Performance & accessibility notes

- Pages are code-split with `React.lazy`
- All custom motion respects `prefers-reduced-motion`
- Custom cursor and hover-lift effects are disabled automatically on touch/coarse-pointer devices
- Focus states are visible (`focus-ring` utility) for keyboard navigation
- The only 3D scene (hero) is a single low-poly object — R3F is not used elsewhere, by design

## Customizing

- Swap the accent color by editing `signal` in `tailwind.config.js`
- Replace the initials avatar in `About.jsx` with a real portrait/image
- Wire `Terminal.jsx`'s submit handler up to a real backend or email service (it currently simulates a send)
- Add real links in `src/data/projects.js` (`links.demo`, `links.code`) and `src/pages/Contact.jsx` (`SOCIALS`)
