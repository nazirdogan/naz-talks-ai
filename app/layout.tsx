import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BGPattern } from "@/components/ui/bg-pattern";

export const metadata: Metadata = {
  title: "Naz talks AI",
  description: "Practical AI workflows, honest tool reviews, and real strategies for business owners.",
  metadataBase: new URL("https://naztalksai.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="relative font-sans">
        <BGPattern variant="diagonal-stripes" mask="none" size={20} fill="#d8d7d2" className="opacity-50 fixed" />
        {/* GA4 Placeholder — replace G-XXXXXXXXXX with real GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
