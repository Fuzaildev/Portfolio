import { site } from "@/data/portfolio";

export function getContactHref() {
  if (site.email) {
    return `mailto:${site.email}`;
  }
  return site.social.linkedin;
}

export function getContactLabel() {
  return site.email || "Message on LinkedIn";
}
