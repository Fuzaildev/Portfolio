"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { site } from "@/data/portfolio";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-block", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-block border-b border-line"
    >
      <p className="about-block label-mono text-muted">02 / About</p>

      <div className="about-block about-grid mt-6 sm:mt-8">
        <blockquote className="display-serif about-quote font-medium leading-tight">
          “I care about the quiet details — rhythm, spacing, hierarchy — the things
          people feel before they notice.”
        </blockquote>

        <div className="space-y-5 sm:space-y-6">
          {site.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="about-block text-sm leading-relaxed text-muted sm:text-base md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
