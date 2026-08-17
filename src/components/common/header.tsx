import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/80">
      <Section className="py-0" containerClassName="flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <NavLink to="/" className="text-2xl font-black tracking-tighter text-neutral-950">
          NC<span className="text-neutral-400">.</span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-neutral-950",
                  isActive
                    ? "text-neutral-950 underline underline-offset-8 decoration-2 decoration-neutral-950"
                    : "text-neutral-600"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Let's Talk CTA Button */}
          <NavLink to="/contact">
            <Button size="sm" className="rounded-sm px-4">
              Let's Talk
            </Button>
          </NavLink>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-neutral-700 hover:text-neutral-950 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Section>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-neutral-50 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-neutral-700 hover:text-neutral-950 py-1"
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-2">
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="w-full">
                Let's Talk
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
