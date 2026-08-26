"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SampleTag } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StatusDot } from "@/components/ui/StatusDot";
import { cn } from "@/lib/cn";
import { easeEnter } from "@/lib/motion";

const tabs = ["Critical", "Watch", "Resolved"] as const;
const assessment =
  "Congestion at Long Beach is extending dwell. If the rail cutoff is missed, Chicago arrival slips by 18 hours. Notify the consignee and reserve alternate linehaul now.";

export function ExceptionMock() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Critical");
  const [typed, setTyped] = useState("");
  const [assigned, setAssigned] = useState(false);
  const [resolved, setResolved] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setTyped(assessment);
      return;
    }
    setTyped("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 2;
      setTyped(assessment.slice(0, i));
      if (i >= assessment.length) window.clearInterval(id);
    }, 16);
    return () => window.clearInterval(id);
  }, [reduce, tab]);

  const risk = resolved ? 18 : assigned ? 41 : 76;

  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-[13px]">Exception intelligence</p>
        <SampleTag />
      </div>
      <div className="relative flex gap-1 px-4 pt-3">
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={cn(
              "relative px-3 py-1.5 text-[13px]",
              tab === item ? "text-ink" : "text-ink-3 hover:text-ink",
            )}
          >
            {item}
            {tab === item ? (
              <motion.span
                layoutId="ex-tab"
                className="absolute inset-x-1 -bottom-px h-px bg-cyan"
              />
            ) : null}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tab === "Resolved" ? (
          <p className="text-[14px] text-ink-2">
            Sample resolved queue is empty in this preview.
          </p>
        ) : (
          <motion.div
            className={cn(
              "rounded-[16px] border p-4",
              resolved
                ? "border-ok/30 bg-ok/5"
                : "border-crit/30 bg-crit/5",
            )}
            animate={{ borderColor: resolved ? "rgba(67,231,168,0.3)" : "rgba(255,105,120,0.3)" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[15px] font-medium">
                Port congestion may delay arrival by 18 hours
              </p>
              <span className="font-mono text-[12px] text-ink-2">
                Risk {risk}
              </span>
            </div>
            <p className="mt-3 min-h-[4.5rem] text-[13px] leading-relaxed text-ink-2">
              {typed}
              <span className="text-cyan">{typed.length < assessment.length ? "▎" : ""}</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Notify consignee", "Reroute", "Reserve linehaul"].map((action) => (
                <span
                  key={action}
                  className="rounded-full border border-line px-3 py-1 text-[12px] text-ink-2"
                >
                  {action}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Button
                size="sm"
                variant="subtle"
                onClick={() => setAssigned(true)}
              >
                {assigned ? "Owned by Rafael Ortiz" : "Assign Rafael Ortiz"}
              </Button>
              <Button size="sm" onClick={() => setResolved(true)} disabled={!assigned}>
                {resolved ? "Resolved" : "Mark resolved"}
              </Button>
              <span className="ml-auto inline-flex items-center gap-2 text-[12px] text-ink-3">
                <StatusDot tone={resolved ? "ok" : "high"} />
                SLA 2h remaining
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
