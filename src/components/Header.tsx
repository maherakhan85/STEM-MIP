"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainNavItems = [
  { href: "/about", label: "About" },
  { href: "/impact", label: "Impact" },
  { href: "/partners", label: "Partners" },
  { href: "/events", label: "Events" },
  { href: "/#contact", label: "Contact", isHash: true },
];

const homeDropdownItems = [
  { href: "/#home", label: "Overview", isHash: true },
  { href: "/#stem-initiative", label: "STEM Initiative", isHash: true },
  { href: "/#programs", label: "Programs", isHash: true },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
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
    setHomeDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-mip border-bottom shadow-sm sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand fw-semibold">
          MIP
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
            {/* Home with dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <button
                type="button"
                className="nav-link dropdown-toggle border-0 bg-transparent text-white"
                aria-expanded={homeDropdownOpen}
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
              >
                Home
              </button>
              <ul className={`dropdown-menu dropdown-menu-dark ${homeDropdownOpen ? "show" : ""}`}>
                {homeDropdownItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="dropdown-item"
                      onClick={(e) => handleHashClick(e, item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {mainNavItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  href={item.href}
                  onClick={(e) => item.isHash && handleHashClick(e, item.href)}
                  className={`nav-link ${pathname === item.href ? "fw-semibold" : ""}`}
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
                className="btn btn-dark btn-sm"
                onClick={() => setMobileOpen(false)}
              >
                View Open Roles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
