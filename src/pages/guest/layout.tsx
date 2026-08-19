import { Outlet } from "react-router";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function GuestLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] dark:bg-[#0c0c0c] text-neutral-900 dark:text-neutral-100">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
