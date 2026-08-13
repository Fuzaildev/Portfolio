"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { consumeProjectFlip } from "@/lib/flip-store";
import { prefersReducedMotion } from "@/lib/motion";
import { Magnetic } from "@/components/motion/Magnetic";
import { ProjectCover } from "@/components/work/ProjectCover";
import { getNextProject, site, type Project } from "@/data/portfolio";

export function CaseStudyView({ project }: { project: Project }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const next = getNextProject(project.slug);

  useGSAP(
    () => {
      const cover = coverRef.current;
      const reduced = prefersReducedMotion();

      if (cover && !reduced) {
        const flip = consumeProjectFlip(cover, project.slug);
        if (!flip) {
          gsap.from(cover, {
            opacity: 0,
            y: 28,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      }

      if (reduced) return;

      gsap.from(".case-line", {
        yPercent: 110,
        duration: 0.95,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.15,
      });

      gsap.from(".case-fade", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.28,
      });
    },
    { scope: pageRef, dependencies: [project.slug] }
  );

  return (
    <div ref={pageRef} className="case-page">
      <header className="case-header">
        <Link href="/#work" className="case-back label-mono">
          ← Selected work
        </Link>
        <p className="label-mono text-muted">{site.name}</p>
      </header>

      <section className="case-hero">
        <p className="case-fade label-mono text-muted">
          {project.id} / {project.year} / {project.type}
        </p>
        <h1 className="display-serif case-title mt-4 font-medium">
          <span className="block overflow-hidden">
            <span className="case-line block">{project.title}</span>
          </span>
        </h1>
        <p className="case-fade case-lede mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
          {project.description}
        </p>
      </section>

      <div
        ref={coverRef}
        data-flip-id={`project-${project.slug}`}
        className="case-cover"
      >
        <ProjectCover variant={project.cover} title={project.title} />
      </div>

      <dl className="case-fade case-meta">
        <div>
          <dt className="label-mono text-muted">Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt className="label-mono text-muted">Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt className="label-mono text-muted">Stack</dt>
          <dd>{project.stack.join(" · ")}</dd>
        </div>
      </dl>

      <div className="case-grid">
        <article className="case-fade">
          <h2 className="label-mono text-muted">Overview</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {project.overview}
          </p>
        </article>
        <article className="case-fade">
          <h2 className="label-mono text-muted">Challenge</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {project.challenge}
          </p>
        </article>
        <article className="case-fade case-span">
          <h2 className="label-mono text-muted">Outcome</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {project.outcome}
          </p>
        </article>
      </div>

      <ul className="case-highlights">
        {project.highlights.map((item) => (
          <li key={item} className="case-fade">
            <span className="label-mono text-muted">+</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <footer className="case-next">
        <p className="label-mono text-muted">Next project</p>
        <Magnetic className="mt-3 inline-flex" strength={0.22} radius={100}>
          <Link
            href={`/work/${next.slug}`}
            className="display-serif case-next-link"
            onClick={() => {
              /* no flip from this page — keep the handoff quiet */
            }}
          >
            {next.title} →
          </Link>
        </Magnetic>
      </footer>
    </div>
  );
}
