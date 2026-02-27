import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Evaluation | Projxon — KPIs & Continuous Improvement",
  description: "Evaluation framework, KPIs, data collection tools, and formative/summative evaluation model.",
};

export default function ResearchEvaluationPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Research & Evaluation</h1>
          <p className="mt-2 text-slate-600">Data-driven improvement and grant accountability</p>

          {/* Evaluation Framework */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Evaluation Framework</h2>
            <p className="mt-2 text-slate-600">KPIs and data collection tools that support both program improvement and funder reporting.</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">Participation & Demographics</h3>
                <p className="mt-1 text-sm text-slate-600">Number of participants, grade level/education level, geography (e.g., Washoe, ECSD, rural/urban), and diversity metrics.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">Outcome KPIs</h3>
                <p className="mt-1 text-sm text-slate-600">Career transition rate, leadership roles taken, certifications earned, projects delivered, and employer feedback.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">Data Collection Tools</h3>
                <p className="mt-1 text-sm text-slate-600">Surveys (entry/exit, satisfaction), learning logs, mentor feedback forms, and partner check-ins. Data is aggregated in an evaluation dashboard for reporting.</p>
              </div>
            </div>
          </div>

          {/* Continuous Improvement Loop */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">Continuous Improvement Loop</h2>
            <p className="mt-2 text-slate-600">Formative and summative evaluation drive ongoing refinement.</p>
            <div className="mt-8 overflow-hidden rounded-xl border-2 border-slate-200 bg-slate-50 p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="rounded-lg bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-900">Formative Evaluation</p>
                  <p className="mt-2 text-sm text-slate-600">Ongoing feedback during the program: check-ins, learning logs, mentor input. Used to adjust support and curriculum in real time.</p>
                </div>
                <div className="text-2xl text-slate-400">→</div>
                <div className="rounded-lg bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-900">Data aggregation</p>
                  <p className="mt-2 text-sm text-slate-600">Dashboard and reports that summarize participation, outcomes, and satisfaction for internal and external use.</p>
                </div>
                <div className="text-2xl text-slate-400">→</div>
                <div className="rounded-lg bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
                  <p className="font-semibold text-slate-900">Summative Evaluation</p>
                  <p className="mt-2 text-sm text-slate-600">End-of-cycle and annual review: impact metrics, case studies, and lessons learned. Informs next cycle and grant reports.</p>
                </div>
              </div>
              <p className="mt-6 text-center text-sm text-slate-500">
                The loop closes when findings feed back into program design, partnership conversations, and reporting to funders (e.g., OSIT grant).
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/impact" className="font-semibold text-primary-600 hover:text-primary-700">
              Impact & Metrics →
            </Link>
            <Link href="/governance" className="font-semibold text-primary-600 hover:text-primary-700">
              Governance & Reporting →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
