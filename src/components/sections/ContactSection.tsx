import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <h2 className="h1 fw-bold section-heading mb-1 text-center">Contact</h2>
        <p className="text-muted mb-5 text-center">Get in touch for the Grant Initiative and MIP collaboration</p>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
