import { Flip } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

let state: ReturnType<typeof Flip.getState> | null = null;
let slug: string | null = null;

export function captureProjectFlip(element: Element, projectSlug: string) {
  if (prefersReducedMotion()) {
    state = null;
    slug = null;
    return;
  }

  slug = projectSlug;
  state = Flip.getState(element);
}

export function consumeProjectFlip(element: Element, projectSlug: string) {
  if (!state || slug !== projectSlug) {
    state = null;
    slug = null;
    return null;
  }

  const fromState = state;
  state = null;
  slug = null;

  return Flip.from(fromState, {
    targets: element,
    duration: 0.8,
    ease: "power3.inOut",
    absolute: true,
    fade: true,
    scale: true,
  });
}
