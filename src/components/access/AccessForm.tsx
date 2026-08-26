"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const fields = [
  { id: "name", label: "Full name", type: "text", auto: "name" },
  { id: "email", label: "Work email", type: "email", auto: "email" },
  { id: "company", label: "Company", type: "text", auto: "organization" },
  { id: "role", label: "Role", type: "text", auto: "organization-title" },
] as const;

export function AccessForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[16px] border border-line bg-elevated p-6">
        <p className="text-lg font-medium text-ink">Request received.</p>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-2">
          This preview stays on your device. In a live workspace, the Shipfront
          team would follow up from here.
        </p>
      </div>
    );
  }

  return (
    <form
      className={cn("grid gap-4", compact ? "" : "sm:grid-cols-2")}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      {fields.map((field) => (
        <label key={field.id} className="grid gap-2 text-sm">
          <span className="text-ink-2">{field.label}</span>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            autoComplete={field.auto}
            required
            className="h-11 rounded-[12px] border border-line bg-bg px-3 text-[15px] text-ink"
          />
        </label>
      ))}
      <label className={cn("grid gap-2 text-sm", compact ? "" : "sm:col-span-2")}>
        <span className="text-ink-2">Monthly shipment volume</span>
        <select
          name="volume"
          className="h-11 rounded-[12px] border border-line bg-bg px-3 text-[15px] text-ink"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="under-100">Under 100</option>
          <option value="100-1000">100 to 1,000</option>
          <option value="1000-10000">1,000 to 10,000</option>
          <option value="10000+">10,000+</option>
        </select>
      </label>
      <label className={cn("grid gap-2 text-sm", compact ? "" : "sm:col-span-2")}>
        <span className="text-ink-2">What needs to move?</span>
        <textarea
          name="notes"
          rows={3}
          className="resize-none rounded-[12px] border border-line bg-bg px-3 py-2.5 text-[15px] text-ink placeholder:text-ink-3"
          placeholder="Modes, lanes, systems you currently use"
        />
      </label>
      <div className={compact ? "" : "sm:col-span-2"}>
        <Button type="submit">Request access</Button>
      </div>
    </form>
  );
}
