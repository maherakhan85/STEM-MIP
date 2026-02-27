import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact | MIP — Projxon",
  description: "Career transition rates, leadership roles, certifications, and participant success stories.",
};

const ALUMNI_PATHWAYS = [
  { label: "ADVISE", desc: "Share expertise and guidance with current participants and partners" },
  { label: "COACH", desc: "Direct mentorship and skill-building support for newer interns" },
  { label: "PARTNER", desc: "Collaborate on projects and initiatives as peers or contractors" },
  { label: "CONSULT", desc: "Offer subject-matter input to Projxon and ecosystem partners" },
];

export default function ImpactPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <nav className="mb-4">
          <Link href="/" className="text-muted text-decoration-none small">
            ← Back to Home
          </Link>
        </nav>
        <h1 className="h2 fw-bold section-heading mb-1">Impact</h1>
        <p className="text-muted text-center mb-5">Outcomes and evidence of our contribution to the STEM pipeline</p>

        {/* Metrics Dashboard */}
        <div className="mb-5">
          <h2 className="h4 fw-bold subheading-royal mb-2">Metrics Dashboard</h2>
          <p className="text-muted mb-4">Key performance indicators we track and report for the grant and partners.</p>
          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 bg-light">
                <div className="card-body text-center p-4">
                  <p className="small fw-semibold text-uppercase text-dark mb-2">% Career Transition</p>
                  <p className="h4 fw-bold text-dark mb-2">Tracked</p>
                  <p className="small text-muted mb-0">Participants moving to STEM employment or continued education</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 bg-light">
                <div className="card-body text-center p-4">
                  <p className="small fw-semibold text-uppercase text-dark mb-2">Leadership Roles</p>
                  <p className="h4 fw-bold text-dark mb-2">Tracked</p>
                  <p className="small text-muted mb-0">Project leads, peer coaches, and mentor roles</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 bg-light">
                <div className="card-body text-center p-4">
                  <p className="small fw-semibold text-uppercase text-dark mb-2">Certifications Earned</p>
                  <p className="h4 fw-bold text-dark mb-2">Tracked</p>
                  <p className="small text-muted mb-0">Industry and academic credentials obtained during/after program</p>
                </div>
              </div>
            </div>
          </div>
          <p className="small text-muted mb-0">
            Specific numbers are populated through our evaluation framework and reported in quarterly and grant deliverables. See <Link href="/#research-evaluation" className="text-decoration-none">Research &amp; Evaluation</Link> for methodology.
          </p>
        </div>

        {/* Alumni Pathways */}
        <div className="mb-5">
          <h2 className="h4 fw-bold subheading-royal mb-2">Alumni Pathways</h2>
          <p className="text-muted mb-4">How participants engage after the program—aligned with Discovery Deck framing.</p>
          <div className="row g-3">
            {ALUMNI_PATHWAYS.map((item) => (
              <div key={item.label} className="col-md-6 col-lg-3">
                <div className="card border shadow-sm h-100">
                  <div className="card-body">
                    <p className="fw-bold text-dark mb-1">{item.label}</p>
                    <p className="small text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-5">
          <h2 className="h4 fw-bold subheading-royal mb-2">Case Studies</h2>
          <p className="text-muted mb-4">Real participant success stories (anonymized or with permission for grant materials).</p>
          <div className="row g-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm bg-light">
                <div className="card-body p-4">
                  <h3 className="h6 fw-semibold text-dark mb-2">From intern to full-time STEM role</h3>
                  <p className="text-muted small mb-0">
                    A participant completed a structured internship through MIP, gained certifications, and transitioned into a full-time role with an employer partner—demonstrating the internship-to-workforce pipeline in action.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-0 shadow-sm bg-light">
                <div className="card-body p-4">
                  <h3 className="h6 fw-semibold text-dark mb-2">Leadership track to peer coach</h3>
                  <p className="text-muted small mb-0">
                    After excelling in project delivery, a participant stepped into a peer coach role, supporting newer interns and presenting outcomes to stakeholders—showcasing the ADVISE/COACH pathway.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-0 shadow-sm bg-light">
                <div className="card-body p-4">
                  <h3 className="h6 fw-semibold text-dark mb-2">K-12 to higher ed bridge</h3>
                  <p className="text-muted small mb-0">
                    A student from a Nevada K-12 partner (e.g., Washoe County or ECSD) used MIP as a bridge to a university internship and continued on a clear STEM pathway—illustrating ecosystem alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="small text-muted mt-3 mb-0">
            Additional case studies can be developed with participant and partner consent for grant reporting and fundraising.
          </p>
        </div>

        <div className="d-flex flex-wrap gap-3">
          <Link href="/#programs" className="fw-semibold text-dark text-decoration-none">
            Programs →
          </Link>
          <Link href="/#research-evaluation" className="fw-semibold text-dark text-decoration-none">
            Research &amp; Evaluation →
          </Link>
        </div>
      </div>
    </section>
  );
}
