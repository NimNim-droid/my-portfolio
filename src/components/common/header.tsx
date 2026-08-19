import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Section } from "@/components/common/section";
import { Logo } from "@/components/common/logo";
import { useTheme } from "@/context/theme-context";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

const navItems = [
  { id: "about", label: "ABOUT", href: "/#about" },
  { id: "experience", label: "EXPERIENCE", href: "/#experience" },
  { id: "projects", label: "PROJECTS", href: "/projects" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();

  const isDark = theme === "dark";

  // Track active page route / scroll position
  useEffect(() => {
    if (location.pathname === "/projects") {
      setActiveSection("projects");
      return;
    }
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = ["experience", "about"];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToTop = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-50/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/90 dark:border-neutral-800 transition-colors duration-350">
      <Section className="py-0" containerClassName="flex items-center justify-between h-16 sm:h-20">
        
        {/* ============================================================ */}
        {/* LEFT: Custom Brand Mark Logo (Click goes to Top)             */}
        {/* ============================================================ */}
        <div className="flex items-center" onClick={scrollToTop}>
          <Logo className="text-[10px] cursor-pointer" />
        </div>

        {/* ============================================================ */}
        {/* CENTER: Clean Monospace Links with Solid Active Underline    */}
        {/* ============================================================ */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`py-1 text-xs font-mono font-bold tracking-widest transition-all duration-200 group relative ${
                  isActive 
                    ? "text-neutral-950 dark:text-white font-black" 
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                
                {/* Solid underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-neutral-950 dark:bg-white transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* ============================================================ */}
        {/* RIGHT: Option 3 Sliding Pill Switcher + CTA Button           */}
        {/* ============================================================ */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Option 3: Animated Sliding Pill Theme Switcher */}
          <div
            onClick={toggleTheme}
            className="relative flex items-center p-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/90 dark:bg-neutral-900/90 cursor-pointer select-none transition-colors shadow-2xs w-16 h-8"
            role="button"
            aria-label="Toggle theme"
          >
            {/* Sliding White/Dark Capsule Pill */}
            <span
              className={`absolute top-1 bottom-1 w-6 rounded-full bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200/60 dark:border-neutral-700 transition-transform duration-300 ease-out ${
                isDark ? "translate-x-7" : "translate-x-0"
              }`}
            />

            {/* Sun Button Icon */}
            <div className="relative z-10 w-6 h-6 flex items-center justify-center">
              <Sun
                className={`w-3.5 h-3.5 transition-all duration-300 ${
                  !isDark
                    ? "text-amber-500 scale-105"
                    : "text-neutral-400 scale-90 opacity-60"
                }`}
              />
            </div>

            {/* Moon Button Icon */}
            <div className="relative z-10 w-6 h-6 flex items-center justify-center">
              <Moon
                className={`w-3.5 h-3.5 transition-all duration-300 ${
                  isDark
                    ? "text-white scale-105"
                    : "text-neutral-400 scale-90 opacity-60"
                }`}
              />
            </div>
          </div>

          {/* Solid Black LET'S TALK Button */}
          <Link to="/contact">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-98">
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </Link>

        </div>

        {/* ============================================================ */}
        {/* MOBILE: Drawer Button                                        */}
        {/* ============================================================ */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </Section>

      {/* MOBILE: Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-2 pt-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block py-2 text-xs font-mono font-bold tracking-widest ${
                    isActive 
                      ? "text-neutral-950 dark:text-white border-l-2 border-neutral-950 dark:border-white pl-2" 
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
