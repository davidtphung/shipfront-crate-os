"use client";

import { Check } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useAccess } from "@/components/access/AccessContext";

const plans = [
  {
    name: "Operator workspace",
    for: "Freight, fulfillment, and operations teams",
    points: [
      "Command Center and live tracking",
      "Booking comparison",
      "Exception inbox",
      "Document vault",
    ],
  },
  {
    name: "Network",
    for: "Forwarders, 3PLs, and multi-node operators",
    points: [
      "Everything in Operator",
      "Network analytics and carrier scorecards",
      "Intelligence layer",
      "API access",
    ],
  },
];

export function Pricing() {
  const { show } = useAccess();

  return (
    <Section id="pricing" className="py-24 md:py-32">
      <h2 className="max-w-3xl text-[34px] font-medium leading-[1.08] tracking-[-0.03em] md:text-5xl">
        Access is scoped to how you move freight.
      </h2>
      <p className="mt-4 max-w-[54ch] text-[17px] text-ink-2">
        Pricing is not published in this preview. Both tracks start with a
        conversation, not a self-serve checkout.
      </p>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="rounded-[20px] border border-line bg-surface p-6 md:p-8"
          >
            <h3 className="text-2xl font-medium">{plan.name}</h3>
            <p className="mt-2 text-[15px] text-ink-2">{plan.for}</p>
            <ul className="mt-6 grid gap-2.5">
              {plan.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-[15px] text-ink-2">
                  <Check size={16} className="mt-1 text-ok" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button onClick={show}>Request access</Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
