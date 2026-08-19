export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "2026",
    role: "Odoo Developer",
    organization: "LIMA YMS System for BYD",
    description: "Developing and customizing enterprise Odoo modules for the Yard Management System (YMS) for BYD, optimizing vehicle logistics workflows, backend data structures, and operational business logic.",
    tags: ["Odoo", "Python", "PostgreSQL", "XML", "ERP Systems"],
  },
  {
    period: "2025 — Present",
    role: "Personal Projects",
    organization: "Self-Developed Projects",
    description: "Built responsive web applications, interactive portfolio platforms, and hardware-software projects—practicing full-stack architecture, clean code principles, UI design, and creative problem-solving.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Vite"],
  },
  {
    period: "2024 — 2028",
    role: "Tertiary Education",
    organization: "Information Technology Major in Programming",
    description: "Focused on core programming fundamentals, software development, data structures, algorithms, object-oriented programming (OOP), relational database management, and web technologies.",
    tags: ["Programming", "Software Development", "OOP", "Database Systems"],
  },
];
