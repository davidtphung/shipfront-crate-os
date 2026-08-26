"use client";

import { useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { shipments } from "@/lib/data";
import { SampleTag } from "@/components/ui/Section";
import { StatusDot } from "@/components/ui/StatusDot";
import { cn } from "@/lib/cn";
import { easeEnter } from "@/lib/motion";

const details: Record<
  string,
  {
    summary: string;
    cost: string;
    co2: string;
    docs: string[];
    events: { t: string; l: string }[];
  }
> = {
  "SF-2408-1187": {
    summary:
      "Intermodal move is on plan. Rail cutoff held. Delivery window still inside the consignee appointment.",
    cost: "$4,872",
    co2: "1.8 t",
    docs: ["Bill of lading", "Packing list", "Customs packet"],
    events: [
      { t: "08:12", l: "Pickup complete - Long Beach" },
      { t: "11:40", l: "Container gated out" },
      { t: "16:05", l: "Rail departure confirmed" },
    ],
  },
  "SF-2408-0944": {
    summary:
      "Ocean leg is healthy. Rotterdam dwell is the watchpoint if berth windows slip later this week.",
    cost: "$6,140",
    co2: "3.1 t",
    docs: ["Bill of lading", "ISF filing", "Commercial invoice"],
    events: [
      { t: "02:18", l: "Vessel departed Shanghai" },
      { t: "09:44", l: "Noon position received" },
    ],
  },
  "SF-2408-1312": {
    summary:
      "Clearance package is complete. Hold risk is low if exam is not selected.",
    cost: "$5,430",
    co2: "2.7 t",
    docs: ["Entry summary", "Packing list", "Proof of origin"],
    events: [
      { t: "07:05", l: "Arrived Los Angeles" },
      { t: "10:22", l: "Customs documents verified" },
    ],
  },
  "SF-2408-0771": {
    summary:
      "Port congestion may add 18 hours. Rebook linehaul now to protect the Chicago appointment.",
    cost: "$7,205",
    co2: "3.4 t",
    docs: ["Bill of lading", "Arrival notice"],
    events: [
      { t: "13:10", l: "Berth delay posted" },
      { t: "13:16", l: "Exception opened" },
    ],
  },
  "SF-2408-1508": {
    summary: "Delivered. POD captured. No residual exception.",
    cost: "$1,980",
    co2: "0.6 t",
    docs: ["Proof of delivery", "Invoice"],
    events: [{ t: "15:48", l: "Delivered - Chicago" }],
  },
};

function toneFor(risk: string) {
  if (risk === "High") return "high" as const;
  if (risk === "Watch") return "watch" as const;
  return "ok" as const;
}

export function CommandMock() {
  const [id, setId] = useState(shipments[0].id);
  const reduce = useReducedMotion();
  const selected = shipments.find((s) => s.id === id) ?? shipments[0];
  const detail = details[selected.id];

  return (
    <LayoutGroup>
      <div className="panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div>
            <p className="text-[12px] text-ink-3">Command Center</p>
            <p className="font-mono text-[13px] text-ink">{selected.id}</p>
          </div>
          <SampleTag />
        </div>
        <div className="grid lg:grid-cols-[220px_minmax(0,1fr)]">
          <ul className="border-b border-line p-2 lg:border-b-0 lg:border-r">
            {shipments.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setId(item.id)}
                  className={cn(
                    "flex w-full items-start gap-2 rounded-[12px] px-2.5 py-2 text-left transition-colors",
                    item.id === id
                      ? "bg-white/[0.05] ring-1 ring-line-strong"
                      : "hover:bg-white/[0.03]",
                  )}
                >
                  <StatusDot tone={toneFor(item.risk)} pulse={item.id === id} />
                  <span>
                    <span className="block font-mono text-[11px] text-ink">
                      {item.id}
                    </span>
                    <span className="block text-[11px] text-ink-3">
                      {item.route}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <motion.div
            key={selected.id}
            className="grid gap-4 p-4 md:grid-cols-[1.2fr_0.8fr]"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeEnter }}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-medium">{selected.route}</h3>
                <span className="rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-2">
                  {selected.mode}
                </span>
                <span className="rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-2">
                  {selected.status}
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-2">
                {detail.summary}
              </p>
              <ol className="mt-5 grid gap-2">
                {detail.events.map((event) => (
                  <li key={event.l} className="flex gap-3 text-[12px]">
                    <span className="font-mono text-ink-3">{event.t}</span>
                    <span className="text-ink">{event.l}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="grid gap-3">
              <div className="rounded-[14px] border border-line bg-bg p-3">
                <p className="text-[11px] text-ink-3">Owner</p>
                <p className="mt-1 text-[13px]">{selected.owner}</p>
                <p className="mt-3 text-[11px] text-ink-3">ETA</p>
                <p className="font-mono text-[13px]">{selected.eta}</p>
              </div>
              <div className="rounded-[14px] border border-line bg-bg p-3">
                <p className="text-[11px] text-ink-3">Documents</p>
                <ul className="mt-2 grid gap-1.5 text-[12px] text-ink-2">
                  {detail.docs.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[14px] border border-line bg-bg p-3">
                <p className="text-[11px] text-ink-3">Cost / emissions</p>
                <p className="mt-1 text-[15px]">
                  {detail.cost}{" "}
                  <span className="text-[12px] text-ink-3">{detail.co2} CO2e</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </LayoutGroup>
  );
}
