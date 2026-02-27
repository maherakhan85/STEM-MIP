export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <h2 className="h2 fw-bold section-heading mb-1">Contact</h2>
        <p className="text-muted mb-5">Get in touch for the OSIT Grant Initiative and MIP collaboration</p>

        <div className="card border-dark shadow-sm">
          <div className="card-body p-4 p-md-5">
            <h3 className="h4 fw-bold text-dark mb-3">OSIT Grant Initiative — MIP / STEM Contact</h3>
            <p className="text-muted mb-4">
              For questions related to the <strong className="text-dark">OSIT Grant Initiative</strong>, the <strong className="text-dark">Momentum Internship Program (MIP)</strong>, or STEM workforce pipeline collaboration with universities and employers, please use the contact below.
            </p>
            <div className="row g-3">
              <div>
                <p className="small fw-semibold text-dark mb-0">Organization</p>
                <p className="text-muted mb-0">Projxon | Momentum Internship Program (MIP)</p>
              </div>
              <div>
                <p className="small fw-semibold text-dark mb-0">Purpose</p>
                <p className="text-muted mb-0">STEM workforce pipeline · Internship partnerships · Grant inquiries · Ecosystem collaboration</p>
              </div>
              <div>
                <p className="small fw-semibold text-dark mb-0">Website</p>
                <p className="mb-0">
                  <a href="https://momentuminternshipprogram.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-underline">
                    momentuminternshipprogram.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
