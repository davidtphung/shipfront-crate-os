import type { Metadata } from "next";
import { partners } from "@/data/site-copy";
import { QuoteForm } from "@/components/shipfront/QuoteForm";

export const metadata: Metadata = {
  title: "Partners",
};

export default function PartnersPage() {
  return (
    <article className="mx-auto max-w-[840px] px-5 pt-28 pb-20 sm:px-8">
      <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-ink sm:text-[56px]">
        {partners.title}
      </h1>
      <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-ink-2">
        {partners.intro}
      </p>
      <h2 className="mt-14 text-[28px] font-semibold tracking-[-0.03em]">
        {partners.ctaTitle}
      </h2>
      <p className="mt-3 max-w-[46ch] text-[16px] leading-relaxed text-ink-2">
        {partners.ctaBody}
      </p>
      <div className="mt-8">
        <QuoteForm />
      </div>
    </article>
  );
}
