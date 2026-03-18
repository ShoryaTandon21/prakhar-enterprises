import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileActionBar from "@/components/MobileActionBar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: `%s | ${site.name}`
  },
  description: site.seoDescription,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.seoTitle,
    description: site.seoDescription,
    url: site.url,
    siteName: site.name,
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-[var(--font-poppins)]">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-card"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="min-h-[70vh] pb-24 sm:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileActionBar />
      </body>
    </html>
  );
}
