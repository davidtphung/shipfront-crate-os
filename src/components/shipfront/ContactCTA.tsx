"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { quote } from "@/data/site-copy";
import { primaryCta } from "@/data/navigation";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-night text-night-text">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 400"
        aria-hidden
      >
        <path
          d="M0 80 L280 200 L600 160 L920 220 L1200 140"
          fill="none"
          stroke="#42D8F4"
          strokeWidth="1.2"
          opacity="0.45"
        />
        <path
          d="M0 320 L260 210 L600 160 L940 80 L1200 180"
          fill="none"
          stroke="#2368F6"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <circle cx="600" cy="160" r="18" fill="#2368F6" />
      </svg>
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="max-w-[12ch] text-[42px] leading-[1.02] font-semibold tracking-[-0.05em] sm:text-[64px]">
          {quote.title}
        </h2>
        <p className="mt-5 max-w-[42ch] text-[17px] leading-relaxed text-night-muted">
          {quote.body}
        </p>
        <div className="mt-8">
          <Button href={primaryCta.href} variant="night">
            {primaryCta.label}
            <ArrowRight size={16} weight="bold" />
          </Button>
        </div>
      </div>
    </section>
  );
}
