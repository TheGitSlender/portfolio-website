# Architecture Snapshot

Living document. Update whenever structure, data shape, or major patterns change — don't let this drift from reality.

## Stack
React 19 + Vite + Tailwind CSS v4 (CSS-based `@theme` config) + Framer Motion + React Router (`BrowserRouter`).

## Routing
- `/` — `Home.jsx`, composes: Hero → Experience → Skills → Projects → Certifications → Contact
- `/project/:id` — `ProjectDetail.jsx`
- `*` — `NotFound.jsx`

`App.jsx` wraps routes in `Layout.jsx` (sticky Header/Navbar + Footer), uses `AnimatePresence mode="wait"` for page transitions, and a `ScrollToTop` effect on route change.

## Data layer (`/src/data/`)
Content is fully separated from components — components import and render, never hardcode copy.

- `personal.js` — name, title, tagline, bio, stats, availability
- `experience.js` — timeline entries (`experiences[]`), keyed image map (`experienceImageMap`), helpers (`getCurrentExperiences`, `getExperienceById`, `getExperiencesByType`)
- `projects.js` — `projects[]` (id, featured, title, descriptions, category, tags, techStack, metrics, highlights, links, images), plus `carouselImageMap` / `detailImageMap` keyed by project id, and helpers (`getFeaturedProjects`, `getProjectById`, `getNextProjectId`, `getPrevProjectId`)
- `skills.js` — two shapes: `skillCategories[]` (flat list w/ proficiency, used for `getAllSkills`/`getSkillsByProficiency`) and `skillDomains[]` (AI / Cloud / Security, each with `architecture[]` + `tools[]`, used by `DomainAccordion` in `Skills.jsx`)
- `certifications.js` — `certifications[]` + `upcomingGoals[]` (progress bar + markdown-lite `**bold**` description)
- `contact.js` — `contactInfo`, `socialLinks[]`, `platformStyles` (per-platform card styling), `contactContent`
- `navigation.js` — nav links

**No achievements/hackathons data file yet** — hackathon wins currently live embedded inside individual `projects[]` entries (e.g. MediCore "10th Place Worldwide — Mistral AI Hackathon", Aegis "AI Spring School Selection", CallPilot). A dedicated achievements section (per user request, see LOG) will need its own data file, e.g. `data/achievements.js`.

## Components

- `/components/layout/` — `Header`/`Navbar`, `Footer`, `Layout` (wraps children with sticky header/footer)
- `/components/sections/` — one per home-page section: `Hero`, `Experience`, `Skills` (renders `DomainAccordion`), `Projects` (thin wrapper around `ProjectCarousel`), `Certifications` (also renders `upcomingGoals`), `Contact`, plus shared `ProjectCarousel` (used on both Home and `ProjectDetail`), `TimelineCard`, `ProfileCard`, `DomainAccordion`
- `/components/ui/` — primitives: `Button`, `Card`, `Badge`/`SectionBadge`, `SectionHeader`, `AnimatedHeading`, `TiltCard`, `ProgressBar`, `ThemeToggle`
- `/components/common/` — `CustomCursor`
- `/hooks/` — `useReducedMotion`, `useTheme` + `ThemeContext`/`ThemeProvider`, `useMagnetic`
- `/config/animations.js` — shared Framer Motion variants (`fadeUp`, `cardHover`, `viewport`, `indexedDelay`, stagger configs)

### ProjectCarousel — gesture system (important, non-obvious)
Uses **window-level pointer listeners** instead of Framer Motion's `drag` prop, because FM's gesture system intercepts child click events and breaks card navigation. Key mechanics:
1. `onPointerDown` on the track starts a gesture, registers `pointermove`/`pointerup` on `window`
2. All mutable gesture state lives in `drag = useRef({...})` (avoids stale closures)
3. `useNavigate()` fires on `pointerup` only if `totalMoved <= DRAG_THRESHOLD` (8px) — click vs. drag
4. Cards are plain `<div data-project-id={id}>` (not React components) so `e.target.closest('[data-project-id]')` works
5. `<Link>` inside each card has `onClick={e => e.preventDefault()}` — exists only so right-click → "open in new tab" works
6. Auto-scroll: `useAnimationFrame` + `useMotionValue`, pauses while `drag.current.active`
7. Infinite loop: array duplicated 2x; `x` wraps at `0` and `-halfWidth`

To add a project's carousel image: add an entry to `carouselImages` map in `ProjectCarousel.jsx` keyed by `project.id` (separate from the `carouselImageMap`/`detailImageMap` exported from `data/projects.js` — those are documentation-only, the component does its own static imports).

## Design system
Apple-inspired aesthetic + tech accents, defined via CSS custom properties in `index.css` under `@theme`:
- Colors: `--color-primary-text`, `--color-accent-blue` / `--color-accent-primary`, `--color-surface-card`, `--color-surface-muted`, `--color-bg-primary`/`secondary`, `--color-text-primary`/`secondary`/`muted`, `--color-border-default`/`subtle`
- Shadows: layered Formix-style (`--shadow-md`, `--shadow-lg`)
- Spacing tokens: `--space-xl`, `--space-lg`, etc.
- `container-main` utility class for consistent max-width containers

Section header pattern: `SectionBadge` (small `// LABEL //` tag) + `AnimatedHeading` (large heading, often with `<span className="text-[var(--color-accent-primary)]">` accent on part of it).

## Animation conventions
Framer Motion throughout. Scroll-triggered via `useInView`/`whileInView` (threshold 0.2–0.3), stagger via `staggerChildren: 0.1`, hover via `whileHover` scale/shadow. All should respect `prefers-reduced-motion` via `useReducedMotion` hook.

## Known constraints
- **GitHub Pages SPA routing**: direct navigation to `/project/:id` 404s because GH Pages has no server-side routing and the app uses `BrowserRouter`. Open issue — fix is either a `404.html` redirect hack or switching to `HashRouter`. See `brain/ISSUES.md`.
