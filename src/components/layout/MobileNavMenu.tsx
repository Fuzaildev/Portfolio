"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { indexNav } from "@/data/portfolio";

type MobileNavMenuProps = {
  active: string;
  onNavigate: (id: string) => void;
};

export function MobileNavMenu({ active, onNavigate }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLElement>(null);
  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineBottomRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isFirstRender = useRef(true);

  const close = useCallback(() => setOpen(false), []);

  const handleNavigate = (id: string) => {
    close();
    onNavigate(id);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    const items = itemsRef.current?.querySelectorAll(".folio-menu-item");
    const lineTop = lineTopRef.current;
    const lineBottom = lineBottomRef.current;

    if (!overlay || !backdrop || !panel || !items?.length || !lineTop || !lineBottom) {
      return;
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
      gsap.set(overlay, { visibility: "hidden", pointerEvents: "none" });
      gsap.set(backdrop, { opacity: 0 });
      gsap.set(panel, { clipPath: "inset(0 0 100% 0 round 0px)" });
      gsap.set(items, { y: "120%", opacity: 0, rotateX: -12 });
      gsap.set([lineTop, lineBottom], { y: 0, rotate: 0 });
      return;
    }

    tlRef.current?.kill();

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onStart: () => {
        if (open) overlay.setAttribute("data-open", "");
      },
      onReverseComplete: () => {
        if (!open) overlay.removeAttribute("data-open");
      },
    });

    if (open) {
      gsap.set(overlay, { visibility: "visible", pointerEvents: "auto" });

      tl.fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        0
      )
        .fromTo(
          panel,
          { clipPath: "inset(0 0 100% 0 round 0px)" },
          { clipPath: "inset(0 0 0% 0 round 0px)", duration: 0.55 },
          0
        )
        .fromTo(
          items,
          { y: "120%", opacity: 0, rotateX: -12 },
          {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            stagger: 0.07,
            duration: 0.6,
            ease: "power4.out",
          },
          0.12
        )
        .to(
          lineTop,
          { y: 5, rotate: 45, duration: 0.38, ease: "power2.inOut" },
          0
        )
        .to(
          lineBottom,
          { y: -5, rotate: -45, duration: 0.38, ease: "power2.inOut" },
          0
        );
    } else {
      tl.to(lineTop, { y: 0, rotate: 0, duration: 0.32, ease: "power2.inOut" }, 0)
        .to(
          lineBottom,
          { y: 0, rotate: 0, duration: 0.32, ease: "power2.inOut" },
          0
        )
        .to(
          items,
          {
            y: "-30%",
            opacity: 0,
            stagger: 0.04,
            duration: 0.3,
            ease: "power2.in",
          },
          0.05
        )
        .to(
          panel,
          { clipPath: "inset(0 0 100% 0 round 0px)", duration: 0.4 },
          0.1
        )
        .to(backdrop, { opacity: 0, duration: 0.3 }, 0.15)
        .set(overlay, { visibility: "hidden", pointerEvents: "none" });
    }

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`folio-hamburger lg:hidden ${open ? "is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="folio-mobile-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="folio-hamburger-lines" aria-hidden="true">
          <span ref={lineTopRef} className="folio-hamburger-line folio-hamburger-line--top" />
          <span ref={lineBottomRef} className="folio-hamburger-line folio-hamburger-line--bottom" />
        </span>
      </button>

      <div
        ref={overlayRef}
        id="folio-mobile-menu"
        className="folio-menu-overlay lg:hidden"
        aria-hidden={!open}
      >
        <div
          ref={backdropRef}
          className="folio-menu-backdrop"
          onClick={close}
          aria-hidden="true"
        />
        <div ref={panelRef} className="folio-menu-panel" data-lenis-prevent>
          <nav ref={itemsRef} className="folio-menu-list" aria-label="Sections">
            {indexNav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`folio-menu-item ${
                  active === item.id ? "is-active" : ""
                }`}
              >
                <span className="folio-menu-item-num label-mono">{item.num}</span>
                <span className="folio-menu-item-label">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
