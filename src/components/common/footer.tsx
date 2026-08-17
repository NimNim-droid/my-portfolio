import { Section } from "@/components/common/section";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200/80 bg-neutral-50/50">
      <Section className="py-8" containerClassName="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
        <p>© {new Date().getFullYear()} Nimrod Camabalon. All rights reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </Section>
    </footer>
  );
}
