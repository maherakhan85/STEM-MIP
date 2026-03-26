"use client";

import { useState } from "react";

const CHALLENGE = {
  problem: {
    title: "The Challenge",
    body: "STEM students often graduate into an \"experience gap\"—where they have the degree but lack the high-stakes project history that employers demand. Meanwhile, industry leaders struggle to find talent that is \"day-one ready\"",
  },
  solution: {
    title: "The MIP Solution",
    body: "We bridge this gap by turning real-world client needs into structured internship projects. We don't just teach; we produce",
  },
};

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Project Scoping",
    body: "We take a high-impact project from an Industry Partner",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="stem-timeline-step-icon" aria-hidden>
        <path d="M16 12h32v40H16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 20h32M16 28h24M16 36h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="44" cy="44" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M42 44l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Talent Execution",
    body: "An MIP Intern owns the project, supported by a professional Weekly Cadence",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="stem-timeline-step-icon" aria-hidden>
        <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M20 52c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 36v16M28 44h8M32 48l-4 4M32 48l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48 28l8-4v8l-8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Data-Driven Delivery",
    body: "Outcomes are tracked via our Evaluation Dashboard, proving the intern is ready for the next level",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="stem-timeline-step-icon" aria-hidden>
        <path d="M12 44V24l12 8 12-12 16 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 48h48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="8" y="8" width="48" height="40" rx="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Mentor Feedback Loop",
    body: "Mentors review progress, remove blockers, and coach interns on communication, ownership, and quality standards",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="stem-timeline-step-icon" aria-hidden>
        <circle cx="20" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="44" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M8 48c0-7.7 5.8-14 13-14s13 6.3 13 14M34 48c0-5.5 4.2-10 9.5-10S53 42.5 53 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 26l7 4 10-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Career Transition",
    body: "Partners receive validated talent profiles, and interns move from project success to interviews and employment opportunities",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="stem-timeline-step-icon" aria-hidden>
        <rect x="10" y="16" width="44" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M24 16v-4a4 4 0 014-4h8a4 4 0 014 4v4M10 28h44M26 36l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function STEMInitiativeSection() {
  const [activeCard, setActiveCard] = useState<"problem" | "solution">("problem");

  return (
    <section id="stem-initiative" className="section-padding bg-white">
      <div className="container">
        <h2 className="h1 fw-bold section-heading mb-1 ">STEM Initiative</h2>

        <div className="stem-challenge-single-wrap mb-5">
          <div className="stem-challenge-single-card">
            <div className="stem-challenge-card-image">
              <img src="/images/stem-challenge.jpg" alt="The Challenge" className="stem-challenge-card-img" />
            </div>
            <div className="stem-challenge-card-header" style={{ backgroundColor: "var(--mip-dark-blue)" }}>
              <h3 className="h5 fw-bold mb-0">{CHALLENGE.problem.title}</h3>
            </div>
            <div className="stem-challenge-card-body">
              <p className="text-muted mb-1">{CHALLENGE.problem.body}</p>
              <p className="mb-0 mt-1">
                <button
                  type="button"
                  className="stem-solution-inline-link"
                  onClick={() => setActiveCard("solution")}
                >
                  Click for solution
                </button>
              </p>
            </div>
            {activeCard === "solution" && (
              <div className="stem-solution-overlay" role="dialog" aria-label="MIP Solution">
                <div className="stem-challenge-card-image">
                  <img src="/images/stem-solution.jpg" alt="The MIP Solution" className="stem-challenge-card-img" />
                </div>
                <div className="stem-challenge-card-header" style={{ backgroundColor: "var(--mip-royal-blue)" }}>
                  <h3 className="h5 fw-bold mb-0">{CHALLENGE.solution.title}</h3>
                </div>
                <div className="stem-challenge-card-body">
                  <p className="text-muted mb-0">{CHALLENGE.solution.body}</p>
                </div>
                <button
                  type="button"
                  className="stem-solution-close-line"
                  onClick={() => setActiveCard("problem")}
                >
                  Back to problem
                </button>
              </div>
            )}
          </div>
        </div>

        {/* How it Works — vertical timeline */}
        <div className="stem-how-it-works mb-5">
          <h3 className="h3 fw-bold text-dark mb-2 text-center">How it Works</h3>
         {/* <p className="text-muted text-center mb-5">Internship-to-Workforce Pipeline</p> */}
          <ul className="stem-timeline list-unstyled mb-0">
            {HOW_IT_WORKS.map((item, i) => (
              <li key={item.step} className="stem-timeline-item">
                <div className="stem-timeline-node" aria-hidden>
                  <span className="stem-timeline-node-num">{item.step}</span>
                </div>
                <div className="stem-timeline-content">
                  <div className="stem-timeline-content-icon">{item.icon}</div>
                  <div className="stem-timeline-content-text">
                    <h4 className="h5 fw-bold text-dark mb-2">{item.title}</h4>
                    <p className="text-muted mb-0">{item.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="stem-deliverables">
          <h3 className="h3 fw-bold text-dark mb-2 text-center">Deliverables</h3>
          <div className="row g-4 mb-4">
            <div className="col-12">
              <div className="stem-deliverable-hover-card stem-deliverable-hover-card--tool">
                <img src="/images/Mip-Stem-tech.png" alt="Tool / Framework" className="stem-deliverable-hover-img" />
                <div className="stem-deliverable-hover-overlay">
                  <h5 className="stem-flashcard-title mb-2">Tools / Frameworks</h5>
                  <p className="mb-0">
                    Our STEM tech stack and structured processes project scoping, weekly cadence, and evaluation rubrics that partners can adopt to run internship and leadership programs at scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="stem-deliverable-hover-card stem-deliverable-hover-card--dashboard">
                <img src="/images/Mip-Stem-ED.png" alt="Evaluation Dashboard" className="stem-deliverable-hover-img" />
                <div className="stem-deliverable-hover-overlay">
                  <h5 className="stem-flashcard-title mb-2">Evaluation Dashboard</h5>
                  <p className="mb-0">
                    A central hub connecting HR and talent, operational efficiency, resources and learning, professional development, and visibility with real-time data for partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
