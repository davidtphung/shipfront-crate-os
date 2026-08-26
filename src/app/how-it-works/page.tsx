import type { Metadata } from "next";
import { howItWorks } from "@/data/site-copy";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How it Works",
};

export default function HowItWorksPage() {
  return (
    <article className="mx-auto max-w-[900px] px-5 pt-28 pb-20 sm:px-8">
      <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-ink sm:text-[56px]">
        {howItWorks.headline}
      </h1>
      <ol className="mt-12 space-y-6">
        {howItWorks.steps.map((step, i) => (
          <li
            key={step.title}
            className="border-t border-line pt-6"
          >
            <p className="font-mono text-[12px] text-muted">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-[24px] font-semibold tracking-[-0.03em] text-ink sm:text-[32px]">
              {step.title}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <Button href="/get-a-quote/">Get a Quote</Button>
      </div>
    </article>
  );
}
