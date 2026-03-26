# STEM-MIP Website

Public-facing website for the Projxon Momentum Internship Program (MIP), built with Next.js App Router.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript + React 18
- Bootstrap 5 + custom global CSS

## Quick Start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Current Route Map

- `/` Home
- `/about` About
- `/stem-initiative` STEM Initiative
- `/programs` Programs
- `/impact` Impact
- `/partners` Partner Universities
- `/events` Culture
- `/contact` Contact

## Project Structure

```text
public/
  images/                    Static image assets

src/
  app/                       Next.js routes, layout, metadata, global styles
    layout.tsx               Shared page shell (Header/Footer)
    globals.css              Global design system + component styles
    */page.tsx               Route pages

  components/
    Header.tsx               Top navigation
    Footer.tsx               Global footer
    ContactForm.tsx          Contact form UI
    MopPhotoCarousel.tsx     Culture page carousel
    AnimateOnScroll.tsx      Motion utility wrapper
    sections/                Reusable section-level components
```

## Admin Editing Guide

For onboarding and day-to-day updates, see:

- `docs/ADMIN_GUIDE.md`

It includes:
- where each page is edited
- asset management rules
- safe cleanup and QA checklist
- common fixes for cache/chunk errors in local dev

## Maintenance Notes

- Keep images in `public/images` and reference them as `/images/<file>`.
- After major file deletes or renames, restart dev server and clear `.next` if needed.
- Run `npm run build` before publishing to catch type and route issues.
