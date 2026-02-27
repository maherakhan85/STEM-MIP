"use client";

import Link from "next/link";

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer-mip border-top mt-auto">
      <div className="container section-padding">
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <h6 className="fw-semibold">MIP | Momentum Internship Program</h6>
            <p className="small text-muted mb-0">
              Strengthening the STEM workforce pipeline through structured, data-informed talent development. Custom-designed internship programs that create future-ready leaders.
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-1">
                <Link href="/about" className="text-muted text-decoration-none">About</Link>
              </li>
              <li className="mb-1">
                <Link href="/events" className="text-muted text-decoration-none">Events</Link>
              </li>
              <li className="mb-1">
                <a href="/#stem-initiative" onClick={(e) => handleClick(e, "#stem-initiative")} className="text-muted text-decoration-none">STEM Initiative</a>
              </li>
              <li className="mb-1">
                <a href="/#programs" onClick={(e) => handleClick(e, "#programs")} className="text-muted text-decoration-none">Programs</a>
              </li>
              <li className="mb-1">
                <Link href="/impact" className="text-muted text-decoration-none">Impact</Link>
              </li>
              <li className="mb-1">
                <a href="/#contact" onClick={(e) => handleClick(e, "#contact")} className="text-muted text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-semibold">Ecosystem</h6>
            <p className="small text-muted mb-0">Higher Education · Workforce · Employers</p>
          </div>
        </div>
        <div className="pt-3 border-top text-center small text-muted">
          © {new Date().getFullYear()} Projxon. Momentum Internship Program — STEM Workforce Pipeline.
        </div>
      </div>
    </footer>
  );
}
