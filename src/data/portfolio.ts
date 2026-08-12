export const site = {
  name: "Fuzail Khan",
  shortName: "FK",
  role: "Full Stack Engineer",
  url: "https://fuzailkhan.vercel.app",
  // email: "hello@yourname.dev",
  email: "",
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
    type: "Full Stack",
    year: "2025",
    description:
      "Multi-tenant analytics platform with role-based access, shared React components, PostgreSQL-backed reporting, and real-time dashboard updates.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Figma"],
    link: "#",
  },
  {
    id: "02",
    title: "North Commerce",
    type: "Frontend Engineering",
    year: "2025",
    description:
      "Headless Shopify storefront with a custom React checkout, optimized product pages, and GSAP-driven page transitions without sacrificing load time.",
    stack: ["React", "Shopify", "GSAP", "Tailwind"],
    link: "#",
  },
  {
    id: "03",
    title: "Pulse Health",
    type: "Mobile + API",
    year: "2024",
    description:
      "Cross-platform wellness app with accessible onboarding, health metric charts, and offline-friendly data sync via REST APIs.",
    stack: ["React Native", "TypeScript", "Figma"],
    link: "#",
  },
  {
    id: "04",
    title: "Studio Index",
    type: "Design System",
    year: "2024",
    description:
      "Design system with CSS custom properties, React primitives, and Storybook documentation adopted by marketing and product teams.",
    stack: ["React", "Storybook", "CSS Variables"],
    link: "#",
  },
  {
    id: "05",
    title: "Verse Creative",
    type: "Frontend",
    year: "2023",
    description:
      "Agency portfolio built on a CMS-driven layout system with GSAP scroll interactions, reusable case study templates, and Lenis smooth scrolling.",
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
