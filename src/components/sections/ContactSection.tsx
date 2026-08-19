"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/portfolio";
import { prefersReducedMotion } from "@/lib/motion";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contactHref = site.email
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`
    : site.social.linkedin;
  const contactLabel = site.email || "Message on LinkedIn";

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
          Open to new opportunities.
        </h2>

        <p className="contact-copy mt-5 max-w-xl text-sm leading-relaxed sm:mt-6 sm:text-base md:text-lg">
          If you need someone who can own features across the stack, send a
          message. I read every inquiry.
        </p>

        <a
          href={contactHref}
          className="contact-cta mt-8 sm:mt-10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-cta-label">{contactLabel}</span>
          <span className="contact-cta-icon" aria-hidden="true">
            <span className="contact-cta-arrow">↗</span>
            <span className="contact-cta-arrow">↗</span>
          </span>
        </a>

        <SocialLinks className="contact-social mt-8 flex flex-wrap sm:mt-10" />
      </div>
    </footer>
  );
}
