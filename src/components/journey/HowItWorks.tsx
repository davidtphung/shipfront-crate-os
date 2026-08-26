"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { LogoMark } from "@/components/ui/Logo";
import { journey } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks() {
  const wrap = useRef<HTMLDivElement>(null);
  const crate = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !crate.current) return;
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        crate.current,
        { x: 24 },
        {
          x: () => Math.min(wrap.current!.offsetWidth * 0.72, 820),
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top top",
            end: "+=900",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, wrap.current);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={wrap} className="relative">
      <Section className="py-24 md:py-32 lg:flex lg:min-h-[100dvh] lg:flex-col lg:justify-center">
        <div className="max-w-3xl">
          <h2 className="text-[34px] font-medium leading-[1.08] tracking-[-0.03em] md:text-5xl lg:text-[56px]">
            From booking to delivery, one operational thread.
          </h2>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[24px] border border-line bg-bg-2 px-4 py-10 md:px-8">
          <svg
            viewBox="0 0 1100 180"
            className="absolute inset-x-0 top-8 hidden h-40 w-full lg:block"
            aria-hidden
          >
            <path
              d="M40 110 C 180 110, 220 40, 360 70 S 560 160, 720 90 S 940 40, 1060 90"
              fill="none"
              stroke="rgba(91,124,255,0.55)"
              strokeWidth="1.6"
              className="flow-dash"
            />
            {[80, 280, 520, 760, 980].map((x) => (
              <circle
                key={x}
                cx={x}
                cy={x === 520 ? 120 : 90}
                r="4"
                fill="#53D9FF"
              />
            ))}
          </svg>
          <div ref={crate} className="absolute top-6 hidden lg:block" aria-hidden>
            <LogoMark className="h-12 w-12" />
          </div>
          <div className="relative mt-0 grid gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-5 lg:pt-28">
            {journey.map((step) => (
              <article
                key={step.key}
                className="rounded-[18px] border border-line bg-elevated p-5"
              >
                <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-cyan">
                  {step.title}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
