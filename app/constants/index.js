export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skill" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { name: "React.js" },
  { name: "TypeScript" },
  { name: "Angular.js" },
  { name: "Next.js" },
  { name: "React Native" },
  { name: "Flutter" },
  { name: "Dart" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "AWS" },
  { name: "Tailwind CSS" },
  { name: "Docker" },
  { name: "REST APIs" },
  { name: "CI / CD" },
  { name: "Figma" },
  { name: "Firebase" },
  { name: "Supabase" },
  { name: "App Development" },
  { name: "Web Development" },
];

// constants/index.ts
export const Projects = [
  {
    id: 1,
    title: "DCARS",
    subtitle: "Rent-a-Car Mobile & Web Platform",
    level: "ADVANCED",
    tag: "FULL STACK",
    description:
      "Developed a scalable rental platform enabling users to browse, book, and manage car rentals. Architected AWS-hosted backend and built an admin dashboard for fleet management, pricing automation, and reporting.",
    color: "var(--color-primary)",
    images: {
      main: "../assets/projects/dcars.png",
      secondary: "../assets/projects/dcars-admin.png",
    },
  },
  {
    id: 2,
    title: "DEXPRESS",
    subtitle: "Grocery & Investment E-commerce App",
    level: "ADVANCED",
    tag: "FULL STACK",
    description:
      "Built a grocery e-commerce application integrated with an investment rewards system. Developed admin panel for inventory control, analytics, and improved backend order flow efficiency.",
    color: "var(--color-third)",
    images: {
      main: "../assets/projects/dexpress.png",
      secondary: "../assets/projects/dexpress-admin.png",
    },
  },
  {
    id: 3,
    title: "MOM’S & WIVES",
    subtitle: "Women Entrepreneur Marketplace",
    level: "ADVANCED",
    tag: "MARKETPLACE",
    description:
      "Created a scalable online marketplace for women entrepreneurs to sell handmade products. Optimized onboarding workflow and architecture, achieving 250K+ active users within 6 months.",
    color: "var(--color-primary)",
    images: {
      main: "../assets/projects/moms.png",
      secondary: "../assets/projects/moms.png",
    },
  },
  {
    id: 4,
    title: "VENTURE AI",
    subtitle: "AI Travel Itinerary Builder",
    level: "ADVANCED",
    tag: "AI PLATFORM",
    description:
      "Developed an AI-powered travel planner using OpenAI API to generate dynamic itineraries. Integrated Pexels API for visuals and improved itinerary generation speed by 40%.",
    color: "var(--color-third)",
    images: {
      main: "../assets/projects/gta.png",
      secondary: "../assets/projects/venture-dashboard.png",
    },
  },
];

export const ExperienceData = [
  {
    title: "Freelance Web Developer",
    description:
      "Built and delivered production-ready e-commerce and business websites using React and Angular. Developed responsive SPAs and achieved high client satisfaction with optimized performance.",
    period: "May 2022 - Aug 2023",
  },
  {
    title: "Full-Stack Developer – DRUV 360",
    description:
      "Developed and maintained scalable full-stack applications using React.js and Node.js. Integrated third-party APIs and improved state management and UI efficiency.",
    period: "Sep 2023 - Jan 2024",
  },
  {
    title: "Full-Stack Developer – Matajar Group (Dubai)",
    description:
      "Built and deployed scalable web and mobile applications using React, Angular, Flutter, and Node.js. Implemented CI/CD pipelines with GitHub Actions and optimized performance with secure REST API integrations.",
    period: "Apr 2025 - Jan 2026",
  },
];
