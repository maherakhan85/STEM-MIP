"use client";

import { AnimateOnScroll } from "../AnimateOnScroll";

const MIP_ITEMS = [
  "Custom-designed internship programs that create future-ready leaders",
  "Project-based internships with defined deliverables and learning outcomes",
  "Mentorship and career readiness support",
  "Connection to employer partners for potential placement",
];

const LEADERSHIP_ITEMS = [
  "Project ownership and accountability",
  "Peer coaching and mentoring opportunities",
  "Stakeholder presentations and feedback loops",
  "Progression pathways (e.g., from intern to lead to mentor)",
];

function ProgramCard({
  title,
  tagline,
  description,
  items,
  delay = 0,
}: {
  title: string;
  tagline: string;
  description: React.ReactNode;
  items: string[];
  delay?: number;
}) {
  return (
    <AnimateOnScroll animation="fadeUp" delay={delay}>
      <div className="program-card">
        <div className="program-card-accent" aria-hidden />
        <h3 className="program-card-title text-center">{title}</h3>
        <p className="program-card-tagline text-center">{tagline}</p>
        <p className="program-card-desc">{description}</p>
        <ul className="program-card-list list-unstyled mb-0">
          {items.map((text, i) => (
            <li key={i} className="program-card-list-item">
              <span className="program-card-bullet" aria-hidden />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimateOnScroll>
  );
}

export function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-white programs-section">
      <div className="container">
        <AnimateOnScroll animation="fadeUp">
          <h2 className="h1 fw-bold section-heading mb-2">Programs</h2>
          <p className="programs-section-subtitle text-center text-muted mx-auto mb-5">
            Structured pathways from internship to workforce—designed to close the experience gap and create future-ready leaders
          </p>
        </AnimateOnScroll>

        <div className="programs-grid">
          <ProgramCard
            title="Momentum Internship Program (MIP)"
            tagline="Workforce Development Engine"
            description={
              <>
                MIP is a <strong>Workforce Development Engine</strong>—not just an internship program. It combines real-world project work with mentorship, skill-building, and intentional exposure to career pathways. Participants gain experience that aligns with employer needs while building portfolios and professional networks.
              </>
            }
            items={MIP_ITEMS}
            delay={0}
          />
          <ProgramCard
            title="Leadership Track"
            tagline="Own projects. Lead peers. Present outcomes."
            description={
              <>
                The Leadership Track highlights <strong>real-world project flow</strong>: participants don&apos;t just complete tasks—they own projects, coordinate with peers, and present outcomes to stakeholders. Participants can advance into roles where they ADVISE, COACH, PARTNER, and CONSULT.
              </>
            }
            items={LEADERSHIP_ITEMS}
            delay={100}
          />
        </div>
      </div>
    </section>
  );
}
