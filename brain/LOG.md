# Workflow Log

Append-only journal of decisions, requests, and what was done, in chronological order. Newest entry at the bottom. Purpose: let a future Claude session (or the user) reconstruct *why* the codebase looks the way it does without re-reading the whole git history.

Each entry: date, what was requested, what was decided/done, and any open follow-ups.

---

## 2026-08-03
**Requested**: User wants to (1) add a few new projects from other hackathons they've participated in, (2) update the Skills section with new tools/technologies, (3) add a dedicated Achievements section for hackathon wins. User will decide on visual design separately and come back with direction later. Also asked to create this `brain/` directory to persist architecture notes, issues, and workflow decisions across sessions.

**Done**: Read through the full codebase (`App.jsx`, `Home.jsx`, all `/src/data/*.js`, `Projects`/`ProjectCarousel`/`Skills`/`Certifications` components) to build context. Created `brain/` with `ARCHITECTURE.md` (structural snapshot) and `ISSUES.md` (known GH Pages routing issue, carried over from `CLAUDE.md`).

**Open follow-ups**:
- Need from user: details of the new hackathon projects (name, description, tech stack, placement/date, images if any) to add to `data/projects.js` + `ProjectCarousel.jsx` image map.
- Need from user: what to add/change in `data/skills.js` (`skillCategories` and/or `skillDomains`).
- Need to decide: Achievements section scope — is it a new home-page section (new component + `data/achievements.js`) separate from `Certifications`, and does it duplicate or supersede the hackathon mentions already embedded in `projects.js` (MediCore 10th place, Aegis AI Spring School, CallPilot)? Awaiting user's list of hackathon wins and their design direction before implementing.

---

## 2026-08-03 (cont'd) — CV-driven content overhaul
**Requested**: User delivered a full brief sourced from Hany's current CV (see chat for verbatim doc) covering: reposition Hero to lead with "ML Engineer" + 5th-year/GPA/relocation; add APP internship + reword Alignerr/3D Smart Factory/CIAM AI Club experience entries (explicitly no Cybersecurity Club VP entry); add VoiceFL-MAML and InterviewForge as full projects; correct Aegis's hackathon attribution (AgorAI, not "AI Spring School"); add JarvisLfla7 (HackAI 2nd place + Best Pitch); build the Achievements section; update Skills with LangGraph/LangChain/Flower/Kubernetes/Terraform/ArgoCD/prompt-injection-hardening. Hard workflow rule set: never commit to `master` directly — always branch, work there, merge only when told.

**Follow-up answers from user** (resolving the 3 open items above): VoiceFL-MAML GitHub is `https://github.com/TheGitSlender/Voice_FL`. **All** new projects (including JarvisLfla7) get full carousel + detail pages, not achievement-only mentions. Achievements section stays lightweight — event won + brief project mention only, no full write-up duplication. No "research paper in preparation" line and no Education section — instead VoiceFL-MAML's project page frames it as a research project (not an engineering build). No images yet for new projects/APP internship — use the existing text-fallback placeholder pattern already built into `ProjectCarousel`/`ProjectDetail` (don't add entries to their local image maps until real assets arrive). APP internship is on-site in Casablanca.

**Done**:
- Committed `brain/` + pending CV PDF to `master` (one-time, explicitly requested), then created branch `content/cv-update-2026-08` for all further work — see `feedback-no-direct-main-commits` in Claude's cross-session memory for the durable branching rule.
- `personal.js`: title → "ML Engineer | AI & Cloud Engineer", rewrote tagline/bio (5th year, ENSAM 2022–2027, GPA 3.7/4.0, AWS/voice/multi-agent/federated-learning framing, open to relocation), bumped stats "Years Experience" 4+ → 5+.
- `experience.js`: added `app-attijari` (APP, Jul 2026–Present, on-site Casablanca, no image yet), reworded `scale-ai` to "AI Trainer, Code Specialist", `3d-smart-factory` dates → Jun–Sep 2024, `ai-club-president` company → "CIAM AI Club - ENSAM Casablanca" (end date unchanged, confirmed correct).
- `projects.js`: added `voicefl-maml`, `interviewforge`, `jarvislfla7` as full entries (all `featured: true`, `carouselImage`/`detailImage: null` — no image-map entries added in `ProjectCarousel.jsx`/`ProjectDetail.jsx`, so they render via the existing text-fallback). Corrected `aegis` highlights/shortDescription/metrics/impact to "1st Place, AgorAI Hackathon... presented at UM6P AI for Impact alongside Yann LeCun, Eric Xing..." (replacing the old "AI Spring School"/Michael Jordan/Joëlle Barral framing).
- New `data/achievements.js` + `components/sections/Achievements.jsx` (SectionBadge/AnimatedHeading pattern, cards link to `projectId` where present) — wired into `Home.jsx` between `Projects` and `Certifications`, and added a nav entry (`#achievements`) in `data/navigation.js`.
- `skills.js`: added LangGraph/LangChain/Flower to AI/ML Frameworks, Federated Learning/Multi-Agent Systems to AI/ML Specializations, a new "Cloud & DevOps" flat category (AWS/Kubernetes/Docker/Terraform/ArgoCD), Prompt Injection Hardening to Systems & Security. **Note**: `skillCategories` (flat list) is currently unused/dead data — only `skillDomains` (the accordion) is actually rendered by `Skills.jsx`; updated `skillDomains` tools/architecture to match (LangGraph/Flower, Kubernetes/Terraform/ArgoCD, GitOps Workflows, Prompt Injection Hardening).
- Verified: `npm run lint` clean, `npm run build` succeeds. Dev server would not start under this sandbox's Node 18.19.1 (Vite 7 requires Node 20+) — user installed nvm mid-session and switched to Node 20.20.2, after which `npm run dev` started cleanly on port 5174.

**Open follow-ups**:
- No browser automation tool available in this sandbox (Chrome extension declined, Playwright MCP bridge extension not installed) — the new Achievements section and repositioned Hero have **not** been visually verified in-browser by Claude; asked the user to spot-check `http://localhost:5174/` directly.
- Real images for VoiceFL-MAML, InterviewForge, JarvisLfla7, and the APP internship are still pending from Hany — once supplied, add to `carouselImages` (`ProjectCarousel.jsx`), `detailImages` (`ProjectDetail.jsx`), and `experienceImages` (`Experience.jsx`) respectively.
- Branch `content/cv-update-2026-08` has not been merged to `master` — awaiting user review/approval per the hard branching rule.

---

## 2026-10-05 — Motion-first redesign (branch `redesign/motion-revamp`)
**Requested**: Revamp the entire design while keeping the color themes ("show me what you can do, I love motion design and smooth animations"). Content: remove Alignerr/Outlier from experience, update the Attijari Payment internship from the current CV, add the founder role at Axon.

**Decided/Done** (branched from `content/cv-update-2026-08`, which is still unmerged into `master`, so the new branch carries that CV work too):
- Kept palette (#f0f0f0 / #0a0a0a / #ff3700); new type system Geist + Instrument Serif italic accents + Geist Mono labels. Tokens renamed to short semantic names (`bg`, `fg`, `line`, `accent`, `ink`, `paper`...).
- Added Lenis smooth scroll; new motion toolkit in `components/motion/`; first-visit preloader with curved-edge lift; stair-wipe page transitions; cursor follower with labels; hide-on-scroll navbar with live Casablanca time; View Transitions theme toggle.
- Sections rebuilt: canvas signal-field hero with kinetic name + portrait pill, crossing velocity marquees, scroll-revealed About statement + counters, stacking Experience cards (Axon radar card, APP 94% vs 65% metric card), pinned horizontal project gallery (grid fallback), editorial Achievements list with hover preview, tabbed Skills, spotlight Certifications, accent Contact block, ink Footer with giant wordmark. Project detail page and 404 redesigned.
- Content: `experience.js` now Axon (founder, links to axonsecurity.tech) → Attijari Payment (Jul–Sep 2026, CV bullets) → 3D Smart Factory → CIAM AI Club; Outlier/Alignerr removed (and its image). Hero/About/stats repositioned to "AI & Security Engineer" per CV; projects reordered (InterviewForge, VoiceFL-MAML, Aegis, JarvisLfla7 first); bundled résumé PDF replaced with the current CV.
- Removed replaced components (ProjectCarousel, TimelineCard, DomainAccordion, ProfileCard, Card, TiltCard, Button, SectionBadge, AnimatedHeading, SectionHeader, ProgressBar, CustomCursor, useMagnetic) and the docs-only image maps / dead per-project image fields in `projects.js`.
- Verified: lint clean, build passes, headless-Chrome screenshot sweep (desktop/mobile/dark/detail) with no console errors and no horizontal overflow.
- QA fixes from the screenshot review: preloader words overlapping (popLayout exit needs a *positioned* overflow mask), generated-cover label colliding with the index badge, achievement arrow wrapping, footer wordmark width/descender, project-detail covers cropped by parallax zoom (new `ImageReveal`), and `/#section` landing short because Lenis clamps to a stale max scroll after a route change (`useScrollTo` now calls `lenis.resize()` first).
- Code-review fixes: cursor blend mode moved to the fixed stacking-context element (was a plain white dot on light), cards only recede where they stick, keyboard focus inside the pinned gallery scrolls the page instead of the sticky box, WAI-ARIA tab keys in Skills, navbar reveals on focus, mobile menu is a dialog with Escape + initial focus, marquee idles off-screen, canvas does one layout read per frame.

- Second visual-QA pass: achievement preview now positions on row enter (no fly-in from 0,0); label cursor goes ink over accent fills (`data-cursor-variant="ink"`); generated covers `isolate` so the blurred glow respects rounded corners; looser tracking on outlined cover names; steeper ticker crossing (±4°); dark-mode cards cast an upward shadow to separate the stack; short Skills tab labels on phones (`shortTitle`); counters use a shorter-tailed ease.

**Open follow-ups**:
- Not committed yet — awaiting user review.
- Real images still pending for InterviewForge, VoiceFL-MAML, JarvisLfla7 (generated covers for now).
- `upcomingGoals` still says the RL Specialization is in progress while the CV lists it as earned — confirm with user.

---

## 2026-10-05 (cont'd) — Owner feedback round 1 (same branch)
**Requested**: no photo in the hero (About only), remove the mouse-interactive grid, lift the hero text; replace the sliding/stacking experience cards (suggested: cards left/right along a line); bring back the project carousel; on project pages, a way to choose another project plus a clear "Back" button; achievements: "View" cursor with a slightly smaller circle, no image following the cursor; fix Technical Depth panel not showing when clicking a tab while scrolling; add CV skills; remove buttons that follow the cursor.

**Done**:
- Hero: removed portrait pill + `SignalField` canvas; name/statement block centred and biased up.
- Experience: new centre-spine timeline (`ExperienceEntry`), scroll-drawn accent line, alternating cards, sticky dates + visuals (Axon radar now in its own ink panel). Removed `ExperienceCard` and the `.stack-card` CSS. Looked at timeline patterns (Awwwards/Framer marketplace) — alternating cards on a drawn line with animated nodes is the common thread.
- Projects: restored the original carousel's gesture system as `components/projects/ProjectCarousel.jsx` (restyled), plus hover-to-stop, drag momentum, keyboard support (old version blocked Enter), off-screen idling. Removed `HorizontalGallery`.
- Project pages: top "Back" pill + bottom "Keep exploring / More work" section with the carousel (current project excluded) and a solid "Back" button → `/#projects`. Removed the single "Next project" block.
- Achievements: removed the floating preview; label cursor 76 → 66 px.
- Skills: panel visibility now keyed to the section having been seen once (per-panel `whileInView` could leave a panel stuck hidden when it mounted mid-scroll — reproduced and verified fixed). Added a "Voice & Agents" domain and CV items across all domains.
- Removed `Magnetic` entirely.
- Follow-up: owner only wanted the *interactive* part of the hero grid gone. Restored the ambient dot field with its diagonal wave as `DotField.jsx` (no pointer push, no accent mesh, no phantom pointer on touch).

## 2026-10-05 (cont'd) — Hero options preview
**Requested**: landing page feels empty; wants an interactive hero and to see several options.

**Done**: split the hero into shared parts (`hero/HeroParts.jsx`) and five options switchable live via `?hero=` + a temporary floating picker: Classic (current), Terminal (typeable shell fed by /src/data, boot script, history, Tab completion, `open <n>` navigation, easter egg), Bento (Axon / rotating stats / rotating project peek / Casablanca clock tiles), Globe (draggable 3D dot sphere with skill tags + orbit ring), Playground (matter-js tag tray, custom pointer-constraint dragging, contained throws, lazy chunk ~27 kB gz). Copy lives in `data/hero.js`. Added `matter-js` dependency (remove if Playground isn't chosen).

**Open follow-ups**: owner to pick an option → delete `HeroOptionPicker`, the unused options (and `matter-js` if unused), and simplify `Hero.jsx`. Pre-existing `npm audit` advisories (vite, react-router, postcss, …) not addressed yet.
- Round 2: owner rejected Terminal, Bento, Playground; Globe "nice but overused"; Classic preferred. Removed those (and `matter-js`). New options keep the Classic composition and fill its empty areas via `ClassicLayout` slots: Annotated (self-drawing hand-written notes with real facts), Project deck (auto-shuffling fanned project cards), ASCII (rotating ASCII torus knot, drag to turn), Voice wave (speaking waveform + typed sample utterances from the voice projects, `data/hero.js`).

## 2026-10-05 (cont'd) — Polish + scroll performance
**Requested**: remove the live dot next to the name in the navbar; keep the rolling-text hover only on real buttons (not plain text links); fix FPS dips while scrolling.

**Done**: dot removed; RollText removed from nav links, wordmark, footer links and "More on GitHub". Profiled scroll with a Playwright frame-timing harness (wheel-driven through Lenis, 4× CPU throttle to amplify): long frames 10–12% → ~1.5–2%, 0% unthrottled. Fixes: per-letter `will-change` removed from SplitText; carousel card badges no longer `backdrop-blur`; carousel/hero-dots CSS masks replaced (gradient overlays / fade baked into canvas); generated-cover glow is a radial gradient instead of `blur()`; navbar blur lightened, hero pill blur removed; grain promoted to its own layer; images re-encoded to WebP and sized (≈3 MB → <1 MB; e.g. ctf detail 1.3 MB → 85 KB) with async decoding; entrance animations converted from x/y/scale to `transform` strings (WAAPI, compositor) via `tf()` which also restores reduced-motion behaviour; cursor scales with transform instead of width/height. Profiling showed the remaining dips came from first-time entrance animations (second pass was ~0.5%).
