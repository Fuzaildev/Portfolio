"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import {
  gsap,
  ScrollTrigger,
  registerGsapPlugins,
  whenLayoutReady,
} from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    registerGsapPlugins();

    const reduced = prefersReducedMotion();

    const instance = new Lenis({
      duration: reduced ? 0 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduced,
      touchMultiplier: 1.2,
      autoRaf: false,
      respectReducedMotion: true,
    });

    instance.on("scroll", ScrollTrigger.update);
    lenisRef.current = instance;

    const ticker = (time: number) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => {
      instance.resize();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);
    whenLayoutReady().then(() => {
      ScrollTrigger.refresh();
    });

    const frame = window.requestAnimationFrame(() => {
      setLenis(instance);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(ticker);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
