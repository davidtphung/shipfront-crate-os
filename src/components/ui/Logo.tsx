import { cn } from "@/lib/cn";
import { CubeMark } from "@/components/ui/CubeMark";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2",
        invert ? "text-night-text" : "text-ink",
      )}
    >
      <CubeMark />
      <span
        translate="no"
        className="text-[15px] font-extrabold tracking-[-0.04em] text-brand sm:text-[17px]"
      >
        SHIPFRONT
      </span>
    </span>
  );
}
