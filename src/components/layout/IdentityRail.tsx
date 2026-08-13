"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SocialLinks } from "@/components/SocialLinks";
import { MobileNavMenu } from "@/components/layout/MobileNavMenu";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { indexNav, site } from "@/data/portfolio";
import { prefersReducedMotion } from "@/lib/motion";

const firstName = site.name.split(" ")[0];
const lastName = site.name.slice(firstName.length);

export function IdentityRail() {
  const railRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const compactRef = useRef(false);
  const [active, setActive] = useState("intro");
  const [compact, setCompact] = useState(false);
  const lenis = useLenis();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".rail-boot", {
        opacity: 0,
        y: 18,
        duration: 0.85,
        stagger: 0.07,
        ease: "power3.out",
      });

      gsap.from(".rail-link", {
        opacity: 0,
        x: -12,
        duration: 0.7,
        stagger: 0.06,
        delay: 0.12,
        ease: "power3.out",
      });
    },
    { scope: railRef }
  );

  useEffect(() => {
    const sections = indexNav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nav = railRef.current?.querySelector(".folio-rail-nav");
    const activeLink = nav?.querySelector<HTMLElement>(".rail-link.is-active");
    const indicator = indicatorRef.current;
    if (!nav || !activeLink || !indicator) return;

    gsap.to(indicator, {
      y: activeLink.offsetTop,
      height: activeLink.offsetHeight,
      duration: prefersReducedMotion() ? 0 : 0.45,
      ease: "power3.out",
    });
  }, [active]);

  useEffect(() => {
    const isMobileNav = () => window.matchMedia("(max-width: 1023px)").matches;

    const applyCompact = (scrollY: number) => {
      const next = !isMobileNav()
        ? false
        : compactRef.current
          ? scrollY > 12
          : scrollY > 40;

      if (next === compactRef.current) return;
      compactRef.current = next;
      setCompact(next);
      document.documentElement.classList.toggle("folio-nav-compact", next);
    };

    const onWindowScroll = () => {
      applyCompact(window.scrollY);
    };

    const onLenisScroll = (instance: NonNullable<typeof lenis>) => {
      if (progressRef.current) {
        gsap.set(progressRef.current, { scaleY: instance.progress });
      }
      applyCompact(instance.scroll);
    };

    const onResize = () => {
      applyCompact(lenis?.scroll ?? window.scrollY);
    };

    applyCompact(lenis?.scroll ?? window.scrollY);
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    window.addEventListener("resize", onResize);
    if (lenis) lenis.on("scroll", onLenisScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("resize", onResize);
      lenis?.off("scroll", onLenisScroll);
      document.documentElement.classList.remove("folio-nav-compact");
    };
  }, [lenis]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: 0 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside ref={railRef} className={`folio-rail${compact ? " is-compact" : ""}`}>
      <div className="folio-rail-top">
        <div className="folio-rail-header">
          <div className="folio-rail-brand">
            <p className="rail-boot folio-location label-mono text-muted">
              {site.location}
            </p>
            <h1 className="rail-boot display-serif folio-name font-semibold">
              <button
                type="button"
                className="folio-name-first"
                onClick={() => scrollTo("intro")}
                aria-label={`${site.name}, back to top`}
              >
                {firstName}
              </button>
              <span className="folio-name-last">{lastName}</span>
            </h1>
            <p className="rail-boot folio-role max-w-sm text-sm leading-relaxed text-muted md:text-[0.95rem]">
              {site.role}
            </p>
            <p className="rail-boot folio-statement mt-5 hidden max-w-prose text-sm leading-relaxed text-muted md:block">
              {site.statement}
            </p>
          </div>

          <MobileNavMenu active={active} onNavigate={scrollTo} />
        </div>

        <nav aria-label="Section index" className="folio-rail-nav hidden lg:block">
          <span className="rail-progress" aria-hidden="true">
            <span ref={progressRef} className="rail-progress-bar" />
          </span>
          <span ref={indicatorRef} className="rail-indicator" aria-hidden="true" />
          {indexNav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`rail-link w-full text-left ${
                active === item.id ? "is-active" : ""
              }`}
            >
              <span className="label-mono">{item.num}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="folio-rail-footer">
        <p className="rail-boot folio-email label-mono text-muted">
          Open to new work
        </p>
        <SocialLinks magnetic className="folio-social mt-3 flex gap-2" />
      </div>
    </aside>
  );
}
