"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { CommandCenter } from "@/components/hero/CommandCenter";
import { useAccess } from "@/components/access/AccessContext";
import { easeEnter } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const { show } = useAccess();

  const line = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: "0%" },
          transition: { duration: 0.8, delay, ease: easeEnter },
        };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,202,225,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(184,202,225,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <motion.div
          className="horizon-glow absolute inset-x-0 bottom-0 h-[48%]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: easeEnter }}
        />
        <div className="absolute inset-x-[-10%] bottom-[-30%] h-[55%] grid-floor opacity-70" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-[1440px] items-center gap-10 px-5 py-10 md:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:px-12 lg:py-12">
        <div className="max-w-xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-cyan">
            The Crate / Freight operating system
          </p>
          <h1 className="mt-5 text-[40px] font-medium leading-[1.05] tracking-[-0.045em] text-ink sm:text-[52px] lg:text-[64px] xl:text-[72px]">
            <span className="block overflow-hidden">
              <motion.span className="block sm:whitespace-nowrap" {...line(0.12)}>
                Know where every
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span className="block sm:whitespace-nowrap" {...line(0.28)}>
                shipment stands.
              </motion.span>
            </span>
          </h1>
          <motion.p
            className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-ink-2 md:text-[18px]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: easeEnter }}
          >
            Bookings, carriers, documents, exceptions, and live tracking in one
            workspace. Move goods with confidence.
          </motion.p>
          <motion.div
            className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.55, ease: easeEnter }}
          >
            <Button onClick={show}>Request access</Button>
            <Button href="#product" variant="ghost">
              Explore the platform
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        <CommandCenter />
      </div>
    </section>
  );
}
