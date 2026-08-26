"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SampleTag } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { easeEnter } from "@/lib/motion";

const ranges = {
  "7D": { onTime: "96.1%", dwell: "2.1d", exceptions: "9", variance: "-1.2%" },
  "30D": { onTime: "94.7%", dwell: "2.8d", exceptions: "17", variance: "-3.9%" },
  "90D": { onTime: "93.4%", dwell: "3.1d", exceptions: "41", variance: "-2.4%" },
} as const;

const series = {
  "7D": [92, 94, 95, 96, 95, 97, 96],
  "30D": [91, 92, 90, 93, 94, 95, 94, 96, 95],
  "90D": [88, 90, 91, 92, 93, 92, 94, 93, 95],
} as const;

const bars = {
  "7D": [2.4, 1.8, 1.4, 1.1],
  "30D": [3.6, 2.8, 2.1, 1.6],
  "90D": [4.2, 3.3, 2.6, 2.0],
} as const;

export function AnalyticsMock() {
  const [range, setRange] = useState<keyof typeof ranges>("30D");
  const [hover, setHover] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const kpis = ranges[range];
  const line = series[range];
  const path = useMemo(() => {
    const max = 100;
    const min = 80;
    return line
      .map((v, i) => {
        const x = (i / (line.length - 1)) * 260;
        const y = 70 - ((v - min) / (max - min)) * 58;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  }, [line]);

  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3">
        <p className="text-[13px]">Network performance</p>
        <div className="flex items-center gap-2">
          {Object.keys(ranges).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={range === key}
              aria-label={`Show ${key} sample range`}
              onClick={() => setRange(key as keyof typeof ranges)}
              className={cn(
                "min-h-10 rounded-[8px] px-2 font-mono text-[11px]",
                range === key ? "bg-white/[0.06] text-ink" : "text-ink-3 hover:text-ink",
              )}
            >
              {key}
            </button>
          ))}
          <SampleTag />
        </div>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["On-time rate", kpis.onTime],
          ["Average dwell", kpis.dwell],
          ["Active exceptions", kpis.exceptions],
          ["Cost variance", kpis.variance],
        ].map(([label, value]) => (
          <div key={label} className="rounded-[14px] border border-line bg-bg p-3">
            <p className="text-[11px] text-ink-3">{label}</p>
            <p className="mt-1 font-mono text-2xl tracking-tight">{value}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 px-4 pb-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[16px] border border-line bg-bg p-4">
          <p className="text-[12px] text-ink-3" id="reliability-chart-label">
            Reliability trend
          </p>
          <svg
            viewBox="0 0 260 80"
            className="mt-3 h-24 w-full"
            role="img"
            aria-labelledby="reliability-chart-label reliability-chart-value"
          >
            <motion.path
              d={path}
              fill="none"
              stroke="#53D9FF"
              strokeWidth="2"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: easeEnter }}
            />
            {line.map((v, i) => {
              const x = (i / (line.length - 1)) * 260;
              const y = 70 - ((v - 80) / 20) * 58;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={hover === i ? 4 : 2.5}
                  fill="#53D9FF"
                  role="button"
                  tabIndex={0}
                  aria-label={`Point ${i + 1}: ${v}% on-time`}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(i)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setHover(i);
                    }
                  }}
                />
              );
            })}
          </svg>
          {hover !== null ? (
            <p id="reliability-chart-value" className="font-mono text-[12px] text-cyan" aria-live="polite">
              {line[hover]}% on-time
            </p>
          ) : (
            <p id="reliability-chart-value" className="text-[12px] text-ink-3">
              Select a point for the exact value.
            </p>
          )}
        </div>
        <div className="rounded-[16px] border border-line bg-bg p-4">
          <p className="text-[12px] text-ink-3">Dwell by port (days)</p>
          <div className="mt-4 flex h-28 items-end gap-2">
            {bars[range].map((v, i) => (
              <div
                key={i}
                className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1"
              >
                <motion.div
                  className="w-full max-w-[42px] rounded-t-[8px] bg-cyan/80"
                  initial={reduce ? false : { height: 0 }}
                  animate={{ height: (v / 5) * 92 }}
                  transition={{ duration: 0.5, ease: easeEnter }}
                />
                <span className="text-[10px] text-ink-3">
                  <span className="sr-only">
                    {["Los Angeles / Long Beach", "Shanghai", "Rotterdam", "Singapore"][i]} dwell{" "}
                    {v} days
                  </span>
                  {["LA/LB", "SHA", "RTM", "SIN"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
