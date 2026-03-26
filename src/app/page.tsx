import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { ImpactSnapshotSection } from "@/components/sections/ImpactSnapshotSection";
import { STEMInitiativeSection } from "@/components/sections/STEMInitiativeSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimateOnScroll animation="slideLeft" delay={0}>
        <EcosystemSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="scaleUp" delay={80}>
        <ImpactSnapshotSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="slideRight" delay={80}>
        <STEMInitiativeSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeUp" delay={120}>
        <ProgramsSection />
      </AnimateOnScroll>
    </>
  );
}
