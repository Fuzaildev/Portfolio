export const site = {
  name: "Fuzail Khan",
  shortName: "FK",
  role: "Full Stack Developer",
  url: "https://fuzailkhan.vercel.app",
  email: "hello@yourname.dev",
  location: "Available worldwide",
  seoDescription:
    "Full stack developer turning ideas into responsive interfaces, solid APIs, and scalable products — React on the front, Python and Django on the back.",
  keywords: [
    "Fuzail Khan",
    "Full Stack Developer",
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
    "I build products where interface clarity, motion discipline, and engineering depth meet — from first sketch to production deployment.",
  bio: [
    "I work across design and code, treating every screen as both a system and a story. My process starts with understanding the user, continues through typography and interaction decisions, and ends with maintainable architecture.",
    "Whether it's a SaaS dashboard, a brand website, or a design system, I aim for work that feels precise without being cold — structured, readable, and built to last.",
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    twitter: "https://twitter.com",
  },
};

export const indexNav = [
  { id: "intro", label: "Intro", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "work", label: "Selected Work", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

export type Project = {
  id: string;
  title: string;
  type: string;
  year: string;
  description: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Atlas Platform",
    type: "Product Design + Full Stack",
    year: "2025",
    description:
      "Multi-tenant analytics platform with a shared component library, role-based dashboards, and real-time data views.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Figma"],
    link: "#",
  },
  {
    id: "02",
    title: "North Commerce",
    type: "Frontend Engineering",
    year: "2025",
    description:
      "Headless storefront focused on performance, editorial product pages, and a custom checkout with motion-led storytelling.",
    stack: ["React", "Shopify", "GSAP", "Tailwind"],
    link: "#",
  },
  {
    id: "03",
    title: "Pulse Health",
    type: "UI/UX + Mobile",
    year: "2024",
    description:
      "Patient wellness application with accessible onboarding, health data visualization, and a calm visual language.",
    stack: ["React Native", "TypeScript", "Figma"],
    link: "#",
  },
  {
    id: "04",
    title: "Studio Index",
    type: "Design System",
    year: "2024",
    description:
      "Token-driven component library and documentation site used across marketing and product teams.",
    stack: ["React", "Storybook", "CSS Variables"],
    link: "#",
  },
  {
    id: "05",
    title: "Verse Creative",
    type: "Creative Development",
    year: "2023",
    description:
      "Agency portfolio with scroll choreography, case study templates, and a modular CMS-driven layout system.",
    stack: ["Three.js", "GSAP", "Lenis"],
    link: "#",
  },
];

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
    title: "Full Stack Developer",
    period: "Jul 2026 — Present",
    summary:
      "Building scalable sites end to end — React on the surface, solid APIs and data underneath, plus Framer builds with the kind of smooth scrolling that feels intentional.",
    points: [
      "Shipping full-stack websites across frontend, backend, and database — designed to stay fast as they grow.",
      "Crafting Framer experiences with polished motion and Lenis-style smooth scrolling.",
      "Keeping the stack coherent so design, interaction, and data all move as one product.",
    ],
  },
  {
    id: "2",
    company: "Saify Technology",
    title: "Frontend Developer",
    period: "Mar 2025 — Jun 2026",
    summary:
      "Built cross-platform web and mobile products with React, Flutter, and JavaScript — with Django APIs and third-party integrations keeping everything wired for production.",
    points: [
      "Developed responsive web and mobile apps focused on performance, usability, and clean interaction.",
      "Shipped Flutter apps with prompt-assisted workflows for UI, app logic, and API integration.",
      "Built Django backend APIs for authentication, data handling, and live production features.",
      "Integrated third-party APIs and SDKs across Canva, Adobe Photoshop, Microsoft Office, and Google Workspace.",
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
