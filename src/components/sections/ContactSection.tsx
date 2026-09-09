"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ProfileLinks } from "@/components/ProfileLinks";
import { getContactHref } from "@/lib/contact";
import { prefersReducedMotion } from "@/lib/motion";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contactHref = getContactHref();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        ".contact-headline",
        { scale: 0.96 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 32%",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <footer id="contact" ref={sectionRef} className="contact-invert">
      <div className="contact-invert-inner">
        <p className="label-mono contact-muted">05 / Contact</p>

        <h2 className="display-serif contact-headline mt-3 font-medium sm:mt-4">
          Have a product to build?
        </h2>

        <p className="contact-copy mt-5 max-w-xl text-sm leading-relaxed sm:mt-6 sm:text-base md:text-lg">
          I&apos;m open to full-time roles, freelance projects, and interesting
          products where I can own work across the stack.
        </p>

        <a
          href={contactHref}
          className="contact-cta mt-8 sm:mt-10"
        >
          <span className="contact-cta-label">Let&apos;s talk</span>
          <span className="contact-cta-icon" aria-hidden="true">
            <span className="contact-cta-arrow">↗</span>
            <span className="contact-cta-arrow">↗</span>
          </span>
        </a>

        <ProfileLinks className="contact-profiles mt-8 sm:mt-10" />
      </div>
    </footer>
  );
}
