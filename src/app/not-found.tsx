"use client";

import { useEffect } from "react";
import Link from "next/link";

const DOUBLED = "/shipfront-crate-os/shipfront-crate-os";

export default function NotFound() {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (path === DOUBLED || path.startsWith(`${DOUBLED}/`)) {
      const rest = path.slice(DOUBLED.length) || "/";
      const next = rest.endsWith("/") || rest === "/" ? rest : `${rest}/`;
      window.location.replace(
        `/shipfront-crate-os${next}${window.location.search}${window.location.hash}`,
      );
    }
  }, []);

  return (
    <article className="mx-auto max-w-[800px] px-5 pt-28 pb-20 sm:px-8">
      <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-ink sm:text-[56px]">
        Page not found
      </h1>
      <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-ink-2">
        This page is not on Shipfront.
      </p>
      <p className="mt-8">
        <Link href="/get-a-quote/" className="text-[18px] text-accent">
          Get a Quote
        </Link>
      </p>
    </article>
  );
}
