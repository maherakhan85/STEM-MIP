export function ResearchEvaluationSection() {
  return (
    <section id="research-evaluation" className="section-padding bg-white">
      <div className="container">
        <h2 className="h2 fw-bold section-heading mb-1">Research & Evaluation</h2>
        <p className="text-muted mb-5">Data-driven improvement and grant accountability</p>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-3">Evaluation Framework</h3>
          <p className="text-muted mb-4">KPIs and data collection tools that support both program improvement and funder reporting.</p>
          <div className="row g-3">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">Participation & Demographics</h5>
                  <p className="card-text small text-muted mb-0">Number of MIP participants, education level, partner campus, and diversity metrics.</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">Outcome KPIs</h5>
                  <p className="card-text small text-muted mb-0">Career transition rate, leadership roles taken, certifications earned, projects delivered, and employer feedback.</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">Data Collection Tools</h5>
                  <p className="card-text small text-muted mb-0">Surveys (entry/exit, satisfaction), learning logs, mentor feedback forms, and partner check-ins. Data is aggregated in an evaluation dashboard for reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="h4 fw-bold text-dark mb-3">Continuous Improvement Loop</h3>
          <p className="text-muted mb-4">Formative and summative evaluation drive ongoing refinement.</p>
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="row align-items-center g-4 flex-md-nowrap overflow-auto">
                <div className="col-md text-center">
                  <div className="p-3 rounded bg-white border">
                    <p className="fw-semibold text-dark mb-2">Formative Evaluation</p>
                    <p className="small text-muted mb-0">Ongoing feedback during the program: check-ins, learning logs, mentor input. Used to adjust support and curriculum in real time.</p>
                  </div>
                </div>
                <div className="col-auto text-dark">→</div>
                <div className="col-md text-center">
                  <div className="p-3 rounded bg-white border">
                    <p className="fw-semibold text-dark mb-2">Data aggregation</p>
                    <p className="small text-muted mb-0">Dashboard and reports that summarize participation, outcomes, and satisfaction for internal and external use.</p>
                  </div>
                </div>
                <div className="col-auto text-dark">→</div>
                <div className="col-md text-center">
                  <div className="p-3 rounded bg-white border">
                    <p className="fw-semibold text-dark mb-2">Summative Evaluation</p>
                    <p className="small text-muted mb-0">End-of-cycle and annual review: impact metrics, case studies, and lessons learned. Informs next cycle and grant reports.</p>
                  </div>
                </div>
              </div>
              <p className="text-center small text-muted mt-4 mb-0">The loop closes when findings feed back into program design, partnership conversations, and reporting to funders (e.g., OSIT grant).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
