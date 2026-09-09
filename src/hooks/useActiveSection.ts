"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { indexNav } from "@/data/portfolio";

function sectionFromPath(pathname: string) {
  return pathname.startsWith("/work") ? "work" : "intro";
}

export function useActiveSection() {
  const pathname = usePathname();
  const routeSection = sectionFromPath(pathname);
  const [scrollSection, setScrollSection] = useState<string | null>(null);
  const [trackedPath, setTrackedPath] = useState(pathname);

  if (pathname !== trackedPath) {
    setTrackedPath(pathname);
    setScrollSection(null);
  }

  useEffect(() => {
    const sections = indexNav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollSection(entry.target.id);
            return;
          }
          if (pathname.startsWith("/work") && entry.target.id === "contact") {
            setScrollSection("work");
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return scrollSection ?? routeSection;
}
