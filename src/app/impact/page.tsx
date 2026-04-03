import type { Metadata } from "next";
import Link from "next/link";
import { SuccessStoriesCarousel } from "@/components/sections/SuccessStoriesCarousel";
import { ImpactTeamMapSection } from "@/components/sections/ImpactTeamMapSection";

export const metadata: Metadata = {
  title: "Impact | MIP — Projxon",
  description: "Outcomes MIP delivers: career transitions, leadership roles, and certifications. Tracked, reported, and reflected in participant success stories.",
};

const ALUMNI_PATHWAYS = [
  {
    label: "ADVISE",
    desc: "Share expertise and guidance with current participants and partners",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "COACH",
    desc: "Direct mentorship and skill-building support for newer interns",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "PARTNER",
    desc: "Collaborate on projects and initiatives as peers or contractors",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    label: "CONSULT",
    desc: "Offer subject-matter input to Projxon and ecosystem partners",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function ImpactPage() {
  return (
    <>
      <header className="impact-headline">
        <div className="impact-headline-overlay" />
        <div className="impact-headline-content">
          <h1 className="impact-headline-title">Impact</h1>
          <p className="impact-headline-subtitle">Outcomes we deliver—and the pathways that open after the program</p>
        </div>
      </header>
      <section className="section-padding bg-white">
      <div className="container">

        {/* Metrics Dashboard */}
        <div className="impact-dashboard mb-5">
          <h2 className="h3 fw-bold subheading-royal mb-2">Metrics Dashboard</h2>
          <div className="impact-metrics-grid">
            <div className="impact-metric-card impact-metric-card--flip">
              <div className="impact-metric-card-inner">
                <div className="impact-metric-card-front">
                  <div className="impact-metric-icon-wrap">
                    <svg className="impact-metric-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="impact-metric-title">Career Transition</h3>
                  <p className="impact-metric-desc">Participants moving to STEM employment or continued education</p>
                  <span className="impact-metric-hint">Hover to see the number</span>
                </div>
                <div className="impact-metric-card-back">
                  <p className="impact-metric-value">85%</p>
                </div>
              </div>
            </div>
            <div className="impact-metric-card impact-metric-card--flip">
              <div className="impact-metric-card-inner">
                <div className="impact-metric-card-front">
                  <div className="impact-metric-icon-wrap">
                    <svg className="impact-metric-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="impact-metric-title">Leadership Roles</h3>
                  <p className="impact-metric-desc">Project leads, peer coaches, and mentor roles</p>
                  <span className="impact-metric-hint">Hover to see the number</span>
                </div>
                <div className="impact-metric-card-back">
                  <p className="impact-metric-value">60+</p>
                </div>
              </div>
            </div>
            <div className="impact-metric-card impact-metric-card--flip">
              <div className="impact-metric-card-inner">
                <div className="impact-metric-card-front">
                  <div className="impact-metric-icon-wrap">
                    <svg className="impact-metric-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="impact-metric-title">Certifications Earned</h3>
                  <p className="impact-metric-desc">Industry and academic credentials obtained during/after program</p>
                  <span className="impact-metric-hint">Hover to see the number</span>
                </div>
                <div className="impact-metric-card-back">
                  <p className="impact-metric-value">180+</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Alumni Pathways */}
        <section className="alumni-pathways mb-5">
          <h2 className="h3 fw-bold subheading-royal mb-2">Alumni Pathways</h2>
          <p className="alumni-pathways-intro text-center text-muted mb-4">The program is the start, not the end. MIP alumni stay connected through ADVISE, COACH, PARTNER, and CONSULT—paths to keep growing and giving back, and sustained engagement across the ecosystem.</p>
          <div className="alumni-pathways-grid">
            {ALUMNI_PATHWAYS.map((item) => (
              <article key={item.label} className="alumni-pathway-card">
                <div className="alumni-pathway-card-icon-wrap">{item.icon}</div>
                <h3 className="alumni-pathway-card-label">{item.label}</h3>
                <p className="alumni-pathway-card-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <ImpactTeamMapSection />

        {/* Success Stories — ex-intern reviews carousel */}
        <section className="mb-5">
          <h2 className="h3 fw-bold subheading-royal mb-2">Success Stories</h2>
          <p className="text-muted text-center mb-4">Hear from former participants in their own words—experience and outcomes that speak to the program’s reach</p>
          <SuccessStoriesCarousel />
        </section>
      </div>
    </section>
    </>
  );
}
