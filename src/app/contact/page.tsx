import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Projxon — OSIT Grant Initiative & STEM Pipeline",
  description: "Dedicated STEM Initiative and OSIT Grant contact for partnerships and collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Contact</h1>
          <p className="mt-2 text-slate-600">Get in touch for the OSIT Grant Initiative and STEM pipeline collaboration</p>

          {/* OSIT Grant Initiative Contact */}
          <div className="mt-12 rounded-xl border-2 border-primary-200 bg-primary-50/50 p-8">
            <h2 className="text-xl font-bold text-slate-900">OSIT Grant Initiative — STEM Initiative Contact</h2>
            <p className="mt-4 text-slate-600">
              For questions related to the <strong>OSIT Grant Initiative</strong>, the <strong>Momentum Internship Program (MIP)</strong>, or general STEM workforce pipeline collaboration (universities, employers, K-12 districts), please use the contact information below.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-700">Organization</p>
                <p className="text-slate-600">Projxon | Momentum Internship Program (MIP)</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Purpose</p>
                <p className="text-slate-600">STEM workforce pipeline · Internship partnerships · Grant inquiries · Ecosystem collaboration</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Email</p>
                <p className="text-slate-600">
                  <a href="mailto:stem@projxon.com" className="text-primary-600 hover:underline">stem@projxon.com</a> (replace with your actual grant/contact email)
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Website</p>
                <p className="text-slate-600">
                  <a href="https://momentuminternshipprogram.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">momentuminternshipprogram.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Ecosystem Partners */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-slate-900">Ecosystem & Reference Links</h2>
            <p className="mt-2 text-slate-600">Nevada K-12 and community context that informs our work.</p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>
                <a href="https://www.washoeschools.net/inclinees" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  Washoe County School District — Incline Elementary
                </a>
              </li>
              <li>
                <a href="https://jackpot.ecsdnv.net/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  ECSD — Jackpot (Elko County School District)
                </a>
              </li>
              <li>
                <a href="https://den.wpcnv.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  WPCNV — DEN
                </a>
              </li>
              <li>
                <a href="https://www.cimarronmemorial.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  Cimarron-Memorial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
