# IntelechoAI Portfolio (Next.js)

A polished Next.js single-page portfolio with a dedicated services page for IntelechoAI. The experience is built for client acquisition and future startup positioning with smooth scrolling, modern visuals, and data-driven sections sourced from your resume.

## Routes
- `/` - primary portfolio SPA
- `/services` - IntelechoAI services and pricing

## Features
- Animated hero, smooth section transitions, and scrollspy navigation
- Dark and light theme toggle with persisted preference
- Resume-driven content (summary, skills, experience, projects)
- Spline-powered services hero, glowing service cards, and immersive brand intro
- SEO metadata + OpenGraph + JSON-LD structured data
- Responsive layout with client-focused CTAs

## Performance Optimizations
- Server-first section rendering (`src/components/shared/Section.tsx`) to avoid unnecessary hydration across static content.
- Deferred below-the-fold heavy sections using `next/dynamic` + `ssr: false` via:
  - `src/components/lazy/HomeDeferred.tsx`
  - `src/components/lazy/ServicesDeferred.tsx`
- Progressive Spline loading for `/services`:
  - Delayed mount after first paint (`src/components/lazy/ServicesSpline.tsx`)
  - Dedicated premium loader (`src/components/ui/spline-loader.tsx`)
  - Route-level loading UI (`src/app/services/loading.tsx`)
- Motion gating for expensive effects on `prefers-reduced-motion: reduce`.
- Throttled animation frame rates + visibility-aware rendering for canvas/WebGL effects to reduce scroll jank.
- `three` is loaded lazily at runtime inside `src/components/ui/animated-shader-background.tsx` instead of static top-level import.
- Removed `motion` dependency; glow interaction now uses lightweight native updates.
- Audited image usage: no raw `<img>` tags are currently used in app UI components.

## Tech Stack
- Next.js App Router
- React with Hooks
- Tailwind CSS v4
- Radix UI primitives

## Getting Started
```bash
npm install
npm run dev
```
Open `http://localhost:3000` for the portfolio and `http://localhost:3000/services` for the services page.

## Resume Parsing
Resume data lives in `src/data/resume.json` and is used by the Journey, Experience, and Projects sections.

You can update it manually or regenerate it from a resume file:
1. Drop your resume into `resources/` as `PDF`, `DOCX`, or `TXT`.
2. Run:
```bash
python scripts/parse-resume.py
```
This updates `src/data/resume.json` and copies your resume into `public/` as `resume.<ext>`.

## Customize Content
Main content configuration lives in `src/data/portfolio.json`.

Common edits:
1. Update `profile` details (name, title, email, location).
2. Update `organization` name, tagline, and Spline scene URL.
3. Update `services.current`, `services.future`, and `pricing` for the services page.
4. Update `competencies` and `team` for the main portfolio.
5. Replace social links in `social`.

## Key Files
- `src/app/page.tsx` - main portfolio layout
- `src/app/services/page.tsx` - services page layout
- `src/data/portfolio.json` - editable portfolio configuration
- `src/data/resume.json` - generated resume data
- `src/components/sections/*` - section components
- `src/components/ui/*` - UI components from Aceternity and 21st.dev
- `src/app/globals.css` - theme tokens, animations, utilities

## Linting and Formatting
```bash
npm run lint
npm run lint:fix
npm run format
```

## Production Verification
```bash
npm run build
```
This repo is configured to statically prerender `/` and `/services` on successful production builds.

## Deployment
### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mohamedfadil/Portfolio_Fadil)

1. Import the GitHub repo in Vercel.
2. Framework preset: **Next.js**
3. Build command: `npm run build`
4. Output: default

### Netlify
Use `npm run build` and `npm run start` or set the Next.js build preset.

## Notes
- The contact form uses `mailto:` by default. Swap in a form backend as needed.
- If the Spline embed fails to load, update `organization.splineSceneUrl` in `src/data/portfolio.json`.
