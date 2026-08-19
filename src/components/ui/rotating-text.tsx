import { useState, useEffect } from "react";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({
  words,
  interval = 2800,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsFading(false);
      }, 250); // half transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono font-bold text-neutral-900 dark:text-white transition-all duration-300 shadow-2xs ${
        isFading
          ? "opacity-0 -translate-y-2 scale-95"
          : "opacity-100 translate-y-0 scale-100"
      } ${className}`}
    >
      <span className="text-emerald-500 dark:text-emerald-400 mr-1.5">›</span>
      {words[index]}
    </span>
  );
}

export default RotatingText;
