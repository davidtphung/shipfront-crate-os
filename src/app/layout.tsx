import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/shipfront/Footer";
import { site, hero } from "@/data/site-copy";
import { BASE_PATH } from "@/lib/paths";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shipfront",
    template: "%s — Shipfront",
  },
  description: hero.body,
  metadataBase: new URL(site.url),
  icons: {
    icon: [{ url: `${BASE_PATH}/icon.svg`, type: "image/svg+xml" }],
    apple: `${BASE_PATH}/apple-touch-icon.svg`,
  },
  openGraph: {
    title: "Shipfront",
    description: hero.body,
    url: site.url,
    siteName: "Shipfront",
    type: "website",
    images: [
      {
        url: "https://davidtphung.github.io/shipfront-crate-os/og.svg",
        alt: "Shipfront",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F8F4",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas pb-[env(safe-area-inset-bottom)] font-sans text-ink">
        <Providers>
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
