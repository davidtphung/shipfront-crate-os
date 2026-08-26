import { cn } from "@/lib/cn";

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 24"
      aria-hidden
      className={cn("h-[18px] w-[21px] shrink-0", className)}
    >
      <polygon points="14,1.5 1.8,22.5 14,16.2" fill="#F15A22" />
      <polygon points="14,1.5 26.2,22.5 14,16.2" fill="#9AA3AB" />
    </svg>
  );
}

export function Logo({
  invert = false,
  compact = false,
}: {
  invert?: boolean;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2",
        invert ? "text-night-text" : "text-ink",
      )}
    >
      <span
        translate="no"
        className="text-[15px] font-extrabold tracking-[-0.04em] text-brand sm:text-[17px]"
      >
        SHIPFRONT
      </span>
      <Mark />
      {!compact ? (
        <span
          translate="no"
          className="hidden text-[15px] font-extrabold tracking-[-0.04em] sm:inline sm:text-[17px]"
        >
          THE REEF
        </span>
      ) : null}
    </span>
  );
}
