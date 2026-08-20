import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Section } from "@/components/common/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
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
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Layout,
  Database,
  Bot,
  ShieldCheck,
  Cpu,
  Wrench,
};

export function SkillsSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState<number>(0);

  // Dynamic Scroll Progress Calculation for the Flowing Timeline Line
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start filling when timeline enters the middle/top of viewport
      const startOffset = windowHeight * 0.75;
      const totalHeight = rect.height;
      const currentProgress = startOffset - rect.top;

      if (currentProgress <= 0) {
        setFillHeight(0);
      } else if (currentProgress >= totalHeight) {
        setFillHeight(totalHeight);
      } else {
        setFillHeight(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="skills" className="py-24 border-t border-neutral-200/80 dark:border-neutral-800 scroll-mt-16 transition-colors" containerClassName="max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        
        {/* ============================================================ */}
        {/* 1. LEFT COLUMN: 100% Permanent Sticky Profile Card           */}
        {/* ============================================================ */}
        <div className="lg:col-span-3 lg:sticky lg:top-24 h-fit">
          <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-neutral-900/80 p-6 shadow-sm space-y-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700">
            
            {/* Avatar & Name */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-neutral-900 dark:border-white p-0.5 shadow-sm bg-neutral-100 dark:bg-neutral-800">
                <img
                  src="/assets/profile.jpg"
                  alt="Nimrod Cambalon"
                  className="w-full h-full object-cover object-[78%_20%] rounded-full transition-all duration-300"
                />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-base font-bold text-neutral-950 dark:text-white tracking-tight">
                  Nimrod Cambalon
                </h3>
                <p className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 leading-tight">
                  Aspiring Full-Stack Software Developer
                </p>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Roles</span>
              </div>
            </div>

            {/* Metadata Info */}
            <div className="space-y-2.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-[11px] text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
                <span>Junior/Mid Full-Stack Roles</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
                <span>Software Development</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
                <span>Cebu City, Philippines</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
              <Link to="/projects" className="block w-full">
                <Button size="sm" className="w-full justify-center gap-1.5 rounded-md bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 h-9 text-xs font-mono font-bold shadow-sm transition-all group">
                  <span>View Projects</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link to="/contact" className="block w-full">
                <Button variant="secondary" size="sm" className="w-full justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white h-9 text-xs font-mono font-bold">
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
            <div className="lg:col-span-6 space-y-5">
              {skillCategories.map((category: SkillCategory) => {
                const Icon = iconMap[category.iconName] || Code2;
                return (
                  <SpotlightCard
                    key={category.title}
                    spotlightColor="rgba(16, 185, 129, 0.10)"
                    className="p-6 space-y-4 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
                      <span className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-neutral-900 dark:text-white shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </span>
                      <h3 className="text-sm font-bold text-neutral-950 dark:text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 bg-neutral-50 dark:bg-neutral-800/70 hover:bg-neutral-100 dark:hover:bg-neutral-700/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 text-xs px-3 py-1.5 font-mono font-medium rounded-lg hover:border-neutral-400 dark:hover:border-neutral-500 hover:-translate-y-0.5 transition-all duration-200 shadow-2xs select-none"
                        >
                          {skill.icon && (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-3.5 h-3.5 object-contain shrink-0"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
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
          {/* STAGE 2: EXPERIENCE TIMELINE WITH FLOWING PROGRESS LINE     */}
          {/* ========================================================== */}
          <div id="experience" className="grid grid-cols-1 lg:grid-cols-9 gap-8 items-start pt-12 border-t border-neutral-200/80 dark:border-neutral-800 scroll-mt-24">
            
            {/* Middle: Experience Timeline Cards Stack (6 cols) */}
            <div 
              ref={timelineRef}
              className="lg:col-span-6 space-y-6 relative pl-7 ml-2"
            >
              {/* Static Background Track */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full" />

              {/* Dynamic Flowing Beam (Flows down smoothly as you scroll) */}
              <div 
                className="absolute left-0 top-6 w-[2px] bg-neutral-950 dark:bg-white rounded-full transition-all duration-75 ease-out"
                style={{ height: `${fillHeight}px` }}
              />

              {/* Traveling Glowing Head at the tip of the flowing line */}
              {fillHeight > 0 && (
                <div 
                  className="absolute -left-[3px] w-2 h-2 rounded-full bg-neutral-950 dark:bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:shadow-[0_0_8px_rgba(255,255,255,0.9)] transition-all duration-75 ease-out"
                  style={{ top: `${Math.min(fillHeight + 20, timelineRef.current?.clientHeight || 0)}px` }}
                />
              )}

              {experiences.map((exp: ExperienceItem) => (
                <div key={exp.role} className="relative group">
                  {/* Timeline node dot (Centered on vertical track line) */}
                  <div className="absolute -left-[35px] top-6 w-3.5 h-3.5 rounded-full bg-neutral-900 dark:bg-white border-2 border-white dark:border-neutral-950 shadow-sm transition-all duration-200 group-hover:scale-125" />

                  {/* Timeline card */}
                  <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-neutral-900/80 p-6 shadow-sm space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-0.5 transition-all duration-300">
                    
                    {/* Period & Role */}
                    <div className="space-y-1.5">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/90 px-2.5 py-0.5 rounded-md border border-neutral-200/60 dark:border-neutral-700/60">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                        <Building2 className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="default"
                          className="bg-neutral-100/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-700/70 text-[10px] px-2.5 py-0.5 font-mono rounded-md cursor-default"
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
