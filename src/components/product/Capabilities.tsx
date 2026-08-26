"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { CommandMock } from "@/components/product/CommandMock";
import { BookingMock } from "@/components/product/BookingMock";
import { ExceptionMock } from "@/components/product/ExceptionMock";
import { DocumentsMock } from "@/components/product/DocumentsMock";
import { AnalyticsMock } from "@/components/product/AnalyticsMock";
import { easeEnter } from "@/lib/motion";
import { cn } from "@/lib/cn";

function Copy({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="max-w-lg"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: easeEnter }}
    >
      <h3 className="text-[28px] font-medium leading-tight tracking-[-0.03em] md:text-[36px]">
        {title}
      </h3>
      <p className="mt-4 text-[17px] leading-relaxed text-ink-2">{copy}</p>
    </motion.div>
  );
}

export function Capabilities() {
  const reduce = useReducedMotion();

  return (
    <Section id="product" className="py-24 md:py-32">
      <motion.div
        className="max-w-3xl"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: easeEnter }}
      >
        <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-cyan">
          One control surface
        </p>
        <h2 className="mt-4 text-[34px] font-medium leading-[1.08] tracking-[-0.03em] md:text-5xl lg:text-[56px]">
          Everything your shipment needs. Nothing your team has to chase.
        </h2>
      </motion.div>

      <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Copy
          title="Every shipment, in one operational view."
          copy="Bring route details, carrier milestones, ETAs, documents, owners, costs, messages, and exceptions together in a single timeline."
        />
        <CommandMock />
      </div>

      <div className="mt-28">
        <Copy
          title="Choose the route that fits the promise."
          copy="Compare carriers, transit times, cutoffs, pricing, and risk before you commit."
        />
        <div className="mt-8">
          <BookingMock />
        </div>
      </div>

      <div className="mt-28 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="lg:order-2">
          <Copy
            title="See risk before it becomes a fire drill."
            copy="Shipfront turns events into prioritized work, so your team can act while there is still time to protect the delivery."
          />
        </div>
        <ExceptionMock />
      </div>

      <div className="mt-28">
        <Copy
          title="Documents that travel with the shipment."
          copy="Keep bills of lading, packing lists, customs records, proofs of delivery, and internal notes connected to the freight they belong to."
        />
        <div className="mt-8">
          <DocumentsMock />
        </div>
      </div>

      <div id="network" className={cn("mt-28 scroll-mt-24")}>
        <Copy
          title="Turn movement into operational intelligence."
          copy="See carrier reliability, dwell time, late-delivery patterns, route performance, and cost drift across your network."
        />
        <div className="mt-8">
          <AnalyticsMock />
        </div>
      </div>
    </Section>
  );
}
