# Known Issues

Append new issues as they come up during the workflow. Mark resolved issues with strikethrough or move to a "Resolved" section with the fix and commit/date — don't delete history.

## Open

### GitHub Pages SPA routing 404 on direct `/project/:id` navigation
- **Symptom**: Direct navigation (typed URL, refresh, external link) to `/project/:id` returns GitHub Pages' default 404 page instead of the app.
- **Cause**: GitHub Pages serves static files with no server-side rewrite rules; the app uses `react-router-dom`'s `BrowserRouter`, which needs the server to always return `index.html`.
- **Fix options**: (a) add a `404.html` that redirects into the SPA (common GH Pages hack), or (b) switch to `HashRouter` (simpler, changes URLs to `/#/project/:id`).
- **Status**: Not yet fixed. Documented in `CLAUDE.md` as a known open issue.
