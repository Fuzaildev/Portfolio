import { site } from "@/data/portfolio";
import { renderOpenGraphImage } from "@/lib/brand-mark";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} | ${site.role} portfolio`;

export default function OpenGraphImage() {
  return renderOpenGraphImage({
    name: site.name,
    role: site.role,
    description: site.seoDescription,
  });
}
