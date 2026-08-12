"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { site } from "@/data/portfolio";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-block", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-block">
      <p className="contact-block label-mono text-muted">05 / Contact</p>

      <h2 className="contact-block display-serif contact-headline mt-3 font-medium sm:mt-4">
        Open for the right project.
      </h2>

      <p className="contact-block mt-5 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
        If you&apos;re building something that needs strong design, solid engineering,
        or both — send a note. I reply to every thoughtful message.
      </p>

      <a
        href={`mailto:${site.email}`}
        className="contact-block contact-email group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-ink pb-2 sm:mt-10"
      >
        {site.email}
        <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </a>

      <div className="contact-block contact-social mt-8 flex flex-wrap gap-4 sm:mt-10 sm:gap-6">
        {Object.entries(site.social).map(([key, href]) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono inline-flex min-h-11 items-center capitalize text-muted transition-colors hover:text-ink"
          >
            {key}
          </a>
        ))}
      </div>
    </section>
  );
}
