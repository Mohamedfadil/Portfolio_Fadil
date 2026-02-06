# IntelechoAI Portfolio (Next.js)

A polished Next.js single-page portfolio with a dedicated services page for IntelechoAI. The experience is built for client acquisition and future startup positioning with smooth scrolling, modern visuals, and data-driven sections sourced from your resume.

## Routes
- `/` - primary portfolio SPA
- `/services` - IntelechoAI services and pricing

## Features
- Animated hero, smooth section transitions, and scrollspy navigation
- Dark and light theme toggle with persisted preference
- Resume-driven content (summary, skills, experience, projects)
- Dedicated Microsoft Agent Framework and Data Engineering showcases
- 3D skill marquee and interactive UI components from Aceternity and 21st.dev
- SEO metadata + OpenGraph + JSON-LD structured data
- Responsive layout with client-focused CTAs

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
The site reads your resume from `resources/` and generates structured data used across the site.

1. Drop your resume into `resources/` as `PDF`, `DOCX`, or `TXT`.
2. Run:
```bash
python scripts/parse-resume.py
```
This generates `src/data/resume.json`, copies your resume into `public/` as `resume.<ext>`, and updates `social.resume` in `src/data/portfolio.json`.

3. Regenerate skill tiles for the 3D marquee:
```bash
python scripts/generate-skill-images.py
```
This updates `public/skills/` and `src/data/skills-marquee.json`.

## Customize Content
Main content configuration lives in `src/data/portfolio.json`.

Common edits:
1. Update `profile` details (name, title, email, location).
2. Update `organization` name, tagline, and Spline scene URL.
3. Edit `agentFramework` and `dataEngineering` sections.
4. Update `services.current`, `services.future`, and `pricing` for the services page.
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

## Deployment
- Vercel: import the repo and deploy with default Next.js settings.
- Netlify: use `npm run build` and `npm run start` or set the Next.js build preset.

## Notes
- The contact form uses `mailto:` by default. Swap in a form backend as needed.
- If the Spline embed fails to load, update `organization.splineSceneUrl` in `src/data/portfolio.json`.
