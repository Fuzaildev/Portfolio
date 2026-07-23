import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScroll({ enabled = true, children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: isTouch ? 0.95 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: isTouch ? 1.35 : 1.6,
      allowNestedScroll: true,
      autoRaf: false,
      prevent: (node) =>
        node.hasAttribute?.("data-projects-carousel") ||
        Boolean(node.closest?.("[data-projects-carousel]")),
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -8,
        duration: isTouch ? 1.05 : 1.25,
      });
      history.pushState(null, "", hash);
    };

    const onResize = () => {
      lenis.resize();
    };

    document.addEventListener("click", onAnchorClick);
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      lenis.destroy();
      lenisRef.current = null;
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, [enabled]);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}
