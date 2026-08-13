export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

export function canUseMotion() {
  return !prefersReducedMotion();
}

export function canUseMagnetic() {
  return canUseMotion() && isFinePointer();
}
