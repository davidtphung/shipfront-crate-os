import { cn } from "@/lib/cn";

/** Live site orange: --sf-orange / --color-brand. Not red #FF2D2D. */
export const CUBE_ACCENT = "#F15A22";

/** 1A EVEN 12-edge isometric wire cube. Not 2G YAW (M8 8 L15 5). */
export const CUBE_PATHS = [
  "M7 9 L12 6 L17 9 L17 15 L12 18 L7 15 Z",
  "M7 9 L12 12 L17 9",
  "M12 12 L12 18",
  "M7 15 L12 12 L17 15",
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
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("h-[30px] w-[30px] shrink-0", className)}
    >
      <g
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {CUBE_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}
