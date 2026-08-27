import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerLinks } from "@/data/navigation";
import { site } from "@/data/site-copy";

export function Footer() {
  return (
    <footer className="bg-night text-night-text">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-cyan/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo invert />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-night-muted">
            {site.footerLine}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-[12px] font-medium tracking-[0.14em] text-night-muted uppercase">
            Pages
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-night-text/90 hover:text-night-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-[12px] font-medium tracking-[0.14em] text-night-muted uppercase">
            Visit
          </p>
          <address className="mt-4 not-italic text-[15px] leading-relaxed text-night-text/90">
            {site.address.name}
            <br />
            {site.address.street}
            <br />
            {site.address.cityLine}
            <br />
            <a className="mt-3 inline-block text-cyan" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto flex max-w-[1440px] px-5 py-5 text-[12px] text-night-muted sm:px-8">
          © {new Date().getFullYear()} Shipfront
        </p>
      </div>
    </footer>
  );
}
