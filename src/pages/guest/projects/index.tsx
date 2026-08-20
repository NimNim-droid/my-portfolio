import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Section } from "@/components/common/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { TiltedCard } from "@/components/ui/tilted-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { projects, Project } from "@/data/projects";
import { 
  ArrowUpRight, 
  Search, 
  Sparkles,
  ArrowRight
} from "lucide-react";

type FilterCategory = "ALL WORKS" | "WEB APPLICATIONS" | "ODOO & ERP";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("ALL WORKS");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project: Project) => {
      const matchesCategory =
        activeFilter === "ALL WORKS" || project.category === activeFilter;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="py-12 md:py-20 space-y-20">
      <Section className="py-0" containerClassName="max-w-7xl space-y-12">
        
        {/* ============================================================ */}
        {/* 1. PAGE HEADER                                               */}
        {/* ============================================================ */}
        <ScrollReveal direction="up" distance={20}>
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-white">
              Selected Works
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A curated collection of scalable architectures, robust backends, and precise frontend implementations. Built with modern paradigms and uncompromising clarity.
            </p>
          </div>
        </ScrollReveal>

        {/* ============================================================ */}
        {/* 2. FILTER TABS & SEARCH BAR                                  */}
        {/* ============================================================ */}
        <ScrollReveal direction="up" delay={100} distance={15}>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {(["ALL WORKS", "WEB APPLICATIONS", "ODOO & ERP"] as FilterCategory[]).map((tab) => {
                const isActive = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider rounded-lg transition-all duration-200 cursor-pointer shrink-0 ${
                      isActive
                        ? "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 shadow-sm"
                        : "bg-neutral-100 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500" />
              <input
                type="text"
                placeholder="Search projects or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs font-mono rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white transition-all"
              />
            </div>

          </div>
        </ScrollReveal>

        {/* ============================================================ */}
        {/* 3. 3-COLUMN PROJECTS GRID (SpotlightCard + TiltedCard)        */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={index * 100}
                distance={24}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(16, 185, 129, 0.08)"
                  className="p-5 sm:p-6 space-y-5 flex flex-col justify-between h-full hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.03)]"
                >
                  {/* React Bits: 3D Perspective TiltedCard Screenshot */}
                  <TiltedCard
                    imageSrc={project.image}
                    altText={project.title}
                    captionText={project.title}
                    rotateAmplitude={12}
                    scaleOnHover={1.03}
                    showTooltip={true}
                  />

                  {/* Project Details */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Pills & Actions */}
                  <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="default"
                          className="bg-neutral-100/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 text-[10px] px-2.5 py-0.5 font-mono rounded-md"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-1">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 dark:text-white hover:underline group/btn"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full py-16 text-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl space-y-2">
              <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
                No projects found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setActiveFilter("ALL WORKS");
                  setSearchQuery("");
                }}
                className="text-xs font-mono font-bold text-neutral-950 dark:text-white underline cursor-pointer"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* 4. BOTTOM CTA BANNER (With Scroll Reveal)                    */}
        {/* ============================================================ */}
        <ScrollReveal direction="up" delay={150} distance={30}>
          <div className="mt-16 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 text-center space-y-6">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                Let's build something exceptional
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Available for full-time engineering roles, high-impact freelance initiatives, and system architecture consultations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <Button size="lg" className="gap-2 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-mono font-bold px-6 h-11 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </Section>
    </div>
  );
}
