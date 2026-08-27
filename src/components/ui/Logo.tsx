import { cn } from "@/lib/cn";
import { CubeMark } from "@/components/ui/CubeMark";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        invert ? "text-night-text" : "text-ink",
      )}
    >
      <CubeMark />
      <span
        translate="no"
        className="font-grotesk text-[24px] font-bold tracking-[-0.04em] text-brand"
      >
        SHIPFRONT
      </span>
    </span>
  );
}
