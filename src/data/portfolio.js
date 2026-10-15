import figmaLogo from "../assets/tools/figma.svg";
import framerLogo from "../assets/tools/framer.png";
import wixLogo from "../assets/tools/wix.png";
import wordpressLogo from "../assets/tools/wordpress.png";
import lovableLogo from "../assets/tools/lovable.png";
import miroLogo from "../assets/tools/miro.png";

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skillset", label: "Skillset", href: "#skillset" },
  { id: "projects", label: "Project", href: "#projects" },
  { id: "experience", label: "Career Journey", href: "#experience" },
];

export const CONTACT = {
  email: "safiudeen174@gmail.com",
  phone: "+91 9962088548",
  location: "Nagapattinam, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/shaik-safiudeen/",
  portfolio: "https://shaik560.github.io/shaiksafiudeen.github.io/secpot.html",
  resume: "https://shaik560.github.io/shaiksafiudeen.github.io/Shaik_Safiudeen_Resume%284%29.pdf",
};

export const TOOLS = [
  { name: "Figma", note: "Auto layout, variants, component libraries, dev mode handoff.", logo: figmaLogo, logoBg: "#ffffff" },
  { name: "Framer", note: "Interactive, production-ready landing pages and micro-interactions.", logo: framerLogo },
  { name: "WixStudio", note: "Rapid client site builds with custom responsive layouts.", logo: wixLogo },
  { name: "WordPress", note: "Responsive sites with themes, page builders, and plugins.", logo: wordpressLogo },
  { name: "Dora", note: "AI-assisted 3D and interactive website design." },
  { name: "Lovable", note: "AI-assisted app and interface prototyping into working builds.", logo: lovableLogo, logoBg: "#ffffff" },
  { name: "Balsamiq", note: "Low-fidelity wireframing for early concepts." },
  { name: "Miro / FigJam", note: "Whiteboarding for user flows and early product thinking.", logo: miroLogo },
];

export const UX_PROCESS = [
  "User Research",
  "Wireframing & IA",
  "Prototyping",
  "Usability Testing",
  "User Flows",
  "Responsive Design",
  "Quantitative Research",
  "Qualitative Research",
  "Design Thinking",
];

export const WORKING_STYLE = [
  { title: "Client communication", note: "Presents rationale to non-design stakeholders with reasoning, not opinion." },
  { title: "Dev collaboration", note: "CS background means smoother handoff with engineers." },
  { title: "Fast iteration", note: "Three rough directions over one polished guess." },
  { title: "Self-direction", note: "Scopes, prioritizes, and finishes without someone else setting the brief." },
];

export const PROJECTS = [
  {
    id: "studycoach",
    title: "StudyCoach AI",
    summary: "AI-driven career and study planning product for Indian college students — skill-gap detection, personalised roadmaps, and a burnout-aware planner.",
    role: "Product Designer (Solo)",
    tags: ["Figma", "UX Research", "AI/UX"],
    accent: "#8c4cf9",
    overview: "An AI-driven career and study planning product built for Indian college students juggling coursework, competitive exams, and career uncertainty at the same time.",
    problem: "Students had endless study resources but no single place that adapted to their schedule, skill gaps, or burnout risk — most planning tools assumed unlimited time and motivation.",
    process: [
      "Interviewed students across engineering and arts colleges to map real weekly routines.",
      "Mapped a skill-gap detection flow comparing stated goals against current progress.",
      "Prototyped a burnout-aware planner that adjusts workload based on self-reported energy.",
      "Ran informal usability passes with 6 students to catch onboarding and check-in friction.",
    ],
    solution: "A guided onboarding that builds a personalised roadmap in under 3 minutes, plus a daily planner that re-balances itself when a student falls behind.",
    stats: [
      { value: "3 min", label: "Avg. onboarding" },
      { value: "6", label: "Students tested" },
      { value: "12", label: "Screens prototyped" },
    ],
  },
  {
    id: "buildquick",
    title: "BuildQuick",
    summary: "13-screen B2B mobile app for construction material procurement — bulk ordering, real-time delivery tracking, and OTP-secured access.",
    role: "UI/UX Designer",
    tags: ["Figma", "Mobile UI", "B2B"],
    accent: "#11c47e",
    overview: "A 13-screen B2B mobile app for construction material procurement, designed for site managers ordering from job sites, not offices.",
    problem: "Site managers placed bulk orders over phone calls and WhatsApp, with no reliable way to track delivery or verify who could approve an order.",
    process: [
      "Shadowed the procurement workflow to find where phone-call ordering broke down.",
      "Designed an OTP-secured approval flow so only authorized managers confirm large orders.",
      "Built a delivery tracking screen that prioritizes status clarity, usable in bright outdoor light.",
      "Structured bulk ordering around the material categories managers already use mentally.",
    ],
    solution: "A focused 13-screen flow: browse, bulk order, OTP approval, live tracking — designed for one-handed use on a job site.",
    stats: [
      { value: "13", label: "Screens designed" },
      { value: "OTP", label: "Secured approval" },
      { value: "1-hand", label: "Use optimized" },
    ],
  },
  {
    id: "thespot",
    title: "The Spot",
    summary: "Digital menu UI for a food court, focused on clear categorisation and an appetite-driving layout, optimised for screen and print.",
    role: "UI Designer",
    tags: ["Figma", "Visual Design"],
    accent: "#f59e0b",
    overview: "A digital menu interface for a food court, replacing a cluttered printed board with a browsable, appetite-driving screen and print-ready layout.",
    problem: "The printed menu buried popular items among dozens of categories and had no digital counterpart for in-app or kiosk ordering.",
    process: [
      "Audited the printed menu to see which categories actually drove orders.",
      "Reorganized items into clearer categories with hierarchy that prioritizes bestsellers.",
      "Designed one layout that works on a kiosk screen and as a printable PDF.",
    ],
    solution: "A clean, appetite-forward menu system with consistent rules for categorisation, pricing, and imagery — built once, deployed to screen and print.",
    stats: [
      { value: "2-in-1", label: "Screen + print" },
      { value: "100%", label: "Items recategorized" },
    ],
  },
  {
    id: "marketing-boutique",
    title: "Marketing Boutique",
    summary: "Website for a GTM engineering agency serving B2B AI startups, built in Framer to convert technical founders into booked strategy calls.",
    role: "Web Designer",
    tags: ["Framer", "Web Design", "B2B SaaS"],
    accent: "#3b82f6",
    overview: "A marketing website built in Framer for Marketing Boutique, a GTM engineering agency helping B2B AI startups with revenue architecture, GTM automation, and Agentic AI SEO (AEO/GEO).",
    problem: "A technical offer needed a site that positions the agency clearly and turns founders into booked strategy calls.",
    process: [
      "Home — positioning, framework overview, and growth outcomes.",
      "Results — case studies of client outcomes.",
      "About and Contact pages, pricing and packages, testimonials, and FAQ.",
    ],
    solution: 'Designed and built end-to-end in Framer, with responsive layout, interactive sections, and a lead-capture flow to "Get Your Growth Audit".',
    stats: [
      { value: "Live", label: "Site status" },
      { value: "Framer", label: "Built end-to-end" },
    ],
    link: { label: "Visit live site", href: "https://sparkling-reservation-722042.framer.app/" },
  },
  {
    id: "deenconnect",
    title: "DeenConnect",
    summary: "Self-directed mobile app bringing prayer times, Quran tracking, mosque locator, and community events into one place — 6 screens.",
    role: "Product Designer (Solo)",
    tags: ["Figma", "Mobile UI", "Self Project"],
    accent: "#0f766e",
    overview: 'A self-directed mobile app concept for Muslim daily life — prayer times, Quran tracking, mosque locator, and community events in one place, under the line "Stay Connected to Your Deen."',
    problem: "These habits usually live in several disconnected apps, with no single home for a daily routine.",
    process: [
      "Started from a low-fidelity onboarding wireframe to lock structure before visual style.",
      "Layered in a warm, mosque-inspired illustration style and a green/gold palette.",
      "Placed the four core features as one-tap entry points directly on onboarding.",
      "Carried the visual system through to 6 fully designed screens.",
    ],
    solution: "A calm onboarding-to-home experience that puts all four core habits one tap away.",
    stats: [
      { value: "6", label: "Screens designed" },
      { value: "4", label: "Core features unified" },
      { value: "Solo", label: "End-to-end" },
    ],
    link: {
      label: "View in Figma",
      href: "https://www.figma.com/design/eHzoE8BWF5FINNU39u6YGp/second-process?node-id=2369-21&t=LT6j68hrpaZ1vgNv-1",
    },
  },
];

export const EXPERIENCE = [
  {
    role: "UI/UX Designer",
    company: "Femtosoft Technologies",
    period: "2025 — Present",
    points: ["Designing user interfaces and experiences for ongoing product and client work."],
    skills: ["Product thinking", "Cross-functional collaboration"],
  },
  {
    role: "UI/UX Designer",
    company: "Zuntra Digital",
    period: "2024 — 2025",
    points: [
      "Designed end-to-end UI/UX for 5 client projects, from user research and wireframing through to high-fidelity Figma prototypes.",
      "Collaborated with developers and product owners to translate requirements into responsive, accessible interfaces.",
      "Ran usability tests on prototypes and iterated designs to improve task completion and navigation flow.",
    ],
    skills: ["Client management", "Usability testing", "Accessible design"],
  },
  {
    role: "Jr. Framer Designer",
    company: "Coders Boutique",
    period: "Jan — Apr 2025",
    points: [
      "Designed and developed responsive landing pages in Framer with interactive components, balancing visual design with performance.",
      "Translated high-fidelity UI mockups into production-ready web experiences.",
    ],
    skills: ["Framer development", "Performance-conscious design"],
  },
  {
    role: "UI Designer (Freelance)",
    company: "Self-employed",
    period: "2024 — Present",
    points: [
      "Designed the complete UI for a responsive food court ordering website in Figma, mapping flows from menu browsing to order placement.",
      "Maintained a structured design system for a consistent experience across mobile and desktop breakpoints.",
    ],
    skills: ["Design systems", "Client communication"],
  },
];

export const EDUCATION = {
  degree: "B.Tech, Computer Science & Business Systems",
  detail: "EGS Pillay Engineering College, Nagapattinam · CGPA 7.85",
  period: "2020 — 2024",
};
