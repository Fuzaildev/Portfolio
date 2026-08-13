"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { aboutQuote, site } from "@/data/portfolio";
import { prefersReducedMotion } from "@/lib/motion";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".about-quote-line", {
        yPercent: 110,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      gsap.from(".about-fact", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-facts",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-block border-b border-line"
    >
      <p className="label-mono text-muted">02 / About</p>

      <div className="about-grid mt-6 sm:mt-8">
        <blockquote className="display-serif about-quote font-medium leading-tight">
          {aboutQuote.map((line) => (
            <span key={line} className="block overflow-hidden">
              <span className="about-quote-line block">{line}</span>
            </span>
          ))}
        </blockquote>

        <div className="space-y-5 sm:space-y-6">
          {site.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-sm leading-relaxed text-muted sm:text-base md:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <dl className="about-facts">
            {site.facts.map((fact) => (
              <div key={fact.label} className="about-fact">
                <dt className="label-mono text-muted">{fact.label}</dt>
                <dd className="mt-1 text-sm sm:text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
