"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { navLinks, primaryCta } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(open, menuRef);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div ref={sentinelRef} className="absolute inset-x-0 top-0 h-3" aria-hidden />
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={cn(
            "pointer-events-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 rounded-[18px] px-3 transition-all duration-[280ms] ease-[var(--ease-out-expo)] sm:px-5",
            scrolled
              ? "border border-line bg-paper/90 shadow-[0_10px_40px_rgba(13,21,32,0.08)] backdrop-blur-md"
              : "border border-transparent bg-transparent",
          )}
        >
          <Link
            href="/"
            className="flex min-h-11 items-center rounded-[10px] px-1"
            aria-label="Shipfront home"
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace(/\/$/, ""));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-[10px] px-3 py-2 text-[14px] font-medium text-ink-2 transition-colors hover:text-ink",
                    active && "text-ink",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            </span>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[12px] border border-line bg-paper text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(true)}
            >
              <List size={22} weight="bold" />
              <span className="sr-only">Open Menu</span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          ref={menuRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-canvas px-5 pt-6 pb-[env(safe-area-inset-bottom)]"
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[12px] border border-line bg-paper"
              onClick={() => setOpen(false)}
            >
              <X size={22} weight="bold" />
              <span className="sr-only">Close Menu</span>
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[14px] px-2 py-3 text-[28px] font-semibold tracking-[-0.03em] text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto py-8">
            <Button href={primaryCta.href} className="w-full">
              {primaryCta.label}
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
