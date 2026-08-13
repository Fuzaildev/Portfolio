"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { CapabilitiesMarquee } from "@/components/motion/CapabilitiesMarquee";
import { capabilities, site } from "@/data/portfolio";
import { prefersReducedMotion } from "@/lib/motion";

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".intro-line", {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.28,
      });

      gsap.from(".intro-fade", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.55,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="section-block border-b border-line pt-6 sm:pt-8 lg:pt-0"
    >
      <p className="intro-fade label-mono text-muted">01 / Intro</p>

      <h2 className="display-serif intro-headline mt-4 font-medium sm:mt-6">
        <span className="block overflow-hidden">
          <span className="intro-line block">Full stack engineer</span>
        </span>
        <span className="block overflow-hidden">
          <span className="intro-line block text-muted">
            building for production.
          </span>
        </span>
      </h2>

      <p className="intro-fade mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:mt-8 sm:text-base md:text-lg">
        {site.statement}
      </p>

      <div className="intro-fade mt-8 border-t border-line pt-6 sm:mt-10 sm:pt-8">
        <CapabilitiesMarquee items={capabilities} />
      </div>
    </section>
  );
}
