"use client";

import { useLayoutEffect } from "react";
import { flushSync } from "react-dom";
import { prefersReducedMotion } from "@/lib/motion";
import { THEME_STORAGE_KEY, resolveTheme, type Theme } from "@/lib/theme";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

const SUN_RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  // React's dev remount strips attributes the inline head script set on <html>.
  useLayoutEffect(() => {
    applyTheme(resolveTheme());
  }, []);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const current =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    const next: Theme = current === "dark" ? "light" : "dark";

    const commit = () => {
      applyTheme(next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {}
    };

    if (!document.startViewTransition || prefersReducedMotion()) {
      commit();
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const root = document.documentElement;
    root.classList.add("theme-switching");
    const transition = document.startViewTransition(() => flushSync(commit));
    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
    transition.finished.finally(() => root.classList.remove("theme-switching"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className={`theme-toggle ${className}`.trim()}
    >
      <svg aria-hidden="true" viewBox="0 0 16 16" className="theme-sun">
        <circle
          cx="8"
          cy="8"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        {SUN_RAYS.map((angle) => (
          <line
            key={angle}
            x1="8"
            y1="1.25"
            x2="8"
            y2="2.75"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            transform={`rotate(${angle} 8 8)`}
          />
        ))}
      </svg>
      <svg aria-hidden="true" viewBox="0 0 16 16" className="theme-moon">
        <path
          d="M13.5 9.6A5.75 5.75 0 1 1 6.4 2.5a4.6 4.6 0 0 0 7.1 7.1Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
