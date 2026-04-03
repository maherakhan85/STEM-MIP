import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Projxon — OSIT Grant Initiative & STEM Pipeline",
  description: "Get in touch for the OSIT Grant Initiative and MIP collaboration.",
};

export default function ContactPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
       
        <h1 className="h2 fw-bold section-heading mb-1">Contact</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
