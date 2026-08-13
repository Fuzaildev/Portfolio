"use client";

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { IdentityRail } from "@/components/layout/IdentityRail";
import { IntroSection } from "@/components/sections/IntroSection";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceIndex } from "@/components/sections/ExperienceIndex";
import { ContactSection } from "@/components/sections/ContactSection";

export function Portfolio() {
  return (
    <SmoothScrollProvider>
      <div className="page-shell folio-grid">
        <IdentityRail />
        <main className="folio-main">
          <IntroSection />
          <AboutSection />
          <WorkGallery />
          <ExperienceIndex />
        </main>
      </div>
      <ContactSection />
    </SmoothScrollProvider>
  );
}
