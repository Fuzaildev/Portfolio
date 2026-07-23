import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "UI / UX Enthusiast",
  "Problem Solver",
  "Creative Coder",
];

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading -> welcome -> exit -> done
  const pillRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let timeoutId;
    let current = 0;

    const tick = () => {
      current = Math.min(100, current + Math.random() * 5 + 3);
      setPercent(Math.floor(current));

      if (current >= 100) {
        setPhase("welcome");
        return;
      }
      timeoutId = setTimeout(tick, 60 + Math.random() * 60);
    };

    timeoutId = setTimeout(tick, 250);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (phase !== "welcome") return;
    const t = setTimeout(() => setPhase("exit"), 600);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(() => {
      document.body.style.overflow = "";
      setPhase("done");
      onComplete?.();
    }, 900);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  const handleMouseMove = (e) => {
    const el = pillRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  if (phase === "done") return null;

  const exiting = phase === "exit";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-ink">
      {/* Top-left logo */}
      <div
        className={`absolute left-5 top-5 transition-opacity duration-300 sm:left-8 sm:top-8 ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-display text-sm font-bold tracking-tight text-white sm:text-base">
          Fuzail<span className="text-gold">.</span>
        </span>
      </div>

      {/* Top-right mini loader animation */}
      <div
        className={`absolute right-5 top-5 flex h-9 items-end gap-[6px] transition-opacity duration-300 sm:right-8 sm:top-8 ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <span className="h-9 w-[3px] rounded-full bg-white/20" />
        <span className="relative h-9 w-[3px] rounded-full bg-white/20">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 animate-loader-ball rounded-full bg-gold shadow-[0_0_10px_rgba(255,207,64,0.8)]" />
        </span>
        <span className="h-9 w-[3px] rounded-full bg-white/20" />
      </div>

      {/* Marquee */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 whitespace-nowrap transition-opacity duration-300 ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <div className="flex shrink-0 animate-marquee items-center">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0 items-center">
              {ROLES.map((role) => (
                <span
                  key={`${rep}-${role}`}
                  className="mx-6 flex items-center gap-6 font-display text-6xl font-semibold uppercase leading-none sm:text-7xl lg:text-8xl"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.22)",
                  }}
                >
                  <span className="h-3 w-3 shrink-0 rounded-full bg-gold" />
                  {role}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Center loading pill */}
      <div className="relative z-10 flex items-center justify-center">
        <div
          className={`absolute rounded-full bg-gold blur-2xl transition-opacity duration-300 ${
            exiting ? "opacity-0" : "opacity-30"
          }`}
          style={{ width: "220px", height: "90px" }}
          aria-hidden="true"
        />

        <div
          ref={pillRef}
          onMouseMove={handleMouseMove}
          className="relative overflow-hidden rounded-full bg-gold p-[2px] transition-transform ease-[cubic-bezier(0.33,0.11,1,0.72)]"
          style={{
            transitionDuration: exiting ? "850ms" : "0ms",
            transform: exiting ? "scale(26)" : "scale(1)",
          }}
        >
          <div
            className="relative flex h-[52px] items-center justify-center overflow-hidden rounded-full bg-ink px-9 sm:h-16 sm:px-12"
            style={{
              backgroundImage:
                "radial-gradient(120px 90px at var(--mx, 50%) var(--my, 50%), rgba(255,207,64,0.18), transparent 70%)",
            }}
          >
            <div className="relative flex items-center justify-center">
              <div
                className={`flex items-center gap-3 font-mono text-sm font-medium uppercase tracking-widest text-white transition-opacity duration-200 sm:text-base ${
                  phase === "loading" ? "opacity-100" : "opacity-0"
                }`}
              >
                Loading
                <span className="text-white/50">{percent}%</span>
                <span className="inline-block h-[16px] w-[2px] animate-cursor-blink bg-gold sm:h-[20px]" />
              </div>

              <div
                className={`absolute inset-0 flex items-center justify-center font-display text-sm font-semibold uppercase tracking-widest text-gradient-brand transition-opacity duration-200 sm:text-base ${
                  phase !== "loading" ? "opacity-100" : "opacity-0"
                }`}
              >
                Welcome
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
