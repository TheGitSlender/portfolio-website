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

This is a React portfolio website for Hany El Atlassi (AI Engineer) using Vite, Tailwind CSS v4, and Framer Motion.

### Routing Structure
- `/` - Home page (composes all portfolio sections)
- `/project/:id` - Individual project detail pages
- `*` - 404 Not Found

### Key Architectural Patterns

**Layout System**: `App.jsx` wraps all routes in `Layout.jsx`, which provides the sticky Header and Footer. BrowserRouter is in `main.jsx`.

**Page Transitions**: Uses Framer Motion's `AnimatePresence` with `mode="wait"` for smooth page transitions.

**Data Separation**: All content lives in `/src/data/` files (personal.js, experience.js, projects.js, skills.js, certifications.js, contact.js). Components import and render this data - never hardcode content in components.

**Tailwind v4 Configuration**: Uses CSS-based config with `@theme` directive in `index.css`. Custom design tokens (colors, shadows, typography) are defined there using CSS custom properties like `--color-accent-blue`.

### Component Organization

- `/components/layout/` - Header, Footer, Layout wrapper
- `/components/sections/` - Hero, About, Experience, Projects, Skills, Certifications, Contact, **ProjectCarousel** (shared)
- `/components/ui/` - Reusable primitives (Button, Card, Badge, SectionHeader, TiltCard, AnimatedSection)
- `/pages/` - Route-level components (Home, ProjectDetail, NotFound)
- `/hooks/` - `useReducedMotion`, `useTheme`, `useMagnetic`
- `/utils/` - Framer Motion animation variants and helpers

`ProjectCarousel` is used in both `Projects.jsx` (home section) and `ProjectDetail.jsx` (bottom of project pages). To add a new project image to the carousel, add an entry to the `carouselImages` map in `ProjectCarousel.jsx` keyed by `project.id`.

### Design System

Apple-inspired aesthetic with tech accents. Key CSS custom properties:
- Colors: `--color-primary-text`, `--color-accent-blue`, `--color-surface-card`
- Shadows: Layered Formix-style (`--shadow-md`, `--shadow-lg`)
- Use `container-main` class for consistent max-width container

### Animation Guidelines

Use Framer Motion for all animations. Key patterns:
- Scroll-triggered: `useInView` hook with threshold 0.2-0.3
- Page transitions: variants with opacity/y transforms
- Hover effects: `whileHover` with scale and shadow changes
- Stagger children: `staggerChildren: 0.1` in container variants

Components should check `prefers-reduced-motion` and disable animations accordingly.

### ProjectCarousel Gesture System

The carousel uses **window-level pointer listeners** instead of Framer Motion's `drag` prop. This is intentional — Framer Motion's gesture system intercepts child element click events, making card navigation impossible. The pattern:

1. `onPointerDown` on the `motion.div` track starts a gesture and registers `pointermove`/`pointerup` on `window`
2. All mutable gesture state lives in `drag = useRef({...})` to avoid stale closure issues
3. Navigation (`useNavigate`) fires on `pointerup` only when `totalMoved <= DRAG_THRESHOLD` (8 px) — distinguishing a click from a drag
4. Cards use a plain `<div data-project-id={id}>` wrapper (not a React component) so `e.target.closest('[data-project-id]')` reliably finds it in the DOM
5. The `<Link>` inside each card has `onClick={e => e.preventDefault()}` — it exists only to provide `href` for right-click → "Open in new tab"
6. Auto-scroll uses `useAnimationFrame` + `useMotionValue` imperatively; pauses while `drag.current.active`
7. Infinite loop: array is duplicated 2×, and `x` wraps at both `0` (drag right) and `-halfWidth` (drag left / auto-scroll)

### Deployment

Hosted on GitHub Pages. Because it's a client-side SPA with `BrowserRouter`, direct navigation to `/project/:id` returns a 404 from GitHub Pages (no server-side routing). This is a known open issue — the fix requires either a `404.html` redirect hack or switching to `HashRouter`.
