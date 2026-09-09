"use client";

import { useRef } from "react";
import Link from "next/link";
import { captureProjectFlip } from "@/lib/flip-store";
import { ProjectCover } from "@/components/work/ProjectCover";
import type { Project } from "@/data/portfolio";

type ProjectPanelProps = {
  project: Project;
};

export function ProjectPanel({ project }: ProjectPanelProps) {
  const coverRef = useRef<HTMLDivElement>(null);

  const onOpen = () => {
    if (coverRef.current) {
      captureProjectFlip(coverRef.current, project.slug);
    }
  };

  return (
    <article className="project-panel group border border-line bg-surface">
      <div className="project-panel-head">
        <span className="label-mono text-muted">{project.id}</span>
        <span className="label-mono text-muted">{project.year}</span>
      </div>

      <Link
        href={`/work/${project.slug}`}
        className="project-preview-link"
        onClick={onOpen}
      >
        <div
          ref={coverRef}
          data-flip-id={`project-${project.slug}`}
          className="project-preview"
        >
          <ProjectCover
            variant={project.cover}
            title={project.title}
            image={project.coverImage}
            bleed={project.coverBleed}
          />
          <div className="project-preview-meta">
            <span className="display-serif project-title font-medium">
              {project.title}
            </span>
          </div>
        </div>
      </Link>

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

        <div className="project-footer-links">
          <Link
            href={`/work/${project.slug}`}
            className="project-footer-link label-mono"
            onClick={onOpen}
          >
            Read case study ↗
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="project-footer-link label-mono"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live site ↗
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              className="project-footer-link label-mono"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
