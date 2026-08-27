import { cn } from "@/lib/cn";

/** Terminal orange. Signal, cube, and CTA. */
export const CUBE_ACCENT = "#FF6A00";

/** THE SHEET 1A EVEN lockup. Flat sit. No shear, perspective, or rotateY. */
export const CUBE_VIEWBOX = "0 0 24 26";

export const CUBE_PATHS = [
  "M7 9 L12 6 L17 9 L12 12 Z",
  "M7 9 L7 16 L12 19 L17 16 L17 9",
  "M12 12 L12 19",
  "M12 6 L12 13 L7 16",
  "M12 13 L17 16",
] as const;

export function CubeMark({
  className,
  color = CUBE_ACCENT,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox={CUBE_VIEWBOX}
      fill="none"
      aria-hidden
      className={cn("h-5 w-[18px] shrink-0", className)}
    >
      <g
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit={4}
      >
        {CUBE_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}
