# Akhilesh Ravuri — Portfolio

A premium, full-stack-developer / DevOps / cloud-architect portfolio site, built with React, TypeScript, and Vite, and deployed to GitHub Pages.

## Tech stack

- React 18 + TypeScript + Vite
- `react-router-dom` (`HashRouter`) — no server-side routing required, so direct links and page refreshes always work on GitHub Pages
- `framer-motion` for scroll/entrance animations
- `react-icons` for technology and social icons
- `react-helmet-async` for per-page SEO metadata
- Plain CSS Modules (no CSS framework) with a single design-token sheet

## All content lives in JSON — edit here, not in components

Everything on the site (services, tech stack, projects, process steps, bio, stats) is data-driven from `src/data/*.json`. To update the site's content you should almost never need to touch a `.tsx` file:

| File | Controls |
|---|---|
| `src/data/site.json` | Name, role, hero copy, About text, contact email/WhatsApp, social links |
| `src/data/nav.json` | Top navigation items |
| `src/data/services.json` | The 5 service categories and their sub-items |
| `src/data/techStack.json` | Technology categories/icons (icon names must match an export from `react-icons/si`, `react-icons/fa`, `react-icons/tb`, or `react-icons/vsc` — see `TechStack.tsx` for the current icon map) |
| `src/data/projects.json` | Project case studies. Leave `"image": ""` to use the built-in CSS visual, or set it to a path under `public/` (e.g. `/projects/my-shot.png`) to show a real screenshot |
| `src/data/process.json` | The 9-step "How I work" timeline |
| `src/data/stats.json` | The animated counters in the hero section |

**The sample projects and bio are placeholders.** Before going live, replace them with your real case studies and background — it's a pure content edit in `src/data/`, no component changes needed.

Shapes for all of the above are typed in `src/types/content.ts`, so an invalid edit will fail the TypeScript build (`npm run build`) rather than silently breaking the page.

## Contact

The Contact section, footer, and the floating WhatsApp button all link directly to email and WhatsApp (no form, no backend) — both come from `site.json`'s `email` and `whatsapp` fields.

## Analytics (optional)

Copy `.env.example` to `.env` and set a Google Analytics 4 Measurement ID to enable tracking:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

If left unset, no analytics script is loaded at all. Page views are tracked manually per route (`src/utils/analytics.ts`) since this is a client-routed `HashRouter` app.

## Theming

A light/dark toggle lives in the nav (top-right). The chosen theme is remembered in `localStorage` and applied before first paint (via a small inline script in `index.html`) so there's no flash of the wrong theme. Both palettes are defined once as CSS custom properties in `src/styles/variables.css` — add a third theme there if you ever need one.

## Local development

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
```

## Deploying to GitHub Pages

This project deploys by building locally and pushing the compiled `dist/` output straight to a `gh-pages` branch (via the `gh-pages` package) — there's no CI/build step required on GitHub's side.

```bash
npm run deploy
```

This runs `npm run build` then pushes `dist/` to the `gh-pages` branch of this repository.

**One-time setup, done once in the GitHub UI:**

1. Push this repo to GitHub (it's `viewus/viewus`, i.e. `https://github.com/viewus/viewus`).
2. Run `npm run deploy` once so the `gh-pages` branch exists.
3. In the repo, go to **Settings → Pages**, and under "Build and deployment" set **Source** to "Deploy from a branch", branch **gh-pages**, folder **/ (root)**.
4. The site will be live at `https://viewus.github.io/viewus/`.

Every time you want to publish new changes, just run `npm run deploy` again.

### If you rename the repo to `<org>.github.io`

GitHub Pages then serves it at the domain root instead of a `/viewus/` sub-path. If you do this, change `base: '/viewus/'` to `base: '/'` in `vite.config.ts` before deploying again.

## Notes

- Routing uses `HashRouter` (`/#/projects`, `/#/project/<slug>`) specifically so that hitting any URL directly, or refreshing on a sub-page, always works on GitHub Pages — the server only ever sees `/viewus/`, and the `#/...` part is resolved entirely client-side.
- `dist/` is intentionally gitignored on `main` — it only ever lives on the `gh-pages` branch, produced fresh by `npm run deploy`.
