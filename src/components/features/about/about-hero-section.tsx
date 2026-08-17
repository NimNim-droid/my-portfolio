import { Section } from "@/components/common/section";

export function AboutHeroSection() {
  return (
    <Section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-neutral-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left text column */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
            ABOUT ME
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950">
            Nimrod Camabalon
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-xl">
            Aspiring Full-Stack Software Developer bridging hardware and software through clean code, creative problem-solving, and innovative solutions.
          </p>
        </div>

        {/* Right photo container */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm aspect-[4/3] sm:aspect-square rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1534972195531-a756b1126f24?w=800&auto=format&fit=crop&q=80"
              alt="Nimrod Camabalon"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
