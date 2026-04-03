import Link from "next/link";

export function PartnersSection() {
  return (
    <section id="partner-clients" className="section-padding partners-page-section">
      <div className="container">
        <h2 className="h2 fw-bold section-heading mb-1">Partner clients</h2>
       
        <p className="text-muted text-center mb-3">
          Industry partners gain a structured path to vetted interns: defined scope, professional cadence, and feedback loops that reduce onboarding friction. Workforce agencies and regional stakeholders align with us where economic development and skills data need to connect to real placements—not only enrollment, but outcomes.
        </p>

        <div className="mb-5">
          
          
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <div className="partners-stat-card">
              <div className="card-body text-center py-4 px-3">
                <p className="partners-stat-value">14+</p>
                <p className="partners-stat-label">industry sectors represented</p>
              </div>
            </div>
            
          </div>
          <p className="text-muted text-center small mb-0">
            Partners across tech, engineering, and applied sciences host interns, provide mentors, and often hire from the pipeline—supporting a repeatable internship model with measurable impact and stories that resonate in recruiting and community reporting.
          </p>
        </div>

        <div className="partners-surface-card p-4 p-lg-5">
          <h3 className="h5 fw-bold text-center mb-2" style={{ color: "var(--mip-dark-blue)" }}>
            Invitation to collaborate
          </h3>
          <p className="text-muted text-center mb-3">
            We welcome <strong className="text-dark">universities</strong>, <strong className="text-dark">employers</strong>, and{" "}
            <strong className="text-dark">workforce agencies</strong> to shape the ecosystem—whether you host interns, refer
            participants, improve pipeline data, or explore MOUs and grant-aligned partnerships.
          </p>
          <p className="text-muted text-center mb-3">
            If you are exploring a first conversation, share context on your goals—scale, timeline, and constraints—and we will suggest a practical path. Longer-term partners often deepen engagement through recurring cohorts, co-designed milestones, and shared success metrics.
          </p>
         
          <div className="d-flex justify-content-center">
            <Link href="/contact" className="btn btn-dark px-4">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
