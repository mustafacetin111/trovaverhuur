import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trova Verhuur & Transport | Verhuur van Grondverzet Machines",
  description:
    "Wij verhuren a-merk shovels en minigravers voor scherpe tarieven. Met of zonder machinist. Vraag nu een vrijblijvende offerte aan.",
  keywords: "shovel verhuur, minigraver verhuur, grondverzet, wiellader, transport, Amsterdam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${rubik.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
