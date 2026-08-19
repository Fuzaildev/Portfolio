"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, whenLayoutReady } from "@/lib/gsap";
import { consumeProjectFlip } from "@/lib/flip-store";
import { prefersReducedMotion } from "@/lib/motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectCover } from "@/components/work/ProjectCover";
import { getNextProject, type Project } from "@/data/portfolio";

function titleLines(title: string) {
  const words = title.split(/\s+/).filter(Boolean);
  const lines: string[] = [];

  for (const word of words) {
    if (word === "&" && lines.length > 0) {
      lines[lines.length - 1] += ` ${word}`;
    } else {
      lines.push(word);
    }
  }

  return lines;
}

export function CaseStudyView({ project }: { project: Project }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const next = getNextProject(project.slug);
  const primaryUrl = project.liveUrl ?? project.repoUrl;
  const primaryLabel = project.liveUrl
    ? "Visit live site ↗"
    : "View on GitHub ↗";
  const titleWords = titleLines(project.title);
  const chapters = [
    { id: "01", title: "Overview", body: project.overview },
    { id: "02", title: "Challenge", body: project.challenge },
    { id: "03", title: "Outcome", body: project.outcome },
  ];

  useGSAP(
    () => {
      const cover = coverRef.current;
      const reduced = prefersReducedMotion();

      if (cover && !reduced) {
        const flip = consumeProjectFlip(cover, project.slug);
        if (!flip) {
          gsap.fromTo(
            cover,
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );
        }

        gsap.fromTo(
          cover.querySelector(".project-cover-art"),
          { scale: 1.08 },
          { scale: 1, duration: 1.45, ease: "power3.out" }
        );
      }

      if (reduced) return;

      const load = gsap.timeline({ defaults: { ease: "power4.out" } });
      load.from(".case-line", {
        yPercent: 110,
        duration: 1.05,
        stagger: 0.08,
        delay: 0.05,
      });
      load.from(
        ".case-hero-copy",
        { opacity: 0, y: 18, duration: 0.75 },
        "-=0.55"
      );
      load.from(".case-stat", { opacity: 0, y: 16, duration: 0.6, stagger: 0.06 }, "-=0.35");

      gsap.utils.toArray<HTMLElement>(".case-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          }
        );
      });

      gsap.fromTo(
        ".case-market",
        { yPercent: 40, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".case-markets",
            start: "top 82%",
          },
        }
      );

      whenLayoutReady().then(() => ScrollTrigger.refresh());
    },
    { scope: pageRef, dependencies: [project.slug] }
  );

  return (
    <article ref={pageRef} className="case-study">
      <PageHeader />

      <section className="case-hero">
        <div className="case-hero-kicker">
          <p className="label-mono text-muted">
            {project.id} /{" "}
            <Link href="/#work" className="case-back">
              Selected work
            </Link>
          </p>
          <p className="label-mono text-muted">
            {project.year} · {project.type}
          </p>
        </div>

        <h1 className="display-serif case-title font-medium">
          {titleWords.map((word) => (
            <span key={word} className="case-title-line">
              <span className="case-line">{word}</span>
            </span>
          ))}
        </h1>

        <div className="case-hero-copy">
          <p className="case-lede">{project.description}</p>
          {primaryUrl ? (
            <a
              href={primaryUrl}
              className="case-live-btn label-mono case-hero-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {primaryLabel}
            </a>
          ) : null}
        </div>
      </section>

      <div
        ref={coverRef}
        data-flip-id={`project-${project.slug}`}
        className="case-stage"
      >
        <ProjectCover
          variant={project.cover}
          title={project.title}
          image={project.coverImage}
          bleed={project.coverBleed}
        />
        {project.stats?.length ? (
          <dl className="case-stage-stats">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="label-mono text-muted">{stat.label}</dt>
                <dd className="display-serif case-stat-value">{stat.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>

      {project.stats?.length ? (
        <dl className="case-stats">
          {project.stats.map((stat) => (
            <div key={stat.label} className="case-stat">
              <dt className="label-mono text-muted">{stat.label}</dt>
              <dd className="display-serif case-stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <dl className="case-meta">
        <div>
          <dt className="label-mono text-muted">Role</dt>
          <dd>{project.role}</dd>
        </div>
        {project.client ? (
          <div>
            <dt className="label-mono text-muted">Client</dt>
            <dd>{project.client}</dd>
          </div>
        ) : null}
        <div>
          <dt className="label-mono text-muted">Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt className="label-mono text-muted">Stack</dt>
          <dd>{project.stack.join(" · ")}</dd>
        </div>
      </dl>

      {chapters.slice(0, 2).map((chapter) => (
        <section key={chapter.id} className="case-chapter case-reveal">
          <p className="label-mono text-muted case-chapter-index">
            {chapter.id} / {chapter.title}
          </p>
          <div>
            <h2 className="sr-only">{chapter.title}</h2>
            <p className="case-prose">{chapter.body}</p>
          </div>
        </section>
      ))}

      {project.quote ? (
        <blockquote className="case-quote case-reveal">
          <p className="display-serif">{project.quote}</p>
        </blockquote>
      ) : null}

      {project.modules?.length ? (
        <section className="case-modules-wrap">
          <div className="case-chapter-head case-reveal">
            <p className="label-mono text-muted">04 / Platform</p>
            <h2 className="display-serif case-section-title font-medium">
              {project.modulesHeading ?? "The platform."}
            </h2>
          </div>
          <div className="case-modules">
            {project.modules.map((mod, index) => (
              <article
                key={mod.name}
                className={`case-module case-reveal${
                  index === 0 ? " is-featured" : ""
                }`}
              >
                <p className="label-mono text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="display-serif case-module-name font-medium">
                  {mod.name}
                </h3>
                <p className="case-module-detail">{mod.detail}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {project.tools?.length ? (
        <section className="case-tools case-reveal">
          <p className="label-mono text-muted">Operational tools</p>
          <ul>
            {project.tools.map((tool) => (
              <li key={tool} className="label-mono">
                {tool}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="case-chapter case-reveal">
        <p className="label-mono text-muted case-chapter-index">
          {chapters[2].id} / {chapters[2].title}
        </p>
        <div>
          <h2 className="sr-only">{chapters[2].title}</h2>
          <p className="case-prose">{chapters[2].body}</p>
        </div>
      </section>

      {project.markets?.length ? (
        <section className="case-markets" aria-label={project.stripLabel ?? "Markets served"}>
          {project.markets.map((market) => (
            <span key={market} className="display-serif case-market">
              {market}
            </span>
          ))}
        </section>
      ) : null}

      <section className="case-highlights-wrap">
        <p className="label-mono text-muted case-reveal">05 / Highlights</p>
        <ul className="case-highlights">
          {project.highlights.map((item, index) => (
            <li key={item} className="case-reveal">
              <span className="display-serif case-highlight-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {next.slug !== project.slug ? (
        <div className="case-next">
          <p className="label-mono text-muted">Next project</p>
          <Link href={`/work/${next.slug}`} className="display-serif case-next-link">
            {next.title} →
          </Link>
        </div>
      ) : null}
    </article>
  );
}
