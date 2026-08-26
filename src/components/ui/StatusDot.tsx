import { cn } from "@/lib/cn";

const tones = {
  ok: "bg-ok",
  watch: "bg-warn",
  high: "bg-crit",
  live: "bg-cyan",
  idle: "bg-ink-3",
} as const;

const labels = {
  ok: "Low risk",
  watch: "Watch",
  high: "High risk",
  live: "Live",
  idle: "Idle",
} as const;

export function StatusDot({
  tone,
  pulse = false,
  label,
}: {
  tone: keyof typeof tones;
  pulse?: boolean;
  label?: string;
}) {
  return (
    <span
      className="relative inline-flex h-2.5 w-2.5"
      role="img"
      aria-label={label ?? labels[tone]}
    >
      {pulse ? (
        <span
          className={cn(
            "pulse-ring absolute inset-0 rounded-full",
            tones[tone],
          )}
          aria-hidden
        />
      ) : null}
      <span
        className={cn("relative h-2.5 w-2.5 rounded-full", tones[tone])}
        aria-hidden
      />
    </span>
  );
}
