# Architecture Snapshot

Living document. Update whenever structure, data shape, or major patterns change — don't let this drift from reality.

## Stack
React 19 + Vite + Tailwind CSS v4 (CSS-based `@theme` config) + Framer Motion 12 + Lenis (smooth scroll, `lenis/react`) + React Router (`BrowserRouter`).

## Routing
- `/` — `Home.jsx`, composes: Hero → TickerTape → About → Experience → Projects → Achievements → Skills → Certifications → Contact
- `/project/:id` — `ProjectDetail.jsx`
- `*` — `NotFound.jsx`

`App.jsx`: `MotionConfig reducedMotion="user"` → `SmoothScroll` (root Lenis, skipped for reduced motion) → `IntroContext` → first-visit `Preloader` + `Layout` (navbar/footer/cursor/progress/grain) → `AnimatePresence mode="wait"` routes. Each page wraps itself in `PageTransition` (5-column stair wipe; resets scroll while covered). `history.scrollRestoration = 'manual'`.

## Data layer (`/src/data/`)
Content is fully separated from components — components import and render, never hardcode copy. Strings may contain `*emphasis*` (rendered italic serif via `utils/emphasis.js`).

- `personal.js` — name/firstName/lastName, title, hero statement + rotating words, tagline, preloader `introWords`, marquee `focusAreas`, About `manifesto` + `bio[]` + `facts[]`, `stats[]` (animated counters), timeZone, availability
- `experience.js` — `experiences[]`: id, role, company, companyUrl, location, period {start,end}, current, type (`founder`|`work`|`leadership`), typeLabel, summary, highlights[], skills[], optional `badges[]`, `standards[]`, `metric {value, baseline, label, caption}`. Order = display order (newest first).
- `projects.js` — `projects[]` in display order (id, featured, title "Name — Tagline", short/full/architecture descriptions, category, tags, highlights, techStack, metrics, technologies, links, impact, date, duration) + helpers (`getFeaturedProjects`, `getProjectById`, `getNext/PrevProjectId`, `getProjectTitleParts`, `getProjectNumber`)
- `achievements.js` — `achievements[]` (rank, rankLabel, place, event, project, projectId, description, date) + `getAchievementForProject`
- `skills.js` — `skillDomains[]` (rendered as tabs) and `skillCategories[]` (only "Programming Languages" and "Languages" are rendered, under the tabs)
- `certifications.js` — `certifications[]` + `upcomingGoals[]` (progress + `**bold**` description)
- `contact.js` — `contactInfo`, `socialLinks[]`, `getSocialLink`, `contactContent`
- `navigation.js` — nav links + CTA

## Media
`src/assets/media.js` is the only place images are imported: `portrait`, `getProjectCover(id)`, `getProjectDetailMedia(id)` (`{src, fit?}`; `fit: 'contain'` for tall screenshots), `getExperienceImage(id)`. Missing project covers render a generated cover (ink, dot grid, drifting accent glow, outlined name). Pending real images: VoiceFL-MAML, InterviewForge, JarvisLfla7, Axon, Attijari Payment.

## Components
- `layout/` — `Navbar` (hide on scroll down, local time, rolling links, theme toggle, CTA; full-screen ink menu on mobile), `Footer` (ink, link columns, back-to-top, giant wordmark), `Layout`, `LocalTime`
- `motion/` — `SmoothScroll`, `Preloader`, `PageTransition`, `SplitText`, `ScrollRevealText`, `RotatingWords`, `VelocityMarquee`, `RollText`, `Counter`, `Reveal`, `ParallaxImage` (photos; crops while drifting), `ImageReveal` (screenshots; ends uncropped), `Cursor`, `ScrollProgress`
- `sections/` — `Hero` (+ `DotField` ambient canvas, non-interactive; `CircularBadge`), `TickerTape`, `About`, `Experience` (+ `ExperienceEntry`, `ExperienceVisuals`: `ScanRadar`, `MetricCompare`), `Projects`, `Achievements`, `Skills`, `Certifications`, `Contact`
- `projects/` — `ProjectCarousel` (Home + project pages, `excludeId`), `ProjectCard`, `ProjectCover`
- `ui/` — `SectionIntro` (+ `Eyebrow`), `ThemeToggle` (View Transitions circular reveal), `icons.js` (explicit Lucide registry; don't `import * as LucideIcons`)
- `hooks/` — `useReducedMotion`, `useMediaQuery`/`useFinePointer`, `useScrollTo`, `useSectionNav`, `useLocalTime`, `IntroContext`/`useIntro`, `ThemeProvider`/`useTheme`

## Design system
Tokens in `index.css` `@theme`: `--color-bg/surface/surface-muted/fg/fg-muted/fg-subtle/line/line-strong/accent/accent-2/accent-3/ink/ink-soft/paper`, fonts (Geist, Instrument Serif, Geist Mono — loaded via `<link>` in `index.html`), `--ease-expo`, `--ease-quart`, shadows. Dark mode overrides on `html.dark`. Base element styles in `@layer base`, custom classes in `@layer components` (utilities must be able to override them).

## Motion conventions
- Easing: `ease.expo` for reveals, `ease.quart` for curtains (`config/animations.js`)
- Headings: `SectionIntro`/`SplitText` (masked char rise); entrances: `Reveal` with `viewportOnce`
- Scroll-linked via `useScroll`/`useTransform`; programmatic scroll only via `useScrollTo`/`useSectionNav`
- Hover: `group/roll` + `RollText`, `data-cursor="Label"` (+ `data-cursor-variant="ink"` on accent fills); no magnetic buttons
- Reduced motion: global `MotionConfig`, plus explicit skips (Lenis, preloader, marquees, carousel auto-scroll)

### Experience timeline
Centre spine (left on mobile) with an accent fill driven by scroll progress; entries alternate card side; the dates + visual column is sticky on desktop; nodes light up at 60% viewport.

### ProjectCarousel
Window-level pointer gesture system (not Framer `drag`), click vs drag threshold 8px, 3 copies with wrap, hover/keyboard pause, momentum, keyboard-safe focus. Full notes in CLAUDE.md.

## Known constraints
- **GitHub Pages SPA routing**: direct navigation to `/project/:id` 404s (no server rewrites + `BrowserRouter`). Open issue — see `brain/ISSUES.md`.
