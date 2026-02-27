export function PartnersSection() {
  return (
    <section id="partners" className="section-padding bg-white">
      <div className="container">
        <h2 className="h2 fw-bold section-heading mb-1">Partners</h2>
        <p className="text-muted mb-5">Ecosystem collaboration for the STEM workforce pipeline</p>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-2">Current University Partnerships</h3>
          <p className="text-muted mb-3">Formal relationships supported by MOUs and aligned program design.</p>
          <div className="d-flex flex-wrap gap-3 p-4 bg-light rounded">
            <div className="border rounded p-3 text-center" style={{ minWidth: 140 }}>25 Partner Campuses</div>
            <div className="border rounded p-3 text-center" style={{ minWidth: 140 }}>MOU Partners</div>
          </div>
          <p className="small text-muted mt-3 mb-0">We work with higher education institutions to place MIP interns, align curriculum with workforce needs, and support career services. MOUs define roles, reporting, and data sharing for grant compliance.</p>
        </div>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-2">Employer & Workforce Partners</h3>
          <p className="text-muted mb-3">Economic alignment: employers gain access to trained STEM talent; MIP participants gain real-world experience and pathways to jobs.</p>
          <div className="d-flex flex-wrap gap-3 p-4 bg-light rounded">
            <div className="border rounded p-3 text-center" style={{ minWidth: 140 }}>14 Industries</div>
            <div className="border rounded p-3 text-center" style={{ minWidth: 140 }}>Workforce Partners</div>
          </div>
          <p className="small text-muted mt-3 mb-0">Partners in tech, engineering, and applied sciences host MIP interns, provide mentors, and often hire from the pipeline—demonstrating the value of the structured internship model.</p>
        </div>

        <div>
          <h3 className="h4 fw-bold text-dark mb-3">Invitation to Collaborate</h3>
          <p className="text-muted mb-3">We invite <strong className="text-dark">universities</strong>, <strong className="text-dark">employers</strong>, and <strong className="text-dark">workforce development agencies</strong> to join the ecosystem. Whether you want to host interns, refer participants, share data for pipeline improvement, or explore an MOU, we are open to conversation.</p>
          <div className="card border-dark">
            <div className="card-body">
              <h6 className="card-title text-dark">Get in touch</h6>
              <p className="card-text text-muted mb-0">Contact us for the OSIT Grant Initiative and STEM pipeline collaboration—especially for partnerships and grant inquiries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
