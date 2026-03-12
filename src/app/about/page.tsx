import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About | MIP — Projxon",
  description: "Our story, team, mission, and approach. Projxon and the Momentum Internship Program.",
};

export default function AboutPage() {
  return <AboutSection />;
}
