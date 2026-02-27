export function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container">
        <h2 className="h2 fw-bold section-heading mb-1">Impact</h2>
        <p className="text-muted mb-5">Outcomes and evidence of MIP&apos;s contribution to the STEM pipeline</p>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-3">Metrics Dashboard</h3>
          <p className="text-muted mb-4">Key performance indicators we track and report for the grant and partners.</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  <p className="small fw-semibold text-uppercase text-dark mb-1">% Career Transition</p>
                  <p className="h4 fw-bold text-dark mb-2">Tracked</p>
                  <p className="small text-muted mb-0">MIP participants moving to STEM employment or continued education</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  <p className="small fw-semibold text-uppercase text-dark mb-1">Leadership Roles</p>
                  <p className="h4 fw-bold text-dark mb-2">Tracked</p>
                  <p className="small text-muted mb-0">Project leads, peer coaches, and mentor roles</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  <p className="small fw-semibold text-uppercase text-dark mb-1">Certifications Earned</p>
                  <p className="h4 fw-bold text-dark mb-2">Tracked</p>
                  <p className="small text-muted mb-0">Industry and academic credentials obtained during/after program</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-2">Alumni Pathways</h3>
          <p className="text-muted mb-4">How MIP participants engage after the program.</p>
          <div className="row g-3">
            {[
              { label: "ADVISE", desc: "Share expertise and guidance with current participants and partners" },
              { label: "COACH", desc: "Direct mentorship and skill-building support for newer interns" },
              { label: "PARTNER", desc: "Collaborate on projects and initiatives as peers or contractors" },
              { label: "CONSULT", desc: "Offer subject-matter input to Projxon and ecosystem partners" },
            ].map((item) => (
              <div key={item.label} className="col-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title text-dark mb-1">{item.label}</h6>
                    <p className="card-text small text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="h4 fw-bold text-dark mb-2">Case Studies</h3>
          <p className="text-muted mb-4">Real MIP participant success stories (anonymized or with permission for grant materials).</p>
          <div className="row g-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">From intern to full-time STEM role</h5>
                  <p className="card-text text-muted mb-0">A MIP participant completed a structured internship, gained certifications, and transitioned into a full-time role with an employer partner—demonstrating the internship-to-workforce pipeline in action.</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">Leadership track to peer coach</h5>
                  <p className="card-text text-muted mb-0">After excelling in project delivery, a participant stepped into a peer coach role, supporting newer interns and presenting outcomes to stakeholders—showcasing the ADVISE/COACH pathway.</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">University to employer pipeline</h5>
                  <p className="card-text text-muted mb-0">A participant from a partner campus used MIP as a bridge from university to a structured internship and continued on a clear STEM pathway into employment—illustrating how MIP connects education and employers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
