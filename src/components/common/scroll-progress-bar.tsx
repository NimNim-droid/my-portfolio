import { useState, useEffect } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-300 dark:to-neutral-500 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(0,0,0,0.4)] dark:shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgressBar;
