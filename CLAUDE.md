# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

This is a React portfolio website for Hany El Atlassi (AI & Security Engineer, founder of Axon) using Vite, Tailwind CSS v4, Framer Motion and Lenis (smooth scroll).

### Routing Structure
- `/` - Home page (composes all portfolio sections)
- `/project/:id` - Individual project detail pages
- `*` - 404 Not Found

### Key Architectural Patterns

**App shell**: `main.jsx` mounts BrowserRouter + ThemeProvider. `App.jsx` wraps everything in `MotionConfig reducedMotion="user"` → `SmoothScroll` (root Lenis) → `IntroContext` provider, renders the first-visit `Preloader`, and the routes inside `Layout.jsx` (navbar, footer, cursor follower, scroll progress, grain overlay).

**Page Transitions**: `AnimatePresence mode="wait"` in `App.jsx`; every page wraps its content in `components/motion/PageTransition.jsx`, which renders five ink columns that sweep up over the outgoing page and off the top of the incoming one. The incoming page resets scroll (or Home jumps to `location.hash`) while the screen is covered. Don't put transforms on ancestors of the transition columns (they are `position: fixed`).

**Intro**: the preloader plays once per session, only when landing on `/`, never with reduced motion. Components that should start with the curtain lift read `useIntro().introDone` (Hero, Navbar).

**Data Separation**: All content lives in `/src/data/` files (personal.js, experience.js, projects.js, achievements.js, skills.js, certifications.js, contact.js, navigation.js). Components import and render this data - never hardcode content in components. Copy supports `*emphasis*` markers rendered in the italic serif accent (`utils/emphasis.js`).

**Media**: data files never import images. `src/assets/media.js` is the single image registry keyed by content id (`getProjectCover`, `getProjectDetailMedia`, `getExperienceImage`, `portrait`). Projects without a cover get a generated one (`components/projects/ProjectCover.jsx`). To add a project image, import it in `media.js` and add it to the relevant map.

**Tailwind v4 Configuration**: CSS-based config with `@theme` in `index.css`. Base element styles live in `@layer base`, custom classes (`container-main`, `eyebrow`, `grain`, `spotlight`, ...) in `@layer components`, so utilities always win. Keep it that way: unlayered rules override utilities.

### Component Organization

- `/components/layout/` - Navbar (hide-on-scroll, mobile menu), Footer, Layout, LocalTime
- `/components/motion/` - Motion primitives: SmoothScroll, Preloader, PageTransition, SplitText, ScrollRevealText, RotatingWords, VelocityMarquee, RollText, Counter, Reveal, ParallaxImage (About portrait), Cursor, ScrollProgress
- `/components/sections/hero/` - Hero internals: `HeroParts` (shell with dot field + meta row, statement, CTAs, badge), `HeroLayout` (split name with measured slots beside it), `HeroNotes` (hand-drawn annotations, `font-hand` = Caveat, copy in `data/hero.js`)
- `/components/sections/` - Hero (annotated), DotField ambient canvas, CircularBadge, TickerTape, About, Experience (+ ExperienceEntry, ExperienceVisuals), Projects, Achievements, Skills, Certifications, Contact
- `/components/projects/` - ProjectCarousel (shared by Home and ProjectDetail), ProjectCard, ProjectCover
- `/components/ui/` - SectionIntro (+ Eyebrow), ThemeToggle, icons registry
- `/pages/` - Route-level components (Home, ProjectDetail, NotFound)
- `/hooks/` - `useReducedMotion`, `useMediaQuery`/`useFinePointer`, `useScrollTo`, `useSectionNav`, `useLocalTime`, `IntroContext`, theme (`ThemeProvider`, `useTheme`)
- `/config/animations.js` - shared easings (`ease.expo`, `ease.quart`), durations, springs, variants (`fadeUp`, `maskUp`, `lineDraw`, `popIn`, `stagger()`)
- `/utils/emphasis.js` - `*emphasis*` parsing

### Design System

Editorial, motion-first aesthetic on the original palette. Tokens in `index.css`:
- Colors: `--color-bg` (#f0f0f0 / #0a0a0a), `--color-surface`, `--color-fg`, `--color-fg-muted`, `--color-fg-subtle`, `--color-line`, `--color-line-strong`, `--color-accent` (#ff3700), theme-independent `--color-ink` / `--color-paper`. Use as utilities: `bg-bg`, `text-fg`, `border-line`, `bg-accent`...
- Fonts (loaded in `index.html`): Geist (`font-sans`/`font-display`), Instrument Serif italic (`font-serif`, accents), Geist Mono (`font-mono`, `.eyebrow` labels)
- Dark mode: `.dark` class on `<html>` (set before paint by an inline script in `index.html`); the toggle uses the View Transitions API for a circular reveal
- Use `container-main` for the max-width container

### Animation Guidelines

Framer Motion for component animation, Lenis for scroll. Key patterns:
- Section headings: `SectionIntro` (numbered eyebrow + `SplitText` masked character reveal)
- Scroll-triggered entrances: `Reveal` / `whileInView` with `viewportOnce` from `config/animations.js`
- Scroll-linked: `useScroll` + `useTransform` (hero parallax, experience spine, word reveal)
- Hover: CSS `group/roll` + `RollText` only on real buttons (filled or outlined); plain text links (nav, footer, inline) just change color, `data-cursor="Label"` to show a labelled cursor (`data-cursor-variant="ink"` where the hover fill is accent). No magnetic/cursor-following buttons (owner's preference)
- Programmatic scrolling must go through `useScrollTo` / `useSectionNav` (they use Lenis when active)

Performance rules (scroll smoothness was profiled): animate entrances with whole `transform`/`opacity` values wrapped in `tf()` from `config/animations.js` (hardware-accelerated WAAPI; `tf` returns 'none' for reduced motion because Framer's reducedMotion only covers x/y/scale shorthands) — avoid x/y/scale shorthands for scroll-triggered animations; no `will-change` on per-letter spans; no `backdrop-filter` or CSS `mask-image` on elements that move or sit over animated content (use gradient overlays); prefer gradients to `filter: blur()` on animated layers; images are WebP sized for their slot; project images (covers, detail screenshots) are deliberately static — no reveal, zoom or drift — and load eagerly.

Reduced motion: `MotionConfig reducedMotion="user"` disables transform animations globally; Lenis, the preloader, marquees, the hero dot-field animation (static frame) and the carousel's auto-scroll are skipped.

### Notable Mechanics

**Experience timeline** (`Experience.jsx` + `ExperienceEntry.jsx`): centre spine (left spine on mobile) whose accent fill is `scaleY` = scroll progress; entries alternate card left/right, the opposite column (dates + visual) is `md:sticky`. No `overflow: hidden` on ancestors or sticky breaks.

**ProjectCarousel gesture system** (`components/projects/ProjectCarousel.jsx`): uses **window-level pointer listeners** instead of Framer Motion's `drag` prop. This is intentional — Framer Motion's gesture system intercepts child click events, making card navigation impossible. The pattern:
1. `onPointerDown` on the track starts a gesture and registers `pointermove`/`pointerup` on `window`
2. All mutable gesture state lives in `gesture = useRef({...})` to avoid stale closure issues
3. Navigation (`useNavigate`) fires on `pointerup` only when `totalMoved <= DRAG_THRESHOLD` (8 px) — distinguishing a click from a drag
4. Cards use a plain `<div data-project-id={id}>` wrapper so `e.target.closest('[data-project-id]')` reliably finds it
5. Each card's `<Link>` keeps its `href` (right/middle/Cmd-click open in new tab); plain mouse clicks are `preventDefault`ed (`event.detail > 0`), keyboard Enter navigates natively
6. Auto-scroll uses `useAnimationFrame` + `useMotionValue`; it eases to a stop on hover / keyboard focus, idles off-screen, and a released drag glides with decaying momentum
7. Infinite loop: the list is rendered 3× and `x` wraps every one copy width; only copy 0 is tabbable, and keyboard focus clamps `x` (never wraps) to show the focused card
8. `excludeId` hides the current project on project pages

### Deployment

Hosted on GitHub Pages. Because it's a client-side SPA with `BrowserRouter`, direct navigation to `/project/:id` returns a 404 from GitHub Pages (no server-side routing). This is a known open issue — the fix requires either a `404.html` redirect hack or switching to `HashRouter`.
