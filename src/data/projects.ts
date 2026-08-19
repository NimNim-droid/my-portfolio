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
    id: "lima-yms-byd",
    title: "LIMA Yard Management System (BYD Operations)",
    category: "ODOO & ERP",
    description:
      "Enterprise Yard Management System (YMS) engineered on Odoo ERP to automate real-time vehicle movements, VIN barcode scanning, 5-point PDI inspections, and automated slot allocations for BYD logistics.",
    image: "/assets/projects/lima-yms.png",
    tags: ["Odoo ERP", "Python (ORM)", "PostgreSQL", "VIN Tracking", "5-Point PDI", "Slot Allocation"],
    liveUrl: "https://staging-lima-yms.odoo.com/web/login?redirect=%2Fodoo%3F",
    githubUrl: "https://github.com/NimNim-droid",
    featured: true,
  },
];
