"use client";

const CARDS = [
  {
    value: "200+",
    title: "Interns Trained",
    description: "Participants engaged through MIP and partner programs",
    icon: (
      <svg className="impact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "25",
    title: "Partner Campuses",
    description: "Universities and institutions we work with",
    icon: (
      <svg className="impact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    value: "14",
    title: "Industries",
    description: "Sectors where our interns and alumni contribute",
    icon: (
      <svg className="impact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function ImpactCard({
  value,
  title,
  description,
  icon,
}: {
  value: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="impact-snapshot-card">
      <div className="impact-snapshot-card-inner">
        <div className="impact-snapshot-card-icon-wrap">{icon}</div>
        <p className="impact-snapshot-card-value">{value}</p>
        <h5 className="impact-snapshot-card-title">{title}</h5>
        <p className="impact-snapshot-card-desc">{description}</p>
      </div>
    </div>
  );
}

export function ImpactSnapshotSection() {
  const duplicated = [...CARDS, ...CARDS];

  return (
    <section className="section-padding impact-snapshot-section">
      <div className="container">
        <h2 className="h1 fw-bold text-center section-heading mb-2">Impact at a Glance</h2>
        <p className="text-center text-muted mb-5">What MIP delivers for participants and partners</p>

        <div className="impact-snapshot-carousel-wrap">
          <div className="impact-snapshot-carousel-mask">
            <div className="impact-snapshot-carousel-track">
              {duplicated.map((card, i) => (
                <div key={i} className="impact-snapshot-carousel-slide">
                  <ImpactCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
