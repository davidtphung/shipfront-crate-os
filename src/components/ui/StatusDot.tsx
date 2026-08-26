import { cn } from "@/lib/cn";

const tones = {
  ok: "bg-ok",
  watch: "bg-warn",
  high: "bg-crit",
  live: "bg-cyan",
  idle: "bg-ink-3",
} as const;

export function StatusDot({
  tone,
  pulse = false,
}: {
  tone: keyof typeof tones;
  pulse?: boolean;
}) {
  return (
    <span className="relative inline-flex h-2 w-2">
      {pulse ? (
        <span
          className={cn(
            "pulse-ring absolute inset-0 rounded-full",
            tones[tone],
          )}
        />
      ) : null}
      <span className={cn("relative h-2 w-2 rounded-full", tones[tone])} />
    </span>
  );
}
