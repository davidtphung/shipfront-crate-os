import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const columns = [
  {
    title: "Product",
    links: [
      ["Command Center", "#product"],
      ["Booking", "#product"],
      ["Tracking", "#product"],
      ["Intelligence", "#product"],
      ["Analytics", "#network"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Freight forwarders", "#why"],
      ["Retailers", "#why"],
      ["Manufacturers", "#why"],
      ["3PLs", "#why"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "#why"],
      ["Careers", "#resources"],
      ["Contact", "/request-access"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["API", "#developers"],
      ["Documentation", "#developers"],
      ["Security", "#resources"],
      ["Status", "#resources"],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer id="resources" className="border-t border-line px-5 py-16 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[16px] leading-relaxed text-ink-2">
            Shipfront. Operations for everything in motion.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] uppercase tracking-[0.16em] text-ink-3">
                {col.title}
              </p>
              <ul className="mt-4 grid gap-2">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith("#") ? (
                      <a
                        href={href}
                        className="text-[14px] text-ink-2 transition-colors hover:text-ink"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-[14px] text-ink-2 transition-colors hover:text-ink"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1440px] flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[13px] text-ink-3">
        <p>© 2026 Shipfront</p>
        <div className="flex gap-4">
          <a href="#resources" className="hover:text-ink">
            Privacy
          </a>
          <a href="#resources" className="hover:text-ink">
            Terms
          </a>
          <a href="#resources" className="hover:text-ink">
            Security
          </a>
        </div>
      </div>
    </footer>
  );
}
