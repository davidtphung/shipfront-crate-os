"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useAccess } from "@/components/access/AccessContext";

export function FinalCta() {
  const { show } = useAccess();

  return (
    <Section className="py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[24px] border border-line px-6 py-16 text-center md:px-12 md:py-24">
        <div className="horizon-glow pointer-events-none absolute inset-x-0 bottom-0 h-1/2" />
        <h2 className="relative text-[40px] font-medium tracking-[-0.04em] md:text-6xl">
          Move with more certainty.
        </h2>
        <p className="relative mx-auto mt-4 max-w-[42ch] text-[17px] text-ink-2">
          Plan the route. Book the move. Track the exception. Keep the promise.
        </p>
        <div className="relative mt-8">
          <Button onClick={show}>Request access</Button>
        </div>
      </div>
    </Section>
  );
}
