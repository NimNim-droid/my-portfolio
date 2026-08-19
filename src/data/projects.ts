export interface Project {
  id: string;
  title: string;
  category: "WEB APPLICATIONS" | "ODOO & ERP" | "AI & SYSTEMS";
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "traceback-lost-found",
    title: "TraceBack — Lost & Found Network",
    category: "WEB APPLICATIONS",
    description:
      "Full-stack community-driven lost and found platform featuring real-time incident reporting, automated item matching algorithms, secure claims verification, and direct communication between owners and finders.",
    image: "/assets/projects/traceback.png",
    tags: ["React", "Node.js", "Express", "Item Matching", "Claims & Messaging", "Category Search"],
    liveUrl: "https://traceback-mocha.vercel.app/",
    featured: true,
  },
  {
    id: "lima-yms-byd",
    title: "LIMA Yard Management System (BYD Operations)",
    category: "ODOO & ERP",
    description:
      "Enterprise Yard Management System (YMS) engineered on Odoo ERP to automate real-time vehicle movements, VIN barcode scanning, 5-point PDI inspections, and automated slot allocations for BYD logistics.",
    image: "/assets/projects/lima-yms.png",
    tags: ["Odoo ERP", "Python (ORM)", "PostgreSQL", "VIN Tracking", "5-Point PDI", "Slot Allocation"],
    liveUrl: "https://staging-lima-yms.odoo.com/web/login?redirect=%2Fodoo%3F",
    featured: true,
  },
];
