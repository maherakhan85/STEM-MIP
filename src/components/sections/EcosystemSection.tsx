"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const nodes = [
  {
    title: "Emerging Talent",
    tag: "The Fuel",
    description:
      "We serve as the final bridge for graduating seniors and recent alumni. We take your academic foundation and pressure-test it through high-stakes project ownership, giving you the technical stamina to lead",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-block-icon">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Strategic Support",
    tag: "The Foundation",
    description:
      "We collaborate with regional agencies to fuel the STEM Initiative. By aligning with economic stakeholders, we ensure our talent pipeline supports the growth of the broader STEM economy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-block-icon">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Industry Partners",
    tag: "The Destination",
    description:
      "We provide a vetted pipeline of professionals to our partners. By hosting MIP interns, you gain access to innovative thinkers who are ready to tackle real-world deliverables from day one",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ecosystem-block-icon">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
];

export function EcosystemSection() {
  const [activeIndex, setActiveIndex] = useState(1); // center card by default

  return (
    <section className="section-padding bg-white" id="where-mip-operates">
      <div className="container">
        <h2 className="h1 fw-bold section-heading mb-4 text-center">Where MIP Operates</h2>
        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-6">
            <img
              src="/images/mip-operates-bg.jpg"
              alt="Where MIP operates"
              className="w-100 rounded-3 shadow-sm object-fit-cover"
              style={{ maxHeight: 360 }}
            />
          </div>
          <div className="col-lg-6">
            <p className="text-dark lead mb-0 text-center" style={{ color: '#333' }}>
            MIP, powered by Projxon, is the operational hub where theory meets execution. We bridge the gap between graduation and career by transforming academic potential into industry-standard performance. Here, talent and industry work in sync to deliver excellence for the global economy.            </p>
          </div>
        </div>

        {/* Ecosystem carousel: center card highlighted, side cards behind but visible */}
        <AnimateOnScroll animation="fadeUp" delay={0}>
          <div className="ecosystem-carousel">
            {nodes.map((node, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={node.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`ecosystem-carousel-card ${isActive ? "ecosystem-carousel-card--active" : ""}`}
                  style={{
                    backgroundColor: "var(--mip-dark-blue)",
                    minHeight: 280,
                  }}
                  aria-pressed={isActive}
                  aria-label={`Focus on ${node.title}`}
                >
                  <div className="card-body p-4 d-flex flex-column h-100 text-start">
                    <div
                      className="ecosystem-block-icon-wrap rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: 56,
                        height: 56,
                        backgroundColor: "var(--mip-accent)",
                        color: "#fff",
                      }}
                    >
                      {node.icon}
                    </div>
                    <h3 className="h5 fw-bold mb-1 text-white">
                      {node.title}
                    </h3>
                    <p
                      className="text-uppercase small fw-bold mb-3 opacity-90"
                      style={{ letterSpacing: "0.08em", color: "rgba(255,255,255,0.9)" }}
                    >
                      {node.tag}
                    </p>
                    <p
                      className="mb-0 flex-grow-1 small lh-lg"
                      style={{ color: "rgba(255,255,255,0.88)" }}
                    >
                      {node.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
