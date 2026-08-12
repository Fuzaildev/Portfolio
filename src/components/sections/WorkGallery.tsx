"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, whenLayoutReady } from "@/lib/gsap";
import { projects } from "@/data/portfolio";

export function WorkGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const pin = pinRef.current;
    const scroller = scrollerRef.current;
    if (!section || !track || !pin || !scroller) return;

    let cancelled = false;
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.from(".work-headline", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    }, sectionRef);

    whenLayoutReady().then(() => {
      if (cancelled) return;

      mm.add("(min-width: 1024px)", () => {
        gsap.set(track, { x: 0 });

        const getScrollDistance = () =>
          Math.max(track.scrollWidth - scroller.clientWidth, 0);

        const snapPoints =
          projects.length <= 1
            ? [0]
            : projects.map((_, i) => i / (projects.length - 1));

        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            id: "work-gallery",
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(getScrollDistance(), 1)}`,
            pin: pin,
            pinSpacing: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            snap: {
              snapTo: (value) => gsap.utils.snap(snapPoints, value),
              duration: { min: 0.15, max: 0.45 },
              ease: "power1.inOut",
            },
            onUpdate: (self) => {
              const index = Math.round(self.progress * (projects.length - 1));
              setActiveIndex(index);
            },
          },
        });

        const trigger = tween.scrollTrigger;
        scrollTriggerRef.current = trigger ?? null;

        // Sync transform + counter to the current scroll position after layout.
        ScrollTrigger.refresh();
        trigger?.update();
        if (trigger) {
          tween.progress(trigger.progress);
          setActiveIndex(
            Math.round(trigger.progress * (projects.length - 1))
          );
        }

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
      ctx.revert();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      if (window.innerWidth >= 1024) return;

      const panels = Array.from(
        scroller.querySelectorAll<HTMLElement>(".project-panel")
      );
      if (!panels.length) return;

      const scrollerRect = scroller.getBoundingClientRect();
      const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;

      let closest = 0;
      let closestDistance = Infinity;

      panels.forEach((panel, index) => {
        const panelRect = panel.getBoundingClientRect();
        const panelCenter = panelRect.left + panelRect.width / 2;
        const distance = Math.abs(scrollerCenter - panelCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProject = (index: number) => {
    if (index < 0 || index >= projects.length) return;

    if (window.innerWidth >= 1024) {
      const trigger = scrollTriggerRef.current;
      if (trigger && projects.length > 1) {
        const progress = index / (projects.length - 1);
        const target =
          trigger.start + (trigger.end - trigger.start) * progress;
        window.scrollTo({ top: target, behavior: "smooth" });
      }
      setActiveIndex(index);
      return;
    }

    const scroller = scrollerRef.current;
    const panel = scroller?.querySelectorAll<HTMLElement>(".project-panel")[index];
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
      <div ref={pinRef}>
        <div className="work-headline section-head mb-6 sm:mb-8 md:mb-10">
          <div>
            <p className="label-mono text-muted">03 / Selected Work</p>
            <h2 className="display-serif section-title mt-3 font-medium sm:mt-4">
              Projects
            </h2>
          </div>
          <p className="section-aside hidden max-w-xs text-right text-sm leading-relaxed text-muted md:block">
            Selected projects from recent client and product work.
          </p>
          <p className="section-aside mt-3 text-sm leading-relaxed text-muted md:hidden">
            Swipe to browse. Tap open for details.
          </p>
        </div>

        <div className="work-controls">
          <span className="label-mono text-muted">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
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
        </div>

        <div ref={scrollerRef} className="work-scroller" data-lenis-prevent>
          <div ref={trackRef} className="work-track">
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-panel group border border-line bg-surface"
              >
                <div className="project-panel-head">
                  <span className="label-mono text-muted">{project.id}</span>
                  <span className="label-mono text-muted">{project.year}</span>
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-preview-link"
                  >
                    <div className="project-preview">
                      <span className="display-serif project-title font-medium">
                        {project.title}
                      </span>
                      <span className="project-open-btn label-mono">
                        Open project ↗
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="project-preview">
                    <span className="display-serif project-title font-medium">
                      {project.title}
                    </span>
                  </div>
                )}

                <div className="project-panel-body">
                  <p className="label-mono text-muted">{project.type}</p>
                  <p className="project-description mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>

                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item} className="label-mono text-muted">
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-footer-link label-mono"
                    >
                      View case study ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
