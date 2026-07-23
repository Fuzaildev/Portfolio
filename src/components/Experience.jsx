import { useInView } from "../hooks/useInView";

const ROLES = [
  {
    id: "kailune",
    index: "01",
    chapter: "Now",
    company: "Kailune",
    role: "Full Stack Developer",
    type: "Full-time",
    period: "Jul 2026 — Present",
    location: "Remote",
    summary:
      "Building scalable sites end to end — React on the surface, solid APIs and data underneath, plus Framer builds with the kind of smooth scrolling that feels intentional.",
    highlights: [
      "Shipping full-stack websites across frontend, backend, and database — designed to stay fast as they grow.",
      "Crafting Framer experiences with polished motion and Lenis-style smooth scrolling.",
      "Keeping the stack coherent so design, interaction, and data all move as one product.",
    ],
    stack: ["React", "Framer", "Lenis", "Backend", "Database"],
  },
  {
    id: "saify",
    index: "02",
    chapter: "Then",
    company: "Saify Technology",
    role: "Frontend Developer",
    type: "Full-time",
    period: "Mar 2025 — Jun 2026",
    location: "On-site",
    summary:
      "Built cross-platform web and mobile products with React, Flutter, and JavaScript — with Django APIs and third-party integrations keeping everything wired for production.",
    highlights: [
      "Developed responsive web and mobile apps focused on performance, usability, and clean interaction.",
      "Shipped Flutter apps with prompt-assisted workflows for UI, app logic, and API integration.",
      "Built Django backend APIs for authentication, data handling, and live production features.",
      "Integrated third-party APIs and SDKs across Canva, Adobe Photoshop, Microsoft Office, and Google Workspace.",
    ],
    stack: ["React", "Flutter", "JavaScript", "Django"],
  },
];

function RoleChapter({ job, delay }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={`relative grid gap-6 transition-all duration-700 ease-out sm:grid-cols-[7rem_1fr] sm:gap-8 lg:grid-cols-[9rem_1fr] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Period column */}
      <div className="sm:pt-1">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-gold">
          {job.chapter}
        </p>
        <p className="mt-2 font-mono text-xs leading-relaxed tracking-wide text-white/40">
          {job.period}
        </p>
        {job.location ? (
          <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/25">
            {job.location}
          </p>
        ) : null}
      </div>

      {/* Content — always visible */}
      <div className="relative min-w-0 border-l border-line/70 pl-6 sm:border-l-0 sm:pl-0">
        <span
          className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-gold bg-ink sm:hidden"
          aria-hidden="true"
        />

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
            {job.role}
          </h3>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/30">
            {job.type}
          </span>
        </div>

        <p className="mt-1 text-base text-gold/90 sm:text-lg">{job.company}</p>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-[0.95rem]">
          {job.summary}
        </p>

        <ul className="mt-5 max-w-2xl space-y-3">
          {job.highlights.map((item, i) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-white/50"
            >
              <span className="mt-0.5 shrink-0 font-mono text-[0.65rem] text-gold/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {job.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/60"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience({ index, total }) {
  return (
    <section
      id="experience"
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center rounded-t-[2rem] border-t border-gold/20 bg-ink px-4 py-16 text-center shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.6)] sm:rounded-t-[2.5rem] sm:px-6 sm:py-24"
    >
      <span className="animate-fade-up font-mono text-xs uppercase tracking-[0.3em] text-gold">
        0{index} / {total}
      </span>

      <h2
        className="mt-4 animate-fade-up font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
        style={{ animationDelay: "0.05s" }}
      >
        Experience <span className="text-gradient-brand">so far</span>
      </h2>

      <p
        className="mt-4 max-w-xl animate-fade-up text-sm text-white/50 sm:text-base"
        style={{ animationDelay: "0.1s" }}
      >
        From Saify to Kailune — shipping interfaces people enjoy, and systems that
        stay calm under pressure.
      </p>

      <div className="relative mt-10 w-full max-w-3xl text-left sm:mt-16">
        <div className="relative space-y-10 sm:space-y-16">
          {ROLES.map((job, i) => (
            <div key={job.id} className="relative">
              <RoleChapter job={job} delay={i * 120} />
              {i < ROLES.length - 1 && (
                <div
                  className="mx-auto mt-10 hidden h-10 w-px bg-linear-to-b from-gold/50 to-transparent sm:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
