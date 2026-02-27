export function ImpactSnapshotSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="h2 fw-bold text-center section-heading mb-2">Impact at a Glance</h2>
        <p className="text-center text-muted mb-5">What MIP delivers for participants and partners.</p>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-white" style={{ backgroundColor: "var(--mip-dark-blue)" }}>
              <div className="card-body text-center">
                <p className="display-6 fw-bold mb-1">200+</p>
                <h5 className="card-title">Interns Trained</h5>
                <p className="card-text small mb-0 opacity-90">Participants engaged through MIP and partner programs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-white" style={{ backgroundColor: "var(--mip-dark-blue)" }}>
              <div className="card-body text-center">
                <p className="display-6 fw-bold mb-1">25</p>
                <h5 className="card-title">Partner Campuses</h5>
                <p className="card-text small mb-0 opacity-90">Universities and institutions we work with.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-white" style={{ backgroundColor: "var(--mip-dark-blue)" }}>
              <div className="card-body text-center">
                <p className="display-6 fw-bold mb-1">14</p>
                <h5 className="card-title">Industries</h5>
                <p className="card-text small mb-0 opacity-90">Sectors where our interns and alumni contribute.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
