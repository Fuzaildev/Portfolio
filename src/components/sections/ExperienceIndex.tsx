"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { roles } from "@/data/portfolio";
import { prefersReducedMotion } from "@/lib/motion";

/** The work gallery pins asynchronously above this section; measure after it. */
const AFTER_PINS = -1;

export function ExperienceIndex() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || prefersReducedMotion()) return;

      const progress = section.querySelector<HTMLElement>(".exp-timeline-progress");
      const traveler = section.querySelector<HTMLElement>(".exp-traveler");
      const items = gsap.utils.toArray<HTMLElement>(".exp-item");

      if (progress && traveler) {
        gsap.set(progress, { scaleY: 0, transformOrigin: "top center" });
        gsap.set(traveler, { top: "0%" });

        const state = { p: 0 };
        const follow = gsap.quickTo(state, "p", {
          duration: 0.55,
          ease: "power3.out",
          onUpdate: () => {
            gsap.set(progress, { scaleY: state.p });
            gsap.set(traveler, { top: `${state.p * 100}%` });
          },
        });

        ScrollTrigger.create({
          trigger: ".exp-list",
          start: "top 70%",
          end: "bottom 55%",
          refreshPriority: AFTER_PINS,
          onUpdate: (self) => follow(self.progress),
          onRefresh: (self) => follow(self.progress),
        });
      }

      items.forEach((item, index) => {
        if (index === 0) item.classList.add("is-active");

        ScrollTrigger.create({
          trigger: item,
          start: "top 55%",
          end: "bottom 55%",
          refreshPriority: AFTER_PINS,
          onToggle: (self) => {
            item.classList.toggle("is-active", self.isActive);
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-block border-b border-line"
    >
      <p className="label-mono text-muted">04 / Experience</p>
      <h2 className="display-serif section-title mt-3 font-medium sm:mt-4">
        Professional experience
      </h2>

      <div className="exp-list mt-8 sm:mt-10">
        <div className="exp-timeline" aria-hidden="true">
          <span className="exp-timeline-line" />
          <span className="exp-timeline-progress" />
          <span className="exp-traveler" />
        </div>

        {roles.map((role, index) => (
          <article
            key={role.id}
            className={`exp-item${index === 0 ? " is-active" : ""}`}
          >
            <div className="exp-dot" aria-hidden="true" />

            <div className="exp-meta">
              <p className="label-mono text-muted">{role.period}</p>
            </div>

            <div className="exp-body">
              <div className="exp-heading">
                <h3 className="display-serif exp-title font-medium">
                  {role.title}
                </h3>
                <p className="exp-company">{role.company}</p>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                {role.summary}
              </p>

              <ul className="mt-4 space-y-2 sm:mt-5">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
                  >
                    <span className="mt-[0.55rem] h-px w-4 shrink-0 bg-line" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
