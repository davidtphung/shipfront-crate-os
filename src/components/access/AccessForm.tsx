"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const fields = [
  { id: "name", label: "Full name", type: "text", auto: "name", spell: true },
  { id: "email", label: "Work email", type: "email", auto: "email", spell: false },
  { id: "company", label: "Company", type: "text", auto: "organization", spell: true },
  { id: "role", label: "Role", type: "text", auto: "organization-title", spell: true },
] as const;

type Errors = Partial<Record<string, string>>;

export function AccessForm({ compact = false }: { compact?: boolean }) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  if (submitted) {
    return (
      <div
        className="rounded-[16px] border border-line bg-elevated p-6"
        role="status"
        aria-live="polite"
      >
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
      noValidate
      className={cn("grid gap-4", compact ? "" : "sm:grid-cols-2")}
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const next: Errors = {};
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const company = String(data.get("company") ?? "").trim();
        const role = String(data.get("role") ?? "").trim();
        const volume = String(data.get("volume") ?? "");
        if (!name) next.name = "Enter your full name.";
        if (!email) next.email = "Enter your work email.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          next.email = "Enter a valid email, like name@company.com.";
        }
        if (!company) next.company = "Enter your company.";
        if (!role) next.role = "Enter your role.";
        if (!volume) next.volume = "Select a monthly volume range.";
        setErrors(next);
        if (Object.keys(next).length > 0) {
          const first = Object.keys(next)[0];
          document.getElementById(`${formId}-${first}`)?.focus();
          return;
        }
        setSubmitted(true);
      }}
    >
      {fields.map((field) => {
        const fieldId = `${formId}-${field.id}`;
        const errorId = `${fieldId}-error`;
        const error = errors[field.id];
        return (
          <div key={field.id} className="grid gap-2 text-sm">
            <label htmlFor={fieldId} className="text-ink-2">
              {field.label}
            </label>
            <input
              id={fieldId}
              name={field.id}
              type={field.type}
              autoComplete={field.auto}
              spellCheck={field.spell}
              required
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
              className="h-11 rounded-[12px] border border-line bg-bg px-3 text-[15px] text-ink"
            />
            {error ? (
              <p id={errorId} className="text-[13px] text-crit" role="alert">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}
      <div className={cn("grid gap-2 text-sm", compact ? "" : "sm:col-span-2")}>
        <label htmlFor={`${formId}-volume`} className="text-ink-2">
          Monthly shipment volume
        </label>
        <select
          id={`${formId}-volume`}
          name="volume"
          autoComplete="off"
          required
          aria-invalid={Boolean(errors.volume)}
          aria-describedby={errors.volume ? `${formId}-volume-error` : undefined}
          className="h-11 rounded-[12px] border border-line bg-bg px-3 text-[15px] text-ink"
          defaultValue=""
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="under-100">Under 100</option>
          <option value="100-1000">100 to 1,000</option>
          <option value="1000-10000">1,000 to 10,000</option>
          <option value="10000+">10,000+</option>
        </select>
        {errors.volume ? (
          <p id={`${formId}-volume-error`} className="text-[13px] text-crit" role="alert">
            {errors.volume}
          </p>
        ) : null}
      </div>
      <div className={cn("grid gap-2 text-sm", compact ? "" : "sm:col-span-2")}>
        <label htmlFor={`${formId}-notes`} className="text-ink-2">
          What needs to move?
        </label>
        <textarea
          id={`${formId}-notes`}
          name="notes"
          rows={3}
          autoComplete="off"
          className="resize-none rounded-[12px] border border-line bg-bg px-3 py-2.5 text-[15px] text-ink placeholder:text-ink-3"
          placeholder="Ocean, rail, and a weekly Long Beach cutoff…"
        />
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <Button type="submit">Request access</Button>
      </div>
    </form>
  );
}
