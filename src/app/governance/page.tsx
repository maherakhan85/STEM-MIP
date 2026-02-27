import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Governance | Projxon — Leadership, Reporting & Compliance",
  description: "Leadership structure, roles, accountability, and quarterly reporting for the STEM initiative.",
};

export default function GovernancePage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Governance</h1>
          <p className="mt-2 text-slate-600">Leadership, accountability, and compliance for the STEM workforce initiative</p>

          {/* Leadership Structure */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Leadership Structure</h2>
            <p className="mt-2 text-slate-600">Roles, accountability, and reporting structure that support program quality and grant compliance.</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-slate-900">Executive / Founder</h3>
                <p className="mt-1 text-sm text-slate-600">Overall vision, partnership development, and strategic direction. Accountable for grant outcomes and ecosystem alignment.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-slate-900">Program Lead(s)</h3>
                <p className="mt-1 text-sm text-slate-600">Day-to-day program operations: intern placement, mentor coordination, curriculum and cadence. Reports on participation and deliverables.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-slate-900">Evaluation / Data</h3>
                <p className="mt-1 text-sm text-slate-600">Data collection, dashboard maintenance, and report preparation for internal use and funders. Ensures KPIs are tracked and reported on schedule.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-slate-900">Partnership & Outreach</h3>
                <p className="mt-1 text-sm text-slate-600">University and employer relations, MOU management, and invitation-to-collaborate. Supports sustainability and scale.</p>
              </div>
            </div>
          </div>

          {/* Reporting & Compliance */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">Reporting & Compliance</h2>
            <p className="mt-2 text-slate-600">Quarterly reporting structure to maintain transparency and meet grant requirements.</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                <span><strong>Quarterly reports:</strong> Participation numbers, outcome metrics (career transition, leadership roles, certifications), partner updates, and narrative progress.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                <span><strong>Grant-specific deliverables:</strong> Aligned with OSIT or other funder requirements (e.g., evaluation dashboard, case studies, MOUs).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                <span><strong>Partner communication:</strong> Regular updates to university and employer partners on outcomes and opportunities.</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <Link href="/contact" className="font-semibold text-primary-600 hover:text-primary-700">
              Contact for grant and partnership inquiries →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
