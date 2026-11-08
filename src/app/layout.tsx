import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://softek-labs-website-xi.vercel.app",
  ),
  title: {
    default: "Softek Labs — Marketing, Content & Technology",
    template: "%s | Softek Labs",
  },
  description:
    "Grow your business with online advertising, WhatsApp marketing, AI videos, creative content, custom software, and websites from Softek Labs.",
  openGraph: {
    type: "website",
    siteName: "Softek Labs",
    locale: "en_IN",
    title: "Softek Labs — Make your next move a big one.",
    description:
      "Creative thinking. Business-building technology. Marketing, content, WhatsApp campaigns, software, and websites.",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
