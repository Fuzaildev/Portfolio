import { useCallback, useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/fuzaildev", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/thefuzailkhan",
    Icon: FaLinkedin,
  },
  { label: "Twitter", href: "https://x.com/", Icon: FaTwitter },
];

const LAYERS = [
  {
    id: "interface",
    index: "01",
    layer: "Interface",
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible interfaces with React — where clean code and thoughtful motion meet.",
    stack: ["React", "GSAP", "Framer", "A11y"],
  },
  {
    id: "systems",
    index: "02",
    layer: "Systems",
    title: "Backend & APIs",
    description:
      "Designing REST/GraphQL services that stay fast, predictable, and easy to reason about as they grow.",
    stack: ["Python", "Django", "Flask", "REST"],
  },
  {
    id: "foundation",
    index: "03",
    layer: "Foundation",
    title: "Databases & Infra",
    description:
      "Modeling data and shipping it on infrastructure that just works — no 3am wake-up calls.",
    stack: ["MySQL", "Schema", "Caching", "Deploy"],
  },
];

function canHover() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

function StackAtlas() {
  const [active, setActive] = useState(0);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  const [ref, inView] = useInView({ threshold: 0.25 });
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const current = LAYERS[active];

  const select = useCallback((i) => {
    setActive(i);
  }, []);

  // Keep the gold rail aligned when mobile rows expand on tap
  useEffect(() => {
    const item = itemRefs.current[active];
    if (!item) return;

    const update = () => {
      setIndicator({
        top: item.offsetTop,
        height: item.offsetHeight,
      });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(item);
    return () => ro.disconnect();
  }, [active]);

  return (
    <div
      ref={ref}
      className={`mt-10 w-full max-w-4xl text-left transition-all duration-700 ease-out sm:mt-14 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mb-6 flex items-end justify-between gap-4 border-b border-line/60 pb-4">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-gold/80">
            Stack atlas
          </p>
          <p className="mt-1 text-sm text-white/40">
            <span className="hidden sm:inline">Hover or tap</span>
            <span className="sm:hidden">Tap</span> a layer — how I ship end to
            end.
          </p>
        </div>

        {/* Live stack signal */}
        <div
          className="hidden items-end gap-1.5 sm:flex"
          aria-hidden="true"
        >
          {LAYERS.map((layer, i) => (
            <button
              key={layer.id}
              type="button"
              aria-label={`Show ${layer.title}`}
              onClick={() => select(i)}
              className={`block w-8 rounded-sm transition-all duration-500 ease-out ${
                i === active
                  ? "h-8 bg-gold shadow-[0_0_18px_-4px_rgba(255,207,64,0.7)]"
                  : i < active
                    ? "h-5 bg-gold/35"
                    : "h-3 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Interactive layers — hover on desktop, tap/click on mobile */}
        <ul
          ref={listRef}
          className="relative"
          role="listbox"
          aria-label="Focus areas"
        >
          <span
            className="pointer-events-none absolute left-0 w-px bg-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              top: indicator.top,
              height: indicator.height || "33%",
            }}
            aria-hidden="true"
          />

          {LAYERS.map((layer, i) => {
            const isActive = i === active;
            return (
              <li
                key={layer.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
              >
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => select(i)}
                  onMouseEnter={() => {
                    if (canHover()) select(i);
                  }}
                  onFocus={() => select(i)}
                  className={`group relative flex w-full cursor-pointer items-baseline gap-3 border-b border-line/40 py-4 pl-3 text-left transition-colors duration-300 outline-none touch-manipulation focus-visible:bg-gold/5 sm:gap-4 sm:py-5 sm:pl-4 ${
                    isActive ? "border-gold/30" : "hover:border-white/20"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-white/25 group-hover:text-white/45"
                    }`}
                  >
                    {layer.index}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span
                        className={`font-display text-xl font-semibold tracking-tight transition-all duration-300 sm:text-2xl ${
                          isActive
                            ? "translate-x-1 text-white"
                            : "text-white/45 group-hover:text-white/75"
                        }`}
                      >
                        {layer.title}
                      </span>
                      {isActive && (
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-gold/70">
                          {layer.layer}
                        </span>
                      )}
                    </div>

                    {/* Mobile-only inline detail */}
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
                        isActive
                          ? "mt-3 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="max-w-md text-sm leading-relaxed text-white/55">
                          {layer.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {layer.stack.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop detail stage */}
        <aside
          className="relative hidden min-h-[220px] overflow-hidden lg:block"
          aria-live="polite"
        >
          <div
            key={current.id}
            className="absolute inset-0 flex flex-col justify-center animate-focus-swap"
          >
            <span className="font-display text-[5.5rem] font-bold leading-none text-white/[0.04]">
              {current.index}
            </span>
            <p className="-mt-6 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-gold">
              {current.layer}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">
              {current.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
              {current.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {current.stack.map((tag) => (
                <span
                  key={tag}
                  className="relative font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/70 before:mr-2 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-gold before:content-['']"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function About({ index, total }) {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center rounded-t-[2rem] border-t border-gold/20 bg-surface-2 px-4 py-16 text-center shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.6)] sm:rounded-t-[2.5rem] sm:px-6 sm:py-24"
    >
      <span className="animate-fade-up font-mono text-xs uppercase tracking-[0.3em] text-gold">
        0{index} / {total}
      </span>

      <h2
        className="mt-4 animate-fade-up font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
        style={{ animationDelay: "0.05s" }}
      >
        About <span className="text-gradient-brand">me</span>
      </h2>

      <p
        className="mt-5 max-w-2xl animate-fade-up text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base sm:text-lg"
        style={{ animationDelay: "0.1s" }}
      >
        I'm <span className="font-semibold text-white">Fuzail Khan</span>, a full
        stack developer who likes turning fuzzy ideas into interfaces that feel
        obvious in hindsight — and building the APIs, databases, and
        infrastructure quietly holding it all together underneath.
      </p>

      <p
        className="mt-4 max-w-2xl animate-fade-up text-sm text-white/50 sm:text-base"
        style={{ animationDelay: "0.15s" }}
      >
        I move comfortably across the stack — React on the front end, APIs and
        services in the middle, and whatever data layer the problem actually
        calls for. I care about the small details as much as the big
        architecture: the empty states, the 200ms that make an interaction
        feel alive, the error message that actually helps.
      </p>

      <ul
        className="mt-8 flex flex-wrap items-center justify-center gap-2 animate-fade-up sm:gap-3"
        style={{ animationDelay: "0.2s" }}
      >
        {SOCIALS.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/65 transition-colors duration-200 hover:border-gold/40 hover:text-gold"
            >
              <Icon size={15} aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>

      <StackAtlas />
    </section>
  );
}
