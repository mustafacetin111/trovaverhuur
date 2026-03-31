"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Materieel", href: "#materieel" },
  { label: "Over Ons", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#23282d] shadow-lg" : "bg-[#23282d]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#dc3545] rounded flex items-center justify-center font-bold text-white text-xl group-hover:bg-[#c82333] transition-colors">
              T
            </div>
            <div className="leading-tight">
              <p className="text-white font-bold text-sm md:text-base">TROVA</p>
              <p className="text-[#82828B] text-xs">Verhuur & Transport</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#E6E6EB] hover:text-[#dc3545] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="#contact" className="btn-primary text-sm">
              Gratis Offerte
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2c3338] border-t border-[#E6E6EB]/10">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#E6E6EB] hover:text-[#dc3545] font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact" className="btn-primary text-center text-sm" onClick={() => setMenuOpen(false)}>
              Gratis Offerte
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
