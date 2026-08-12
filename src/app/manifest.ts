import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} | ${site.role}`,
    short_name: site.shortName,
    description: site.seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f2f2f0",
    theme_color: "#0b0b0b",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
