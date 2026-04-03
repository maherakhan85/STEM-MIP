# Admin Guide (STEM-MIP)

This guide is for people who edit the live site content in the repository. There is no separate admin UI or database: updates are made by changing TypeScript/React files, then building and deploying the Next.js app.

## Prerequisites

- **Node.js** (LTS recommended) and **npm** installed locally.
- A code editor (VS Code or Cursor works well).
- Basic familiarity with **Git** (branch, commit, pull request) if your team uses a review process before deploy.

## Route map

| URL path | Page file | Notes |
|----------|-----------|--------|
| `/` | `src/app/page.tsx` | Home; composes multiple sections (see below). |
| `/about` | `src/app/about/page.tsx` | |
| `/stem-initiative` | `src/app/stem-initiative/page.tsx` | |
| `/programs` | `src/app/programs/page.tsx` | |
| `/impact` | `src/app/impact/page.tsx` | Includes map-related UI. |
| `/partners` | `src/app/partners/page.tsx` | |
| `/events` | `src/app/events/page.tsx` | Labeled “Culture” in the main nav. |
| `/contact` | `src/app/contact/page.tsx` | Contact form and related copy. |

**Global shell** (every page): `src/app/layout.tsx` wraps all routes with fonts, Bootstrap + global CSS, the site background blobs, `Header`, and `Footer`.

## 1) Where to Edit Content

### Home page (`/`)

The home page does not inline all copy in one file. It imports sections from `src/components/sections/`. Current composition:

- `HeroSection`
- `EcosystemSection`
- `ImpactSnapshotSection`
- `STEMInitiativeSection`
- `ProgramsSection`

Scroll-in animations are applied via `AnimateOnScroll` in `src/app/page.tsx`. To change **order**, **which sections appear**, or **animation**, edit `page.tsx`; to change **words, images, or cards inside a block**, open the matching file under `src/components/sections/`.

### Other routes

- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- STEM Initiative: `src/app/stem-initiative/page.tsx`
- Programs: `src/app/programs/page.tsx`
- Impact: `src/app/impact/page.tsx`
- Partners: `src/app/partners/page.tsx`
- Culture: `src/app/events/page.tsx`
- Contact: `src/app/contact/page.tsx`

### Reusable section components (`src/components/sections/`)

| File | Typical use |
|------|----------------|
| `HeroSection.tsx` | Home hero |
| `EcosystemSection.tsx` | Home |
| `ImpactSnapshotSection.tsx` | Home |
| `STEMInitiativeSection.tsx` | Home (and may be referenced elsewhere) |
| `ProgramsSection.tsx` | Home |
| `AboutSection.tsx` | About and similar long-form pages |
| `PartnersSection.tsx` | Partner logos / lists |
| `ImpactTeamMapSection.tsx` | Impact page geography / team visualization |
| `SuccessStoriesCarousel.tsx` | Carousel content |

Other shared UI:

- **Header**: `src/components/Header.tsx` — main navigation and Careers button.
- **Footer**: `src/components/Footer.tsx` — logo strip, social links, copyright year.
- **Contact form**: `src/components/ContactForm.tsx` — mailto-based submit (see below).
- **Culture carousel**: `src/components/MopPhotoCarousel.tsx` — used from the events/culture flow.

### Global styling

- **`src/app/globals.css`** — site-wide styles, component classes, and layout helpers.
- **`tailwind.config.ts`** — Tailwind theme extensions, including the **MIP color tokens** (`mip.dark`, `mip.medium-blue`, `mip.accent`, etc.). Prefer these when adding Tailwind classes so colors stay on-brand.

## 2) Navigation, Careers, and Social Links

### Main navigation

Nav items are the `mainNavItems` array in `src/components/Header.tsx`. To add a new top-level page:

1. Add a route under `src/app/<segment>/page.tsx`.
2. Add `{ href: "/<segment>", label: "Label" }` to `mainNavItems`.
3. Run lint/build and verify desktop and mobile menus.

The **Careers** control is separate: it links to `https://app.dover.com/jobs/projxon` (external). Update that URL in `Header.tsx` if recruiting moves to a different system.

### Footer social links

Social icons and URLs live in `SOCIAL_LINKS` in `src/components/Footer.tsx`. Edit `href` values there when accounts or URLs change.

## 3) SEO and page titles

- **Default site metadata** (title and description used when a page does not override them) is in `src/app/layout.tsx` (`export const metadata`).
- **Per-page titles and descriptions** are set with `export const metadata` in many route files (for example `about/page.tsx`, `contact/page.tsx`). When you add a new route, copy that pattern so search results and browser tabs read correctly.

## 4) Contact form behavior

`ContactForm` does **not** POST to a server. On submit it opens the user’s email client with a **mailto:** link to `communications@projxon.com`, with subject and body prefilled from the form. To change the destination address, edit the `EMAIL` constant in `src/components/ContactForm.tsx`.

## 5) Asset Management Rules

- Store website images in **`public/images/`**.
- Use descriptive file names (for example `mip-stem-tech.png`).
- Reference assets with **root-absolute** paths for static files: `"/images/file-name.png"`.
- When using `next/image`, `src` uses the same public path (for example `src="/images/hero.jpg"`).
- Before deleting any image:
  1. Search usages across `src/` (and `public/` if referenced from CSS).
  2. Run `npm run build`.
  3. Open affected pages and verify visuals.

## 6) Safe Structure Standards

- Keep each route `page.tsx` focused on layout, metadata, and composing sections.
- Move repeated UI blocks into `src/components/sections/` or smaller components.
- Prefer arrays of objects (constants) for repeated cards or list items so edits stay in one place.
- Keep long files readable with section comments and consistent naming.

## 7) Pre-Release Checklist

Run before any deployment:

```bash
npm run lint
npm run build
```

**Manual checks:**

- Every item in the header navigates to the intended page; active state looks correct on the current route.
- Mobile menu opens, closes, and does not trap focus incorrectly.
- Hero and section images load (including on a slower connection).
- Contact form opens mail with the expected recipient (or your test mail client behavior).
- External links (Careers, social icons) open in a new tab where intended and use `rel="noopener noreferrer"`.

## 8) Local development and production

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies (after clone or when `package.json` changes). |
| `npm run dev` | Development server (default [http://localhost:3000](http://localhost:3000)). |
| `npm run build` | Production build; catches many TypeScript and import errors. |
| `npm start` | Run the production build locally (after `npm run build`). |
| `npm run lint` | ESLint via Next.js. |

## 9) Troubleshooting (Dev Server)

If you see errors like `Cannot find module './xxx.js'` under `.next/server/...`:

1. Stop the dev server.
2. Delete the `.next/` directory.
3. Restart with `npm run dev`.

This is usually a stale cache issue after major file renames or dependency updates.

## 10) Special components (heads-up)

- **`AnimateOnScroll`** — client-side scroll animations; used on the home page.
- **Impact map / D3** — the Impact area may use D3/topojson-related dependencies; test that page after dependency upgrades.
- **Swiper** — used for carousels; if you change slide markup, verify mobile swipe and keyboard focus.

When in doubt, grep for a component name across `src/` to see every place it is used before editing.
