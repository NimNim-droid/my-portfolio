import { HeroSection } from "@/components/features/home/hero-section";
import { AboutHeroSection } from "@/components/features/about/about-hero-section";
import { AboutStorySection } from "@/components/features/about/about-story-section";
import { SkillsSection } from "@/components/features/home/skills-section";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Full About Section */}
      <div id="about" className="scroll-mt-16">
        <AboutHeroSection />
        <AboutStorySection />
      </div>

      {/* 3. Skills & Technologies */}
      <SkillsSection />
    </>
  );
}
