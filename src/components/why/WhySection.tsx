"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Bell,
  FileArrowUp,
  ArrowsClockwise,
  UserPlus,
} from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { StatusDot } from "@/components/ui/StatusDot";
import { easeEnter } from "@/lib/motion";
import { cn } from "@/lib/cn";

function FragmentDemo({ active }: { active: boolean }) {
  return (
    <div className="relative h-[220px] overflow-hidden rounded-[14px] border border-line bg-bg">
      {[
        { x: 18, y: 28, delay: 0 },
        { x: 118, y: 18, delay: 0.08 },
        { x: 28, y: 118, delay: 0.16 },
        { x: 132, y: 108, delay: 0.24 },
      ].map((tile, i) => (
        <motion.div
          key={i}
          className="absolute h-16 w-24 rounded-[10px] border border-line bg-elevated p-2"
          initial={false}
          animate={
            active
              ? { x: 92, y: 70, opacity: 0.15, scale: 0.86 }
              : { x: tile.x, y: tile.y, opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.8, delay: tile.delay, ease: easeEnter }}
        >
          <div className="h-1.5 w-10 rounded-full bg-white/15" />
          <div className="mt-2 h-1 w-16 rounded-full bg-white/10" />
        </motion.div>
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-[14px] border border-line-strong bg-elevated p-3"
        initial={false}
        animate={
          active
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.96, y: 12 }
        }
        transition={{ duration: 0.55, delay: 0.35, ease: easeEnter }}
      >
        <p className="font-mono text-[10px] text-cyan">SF-2408-1187</p>
        <p className="mt-1 text-[13px] text-ink">Unified shipment view</p>
        <div className="mt-3 h-1.5 rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-cyan" />
        </div>
      </motion.div>
    </div>
  );
}

function DelayDemo({ active }: { active: boolean }) {
  return (
    <div className="h-[220px] rounded-[14px] border border-line bg-bg p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
        Live visibility
      </p>
      <ol className="mt-4 grid gap-3">
        {[
          { t: "Mar 11 09:42", l: "Gated in - Long Beach", ok: true },
          {
            t: "Mar 12 16:17",
            l: active ? "Delay detected - 18h dwell" : "Awaiting rail slot",
            alert: true,
          },
          {
            t: "Mar 12 16:21",
            l: active ? "Task created: notify consignee" : "No owner assigned",
            task: true,
          },
        ].map((row) => (
          <li key={row.t} className="flex items-start gap-3">
            <span className="w-16 shrink-0 font-mono text-[10px] text-ink-3">
              {row.t}
            </span>
            <span
              className={cn(
                "flex-1 rounded-[10px] border px-2.5 py-1.5 text-[12px]",
                row.alert && !active
                  ? "border-warn/30 bg-warn/10 text-warn"
                  : row.task && active
                    ? "border-cyan/30 bg-cyan/10 text-cyan"
                    : "border-line bg-elevated text-ink-2",
              )}
            >
              {row.l}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ControlDemo({ active }: { active: boolean }) {
  const actions = [
    { icon: Bell, label: "Notify customer" },
    { icon: ArrowsClockwise, label: "Rebook" },
    { icon: FileArrowUp, label: "Upload document" },
    { icon: UserPlus, label: "Assign owner" },
  ];
  return (
    <div className="relative h-[220px] overflow-hidden rounded-[14px] border border-line bg-bg p-4">
      <div className="absolute inset-x-6 top-6 h-px bg-line" />
      <div className="absolute inset-y-8 left-8 w-px bg-line" />
      <motion.div
        className="absolute left-[42%] top-[38%] flex h-9 w-9 items-center justify-center rounded-full border border-cyan/40 bg-cyan/20"
        animate={active ? { scale: 0.7, x: -48, y: -18 } : { scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.55, ease: easeEnter }}
      >
        <StatusDot tone="live" pulse />
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-4 w-[200px] rounded-[14px] border border-line-strong bg-elevated p-3"
        initial={false}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.15, ease: easeEnter }}
      >
        <p className="text-[12px] font-medium text-ink">Recommended next</p>
        <ul className="mt-2 grid gap-1.5">
          {actions.map((action) => (
            <li
              key={action.label}
              className="flex items-center gap-2 text-[11px] text-ink-2"
            >
              <action.icon size={13} />
              {action.label}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

const cards = [
  {
    title: "Too many systems",
    copy: "Carrier portals, spreadsheets, document folders, and inboxes create a fragmented view of the same shipment.",
    Demo: FragmentDemo,
  },
  {
    title: "Exceptions arrive late",
    copy: "By the time a delay reaches your team, the customer promise may already be broken.",
    Demo: DelayDemo,
  },
  {
    title: "Visibility is not control",
    copy: "A tracking page tells you where something is. An operating system tells you what to do next.",
    Demo: ControlDemo,
  },
];

export function WhySection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState([false, false, false]);

  useEffect(() => {
    if (reduce) setActive([true, true, true]);
  }, [reduce]);

  return (
    <Section id="why" className="py-24 md:py-32">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: easeEnter }}
        className="max-w-3xl"
      >
        <h2 className="text-[34px] font-medium leading-[1.08] tracking-[-0.03em] text-ink md:text-5xl lg:text-[56px]">
          Shipping should not require detective work.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink-2 md:text-[18px]">
          Operations teams still chase updates across portals, inboxes,
          spreadsheets, PDFs, carrier sites, and calls. The Crate pulls the
          signal into one continuously updated operational view.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            className="rounded-[20px] border border-line bg-surface p-5 transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-line-strong"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            onViewportEnter={() =>
              setActive((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              })
            }
            transition={{ duration: 0.6, delay: i * 0.08, ease: easeEnter }}
          >
            <card.Demo active={active[i]} />
            <h3 className="mt-5 text-[22px] font-medium tracking-tight">
              {card.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
              {card.copy}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
