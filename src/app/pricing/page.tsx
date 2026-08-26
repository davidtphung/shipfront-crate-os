import type { Metadata } from "next";
import { quote } from "@/data/site-copy";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <article className="mx-auto max-w-[800px] px-5 pt-28 pb-20 sm:px-8">
      <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-ink sm:text-[56px]">
        {quote.title}
      </h1>
      <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-ink-2">
        {quote.body}
      </p>
      <div className="mt-8">
        <Button href="/get-a-quote/">Get a Quote</Button>
      </div>
    </article>
  );
}
