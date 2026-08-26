"use client";

import { AccessProvider, useAccess } from "@/components/access/AccessContext";
import { AccessDialog } from "@/components/access/AccessDialog";
import { SiteNav } from "@/components/nav/SiteNav";

function Shell({ children }: { children: React.ReactNode }) {
  const { open } = useAccess();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[90] focus-visible:rounded-[10px] focus-visible:bg-ink focus-visible:px-3 focus-visible:py-2 focus-visible:text-bg"
      >
        Skip to content
      </a>
      <div inert={open || undefined}>
        <div className="noise" aria-hidden />
        <SiteNav />
        {children}
      </div>
      <AccessDialog />
    </>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AccessProvider>
      <Shell>{children}</Shell>
    </AccessProvider>
  );
}
