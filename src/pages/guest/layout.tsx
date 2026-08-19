import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function GuestLayout() {
  const location = useLocation();

  // Automatically scroll to the exact section when navigating with a hash (e.g. /#about, /#experience)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        // Small delay ensures DOM elements and route components are fully rendered
        const timeout = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
        return () => clearTimeout(timeout);
      }
    } else {
      // If no hash (e.g. going to /projects or /contact), smoothly scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] dark:bg-[#0c0c0c] text-neutral-900 dark:text-neutral-100">
      <Header />
      <main key={location.pathname} className="flex-1 animate-page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
