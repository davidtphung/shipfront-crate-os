"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Lightning, Path, Warning } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SampleTag } from "@/components/ui/Section";
import { promptExamples, shipments } from "@/lib/data";
import { easeEnter } from "@/lib/motion";
import { useAccess } from "@/components/access/AccessContext";
import { withBase } from "@/lib/paths";

const query = promptExamples[0];
const answer =
  "Seven sample shipments sit outside a safe delivery window. Weather on the I-80 corridor and chassis shortage at Long Beach are the primary drivers. Three of those moves already have a missed-cutoff probability above 60%.";

export function Intelligence() {
  const reduce = useReducedMotion();
  const { show } = useAccess();
  const [typedQuery, setTypedQuery] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduce) {
      setTypedQuery(query);
      setTypedAnswer(answer);
      setReady(true);
      return;
    }
    let i = 0;
    const q = window.setInterval(() => {
      i += 1;
      setTypedQuery(query.slice(0, i));
      if (i >= query.length) window.clearInterval(q);
    }, 18);
    const a = window.setTimeout(() => {
      let j = 0;
      const s = window.setInterval(() => {
        j += 2;
        setTypedAnswer(answer.slice(0, j));
        if (j >= answer.length) {
          window.clearInterval(s);
          setReady(true);
        }
      }, 12);
    }, 1400);
    return () => {
      window.clearInterval(q);
      window.clearTimeout(a);
    };
  }, [reduce]);

  const flagged = shipments.filter((s) => s.risk !== "Low");

  return (
    <Section className="py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[24px] border border-line bg-bg-2 px-5 py-14 md:px-12 md:py-20">
        <img
          src={withBase("/media/horizon.jpg")}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(91,124,255,0.16),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(83,217,255,0.1),transparent_42%)]" />
        <div className="relative">
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-cyan">
            The Crate intelligence layer
          </p>
          <h2 className="mt-4 max-w-3xl text-[34px] font-medium leading-[1.08] tracking-[-0.03em] md:text-5xl lg:text-[56px]">
            Ask your operation what matters.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">
            Use natural language to understand what changed, which shipments
            need attention, and where your network is exposed.
          </p>

          <div className="mt-10 rounded-[20px] border border-line bg-bg/80 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex min-w-0 flex-1 items-center gap-3 rounded-[14px] border border-line bg-elevated px-3 py-3">
                <Lightning size={16} className="text-cyan" />
                <p className="truncate font-mono text-[13px] text-ink">
                  {typedQuery}
                  {typedQuery.length < query.length ? "▎" : ""}
                </p>
              </div>
              <SampleTag />
            </div>

            <div className="mt-5">
              <p className="text-[18px] font-medium leading-snug">
                {typedAnswer || " "}
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {[
                  { k: "High-risk moves", v: "7", d: "+3 vs yesterday" },
                  { k: "Primary driver", v: "I-80 / LB chassis", d: "Sample signal" },
                  { k: "Exposed spend", v: "$184k", d: "If windows miss" },
                ].map((card) => (
                  <div
                    key={card.k}
                    className="rounded-[14px] border border-line bg-elevated p-3"
                  >
                    <p className="text-[11px] text-ink-3">{card.k}</p>
                    <p className="mt-1 text-[18px]">{card.v}</p>
                    <p className="text-[11px] text-ink-3">{card.d}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-5 divide-y divide-line rounded-[14px] border border-line">
                {flagged.map((row) => (
                  <motion.li
                    key={row.id}
                    className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.5 text-[13px]"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={ready ? { opacity: 1, y: 0 } : { opacity: 0.4 }}
                    transition={{ duration: 0.35, ease: easeEnter }}
                  >
                    <span className="font-mono text-ink">{row.id}</span>
                    <span className="text-ink-2">{row.route}</span>
                    <span className="text-warn">{row.risk}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { icon: Warning, label: "Create alert" },
                  { icon: Path, label: "Convert to task" },
                  { icon: ArrowRight, label: "Draft customer message" },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-[12px] border border-line bg-elevated px-3 py-2 text-[12px] text-ink-2 hover:text-ink"
                  >
                    <item.icon size={14} />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {promptExamples.slice(1).map((item) => (
              <span
                key={item}
                className="rounded-full border border-line px-3 py-1.5 text-[12px] text-ink-2"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button onClick={show}>
              Request access
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
