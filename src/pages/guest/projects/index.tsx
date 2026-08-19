import { useState, useMemo } from "react";
import { Link } from "react-router";
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
      <Section className="py-0" containerClassName="max-w-6xl space-y-12">
        
        {/* ============================================================ */}
        {/* 1. PAGE HEADER (Matching Screenshot 1)                       */}
        {/* ============================================================ */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-white">
            Selected Works
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A curated collection of scalable architectures, robust backends, and precise frontend implementations. Built with modern paradigms and uncompromising clarity.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. FILTER TABS & SEARCH BAR                                  */}
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
                  className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-150 rounded-xs ${
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

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 text-xs font-mono border border-dashed border-neutral-300 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/50 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors"
            />
          </div>

        </div>

        {/* ============================================================ */}
        {/* 3. 2x2 PROJECTS GRID (Matching Screenshot 1)                 */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 p-6 space-y-5 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between shadow-2xs"
              >
                {/* Screenshot / Mockup Preview Container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills & Actions */}
                <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="default"
                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 text-[10px] px-2.5 py-0.5 font-mono rounded-md"
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
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 dark:text-white hover:underline"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
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
        {/* 4. BOTTOM CTA BANNER (Matching Screenshot 1)                 */}
        {/* ============================================================ */}
        <div className="mt-16 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Let's build something exceptional
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Have a project in mind or looking to hire a full-stack engineer? Let's align on scope, deadlines, and technical specifications.
            </p>
          </div>

          <Link to="/contact">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-98">
              <span>INITIATE CONVERSATION</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>

      </Section>
    </div>
  );
}
