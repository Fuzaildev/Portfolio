"use client";

import { useCallback, type MouseEvent } from "react";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { whenLayoutReady } from "@/lib/gsap";

export function useScrollToSection() {
  const lenis = useLenis();

  const scrollToId = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;
      if (lenis) lenis.scrollTo(el, { offset: 0 });
      else el.scrollIntoView({ behavior: "smooth" });
      return true;
    },
    [lenis]
  );

  const onSectionClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, id: string) => {
      if (scrollToId(id)) event.preventDefault();
    },
    [scrollToId]
  );

  const scrollToHashIfPresent = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    void whenLayoutReady().then(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: 0 });
      else el.scrollIntoView({ behavior: "smooth" });
    });
  }, [lenis]);

  return { lenis, scrollToId, onSectionClick, scrollToHashIfPresent };
}
