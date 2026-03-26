"use client";

import { useState, useEffect } from "react";

const HERO_SLIDE_INTERVAL_MS = 5000;

const HERO_BG_IMAGES = [
  "/images/stem-hero-IT.jpg",
  "/images/stem-hero-HR.jpg",
  "/images/stem-hero-mkt.jpg",
  "/images/stem-hero-business.jpg",
];

export function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_BG_IMAGES.length);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="section-padding hero-enter hero-section">
      <div className="hero-bg-slider" aria-hidden="true">
        {HERO_BG_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`hero-bg-slide ${i === bgIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className="container hero-content-wrap">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11 col-xl-10 text-center hero-text-wrap">
            <p
              className="text-uppercase small fw-medium mb-2 hero-tagline-3d hero-stagger-1"
              style={{ color: "var(--mip-royal-blue)" }}
            >
              Momentum Internship Program
            </p>
            <div className="hero-stagger-2 mb-4">
              <h1 className="display-4 fw-bold hero-title-3d mb-0">
                Accelerate Talent, Elevate Impact
              </h1>
            </div>
            <p className="lead mb-2 hero-stagger-3 hero-intro-line">
              Where academic potential meets industry impact through real project ownership.
            </p>
            <p className="mb-0 hero-stagger-3 hero-intro-subline">
              MIP develops future-ready STEM leaders with structured mentorship, measurable outcomes, and client-focused delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
