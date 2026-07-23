import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiGreensock,
  SiFramer,
  SiPython,
  SiDjango,
  SiFlask,
  SiMysql,
} from "react-icons/si";
import { Waves } from "lucide-react";
import { useInView } from "../hooks/useInView";

const GROUPS = [
  {
    label: "Frontend",
    duration: 26,
    direction: "left",
    skills: [
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    label: "Animation & Motion",
    duration: 20,
    direction: "right",
    skills: [
      { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
      { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
      { name: "Lenis", Icon: Waves, color: "#FFCF40" },
    ],
  },
  {
    label: "Backend",
    duration: 24,
    direction: "left",
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Django", Icon: SiDjango, color: "#44B78B" },
      { name: "Flask", Icon: SiFlask, color: "#FFFFFF" },
    ],
  },
  {
    label: "Database",
    duration: 18,
    direction: "right",
    skills: [{ name: "MySQL", Icon: SiMysql, color: "#4479A1" }],
  },
];

function TickerRow({ label, skills, direction, duration, rowIndex }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const track = [...skills, ...skills];

  return (
    <div ref={ref} className="border-t border-line/50 py-5 first:border-t-0 sm:py-7">
      <div className="overflow-hidden">
        <span
          className={`block font-mono text-xs uppercase tracking-[0.3em] text-gold/70 transition-transform duration-700 ease-out ${
            inView ? "translate-y-0" : "translate-y-full"
          }`}
        >
          0{rowIndex + 1} — {label}
        </span>
      </div>

      <div
        className={`group/row relative mt-4 overflow-hidden transition-opacity duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-surface-2 to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-surface-2 to-transparent sm:w-20" />

        <div
          className={`flex w-max items-center gap-5 whitespace-nowrap group-hover/row:[animation-play-state:paused] sm:gap-8 ${
            direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
          }`}
          style={{ animationDuration: `${duration}s` }}
        >
          {track.map(({ name, Icon, color }, i) => (
            <span
              key={`${name}-${i}`}
              className="skill-item group/icon flex cursor-pointer items-center gap-2.5 font-display text-xl font-semibold uppercase text-white/20 transition-colors duration-300 hover:text-gold sm:gap-3 sm:text-3xl lg:text-4xl"
              style={{ "--brand": color }}
            >
              <Icon
                size={26}
                className="skill-icon shrink-0 transition-[color,filter] duration-300"
                aria-hidden="true"
              />
              {name}
              <span className="mx-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/15" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills({ index, total }) {
  return (
    <section
      id="skills"
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden rounded-t-[2rem] border-t border-gold/20 bg-surface-2 px-4 py-16 text-center shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.6)] sm:rounded-t-[2.5rem] sm:px-6 sm:py-24"
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        0{index} / {total}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
        My <span className="text-gradient-brand">skills</span>
      </h2>
      <p className="mt-3 max-w-md text-sm text-white/50">
        The languages, frameworks, and tools I reach for most
        <span className="hidden sm:inline"> — hover a row to pause it</span>.
      </p>

      <div className="mt-10 w-full max-w-5xl text-left sm:mt-14">
        {GROUPS.map((group, i) => (
          <TickerRow key={group.label} rowIndex={i} {...group} />
        ))}
      </div>
    </section>
  );
}
