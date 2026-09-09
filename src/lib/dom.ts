/** Index of the element closest to a horizontal origin (edge or center). */
export function findClosestIndex(
  elements: HTMLElement[],
  originX: number,
  mode: "edge" | "center" = "edge"
) {
  let closest = 0;
  let closestDistance = Infinity;

  elements.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    const point =
      mode === "center" ? rect.left + rect.width / 2 : rect.left;
    const distance = Math.abs(point - originX);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = index;
    }
  });

  return closest;
}

export function padIndex(index: number, digits = 2) {
  return String(index).padStart(digits, "0");
}
