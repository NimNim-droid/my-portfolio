import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/80">
      <Section className="py-0" containerClassName="flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-black tracking-tighter text-neutral-950">
          NC<span className="text-neutral-400">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Let's Talk CTA Button */}
          <a href="#contact">
            <Button size="sm" className="rounded-sm px-4">
              Let's Talk
            </Button>
          </a>
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-neutral-50 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-neutral-700 hover:text-neutral-950 py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="w-full">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
