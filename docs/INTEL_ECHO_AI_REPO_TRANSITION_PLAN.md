# IntelEchoAI Website Transition Plan (from `Portfolio_Fadil` to `MohamedFadil/IntelEchoAI`)

## 1) Repository Analysis Summary

This repository is already a **Next.js App Router** application with a startup-facing services page and is close to what you need for `intelechoai.com`.

### Current stack
- Next.js `16.1.6`
- React `19.2.3`
- TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Radix UI primitives
- Optional visual stack: Spline + Three.js for immersive backgrounds/hero effects

### Current route model
- `/` currently behaves as a personal portfolio single-page experience.
- `/services` already behaves like an IntelechoAI startup services page.

### Current content model
- `src/data/portfolio.json` drives startup + personal content (profile, organization, services, pricing, team, CTA).
- `src/data/resume.json` drives personal résumé sections used by the portfolio pages.

### Current deployment fit
- Build and deployment setup is already aligned for Vercel (`npm run build`, Next.js defaults).

## 2) What to Keep for `MohamedFadil/IntelEchoAI`

Keep these nearly as-is to retain animation capability and easy Vercel deployment:

- `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`
- `src/components/ui/*` animation primitives and visual effects
- `src/components/theme-provider.tsx`, `src/app/globals.css`
- Route-level loading strategy in `src/app/services/loading.tsx`
- Deferred loading patterns in `src/components/lazy/*`

## 3) What to Remove/Refactor in New Repo

To make the new site startup-only (not portfolio):

1. Remove personal résumé-driven sections and dependencies:
   - `Journey`, `Experience`, `Projects` sections
   - `resume.json` coupling for metadata
2. Convert homepage (`/`) into startup landing page:
   - Hero (startup proposition)
   - Services overview
   - Team
   - Pricing / engagement models
   - Contact CTA
3. Keep `/services` or merge services content into `/` depending on SEO strategy.
4. Update metadata and structured data from `Person` schema to `Organization` schema.

## 4) Recommended New Repo Bootstrapping Flow

When you start in `MohamedFadil/IntelEchoAI`:

```bash
git clone git@github.com:MohamedFadil/IntelEchoAI.git
cd IntelEchoAI
```

### Option A (fastest): clone this codebase as baseline
1. Copy this repository content into the new repo.
2. Remove portfolio-specific sections/components/data.
3. Rename `src/data/portfolio.json` to `src/data/site.json` (startup-centric schema).
4. Rebuild routes around organization-first content.

### Option B (cleaner long-term): fresh Next app + selective imports
1. Initialize fresh Next.js + Tailwind app.
2. Import only reusable UI/animation components.
3. Recreate section components with startup-only copy and schema.

## 5) Suggested `site.json` Schema for Startup-Only Content

Use a single source of truth for all startup content:

```json
{
  "organization": {
    "name": "IntelEchoAI",
    "tagline": "Intelligence that Resonates.",
    "domain": "https://intelechoai.com",
    "email": "intelechoai@gmail.com"
  },
  "hero": {
    "headline": "Build production-grade AI systems, not prototypes.",
    "subheadline": "Agentic AI, RAG platforms, and cloud-native delivery for enterprise teams.",
    "primaryCta": { "label": "Book Discovery Call", "href": "#contact" },
    "secondaryCta": { "label": "Explore Services", "href": "/services" }
  },
  "services": [],
  "caseStudies": [],
  "pricing": [],
  "team": {},
  "faq": [],
  "social": {}
}
```

## 6) Execution Plan (first coding sprint in new repo)

1. **Foundation**
   - set theme tokens, typography, navbar/footer shell
2. **Landing Page**
   - startup hero + trust/positioning + services teaser + CTA
3. **Services Page**
   - detailed offerings + process + pricing + CTA
4. **Credibility Layer**
   - case studies, testimonials, logos, FAQs
5. **SEO + Analytics**
   - Organization schema, OG tags, sitemap, robots, analytics
6. **Launch**
   - Vercel project + domain mapping (`intelechoai.com`) + basic monitoring

## 7) Vercel Deployment Notes

- Framework: Next.js (auto-detected)
- Build command: `npm run build`
- Install command: `npm install`
- Output: default Next.js
- Add environment variables (if any integrations are introduced) in Vercel Project Settings

## 8) Recommended Immediate Decision

For speed, use **Option A** (this repo as a base), then strip portfolio sections and reframe `/` as startup-first.

This gives you:
- same stack
- same animation capabilities
- same Vercel deployment path
- minimal rework
