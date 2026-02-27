export function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container">
        <h2 className="h2 fw-bold section-heading mb-1">Programs</h2>
        <p className="text-muted mb-5">Structured pathways from internship to workforce</p>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-1">Momentum Internship Program (MIP)</h3>
          <p className="text-dark fw-medium mb-3">Workforce Development Engine</p>
          <p className="text-muted">
            MIP is a <strong className="text-dark">Workforce Development Engine</strong>—not just an internship program. It combines real-world project work with mentorship, skill-building, and intentional exposure to career pathways. Participants gain experience that aligns with employer needs while building portfolios and professional networks. Custom-designed internship programs that create future-ready leaders.
          </p>
          <ul className="list-unstyled mt-3">
            {[
              "Custom-designed internship programs that create future-ready leaders",
              "Project-based internships with defined deliverables and learning outcomes",
              "Mentorship and career readiness support",
              "Connection to employer partners for potential placement",
            ].map((text, i) => (
              <li key={i} className="d-flex align-items-start gap-2 mb-2">
                <span className="rounded-circle bg-dark flex-shrink-0 mt-1" style={{ width: 8, height: 8 }} />
                <span className="text-muted">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="h4 fw-bold text-dark mb-3">Leadership Track</h3>
          <p className="text-muted">
            The Leadership Track highlights <strong className="text-dark">real-world project flow</strong>: participants don&apos;t just complete tasks—they own projects, coordinate with peers, and present outcomes to stakeholders. Participants can advance into roles where they ADVISE, COACH, PARTNER, and CONSULT. Leadership development is embedded through:
          </p>
          <ul className="list-unstyled mt-3">
            {[
              "Project ownership and accountability",
              "Peer coaching and mentoring opportunities",
              "Stakeholder presentations and feedback loops",
              "Progression pathways (e.g., from intern to lead to mentor)",
            ].map((text, i) => (
              <li key={i} className="d-flex align-items-start gap-2 mb-2">
                <span className="rounded-circle bg-dark flex-shrink-0 mt-1" style={{ width: 8, height: 8 }} />
                <span className="text-muted">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
