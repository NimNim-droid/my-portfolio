import { Section } from "@/components/common/section";

const highlightPillars = [
  {
    title: "HARDWARE & SOFTWARE",
    description: "Bridging physical computing and digital interfaces through clean code and creative problem-solving.",
  },
  {
    title: "RESPONSIVE APPLICATIONS",
    description: "Developing modern, mobile-friendly web apps using React, TypeScript, and Tailwind CSS.",
  },
  {
    title: "QUALITY ASSURANCE (QA)",
    description: "Learning test-driven principles and code quality standards to ensure reliable software.",
  },
  {
    title: "ARTIFICIAL INTELLIGENCE",
    description: "Exploring AI technologies and intelligent tools to build smarter, future-ready solutions.",
  },
];

export function AboutStorySection() {
  return (
    <Section className="py-16 md:py-24">
      <div className="space-y-16">
        {/* Main Philosophy Headline & Paragraphs */}
        <div className="max-w-3xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Crafting software solutions with curiosity, precision, and continuous learning.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              I am a technology student and aspiring full-stack software developer. My journey revolves around understanding how systems work from the ground up—connecting hardware logic to modern web software.
            </p>
            <p>
              Currently, I focus on building responsive web applications while actively expanding my knowledge in Quality Assurance and Artificial Intelligence to build dependable, smarter technology.
            </p>
          </div>
        </div>

        {/* 4 Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-200/80 dark:border-neutral-800">
          {highlightPillars.map((pillar) => (
            <div key={pillar.title} className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
