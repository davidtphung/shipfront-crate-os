"use client";

import { useRef, useState } from "react";
import { quote, quoteFields, site, squarespaceForm } from "@/data/site-copy";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Values = Record<string, string>;

function validate(values: Values) {
  const errors: Values = {};
  if (!values.name?.trim()) errors.name = "Enter your name.";
  if (!values.email?.trim()) errors.email = "Enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email.";
  if (!values.phone?.trim()) errors.phone = "Enter your phone number.";
  return errors;
}

export function QuoteForm() {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Values>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const busy = status === "submitting";

  function onChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (busy) return;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    const formFieldValues = quoteFields.map((field) => ({
      key: field.id,
      value: values[field.name] ?? "",
    }));

    try {
      const response = await fetch(squarespaceForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formId: squarespaceForm.formId,
          collectionId: squarespaceForm.collectionId,
          captchaEnabled: false,
          formFieldValues,
        }),
      });
      if (!response.ok) throw new Error("not ok");
      setStatus("success");
      setMessage(quote.success);
    } catch {
      const body = quoteFields
        .map((field) => `${field.title}: ${values[field.name] ?? ""}`)
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      setMessage(quote.success);
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-[16px] border border-line bg-paper p-6 text-[17px] text-ink">
        {message}
      </p>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        {quoteFields.map((field) => {
          const id = field.name;
          const error = errors[id];
          const shared = {
            id,
            name: id,
            required: field.required,
            autoComplete:
              field.type === "email"
                ? "email"
                : field.type === "phone"
                  ? "tel"
                  : field.type === "name"
                    ? "name"
                    : field.type === "website"
                      ? "url"
                      : undefined,
            value: values[id] ?? "",
            onChange: (
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => onChange(id, event.target.value),
            "aria-invalid": Boolean(error) || undefined,
            "aria-describedby": error ? `${id}-error` : undefined,
            className: cn(
              "min-h-11 w-full rounded-[12px] border bg-paper px-3 text-[16px] text-ink outline-none",
              error ? "border-[#c23b4a]" : "border-line focus:border-accent",
            ),
          };
          return (
            <div
              key={id}
              className={field.type === "textarea" ? "md:col-span-2" : undefined}
            >
              <label htmlFor={id} className="mb-2 block text-[13px] font-medium text-ink">
                {field.title}
                {field.required ? " *" : ""}
              </label>
              {field.type === "textarea" ? (
                <textarea {...shared} rows={4} className={cn(shared.className, "py-3")} />
              ) : (
                <input
                  {...shared}
                  type={
                    field.type === "email"
                      ? "email"
                      : field.type === "phone"
                        ? "tel"
                        : field.type === "number"
                          ? "number"
                          : "text"
                  }
                  inputMode={
                    field.type === "phone"
                      ? "tel"
                      : field.type === "number"
                        ? "numeric"
                        : field.type === "email"
                          ? "email"
                          : undefined
                  }
                />
              )}
              {error ? (
                <p id={`${id}-error`} className="mt-1 text-[13px] text-[#c23b4a]">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
      <div>
        <Button type="submit" disabled={busy}>
          {busy ? "Sending" : quote.submit}
        </Button>
      </div>
    </form>
  );
}
