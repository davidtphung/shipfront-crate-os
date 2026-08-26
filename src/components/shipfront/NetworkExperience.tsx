"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { network } from "@/data/site-copy";
import { cn } from "@/lib/cn";

const nodes = network.nodes;

export function NetworkExperience() {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });
  const packet = useTransform(scrollYProgress, [0.2, 0.85], [0, 1]);
  const stage = useTransform(scrollYProgress, [0, 0.28, 0.55, 0.82, 1], [0, 1, 2, 3, 4]);
  const [active, setActive] = useState(0);
  const [stageSnap, setStageSnap] = useState(0);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const shiftX = useTransform(px, [-1, 1], [-10, 10]);
  const shiftY = useTransform(py, [-1, 1], [-8, 8]);

  useMotionValueEvent(stage, "change", (value) => {
    const next = Math.round(value);
    setStageSnap((prev) => (prev === next ? prev : next));
  });

  const status = network.statuses[Math.min(stageSnap, network.statuses.length - 1)];
  const current = nodes[active];

  return (
    <section
      ref={wrap}
      className="relative bg-night text-night-text"
      aria-labelledby="network-heading"
    >
      <div className="lg:h-[160vh]">
        <div className="lg:sticky lg:top-0 lg:flex lg:min-h-[100dvh] lg:items-center">
          <div className="night-grid mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
                {network.visualName}
              </p>
              <h2
                id="network-heading"
                className="mt-4 max-w-[12ch] text-[34px] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[52px]"
              >
                {network.heading}
              </h2>
              <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-night-muted uppercase">
                {network.workflowLabel}
              </p>
              <p
                className="mt-6 font-mono text-[12px] text-cyan"
                aria-live="polite"
              >
                {status}
              </p>
              <div className="mt-8 rounded-[16px] border border-white/10 bg-night-2 p-5">
                <p className="font-mono text-[11px] tracking-[0.14em] text-night-muted">
                  {current.label}
                </p>
                <p className="mt-2 text-[16px] leading-relaxed text-night-text">
                  {current.copy}
                </p>
              </div>
            </div>

            <motion.div
              style={reduce ? undefined : { x: shiftX, y: shiftY }}
              className="relative rounded-[20px] border border-white/10 bg-night-2"
              onPointerMove={(event) => {
                if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
                const rect = event.currentTarget.getBoundingClientRect();
                px.set((event.clientX - rect.left) / rect.width * 2 - 1);
                py.set((event.clientY - rect.top) / rect.height * 2 - 1);
              }}
            >
              <svg
                viewBox="0 0 640 520"
                className="hidden min-h-[380px] w-full lg:block"
                role="img"
                aria-label="Illustrative Shipfront network connecting store, inventory, fulfillment, quality check, carrier, and customer"
              >
                <defs>
                  <radialGradient id="glow" cx="50%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#2368F6" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#07111E" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="640" height="520" fill="url(#glow)" />
                <motion.path
                  d="M90 120 L230 160 L320 250 L430 180 L540 230 L540 380"
                  fill="none"
                  stroke="#42D8F4"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.path
                  d="M230 160 L230 300 L320 250 L430 340 L540 380"
                  fill="none"
                  stroke="#2368F6"
                  strokeWidth="1.2"
                  opacity="0.7"
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.2, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                />
                {!reduce ? (
                  <motion.circle
                    r="5"
                    fill="#42D8F4"
                    style={{
                      offsetPath: "path('M90 120 L230 160 L320 250 L430 180 L540 230 L540 380')",
                      offsetDistance: packet,
                    }}
                  />
                ) : null}
                {nodes.map((node, i) => {
                  const pos = [
                    [90, 120],
                    [230, 160],
                    [320, 250],
                    [430, 180],
                    [430, 340],
                    [540, 380],
                  ][i];
                  return (
                    <g key={node.id}>
                      <circle
                        cx={pos[0]}
                        cy={pos[1]}
                        r="18"
                        fill={active === i ? "#2368F6" : "#0C1A2A"}
                        stroke="#42D8F4"
                        strokeWidth="1.4"
                        className={reduce ? undefined : "node-breathe"}
                      />
                      <text
                        x={pos[0]}
                        y={pos[1] + 36}
                        textAnchor="middle"
                        fill="#A7BBCC"
                        fontSize="10"
                        fontFamily="ui-monospace, monospace"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <ol className="grid gap-3 p-4 lg:hidden">
                {nodes.map((node, i) => (
                  <li key={node.id}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={cn(
                        "flex min-h-11 w-full items-start gap-3 rounded-[14px] border px-4 py-3 text-left",
                        active === i
                          ? "border-cyan/40 bg-white/5"
                          : "border-white/10",
                      )}
                      aria-pressed={active === i}
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan" />
                      <span>
                        <span className="block font-mono text-[11px] tracking-[0.12em] text-cyan">
                          {node.label}
                        </span>
                        <span className="mt-1 block text-[14px] text-night-text/90">
                          {node.copy}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>

              <div className="hidden flex-wrap gap-2 p-4 lg:flex">
                {nodes.map((node, i) => (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "min-h-11 rounded-[12px] border px-3 text-[12px] font-medium",
                      active === i
                        ? "border-cyan bg-cyan/10 text-night-text"
                        : "border-white/10 text-night-muted hover:text-night-text",
                    )}
                    aria-pressed={active === i}
                  >
                    {node.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
