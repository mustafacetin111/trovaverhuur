import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trova Verhuur & Transport | Verhuur van Grondverzet Machines",
  description:
    "Trova levert betrouwbare graafmachines en mini-diggers voor uw bouw- en grondverzetprojecten. Snel beschikbaar, professioneel en met optionele machinist.",
  keywords: "graafmachine verhuur, mini-digger verhuur, grondverzet, bouwmachines, transport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
