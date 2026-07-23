import { ArrowUpRight, Download } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";

const ROLES = ["DEVELOPER", "DESIGNER", "ENGINEER", "CREATOR", "PROBLEM SOLVER"];

export default function Hero() {
  const typedText = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16 text-center sm:px-6 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(50% 40% at 50% 40%, rgba(255,207,64,0.08), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center">
        <p className="animate-fade-up px-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/50 sm:text-xs sm:tracking-[0.3em] sm:text-sm">
          Welcome — you've landed on the portfolio of the
        </p>

        <h1
          className="mt-4 min-h-[1.15em] max-w-full animate-fade-up break-words font-display text-[clamp(2rem,10vw,4.5rem)] font-bold uppercase leading-[0.95] sm:mt-5 sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient-brand">{typedText}</span>
          <span
            className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-cursor-blink bg-gold align-middle"
            aria-hidden="true"
          />
        </h1>

        <p
          className="mt-5 animate-fade-up text-sm text-white/70 sm:mt-6 sm:text-base sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="font-semibold text-white">Fuzail Khan</span>
          <span className="mx-2 text-white/30">|</span>
          Full Stack Developer
        </p>

        <div
          className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 animate-fade-up sm:mt-9 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-1.5 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_0_25px_-6px_rgba(255,207,64,0.8)] transition-transform duration-200 hover:scale-[1.03] sm:py-3"
          >
            Let's Connect
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="group flex items-center justify-center gap-1.5 rounded-full border border-gold/40 bg-surface/60 px-6 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors duration-200 hover:border-gold hover:text-gold sm:py-3"
          >
            View Resume
            <Download size={15} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
