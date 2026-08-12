"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { capabilities, site } from "@/data/portfolio";

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".intro-line", {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.15,
      });

      gsap.from(".intro-fade", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.45,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="section-block border-b border-line pt-6 sm:pt-8 lg:pt-0"
    >
      <p className="intro-fade label-mono text-muted">01 / Intro</p>

      <h2 className="display-serif intro-fade intro-headline mt-4 font-medium sm:mt-6">
        <span className="block overflow-hidden">
          <span className="intro-line block">Design-led engineer</span>
        </span>
        <span className="block overflow-hidden">
          <span className="intro-line block text-muted">building for the web.</span>
        </span>
      </h2>

      <p className="intro-fade mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:mt-8 sm:text-base md:text-lg">
        {site.statement}
      </p>

      <div className="intro-fade capabilities-row mt-8 border-t border-line pt-6 sm:mt-10 sm:pt-8">
        {capabilities.map((item) => (
          <span key={item} className="label-mono text-muted">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
