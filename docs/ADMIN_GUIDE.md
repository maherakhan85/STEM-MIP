# Admin Guide (STEM-MIP)

This guide is for new admins who need to quickly edit content, images, and structure safely.

## 1) Where to Edit Content

- Home page: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- STEM Initiative: `src/app/stem-initiative/page.tsx`
- Programs: `src/app/programs/page.tsx`
- Impact: `src/app/impact/page.tsx`
- Partners: `src/app/partners/page.tsx`
- Culture: `src/app/events/page.tsx`
- Contact: `src/app/contact/page.tsx`


Reusable content blocks:

- Shared sections: `src/components/sections/`
- Header navigation: `src/components/Header.tsx`
- Footer: `src/components/Footer.tsx`

Global styling:

- `src/app/globals.css`

## 2) Asset Management Rules

- Store website images in `public/images/`.
- Use descriptive file names (example: `mip-stem-tech.png`).
- Reference assets with absolute public paths:
  - `"/images/file-name.png"`
- Before deleting any image:
  1. Search usages in `src/`
  2. Run `npm run build`
  3. Open affected pages and verify visuals

## 3) Safe Structure Standards

- Keep each route page focused on page-level layout and metadata.
- Move repeated UI blocks to `src/components/sections/`.
- Prefer constants arrays for repeated cards/lists to reduce clutter.
- Keep long page files segmented with clear section comments.

## 4) Pre-Release Checklist

Run before any deployment:

```bash
npm run lint
npm run build
```

Manual checks:

- Navigation links open correct pages
- Mobile menu works
- Hero/section images load
- Contact form and external links work

## 5) Troubleshooting (Dev Server)

If you see errors like `Cannot find module './xxx.js'` under `.next/server/...`:

1. Stop dev server
2. Delete `.next/`
3. Restart with `npm run dev`

This is usually a stale cache issue after major file changes.
