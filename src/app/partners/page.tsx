import type { Metadata } from "next";
import Link from "next/link";
import { PartnersSection } from "@/components/sections/PartnersSection";

export const metadata: Metadata = {
  title: "Partner Universities | MIP — Projxon",
  description: "Industry-integrated learning for your campus. Benefits, candidate journey, and success stories from Claremont, IIT, Northeastern, and NYU.",
};

const BENEFITS = [
  "Boost student engagement and retention",
  "Strengthen university-industry partnerships",
  "Access to exclusive industry insights and mentors",
  "Enhance student employability with real-world projects",
  "Showcase your institution as a leader in applied learning",
];

const SUCCESS_STORIES = [
  {
    university: "Claremont Graduate University",
    text: "Claremont Graduate University's Master's students, particularly from Information Systems & Technology, have excelled in roles like AI Analyst and Data Scientist. They bring advanced analytical skills to the program and leave with a portfolio of tangible, real-world project experience.",
  },
  {
    university: "Illinois Institute of Technology",
    text: "Students from the Illinois Institute of Technology, often from graduate programs like the MS in Project Management, thrive in our fast-paced environment. They take on key responsibilities as Project Managers and Business Analysts, gaining invaluable experience translating complex technical goals into successful project deliveries.",
  },
  {
    university: "Northeastern University",
    text: "Northeastern University's graduate students, especially from top-tier programs like Project Management and Computer Science, consistently make a major impact as interns. By taking on roles like Junior Project Manager, PMO, and Software Engineer, they gain hands-on experience while contributing directly to our core products.",
  },
  {
    university: "New York University",
    text: "New York University's top-tier talent, from graduate programs like Business Management and Data Sciences, consistently shine in highly technical roles. As AI Analysts and Junior Consultants, they apply cutting-edge academic knowledge to solve real-world challenges, gaining critical project experience in the process.",
  },
];

const UNIVERSITY_PARTNER_FORM_URL = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfFujqNvY_1kXTUCCqfNHLLQgu-W17oXtx8Yv3-hYcoXr6X_g/viewform";

export default function PartnersPage() {
  return (
    <>
      <PartnersSection />
      {/* Section 1: Industry-Integrated Learning That Works */}
      <section className="section-padding bg-light">
        <div className="container">
          <nav className="mb-4">
            <Link href="/" className="text-muted text-decoration-none small">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="h2 fw-bold section-heading mb-2">Industry-Integrated Learning That Works</h1>
          <h2 className="h4 fw-bold subheading-royal mb-4">Bring applied experience to your students</h2>

          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <h3 className="h5 fw-bold text-dark mb-3">Benefits</h3>
              <ul className="list-unstyled mb-0">
                {BENEFITS.map((item, i) => (
                  <li key={i} className="d-flex align-items-start gap-2 mb-2">
                    <span className="rounded-circle flex-shrink-0 mt-1" style={{ width: 8, height: 8, backgroundColor: "var(--mip-dark-blue)" }} />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <h3 className="h5 fw-bold text-dark mb-3">Candidate Journey</h3>
              <p className="text-muted mb-0">
                Students participate in hands-on projects, collaborate with industry professionals, and receive mentorship throughout their internship. The journey includes onboarding, project work, regular feedback, and a final showcase of achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Partner Universities — Success Stories, FAQ, CTA */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="h2 fw-bold section-heading mb-1">Partner Universities</h2>
          <p className="text-muted text-center mb-5">Success stories from our university partners</p>

          <div className="row g-4 mb-5">
            {SUCCESS_STORIES.map((story) => (
              <div key={story.university} className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h3 className="h6 fw-bold text-dark mb-2">{story.university}</h3>
                    <p className="text-muted small mb-0">{story.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <h3 className="h5 fw-bold text-dark mb-2 text-center">FAQ for Universities</h3>
            <p className="text-muted text-center mb-0">
              Have questions? Check out our FAQ or <Link href="/#contact" className="text-decoration-none">contact us</Link> for more information about partnering with Momentum.
            </p>
          </div>

          <div className="text-center p-4 rounded bg-white border shadow-sm">
            <h3 className="h5 fw-bold text-dark mb-2">Ready to bring momentum to your campus?</h3>
            <a
              href={UNIVERSITY_PARTNER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark px-4"
            >
              Become a University Partner
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
