"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { indexNav } from "@/data/portfolio";

type MobileNavMenuProps = {
  active: string;
  onNavigate: (id: string) => void;
};

export function MobileNavMenu({ active, onNavigate }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  const handleNavigate = (id: string) => {
    close();
    onNavigate(id);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const menu = (
    <>
      <button
        type="button"
        className={`folio-hamburger lg:hidden${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="folio-mobile-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="folio-hamburger-lines" aria-hidden="true">
          <span className="folio-hamburger-line folio-hamburger-line--top" />
          <span className="folio-hamburger-line folio-hamburger-line--bottom" />
        </span>
      </button>
      <div
        id="folio-mobile-menu"
        className={`folio-menu-overlay lg:hidden${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div
          className="folio-menu-backdrop"
          onClick={close}
          aria-hidden="true"
        />
        <div className="folio-menu-panel" data-lenis-prevent>
          <nav className="folio-menu-list" aria-label="Sections">
            {indexNav.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`folio-menu-item${active === item.id ? " is-active" : ""}`}
                style={{ transitionDelay: open ? `${120 + index * 55}ms` : "0ms" }}
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

  return (
    <>
      <span className="folio-hamburger-slot lg:hidden" aria-hidden="true" />
      {mounted ? createPortal(menu, document.body) : menu}
    </>
  );
}
