export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <h2 className="h2 fw-bold text-dark mb-1">About Projxon</h2>
        <p className="text-muted mb-5">STEM Workforce Infrastructure Partner</p>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-3">Mission & Vision</h3>
          <p className="text-muted">
            Projxon acts as a <strong className="text-dark">STEM Workforce Infrastructure Partner</strong>—connecting higher education, employers, and workforce systems so that MIP participants move from internship to career with clarity and support.
          </p>
          <ul className="list-unstyled mt-3">
            <li className="d-flex align-items-start gap-2 mb-2">
              <span className="rounded-circle bg-primary flex-shrink-0 mt-1" style={{ width: 8, height: 8 }} />
              <span className="text-muted"><strong className="text-dark">Mission:</strong> To strengthen the STEM workforce pipeline through structured, data-informed talent development and partnership with universities and employers.</span>
            </li>
            <li className="d-flex align-items-start gap-2">
              <span className="rounded-circle bg-primary flex-shrink-0 mt-1" style={{ width: 8, height: 8 }} />
              <span className="text-muted"><strong className="text-dark">Vision:</strong> Every MIP participant has a visible pathway to meaningful work, with Projxon and MIP as trusted connectors between education and employment.</span>
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-3">Founder Commitment</h3>
          <p className="text-muted">
            Phelan&apos;s vision is building a pipeline that doesn&apos;t just place interns—it develops future-ready leaders and problem-solvers. The commitment is to operate with transparency, data-driven improvement, and deep collaboration with universities and employers so that MIP remains a repeatable, scalable model for STEM talent development.
          </p>
        </div>

        <div>
          <h3 className="h4 fw-bold text-dark mb-2">Ecosystem Model</h3>
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
