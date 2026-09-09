import { site } from "@/data/portfolio";

export function splitSiteName(name: string = site.name) {
  const firstName = name.split(" ")[0] ?? name;
  const lastName = name.slice(firstName.length);
  return { firstName, lastName };
}
