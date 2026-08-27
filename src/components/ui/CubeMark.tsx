import { cn } from "@/lib/cn";

/** CRATE ink. Not orange. Not #FF6A00. */
export const CUBE_ACCENT = "#FF2D2D";

/** 1F three-face YAW θ=30°. Shared edges stroke once. */
export const CUBE_PATHS = [
  "M6.357 2.150 L16.310 3.690 L13.643 9.436 L3.690 7.897 Z",
  "M16.310 3.690 L16.310 12.103 L13.643 17.850 L13.643 9.436",
  "M3.690 7.897 L3.690 16.310 L13.643 17.850",
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
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={cn("h-[30px] w-[30px] shrink-0", className)}
    >
      <g
        stroke={color}
        strokeWidth="1"
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
