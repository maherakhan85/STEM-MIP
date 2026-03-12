export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <style>{`.about-story-img-wrap { min-height: 410px; }
.about-story-img-inner { min-height: 380px; }
.about-story-img { height: 290px; display: block; }
@media (min-width: 768px) {
  .about-story-img-wrap { min-height: 480px; }
  .about-story-img-inner { min-height: 480px; }
  .about-story-img { height: 480px; }
}
.about-podcast-btn { background-color: #062e5c !important; border-color: #062e5c !important; color: #fff !important; }
.about-podcast-btn:hover { color: #ffc107 !important; background-color: #062e5c !important; border-color: #062e5c !important; }
.phelan-card-hover { position: relative; }
.phelan-card-hover .phelan-card-img-wrap { transition: filter 0.35s ease, transform 0.35s ease; }
.phelan-card-hover:hover .phelan-card-img-wrap { filter: brightness(0.45); transform: scale(1.03); }
.phelan-card-overlay { position: absolute; inset: 0; background: rgba(6, 46, 92, 0.88); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0.5rem 0.75rem; opacity: 0; transition: opacity 0.35s ease; overflow: hidden; font-size: 0.95rem; color: #fff !important; text-align: left; }
.phelan-card-overlay p { color: #fff !important; margin-bottom: 0.35rem !important; }
.phelan-card-overlay p:last-of-type { margin-bottom: 0 !important; }
.phelan-card-hover:hover .phelan-card-overlay { opacity: 1; }
.phelan-card-overlay a { text-decoration: none; display: inline-flex; }
.phelan-card-overlay a:hover { opacity: 0.9; }
.phelan-card-overlay .social-logo { width: 28px; height: 28px; color: #fff; }
.phelan-card-overlay a:hover .social-logo { color: #ffc107; }
.javier-card-hover { position: relative; }
.javier-card-hover .javier-card-img-wrap { transition: filter 0.35s ease, transform 0.35s ease; }
.javier-card-hover:hover .javier-card-img-wrap { filter: brightness(0.45); transform: scale(1.03); }
.javier-card-overlay { position: absolute; inset: 0; background: rgba(6, 46, 92, 0.88); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0.5rem 0.75rem; opacity: 0; transition: opacity 0.35s ease; overflow: hidden; font-size: 0.9rem; color: #fff !important; text-align: left; }
.javier-card-overlay p, .javier-card-overlay li { color: #fff !important; margin-bottom: 0.35rem !important; }
.javier-card-overlay p:last-of-type { margin-bottom: 0 !important; }
.javier-card-hover:hover .javier-card-overlay { opacity: 1; }
.javier-card-overlay a { text-decoration: none; display: inline-flex; }
.javier-card-overlay a:hover { opacity: 0.9; }
.javier-card-overlay .social-logo { width: 28px; height: 28px; color: #fff; }
.javier-card-overlay a:hover .social-logo { color: #ffc107; }`}</style>
      <div className="container">
        
        <div className="mb-5">
          <h1 className="h1 fw-bold text-dark mb-4 text-center">Our Story</h1>
          <div className="row align-items-stretch g-4">
            <div className="col-12 col-md-4 order-2 order-md-1 text-center d-flex">
              <div className="card border-0 shadow-sm overflow-hidden w-100" style={{ backgroundColor: 'rgba(6, 46, 92, 0.08)', borderLeft: '4px solid #062e5c' }}>
                <div className="position-relative phelan-card-hover flex-grow-1 d-flex flex-column about-story-img-wrap">
                  <div className="phelan-card-img-wrap flex-grow-1 about-story-img-inner">
                    <img
                      src="/images/MIP-Phelan.png"
                      alt="Mark W. Phelan"
                      className="img-fluid w-100 about-story-img"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                  <div className="phelan-card-overlay" style={{ color: '#fff' }}>
                    <p className="mb-2" style={{ color: '#fff' }}>
                      I build systems that help leaders execute — not just plan. Through Projxon and The Phelan Focus, I help founders, executives, and teams scale with clarity, structure, and automation — so growth doesn&apos;t depend on heroics, burnout, or guesswork.
                    </p>
                    <p className="mb-2" style={{ color: '#fff' }}>
                      Technical Program Manager by trade, founder through passion, former U.S. Army Officer. 18+ years leading high-stakes teams, 12+ years delivering complex programs across cloud infrastructure, AI-enabled platforms, and enterprise systems. LSS® PMP® PMI-ACP® PSM®.
                    </p>
                    
                    <p className="mb-0 mt-auto pt-2 d-flex gap-3 justify-content-center flex-wrap">
                      <a href="https://www.linkedin.com/in/phelanmarkw/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg className="social-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                      <a href="https://www.instagram.com/The.Phelan.Focus" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg className="social-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                      <a href="https://www.youtube.com/@The_Phelan_Focus" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <svg className="social-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card-body py-3" style={{ backgroundColor: '#062e5c', color: '#fff' }}>
                  <p className="fw-bold mb-0" style={{ color: '#fff' }}>Mark W. Phelan</p>
                  <p className="small mb-0 opacity-90" style={{ color: '#fff' }}>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 order-1 order-md-2 text-center d-flex align-items-center">
              <div>
                <p className="text-muted mb-2">
                  Projxon and the <strong className="text-dark">MIP (Momentum Internship Program)</strong> grew out of a simple belief: the gap between classroom learning and real-world STEM careers shouldn&apos;t hold talented students back. What started as better internship experiences is now a full ecosystem—connecting universities, employers, and participants so every intern has a clear path from internship to career.
                </p>
                <p className="text-muted mb-2">
                  We believe in <strong className="text-dark">hands-on, project-based learning</strong>. MIP is built on collaboration, mentorship, and real consulting projects so every participant gains practical skills, industry insights, and confidence. Phelan&apos;s vision is a pipeline that develops <strong className="text-dark">future-ready leaders</strong>; Javier brings on-the-ground perspective and partnership focus. Our approach is <strong className="text-dark">flexible, remote-friendly, and tailored</strong> to both interns and organizations.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 order-3 text-center d-flex">
              <div className="card border-0 shadow-sm overflow-hidden w-100" style={{ backgroundColor: 'rgba(6, 46, 92, 0.08)', borderLeft: '4px solid #062e5c' }}>
                <div className="position-relative javier-card-hover flex-grow-1 d-flex flex-column about-story-img-wrap">
                  <div className="javier-card-img-wrap flex-grow-1 about-story-img-inner">
                    <img
                      src="/images/Mip-Javier.png"
                      alt="Javier Avila"
                      className="img-fluid w-100 about-story-img"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                  <div className="javier-card-overlay" style={{ color: '#fff' }}>
                    <p className="mb-2" style={{ color: '#fff' }}>
                      I bring a proven track record as an effective communicator with a strategic vision, strong leadership and decision-making capabilities. My ability to motivate team members has consistently contributed to the successful accomplishment of missions.
                    </p>
                    
                    <p className="mb-2" style={{ color: '#fff' }}>
                      14+ years progressive PM experience as team lead and individual contributor. Cradle-to-grave program manager delivering enterprise solutions for large, complex clients. Confident briefer to senior management and executives. Achieved business objectives in ambiguous, fast-paced environments
                    </p>
                    
                   
                    <p className="mb-0 mt-auto pt-2 d-flex gap-3 justify-content-center flex-wrap">
                      <a href="https://www.linkedin.com/in/javier-avila-ms/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg className="social-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card-body py-3" style={{ backgroundColor: '#062e5c', color: '#fff' }}>
                  <p className="fw-bold mb-0" style={{ color: '#fff' }}>Javier Avila</p>
                  <p className="small mb-0 opacity-90" style={{ color: '#fff' }}>Program Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="h2 fw-bold text-dark mb-4 text-center">Mission & Vision</h3>
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex justify-content-center align-items-center">
              <div
                className="rounded overflow-hidden d-inline-block w-100"
                style={{
                  boxShadow: '0 20px 40px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)',
                }}
              >
                <img
                  src="/images/Mip-MissionVission.jpg"
                  alt="Mission and Vision"
                  className="w-100 rounded d-block"
                  style={{ verticalAlign: 'bottom' }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <p className="text-muted mb-3">
                We sit in the middle—universities, employers, and participants—as a <strong className="text-dark">STEM Workforce Infrastructure Partner</strong>. We believe in hands-on, project-based learning and an approach that is flexible, remote-friendly, and tailored to both interns and organizations.
              </p>
              <ul className="text-muted list-unstyled mb-0">
                <li className="d-flex align-items-start gap-2 mb-2">
                  <span className="text-dark fw-bold flex-shrink-0">Mission:</span>
                  <span>Strengthen the STEM workforce pipeline through structured, data-informed talent development and partnership with universities and employers so internships and talent development turn into careers.</span>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <span className="text-dark fw-bold flex-shrink-0">Vision:</span>
                  <span>Every MIP participant has a clear path to meaningful work, with Projxon and MIP as trusted connectors between education and employment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="h2 fw-bold text-dark mb-3 text-center">Founder's Commitment</h3>
          <p className="text-muted mb-2">
            I started this because I saw the same problem from both sides—schools sending talented people out without a playbook, and employers wondering where to find them.
          
          
            The commitment isn&apos;t just to run a program. It&apos;s to run one we can stand behind: we share how we&apos;re doing, we use data to improve, and we work closely with universities and employers so MIP stays repeatable and useful at scale. No black boxes.
            </p>
          <p className="text-muted mb-2">
            The goal is a pipeline that actually develops future-ready leaders and problem-solvers, not just fills slots.
         
            That only works if we stay transparent, keep improving, and treat our campus and employer partners as real partners. That&apos;s the standard we hold ourselves to.
          </p>
          <p className="text-muted mt-4 mb-0 text-end">
            <span className="d-inline-block pt-2 mt-2" style={{ borderTop: '2px solid #333' }}>
              — Mark W. Phelan<br />
              <span className="small">CEO & Co-Founder</span>
            </span>
          </p>
        </div>

        <div className="mb-5">
          <h3 className="h2 fw-bold text-dark mb-3 text-center">Hear from Our CEO</h3>
          <p className="text-muted text-center mb-4">
            Mark W. Phelan joined Dan Goldberg on <strong className="text-dark">Digging For Gold™</strong> to discuss Projxon, internships, and helping businesses grow.
          </p>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm mb-4">
                <iframe
                  src="https://www.youtube.com/embed/CegkTZdlCag"
                  title="Digging For Gold Ep 30 - Mark W. Phelan, CEO of Projxon"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="text-muted small mb-1">
                <strong className="text-dark">Digging For Gold™ Ep 30:</strong> Mark W. Phelan, CEO of Projxon, discusses helping businesses grow.
              </p>
              <p className="text-muted small mb-2">
                &quot;It was a pleasure to speak with Mark W. Phelan about his Las Vegas based business consulting company, Projxon. His consulting work with small to large companies throughout the United States while fostering internships, working with veterans (of which he&apos;s one) and non-profits, was fascinating. Learning how he helps companies build high-performing teams, increase their output and productivity, as well as their income was an enjoyable and insightful experience.&quot;
              </p>
              <p className="text-muted small mb-2">
                — <strong className="text-dark">Dan Goldberg, Ed.D.</strong> — Associate Prof. of Instruction, Academic Director: Business Mgmt BBA Program, Temple University, Fox School of Business; Podcaster at <a href="https://www.youtube.com/@Dan.Goldberg" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Dan.Goldberg</a> (YouTube) and <strong className="text-dark">Digging For Gold™</strong> on Spotify.
              </p>
              <p className="mb-0 d-flex flex-wrap gap-2">
                <a href="https://www.youtube.com/watch?v=CegkTZdlCag" target="_blank" rel="noopener noreferrer" className="btn btn-sm about-podcast-btn">Watch on YouTube</a>
                <a href="https://www.linkedin.com/posts/dangoldbergli_digging-for-goldtm-ep-30-mark-w-phelan-activity-7429925127133470720-3br7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeDTWsB-6zl3rt0isixk1Efexi-OKukczM" target="_blank" rel="noopener noreferrer" className="btn btn-sm about-podcast-btn">LinkedIn post</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
