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
