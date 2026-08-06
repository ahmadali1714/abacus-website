"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50/50",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  // Inline style for primary variant to force the exact brand gradient from the reference image
  const inlineStyle: React.CSSProperties | undefined =
    variant === "primary"
      ? { background: "linear-gradient(90deg,#6b8cff 0%,#6be7ff 100%)" }
      : undefined;

  if (href) {
    return (
      <Link href={href} className={classes} style={inlineStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={inlineStyle} disabled={disabled}>
      {children}
    </button>
  );
}
