export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  iconName: "Code2" | "Layout" | "Database" | "Bot" | "ShieldCheck" | "Cpu" | "Wrench";
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC" },
      { name: "C#", icon: "https://cdn.simpleicons.org/csharp/239120" },
      { name: "Java", icon: "https://cdn.simpleicons.org/oracle/F80000" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    ],
  },
  {
    title: "Enterprise & Odoo Development",
    iconName: "Database",
    skills: [
      { name: "Odoo ERP", icon: "https://cdn.simpleicons.org/odoo/714B67" },
      { name: "Odoo Studio" },
      { name: "Python (Odoo ORM)", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "XML / QWeb Views" },
      { name: "pgAdmin", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "ERP Module Customization" },
    ],
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "Backend & Database",
    iconName: "Database",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
    ],
  },
  {
    title: "AI & Intelligent Tools",
    iconName: "Bot",
    skills: [
      { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
      { name: "Anthropic (Claude)", icon: "https://cdn.simpleicons.org/anthropic/D97706" },
      { name: "OpenAI (ChatGPT)", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/000000" },
      { name: "Cursor" },
      { name: "Prompt Engineering" },
      { name: "AI API Integration" },
    ],
  },
  {
    title: "Software Development & Architecture",
    iconName: "Code2",
    skills: [
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Requirements Analysis" },
      { name: "UI/UX Design", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Software Testing" },
      { name: "Debugging" },
      { name: "Version Control", icon: "https://cdn.simpleicons.org/git/F05032" },
    ],
  },
  {
    title: "Quality & Reliability",
    iconName: "ShieldCheck",
    skills: [
      { name: "Input Validation" },
      { name: "Error Handling" },
      { name: "Troubleshooting" },
      { name: "Performance Optimization" },
      { name: "Application Maintenance" },
    ],
  },
  {
    title: "Hardware & Software Integration",
    iconName: "Cpu",
    skills: [
      { name: "Embedded Logic" },
      { name: "Microcontrollers", icon: "https://cdn.simpleicons.org/arduino/00878F" },
      { name: "Hardware Interfacing" },
      { name: "Digital Architecture" },
    ],
  },
  {
    title: "Development Tools",
    iconName: "Wrench",
    skills: [
      { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
      { name: "npm", icon: "https://cdn.simpleicons.org/npm/CB3837" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    ],
  },
];
