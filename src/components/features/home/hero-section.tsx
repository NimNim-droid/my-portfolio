import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/section";
import { ArrowRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <Section className="pt-20 pb-16 md:pt-32 md:pb-24 relative bg-grid border-b border-neutral-200/60 dark:border-neutral-800 transition-colors">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        {/* 1. Status Badge (Entrance Delay 0.1s) */}
        <div className="inline-flex justify-center hero-animate-1">
          <Badge variant="default" className="bg-neutral-100/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-300 border-neutral-200/80 dark:border-neutral-800 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
          </Badge>
        </div>

        {/* 2. Name Heading (Entrance Delay 0.25s) */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-950 dark:text-white hero-animate-2">
          Nimrod Cambalon
        </h1>

        {/* 3. Subtitle (Entrance Delay 0.4s) */}
        <p className="text-xl sm:text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 font-medium leading-snug max-w-2xl mx-auto hero-animate-3">
          Full-Stack Software Engineer building precise, scalable digital architectures.
        </p>

        {/* 4. Action Buttons (Entrance Delay 0.55s) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 hero-animate-4">
          <Link to="/projects" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto gap-2 rounded-sm px-6 h-12 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm transition-all">
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          
          {/* Let's Talk Button -> Routes to /contact */}
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-sm px-6 h-12 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 shadow-2xs">
              <span>Let's Talk</span>
            </Button>
          </Link>
        </div>

        {/* 5. Social Icons Row (Entrance Delay 0.7s) */}
        <div className="flex items-center justify-center gap-3 pt-2 hero-animate-5">
          
          {/* GitHub */}
          <a
            href="https://github.com/NimNim-droid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xs hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nimrod-cambalon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xs hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xs hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 sm:pt-16 flex flex-col items-center gap-1.5 text-neutral-400 dark:text-neutral-600">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-500 font-medium">SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>

      </div>
    </Section>
  );
}
