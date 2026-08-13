import type { ProjectCoverVariant } from "@/data/portfolio";

type ProjectCoverProps = {
  variant: ProjectCoverVariant;
  title: string;
  className?: string;
};

export function ProjectCover({
  variant,
  title,
  className = "",
}: ProjectCoverProps) {
  return (
    <div className={`project-cover project-cover--${variant} ${className}`}>
      <svg
        viewBox="0 0 160 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="project-cover-art"
      >
        {variant === "atlas" ? <AtlasArt /> : null}
        {variant === "commerce" ? <CommerceArt /> : null}
        {variant === "pulse" ? <PulseArt /> : null}
        {variant === "studio" ? <StudioArt /> : null}
        {variant === "verse" ? <VerseArt /> : null}
      </svg>
      <span className="sr-only">{title} cover</span>
    </div>
  );
}

function AtlasArt() {
  const cells = Array.from({ length: 24 }, (_, index) => index);

  return (
    <g>
      {cells.map((cell) => {
        const col = cell % 6;
        const row = Math.floor(cell / 6);
        const filled = [0, 2, 5, 7, 8, 11, 14, 16, 19, 22].includes(cell);
        return (
          <rect
            key={cell}
            x={12 + col * 23}
            y={10 + row * 20}
            width="18"
            height="15"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="0.6"
            opacity={filled ? 0.88 : 0.28}
          />
        );
      })}
    </g>
  );
}

function CommerceArt() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="0.7">
      <rect x="10" y="12" width="140" height="18" opacity="0.35" />
      <rect x="10" y="38" width="86" height="50" fill="currentColor" opacity="0.9" />
      <rect x="104" y="38" width="46" height="22" opacity="0.45" />
      <rect x="104" y="66" width="46" height="22" opacity="0.25" />
    </g>
  );
}

function PulseArt() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="0.8">
      <circle cx="80" cy="50" r="34" opacity="0.22" />
      <circle cx="80" cy="50" r="22" opacity="0.4" />
      <circle cx="80" cy="50" r="10" fill="currentColor" stroke="none" opacity="0.9" />
      <polyline
        points="18,50 42,50 52,28 64,72 76,50 142,50"
        opacity="0.7"
      />
    </g>
  );
}

function StudioArt() {
  return (
    <g>
      <text
        x="16"
        y="68"
        fill="currentColor"
        fontSize="52"
        fontFamily="Georgia, serif"
        letterSpacing="-2"
      >
        Aa
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.45">
        <rect x="108" y="18" width="18" height="18" />
        <rect x="130" y="18" width="18" height="18" />
        <rect x="108" y="40" width="18" height="18" />
        <rect x="130" y="40" width="40" height="40" />
      </g>
    </g>
  );
}

function VerseArt() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="0.8">
      <rect x="18" y="16" width="88" height="58" opacity="0.35" />
      <rect x="54" y="32" width="88" height="52" opacity="0.7" />
      <line x1="18" y1="16" x2="54" y2="32" opacity="0.35" />
      <line x1="106" y1="16" x2="142" y2="32" opacity="0.35" />
      <line x1="18" y1="74" x2="54" y2="84" opacity="0.35" />
    </g>
  );
}
