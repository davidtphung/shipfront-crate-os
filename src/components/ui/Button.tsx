"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "subtle";
type Size = "md" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-bg hover:brightness-110 hover:-translate-y-px shadow-[0_8px_24px_rgba(245,247,250,0.08)] hover:shadow-[0_10px_28px_rgba(91,124,255,0.22)]",
  ghost:
    "bg-transparent text-ink border border-line hover:border-line-strong hover:bg-white/[0.03] hover:-translate-y-px",
  subtle:
    "bg-elevated text-ink border border-line hover:border-line-strong hover:bg-white/[0.04]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px] rounded-[12px]",
  sm: "h-9 px-3.5 text-[13px] rounded-[10px]",
};

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-[transform,box-shadow,background-color,border-color,filter] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
