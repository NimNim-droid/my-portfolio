import { AboutHeroSection } from "@/components/features/about/about-hero-section";
import { AboutStorySection } from "@/components/features/about/about-story-section";
import { SkillsSection } from "@/components/features/home/skills-section";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <SkillsSection />
    </>
  );
}
