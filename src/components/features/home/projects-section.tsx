import { useState, useMemo } from "react";
import { Section } from "@/components/common/section";
import { Badge } from "@/components/ui/badge";
import { projects, Project } from "@/data/projects";
import { Search, ArrowUpRight, Code2 } from "lucide-react";

type FilterCategory = "ALL WORKS" | "WEB APPLICATIONS" | "ODOO & ERP" | "AI & SYSTEMS";

const categories: FilterCategory[] = [
  "ALL WORKS",
  "WEB APPLICATIONS",
  "ODOO & ERP",
  "AI & SYSTEMS",
];

export function ProjectsSection() {
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
    <Section
      id="projects"
      className="py-20 md:py-28 border-t border-dashed border-neutral-300 dark:border-neutral-800 scroll-mt-16 transition-colors"
      containerClassName="max-w-6xl space-y-12"
    >
      {/* ============================================================ */}
      {/* 1. SECTION HEADER (Matching Screenshot Typography)           */}
      {/* ============================================================ */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          PORTFOLIO
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 dark:text-white leading-tight">
          Digital products engineered to scale and convert.
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-mono leading-relaxed">
          Explore a curated collection of custom SaaS platforms, mobile apps, and enterprise AI integrations built to deliver high performance, solve complex problems, and drive business growth.
        </p>
      </div>

      {/* ============================================================ */}
      {/* 2. FILTER BUTTONS & SEARCH BAR ROW                           */}
      {/* ============================================================ */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-150 ${
                  isActive
                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs"
                    : "bg-transparent border border-dashed border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Monospace Search Input */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 text-xs font-mono rounded-none border border-dashed border-neutral-300 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/50 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors"
          />
        </div>

      </div>

      {/* ============================================================ */}
      {/* 3. PROJECTS GRID                                             */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-dashed border-neutral-300 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-5 space-y-4 hover:border-neutral-950 dark:hover:border-white transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview / Mockup Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {project.category}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white tracking-tight group-hover:text-neutral-900 dark:group-hover:text-white">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags & Action Links */}
              <div className="space-y-4 pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-800">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="default"
                      className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 text-[10px] px-2 py-0.5 font-mono rounded-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-3 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 dark:text-white hover:underline"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center border border-dashed border-neutral-300 dark:border-neutral-800 space-y-2">
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
              Reset filters
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
