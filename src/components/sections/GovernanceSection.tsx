export function GovernanceSection() {
  return (
    <section id="governance" className="section-padding bg-white">
      <div className="container">
        <h2 className="h2 fw-bold section-heading mb-1">Governance</h2>
        <p className="text-muted mb-5">Leadership, accountability, and compliance for the STEM workforce initiative</p>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-3">Leadership Structure</h3>
          <p className="text-muted mb-4">Roles, accountability, and reporting structure that support program quality and grant compliance.</p>
          <div className="row g-3">
            {[
              { title: "Executive / Founder", desc: "Overall vision, partnership development, and strategic direction. Accountable for grant outcomes and ecosystem alignment." },
              { title: "Program Lead(s)", desc: "Day-to-day program operations: intern placement, mentor coordination, curriculum and cadence. Reports on participation and deliverables." },
              { title: "Evaluation / Data", desc: "Data collection, dashboard maintenance, and report preparation for internal use and funders. Ensures KPIs are tracked and reported on schedule." },
              { title: "Partnership & Outreach", desc: "University and employer relations, MOU management, and invitation-to-collaborate. Supports sustainability and scale." },
            ].map((item) => (
              <div key={item.title} className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-dark">{item.title}</h5>
                    <p className="card-text small text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="h4 fw-bold text-dark mb-3">Reporting & Compliance</h3>
          <p className="text-muted mb-3">Quarterly reporting structure to maintain transparency and meet grant requirements.</p>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start gap-2 mb-2">
              <span className="rounded-circle bg-dark flex-shrink-0 mt-1" style={{ width: 8, height: 8 }} />
              <span className="text-muted"><strong className="text-dark">Quarterly reports:</strong> Participation numbers, outcome metrics (career transition, leadership roles, certifications), partner updates, and narrative progress.</span>
            </li>
            <li className="d-flex align-items-start gap-2 mb-2">
              <span className="rounded-circle bg-dark flex-shrink-0 mt-1" style={{ width: 8, height: 8 }} />
              <span className="text-muted"><strong className="text-dark">Grant-specific deliverables:</strong> Aligned with OSIT or other funder requirements (e.g., evaluation dashboard, case studies, MOUs).</span>
            </li>
            <li className="d-flex align-items-start gap-2">
              <span className="rounded-circle bg-dark flex-shrink-0 mt-1" style={{ width: 8, height: 8 }} />
              <span className="text-muted"><strong className="text-dark">Partner communication:</strong> Regular updates to university and employer partners on outcomes and opportunities.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
