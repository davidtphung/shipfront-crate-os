"use client";

import { AccessProvider } from "@/components/access/AccessContext";
import { AccessDialog } from "@/components/access/AccessDialog";
import { SiteNav } from "@/components/nav/SiteNav";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AccessProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-[10px] focus:bg-ink focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <div className="noise" aria-hidden />
      <SiteNav />
      {children}
      <AccessDialog />
    </AccessProvider>
  );
}
