"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useAccess } from "@/components/access/AccessContext";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/cn";

export function SiteNav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { show } = useAccess();
  const pathname = usePathname();
  const home = pathname === "/";

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 18);
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <motion.nav
        aria-label="Primary"
        className={cn(
          "pointer-events-auto mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 transition-[background-color,border-color,box-shadow,backdrop-filter,border-radius] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-5",
          scrolled
            ? "rounded-[20px] border border-line bg-bg-2/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "rounded-[16px] border border-transparent bg-transparent",
        )}
      >
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={home ? item.href : `/${item.href}`}
                className="group relative rounded-[10px] px-2.5 py-1.5 text-[13px] text-ink-2 transition-colors hover:text-ink"
              >
                {item.label}
                <span className="absolute inset-x-2.5 -bottom-0.5 h-px origin-left scale-x-0 bg-cyan transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/sign-in"
            className="px-3 py-1.5 text-[13px] text-ink-2 transition-colors hover:text-ink"
          >
            Sign in
          </Link>
          <Button size="sm" onClick={show}>
            Request access
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-line text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <List size={18} />}
        </button>
      </motion.nav>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1440px] rounded-[20px] border border-line bg-bg-2/95 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:hidden">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={home ? item.href : `/${item.href}`}
                  className="block rounded-[12px] px-3 py-2.5 text-[15px] text-ink-2 hover:bg-white/[0.04] hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2">
            <Button href="/sign-in" variant="ghost" size="sm" className="flex-1">
              Sign in
            </Button>
            <Button
              size="sm"
              className="flex-1"
              onClick={() => {
                setOpen(false);
                show();
              }}
            >
              Request access
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
