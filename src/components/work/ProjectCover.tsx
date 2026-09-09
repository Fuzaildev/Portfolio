import Image from "next/image";
import type { ProjectCoverVariant } from "@/data/portfolio";

type ProjectCoverProps = {
  variant: ProjectCoverVariant;
  title: string;
  image?: string;
  bleed?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProjectCover({
  variant,
  title,
  image,
  bleed = false,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 35rem, 100vw",
}: ProjectCoverProps) {
  return (
    <div
      className={`project-cover project-cover--${variant}${
        image ? " project-cover--image" : ""
      }${bleed ? " project-cover--bleed" : ""} ${className}`}
    >
      {image ? (
        <Image
          src={image}
          alt={`${title} cover`}
          fill
          sizes={sizes}
          className="project-cover-art"
          priority={priority}
        />
      ) : (
        <>
          <svg
            viewBox="0 0 160 100"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            className="project-cover-art"
          >
            {variant === "techworks" ? <TechworksArt /> : null}
            {variant === "couch" ? <CouchArt /> : null}
            {variant === "precise" ? <PreciseArt /> : null}
            {variant === "mocdoc" ? <MocdocArt /> : null}
          </svg>
          <span className="sr-only">{title} cover</span>
        </>
      )}
    </div>
  );
}

function TechworksArt() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="0.7">
      <rect x="18" y="16" width="124" height="68" opacity="0.22" />
      <path
        d="M40 72 L80 22 L120 72 Z"
        fill="currentColor"
        opacity="0.88"
        stroke="none"
      />
      <rect x="72" y="48" width="16" height="24" fill="currentColor" opacity="0.55" stroke="none" />
      <polyline points="28,30 48,30 48,42" opacity="0.45" />
      <polyline points="132,30 112,30 112,42" opacity="0.35" />
      <circle cx="80" cy="38" r="3.5" fill="currentColor" stroke="none" opacity="0.95" />
    </g>
  );
}

function CouchArt() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="0.7">
      <rect x="18" y="18" width="124" height="64" opacity="0.22" />
      <rect x="28" y="28" width="48" height="44" fill="currentColor" opacity="0.88" />
      <rect x="86" y="28" width="46" height="18" opacity="0.4" />
      <rect x="86" y="52" width="22" height="20" opacity="0.32" />
      <rect x="110" y="52" width="22" height="20" opacity="0.2" />
      <circle cx="52" cy="44" r="5" fill="currentColor" stroke="none" opacity="0.95" />
    </g>
  );
}

function PreciseArt() {
  const modules = [
    { x: 12, y: 14, w: 64, h: 42, opacity: 0.9 },
    { x: 84, y: 14, w: 64, h: 18, opacity: 0.35 },
    { x: 84, y: 38, w: 30, h: 18, opacity: 0.45 },
    { x: 118, y: 38, w: 30, h: 18, opacity: 0.28 },
    { x: 12, y: 64, w: 42, h: 22, opacity: 0.4 },
    { x: 60, y: 64, w: 88, h: 22, opacity: 0.22 },
  ];

  return (
    <g fill="none" stroke="currentColor" strokeWidth="0.7">
      {modules.map((mod) => (
        <rect
          key={`${mod.x}-${mod.y}`}
          x={mod.x}
          y={mod.y}
          width={mod.w}
          height={mod.h}
          fill={mod.opacity > 0.5 ? "currentColor" : "none"}
          opacity={mod.opacity}
        />
      ))}
      <polyline points="22,46 34,34 44,40 58,24" opacity="0.7" />
    </g>
  );
}

function MocdocArt() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="0.75">
      <rect x="18" y="14" width="124" height="72" opacity="0.28" />
      <rect x="28" y="24" width="36" height="52" fill="currentColor" opacity="0.88" />
      <rect x="72" y="24" width="60" height="14" opacity="0.4" />
      <rect x="72" y="44" width="28" height="32" opacity="0.35" />
      <rect x="104" y="44" width="28" height="32" opacity="0.22" />
      <circle cx="46" cy="40" r="6" fill="currentColor" stroke="none" opacity="0.95" />
    </g>
  );
}
