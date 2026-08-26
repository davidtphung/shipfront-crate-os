"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ports, routes } from "@/lib/data";
import { easeEnter } from "@/lib/motion";
import { cn } from "@/lib/cn";

const portMap = Object.fromEntries(ports.map((p) => [p.id, p]));

function arc(from: string, to: string, lift = 70) {
  const a = portMap[from];
  const b = portMap[to];
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - lift;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

function statusCopy(status: string) {
  if (status === "transit") return "Shipment in motion";
  if (status === "watch") return "Watch: dwell rising";
  return "Clear";
}

export function RouteMap({
  selected = "lbg",
  onSelect,
}: {
  selected?: string;
  onSelect?: (id: string) => void;
}) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<string | null>(null);
  const hovered = hover ? portMap[hover] : null;
  const activePort = hovered ?? portMap[selected];

  const paths = useMemo(
    () =>
      routes.map((r) => ({
        ...r,
        d: arc(r.from, r.to, r.key === "featured" ? 42 : 78),
      })),
    [],
  );

  return (
    <div className="relative h-full w-full overflow-hidden">
      <svg
        viewBox="0 0 1000 520"
        className="h-full w-full"
        role="img"
        aria-labelledby="map-title"
        aria-describedby="map-desc"
      >
        <title id="map-title">Sample freight map</title>
        <desc id="map-desc">
          Routes between Long Beach, Los Angeles, Chicago, New York, Rotterdam,
          Shanghai, and Singapore. Featured sample move is Long Beach to Chicago.
        </desc>
        <defs>
          <linearGradient id="arc" x1="0" x2="1">
            <stop offset="0%" stopColor="#53D9FF" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#5B7CFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#53D9FF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="featured" x1="0" x2="1">
            <stop offset="0%" stopColor="#53D9FF" />
            <stop offset="100%" stopColor="#43E7A8" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="rgba(184,202,225,0.32)" strokeWidth="1.1" aria-hidden>
          <path d="M70 86c38-22 96-36 148-18 34 12 62 18 78 46 10 18 8 38-6 52 22 8 38 26 34 50-6 36-40 54-74 58 8 22-6 44-30 50-28 8-58-8-70-30-18 16-46 22-72 8-28-16-34-52-16-76-28-10-44-38-32-64 8-18 26-28 40-26z" />
          <path d="M168 268c18 6 32 24 26 44-10 32-48 46-74 28-22-16-18-46 6-56 14-8 28-14 42-16z" />
          <path d="M488 78c42-10 78 6 96 36 16 26 8 58-18 74-30 18-68 8-86-20-14-22-8-72 8-90z" />
          <path d="M508 208c28 10 48 40 32 70-20 36-68 48-96 22-20-18-14-56 12-70 16-10 34-16 52-22z" />
          <path d="M690 92c86-20 170 4 214 62 40 52 24 118-36 152-70 40-176 20-222-42-40-54-18-140 44-172z" />
          <path d="M768 338c30 6 50 28 40 52-12 28-58 36-80 14-18-18-8-52 14-60 8-4 18-6 26-6z" />
          <path d="M868 392c24-6 46 12 40 34-6 22-36 30-54 14-14-14-8-40 14-48z" />
        </g>

        {paths.map((p, i) => (
          <motion.path
            key={p.key}
            d={p.d}
            fill="none"
            stroke={p.key === "featured" ? "url(#featured)" : "url(#arc)"}
            strokeWidth={p.key === "featured" ? 2.2 : 1.2}
            className={p.key === "featured" ? undefined : "flow-dash"}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.15,
              delay: 0.45 + i * 0.08,
              ease: easeEnter,
            }}
          />
        ))}

        {ports.map((port, i) => {
          const active = selected === port.id || hover === port.id;
          const tone =
            port.status === "watch"
              ? "#FFB454"
              : port.status === "transit"
                ? "#53D9FF"
                : "#43E7A8";
          return (
            <g
              key={port.id}
              transform={`translate(${port.x} ${port.y})`}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`${port.name}. ${statusCopy(port.status)}`}
              onMouseEnter={() => setHover(port.id)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(port.id)}
              onBlur={() => setHover(null)}
              onClick={() => onSelect?.(port.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelect?.(port.id);
                  setHover(port.id);
                }
              }}
            >
              <motion.circle
                r="14"
                fill={tone}
                className={reduce ? undefined : "pulse-ring"}
                opacity={0.18}
                initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.18 }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
              />
              <motion.circle
                r={active ? 5 : 3.4}
                fill={tone}
                stroke="#07090D"
                strokeWidth="1.2"
                initial={reduce ? false : { scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.08, ease: easeEnter }}
              />
            </g>
          );
        })}
      </svg>

      <p className="sr-only" aria-live="polite">
        {activePort
          ? `${activePort.name}. ${statusCopy(activePort.status)}`
          : ""}
      </p>

      {hovered ? (
        <div
          role="tooltip"
          className={cn(
            "pointer-events-none absolute rounded-[12px] border border-line bg-elevated px-3 py-2 text-[12px] text-ink shadow-[0_12px_30px_rgba(0,0,0,0.4)]",
          )}
          style={{
            left: `min(${(hovered.x / 1000) * 100}%, 78%)`,
            top: `max(${(hovered.y / 520) * 100 - 14}%, 6%)`,
          }}
        >
          <div className="font-medium">{hovered.name}</div>
          <div className="font-mono text-[11px] text-ink-3">
            {statusCopy(hovered.status)}
          </div>
        </div>
      ) : null}
    </div>
  );
}
