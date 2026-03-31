import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#23282d] text-white">
      {/* Top CTA bar */}
      <div className="bg-[#dc3545] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-xl">Klaar om te starten?</p>
              <p className="text-red-100 text-sm mt-1">Ontvang vandaag nog een gratis offerte.</p>
            </div>
            <a
              href="#contact"
              className="bg-white text-[#dc3545] font-bold px-8 py-3 rounded hover:bg-[#E6E6EB] transition-colors text-sm whitespace-nowrap"
            >
              Gratis Offerte Aanvragen
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#dc3545] rounded flex items-center justify-center font-bold text-xl">
                  T
                </div>
                <div>
                  <p className="font-bold">TROVA</p>
                  <p className="text-[#82828B] text-xs">Verhuur & Transport</p>
                </div>
              </div>
              <p className="text-[#82828B] text-sm leading-relaxed max-w-xs">
                Betrouwbare verhuur van grondverzet machines voor elk project.
                Professioneel, snel en voordelig.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">
                Navigatie
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Diensten", href: "#diensten" },
                  { label: "Materieel", href: "#materieel" },
                  { label: "Over Ons", href: "#over-ons" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#82828B] text-sm hover:text-[#dc3545] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3 text-[#82828B] text-sm">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#E6E6EB]/50 mb-0.5">E-mail</span>
                  <a href="mailto:info@trovaverhuur.nl" className="hover:text-[#dc3545] transition-colors">
                    info@trovaverhuur.nl
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#E6E6EB]/50 mb-0.5">Website</span>
                  <a href="https://trovaverhuur.nl" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc3545] transition-colors">
                    trovaverhuur.nl
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#E6E6EB]/50 mb-0.5">Openingstijden</span>
                  Ma - Vr: 07:00 - 18:00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#82828B] text-xs">
          <p>© {currentYear} Trova Verhuur & Transport. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#dc3545] transition-colors">Privacybeleid</Link>
            <Link href="#" className="hover:text-[#dc3545] transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
