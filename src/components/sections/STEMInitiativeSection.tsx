"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

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
];

const PARTNERSHIP_EMAIL = "busineees@projxon.com";
const PARTNER_TYPES = ["University", "Employers"] as const;

export function STEMInitiativeSection() {
  const [activeCard, setActiveCard] = useState<"problem" | "solution">("problem");
  const [partnershipModalOpen, setPartnershipModalOpen] = useState(false);
  const [partnershipForm, setPartnershipForm] = useState({
    name: "",
    email: "",
    type: "" as "" | (typeof PARTNER_TYPES)[number],
    message: "",
  });

  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Partnership Request – MIP");
    const body = encodeURIComponent(
      `Name: ${partnershipForm.name}\nEmail: ${partnershipForm.email}\nType: ${partnershipForm.type || "Not selected"}\n\nMessage:\n${partnershipForm.message || "(none)"}`
    );
    window.location.href = `mailto:${PARTNERSHIP_EMAIL}?subject=${subject}&body=${body}`;
    setPartnershipModalOpen(false);
    setPartnershipForm({ name: "", email: "", type: "", message: "" });
  };

  return (
    <section id="stem-initiative" className="section-padding bg-white">
      <div className="container">
        <h2 className="h1 fw-bold section-heading mb-1 ">STEM Initiative</h2>

        {/* Problem vs. Solution — overlapping cards, click to highlight */}
        <div className="stem-challenge-cards-wrap mb-5">
          <button
            type="button"
            onClick={() => setActiveCard("problem")}
            className={`stem-challenge-card stem-challenge-card--problem ${activeCard === "problem" ? "stem-challenge-card--active" : ""}`}
          >
            <div className="stem-challenge-card-image">
              <img src="/images/stem-challenge.jpg" alt="The Challenge" className="stem-challenge-card-img" />
            </div>
            <div className="stem-challenge-card-header" style={{ backgroundColor: "var(--mip-dark-blue)" }}>
              <h3 className="h5 fw-bold mb-0">{CHALLENGE.problem.title}</h3>
            </div>
            <div className="stem-challenge-card-body">
              <p className="text-muted mb-0">{CHALLENGE.problem.body}</p>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setActiveCard("solution")}
            className={`stem-challenge-card stem-challenge-card--solution ${activeCard === "solution" ? "stem-challenge-card--active" : ""}`}
          >
            <div className="stem-challenge-card-image">
              <img src="/images/stem-solution.jpg" alt="The MIP Solution" className="stem-challenge-card-img" />
            </div>
            <div className="stem-challenge-card-header" style={{ backgroundColor: "var(--mip-royal-blue)" }}>
              <h3 className="h5 fw-bold mb-0">{CHALLENGE.solution.title}</h3>
            </div>
            <div className="stem-challenge-card-body">
              <p className="text-muted mb-0">{CHALLENGE.solution.body}</p>
            </div>
          </button>
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
          <h3 className="h3 fw-bold text-dark mb-2">Deliverables</h3>
          {/* Two cards in one section */}
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="stem-flashcard stem-flashcard--flip stem-flashcard--tool">
                <div className="stem-flashcard-inner">
                  <div className="stem-flashcard-front">
                    <div className="stem-flashcard-front-header" style={{ backgroundColor: "var(--mip-dark-blue)" }}>
                      <h5 className="stem-flashcard-title">Tools / Frameworks</h5>
                    </div>
                    <div className="stem-flashcard-front-body">
                      <p className="stem-flashcard-desc">Our STEM tech stack and structured processes—project scoping, weekly cadence, and evaluation rubrics—that partners can adopt to run internship and leadership programs at scale</p>
                      <span className="stem-flashcard-hint">Hover to view image</span>
                    </div>
                  </div>
                  <div className="stem-flashcard-back">
                    <img src="/images/Mip-Stem-tech.png" alt="Tool / Framework" className="stem-flashcard-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stem-flashcard stem-flashcard--flip stem-flashcard--dashboard">
                <div className="stem-flashcard-inner">
                  <div className="stem-flashcard-front">
                    <div className="stem-flashcard-front-header" style={{ backgroundColor: "var(--mip-royal-blue)" }}>
                      <h5 className="stem-flashcard-title">Evaluation Dashboard</h5>
                    </div>
                    <div className="stem-flashcard-front-body">
                      <p className="stem-flashcard-desc">A central hub connecting HR & talent, operational efficiency, resources & learning, professional development, and visibility—with real-time data and reporting for funders and partners</p>
                      <span className="stem-flashcard-hint">Hover to view image</span>
                    </div>
                  </div>
                  <div className="stem-flashcard-back">
                    <img src="/images/Mip-Stem-ED.png" alt="Evaluation Dashboard" className="stem-flashcard-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="stem-flashcard stem-flashcard--no-image stem-flashcard--partnership"
                onMouseEnter={(e) => e.currentTarget.classList.add("stem-partnership-card--hover")}
                onMouseLeave={(e) => e.currentTarget.classList.remove("stem-partnership-card--hover")}
              >
                <div className="card-body stem-partnership-card-content">
                  <h5 className="card-title stem-flashcard-title">Partnership Model</h5>
                  <p className="card-text small mb-0">Documented MOU-based partnerships with universities and employers, plus invitation-to-collaborate materials for workforce entities</p>
                </div>
                <div className="stem-partnership-card-hover">
                  <p className="stem-partnership-card-hover-desc">Submit a partnership request and we’ll get back to you</p>
                  <button type="button" className="stem-partnership-card-btn" onClick={() => setPartnershipModalOpen(true)}>
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership request modal — portaled to body so it opens in the visible viewport */}
      {partnershipModalOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="stem-partnership-modal-overlay" onClick={() => setPartnershipModalOpen(false)}>
            <div className="stem-partnership-modal" onClick={(e) => e.stopPropagation()}>
              <div className="stem-partnership-modal-header">
                <h4 className="stem-partnership-modal-title">Partnership Request</h4>
                <button type="button" className="stem-partnership-modal-close" onClick={() => setPartnershipModalOpen(false)} aria-label="Close">
                  ×
                </button>
              </div>
              <form onSubmit={handlePartnershipSubmit} className="stem-partnership-modal-form">
                <div className="mb-3">
                  <label htmlFor="partnership-name" className="form-label">Name</label>
                  <input id="partnership-name" type="text" className="form-control" required value={partnershipForm.name} onChange={(e) => setPartnershipForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="partnership-email" className="form-label">Email</label>
                  <input id="partnership-email" type="email" className="form-control" required value={partnershipForm.email} onChange={(e) => setPartnershipForm((f) => ({ ...f, email: e.target.value }))} placeholder="your@email.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="partnership-type" className="form-label">I am a</label>
                  <select id="partnership-type" className="form-select" required value={partnershipForm.type} onChange={(e) => setPartnershipForm((f) => ({ ...f, type: e.target.value as typeof partnershipForm.type }))}>
                    <option value="">Select...</option>
                    {PARTNER_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="partnership-message" className="form-label">Message</label>
                  <textarea id="partnership-message" className="form-control" rows={3} value={partnershipForm.message} onChange={(e) => setPartnershipForm((f) => ({ ...f, message: e.target.value }))} placeholder="Brief description of your interest..." />
                </div>
                <div className="d-flex gap-2 justify-content-end">
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setPartnershipModalOpen(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
