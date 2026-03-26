"use client";

import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { feature, mesh } from "topojson-client";
import styles from "./ImpactTeamMapSection.module.css";

type Tz = "PST" | "MST" | "CST" | "EST";
type Member = { c: string; s: string; la: number; lo: number; hq?: boolean };
type ClusterPin = { x: number; y: number; n: number; cities: string[]; s: string; hq: boolean };

const STATE_TZ: Record<string, Tz> = { CA: "PST", WA: "PST", OR: "PST", NV: "PST", AZ: "MST", CO: "MST", UT: "MST", MT: "MST", WY: "MST", NM: "MST", ID: "MST", TX: "CST", OK: "CST", KS: "CST", NE: "CST", SD: "CST", ND: "CST", MN: "CST", IA: "CST", MO: "CST", AR: "CST", LA: "CST", WI: "CST", IL: "CST", MI: "CST", IN: "CST", AL: "CST", MS: "CST", TN: "CST", FL: "EST", GA: "EST", SC: "EST", NC: "EST", VA: "EST", WV: "EST", MD: "EST", DE: "EST", PA: "EST", NJ: "EST", NY: "EST", CT: "EST", RI: "EST", MA: "EST", VT: "EST", NH: "EST", ME: "EST", OH: "EST", KY: "EST", DC: "EST" };

const MEMBERS: Member[] = [
  { c: "San Diego", s: "CA", la: 32.72, lo: -117.15 }, { c: "San Diego", s: "CA", la: 32.72, lo: -117.15 }, { c: "San Diego", s: "CA", la: 32.72, lo: -117.15 }, { c: "San Diego", s: "CA", la: 32.72, lo: -117.15 },
  { c: "La Jolla", s: "CA", la: 32.85, lo: -117.27 },
  { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 }, { c: "Chicago", s: "IL", la: 41.85, lo: -87.65 },
  { c: "Aurora", s: "IL", la: 41.76, lo: -88.32 }, { c: "Willowbrook", s: "IL", la: 41.76, lo: -87.94 }, { c: "Westmont", s: "IL", la: 41.79, lo: -87.97 }, { c: "Wheeling", s: "IL", la: 42.13, lo: -87.93 }, { c: "Bloomington", s: "IL", la: 40.48, lo: -88.99 },
  { c: "Queens NYC", s: "NY", la: 40.73, lo: -73.79 }, { c: "New York", s: "NY", la: 40.71, lo: -74.01 }, { c: "New York City", s: "NY", la: 40.71, lo: -74.01 }, { c: "Bronx", s: "NY", la: 40.84, lo: -73.87 }, { c: "Atlantic Beach", s: "NY", la: 40.59, lo: -73.73 }, { c: "Atlantic Beach", s: "NY", la: 40.59, lo: -73.73 },
  { c: "Teaneck", s: "NJ", la: 40.89, lo: -74.01 }, { c: "Montvale", s: "NJ", la: 41.05, lo: -74.02 }, { c: "Harrison", s: "NJ", la: 40.74, lo: -74.15 }, { c: "Harrison", s: "NJ", la: 40.74, lo: -74.15 }, { c: "Newark", s: "NJ", la: 40.72, lo: -74.17 }, { c: "Jersey City", s: "NJ", la: 40.73, lo: -74.08 }, { c: "NJ", s: "NJ", la: 40.3, lo: -74.5 }, { c: "West Berlin", s: "NJ", la: 39.8, lo: -74.93 }, { c: "Maple Shade", s: "NJ", la: 39.95, lo: -74.99 }, { c: "Flemington", s: "NJ", la: 40.51, lo: -74.86 }, { c: "Edison", s: "NJ", la: 40.52, lo: -74.41 }, { c: "Kendall Park", s: "NJ", la: 40.42, lo: -74.56 },
  { c: "Fairfax", s: "VA", la: 38.85, lo: -77.3 }, { c: "Fairfax", s: "VA", la: 38.85, lo: -77.3 }, { c: "Reston", s: "VA", la: 38.96, lo: -77.36 }, { c: "Woodbridge", s: "VA", la: 38.66, lo: -77.25 }, { c: "College Park", s: "MD", la: 38.98, lo: -76.94 },
  { c: "Philadelphia", s: "PA", la: 39.95, lo: -75.17 }, { c: "Philadelphia", s: "PA", la: 39.95, lo: -75.17 }, { c: "Philadelphia", s: "PA", la: 39.95, lo: -75.17 }, { c: "Downingtown", s: "PA", la: 40, lo: -75.7 }, { c: "Chalfont", s: "PA", la: 40.29, lo: -75.21 }, { c: "Newark", s: "DE", la: 39.68, lo: -75.75 },
  { c: "Savannah", s: "GA", la: 32.08, lo: -81.1 }, { c: "Decatur", s: "GA", la: 33.77, lo: -84.3 }, { c: "Decatur", s: "GA", la: 33.77, lo: -84.3 }, { c: "Atlanta", s: "GA", la: 33.75, lo: -84.39 }, { c: "Atlanta", s: "GA", la: 33.75, lo: -84.39 }, { c: "Duluth", s: "GA", la: 34, lo: -84.14 },
  { c: "Boston", s: "MA", la: 42.36, lo: -71.06 }, { c: "Boston", s: "MA", la: 42.36, lo: -71.06 }, { c: "Boston", s: "MA", la: 42.36, lo: -71.06 }, { c: "Boston", s: "MA", la: 42.36, lo: -71.06 }, { c: "Boston", s: "MA", la: 42.36, lo: -71.06 }, { c: "Andover", s: "MA", la: 42.66, lo: -71.14 }, { c: "Andover", s: "MA", la: 42.66, lo: -71.14 }, { c: "Quincy", s: "MA", la: 42.25, lo: -71 }, { c: "Quincy", s: "MA", la: 42.25, lo: -71 },
  { c: "Kansas City", s: "MO", la: 39.1, lo: -94.58 }, { c: "St Louis", s: "MO", la: 38.63, lo: -90.2 }, { c: "St Louis", s: "MO", la: 38.63, lo: -90.2 },
  { c: "Denver", s: "CO", la: 39.74, lo: -104.98 }, { c: "Boulder", s: "CO", la: 40.01, lo: -105.27 }, { c: "Boulder", s: "CO", la: 40.01, lo: -105.27 },
  { c: "Milpitas", s: "CA", la: 37.43, lo: -121.9 }, { c: "Emerald Hills", s: "CA", la: 37.47, lo: -122.22 }, { c: "Modesto", s: "CA", la: 37.64, lo: -120.99 }, { c: "Discovery Bay", s: "CA", la: 37.91, lo: -121.6 }, { c: "Sunol", s: "CA", la: 37.6, lo: -121.88 }, { c: "Berkeley", s: "CA", la: 37.87, lo: -122.27 }, { c: "Oakland", s: "CA", la: 37.8, lo: -122.27 }, { c: "Redwood City", s: "CA", la: 37.49, lo: -122.23 }, { c: "San Jose", s: "CA", la: 37.34, lo: -121.89 }, { c: "San Jose", s: "CA", la: 37.34, lo: -121.89 }, { c: "Sacramento", s: "CA", la: 38.58, lo: -121.49 }, { c: "San Francisco", s: "CA", la: 37.77, lo: -122.42 },
  { c: "Los Angeles", s: "CA", la: 34.05, lo: -118.24 }, { c: "Bell Gardens", s: "CA", la: 33.97, lo: -118.16 }, { c: "Bell Gardens", s: "CA", la: 33.97, lo: -118.16 }, { c: "Santa Ana", s: "CA", la: 33.75, lo: -117.87 }, { c: "Ontario", s: "CA", la: 34.07, lo: -117.65 }, { c: "Claremont", s: "CA", la: 34.1, lo: -117.72 }, { c: "Claremont", s: "CA", la: 34.1, lo: -117.72 }, { c: "Temecula", s: "CA", la: 33.49, lo: -117.15 }, { c: "Whittier", s: "CA", la: 33.98, lo: -118.03 }, { c: "Sunnyvale", s: "CA", la: 37.37, lo: -122.04 },
  { c: "Las Vegas", s: "NV", la: 36.17, lo: -115.14, hq: true }, { c: "Henderson", s: "NV", la: 36.04, lo: -115.07 },
  { c: "Rochester", s: "NY", la: 43.16, lo: -77.61 }, { c: "Rochester", s: "NY", la: 43.16, lo: -77.61 }, { c: "Ithaca", s: "NY", la: 42.44, lo: -76.5 },
  { c: "Raleigh", s: "NC", la: 35.78, lo: -78.64 }, { c: "Raleigh", s: "NC", la: 35.78, lo: -78.64 }, { c: "Durham", s: "NC", la: 35.99, lo: -78.9 }, { c: "Charlotte", s: "NC", la: 35.23, lo: -80.84 },
  { c: "Hartford", s: "CT", la: 41.76, lo: -72.68 }, { c: "Hartford", s: "CT", la: 41.76, lo: -72.68 }, { c: "Stamford", s: "CT", la: 41.05, lo: -73.54 },
  { c: "Minneapolis", s: "MN", la: 44.98, lo: -93.27 }, { c: "Minneapolis", s: "MN", la: 44.98, lo: -93.27 },
  { c: "Columbus", s: "OH", la: 39.96, lo: -83 }, { c: "Fairfield", s: "OH", la: 39.34, lo: -84.56 }, { c: "Toledo", s: "OH", la: 41.66, lo: -83.56 }, { c: "Cleveland", s: "OH", la: 41.5, lo: -81.69 },
  { c: "Pullman", s: "WA", la: 46.73, lo: -117.18 }, { c: "Seattle", s: "WA", la: 47.61, lo: -122.33 },
  { c: "Dallas", s: "TX", la: 32.78, lo: -96.8 }, { c: "Rowlett", s: "TX", la: 32.9, lo: -96.56 }, { c: "Celina", s: "TX", la: 33.32, lo: -96.78 }, { c: "Austin", s: "TX", la: 30.27, lo: -97.74 }, { c: "San Antonio", s: "TX", la: 29.42, lo: -98.49 }, { c: "Cibolo", s: "TX", la: 29.56, lo: -98.23 }, { c: "Schertz", s: "TX", la: 29.55, lo: -98.27 },
  { c: "Panama City Beach", s: "FL", la: 30.18, lo: -85.81 }, { c: "Orlando", s: "FL", la: 28.54, lo: -81.38 }, { c: "Winter Garden", s: "FL", la: 28.57, lo: -81.59 },
  { c: "Fort Thomas", s: "KY", la: 39.07, lo: -84.45 }, { c: "Madisonville", s: "LA", la: 30.4, lo: -90.17 }
];

const BOUNDARIES = [
  { id: "PST-MST", L: "PST", R: "MST", pts: [[49.0, -117.03], [48.5, -117.03], [47.5, -117.03], [46.5, -117.03], [46.0, -117.03], [45.5, -117.03], [45.0, -116.9], [44.5, -116.5], [43.5, -116.9], [42.0, -117.03], [42.0, -114.05], [41.0, -114.05], [40.0, -114.05], [38.5, -114.05], [37.0, -114.05], [36.0, -114.1], [35.3, -114.3], [34.5, -114.55], [32.7, -114.7]] },
  { id: "MST-CST", L: "MST", R: "CST", pts: [[49.0, -104.05], [48.0, -104.05], [46.5, -104.05], [45.0, -104.05], [44.0, -104.05], [43.0, -104.05], [42.0, -104.05], [41.0, -104.05], [40.0, -102.05], [39.0, -102.05], [38.0, -102.05], [37.0, -102.05], [36.5, -103.0], [36.0, -103.0], [35.0, -103.0], [34.0, -103.0], [33.0, -103.0], [32.0, -103.05], [31.7, -103.05]] },
  { id: "CST-EST", L: "CST", R: "EST", pts: [[46.0, -84.5], [45.8, -84.7], [45.5, -84.7], [45.0, -83.5], [44.5, -83.5], [44.0, -83.0], [43.5, -83.1], [43.0, -83.1], [42.4, -83.1], [42.0, -84.8], [41.7, -84.8], [41.5, -84.8], [41.0, -84.8], [40.5, -84.8], [40.0, -84.8], [39.5, -84.8], [39.0, -84.8], [38.7, -84.5], [38.5, -84.3], [38.0, -84.0], [37.5, -83.7], [37.0, -83.0], [36.5, -83.0], [36.0, -83.7], [35.8, -84.5], [35.5, -85.3], [35.0, -85.6], [34.5, -85.6], [34.0, -85.6], [33.0, -85.0], [32.5, -85.0], [31.8, -85.0], [31.0, -85.0], [30.5, -87.5]] }
] as const;

const TZ_BND: Record<Tz, string[]> = {
  PST: ["PST-MST"],
  MST: ["PST-MST", "MST-CST"],
  CST: ["MST-CST", "CST-EST"],
  EST: ["CST-EST"],
};

function clusterPoints(points: ClusterPin[], radius: number): ClusterPin[] {
  const clusters: ClusterPin[] = [];
  points.forEach((p) => {
    if (p.hq) {
      clusters.push({ ...p, n: 1 });
      return;
    }
    const found = clusters.find((c) => !c.hq && Math.hypot(c.x - p.x, c.y - p.y) < radius);
    if (found) {
      found.n += 1;
      if (!found.cities.includes(p.cities[0])) found.cities.push(p.cities[0]);
    } else {
      clusters.push({ ...p, n: 1 });
    }
  });
  return clusters;
}

function arcPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const d = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / d;
  const ny = dx / d;
  const fn = ny > 0 ? -1 : 1;
  return `M${x1},${y1}Q${mx + fn * nx * d * 0.2},${my + fn * ny * d * 0.2} ${x2},${y2}`;
}

export function ImpactTeamMapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const zoomPctRef = useRef<HTMLSpanElement>(null);

  const counts = useMemo(() => {
    const tzC: Record<Tz, number> = { PST: 0, MST: 0, CST: 0, EST: 0 };
    MEMBERS.forEach((m) => {
      if (STATE_TZ[m.s]) tzC[STATE_TZ[m.s]] += 1;
    });
    return {
      tzC,
      members: MEMBERS.length,
      cities: new Set(MEMBERS.map((m) => `${m.c.toLowerCase()}-${m.s}`)).size,
      states: new Set(MEMBERS.map((m) => m.s)).size,
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current || !tipRef.current || !loadingRef.current || !zoomPctRef.current) return;

    let disposed = false;

    // In dev Strict Mode, effects mount/unmount twice; start from a clean SVG.
    d3.select(svgRef.current).selectAll("*").remove();

    const W = 975;
    const H = 610;
    const proj = d3.geoAlbersUsa().scale(1300).translate([W / 2, H / 2]);
    const pg = d3.geoPath().projection(proj);
    const svg = d3.select(svgRef.current);
    const tip = tipRef.current;
    const zc = containerRef.current;
    const mapSvg = svgRef.current;
    const loading = loadingRef.current;
    const zoomPct = zoomPctRef.current;

    const projected = MEMBERS.map((m) => {
      const p = proj([m.lo, m.la]);
      return p ? { x: p[0], y: p[1], n: 1, cities: [m.c], s: m.s, hq: !!m.hq } : null;
    }).filter(Boolean) as ClusterPin[];

    const stL = svg.append("g");
    const tzL = svg.append("g");
    const cnL = svg.append("g");
    const pinL = svg.append("g");
    const bndMidX: Record<string, number> = {};

    let activeTZ: Tz | null = null;
    let tabHov = false;

    const tabEls = Array.from(zc.parentElement?.querySelectorAll<HTMLElement>(`[data-map-tz]`) ?? []);
    const setActiveTZ = (tz: Tz | null) => {
      if (tz === activeTZ) return;
      activeTZ = tz;
      tabEls.forEach((el) => {
        const isActive = tz && el.dataset.mapTz === tz;
        el.classList.toggle(styles.tzActive, !!isActive);
      });
      drawTZLines();
    };

    const drawTZLines = () => {
      tzL.selectAll("*").remove();
      BOUNDARIES.forEach((bnd) => {
        const pts = bnd.pts.map(([la, lo]) => proj([lo, la])).filter(Boolean) as [number, number][];
        if (pts.length < 2) return;
        const mid = pts[Math.floor(pts.length / 2)];
        bndMidX[bnd.id] = mid[0];
        const isActive = !!(activeTZ && TZ_BND[activeTZ]?.includes(bnd.id));
        const isDim = !!(activeTZ && !isActive);
        const stroke = isActive ? "rgba(255,255,255,0.95)" : isDim ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.20)";
        const sw = isActive ? 2 : isDim ? 0.5 : 0.9;
        const dash = isActive ? "7 3" : "5 5";
        const lAlpha = isActive ? 1 : isDim ? 0.12 : 0.45;
        const lColor = isActive ? "#fff" : "rgba(255,255,255,0.7)";
        const lSize = isActive ? 9 : 8;

        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
        tzL.append("path").attr("d", d).attr("fill", "none").attr("stroke", stroke).attr("stroke-width", sw).attr("stroke-dasharray", dash);

        [pts[0], mid, pts[pts.length - 1]].forEach((p, i) => {
          const yo = [-5, 0, 3][i];
          tzL.append("text").attr("x", p[0] - 5).attr("y", p[1] + yo).attr("text-anchor", "end").attr("font-size", lSize).attr("font-weight", 800).attr("fill", lColor).attr("opacity", lAlpha).attr("letter-spacing", 1).attr("font-family", "Segoe UI,sans-serif").text(bnd.L);
          tzL.append("text").attr("x", p[0] + 5).attr("y", p[1] + yo).attr("text-anchor", "start").attr("font-size", lSize).attr("font-weight", 800).attr("fill", lColor).attr("opacity", lAlpha).attr("letter-spacing", 1).attr("font-family", "Segoe UI,sans-serif").text(bnd.R);
        });
      });
    };

    const renderPins = (sc: number) => {
      const radius = Math.max(2, 28 / sc);
      const cls = clusterPoints(projected, radius);
      pinL.selectAll("*").remove();
      cnL.selectAll("*").remove();

      const a = Math.max(0, 1 - (sc - 1) / 1.5);
      if (a > 0.01) {
        const hq = cls.find((c) => c.hq);
        if (hq) {
          cls.filter((c) => !c.hq).forEach((c) => {
            cnL.append("path")
              .attr("d", arcPath(c.x, c.y, hq.x, hq.y))
              .attr("fill", "none")
              .attr("stroke", "#FBD12B")
              .attr("opacity", a * 0.28)
              .attr("stroke-width", c.n >= 10 ? 1.5 : c.n >= 5 ? 1.1 : 0.8)
              .attr("stroke-dasharray", c.n >= 10 ? "6 4" : "4 5");
          });
        }
      }

      [...cls].sort((aPin, bPin) => (aPin.hq ? 1 : bPin.hq ? -1 : 0)).forEach((c) => {
        const g = pinL.append("g").attr("class", styles.pinGroup);
        if (c.hq) {
          g.append("circle").attr("cx", c.x).attr("cy", c.y).attr("r", 26 / sc).attr("fill", "rgba(255,77,77,0.07)");
          g.append("circle").attr("cx", c.x).attr("cy", c.y).attr("r", 16 / sc).attr("fill", "rgba(255,77,77,0.18)").attr("class", styles.hqPulse).attr("data-b", 16 / sc);
          g.append("circle").attr("cx", c.x).attr("cy", c.y).attr("r", 7 / sc).attr("fill", "#ff4d4d");
          g.append("text").attr("x", c.x).attr("y", c.y - 18 / sc).attr("text-anchor", "middle").attr("font-size", 9 / sc).attr("font-weight", 800).attr("fill", "#ff4d4d").attr("font-family", "Segoe UI,sans-serif").text("HQ");
        } else {
          const bR = c.n === 1 ? 9 : c.n <= 2 ? 11 : c.n <= 4 ? 13 : c.n <= 7 ? 15 : c.n <= 12 ? 18 : c.n <= 18 ? 21 : 24;
          const rr = bR / sc;
          g.append("circle").attr("cx", c.x).attr("cy", c.y).attr("r", rr + 5 / sc).attr("fill", "rgba(251,209,43,0.08)");
          g.append("circle").attr("cx", c.x).attr("cy", c.y).attr("r", rr).attr("fill", "#FBD12B");
          g.append("text").attr("x", c.x).attr("y", c.y + rr * 0.38).attr("text-anchor", "middle").attr("font-size", (bR >= 15 ? 11 : bR >= 11 ? 10 : 9) / sc).attr("font-weight", 900).attr("fill", "#0b0f16").attr("font-family", "Segoe UI,sans-serif").text(c.n);
        }
        g.on("mouseover", (ev) => {
          const cl = c.cities.slice(0, 6).join(", ") + (c.cities.length > 6 ? ` +${c.cities.length - 6} more` : "");
          tip.innerHTML = c.hq
            ? "<span style='color:#ff4d4d;font-weight:700'>Las Vegas, NV</span><br><span style='color:#8a97a8'>MIP Headquarters</span>"
            : `<span style='color:#FBD12B;font-weight:700'>${cl}, ${c.s}</span><br><span style='color:#8a97a8'>${c.n} member${c.n > 1 ? "s" : ""}</span>`;
          tip.style.display = "block";
          tip.style.left = `${(ev as MouseEvent).clientX + 14}px`;
          tip.style.top = `${(ev as MouseEvent).clientY - 10}px`;
        })
          .on("mousemove", (ev) => {
            tip.style.left = `${(ev as MouseEvent).clientX + 14}px`;
            tip.style.top = `${(ev as MouseEvent).clientY - 10}px`;
          })
          .on("mouseout", () => {
            tip.style.display = "none";
          });
      });
    };

    let pulseId = 0;
    const pulse = () => {
      const t = performance.now() / 250;
      pinL.selectAll(`.${styles.hqPulse}`).each(function eachPulse() {
        const node = d3.select(this);
        const base = parseFloat(node.attr("data-b")) || 16;
        node.attr("r", base * (1 + 0.1 * Math.sin(t)));
      });
      pulseId = window.requestAnimationFrame(pulse);
    };

    fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
      .then((r) => r.json())
      .then((us) => {
        if (disposed) return;
        loading.style.display = "none";
        const states = feature(us, us.objects.states);
        const borders = mesh(us, us.objects.states, (a: unknown, b: unknown) => a !== b);
        stL.selectAll(`.${styles.statePath}`).data((states as any).features).join("path").attr("class", styles.statePath).attr("d", pg as any);
        stL.append("path").datum(borders as any).attr("fill", "none").attr("stroke", "#1e3550").attr("stroke-width", 0.6).attr("d", pg as any);
        drawTZLines();
        renderPins(1);
        pulseId = window.requestAnimationFrame(pulse);
      })
      .catch(() => {
        if (disposed) return;
        loading.textContent = "Map failed to load.";
      });

    let sc = 1;
    let tx = 0;
    let ty = 0;
    let drag = false;
    let lx = 0;
    let ly = 0;
    let lpd: number | null = null;
    let lpmx = 0;
    let lpmy = 0;
    const MIN = 1;
    const MAX = 10;

    const applyT = (rerender = true) => {
      mapSvg.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`;
      zoomPct.textContent = `${Math.round(sc * 100)}%`;
      if (rerender) renderPins(sc);
    };
    const clamp = () => {
      const r = zc.getBoundingClientRect();
      const sw = r.width * sc;
      const sh = (r.width / 975) * 610 * sc;
      tx = Math.min(0, Math.max(r.width - sw, tx));
      ty = Math.min(0, Math.max(r.height - sh, ty));
    };
    const zAt = (cx: number, cy: number, ns: number) => {
      const r = zc.getBoundingClientRect();
      const mx = cx - r.left;
      const my = cy - r.top;
      tx = mx - (mx - tx) * (ns / sc);
      ty = my - (my - ty) * (ns / sc);
      sc = ns;
      if (sc <= MIN) { tx = 0; ty = 0; }
      clamp();
      applyT();
    };

    const tzFromSvgX = (svgX: number): Tz => {
      const x1 = bndMidX["PST-MST"] ?? 310;
      const x2 = bndMidX["MST-CST"] ?? 460;
      const x3 = bndMidX["CST-EST"] ?? 640;
      if (svgX < x1) return "PST";
      if (svgX < x2) return "MST";
      if (svgX < x3) return "CST";
      return "EST";
    };

    const onMove = (e: MouseEvent) => {
      if (drag) {
        tx += e.clientX - lx;
        ty += e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        clamp();
        mapSvg.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`;
        zoomPct.textContent = `${Math.round(sc * 100)}%`;
      }
      if (!tabHov) {
        const r = zc.getBoundingClientRect();
        const svgX = (e.clientX - r.left - tx) / sc;
        const svgY = (e.clientY - r.top - ty) / sc;
        if (svgX < 20 || svgX > 960 || svgY < 20 || svgY > 590) setActiveTZ(null);
        else setActiveTZ(tzFromSvgX(svgX));
      }
    };
    const onUp = () => {
      if (drag) {
        drag = false;
        renderPins(sc);
      }
    };

    const zInBtn = zc.parentElement?.querySelector<HTMLButtonElement>(`[data-map-action="zin"]`);
    const zOutBtn = zc.parentElement?.querySelector<HTMLButtonElement>(`[data-map-action="zout"]`);
    const zResetBtn = zc.parentElement?.querySelector<HTMLButtonElement>(`[data-map-action="zreset"]`);

    zInBtn?.addEventListener("click", () => {
      const r = zc.getBoundingClientRect();
      zAt(r.left + r.width / 2, r.top + r.height / 2, Math.min(MAX, sc * 1.4));
    });
    zOutBtn?.addEventListener("click", () => {
      const r = zc.getBoundingClientRect();
      const n = Math.max(MIN, sc / 1.4);
      if (n <= MIN) { sc = 1; tx = 0; ty = 0; applyT(); }
      else zAt(r.left + r.width / 2, r.top + r.height / 2, n);
    });
    zResetBtn?.addEventListener("click", () => { sc = 1; tx = 0; ty = 0; applyT(); });

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const n = Math.min(MAX, Math.max(MIN, sc * (e.deltaY > 0 ? 0.85 : 1.18)));
      if (n <= MIN) { sc = 1; tx = 0; ty = 0; applyT(); }
      else zAt(e.clientX, e.clientY, n);
    };
    const onDown = (e: MouseEvent) => {
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      e.preventDefault();
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        lpd = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        lpmx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        lpmy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      } else if (e.touches.length === 1) {
        drag = true;
        lx = e.touches[0].clientX;
        ly = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && lpd) {
        e.preventDefault();
        const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        const n = Math.min(MAX, Math.max(MIN, sc * (dist / lpd)));
        const r = zc.getBoundingClientRect();
        const px = mx - r.left;
        const py = my - r.top;
        const ppx = lpmx - r.left;
        const ppy = lpmy - r.top;
        tx = px - (ppx - tx) * (n / sc) + (mx - lpmx);
        ty = py - (ppy - ty) * (n / sc) + (my - lpmy);
        sc = n;
        lpd = dist;
        lpmx = mx;
        lpmy = my;
        if (sc <= MIN) { tx = 0; ty = 0; }
        clamp();
        mapSvg.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`;
        zoomPct.textContent = `${Math.round(sc * 100)}%`;
      } else if (e.touches.length === 1 && drag) {
        e.preventDefault();
        tx += e.touches[0].clientX - lx;
        ty += e.touches[0].clientY - ly;
        lx = e.touches[0].clientX;
        ly = e.touches[0].clientY;
        clamp();
        mapSvg.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`;
      }
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        if (lpd) renderPins(sc);
        lpd = null;
      }
      if (e.touches.length === 0) {
        if (drag) renderPins(sc);
        drag = false;
      }
    };

    tabEls.forEach((el) => {
      const enter = () => { tabHov = true; setActiveTZ((el.dataset.mapTz as Tz) ?? null); };
      const leave = () => { tabHov = false; setActiveTZ(null); };
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      (el as any)._enter = enter;
      (el as any)._leave = leave;
    });

    const onMouseLeave = () => { if (!tabHov) setActiveTZ(null); };

    zc.addEventListener("mousedown", onDown);
    zc.addEventListener("wheel", onWheel, { passive: false });
    zc.addEventListener("mouseleave", onMouseLeave);
    zc.addEventListener("touchstart", onTouchStart, { passive: true });
    zc.addEventListener("touchmove", onTouchMove, { passive: false });
    zc.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(pulseId);
      zc.removeEventListener("mousedown", onDown);
      zc.removeEventListener("wheel", onWheel);
      zc.removeEventListener("mouseleave", onMouseLeave);
      zc.removeEventListener("touchstart", onTouchStart);
      zc.removeEventListener("touchmove", onTouchMove);
      zc.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      tabEls.forEach((el: any) => {
        if (el._enter) el.removeEventListener("mouseenter", el._enter);
        if (el._leave) el.removeEventListener("mouseleave", el._leave);
      });
      svg.selectAll("*").remove();
    };
  }, []);

  return (
    <section className="mb-5">
      <h2 className="h3 fw-bold subheading-royal mb-2">Team Distribution Map</h2>
      <p className="text-muted text-center mb-4">Where our MIP team members are based across the United States.</p>

      <div className={styles.mapWrapper}>
        <div className={styles.mapHeader}>
          <div>
            <div className={styles.mapTitle}>MIP Team Network</div>
            <div className={styles.mapSubtitle}>United States Distribution — March 2026</div>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.stat}><div className={styles.statNum}>{counts.members}</div><div className={styles.statLbl}>Members</div></div>
            <div className={styles.statDiv} />
            <div className={styles.stat}><div className={styles.statNum}>{counts.cities}</div><div className={styles.statLbl}>Cities</div></div>
            <div className={styles.statDiv} />
            <div className={styles.stat}><div className={styles.statNum}>{counts.states}</div><div className={styles.statLbl}>States</div></div>
          </div>
        </div>

        <div className={styles.tzBand}>
          {(["PST", "MST", "CST", "EST"] as Tz[]).map((tz) => (
            <div key={tz} className={styles.tzZone} data-map-tz={tz}>
              <div className={styles.tzAbbr}>{tz}</div>
              <div className={styles.tzNum}>{counts.tzC[tz]}</div>
              <div className={styles.tzName}>{tz === "PST" ? "Pacific" : tz === "MST" ? "Mountain" : tz === "CST" ? "Central" : "Eastern"}</div>
            </div>
          ))}
        </div>

        <div className={styles.zoomContainer} ref={containerRef}>
          <div className={styles.loading} ref={loadingRef}>LOADING MAP...</div>
          <svg ref={svgRef} className={styles.mapSvg} viewBox="0 0 975 610" xmlns="http://www.w3.org/2000/svg" />
        </div>

        <div className={styles.mapFooter}>
          <div className={styles.footLeft}>
            <div className={styles.zoomTile}>
              <button className={styles.zBtn} data-map-action="zin" type="button">+</button>
              <button className={styles.zBtn} data-map-action="zout" type="button">-</button>
              <span className={styles.zPct} ref={zoomPctRef}>100%</span>
              <button className={styles.zReset} data-map-action="zreset" type="button">Reset</button>
            </div>
            <div className={styles.legDiv} />
            <div className={styles.legend}>
              <div className={styles.legItem}><span className={styles.lHq} />HQ - Las Vegas</div>
              <div className={styles.legItem}><span className={styles.lPin} />Members</div>
              <div className={styles.legItem}><span className={styles.lLine} />Connected</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tip} ref={tipRef} />
    </section>
  );
}
