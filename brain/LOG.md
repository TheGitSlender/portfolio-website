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
