import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M16 3.8 28.2 10.4 16 17 3.8 10.4 16 3.8Z"
        fill="#F2F0EA"
        stroke="#1C212B"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path
        d="M16 4.6 16.15 16.2"
        stroke="#1C212B"
        strokeWidth="0.7"
        opacity="0.35"
      />
      <path
        d="M3.8 10.4v10.6L16 28.2V17L3.8 10.4Z"
        fill="#D9D6CC"
        stroke="#1C212B"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path
        d="M16 17v11.2L28.2 21V10.4L16 17Z"
        fill="#E7E4DA"
        stroke="#5B7CFF"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M18.2 18.3v8.4M20.4 17.2v8.3M22.6 16.1v8.2M24.8 15v8"
        stroke="#1C212B"
        strokeWidth="0.45"
        opacity="0.28"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-7 w-7", markClassName)} />
      <span className="text-[13px] font-semibold tracking-[0.18em] text-ink">
        SHIPFRONT
      </span>
    </span>
  );
}
