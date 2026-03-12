import type { Metadata } from "next";
import Image from "next/image";
import { MopPhotoCarousel } from "@/components/MopPhotoCarousel";

export const metadata: Metadata = {
  title: "Culture | MIP — Projxon",
  description: "MIP Culture: Canva courses, monthly leader talks, and quarterly company networking events.",
};

const CANVA_TOPICS = [
  { title: "AI", topics: "AI tools and resources for the workplace and creative projects" },
  { title: "Communication", topics: "Clear writing, presentations, and professional communication" },
  { title: "Leadership", topics: "Leading projects, collaboration, and decision-making" },
  { title: "Design & visuals", topics: "Graphics, templates, branding, and visual storytelling" },
  { title: "Presentations & documents", topics: "Decks, one-pagers, reports, and professional layouts" },
  { title: "Marketing & social media", topics: "Social graphics, campaigns, and content creation" },
];

export default function EventsPage() {
  return (
    <>
      <header className="culture-headline">
        <div className="impact-headline-overlay" />
        <div className="impact-headline-content">
          <h1 className="impact-headline-title">MIP Culture</h1>
          <p className="impact-headline-subtitle">
            We learn and grow together through Canvas courses, monthly leader talks, and quarterly events—turning your internship into a career launchpad.
          </p>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">

          {/* Section 1 — Canvas: heading, then picture + data as sub-parts */}
          <div className="culture-linkedin-section mb-5">
            <h2 className="h2 fw-bold subheading-royal mb-4 text-center">Canvas Courses</h2>
            <div className="culture-linkedin-inner">
              <div className="culture-linkedin-visual">
                <div className="culture-linkedin-phone">
                  <Image
                    src="/images/stemip-cultureLinkedin.png"
                    alt="Canvas courses — design, presentations, marketing, and more"
                    width={320}
                    height={580}
                    className="culture-linkedin-img"
                    sizes="(max-width: 767px) 280px, 320px"
                  />
                </div>
              </div>
              <div className="culture-linkedin-content culture-linkedin-content--centered">
                <p className="text-muted mb-4 text-center culture-canva-intro">
                  All MIP interns get access to Canvas and curated courses in AI, communication, leadership, design, presentations, and marketing. Build in-demand skills at your own pace—from visual storytelling and professional layouts to AI tools and leadership fundamentals.
                </p>
                <p className="small text-muted mb-0 text-center">
                  Canvas access and course recommendations are provided when you join. Talk to your mentor or program lead for the current catalog and learning paths.
                </p>
              </div>
            </div>
            <div className="culture-linkedin-categories mt-4">
              <span className="culture-linkedin-cat-label">Topics we cover:</span>
              {CANVA_TOPICS.map((course) => (
                <div key={course.title} className="culture-linkedin-cat-card">
                  <h3 className="culture-linkedin-cat-title">{course.title}</h3>
                  <p className="culture-linkedin-cat-desc">{course.topics}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 — Monthly Leader Talk Sessions */}
          <div className="leader-sessions-section mb-5">
            <div className="leader-sessions-header text-center mb-4">
              <h2 className="h2 fw-bold subheading-royal mb-2">Monthly Leader Talk Sessions</h2>
              <p className="leader-sessions-tagline text-muted mb-0">
                Real leaders. Real stories. Once a month, industry voices step in to share what they wish they&apos;d known—and train you on what matters now.
              </p>
            </div>
            <div className="leader-sessions-grid">
              <div className="leader-session-card">
                <div className="leader-session-card-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </div>
                <h3 className="leader-session-card-title">Guest leaders</h3>
                <p className="leader-session-card-desc">Speakers from tech, operations, marketing, HR, and more—each month a different voice and perspective.</p>
              </div>
              <div className="leader-session-card">
                <div className="leader-session-card-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="leader-session-card-title">Workshops & Q&A</h3>
                <p className="leader-session-card-desc">Hands-on sessions and open Q&A so you can ask what matters to you and practice in the room.</p>
              </div>
              <div className="leader-session-card">
                <div className="leader-session-card-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <h3 className="leader-session-card-title">Skills that stick</h3>
                <p className="leader-session-card-desc">Soft skills, communication, and professional presence—training you can use the next day.</p>
              </div>
              <div className="leader-session-card">
                <div className="leader-session-card-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="leader-session-card-title">Paths & possibilities</h3>
                <p className="leader-session-card-desc">Stories and lessons that open your eyes to different careers and how to get there.</p>
              </div>
            </div>
            <p className="leader-sessions-footer text-center small text-muted mt-4 mb-0">
              Session topics and dates are shared internally each month. Check your calendar and team channels for the next leader session.
            </p>
          </div>

          {/* Section 3 — MOP: Quarterly networking / Momentum Office Party */}
          <div className="mop-section">
            <div className="mop-section-header text-center mb-4">
              <h2 className="h2 fw-bold subheading-royal mb-2">Quarterly Company Networking Events</h2>
              <p className="mop-section-intro text-muted mb-0">
                Four times a year we bring the whole MIP community together—interns, alumni, mentors, and partners—for an evening of real connection. That&apos;s where Momentum Office Party comes in.
              </p>
            </div>
            <div className="mop-banner">
              <div className="mop-banner-visual">
                <Image
                  src="/images/stemmip-mop.png"
                  alt="Momentum Office Party Las Vegas — PROJXON, Corporate, The Phelan Focus"
                  width={480}
                  height={320}
                  className="mop-banner-img"
                  sizes="(max-width: 767px) 100vw, 420px"
                />
              </div>
              <div className="mop-banner-content">
                <p className="mop-banner-label">PROJXON presents</p>
                <h2 className="mop-banner-title">Momentum Office Party</h2>
                <p className="mop-banner-tagline">Elevate your network</p>
                <p className="mop-banner-desc">
                A curated gathering where ambition meets authenticity. No awkward icebreakers—just meaningful conversations that spark real collaboration and growth                </p>
                <a
                  href="https://www.momentumofficeparty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mop-cta-btn"
                >
                  Learn more &amp; RSVP
                  <svg className="mop-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
            <MopPhotoCarousel />
            <div className="mop-cards">
              <div className="mop-card">
                <div className="mop-card-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <h3 className="mop-card-title">Who you&apos;ll meet</h3>
                <p className="mop-card-desc">Industry leaders, founders, executives, and emerging talent—from tech and creative to startup and enterprise. Connect with people invested in your next move.</p>
              </div>
              <div className="mop-card">
                <div className="mop-card-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="4" /></svg>
                </div>
                <h3 className="mop-card-title">What you&apos;ll gain</h3>
                <p className="mop-card-desc">High-value connections, industry insights, and career opportunities. Guided discussions and one-on-one breakthroughs—leave with a network that&apos;s invested in you.</p>
              </div>
              <div className="mop-card">
                <div className="mop-card-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                </div>
                <h3 className="mop-card-title">When &amp; where</h3>
                <p className="mop-card-desc">Quarterly—typically <strong>March</strong>, <strong>June</strong>, <strong>August</strong>, and <strong>October</strong>. Dates and RSVP at the link above.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
