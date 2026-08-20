import { useEffect, useRef, useState } from "react";

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  className?: string;
  parallaxClassName?: string;
  numCopies?: number;
}

export function ScrollVelocity({
  texts,
  velocity = 35,
  className = "",
  parallaxClassName = "",
  numCopies = 4,
}: ScrollVelocityProps) {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const xPos1 = useRef(0);
  const xPos2 = useRef(0);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  // Track scroll speed dynamically
  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const currentScrollY = window.scrollY;
      const timeDelta = Math.max(1, now - lastScrollTime.current);
      const distDelta = currentScrollY - lastScrollY.current;

      const currentVelocity = (distDelta / timeDelta) * 50;
      setScrollVelocity(currentVelocity);

      lastScrollY.current = currentScrollY;
      lastScrollTime.current = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Continuous animation loop with velocity acceleration
  useEffect(() => {
    let currentSpeed = velocity;

    const animate = () => {
      // Dynamic acceleration based on scroll speed
      const targetSpeed = velocity + Math.abs(scrollVelocity) * 1.5;
      currentSpeed += (targetSpeed - currentSpeed) * 0.1;

      // Line 1 moves left
      xPos1.current -= currentSpeed * 0.02;
      if (line1Ref.current) {
        line1Ref.current.style.transform = `translateX(${xPos1.current % 50}%)`;
      }

      // Line 2 moves right (if 2 lines)
      xPos2.current += currentSpeed * 0.02;
      if (line2Ref.current) {
        line2Ref.current.style.transform = `translateX(${-(xPos2.current % 50)}%)`;
      }

      // Decay scroll velocity gradually back to base
      setScrollVelocity((prev) => prev * 0.95);

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [velocity, scrollVelocity]);

  return (
    <div className={`overflow-hidden select-none py-6 border-y border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-100/40 dark:bg-neutral-900/30 backdrop-blur-xs ${className}`}>
      {/* Velocity Marquee Track 1 */}
      <div
        ref={line1Ref}
        className={`flex whitespace-nowrap will-change-transform ${parallaxClassName}`}
      >
        {Array.from({ length: numCopies }).map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {texts.map((text, textIndex) => (
              <span
                key={textIndex}
                className="mx-6 text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center gap-6"
              >
                <span>{text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 inline-block" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollVelocity;
