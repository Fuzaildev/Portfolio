"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import type Lenis from "lenis";
import { gsap } from "@/lib/gsap";
import { isDesktopViewport } from "@/lib/breakpoints";

const COMPACT_ENTER = 40;
const COMPACT_EXIT = 12;

export function useCompactNav(
  lenis: Lenis | null,
  progressRef?: RefObject<HTMLElement | null>
) {
  const compactRef = useRef(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const applyCompact = (scrollY: number) => {
      const next = isDesktopViewport()
        ? false
        : compactRef.current
          ? scrollY > COMPACT_EXIT
          : scrollY > COMPACT_ENTER;

      if (next === compactRef.current) return;
      compactRef.current = next;
      setCompact(next);
      document.documentElement.classList.toggle("folio-nav-compact", next);
    };

    const onWindowScroll = () => {
      applyCompact(window.scrollY);
    };

    const onLenisScroll = (instance: Lenis) => {
      if (progressRef?.current) {
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
  }, [lenis, progressRef]);

  return compact;
}
