"use client";

import { motion, useReducedMotion } from "motion/react";
import { partners } from "@/lib/data";
import { easeEnter } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

export function TrustStrip() {
  const reduce = useReducedMotion();

  return (
    <Section className="border-y border-line py-14 md:py-16">
      <p className="text-center text-[15px] text-ink-2">
        Built for teams moving complex freight.
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((partner, i) => (
          <motion.li
            key={partner.name}
            className="flex items-center justify-center"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.45, ease: easeEnter }}
          >
            <span className="inline-flex items-center gap-2.5 text-ink-2">
              <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden>
                <rect
                  x="1"
                  y="1"
                  width="26"
                  height="26"
                  rx="7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <text
                  x="14"
                  y="18"
                  textAnchor="middle"
                  fontSize="9"
                  fill="currentColor"
                  fontFamily="ui-sans-serif, system-ui"
                >
                  {partner.mark}
                </text>
              </svg>
              <span className="text-[14px] font-medium tracking-wide">
                {partner.name}
              </span>
            </span>
          </motion.li>
        ))}
      </ul>
      <ul className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {[
          "42 countries in the sample network",
          "98.7% data completeness in sample workspaces",
          "Minutes, not hours, to resolve exceptions",
          "One workspace across every carrier",
        ].map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[12px] text-ink-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
