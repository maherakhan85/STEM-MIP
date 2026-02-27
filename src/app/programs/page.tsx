import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs | Projxon — Momentum Internship Program & Leadership",
  description: "MIP as workforce development engine, leadership track, and weekly cadence.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Programs</h1>
          <p className="mt-2 text-slate-600">Structured pathways from internship to workforce</p>

          {/* Momentum Internship Program */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Momentum Internship Program (MIP)</h2>
            <p className="mt-2 text-primary-600 font-medium">Workforce Development Engine</p>
            <p className="mt-4 text-slate-600">
              MIP is reframed as a <strong>Workforce Development Engine</strong>—not just an internship program. It combines real-world project work with mentorship, skill-building, and intentional exposure to career pathways. Participants gain experience that aligns with employer needs while building portfolios and professional networks. The program is designed to support Nevada students from diverse backgrounds, including those in Washoe County, ECSD (Elko County), and other districts, as well as university students seeking structured internship experiences.
            </p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                Project-based internships with defined deliverables and learning outcomes
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                Mentorship and career readiness support
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                Connection to employer partners for potential placement
              </li>
            </ul>
          </div>

          {/* Leadership Track */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">Leadership Track</h2>
            <p className="mt-4 text-slate-600">
              The Leadership Track highlights <strong>real-world project flow</strong>: participants don’t just complete tasks—they own projects, coordinate with peers, and present outcomes to stakeholders. This mirrors the Discovery Deck vision of participants advancing into roles where they ADVISE, COACH, PARTNER, and CONSULT. Leadership development is embedded through:
            </p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-teal" />
                Project ownership and accountability
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-teal" />
                Peer coaching and mentoring opportunities
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-teal" />
                Stakeholder presentations and feedback loops
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-teal" />
                Progression pathways (e.g., from intern to lead to mentor)
              </li>
            </ul>
          </div>

          {/* Weekly Cadence */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">Weekly Cadence</h2>
            <p className="mt-4 text-slate-600">
              A <strong>structured cadence</strong> ensures consistency and accountability for both participants and partners. Example rhythm:
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Activity</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">Kickoff / sync</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Align on goals and deliverables for the week</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">Project work</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Structured time with mentor and team</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">Check-in / standup</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Progress, blockers, and support needs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">Reflection / documentation</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Learning logs and portfolio updates</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              This cadence supports evaluation (formative feedback) and clear expectations for grant reporting and partner communication.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/impact" className="font-semibold text-primary-600 hover:text-primary-700">
              View Impact & Metrics →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
