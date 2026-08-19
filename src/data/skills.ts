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
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "C", icon: "https://cdn.simpleicons.org/c" },
      { name: "C#", icon: "https://cdn.simpleicons.org/csharp" },
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
    ],
  },
  {
    title: "Enterprise & Odoo Development",
    iconName: "Database",
    skills: [
      { name: "Odoo ERP", icon: "https://cdn.simpleicons.org/odoo" },
      { name: "Odoo Studio" },
      { name: "Python (Odoo ORM)", icon: "https://cdn.simpleicons.org/python" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "XML / QWeb Views" },
      { name: "pgAdmin", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "ERP Module Customization" },
    ],
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "Backend & Database",
    iconName: "Database",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express" },
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx" },
    ],
  },
  {
    title: "AI & Intelligent Tools",
    iconName: "Bot",
    skills: [
      { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
      { name: "Anthropic (Claude)", icon: "https://cdn.simpleicons.org/anthropic" },
      { name: "OpenAI (ChatGPT)", icon: "https://cdn.simpleicons.org/openai" },
      { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot" },
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
      { name: "UI/UX Design", icon: "https://cdn.simpleicons.org/figma" },
      { name: "Software Testing" },
      { name: "Debugging" },
      { name: "Version Control", icon: "https://cdn.simpleicons.org/git" },
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
      { name: "Microcontrollers", icon: "https://cdn.simpleicons.org/arduino" },
      { name: "Hardware Interfacing" },
      { name: "Digital Architecture" },
    ],
  },
  {
    title: "Development Tools",
    iconName: "Wrench",
    skills: [
      { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
      { name: "npm", icon: "https://cdn.simpleicons.org/npm" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
    ],
  },
];
