"use client";

import { useMemo, useState } from "react";
import { bookingRows } from "@/lib/data";
import { SampleTag } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const filters = ["All", "Intermodal", "Rail", "Truck"] as const;
const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function BookingMock() {
  const [mode, setMode] = useState<(typeof filters)[number]>("All");
  const [sort, setSort] = useState<"price" | "transit" | "reliability">(
    "reliability",
  );
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
          <p className="text-[12px] text-ink-3">
            42,000 lb dry van · sample rates
          </p>
        </div>
        <SampleTag />
      </div>
      <div className="flex flex-wrap items-center gap-2 px-4 py-3">
        <div role="group" aria-label="Filter by mode" className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={mode === item}
              onClick={() => setMode(item)}
              className={cn(
                "min-h-10 rounded-full border px-3 text-[12px] transition-colors",
                mode === item
                  ? "border-line-strong bg-white/[0.06] text-ink"
                  : "border-line text-ink-2 hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          role="group"
          aria-label="Sort carriers"
          className="ml-auto flex gap-2"
        >
          {(["reliability", "price", "transit"] as const).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={sort === key}
              onClick={() => setSort(key)}
              className={cn(
                "min-h-10 capitalize px-2 text-[12px]",
                sort === key ? "text-cyan" : "text-ink-3 hover:text-ink",
              )}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-[13px]">
          <caption className="sr-only">
            Sample carrier options for Long Beach to Chicago
          </caption>
          <thead className="border-b border-line text-[11px] uppercase tracking-[0.08em] text-ink-3">
            <tr>
              <th scope="col" className="px-4 py-2 font-medium">
                Carrier
              </th>
              <th scope="col" className="px-4 py-2 font-medium">
                Transit
              </th>
              <th scope="col" className="px-4 py-2 font-medium">
                Price
              </th>
              <th scope="col" className="px-4 py-2 font-medium">
                Reliability
              </th>
              <th scope="col" className="px-4 py-2 font-medium">
                Carbon
              </th>
              <th scope="col" className="px-4 py-2 font-medium">
                Capacity
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const expanded = open === row.carrier;
              return (
                <tr
                  key={row.carrier}
                  className={cn(
                    "border-b border-line",
                    row.recommended && "bg-accent/5",
                  )}
                >
                  <th scope="row" className="px-4 py-3 font-medium" colSpan={6}>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      className="grid w-full grid-cols-2 gap-2 text-left md:grid-cols-6"
                      onClick={() =>
                        setOpen(expanded ? null : row.carrier)
                      }
                    >
                      <span className="col-span-2 md:col-span-1">
                        <span className="block">{row.carrier}</span>
                        {row.recommended ? (
                          <span className="text-[10px] uppercase tracking-[0.12em] text-cyan">
                            Recommended
                          </span>
                        ) : (
                          <span className="font-mono text-[11px] text-ink-3">
                            {row.code}
                          </span>
                        )}
                      </span>
                      <span>{row.transit}</span>
                      <span className="font-mono">{money.format(row.price)}</span>
                      <span className="text-ok">{row.reliability}%</span>
                      <span className="text-ink-2">{row.carbon} t CO2e</span>
                      <span className="text-ink-2">{row.capacity}</span>
                    </button>
                    {expanded ? (
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-[12px] border border-line bg-bg px-3 py-2">
                        <p className="text-[12px] font-normal text-ink-2">
                          Cutoff 16:00 local. Documents required before gate-in.
                          Risk model: {row.recommended ? "low" : "moderate"}.
                        </p>
                        <Button size="sm">Book this route</Button>
                      </div>
                    ) : null}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
