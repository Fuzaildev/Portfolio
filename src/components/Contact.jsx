import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

const EMAIL = "hello@fuzailkhan.dev";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    Icon: FaLinkedin,
  },
  {
    label: "Twitter",
    href: "https://x.com/",
    Icon: FaTwitter,
  },
];

export default function Contact({ index, total }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-[100svh] flex-col justify-between rounded-t-[2rem] border-t border-gold/20 bg-surface-2 px-4 pb-8 pt-16 shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.6)] sm:rounded-t-[2.5rem] sm:px-10 sm:pb-10 sm:pt-24"
    >
      <div
        ref={ref}
        className={`mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          0{index} / {total}
        </span>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          Open to work
        </p>

        <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:mt-6 sm:text-5xl lg:text-6xl">
          Let’s build{" "}
          <span className="text-gradient-brand">something</span>
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          Got a product idea, a stubborn bug, or a role that needs a full-stack
          mind? Drop a line — I usually reply within a day.
        </p>

        {/* Primary CTA — always visible, Brittany-style big email */}
        <a
          href={`mailto:${EMAIL}`}
          className="group mt-8 inline-flex max-w-full items-center gap-2 break-all font-display text-xl font-semibold text-white transition-colors duration-300 hover:text-gold sm:mt-10 sm:text-3xl md:text-4xl"
        >
          {EMAIL}
          <ArrowUpRight
            size={22}
            className="shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-7"
          />
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_25px_-6px_rgba(255,207,64,0.8)] transition-transform duration-200 hover:scale-[1.03]"
          >
            Say hello
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/75 transition-colors duration-200 hover:border-gold/50 hover:text-gold"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        {/* Socials — always on screen */}
        <ul className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/65 transition-colors duration-200 hover:border-gold/40 hover:text-gold"
              >
                <Icon size={15} aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="mx-auto w-full max-w-4xl border-t border-line/50 pt-6 text-center">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/30">
          © {new Date().getFullYear()} Fuzail Khan
        </p>
      </footer>
    </section>
  );
}
