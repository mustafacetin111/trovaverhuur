"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Machines", href: "/machines" },
  { label: "Over Ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "var(--navy)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 28px rgba(0,0,0,0.22)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between" style={{ height: "4.5rem" }}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
              style={{ background: "var(--orange)", fontSize: "1rem" }}
            >
              T
            </div>
            <div className="leading-tight">
              <div className="font-bold text-base text-white" style={{ lineHeight: 1.2 }}>
                Trova
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.48)", lineHeight: 1 }}>
                Verhuur & Transport
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.7)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+31612345678"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")
              }
            >
              <Phone size={13} style={{ color: "var(--orange)" }} />
              +31 6 12 34 56 78
            </a>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "0.55rem 1.3rem", fontSize: "0.85rem" }}>
              Offerte aanvragen
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setOpen(!open)}
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "var(--navy-dark)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-sm font-medium border-b"
                style={{
                  color: "rgba(255,255,255,0.72)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary mt-4 justify-center"
              onClick={() => setOpen(false)}
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
