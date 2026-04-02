import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1d16] text-white">
      {/* CTA bar */}
      <div className="py-8" style={{ background: "#2B6E4F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-xl">Klaar om te starten?</p>
              <p className="text-white/70 text-sm mt-1">Ontvang vandaag nog een gratis offerte.</p>
            </div>
            <a href="#contact" className="bg-[#F3812A] text-white font-bold px-8 py-3 rounded hover:bg-[#d4701f] transition-colors text-sm whitespace-nowrap">
              Gratis Offerte Aanvragen
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Image
                src="https://trovaverhuur.nl/wp-content/uploads/2025/05/Trova-14.04.25-01.png"
                alt="Trova Verhuur & Transport"
                width={140}
                height={56}
                className="h-12 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-[#7a8882] text-sm leading-relaxed max-w-xs">
                Betrouwbare verhuur van A-merk grondverzet machines voor elk project.
                Professioneel, snel en voordelig in Amsterdam en omgeving.
              </p>
              <div className="mt-4 flex gap-3">
                {["Flexibel inzetbaar", "Duurzame werkwijze"].map((usp) => (
                  <span key={usp} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded" style={{ background: "rgba(43,110,79,0.35)", color: "#7a8882" }}>
                    {usp}
                  </span>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-white/50">Navigatie</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Verhuur", href: "#materieel" },
                  { label: "Transport", href: "#diensten" },
                  { label: "Over Ons", href: "#over-ons" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[#7a8882] text-sm hover:text-[#F3812A] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-white/50">Contact</h4>
              <ul className="space-y-3 text-[#7a8882] text-sm">
                <li>
                  <span className="block text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Telefoon</span>
                  <a href="tel:0203086849" className="hover:text-[#F3812A] transition-colors font-semibold text-white/80">020-3086849</a>
                </li>
                <li>
                  <span className="block text-[10px] uppercase tracking-wider text-white/30 mb-0.5">E-mail</span>
                  <a href="mailto:info@trovaverhuur.nl" className="hover:text-[#F3812A] transition-colors">info@trovaverhuur.nl</a>
                </li>
                <li>
                  <span className="block text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Adres</span>
                  <span>Gyroscoopweg 5, Amsterdam</span>
                </li>
                <li>
                  <span className="block text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Openingstijden</span>
                  <span>Ma – Vr: 07:00 – 17:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#7a8882] text-xs">
          <p>© {currentYear} Trova Verhuur & Transport. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#F3812A] transition-colors">Privacybeleid</Link>
            <Link href="#" className="hover:text-[#F3812A] transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
