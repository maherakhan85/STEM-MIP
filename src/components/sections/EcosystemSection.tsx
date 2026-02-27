import { Fragment } from "react";

export function EcosystemSection() {
  const nodes = [
    {
      title: "Emerging Talent",
      tag: "The Fuel",
      description:
        "We serve as the final bridge for graduating seniors and recent alumni. We take your academic foundation and pressure-test it through high-stakes project ownership, giving you the technical stamina to lead.",
    },
    {
      title: "Strategic Support",
      tag: "The Foundation",
      description:
        "We collaborate with regional agencies to fuel the STEM Initiative. By aligning with economic stakeholders, we ensure our talent pipeline supports the growth of the broader STEM economy.",
    },
    {
      title: "Industry Partners",
      tag: "The Destination",
      description:
        "We provide a vetted pipeline of professionals to our partners. By hosting MIP interns, you gain access to innovative thinkers who are ready to tackle real-world deliverables from day one.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-9">
            <h2 className="h2 fw-bold section-heading mb-4">Where MIP Operates</h2>
            <p className="text-muted lead mb-0">
              MIP, powered by Projxon, serves as the central operational hub where theory meets execution. We&apos;ve built a space where emerging talent, economic strategists, and industry leaders actually work in sync. We know the transition from graduation to a career can feel like a gap; our mission is to close it. By translating academic potential into industrial performance, MIP ensures that every project delivered and every leader developed meets the uncompromising standards of the modern global economy.
            </p>
          </div>
        </div>

        {/* Ecosystem map: three cards connected side by side */}
        <div className="row align-items-stretch g-0">
          {nodes.map((node, i) => (
            <Fragment key={node.title}>
              <div
                className="col-12 col-md"
                style={{ flex: "1 1 0", minWidth: 0 }}
              >
                <div
                  className="h-100 d-flex flex-column rounded-3 overflow-hidden border-0 shadow-sm text-white mx-2 mx-md-3 my-2 my-md-0 py-3 py-md-0"
                  style={{
                    backgroundColor: "var(--mip-dark-blue)",
                    minHeight: 260,
                  }}
                >
                  <div className="card-body p-4 d-flex flex-column">
                    <h3 className="h5 fw-bold mb-1 text-white">
                      {node.title}
                    </h3>
                    <p
                      className="text-uppercase small fw-bold mb-3 opacity-90"
                      style={{ letterSpacing: "0.08em", color: "rgba(255,255,255,0.9)" }}
                    >
                      {node.tag}
                    </p>
                    <p
                      className="mb-0 flex-grow-1 small lh-lg"
                      style={{ color: "rgba(255,255,255,0.88)" }}
                    >
                      {node.description}
                    </p>
                  </div>
                </div>
              </div>
              {i < nodes.length - 1 && (
                <div
                  className="col-auto d-none d-md-flex align-items-center justify-content-center px-0"
                  style={{ width: 40 }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--mip-dark-blue)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
