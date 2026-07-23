import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";

const PROJECTS = [
  {
    title: "Aurora",
    subtitle: "Realtime collaboration canvas",
    year: "2025",
    role: "Full Stack",
    description:
      "A shared whiteboard where presence, cursors, and shapes stay in sync — built for design critiques that actually feel live.",
    stack: ["React", "WebSocket", "Node", "GSAP"],
    live: "#",
    repo: "#",
    accent: "#ffcf40",
    visual: "aurora",
  },
  {
    title: "Nimbus",
    subtitle: "Ops dashboard for SaaS teams",
    year: "2025",
    role: "Frontend",
    description:
      "One calm surface for metrics, alerts, and deploy health — so on-call doesn't feel like opening twelve tabs at 2am.",
    stack: ["React", "Django", "Chart.js", "REST"],
    live: "#",
    repo: "#",
    accent: "#7eb8ff",
    visual: "nimbus",
  },
  {
    title: "Pulse",
    subtitle: "Analytics that explain themselves",
    year: "2024",
    role: "Full Stack",
    description:
      "Interactive charts with plain-language insights layered on top — less staring at numbers, more knowing what moved.",
    stack: ["TypeScript", "Python", "MySQL", "D3"],
    live: "#",
    repo: "#",
    accent: "#9ae6b4",
    visual: "pulse",
  },
  {
    title: "Ledger",
    subtitle: "Financial API backbone",
    year: "2024",
    role: "Backend",
    description:
      "Idempotent payment endpoints, clear audit trails, and docs that junior engineers can ship against without guessing.",
    stack: ["Flask", "PostgreSQL", "Redis", "JWT"],
    live: "#",
    repo: "#",
    accent: "#f6ad55",
    visual: "ledger",
  },
  {
    title: "Northstar",
    subtitle: "Headless content studio",
    year: "2024",
    role: "Full Stack",
    description:
      "Editors get a distraction-free CMS; the site gets structured content over a typed API — no theme lock-in.",
    stack: ["Next.js", "Django", "MySQL", "S3"],
    live: "#",
    repo: "#",
    accent: "#fc8181",
    visual: "northstar",
  },
  {
    title: "Orbit",
    subtitle: "Field notes, mobile-first",
    year: "2023",
    role: "Mobile",
    description:
      "Offline-capable note capture for people who work away from desks — syncs cleanly the moment signal returns.",
    stack: ["React Native", "SQLite", "Node"],
    live: "#",
    repo: "#",
    accent: "#5eead4",
    visual: "orbit",
  },
];

function ProjectVisual({ type, accent, title }) {
  if (type === "aurora") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0c0c10]">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 55% 40%, ${accent}33, transparent 65%),
              radial-gradient(circle at 20% 80%, ${accent}18, transparent 45%)`,
          }}
        />
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm transition-transform duration-700 group-hover:-translate-y-1"
            style={{
              width: `${62 - i * 8}%`,
              height: `${48 - i * 6}%`,
              left: `${14 + i * 8}%`,
              top: `${22 + i * 10}%`,
              transform: `rotate(${-6 + i * 4}deg)`,
              borderColor: i === 0 ? `${accent}55` : undefined,
            }}
          >
            {i === 0 && (
              <div className="flex h-full flex-col gap-2 p-4">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                </div>
                <div className="mt-2 h-2 w-1/3 rounded bg-white/15" />
                <div className="h-2 w-2/3 rounded bg-white/10" />
                <div
                  className="mt-auto h-16 rounded-lg"
                  style={{ background: `${accent}22`, border: `1px solid ${accent}40` }}
                />
              </div>
            )}
          </div>
        ))}
        <span className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/25">
          {title}
        </span>
      </div>
    );
  }

  if (type === "nimbus") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0a0e14]">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, ${accent}18, transparent 50%), #0a0e14`,
          }}
        />
        <div className="absolute inset-6 grid grid-cols-3 gap-2 sm:inset-8 sm:gap-3">
          {[40, 70, 55, 85, 45, 60].map((h, i) => (
            <div
              key={i}
              className="flex flex-col justify-end rounded-lg border border-white/8 bg-white/[0.03] p-2"
            >
              <div
                className="w-full rounded-sm transition-all duration-700 group-hover:brightness-125"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, ${accent}aa, ${accent}33)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "pulse") {
    const points = "0,70 20,55 40,62 60,30 80,42 100,18";
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0b100e]">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${accent}28, transparent 50%)`,
          }}
        />
        <svg
          viewBox="0 0 100 80"
          className="h-[70%] w-[85%] transition-transform duration-700 group-hover:scale-[1.03]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pulseFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points={`${points} 100,80 0,80`}
            fill="url(#pulseFill)"
          />
          <polyline
            points={points}
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {[0, 20, 40, 60, 80, 100].map((x, i) => {
            const ys = [70, 55, 62, 30, 42, 18];
            return (
              <circle key={x} cx={x} cy={ys[i]} r="1.8" fill={accent} />
            );
          })}
        </svg>
      </div>
    );
  }

  if (type === "ledger") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#100e0a]">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${accent}20, transparent 55%)`,
          }}
        />
        <div className="w-[78%] overflow-hidden rounded-xl border border-white/10 bg-ink/80 font-mono text-[0.65rem] leading-relaxed text-white/55 shadow-2xl transition-transform duration-700 group-hover:-translate-y-1 sm:text-xs">
          <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="ml-2 text-white/30">POST /v1/charges</span>
          </div>
          <pre className="overflow-hidden p-3 text-left">
            <span className="text-white/30">{"{"}</span>
            {"\n  "}
            <span style={{ color: accent }}>"amount"</span>
            <span className="text-white/30">: </span>
            <span className="text-white/80">4200</span>
            <span className="text-white/30">,</span>
            {"\n  "}
            <span style={{ color: accent }}>"currency"</span>
            <span className="text-white/30">: </span>
            <span className="text-white/80">"usd"</span>
            <span className="text-white/30">,</span>
            {"\n  "}
            <span style={{ color: accent }}>"status"</span>
            <span className="text-white/30">: </span>
            <span className="text-white/80">"succeeded"</span>
            {"\n"}
            <span className="text-white/30">{"}"}</span>
          </pre>
        </div>
      </div>
    );
  }

  if (type === "northstar") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#100a0c]">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${accent}22, transparent 45%)`,
          }}
        />
        <div className="absolute inset-0 flex items-stretch gap-0 p-5 sm:p-7">
          <div className="w-[32%] rounded-l-lg border border-white/10 border-r-0 bg-white/[0.03] p-3">
            {["Pages", "Posts", "Media", "API"].map((item, i) => (
              <div
                key={item}
                className={`mb-2 rounded px-2 py-1.5 text-[0.65rem] ${
                  i === 1
                    ? "text-ink"
                    : "text-white/40"
                }`}
                style={i === 1 ? { background: accent } : undefined}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-r-lg border border-white/10 bg-white/[0.04] p-4 transition-transform duration-700 group-hover:translate-x-0.5">
            <div className="h-2 w-1/2 rounded bg-white/20" />
            <div className="mt-3 space-y-2">
              <div className="h-1.5 w-full rounded bg-white/10" />
              <div className="h-1.5 w-5/6 rounded bg-white/10" />
              <div className="h-1.5 w-4/6 rounded bg-white/10" />
            </div>
            <div
              className="mt-6 h-20 rounded-md border border-dashed"
              style={{ borderColor: `${accent}55`, background: `${accent}12` }}
            />
          </div>
        </div>
      </div>
    );
  }

  // orbit
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0c0a12]">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accent}25, transparent 55%)`,
        }}
      />
      <div className="relative h-[72%] w-[42%] max-w-[180px] rounded-[2rem] border border-white/15 bg-ink/90 p-3 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
        <div className="mb-3 h-2 w-16 mx-auto rounded-full bg-white/10" />
        <div className="space-y-2">
          <div className="h-16 rounded-xl" style={{ background: `${accent}28` }} />
          <div className="h-2 w-3/4 rounded bg-white/15" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-10 rounded-lg bg-white/5" />
            <div className="h-10 rounded-lg bg-white/5" />
          </div>
        </div>
      </div>
      <span
        className="absolute h-40 w-40 rounded-full border opacity-40 transition-transform duration-1000 group-hover:rotate-45 sm:h-52 sm:w-52"
        style={{ borderColor: `${accent}40` }}
      />
    </div>
  );
}

function ProjectPanel({ project, index, isActive }) {
  return (
    <article
      className={`group flex max-h-full w-[min(100%,22rem)] shrink-0 flex-col overflow-hidden rounded-[1.5rem] border transition-all duration-500 sm:w-[min(70vw,400px)] sm:rounded-[1.75rem] lg:w-[min(52vw,440px)] ${
        isActive
          ? "border-gold/35 bg-surface-2/80 opacity-100 shadow-[0_0_60px_-28px_rgba(255,207,64,0.45)]"
          : "scale-[0.97] border-line/50 bg-surface/40 opacity-55"
      }`}
      style={{ "--accent": project.accent }}
    >
      <div className="relative aspect-[16/10] max-h-[11.5rem] w-full shrink-0 border-b border-white/5 sm:max-h-[13rem] lg:max-h-[14rem]">
        <ProjectVisual
          type={project.visual}
          accent={project.accent}
          title={project.title}
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
        <div className="min-h-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-white/35">
            <span className={isActive ? "text-gold" : undefined}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-white/20">/</span>
            <span>{project.year}</span>
            <span className="text-white/20">/</span>
            <span>{project.role}</span>
          </div>

          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {project.title}
          </h3>
          <p
            className="mt-1 text-xs font-medium sm:text-sm"
            style={{ color: project.accent }}
          >
            {project.subtitle}
          </p>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/55 sm:text-sm">
            {project.description}
          </p>

          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/60"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex shrink-0 flex-wrap items-center gap-2.5">
          <a
            href={project.live}
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] sm:text-sm"
          >
            View project
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </a>
          <a
            href={project.repo}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2.5 text-xs font-medium text-white/70 transition-colors duration-200 hover:border-gold/50 hover:text-gold sm:text-sm"
          >
            <Code2 size={14} />
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ index, total }) {
  const driverRef = useRef(null);
  const trackRef = useRef(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [driverHeight, setDriverHeight] = useState(1);
  const [progress, setProgress] = useState(0);

  const activeIndex = useMemo(() => {
    if (PROJECTS.length <= 1) return 0;
    return Math.min(
      PROJECTS.length - 1,
      Math.round(progress * (PROJECTS.length - 1))
    );
  }, [progress]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;

      const distance = Math.max(0, track.scrollWidth - window.innerWidth);
      setMaxTranslate(distance);

      // One viewport of scroll per card step (1 → 6), then next section
      const perCard = Math.round(window.innerHeight * 0.85);
      setDriverHeight(Math.max(perCard * (PROJECTS.length - 1), distance, 1));
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, []);

  useEffect(() => {
    let frame = null;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const driver = driverRef.current;
        if (!driver || driverHeight <= 0) {
          setProgress(0);
          return;
        }

        const rect = driver.getBoundingClientRect();
        const p = Math.min(
          1,
          Math.max(0, (window.innerHeight - rect.top) / driverHeight)
        );
        setProgress(p);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [driverHeight]);

  const translateX =
    maxTranslate > 0 ? progress * maxTranslate : 0;

  return (
    <div id="projects" className="relative">
      <section
        aria-label="Selected work"
        className="sticky top-0 z-0 flex h-[100svh] flex-col overflow-hidden rounded-t-[2rem] border-t border-gold/20 bg-ink pb-4 pt-20 shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.6)] sm:rounded-t-[2.5rem] sm:pb-6 sm:pt-24"
      >
        <div className="flex shrink-0 flex-col gap-2 px-4 sm:gap-3 sm:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-center sm:text-left">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              0{index} / {total}
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:mt-3 sm:text-4xl md:text-5xl">
              Selected <span className="text-gradient-brand">work</span>
            </h2>
          </div>

          <div className="flex items-center justify-center gap-4 sm:justify-start lg:pb-1">
            <span className="font-mono text-xs tracking-[0.2em] text-white/40">
              <span className="text-gold">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-2 text-white/20">—</span>
              {String(PROJECTS.length).padStart(2, "0")}
            </span>
            <div
              className="h-px w-24 overflow-hidden bg-white/10 sm:w-40"
              role="progressbar"
              aria-valuenow={activeIndex + 1}
              aria-valuemin={1}
              aria-valuemax={PROJECTS.length}
              aria-label="Projects scroll progress"
            >
              <div
                className="h-full bg-gold transition-[width] duration-150 ease-out"
                style={{
                  width: `${((activeIndex + 1) / PROJECTS.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative mt-4 flex min-h-0 flex-1 items-center sm:mt-6">
          <div
            ref={trackRef}
            className="flex w-full items-center gap-5 will-change-transform pl-[max(1rem,calc((100vw-min(100%,22rem))/2))] pr-[max(1rem,calc((100vw-min(100%,22rem))/2))] sm:gap-7 sm:pl-[max(1.5rem,calc((100vw-min(70vw,400px))/2))] sm:pr-[max(1.5rem,calc((100vw-min(70vw,400px))/2))] lg:pl-[max(1.5rem,calc((100vw-min(52vw,440px))/2))] lg:pr-[max(1.5rem,calc((100vw-min(52vw,440px))/2))]"
            style={{
              transform: `translate3d(-${translateX}px, 0, 0)`,
            }}
          >
            {PROJECTS.map((project, i) => (
              <ProjectPanel
                key={project.title}
                project={project}
                index={i}
                isActive={i === activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 flex shrink-0 items-center justify-center gap-2 pb-1 sm:mt-4">
          {PROJECTS.map((project, i) => (
            <span
              key={project.title}
              aria-hidden="true"
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-gold" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Vertical scroll distance that drives cards 01 → 06, then Skills */}
      <div
        ref={driverRef}
        aria-hidden="true"
        className="pointer-events-none"
        style={{ height: driverHeight }}
      />
    </div>
  );
}

