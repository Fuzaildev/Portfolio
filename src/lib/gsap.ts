import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

let registered = false;

export function registerGsapPlugins() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger, Flip);
  registered = true;
}

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

export { gsap, ScrollTrigger, Flip };
