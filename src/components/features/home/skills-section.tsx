import { Link } from "react-router";
import { Section } from "@/components/common/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skillCategories, SkillCategory } from "@/data/skills";
import { experiences, ExperienceItem } from "@/data/experience";
import { 
  Code2, 
  Layout, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  Sparkles,
  Briefcase,
  GraduationCap,
  MapPin,
  ArrowRight,
  Bot,
  Calendar,
  Building2
} from "lucide-react";

// Icon mapping helper
const iconMap = {
  Code2,
  Layout,
  Database,
  Bot,
  ShieldCheck,
  Cpu,
  Wrench,
};

export function SkillsSection() {
  return (
    <Section id="skills" className="py-24 border-t border-neutral-200/80 dark:border-neutral-800 scroll-mt-16 transition-colors" containerClassName="max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        
        {/* ============================================================ */}
        {/* 1. LEFT COLUMN: 100% Permanent Sticky Profile Card           */}
        {/* ============================================================ */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 h-fit">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm space-y-5 transition-colors">
            
            {/* Avatar & Name */}
            <div className="flex flex-col items-center text-center space-y-2.5">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-neutral-900 dark:border-white p-0.5 shadow-sm bg-neutral-100 dark:bg-neutral-800">
                <img
                  src="/assets/profile.jpg"
                  alt="Nimrod Camabalon"
                  className="w-full h-full object-cover object-[78%_20%] rounded-full transition-all duration-300"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-base font-bold text-neutral-950 dark:text-white">
                  Nimrod Camabalon
                </h3>
                <p className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 leading-tight">
                  Aspiring Full-Stack Software Developer
                </p>
              </div>
            </div>

            {/* Metadata Info */}
            <div className="space-y-2 pt-2.5 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200 shrink-0" />
                <span>Open to Junior/Mid Roles</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200 shrink-0" />
                <span>Software Development</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200 shrink-0" />
                <span>Cebu City, Philippines</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <Link to="/projects" className="block w-full">
                <Button size="sm" className="w-full justify-center gap-1.5 rounded-md bg-black dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 h-9 text-xs shadow-sm">
                  View Projects
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </Link>
              <Link to="/contact" className="block w-full">
                <Button variant="secondary" size="sm" className="w-full justify-center rounded-md border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white h-9 text-xs">
                  Let's Talk
                </Button>
              </Link>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT & MIDDLE: Two-stage Layout (Skills ➔ Experience)       */}
        {/* ============================================================ */}
        <div className="lg:col-span-9 space-y-24">
          
          {/* ========================================================== */}
          {/* STAGE 1: SKILLS & TECHNOLOGIES                             */}
          {/* ========================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 items-start">
            
            {/* Middle: Skills Cards Stack (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {skillCategories.map((category: SkillCategory) => {
                const Icon = iconMap[category.iconName];
                return (
                  <div
                    key={category.title}
                    className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                      <span className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                        <Icon className="w-4 h-4" />
                      </span>
                      <h3 className="text-sm font-bold text-neutral-900 dark:text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="default"
                          className="inline-flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 text-xs px-3.5 py-1.5 font-medium rounded-full transition-colors cursor-default"
                        >
                          {skill.icon && (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-3.5 h-3.5 object-contain"
                              loading="lazy"
                            />
                          )}
                          <span>{skill.name}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Sticky Skills Title (3 cols - ONLY visible next to skills) */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3 pl-0 xl:pl-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SKILLS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-white leading-tight">
                Tools and Technologies
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                — Practical toolkit built through hands-on projects, covering full stack development to deployment.
              </p>
            </div>

          </div>

          {/* ========================================================== */}
          {/* STAGE 2: EXPERIENCE TIMELINE                               */}
          {/* ========================================================== */}
          <div id="experience" className="grid grid-cols-1 lg:grid-cols-9 gap-8 items-start pt-12 border-t border-neutral-200/80 dark:border-neutral-800 scroll-mt-24">
            
            {/* Middle: Experience Timeline Cards Stack (6 cols) */}
            <div className="lg:col-span-6 space-y-6 relative pl-6 border-l-2 border-neutral-200 dark:border-neutral-800 ml-2">
              {experiences.map((exp: ExperienceItem) => (
                <div key={exp.role} className="relative group">
                  {/* Timeline node dot */}
                  <div className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors shadow-sm" />

                  {/* Timeline card */}
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-3.5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                    
                    {/* Period & Role */}
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        <Building2 className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="default"
                          className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 text-[11px] px-2.5 py-0.5 font-mono rounded-md cursor-default"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Right: Sticky Experience Title (3 cols - Summarized and concise) */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3 pl-0 xl:pl-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <Briefcase className="w-3.5 h-3.5" />
                <span>EXPERIENCE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-white leading-tight">
                Where I've Grown
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                — Key milestones in practical development, personal projects, and academic growth.
              </p>
            </div>

          </div>

        </div>

      </div>
    </Section>
  );
}
