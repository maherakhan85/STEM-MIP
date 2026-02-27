import type { Metadata } from "next";
import Link from "next/link";
import { EventsSchedule } from "@/components/EventsSchedule";

export const metadata: Metadata = {
  title: "Events | MIP — Projxon",
  description: "Company events schedule: weekly cultural events (Wednesdays) and quarterly MOP events.",
};

const WEDNESDAY_ROTATION = ["HR", "IT", "Marketing", "Business", "Operations", "Business", "GAP", "Executive"];

export default function EventsPage() {
  return (
    <div className="bg-white">
      <section className="section-padding bg-white">
        <div className="container">
          <nav className="mb-4">
            <Link href="/" className="text-muted text-decoration-none small">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="h2 fw-bold section-heading mb-1">Events</h1>
          <p className="text-muted text-center mb-5">Company events and MOP schedule</p>

          {/* Live schedule — client component */}
          <div className="card border-0 shadow-sm mb-5">
            <div className="card-body p-4">
              <EventsSchedule />
            </div>
          </div>

          {/* Weekly Cultural Events — full rotation */}
          <div className="mb-5">
            <h2 className="h4 fw-bold subheading-royal mb-2">Weekly Cultural Events</h2>
            <p className="text-muted mb-4">
              Every <strong className="text-dark">Wednesday</strong>, a cultural event is held and hosted by a different team. Teams rotate in order: HR → IT → Marketing → Business → Operations → Business → GAP → Executive.
            </p>
            <div className="table-responsive">
              <table className="table table-bordered mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="text-dark">Week in cycle</th>
                    <th className="text-dark">Host team</th>
                  </tr>
                </thead>
                <tbody>
                  {WEDNESDAY_ROTATION.map((team, i) => (
                    <tr key={`${team}-${i}`}>
                      <td>Week {i + 1}</td>
                      <td>{team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MOP Event — Quarterly */}
          <div>
            <h2 className="h4 fw-bold subheading-royal mb-2">MOP Event (Quarterly)</h2>
            <p className="text-muted mb-4">
              Every <strong className="text-dark">3 months</strong>, we hold an MOP Event in <strong className="text-dark">March</strong>, <strong className="text-dark">June</strong>, <strong className="text-dark">August</strong>, and <strong className="text-dark">October</strong>. See the live schedule above for upcoming dates.
            </p>
            <p className="small text-muted mb-0">
              Exact dates for each MOP Event are communicated internally. Check with your team lead or HR for the current year&apos;s calendar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
