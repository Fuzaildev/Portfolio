"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SocialLinks } from "@/components/SocialLinks";
import { MobileNavMenu } from "@/components/layout/MobileNavMenu";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useCompactNav } from "@/hooks/useCompactNav";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { indexNav, site } from "@/data/portfolio";
import { splitSiteName } from "@/lib/brand";
import { prefersReducedMotion } from "@/lib/motion";

const { firstName, lastName } = splitSiteName();

export function IdentityRail() {
  const railRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const active = useActiveSection();
  const { lenis, scrollToId, onSectionClick, scrollToHashIfPresent } =
    useScrollToSection();
  const compact = useCompactNav(lenis, progressRef);
  const NameTag = isHome ? "h1" : "p";

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
    if (pathname !== "/") return;
    scrollToHashIfPresent();
  }, [pathname, scrollToHashIfPresent]);

  return (
    <aside ref={railRef} className={`folio-rail${compact ? " is-compact" : ""}`}>
      <div className="folio-rail-top">
        <div className="folio-rail-header">
          <div className="folio-rail-brand">
            <p className="rail-boot folio-location label-mono text-muted">
              {site.location}
            </p>
            <NameTag className="rail-boot display-serif folio-name font-semibold">
              <Link
                href="/#intro"
                className="folio-name-first"
                onClick={(event) => onSectionClick(event, "intro")}
                aria-label={`${site.name}, home`}
              >
                {firstName}
              </Link>
              <span className="folio-name-last">{lastName}</span>
            </NameTag>
            <p className="rail-boot folio-role max-w-sm text-sm leading-relaxed text-muted md:text-[0.95rem]">
              {site.role}
            </p>
            <p className="rail-boot folio-statement mt-5 hidden max-w-prose text-sm leading-relaxed text-muted md:block">
              {site.statement}
            </p>
          </div>

          <MobileNavMenu
            active={active}
            onNavigate={(id) => {
              if (!scrollToId(id)) router.push(`/#${id}`);
            }}
          />
        </div>

        <nav aria-label="Section index" className="folio-rail-nav hidden lg:block">
          <span className="rail-progress" aria-hidden="true">
            <span ref={progressRef} className="rail-progress-bar" />
          </span>
          <span ref={indicatorRef} className="rail-indicator" aria-hidden="true" />
          {indexNav.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              onClick={(event) => onSectionClick(event, item.id)}
              className={`rail-link w-full text-left ${
                active === item.id ? "is-active" : ""
              }`}
            >
              <span className="label-mono">{item.num}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="folio-rail-footer">
        <p className="rail-boot folio-email label-mono text-muted">
          Open to new work
        </p>
        <SocialLinks className="folio-social mt-3 flex gap-2" />
      </div>
    </aside>
  );
}
