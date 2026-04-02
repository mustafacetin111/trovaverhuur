import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trova Verhuur & Transport | Grondverzet Machines",
  description:
    "Trova Verhuur & Transport – Wij verhuren A-merk shovels en minigravers voor scherpe tarieven. Mogelijk met machinist. Vraag nu een vrijblijvende offerte aan.",
  keywords: "grondverzet machines verhuur, shovel verhuur, minigraver verhuur, machinist verhuur, grondverzet transport",
  openGraph: {
    title: "Trova Verhuur & Transport",
    description: "Verhuur van grondverzet machines – shovels & minigravers",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={jakarta.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
