export type ProjectCoverVariant = "techworks" | "couch" | "precise" | "mocdoc";

export type ProjectModule = {
  name: string;
  detail: string;
};

export type ProjectStat = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  type: string;
  year: string;
  description: string;
  stack: string[];
  cover: ProjectCoverVariant;
  coverImage?: string;
  coverBleed?: boolean;
  role: string;
  client?: string;
  overview: string;
  challenge: string;
  outcome: string;
  quote?: string;
  highlights: string[];
  stats?: ProjectStat[];
  markets?: string[];
  modules?: ProjectModule[];
  tools?: string[];
  liveUrl?: string;
  repoUrl?: string;
  modulesHeading?: string;
  stripLabel?: string;
};

export type Role = {
  id: string;
  company: string;
  title: string;
  period: string;
  summary: string;
  points: string[];
};

export type NavItem = {
  id: string;
  label: string;
  num: string;
};
