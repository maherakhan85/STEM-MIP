"use client";

import { useMemo } from "react";

/** Wednesday rotation: this week HR, then IT, Marketing, Business, Operations, Business, GAP, Executive */
const WEDNESDAY_ROTATION = [
  "HR",
  "IT",
  "Marketing",
  "Business",
  "Operations",
  "Business",
  "GAP",
  "Executive",
] as const;

/** Epoch: a known Wednesday when rotation index was 0 (HR). Feb 19, 2025 = HR week. */
const EPOCH_WEDNESDAY = new Date("2025-02-19T12:00:00Z");

function getWeekIndex(date: Date): number {
  const ms = date.getTime() - EPOCH_WEDNESDAY.getTime();
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  return Math.floor(days / 7);
}

function getThisWeekWednesday(date: Date): Date {
  const weekIndex = getWeekIndex(date);
  const d = new Date(EPOCH_WEDNESDAY.getTime() + weekIndex * 7 * 24 * 60 * 60 * 1000);
  return d;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

const MOP_MONTHS = [3, 6, 8, 10] as const; // March, June, August, October

function getNextMOPDates(now: Date): { month: string; date: Date }[] {
  const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const names: Record<number, string> = { 3: "March", 6: "June", 8: "August", 10: "October" };
  const all: { month: string; date: Date }[] = [];
  for (let y = now.getFullYear(); y <= now.getFullYear() + 1; y++) {
    for (const m of MOP_MONTHS) {
      const d = new Date(y, m - 1, 1);
      if (d >= startOfThisMonth) all.push({ month: names[m], date: d });
    }
  }
  return all.slice(0, 4);
}

export function EventsSchedule() {
  const { thisWeekHost, nextWeekHost, thisWeekLabel, nextWeekLabel, wednesdayDate, mopDates } = useMemo(() => {
    const now = new Date();
    const weekIndex = getWeekIndex(now);
    const index = ((weekIndex % 8) + 8) % 8;
    const thisWeekHost = WEDNESDAY_ROTATION[index];
    const nextWeekHost = WEDNESDAY_ROTATION[(index + 1) % 8];
    const wednesdayDate = getThisWeekWednesday(now);
    return {
      thisWeekHost,
      nextWeekHost,
      thisWeekLabel: `This week (${formatDate(wednesdayDate)}): ${thisWeekHost}`,
      nextWeekLabel: `Next week: ${nextWeekHost}`,
      wednesdayDate,
      mopDates: getNextMOPDates(now),
    };
  }, []);

  return (
    <>
      <div className="mb-4">
        <h3 className="h6 fw-semibold text-dark mb-2">Live schedule — Weekly Cultural Events</h3>
        <p className="text-muted small mb-2">Every Wednesday a different team hosts. Rotation order: HR → IT → Marketing → Business → Operations → Business → GAP → Executive.</p>
        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-dark px-3 py-2">{thisWeekLabel}</span>
          <span className="badge bg-secondary px-3 py-2">{nextWeekLabel}</span>
        </div>
      </div>

      <div>
        <h3 className="h6 fw-semibold text-dark mb-2">Live schedule — MOP (Quarterly)</h3>
        <p className="text-muted small mb-2">MOP events are held in March, June, August, and October. Next upcoming:</p>
        <div className="d-flex flex-wrap gap-2">
          {mopDates.map(({ month, date }) => (
            <span key={month} className="badge bg-dark px-3 py-2">
              {month} {date.getFullYear()}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
