import type { ProjectCoverVariant } from "@/data/portfolio";

type ProjectCoverProps = {
  variant: ProjectCoverVariant;
  title: string;
  image?: string;
  bleed?: boolean;
  className?: string;
};

export function ProjectCover({
  variant,
  title,
  image,
  bleed = false,
  className = "",
}: ProjectCoverProps) {
  return (
    <div
      className={`project-cover project-cover--${variant}${
        image ? " project-cover--image" : ""
      }${bleed ? " project-cover--bleed" : ""} ${className}`}
    >
      {image ? (
        <img src={image} alt={`${title} cover`} className="project-cover-art" />
      ) : (
        <>
          <svg
            viewBox="0 0 160 100"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            className="project-cover-art"
          >
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
