import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-black text-white hover:bg-neutral-800 active:scale-[0.98] shadow-sm",
    secondary: "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-100 active:scale-[0.98]",
    outline: "bg-transparent text-neutral-900 border border-neutral-300 hover:bg-neutral-100 active:scale-[0.98]",
    ghost: "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-md",
    md: "px-5 py-2.5 text-sm rounded-md",
    lg: "px-6 py-3 text-base rounded-md",
  };

  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
