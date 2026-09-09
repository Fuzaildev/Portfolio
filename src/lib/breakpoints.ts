/** Align with CSS `@media (min-width: 1024px)` desktop split. */
export const DESKTOP_MQ = "(min-width: 1024px)";

export function isDesktopViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(DESKTOP_MQ).matches;
}
