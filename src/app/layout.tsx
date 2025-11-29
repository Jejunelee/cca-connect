import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

// Initialize Jost font
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CCA Connect",
  description: "The temporary website of CCA Connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script
  defer
  src="https://umami-five-weld-41.vercel.app/script.js"
  data-website-id="75177303-2683-4c76-8506-61e3a80c6081"
  strategy="afterInteractive"
/>
      </body>
    </html>
  );
}