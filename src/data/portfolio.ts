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

export type ProjectCoverVariant = "precise";

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
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "precise-erp",
    title: "Precise ERP",
    type: "Frontend Engineering",
    year: "2025",
    description:
      "Product site for an AI-powered ERPNext SaaS platform serving GCC markets — finance, CRM, HR, healthcare, and education in one system.",
    stack: ["Django", "JavaScript", "Bootstrap", "HTML/CSS"],
    cover: "precise",
    coverImage: "/work/precise-erp.png",
    role: "Frontend engineer",
    client: "Saify Technology",
    liveUrl: "https://preciseerp.com/",
    overview:
      "Precise ERP is the public site for an ERPNext SaaS product used across Kuwait, UAE, Qatar, Saudi Arabia, and Oman. I built the frontend: module storytelling, GCC positioning, and the paths from the marketing site into operational tools such as invoicing, quotations, and purchase orders.",
    challenge:
      "The product covers five industries and five countries. The site had to explain a dense ERP without reading like a feature dump, keep localization for taxes and compliance visible, and stay fast on a Django-rendered, Bootstrap-based stack.",
    outcome:
      "The live site presents ERP, CRM, HR, healthcare, and education as distinct entries into one platform, with GCC coverage and a trial path. Operators can move from the product story into day-to-day tools without a separate brochure experience.",
    quote: "Five industries. Five countries. One frontend system.",
    stats: [
      { value: "05", label: "GCC markets" },
      { value: "05", label: "Product modules" },
      { value: "04", label: "Live tools" },
      { value: "30", label: "Day trial" },
    ],
    markets: ["Kuwait", "UAE", "Saudi Arabia", "Qatar", "Oman"],
    modules: [
      {
        name: "ERP",
        detail:
          "Finance, inventory, procurement, and AI forecasting on one cloud platform.",
      },
      {
        name: "CRM",
        detail:
          "Lead-to-cash with quotations and invoices synced to financials.",
      },
      {
        name: "HR",
        detail: "GCC-compliant payroll, leave, and workforce planning.",
      },
      {
        name: "Healthcare",
        detail: "Patient records, scheduling, and billing tied to accounting.",
      },
      {
        name: "Education",
        detail: "Admissions, attendance, grading, and fee collection.",
      },
    ],
    tools: ["Sales Invoice", "AI Sales Invoice", "Quotation", "Purchase Order"],
    highlights: [
      "Frontend for an ERPNext SaaS product site covering five GCC markets.",
      "Shared layout for finance, CRM, HR, healthcare, and education modules.",
      "Entry points to sales invoices, quotations, and purchase orders.",
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
