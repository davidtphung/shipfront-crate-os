import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "night";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_24px_rgba(35,104,246,0.22)] hover:bg-accent-dark",
  secondary:
    "border border-line bg-paper text-ink hover:border-ink/25 hover:bg-surface",
  ghost: "text-ink hover:bg-surface",
  night:
    "bg-paper text-ink hover:bg-night-text",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const cls = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[12px] px-5 text-[15px] font-medium tracking-[-0.01em] whitespace-nowrap transition-colors duration-[var(--motion-ui)] ease-[var(--ease-out-expo)] active:scale-[0.98]",
    "disabled:pointer-events-none disabled:opacity-50",
    styles[variant],
    className,
  );

  if (href) {
    const isHash = href.startsWith("#");
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isHash || isExternal) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
