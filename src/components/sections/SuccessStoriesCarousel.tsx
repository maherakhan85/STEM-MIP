"use client";

export type Testimonial = {
  name: string;
  role: string;
  review: string;
  image: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Jordan Chen",
    role: "Former MIP Intern · Software Engineer at Tech Partner",
    review: "MIP gave me real project ownership from day one. I went from intern to full-time in six months. The mentorship and evaluation framework made the difference.",
    image: "https://ui-avatars.com/api/?name=Jordan+Chen&size=160&background=024CAA&color=fff",
  },
  {
    name: "Maya Rodriguez",
    role: "Former MIP Intern · Project Manager, Healthcare Sector",
    review: "The program connected me with industry partners who treated me as a professional. I'm now a PM and come back as a peer coach—MIP is a real pipeline.",
    image: "https://ui-avatars.com/api/?name=Maya+Rodriguez&size=160&background=024CAA&color=fff",
  },
  {
    name: "Alex Kim",
    role: "Former MIP Intern · Data Analyst, Higher Ed Partner",
    review: "From K-12 to university to MIP, the ecosystem alignment is real. I earned certifications during my internship and transitioned into a STEM role I love.",
    image: "https://ui-avatars.com/api/?name=Alex+Kim&size=160&background=024CAA&color=fff",
  },
  {
    name: "Sam Williams",
    role: "Former MIP Intern · Now Peer Coach & Consultant",
    review: "I stayed in the ecosystem as a coach and consultant. MIP doesn't just launch careers—it builds leaders who give back. ADVISE and COACH pathways are alive.",
    image: "https://ui-avatars.com/api/?name=Sam+Williams&size=160&background=024CAA&color=fff",
  },
];

function SuccessStoryCard({ name, role, review, image }: Testimonial) {
  return (
    <div className="success-stories-card success-stories-card--slide">
      <div className="success-stories-card-photo-wrap">
        <img src={image} alt="" className="success-stories-card-photo" width={160} height={160} />
      </div>
      <blockquote className="success-stories-card-quote">{review}</blockquote>
      <footer className="success-stories-card-footer">
        <cite className="success-stories-card-name">{name}</cite>
        <p className="success-stories-card-role">{role}</p>
      </footer>
    </div>
  );
}

type Props = {
  testimonials?: Testimonial[];
};

export function SuccessStoriesCarousel({ testimonials = DEFAULT_TESTIMONIALS }: Props) {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="success-stories-section">
      <div className="success-stories-carousel-wrap">
        <div className="success-stories-carousel-mask">
          <div className="success-stories-carousel-track" aria-hidden="true">
            {duplicated.map((t, i) => (
              <div key={i} className="success-stories-carousel-slide">
                <SuccessStoryCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
