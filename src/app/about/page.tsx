import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | MIP — Projxon",
  description: "Our story, team, mission, and approach. Projxon and the Momentum Internship Program.",
};

export default function AboutPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <nav className="mb-4">
          <Link href="/" className="text-muted text-decoration-none small">
            ← Back to Home
          </Link>
        </nav>
        <h1 className="h2 fw-bold section-heading mb-1">About Projxon</h1>
        <p className="text-muted text-center mb-5">STEM Workforce Infrastructure Partner</p>

        {/* Our Story - from MIP about */}
        <div className="mb-5">
          <h2 className="h4 fw-bold subheading-royal mb-3">Our Story</h2>
          <p className="text-muted">
            PROJXON was founded with a vision to bridge the gap between academic learning and real-world experience. Our journey began when a group of passionate professionals recognized the need for a platform that empowers young talent and organizations alike. Since then, we&apos;ve been dedicated to designing innovative internship programs that create future-ready leaders and deliver measurable impact for our partners.
          </p>
        </div>

        {/* Founder & Team - from MIP about */}
        <div className="mb-5">
          <h2 className="h4 fw-bold subheading-royal mb-3">Leadership</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h3 className="h6 fw-bold text-dark mb-1">Mark W. Phelan</h3>
                  <p className="small text-muted mb-0">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h3 className="h6 fw-bold text-dark mb-1">Javier Avila</h3>
                  <p className="small text-muted mb-0">Program Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - existing */}
        <div className="mb-5">
          <h2 className="h4 fw-bold subheading-royal mb-3">Mission & Vision</h2>
          <p className="text-muted">
            Projxon acts as a <strong className="text-dark">STEM Workforce Infrastructure Partner</strong>—connecting higher education, employers, and workforce systems so that MIP participants move from internship to career with clarity and support.
          </p>
          <ul className="list-unstyled mt-3">
            <li className="d-flex align-items-start gap-2 mb-2">
              <span className="rounded-circle flex-shrink-0 mt-1" style={{ width: 8, height: 8, backgroundColor: "var(--mip-dark-blue)" }} />
              <span className="text-muted"><strong className="text-dark">Mission:</strong> To strengthen the STEM workforce pipeline through structured, data-informed talent development and partnership with universities and employers.</span>
            </li>
            <li className="d-flex align-items-start gap-2">
              <span className="rounded-circle flex-shrink-0 mt-1" style={{ width: 8, height: 8, backgroundColor: "var(--mip-dark-blue)" }} />
              <span className="text-muted"><strong className="text-dark">Vision:</strong> Every MIP participant has a visible pathway to meaningful work, with Projxon and MIP as trusted connectors between education and employment.</span>
            </li>
          </ul>
        </div>

        {/* Our Approach - from MIP about */}
        <div className="mb-5">
          <h2 className="h4 fw-bold subheading-royal mb-3">Our Approach</h2>
          <p className="text-muted">
            We believe in hands-on, project-based learning. Our Momentum Internship Program (MIP) is built on collaboration, mentorship, and real consulting projects. We partner with companies and universities to ensure every participant gains practical skills, industry insights, and the confidence to excel in their careers. Our approach is flexible, remote-friendly, and tailored to the needs of both interns and organizations.
          </p>
        </div>

        {/* Founder Commitment - existing */}
        <div className="mb-5">
          <h2 className="h4 fw-bold subheading-royal mb-3">Founder Commitment</h2>
          <p className="text-muted">
            Phelan&apos;s vision is building a pipeline that doesn&apos;t just place interns—it develops future-ready leaders and problem-solvers. The commitment is to operate with transparency, data-driven improvement, and deep collaboration with universities and employers so that MIP remains a repeatable, scalable model for STEM talent development.
          </p>
        </div>

        {/* Ecosystem Model - existing */}
        <div>
          <h2 className="h4 fw-bold subheading-royal mb-2">Ecosystem Model</h2>
          <p className="text-muted mb-4">How we connect talent to careers.</p>
          <div className="card border shadow-sm">
            <div className="card-body p-4">
              <div className="row align-items-center justify-content-between g-3 flex-nowrap overflow-auto">
                <div className="col-auto text-center">
                  <div className="p-3 rounded bg-light">
                    <p className="fw-semibold text-dark mb-0">Universities</p>
                    <p className="small text-muted mb-0">25 Partner Campuses</p>
                  </div>
                </div>
                <div className="col-auto text-dark">→</div>
                <div className="col-auto text-center">
                  <div className="p-3 rounded bg-dark text-white">
                    <p className="fw-semibold mb-0">Projxon</p>
                    <p className="small mb-0 opacity-90">MIP & Programs</p>
                  </div>
                </div>
                <div className="col-auto text-dark">→</div>
                <div className="col-auto text-center">
                  <div className="p-3 rounded bg-light">
                    <p className="fw-semibold text-dark mb-0">Employers</p>
                    <p className="small text-muted mb-0">14 Industries</p>
                  </div>
                </div>
                <div className="col-auto text-dark">→</div>
                <div className="col-auto text-center">
                  <div className="p-3 rounded bg-dark text-white">
                    <p className="fw-semibold mb-0">Career Placement</p>
                    <p className="small mb-0 opacity-90">Outcomes</p>
                  </div>
                </div>
              </div>
              <p className="text-center small text-muted mt-4 mb-0">
                Universities supply talent → Projxon structures internships & leadership development → Employers host & hire → Career placement closes the loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
