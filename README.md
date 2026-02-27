# Projxon | STEM Workforce Pipeline — Grant Website

A single-page Next.js website for the **Projxon / Momentum Internship Program (MIP)** STEM workforce pipeline initiative, designed for grant applications (e.g., OSIT) and ecosystem partners.

## Structure

All content is on a single page with smooth scroll navigation:

1. **Home** — Hero section, ecosystem statement, regional impact snapshot
2. **About** — Mission & vision, founder commitment, ecosystem model
3. **STEM Initiative** — Regional need, problem statement, solution, deliverables
4. **Programs** — Momentum Internship Program (workforce engine), leadership track, weekly cadence
5. **Impact** — Metrics dashboard, alumni pathways, case studies
6. **Partners** — University partnerships, employer & workforce partners, invitation to collaborate
7. **Research & Evaluation** — Evaluation framework, continuous improvement loop
8. **Governance** — Leadership structure, reporting & compliance
9. **Contact** — OSIT Grant Initiative / STEM contact and ecosystem reference links

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
└── components/
    ├── Header.tsx          # Navigation header
    ├── Footer.tsx          # Footer component
    └── sections/           # Section components
        ├── HeroSection.tsx
        ├── EcosystemSection.tsx
        ├── ImpactSnapshotSection.tsx
        ├── AboutSection.tsx
        ├── STEMInitiativeSection.tsx
        ├── ProgramsSection.tsx
        ├── ImpactSection.tsx
        ├── PartnersSection.tsx
        ├── ResearchEvaluationSection.tsx
        ├── GovernanceSection.tsx
        └── ContactSection.tsx
```

## Features

- **Single-page design** — All content on one page with smooth scroll navigation
- **Component-based** — Each section is a separate component for easy maintenance
- **MIP data integrated** — Uses real data from MIP website (200+ interns, 25 campuses, 14 industries)
- **Grant-focused** — Structured for grant applications and partner presentations
- **Responsive** — Mobile-friendly design

## Customization

- Update contact information in `ContactSection.tsx`
- Add real partner logos in `PartnersSection.tsx`
- Replace placeholder metrics in `ImpactSection.tsx` with actual data
- Add real case studies (with consent) for grant materials

## References

- [Momentum Internship Program](https://momentuminternshipprogram.com/)
- [Washoe County Schools — Incline](https://www.washoeschools.net/inclinees)
- [ECSD — Jackpot](https://jackpot.ecsdnv.net/)
