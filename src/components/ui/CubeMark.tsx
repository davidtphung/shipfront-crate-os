import { cn } from "@/lib/cn";

/** Live site orange: --sf-orange / --color-brand. Not red #FF2D2D. */
export const CUBE_ACCENT = "#F15A22";

/** 2G YAW wire cube. Includes M8 8 L15 5. Not 1A EVEN M7 9 L12 6. */
export const CUBE_PATHS = [
  "M8 8 L15 5 L20 10 L20 16 L13 19 L8 14 Z",
  "M8 8 L13 11 L20 10",
  "M13 11 L13 19",
  "M8 14 L13 11 L20 16",
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
      className={cn("h-5 w-5 shrink-0", className)}
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
