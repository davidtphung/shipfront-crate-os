import type { Metadata } from "next";
import { QuoteForm } from "@/components/shipfront/QuoteForm";
import { quote } from "@/data/site-copy";

export const metadata: Metadata = {
  title: "Get a Quote",
};

export default function QuotePage() {
  return (
    <article className="mx-auto max-w-[840px] px-5 pt-28 pb-20 sm:px-8">
      <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-ink sm:text-[56px]">
        {quote.title}
      </h1>
      <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-ink-2">
        {quote.body}
      </p>
      <div className="mt-10">
        <QuoteForm />
      </div>
    </article>
  );
}
