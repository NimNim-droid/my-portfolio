import React from "react";
import { cn } from "@/lib/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
  variant?: "default" | "outline";
};

export function Badge({ children, variant = "default", className, ...props }: BadgeProps) {
  const variantStyles = {
    default: "bg-neutral-100 text-neutral-800 border-neutral-200",
    outline: "bg-transparent text-neutral-700 border-neutral-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-mono uppercase tracking-wider border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
