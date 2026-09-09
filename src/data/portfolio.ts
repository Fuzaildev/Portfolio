import type { NavItem, Project, Role } from "@/data/types";

export type {
  NavItem,
  Project,
  ProjectCoverVariant,
  ProjectModule,
  ProjectStat,
  Role,
} from "@/data/types";

export const site = {
  name: "Fuzail Khan",
  shortName: "FK",
  role: "Full Stack Engineer",
  url: "https://fuzailkhan.vercel.app",
  email: "thefuzailk@gmail.com",
  location: "Remote · Worldwide",
  seoDescription:
    "Full stack engineer building web applications with React, Python, and Django. UI implementation, REST APIs, database design, and deployment.",
  keywords: [
    "Fuzail Khan",
    "Full Stack Engineer",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Django Developer",
    "Python Developer",
    "Web Developer",
    "Portfolio",
    "GSAP",
    "Framer Motion",
    "MySQL",
  ],
  statement:
    "Full-stack engineer working across React, Python, APIs, databases, and the systems that connect them.",
  bio: [
    "From the interface users interact with to the API, database, and deployment underneath it, I enjoy working across the stack and making the pieces work together properly.",
    "My work spans SaaS products, business platforms, healthcare systems, and high-end marketing sites. I care about clean interfaces, sensible architecture, performance, and shipping something that can actually be used—not just something that looks good in a demo.",
  ],
  facts: [
    { label: "Role", value: "Full stack engineer" },
    { label: "Focus", value: "End-to-end web apps" },
    { label: "Location", value: "Remote · Worldwide" },
  ],
  social: {
    github: "https://github.com/fuzaildev",
    linkedin: "https://www.linkedin.com/in/thefuzailkhan",
    x: "https://x.com/thefuzailkhan",
  },
};

export const indexNav: NavItem[] = [
  { id: "intro", label: "Intro", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "work", label: "Selected Work", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

export const aboutQuote = ["I like owning", "the whole problem."];

export const projects: Project[] = [
  {
    id: "01",
    slug: "precision-techworks",
    title: "Precision Techworks",
    type: "Full Stack",
    year: "2026",
    description:
      "An industrial studio site built end to end—services, work gallery, process story, and consultation path—with SEO and AEO so search and answer engines can cite the brand.",
    stack: ["React", "Vite", "GSAP", "Lenis", "Three.js"],
    cover: "techworks",
    coverImage: "/work/precision-techworks.jpg",
    coverBleed: true,
    role: "Full Stack Engineer",
    client: "Precision Techworks",
    liveUrl: "https://www.precisiontechworks.in/",
    overview:
      "Precision Techworks is a CAD design and 3D printing studio based in India. I built the site end to end: brand hero, services, selected work, process pipeline, FAQ, and consultation path, with SEO and AEO (structured data, speakable answers, FAQ schema) so search and answer engines can cite the studio clearly.",
    challenge:
      "The brand sells both digital CAD delivery and physical printed parts across time zones. The site had to feel industrial and precise, showcase models you can hold, and answer buyer questions (files, materials, shipping, pricing) in a way that works for Google, AI overviews, and remote WhatsApp leads — without reading like a keyword dump.",
    outcome:
      "Shipped a live site with 2 service lines, 6 showcased projects, a 4-step delivery pipeline, and a 10-answer FAQ. Structured data covers Organization, FAQPage, HowTo, ItemList, and speakable copy, with a single path from first look to consultation.",
    quote: "From model to matter. Built for search and answers.",
    stats: [
      { value: "02", label: "Service lines" },
      { value: "06", label: "Projects showcased" },
      { value: "10", label: "FAQ answers" },
      { value: "05", label: "Schema types" },
    ],
    markets: ["India", "USA", "UK", "Europe", "Worldwide"],
    stripLabel: "Serving",
    modulesHeading: "Services, work, pipeline, and answers.",
    modules: [
      {
        name: "Services",
        detail:
          "CAD design and 3D printing under one roof — parametric models to production-ready parts.",
      },
      {
        name: "Works",
        detail:
          "Selected CAD and printed projects: lamps, racks, enclosures, and desk pieces you can hold.",
      },
      {
        name: "Pipeline",
        detail:
          "Brief, design, print, delivery: a four-step path from request to shipped files or parts.",
      },
      {
        name: "SEO / AEO",
        detail:
          "Schema graph, FAQPage, HowTo, speakable copy, and service pages for search and answer engines.",
      },
    ],
    tools: ["CAD Design", "3D Printing", "FAQ / AEO", "Consultation"],
    highlights: [
      "Built the full marketing system: hero, 2 services, work gallery, pipeline, FAQ, and consultation CTA.",
      "Implemented 5 schema types (Organization, FAQPage, HowTo, ItemList, speakable) for search and answer engines.",
      "Structured the site for remote leads across India, USA, UK, Europe, and worldwide shipping.",
    ],
  },
  {
    id: "02",
    slug: "couch-and-closet",
    title: "Couch & Closet",
    type: "Full Stack",
    year: "2026",
    description:
      "A premium interior-design website built around storytelling, project discovery, and consultation conversion.",
    stack: ["Framer", "GSAP", "Lenis", "React"],
    cover: "couch",
    coverImage: "/work/couch-and-closet.jpg",
    coverBleed: true,
    role: "Full Stack Engineer",
    builtFor: "Couch & Closet",
    through: "Kailune",
    liveUrl: "https://couchandcloset.com/",
    overview:
      "Couch & Closet is a luxury interior design studio in Bengaluru. I built the public site: a full-bleed hero, studio team, residential and commercial work, a three-step process, client proof, a budget estimator, and a consultation booking path, positioned as a considered brand, not a generic interior brochure.",
    challenge:
      "The studio needed a site that feels as restrained as the rooms they design, while still carrying a large project gallery, team stories, testimonials, and a lead path. Motion and photography had to stay premium without burying the call to book.",
    outcome:
      "Shipped a live site with 50+ projects across 2 work categories, a filtered gallery, a 3-step process, a budget estimator, and a consultation booking funnel from first visit to a booked conversation.",
    quote: "Space worth coming home to. Told as a studio, not a catalog.",
    stats: [
      { value: "50+", label: "Projects showcased" },
      { value: "02", label: "Work categories" },
      { value: "01", label: "Budget estimator" },
      { value: "01", label: "Consultation funnel" },
    ],
    markets: ["Residential", "Commercial"],
    stripLabel: "Designed for",
    modulesHeading: "Studio, work, and a path to book.",
    modules: [
      {
        name: "Studio",
        detail:
          "Hero, philosophy, and team: the people and the point of view behind the rooms.",
      },
      {
        name: "Works",
        detail:
          "Filtered residential and commercial interiors with type, location, and area.",
      },
      {
        name: "Process",
        detail:
          "Reach out, design, delivery: a three-step story from brief to handover.",
      },
      {
        name: "Leads",
        detail:
          "Budget estimator and consultation booking so interest becomes a conversation.",
      },
    ],
    tools: ["Work gallery", "Team", "Budget estimator", "Consultation"],
    highlights: [
      "Built the studio narrative and a filtered gallery covering 50+ residential and commercial projects.",
      "Shipped a 3-step process story plus social proof without turning the site into a brochure dump.",
      "Added a budget estimator and consultation funnel so discovery converts into booked conversations.",
    ],
  },
  {
    id: "03",
    slug: "precise-erp",
    title: "Precise ERP",
    type: "Frontend Engineering",
    year: "2025",
    description:
      "A product marketing frontend for an AI-powered ERP SaaS—module storytelling, multi-market positioning, and clear paths from the site into day-to-day tools.",
    stack: ["Django", "JavaScript", "Bootstrap", "HTML/CSS"],
    cover: "precise",
    coverImage: "/work/precise-erp.png",
    role: "Frontend engineer",
    builtFor: "Precise ERP",
    through: "Saify Technology",
    liveUrl: "https://preciseerp.com/",
    overview:
      "Precise ERP is the public site for an ERPNext SaaS product used across Kuwait, UAE, Qatar, Saudi Arabia, and Oman. I built the frontend: module storytelling, GCC positioning, and the paths from the marketing site into operational tools such as invoicing, quotations, and purchase orders.",
    challenge:
      "The product covers five industries and five countries. The site had to explain a dense ERP without reading like a feature dump, keep localization for taxes and compliance visible, and stay usable on a Django-rendered, Bootstrap-based stack.",
    outcome:
      "Shipped a frontend covering 5 product modules across 5 GCC markets, with entry points into 4 live tools (sales invoice, AI sales invoice, quotation, purchase order) and a 30-day trial path.",
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
      "Built the marketing frontend for 5 modules across 5 GCC markets on a shared layout system.",
      "Connected the product story to 4 operational tools operators use day to day.",
      "Kept localization and compliance visible without turning the site into a feature dump.",
    ],
    modulesHeading: "Five modules, one system.",
  },
  {
    id: "04",
    slug: "mocdoc",
    title: "MocDoc",
    type: "Full Stack",
    year: "2025",
    description:
      "A full-stack healthcare platform with role-based portals for doctors, staff, and patients—appointments, records, prescriptions, and lab workflows on Flask and MySQL.",
    stack: ["Flask", "Python", "MySQL", "HTML/CSS", "JavaScript"],
    cover: "mocdoc",
    coverImage: "/work/mocdoc.webp",
    role: "Full stack engineer",
    repoUrl: "https://github.com/Fuzaildev/Mocdoc",
    overview:
      "MocDoc is a clinic operations product: a public healthcare site plus authenticated portals. I built the Flask application, MySQL patient model, and the HTML templates that take doctors, staff, and patients from registration through appointments, records, prescriptions, and lab tests.",
    challenge:
      "Three user types needed different dashboards without three separate apps. Patient data had to persist in MySQL, sessions had to survive the jump from signup to booking, and the marketing pages still had to explain hospital, clinic, laboratory, and pharmacy products clearly.",
    outcome:
      "Shipped one Flask + MySQL codebase serving 3 authenticated portals and 4 care products, with 20+ app screens covering registration, appointments, records, prescriptions, and lab workflows.",
    quote: "Hospital, clinic, lab, and pharmacy. One Flask stack.",
    stats: [
      { value: "03", label: "User portals" },
      { value: "04", label: "Care products" },
      { value: "20+", label: "App screens" },
      { value: "01", label: "Shared codebase" },
    ],
    markets: ["Doctors", "Clinic staff", "Patients"],
    stripLabel: "Built for",
    modulesHeading: "Four products, three portals.",
    modules: [
      {
        name: "Hospital",
        detail:
          "Registration-to-discharge workflows for clinical and administrative staff.",
      },
      {
        name: "Clinic",
        detail:
          "Appointments, case sheets, patient dashboards, and billing in one clinic view.",
      },
      {
        name: "Laboratory",
        detail:
          "Sample lifecycle from billing through test execution and report dispatch.",
      },
      {
        name: "Pharmacy",
        detail:
          "Prescription handling with inventory tracking for in-house pharmacies.",
      },
    ],
    tools: ["Appointments", "Prescriptions", "Lab tests", "Medical records"],
    highlights: [
      "Built 3 role-based portals (doctor, staff, patient) in a single Flask application.",
      "Modeled patient data in MySQL and carried sessions from registration through booking.",
      "Covered hospital, clinic, laboratory, and pharmacy product stories plus 20+ operational screens.",
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

export const roles: Role[] = [
  {
    id: "1",
    company: "Kailune",
    title: "Full Stack Engineer",
    period: "Jul 2026 to Present",
    summary:
      "Own full stack delivery across React applications, Django/Python services, and MySQL data layers. Also ship marketing sites in Framer with scroll-driven motion.",
    points: [
      "Built full-stack features across React, REST APIs, and MySQL, from UI architecture through database and deployment.",
      "Shipped Framer marketing sites with Lenis smooth scroll and GSAP animation, including Couch & Closet.",
      "Designed technical approach for component structure, API contracts, and iterative rollout across client work.",
    ],
  },
  {
    id: "2",
    company: "Saify Technology",
    title: "Frontend Developer",
    period: "Mar 2025 to Jun 2026",
    summary:
      "Built React and Flutter clients on Django REST APIs for cross-platform web and mobile products.",
    points: [
      "Shipped responsive React web apps and Flutter mobile clients with shared Django API contracts.",
      "Built Django REST endpoints for authentication, business logic, file handling, and product workflows.",
      "Integrated Canva, Adobe Creative Cloud, Microsoft 365, and Google Workspace APIs and SDKs into client products.",
      "Designed frontend architecture for Precise ERP's public site across five modules and five GCC markets.",
    ],
  },
];

export const capabilityGroups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Next.js", "JavaScript"],
  },
  {
    label: "Backend",
    items: ["Express.js", "Python", "Django", "Flask", "REST APIs"],
  },
  {
    label: "Data",
    items: ["MySQL", "SQL", "MongoDB"],
  },
  {
    label: "Motion / UI",
    items: ["GSAP", "Framer Motion", "Lenis", "Locomotive Scroll"],
  },
];
