import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsapPlugins() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

// Register as soon as this module loads on the client so child effects
// can use ScrollTrigger before the parent SmoothScrollProvider mounts.
if (typeof window !== "undefined") {
  registerGsapPlugins();
}

/** Wait for web fonts + two animation frames so pin distances are stable. */
export function whenLayoutReady(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  const fontsReady =
    "fonts" in document ? document.fonts.ready : Promise.resolve();

  return fontsReady.then(
    () =>
      new Promise((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      })
  );
}

export { gsap, ScrollTrigger };
