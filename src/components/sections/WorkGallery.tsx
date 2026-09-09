"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, whenLayoutReady } from "@/lib/gsap";
import { DESKTOP_MQ, isDesktopViewport } from "@/lib/breakpoints";
import { findClosestIndex, padIndex } from "@/lib/dom";
import { prefersReducedMotion } from "@/lib/motion";
import { ProjectPanel } from "@/components/work/ProjectPanel";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { projects } from "@/data/portfolio";

function setProgress(el: HTMLElement | null, index: number) {
  if (!el || projects.length < 2) return;
  el.style.transform = `scaleX(${index / (projects.length - 1)})`;
}

export function WorkGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const pin = pinRef.current;
    const scroller = scrollerRef.current;
    if (!section || !track || !pin || !scroller) return;

    let cancelled = false;
    const mm = gsap.matchMedia();
    const reduced = prefersReducedMotion();

    whenLayoutReady().then(() => {
      if (cancelled) return;

      mm.add(DESKTOP_MQ, () => {
        if (reduced || projects.length < 2) return;

        const panels = Array.from(
          track.querySelectorAll<HTMLElement>(".project-panel")
        );
        let distance = 0;

        const measureDistance = () => {
          gsap.set(track, { x: 0 });
          const first = panels[0];
          const last = panels[panels.length - 1];
          distance =
            first && last ? Math.max(last.offsetLeft - first.offsetLeft, 0) : 0;
        };

        const syncVisibleCard = () => {
          const origin = scroller.getBoundingClientRect().left;
          const closest = findClosestIndex(panels, origin, "edge");
          setActiveIndex(closest);

          if (progressRef.current && projects.length > 1) {
            gsap.set(progressRef.current, {
              scaleX: closest / (projects.length - 1),
            });
          }
        };

        measureDistance();

        const tween = gsap.to(track, {
          x: () => -distance,
          ease: "none",
          scrollTrigger: {
            id: "work-gallery",
            trigger: pin,
            start: "top top",
            end: () => `+=${Math.max(distance, 1)}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.15,
            invalidateOnRefresh: true,
            onRefreshInit: measureDistance,
            onUpdate: syncVisibleCard,
          },
        });

        const trigger = tween.scrollTrigger;
        scrollTriggerRef.current = trigger ?? null;

        ScrollTrigger.refresh();
        trigger?.update();
        syncVisibleCard();

        return () => {
          scrollTriggerRef.current = null;
          tween.scrollTrigger?.kill();
          gsap.set(track, { clearProps: "transform" });
        };
      });
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      mm.revert();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      if (isDesktopViewport() && !prefersReducedMotion()) return;

      const panels = Array.from(
        scroller.querySelectorAll<HTMLElement>(".project-panel")
      );
      if (!panels.length) return;

      const scrollerRect = scroller.getBoundingClientRect();
      const origin = scrollerRect.left + scrollerRect.width / 2;
      const closest = findClosestIndex(panels, origin, "center");

      setActiveIndex(closest);
      setProgress(progressRef.current, closest);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProject = (index: number) => {
    if (index < 0 || index >= projects.length) return;

    if (isDesktopViewport() && !prefersReducedMotion()) {
      const trigger = scrollTriggerRef.current;
      if (trigger && projects.length > 1) {
        const progress = index / (projects.length - 1);
        const target =
          trigger.start + (trigger.end - trigger.start) * progress;
        if (lenis) lenis.scrollTo(target, { immediate: false });
        else window.scrollTo({ top: target, behavior: "smooth" });
      }
      setActiveIndex(index);
      return;
    }

    const scroller = scrollerRef.current;
    const panel = scroller?.querySelectorAll<HTMLElement>(".project-panel")[
      index
    ];
    if (!panel || !scroller) return;

    const offset =
      panel.offsetLeft - (scroller.clientWidth - panel.clientWidth) / 2;

    scroller.scrollTo({
      left: Math.max(0, offset),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section-block border-b border-line"
    >
      <div ref={pinRef} className="work-pin work-bleed">
        <div className="work-headline section-head mb-6 sm:mb-8 md:mb-10">
          <div>
            <p className="label-mono text-muted">03 / Selected Work</p>
            <h2 className="display-serif section-title mt-3 font-medium sm:mt-4">
              Projects
            </h2>
          </div>
          <p className="section-aside hidden max-w-xs text-right text-sm leading-relaxed text-muted md:block">
            Open a cover for the case study.
          </p>
          <p className="section-aside mt-3 text-sm leading-relaxed text-muted md:hidden">
            Swipe to browse. Tap a cover for the case study.
          </p>
        </div>

        <div className="work-controls">
          <div className="work-progress-meta">
            <span className="label-mono text-muted">
              {padIndex(activeIndex + 1)} / {padIndex(projects.length)}
            </span>
            <div className="work-progress" aria-hidden="true">
              <span
                ref={progressRef}
                className="work-progress-bar"
                style={
                  projects.length < 2 ? { transform: "scaleX(1)" } : undefined
                }
              />
            </div>
          </div>
          {projects.length > 1 ? (
            <div className="work-controls-nav">
              <button
                type="button"
                className="work-nav-btn"
                aria-label="Previous project"
                disabled={activeIndex === 0}
                onClick={() => scrollToProject(activeIndex - 1)}
              >
                ←
              </button>
              <button
                type="button"
                className="work-nav-btn"
                aria-label="Next project"
                disabled={activeIndex === projects.length - 1}
                onClick={() => scrollToProject(activeIndex + 1)}
              >
                →
              </button>
            </div>
          ) : null}
        </div>

        <div ref={scrollerRef} className="work-scroller" data-lenis-prevent>
          <div ref={trackRef} className="work-track">
            {projects.map((project) => (
              <ProjectPanel key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
