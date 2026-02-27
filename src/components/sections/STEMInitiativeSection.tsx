const CHALLENGE = {
  problem: {
    title: "The Challenge",
    body: "STEM students often graduate into an \"experience gap\"—where they have the degree but lack the high-stakes project history that employers demand. Meanwhile, industry leaders struggle to find talent that is \"day-one ready.\"",
  },
  solution: {
    title: "The MIP Solution",
    body: "We bridge this gap by turning real-world client needs into structured internship projects. We don't just teach; we produce.",
  },
};

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Project Scoping",
    body: "We take a high-impact project from an Industry Partner.",
  },
  {
    step: 2,
    title: "Talent Execution",
    body: "An MIP Intern owns the project, supported by a professional Weekly Cadence.",
  },
  {
    step: 3,
    title: "Data-Driven Delivery",
    body: "Outcomes are tracked via our Evaluation Dashboard, proving the intern is ready for the next level.",
  },
];

export function STEMInitiativeSection() {
  return (
    <section id="stem-initiative" className="section-padding bg-white">
      <div className="container">
        <h2 className="h2 fw-bold section-heading mb-1">STEM Initiative</h2>
        <p className="text-muted mb-5">Workforce pipeline and talent development through MIP</p>

        {/* Problem vs. Solution */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm overflow-hidden">
              <div className="card-header border-0 py-3 text-white" style={{ backgroundColor: "var(--mip-dark-blue)" }}>
                <h3 className="h5 fw-bold mb-0">{CHALLENGE.problem.title}</h3>
              </div>
              <div className="card-body">
                <p className="text-muted mb-0">{CHALLENGE.problem.body}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm overflow-hidden">
              <div className="card-header border-0 py-3 text-white" style={{ backgroundColor: "var(--mip-royal-blue)" }}>
                <h3 className="h5 fw-bold mb-0">{CHALLENGE.solution.title}</h3>
              </div>
              <div className="card-body">
                <p className="text-muted mb-0">{CHALLENGE.solution.body}</p>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works — 3-step process flow */}
        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-4 text-center">How it Works</h3>
          <p className="text-muted text-center mb-4">Internship-to-Workforce Pipeline</p>
          <div className="row g-4 align-items-stretch">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className="col-md-4 position-relative">
                {i < HOW_IT_WORKS.length - 1 && (
                  <div
                    className="d-none d-md-block position-absolute top-50 start-100 translate-middle-x z-0"
                    style={{ width: "50%", height: 2, backgroundColor: "var(--mip-royal-blue)", opacity: 0.4 }}
                    aria-hidden
                  />
                )}
                <div className="card h-100 border-0 shadow-sm position-relative z-1">
                  <div className="card-body text-center d-flex flex-column">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center fw-bold text-white mb-3 mx-auto"
                      style={{ width: 48, height: 48, backgroundColor: "var(--mip-dark-blue)", fontSize: "1.25rem" }}
                    >
                      {item.step}
                    </div>
                    <h4 className="h5 fw-bold text-dark mb-2">{item.title}</h4>
                    <p className="text-muted mb-0 flex-grow-1">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="h4 fw-bold text-dark mb-2">Deliverables</h3>
          <p className="text-muted mb-4">Concrete outputs that support the pipeline and grant accountability.</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">Tool / Framework</h5>
                  <p className="card-text small text-muted mb-0">Structured internship and leadership development framework that partners can adopt (e.g., project scoping, weekly cadence, evaluation rubrics).</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">Evaluation Dashboard</h5>
                  <p className="card-text small text-muted mb-0">KPIs and data collection tools to monitor participation, career transition rates, leadership roles, and certifications—with reporting suitable for funders and partners.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">Partnership Model</h5>
                  <p className="card-text small text-muted mb-0">Documented MOU-based partnerships with universities and employers, plus invitation-to-collaborate materials for workforce entities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
