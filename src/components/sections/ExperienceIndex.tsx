"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { roles } from "@/data/portfolio";

export function ExperienceIndex() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-row", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-block border-b border-line"
    >
      <p className="label-mono text-muted">04 / Experience</p>
      <h2 className="display-serif section-title mt-3 font-medium sm:mt-4">
        Where I&apos;ve worked
      </h2>

      <div className="mt-8 border-t border-line sm:mt-10">
        {roles.map((role) => (
          <article key={role.id} className="exp-row exp-item">
            <div className="exp-meta">
              <p className="label-mono text-muted">{role.period}</p>
            </div>

            <div className="exp-body">
              <div className="exp-heading">
                <h3 className="display-serif exp-title font-medium">
                  {role.title}
                </h3>
                <p className="exp-company text-sm text-muted sm:text-base">
                  {role.company}
                </p>
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
