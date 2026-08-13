export const site = {
  name: "Fuzail Khan",
  shortName: "FK",
  role: "Full Stack Engineer",
  url: "https://fuzailkhan.vercel.app",
  email: "thefuzailk@gmail.com",
  location: "Remote · Worldwide",
  seoDescription:
    "Full stack engineer shipping production web applications with React, Python, and Django. UI implementation, REST APIs, database design, and deployment.",
  keywords: [
    "Fuzail Khan",
    "Full Stack Engineer",
    "Frontend Developer",
    "React Developer",
    "Django Developer",
    "Python Developer",
    "Web Developer",
    "Portfolio",
    "GSAP",
    "Framer Motion",
    "Flutter",
    "MySQL",
  ],
  statement:
    "I build and ship full stack web products: React frontends, Python/Django APIs, and the data layer to support them in production.",
  bio: [
    "I work across the stack on web applications, from component architecture and API contracts to schema design and deployment. I prioritize maintainable code, measurable performance, and systems that are straightforward to extend as requirements change.",
    "Recent work includes SaaS dashboards, client-facing marketing sites, internal tools, and Flutter apps backed by Django REST APIs. I care about getting the fundamentals right: auth, error handling, caching, and interfaces that stay fast under real traffic.",
  ],
  facts: [
    { label: "Role", value: "Full stack engineer" },
    { label: "Focus", value: "Production web systems" },
    { label: "Location", value: "Remote · Worldwide" },
  ],
  social: {
    github: "https://github.com/fuzaildev",
    linkedin: "https://www.linkedin.com/in/thefuzailkhan",
    x: "https://x.com/thefuzailkhan",
  },
};

export const indexNav = [
  { id: "intro", label: "Intro", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "work", label: "Selected Work", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

export const aboutQuote = [
  "I optimize for software",
  "that is reliable in production,",
  "straightforward to maintain,",
  "and fast for end users.",
];

export type ProjectCoverVariant =
  | "atlas"
  | "commerce"
  | "pulse"
  | "studio"
  | "verse";

export type Project = {
  id: string;
  slug: string;
  title: string;
  type: string;
  year: string;
  description: string;
  stack: string[];
  cover: ProjectCoverVariant;
  role: string;
  overview: string;
  challenge: string;
  outcome: string;
  highlights: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "atlas-platform",
    title: "Atlas Platform",
    type: "Full Stack",
    year: "2025",
    description:
      "Multi-tenant analytics platform with role-based access, shared React components, PostgreSQL-backed reporting, and real-time dashboard updates.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Figma"],
    cover: "atlas",
    role: "Full stack engineer",
    overview:
      "Atlas is a multi-tenant analytics product for teams that need shared reporting without leaking data across accounts. I owned the React application, API contracts, and the PostgreSQL schema that made tenant isolation the default rather than a later patch.",
    challenge:
      "The product had to feel instant for operators while enforcing role-based access and keeping dashboard queries cheap as tenants grew. The previous UI mixed presentational components with one-off data fetching, so every new report duplicated auth and caching logic.",
    outcome:
      "We shipped a shared component layer, tenant-aware reporting endpoints, and live dashboard updates that stayed responsive under concurrent use. New report views now reuse the same access and query patterns instead of inventing their own.",
    highlights: [
      "Role-based access baked into the API and UI, not only the route layer.",
      "PostgreSQL reporting model designed for tenant isolation and cacheable aggregates.",
      "Realtime dashboard updates without blocking the primary query path.",
    ],
  },
  {
    id: "02",
    slug: "north-commerce",
    title: "North Commerce",
    type: "Frontend Engineering",
    year: "2025",
    description:
      "Headless Shopify storefront with a custom React checkout, optimized product pages, and GSAP-driven page transitions without sacrificing load time.",
    stack: ["React", "Shopify", "GSAP", "Tailwind"],
    cover: "commerce",
    role: "Frontend engineer",
    overview:
      "North Commerce needed a storefront that felt like a brand site, not a theme. I built a headless React storefront on Shopify with a custom checkout flow and motion that stayed within a strict performance budget.",
    challenge:
      "The existing theme could not support the checkout UX or the editorial transitions the brand wanted. Adding animation on top of an unoptimized product page would have cost conversion. Motion had to be progressive and cheap.",
    outcome:
      "Product pages loaded faster than the previous theme, checkout stayed on-brand, and GSAP transitions were gated behind reduced-motion and idle-ready conditions so Core Web Vitals stayed intact.",
    highlights: [
      "Custom React checkout on a headless Shopify catalog.",
      "GSAP page transitions that respect reduced motion and do not block LCP.",
      "Product templates tuned for image priority and predictable layout.",
    ],
  },
  {
    id: "03",
    slug: "pulse-health",
    title: "Pulse Health",
    type: "Mobile + API",
    year: "2024",
    description:
      "Cross-platform wellness app with accessible onboarding, health metric charts, and offline-friendly data sync via REST APIs.",
    stack: ["React Native", "TypeScript", "Figma"],
    cover: "pulse",
    role: "Mobile + API",
    overview:
      "Pulse Health is a wellness client for people who track a few metrics consistently, not a medical record system. I built the React Native app and the REST sync layer so onboarding, charts, and offline edits stayed coherent.",
    challenge:
      "Users open the app in short sessions, often on poor connections. The first version assumed the network was always there, so charts went empty and onboarding felt brittle. Accessibility on form-heavy screens was also incomplete.",
    outcome:
      "Onboarding became keyboard- and screen-reader-friendly, charts rendered from local state immediately, and queued edits synced when the network returned without duplicating records.",
    highlights: [
      "Accessible onboarding with clear focus order and labeled controls.",
      "Offline-first metric store with conflict-safe REST sync.",
      "Chart views that read cached data first, then refresh.",
    ],
  },
  {
    id: "04",
    slug: "studio-index",
    title: "Studio Index",
    type: "Design System",
    year: "2024",
    description:
      "Design system with CSS custom properties, React primitives, and Storybook documentation adopted by marketing and product teams.",
    stack: ["React", "Storybook", "CSS Variables"],
    cover: "studio",
    role: "Design systems",
    overview:
      "Studio Index started as a set of one-off marketing components and became the shared language for product and brand. I defined tokens, React primitives, and Storybook docs that both teams could actually ship from.",
    challenge:
      "Marketing and product were drifting apart: hex values in both codebases, buttons that looked similar but behaved differently, and no single place to see what was allowed. A heavy component library would have been ignored.",
    outcome:
      "A token-first system with a small primitive set replaced the drift. Marketing adopted the same buttons, type, and spacing as product, and new pages stopped introducing private color scales.",
    highlights: [
      "CSS custom properties as the source of truth for color, type, and space.",
      "React primitives documented in Storybook with usage rules, not just snapshots.",
      "Adoption across marketing and product without a rewrite of either app.",
    ],
  },
  {
    id: "05",
    slug: "verse-creative",
    title: "Verse Creative",
    type: "Frontend",
    year: "2023",
    description:
      "Agency portfolio built on a CMS-driven layout system with GSAP scroll interactions, reusable case study templates, and Lenis smooth scrolling.",
    stack: ["Three.js", "GSAP", "Lenis"],
    cover: "verse",
    role: "Frontend engineer",
    overview:
      "Verse needed a portfolio that could take new case studies without a developer rebuild every time. I built a CMS-driven layout system with reusable case study templates, GSAP scroll scenes, and Lenis for the scroll feel.",
    challenge:
      "The studio wanted cinematic scroll, but editors had to publish independently. Hard-coded pages would have looked better in week one and collapsed by month three. Motion also had to degrade cleanly on mobile.",
    outcome:
      "Editors can assemble case studies from a small set of blocks. Scroll scenes attach to those blocks, and reduced-motion users get the same content without the pin choreography.",
    highlights: [
      "CMS blocks that map to a fixed set of layout and motion templates.",
      "GSAP scroll interactions that editors do not have to configure by hand.",
      "Lenis smooth scroll with a reduced-motion fallback to native scrolling.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return projects[0];
  return projects[(index + 1) % projects.length];
}

export type Role = {
  id: string;
  company: string;
  title: string;
  period: string;
  summary: string;
  points: string[];
};

export const roles: Role[] = [
  {
    id: "1",
    company: "Kailune",
    title: "Full Stack Engineer",
    period: "Jul 2026 to Present",
    summary:
      "Own full stack delivery across React applications, Django/Python services, and MySQL data layers. Also ship marketing sites in Framer with performance-focused motion.",
    points: [
      "Build and deploy features spanning React UI, REST endpoints, and database schema changes.",
      "Deliver Framer sites with Lenis smooth scroll and GSAP animation, tuned for Core Web Vitals.",
      "Drive technical decisions from component structure through production rollout and iteration.",
    ],
  },
  {
    id: "2",
    company: "Saify Technology",
    title: "Frontend Developer",
    period: "Mar 2025 to Jun 2026",
    summary:
      "Developed React and Flutter clients integrated with Django REST APIs for cross-platform web and mobile products in production.",
    points: [
      "Shipped responsive web apps and Flutter mobile clients focused on performance and maintainable state management.",
      "Implemented Django REST APIs for authentication, business logic, and third-party service integration.",
      "Built backend endpoints for data persistence, file handling, and live production features.",
      "Integrated third-party APIs and SDKs for Canva, Adobe Creative Cloud, Microsoft 365, and Google Workspace.",
    ],
  },
];

export const capabilities = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Flutter",
  "GSAP",
  "Framer Motion",
  "Lenis",
  "Python",
  "Django",
  "Flask",
  "MySQL",
];
