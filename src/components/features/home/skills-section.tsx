import { Section } from "@/components/common/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skillCategories, SkillCategory } from "@/data/skills";
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
  Bot
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
    <Section id="skills" className="py-24 border-t border-neutral-200/80 scroll-mt-16" containerClassName="max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ============================================================ */}
        {/* 1. LEFT COLUMN: Compact Sticky Profile Card (3 cols)         */}
        {/* ============================================================ */}
        <div className="lg:col-span-3 lg:sticky lg:top-24">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm space-y-5">
            
            {/* Avatar & Name */}
            <div className="flex flex-col items-center text-center space-y-2.5">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-neutral-900 p-0.5 shadow-sm bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1534972195531-a756b1126f24?w=400&auto=format&fit=crop&q=80"
                  alt="Nimrod Camabalon"
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-base font-bold text-neutral-950">
                  Nimrod Camabalon
                </h3>
                <p className="text-[11px] font-semibold text-neutral-500 leading-tight">
                  Aspiring Full-Stack Software Developer
                </p>
              </div>
            </div>

            {/* Metadata Info */}
            <div className="space-y-2 pt-2.5 border-t border-neutral-100 text-[11px] text-neutral-600">
              <div className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-neutral-800 shrink-0" />
                <span>Open to Junior/Mid Roles</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-neutral-800 shrink-0" />
                <span>Software Development</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-800 shrink-0" />
                <span>Cebu City, Philippines</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <a href="#projects" className="block w-full">
                <Button size="sm" className="w-full justify-center gap-1.5 rounded-md bg-black text-white hover:bg-neutral-800 h-9 text-xs shadow-sm">
                  View Projects
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </a>
              <a href="#contact" className="block w-full">
                <Button variant="secondary" size="sm" className="w-full justify-center rounded-md border-neutral-200 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 h-9 text-xs">
                  Let's Talk
                </Button>
              </a>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. MIDDLE COLUMN: WIDE Scrollable Skill Cards with Logos     */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-4">
          {skillCategories.map((category: SkillCategory) => {
            const Icon = iconMap[category.iconName];
            return (
              <div
                key={category.title}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4 hover:border-neutral-300 transition-colors"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-neutral-100">
                  <span className="p-2 rounded-md bg-neutral-100 text-neutral-800">
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="default"
                      className="inline-flex items-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-200 text-xs px-3 py-1.5 font-medium rounded-full transition-colors cursor-default"
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

        {/* ============================================================ */}
        {/* 3. RIGHT COLUMN: Compact Sticky Title Panel                  */}
        {/* ============================================================ */}
        <div className="lg:col-span-3 xl:col-span-2 lg:sticky lg:top-24 space-y-4 pl-0 xl:pl-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SKILLS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 leading-tight">
            Tools and Technologies
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            — Practical toolkit built through hands-on projects, covering full stack development to deployment.
          </p>
        </div>

      </div>
    </Section>
  );
}
