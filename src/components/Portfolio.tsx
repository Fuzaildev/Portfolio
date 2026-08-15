"use client";

import { IdentityRail } from "@/components/layout/IdentityRail";
import { IntroSection } from "@/components/sections/IntroSection";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceIndex } from "@/components/sections/ExperienceIndex";

export function Portfolio() {
  return (
    <div className="page-shell folio-grid">
      <IdentityRail />
      <main className="folio-main">
        <IntroSection />
        <AboutSection />
        <WorkGallery />
        <ExperienceIndex />
      </main>
    </div>
  );
}
