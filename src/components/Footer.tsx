"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  diensten: [
    { label: "Machine verhuur", href: "/machines" },
    { label: "Met machinist", href: "/contact" },
    { label: "Transport & levering", href: "/contact" },
    { label: "Offerte aanvragen", href: "/contact" },
  ],
  machines: [
    { label: "Minigraver 1.7T", href: "/machines#minigraver-1-7" },
    { label: "Minigraver 3.5T", href: "/machines#minigraver-3-5" },
    { label: "Minigraver 6T", href: "/machines#minigraver-6t" },
    { label: "Shovel 13T", href: "/machines#shovel-13t" },
  ],
  bedrijf: [
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
    { label: "Privacybeleid", href: "/privacy" },
    { label: "Algemene voorwaarden", href: "/voorwaarden" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)", color: "white" }}>
      {/* CTA bar */}
      <div style={{ background: "var(--orange)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-lg text-white">Klaar voor uw project?</p>
            <p className="text-sm text-white/75 mt-0.5">Vraag vandaag nog een vrijblijvende offerte aan.</p>
          </div>
          <Link
            href="/contact"
            className="btn flex items-center gap-2 font-semibold text-sm whitespace-nowrap"
            style={{ background: "white", color: "var(--orange)", borderRadius: "8px", padding: "0.65rem 1.5rem" }}
          >
            Offerte aanvragen <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: "var(--orange)" }}
              >
                T
              </div>
              <div>
                <div className="font-bold text-base text-white leading-tight">Trova</div>
                <div className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>Verhuur & Transport</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              Uw specialist in de verhuur van A-merk grondverzet machines.
              Shovels, minigravers en transport voor elk project.
            </p>
            <div className="space-y-3.5">
              {[
                { icon: Phone, text: "+31 6 12 34 56 78", href: "tel:+31612345678" },
                { icon: Mail, text: "info@trovaverhuur.nl", href: "mailto:info@trovaverhuur.nl" },
                { icon: MapPin, text: "Groningen, Nederland", href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm">
                  <Icon size={13} style={{ color: "var(--orange)", flexShrink: 0 }} />
                  {href ? (
                    <a href={href} className="footer-link" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {text}
                    </a>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Diensten", links: footerLinks.diensten },
            { title: "Machines", links: footerLinks.machines },
            { title: "Bedrijf", links: footerLinks.bedrijf },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-5">{title}</h4>
              <ul className="space-y-3.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-16 pt-10 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}
        >
          <span>© {new Date().getFullYear()} Trova Verhuur & Transport. Alle rechten voorbehouden.</span>
          <span>KvK: 12345678 · BTW: NL123456789B01</span>
        </div>
      </div>
    </footer>
  );
}
