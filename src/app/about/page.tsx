import type { Metadata } from "next";
import { about } from "@/data/site-copy";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[900px] px-5 pt-28 pb-20 sm:px-8">
      <h1 className="text-[36px] leading-[1.1] font-semibold tracking-[-0.04em] text-ink sm:text-[52px]">
        {about.headline}
      </h1>
      <p className="mt-8 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">
        {about.body}
      </p>
      <h2 className="mt-16 text-[24px] font-semibold tracking-[-0.03em]">
        {about.valuesTitle}
      </h2>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2">
        {about.values.map((value) => (
          <li key={value.title} className="rounded-[16px] border border-line bg-paper p-6">
            <h3 className="text-[20px] font-semibold tracking-[-0.02em]">{value.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{value.copy}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
