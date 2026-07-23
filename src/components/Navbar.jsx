import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [mobileOpen]);

  const handleLinkClick = (href) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-6">
      <nav
        className={`flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border px-2 py-2 pl-3 transition-all duration-300 sm:pl-4 ${
          scrolled
            ? "border-line/70 bg-surface/80 shadow-[0_10px_40px_-12px_rgba(255,207,64,0.15)] backdrop-blur-xl"
            : "border-white/5 bg-surface/50 backdrop-blur-lg"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className="flex shrink-0 items-center gap-2 sm:gap-2.5"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gold font-display text-sm font-bold text-ink shadow-[0_0_18px_-2px_rgba(255,207,64,0.55)]">
            F
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-white">
            Fuzail<span className="text-gold">.</span>
          </span>
        </a>

        {/* Desktop links — hide earlier so they don't crush on tablets */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? "text-ink"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {active === link.href && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-gold" />
                )}
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact")}
            className="group hidden items-center gap-1 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-[0_0_20px_-4px_rgba(255,207,64,0.7)] transition-transform duration-200 hover:scale-[1.03] md:flex"
          >
            Let's talk
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line/70 bg-surface-2/60 text-white/80 transition-colors duration-200 hover:text-gold lg:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile / tablet dropdown */}
      <div
        className={`absolute inset-x-3 top-[calc(100%+0.5rem)] origin-top overflow-hidden rounded-3xl border border-line/70 bg-surface/95 backdrop-blur-xl transition-all duration-300 sm:inset-x-4 lg:hidden ${
          mobileOpen
            ? "max-h-[min(28rem,70vh)] scale-100 opacity-100"
            : "pointer-events-none max-h-0 scale-95 opacity-0"
        }`}
      >
        <ul className="flex max-h-[min(28rem,70vh)] flex-col gap-1 overflow-y-auto p-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? "bg-gold/15 text-gold"
                    : "text-white/70 hover:bg-surface-2 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-1 md:hidden">
            <a
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className="flex items-center justify-center gap-1 rounded-2xl bg-gold px-4 py-3 text-sm font-semibold text-ink"
            >
              Let's talk
              <ArrowUpRight size={15} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
