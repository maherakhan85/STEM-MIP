import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { ImpactSnapshotSection } from "@/components/sections/ImpactSnapshotSection";
import { STEMInitiativeSection } from "@/components/sections/STEMInitiativeSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ResearchEvaluationSection } from "@/components/sections/ResearchEvaluationSection";
import { GovernanceSection } from "@/components/sections/GovernanceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionDivider } from "@/components/SectionDivider";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <AnimateOnScroll animation="fadeUp">
        <EcosystemSection />
      </AnimateOnScroll>
      <SectionDivider />
      <AnimateOnScroll animation="fadeUp">
        <ImpactSnapshotSection />
      </AnimateOnScroll>
      <SectionDivider />
      <AnimateOnScroll animation="fadeUp">
        <STEMInitiativeSection />
      </AnimateOnScroll>
      <SectionDivider />
      <AnimateOnScroll animation="fadeUp">
        <ProgramsSection />
      </AnimateOnScroll>
      <SectionDivider />
      <AnimateOnScroll animation="fadeUp">
        <ResearchEvaluationSection />
      </AnimateOnScroll>
      <SectionDivider />
      <AnimateOnScroll animation="fadeUp">
        <GovernanceSection />
      </AnimateOnScroll>
      <SectionDivider />
      <AnimateOnScroll animation="fadeUp">
        <ContactSection />
      </AnimateOnScroll>
    </>
  );
}
