"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const mainNavItems = [
  { href: "/about", label: "About" },
  { href: "/impact", label: "Impact" },
  { href: "/partners", label: "Partners" },
  { href: "/events", label: "Culture" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.slice(1);
      if (pathname === "/" && document.querySelector(hash)) {
        e.preventDefault();
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-mip border-bottom shadow-sm">
      <div className="container">
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center p-0"
          aria-label="Home"
        >
          <Image
            src="/images/projxon-mip-logo.png"
            alt=""
            width={200}
            height={120}
            className="navbar-mip-logo"
            priority
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${mobileOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            {mainNavItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  href={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                  className={`nav-link ${pathname === item.href ? "nav-link--active fw-semibold" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-2">
              <a
                href="https://app.dover.com/jobs/projxon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-careers btn-sm d-inline-flex align-items-center gap-2"
                onClick={() => setMobileOpen(false)}
                aria-label="View open roles at Projxon"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
                <span>Careers</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
