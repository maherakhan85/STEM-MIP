"use client";

import { useState, useEffect } from "react";

const HERO_INTRO_TEXT =
  "Where academic potential meets industry impact. Real projects, real leadership—built for the next generation of STEM leaders";

const TYPEWRITER_DELAY_MS = 55;
const TYPEWRITER_START_DELAY_MS = 1100;
const HERO_SLIDE_INTERVAL_MS = 5000;

const HERO_BG_IMAGES = [
  "/images/stem-hero-IT.jpg",
  "/images/stem-hero-HR.jpg",
  "/images/stem-hero-mkt.jpg",
  "/images/stem-hero-business.jpg",
];

export function HeroSection() {
  const [visibleLength, setVisibleLength] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startTimer = setTimeout(() => {
      const total = HERO_INTRO_TEXT.length;
      intervalId = setInterval(() => {
        setVisibleLength((prev) => {
          if (prev >= total) {
            if (intervalId) clearInterval(intervalId);
            return total;
          }
          return prev + 1;
        });
      }, TYPEWRITER_DELAY_MS);
    }, TYPEWRITER_START_DELAY_MS);
    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_BG_IMAGES.length);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const visibleText = HERO_INTRO_TEXT.slice(0, visibleLength);

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
            <p className="lead mb-0 hero-stagger-3 hero-intro-line">
              {visibleText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
