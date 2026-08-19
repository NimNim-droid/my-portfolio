import { Link } from "react-router";
import { Section } from "@/components/common/section";
import { Logo } from "@/components/common/logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-auto border-t border-neutral-200/90 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 transition-colors">
      <Section className="py-16 md:py-20" containerClassName="max-w-6xl space-y-16">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start text-sm">
          
          {/* 1. BRAND LOGO & MISSION (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-start">
              <Logo className="text-[10px] items-start" />
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xs">
              Engineering responsive full-stack software, enterprise Odoo ERP solutions, and intelligent applications with precision.
            </p>
          </div>

          {/* 2. NAVIGATION (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              <li>
                <a href="/#about" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#experience" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. SOCIALS (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400">
              SOCIALS
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              <li>
                <a
                  href="https://github.com/NimNim-droid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors block"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors block"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* 4. LEGAL (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400">
              LEGAL
            </span>
            <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
              <li>
                <span className="hover:text-neutral-950 dark:hover:text-white cursor-pointer transition-colors block">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-neutral-950 dark:hover:text-white cursor-pointer transition-colors block">
                  Cookies Policy
                </span>
              </li>
              <li>
                <span className="hover:text-neutral-950 dark:hover:text-white cursor-pointer transition-colors block">
                  Terms & Conditions
                </span>
              </li>
            </ul>
          </div>

          {/* 5. CONTACT (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400">
              CONTACT
            </span>
            <div className="space-y-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
              <a
                href="mailto:nimneri2006@gmail.com"
                className="hover:text-neutral-950 dark:hover:text-white hover:underline block font-mono text-[11px]"
              >
                nimneri2006@gmail.com
              </a>
              <a
                href="https://wa.me/639539863209"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-950 dark:hover:text-white block font-mono text-[11px]"
              >
                WhatsApp → +63 953 986 3209
              </a>
              <a
                href="tel:+639539863209"
                className="hover:text-neutral-950 dark:hover:text-white block font-mono text-[11px]"
              >
                +63 953 986 3209
              </a>
              <p className="text-neutral-500 dark:text-neutral-400 font-mono text-[11px] pt-1">
                Cebu City, Philippines
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright | Back to Top ↑ | Founded / Developed */}
        <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <p>© 2026 Nimrod Cambalon. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Back to Top ↑
          </button>
          
          <p>Built by Nimrod Cambalon</p>
        </div>

      </Section>
    </footer>
  );
}
