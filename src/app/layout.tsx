import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// Initialize Jost font
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"], // adjust weights as needed
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
      </body>
    </html>
  );
}
