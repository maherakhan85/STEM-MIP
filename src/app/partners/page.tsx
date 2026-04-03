import type { Metadata } from "next";
import Link from "next/link";
import { PartnersSection } from "@/components/sections/PartnersSection";

export const metadata: Metadata = {
  title: "Partners | MIP — Projxon",
  description:
    "University and employer partnerships for the Momentum Internship Program: applied learning, MOUs, outcomes, and workforce collaboration",
};

const BENEFITS = [
  "Higher engagement and retention through real deliverables",
  "Deeper university–industry alignment and shared reporting",
  "Access to mentors and practitioners across STEM fields",
  "Stronger graduate outcomes via portfolio-ready project work",
  "Visibility as a leader in applied, career-connected learning",
];

const SUCCESS_STORIES = [
  {
    university: "Claremont Graduate University",
    text: "Graduate students from Information Systems & Technology have excelled as AI Analysts and Data Scientists—pairing strong analytics with a portfolio of tangible, client-aligned work",
  },
  {
    university: "Illinois Institute of Technology",
    text: "Project Management and related programs feed roles such as Project Manager and Business Analyst, where students translate complex technical goals into clear execution and delivery",
  },
  {
    university: "Northeastern University",
    text: "Participants from Project Management, Computer Science, and related tracks step into Junior PM, PMO, and engineering support roles—contributing to product work while building professional momentum",
  },
  {
    university: "New York University",
    text: "Talent from Business, Data Science, and allied programs thrive in analytical and consulting-style roles, applying rigorous methods to real client challenges",
  },
];

const UNIVERSITY_PARTNER_FORM_URL =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfFujqNvY_1kXTUCCqfNHLLQgu-W17oXtx8Yv3-hYcoXr6X_g/viewform";

export default function PartnersPage() {
  return (
    <>
      <header className="impact-headline">
        <div className="impact-headline-overlay" />
        <div className="impact-headline-content">
          <h1 className="impact-headline-title">Partners</h1>
          <p className="impact-headline-subtitle">
            Universities, employers, and workforce partners working together—so STEM talent moves from coursework to career with structure, mentorship, and outcomes you can report
          </p>
        </div>
      </header>

      <section id="universities" className="section-padding partners-page-section">
        <div className="container">
          

          <h2 className="h2 fw-bold section-heading mb-1">Partner universities</h2>
          <p className="text-muted text-center mb-3">
            Industry-integrated learning, formal MOUs, and shared outcomes for your students and career services
         
            We design each relationship around your calendar: cohort timing, academic credit where applicable, and touchpoints with advisors—so internships strengthen your programs instead of competing with them
          </p>

          <div className="mb-5">
            
           
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              <div className="partners-stat-card">
                <div className="card-body text-center py-4 px-3">
                  <p className="partners-stat-value">25+</p>
                  <p className="partners-stat-label">partner campuses</p>
                </div>
              </div>
             
            </div>
            
          </div>

          <h3 className="h3 fw-bold subheading-royal mb-2">How we work with your institution</h3>
          <p className="text-muted text-center mb-3">
            Early conversations focus on fit: degree paths that match our project pipeline, capacity for mentorship, and how we will communicate with advisors and internship coordinators. From there we align on placement windows, evaluation criteria, and any grant-specific data you need to collect
          </p>
          <p className="text-muted text-center mb-5">
            Throughout the cohort, we maintain a steady rhythm—standups, feedback, and escalation paths—so issues surface early and successes are visible to both campus and industry stakeholders
          </p>

          <h3 className="h3 fw-bold subheading-royal mb-3">Bring applied experience to your students</h3>

          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div className="partners-surface-card h-100">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-3" style={{ color: "var(--mip-dark-blue)" }}>
                    What your campus gains
                  </h3>
                  <ul className="list-unstyled mb-0">
                    {BENEFITS.map((item, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 mb-2">
                        <span
                          className="rounded-circle flex-shrink-0 mt-1"
                          style={{ width: 8, height: 8, backgroundColor: "var(--mip-accent)" }}
                          aria-hidden
                        />
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="partners-surface-card h-100">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-3" style={{ color: "var(--mip-dark-blue)" }}>
                    Candidate journey
                  </h3>
                  <p className="text-muted mb-3">
                    Participants join structured onboarding, contribute to real projects with industry touchpoints, receive ongoing feedback, and close with a showcase of outcomes—so skills and evidence of impact are visible to employers and advisors.
                  </p>
                  <p className="text-muted mb-0">
                    Along the way, interns practice communication, ownership, and prioritization in settings that mirror professional delivery—not only task completion, but how work is framed for stakeholders and documented for portfolios.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="h3 fw-bold subheading-royal mb-2">Success stories</h3>
          
          <p className="text-muted text-center small mb-4">
            Stories are drawn from ongoing and recent cohorts; specific titles and employers vary by term and project mix.
          </p>

          <div className="row g-4 mb-5">
            {SUCCESS_STORIES.map((story) => (
              <div key={story.university} className="col-md-6">
                <div className="partners-surface-card h-100">
                  <div className="card-body p-4">
                    <h4 className="h6 fw-bold mb-2" style={{ color: "var(--mip-dark-blue)" }}>
                      {story.university}
                    </h4>
                    <p className="text-muted small mb-0">{story.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="partners-surface-card p-4 p-lg-5">
            <h3 className="h5 fw-bold text-center mb-2" style={{ color: "var(--mip-dark-blue)" }}>
              Bring MIP to your campus
            </h3>
            
            <p className="text-muted text-center mb-3">
              Ready to register interest as a university partner? Submit the interest form; our team reviews each submission and follows up with next steps.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-stretch align-items-sm-center flex-wrap">
             
              <a
                href={UNIVERSITY_PARTNER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark px-4"
              >
                University partner interest
              </a>
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
