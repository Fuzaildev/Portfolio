"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { prefersReducedMotion } from "@/lib/motion";

type CapabilitiesMarqueeProps = {
  items: string[];
};

export function CapabilitiesMarquee({ items }: CapabilitiesMarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      const root = rootRef.current;
      const track = trackRef.current;
      if (!root || !track || prefersReducedMotion()) return;

      const sequence = track.querySelector<HTMLElement>(".marquee-sequence");
      if (!sequence) return;

      const distance = sequence.offsetWidth;
      if (!distance) return;

      const tween = gsap.to(track, {
        x: -distance,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      const onEnter = () => tween.pause();
      const onLeave = () => tween.resume();
      root.addEventListener("mouseenter", onEnter);
      root.addEventListener("mouseleave", onLeave);

      let lastScroll = lenis?.scroll ?? 0;
      const onScroll = (instance: NonNullable<typeof lenis>) => {
        const velocity = instance.scroll - lastScroll;
        lastScroll = instance.scroll;
        const boost = Math.min(Math.abs(velocity) * 0.025, 2.2);
        tween.timeScale(velocity < 0 ? -(1 + boost) : 1 + boost);
      };

      lenis?.on("scroll", onScroll);

      return () => {
        root.removeEventListener("mouseenter", onEnter);
        root.removeEventListener("mouseleave", onLeave);
        lenis?.off("scroll", onScroll);
      };
    },
    { scope: rootRef, dependencies: [lenis, items] }
  );

  return (
    <div ref={rootRef} className="marquee" aria-label="Capabilities">
      <div ref={trackRef} className="marquee-track">
        <div className="marquee-sequence">
          {items.map((item) => (
            <span key={`a-${item}`} className="label-mono text-muted">
              {item}
            </span>
          ))}
        </div>
        <div className="marquee-sequence" aria-hidden="true">
          {items.map((item) => (
            <span key={`b-${item}`} className="label-mono text-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
