"use client";

import { Copy, Check } from "@phosphor-icons/react";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const snippet = `const shipment = await shipfront.shipments.get("SF-2408-1187");

if (shipment.risk.band !== "low") {
  await shipfront.tasks.create({
    shipmentId: shipment.id,
    action: "notify_consignee",
    due: shipment.eta.windowStart,
  });
}`;

export function Developers() {
  const [copied, setCopied] = useState(false);

  return (
    <Section id="developers" className="py-24 md:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[34px] font-medium leading-[1.08] tracking-[-0.03em] md:text-5xl">
            An API for the same operational thread.
          </h2>
          <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-ink-2">
            Bookings, events, documents, and exceptions are addressable objects.
            Integrate The Crate into the systems your warehouse, TMS, or ERP
            already trusts.
          </p>
          <div className="mt-8">
            <Button href="#resources" variant="ghost">
              Read the API notes
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[20px] border border-line bg-bg-2">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <p className="font-mono text-[12px] text-ink-3">shipment.ts</p>
            <button
              type="button"
              className="inline-flex min-h-10 items-center gap-1.5 px-1 text-[12px] text-ink-2 hover:text-ink"
              aria-live="polite"
              aria-label={copied ? "Snippet copied" : "Copy snippet"}
              onClick={async () => {
                await navigator.clipboard.writeText(snippet);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1600);
              }}
            >
              {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-ink-2">
            <code>{snippet}</code>
          </pre>
        </div>
      </div>
    </Section>
  );
}
