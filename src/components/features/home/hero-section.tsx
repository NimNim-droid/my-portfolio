import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/section";
import { ArrowRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <Section className="pt-20 pb-16 md:pt-32 md:pb-24 relative bg-grid border-b border-neutral-200/60 dark:border-neutral-800 transition-colors">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex justify-center">
          <Badge variant="default" className="bg-neutral-100/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-300 border-neutral-200/80 dark:border-neutral-800 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-emerald-400 inline-block" />
            <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
          </Badge>
        </div>

        {/* Name Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-950 dark:text-white">
          Nimrod Camabalon
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 font-medium leading-snug max-w-2xl mx-auto">
          Full-Stack Software Engineer building precise, scalable digital architectures.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/projects" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto gap-2 rounded-sm px-6 h-12 bg-black dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          
          {/* Let's Talk Button -> Routes to /contact */}
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-sm px-6 h-12 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 shadow-2xs">
              Let's Talk
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 sm:pt-24 flex flex-col items-center gap-1.5 text-neutral-400 dark:text-neutral-600">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-500 font-medium">SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </Section>
  );
}
