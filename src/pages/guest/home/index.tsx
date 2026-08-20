import { HeroSection } from "@/components/features/home/hero-section";
import { AboutHeroSection } from "@/components/features/about/about-hero-section";
import { AboutStorySection } from "@/components/features/about/about-story-section";
import { SkillsSection } from "@/components/features/home/skills-section";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. React Bits: Dynamic Scroll Velocity Tech Marquee */}
      <ScrollVelocity
        texts={[
          "React",
          "Python / Odoo ORM",
          "PostgreSQL",
          "TypeScript",
          "Node.js",
          "Tailwind CSS",
          "Next.js",
          "Docker",
          "C#",
          "Git & GitHub",
        ]}
        velocity={28}
      />

      {/* 3. Full About Section */}
      <div id="about" className="scroll-mt-16">
        <AboutHeroSection />
        <AboutStorySection />
      </div>

      {/* 4. Skills & Technologies + Experience */}
      <SkillsSection />
    </>
  );
}
