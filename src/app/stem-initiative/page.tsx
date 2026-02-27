import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "STEM Initiative | Projxon — Nevada Workforce Pipeline",
  description: "Regional need, problem statement, solution, and deliverables for the Nevada STEM workforce initiative.",
};

export default function STEMInitiativePage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">STEM Initiative</h1>
          <p className="mt-2 text-slate-600">Nevada-focused workforce pipeline and talent development</p>

          {/* Regional Need */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Regional Need</h2>
            <p className="mt-4 text-slate-600">
              Nevada faces a <strong>workforce gap</strong> in STEM fields: demand for skilled workers in technology, engineering, and applied sciences continues to grow, while many students—especially in rural and underserved areas—lack clear, structured pathways from K-12 and higher education into local employers. Districts such as Washoe County School District, ECSD (Elko County School District), and others are critical partners in reaching students early; the need is for a coordinated system that connects these schools with higher education and industry so that talent stays and thrives in Nevada.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">Problem Statement</h2>
            <p className="mt-4 text-slate-600">
              <strong>Fragmentation in STEM pathway navigation</strong> is a core challenge: students, families, and counselors often lack a single place to understand options; internships and work-based learning are unevenly distributed; and employers struggle to find and retain STEM talent. Without a structured pipeline, promising students may leave the state or choose non-STEM paths not because of ability, but because of visibility and access.
            </p>
          </div>

          {/* Our Solution */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">Our Solution</h2>
            <p className="mt-4 text-slate-600">
              We deliver a <strong>Structured Internship-to-Workforce Pipeline Model</strong> that:
            </p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                Connects K-12 and higher education with employers through defined roles and expectations
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                Provides structured internships (e.g., Momentum Internship Program) with clear learning outcomes and mentorship
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                Tracks outcomes and uses data to improve placement and curriculum alignment
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                Scales through partnerships with schools, universities, and employers across Nevada
              </li>
            </ul>
          </div>

          {/* Deliverables */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">Deliverables</h2>
            <p className="mt-2 text-slate-600">Concrete outputs that support the pipeline and grant accountability.</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Tool / Framework</h3>
                <p className="mt-2 text-sm text-slate-600">Structured internship and leadership development framework that partners can adopt and adapt (e.g., project scoping, weekly cadence, evaluation rubrics).</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Evaluation Dashboard</h3>
                <p className="mt-2 text-sm text-slate-600">KPIs and data collection tools to monitor participation, career transition rates, leadership roles, and certifications—with reporting suitable for funders and partners.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Partnership Model</h3>
                <p className="mt-2 text-sm text-slate-600">Documented MOU-based partnerships with universities and employers, plus invitation-to-collaborate materials for K-12 and workforce entities.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/programs" className="font-semibold text-primary-600 hover:text-primary-700">
              See Programs →
            </Link>
            <Link href="/research-evaluation" className="font-semibold text-primary-600 hover:text-primary-700">
              Research & Evaluation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
