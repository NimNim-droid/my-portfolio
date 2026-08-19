import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in seconds
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // Distance in pixels
  blur?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
  direction = "up",
  distance = 24,
  blur = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger once
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Compute translation offset based on direction
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translateY(${distance}px)`;
        case "down":
          return `translateY(-${distance}px)`;
        case "left":
          return `translateX(${distance}px)`;
        case "right":
          return `translateX(-${distance}px)`;
        default:
          return "none";
      }
    }
    return "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: blur ? (isVisible ? "blur(0px)" : "blur(6px)") : "none",
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform, filter",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
