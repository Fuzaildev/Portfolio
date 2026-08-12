"use client";

import { useEffect, useState } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { indexNav, site } from "@/data/portfolio";

export function IdentityRail() {
  const [active, setActive] = useState("intro");

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
    const nav = document.querySelector(".folio-mobile-nav-track");
    const activeBtn = nav?.querySelector<HTMLElement>(
      `.folio-mobile-nav-item.is-active`
    );
    activeBtn?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="folio-rail">
      <div className="folio-rail-top">
        <div className="folio-rail-brand">
          <p className="label-mono text-muted">{site.location}</p>
          <h1 className="display-serif folio-name mt-3 font-semibold sm:mt-4">
            {site.name}
          </h1>
          <p className="folio-role mt-3 max-w-sm text-sm leading-relaxed text-muted sm:mt-4 md:text-[0.95rem]">
            {site.role}
          </p>
          <p className="folio-statement mt-5 hidden max-w-prose text-sm leading-relaxed text-muted md:block">
            {site.statement}
          </p>
        </div>

        <nav aria-label="Section index" className="folio-rail-nav hidden lg:block">
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

      <nav
        aria-label="Mobile section index"
        className="folio-mobile-nav lg:hidden"
        data-lenis-prevent
      >
        <div className="folio-mobile-nav-track">
          {indexNav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`folio-mobile-nav-item ${
                active === item.id ? "is-active" : ""
              }`}
            >
              <span className="label-mono">{item.num}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="folio-rail-footer">
        {/* <a
          href={`mailto:${site.email}`}
          className="folio-email label-mono text-ink underline-offset-4 hover:underline"
        >
          {site.email}
        </a> */}
        <p className="folio-email label-mono text-muted">
          Reach out on socials for work
        </p>
        <SocialLinks className="folio-social flex gap-2 lg:hidden" />
      </div>
    </aside>
  );
}
