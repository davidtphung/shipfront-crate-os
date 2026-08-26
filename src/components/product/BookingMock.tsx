"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { bookingRows } from "@/lib/data";
import { SampleTag } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const filters = ["All", "Intermodal", "Rail", "Truck"] as const;

export function BookingMock() {
  const [mode, setMode] = useState<(typeof filters)[number]>("All");
  const [sort, setSort] = useState<"price" | "transit" | "reliability">("reliability");
  const [open, setOpen] = useState<string | null>("Northline Intermodal");

  const rows = useMemo(() => {
    const filtered =
      mode === "All" ? bookingRows : bookingRows.filter((r) => r.mode === mode);
    return [...filtered].sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "transit") return a.hours - b.hours;
      return b.reliability - a.reliability;
    });
  }, [mode, sort]);

  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3">
        <div>
          <p className="text-[13px] text-ink">Long Beach → Chicago</p>
          <p className="text-[12px] text-ink-3">42,000 lb dry van · sample rates</p>
        </div>
        <SampleTag />
      </div>
      <div className="flex flex-wrap items-center gap-2 px-4 py-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setMode(item)}
            className={cn(
              "rounded-full border px-3 py-1 text-[12px] transition-colors",
              mode === item
                ? "border-line-strong bg-white/[0.06] text-ink"
                : "border-line text-ink-2 hover:text-ink",
            )}
          >
            {item}
          </button>
        ))}
        <div className="ml-auto flex gap-2">
          {(["reliability", "price", "transit"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setSort(key)}
              className={cn(
                "text-[12px] capitalize",
                sort === key ? "text-cyan" : "text-ink-3 hover:text-ink",
              )}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className="divide-y divide-line">
        {rows.map((row) => (
          <motion.div
            layout
            key={row.carrier}
            role="button"
            tabIndex={0}
            onClick={() => setOpen(open === row.carrier ? null : row.carrier)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(open === row.carrier ? null : row.carrier);
              }
            }}
            className={cn(
              "grid w-full cursor-pointer grid-cols-2 gap-2 px-4 py-3 text-left md:grid-cols-6",
              row.recommended && "bg-accent/5 ring-1 ring-inset ring-line-strong",
            )}
          >
            <span className="col-span-2 md:col-span-1">
              <span className="block text-[13px] font-medium">{row.carrier}</span>
              {row.recommended ? (
                <span className="text-[10px] uppercase tracking-[0.12em] text-cyan">
                  Recommended
                </span>
              ) : (
                <span className="font-mono text-[11px] text-ink-3">{row.code}</span>
              )}
            </span>
            <span className="text-[13px]">{row.transit}</span>
            <span className="font-mono text-[13px]">
              ${row.price.toLocaleString()}
            </span>
            <span className="text-[13px] text-ok">{row.reliability}%</span>
            <span className="text-[13px] text-ink-2">{row.carbon} t CO2e</span>
            <span className="text-[13px] text-ink-2">{row.capacity}</span>
            {open === row.carrier ? (
              <span className="col-span-2 mt-2 flex flex-wrap items-center justify-between gap-3 rounded-[12px] border border-line bg-bg px-3 py-2 md:col-span-6">
                <span className="text-[12px] text-ink-2">
                  Cutoff 16:00 local. Documents required before gate-in. Risk
                  model: {row.recommended ? "low" : "moderate"}.
                </span>
                <span onClick={(e) => e.stopPropagation()}>
                  <Button size="sm">Book this route</Button>
                </span>
              </span>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
