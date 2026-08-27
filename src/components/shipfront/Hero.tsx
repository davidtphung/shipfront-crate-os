"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { FulfillmentFlow } from "@/components/shipfront/FulfillmentFlow";
import { hero } from "@/data/site-copy";
import { primaryCta } from "@/data/navigation";
import { easeEnter } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: easeEnter },
        };

  return (
    <section className="relative canvas-grid min-h-[100dvh] overflow-x-clip">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)] lg:gap-10 lg:pt-32 lg:pb-20">
        <div className="relative z-20 min-w-0">
          <motion.p
            {...enter(0.05)}
            className="text-[12px] font-medium tracking-[0.16em] text-muted uppercase"
          >
            {hero.eyebrow}
          </motion.p>
          <h1 className="relative z-20 mt-5 text-[40px] leading-[1.05] font-semibold tracking-[-0.05em] text-ink sm:text-[56px] lg:text-[clamp(52px,5vw,72px)]">
            <motion.span className="block lg:whitespace-nowrap" {...enter(0.12)}>
              {hero.headlineLine1}
            </motion.span>
            <motion.span className="mt-1 block lg:whitespace-nowrap" {...enter(0.22)}>
              {hero.headlineLine2}
            </motion.span>
          </h1>
          <motion.p
            {...enter(0.34)}
            className="mt-6 max-w-[38ch] text-[17px] leading-relaxed text-ink-2 sm:text-[18px]"
          >
            {hero.body}
          </motion.p>
          <motion.div {...enter(0.46)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href} className="min-w-[180px]">
              {primaryCta.label}
              <ArrowRight size={16} weight="bold" />
            </Button>
            <Button href="/contact/" variant="secondary">
              Contact
            </Button>
          </motion.div>
        </div>
        <motion.div {...enter(0.28)} className="relative z-0 min-w-0 lg:pt-4">
          <FulfillmentFlow />
        </motion.div>
      </div>
    </section>
  );
}
