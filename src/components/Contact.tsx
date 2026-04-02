"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });
    tl.fromTo(infoRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
      .fromTo(formRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F3812A] text-sm font-bold uppercase tracking-widest">
            Neem Contact Op
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111] mt-3 mb-4">
            Vraag een Gratis Offerte Aan
          </h2>
          <div className="w-16 h-1 bg-[#F3812A] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#111] mb-6">Contactgegevens</h3>
              <div className="space-y-5">
                {[
                  { icon: "📍", label: "Adres", value: "Gyroscoopweg 5, 1042 AB Amsterdam" },
                  { icon: "📞", label: "Telefoon", value: "020-3086849", href: "tel:0203086849" },
                  { icon: "📧", label: "E-mail", value: "info@trovaverhuur.nl", href: "mailto:info@trovaverhuur.nl" },
                  { icon: "🕐", label: "Openingstijden", value: "Ma – Vr: 07:00 – 17:00 | Za–Zo: gesloten" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-[#7a8882] text-xs font-semibold uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#111] font-semibold mt-0.5 hover:text-[#2B6E4F] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#111] font-medium mt-0.5">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* USPs */}
            <div className="rounded-lg p-6 text-white" style={{ background: "#2B6E4F" }}>
              <h4 className="font-bold mb-4 text-[#F3812A]">Waarom Trova?</h4>
              <ul className="space-y-2.5">
                {[
                  "Flexibel inzetbaar — met of zonder machinist",
                  "A-merk Giant wielladers & minigravers",
                  "Scherpe tarieven, geen verrassingen",
                  "Professioneel onderhouden machines",
                  "Duurzame werkwijze, kwaliteit & vakmanschap",
                ].map((usp) => (
                  <li key={usp} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.88)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3812A] shrink-0" />
                    {usp}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef}>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(43,110,79,0.12)" }}>
                    <svg className="w-8 h-8" style={{ color: "#2B6E4F" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#111] mb-2">Bedankt!</h3>
                  <p className="text-[#7a8882]">We nemen zo snel mogelijk contact met u op.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#111] mb-1.5">Naam *</label>
                    <input type="text" required placeholder="Uw naam"
                      className="w-full border border-[#E8EBE9] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2B6E4F] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111] mb-1.5">Bedrijf</label>
                    <input type="text" placeholder="Uw bedrijfsnaam"
                      className="w-full border border-[#E8EBE9] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2B6E4F] transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#111] mb-1.5">Telefoon *</label>
                    <input type="tel" required placeholder="+31 6 ..."
                      className="w-full border border-[#E8EBE9] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2B6E4F] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111] mb-1.5">E-mail *</label>
                    <input type="email" required placeholder="uw@email.nl"
                      className="w-full border border-[#E8EBE9] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2B6E4F] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-1.5">Machine Type</label>
                  <select className="w-full border border-[#E8EBE9] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2B6E4F] transition-colors bg-white">
                    <option value="">Selecteer een machine</option>
                    <option>Giant 2500 X-TRA</option>
                    <option>Giant G1500 X-TRA</option>
                    <option>Giant 2700 X-TRA HD+</option>
                    <option>Giant 3500 X-TRA</option>
                    <option>Giant 2200E X-TRA (Elektrisch)</option>
                    <option>Giant V6004 X-TRA</option>
                    <option>Transport aanhanger</option>
                    <option>Anders / Onbekend</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#111] mb-1.5">Omschrijving Project *</label>
                  <textarea required rows={4} placeholder="Vertel ons over uw project, locatie, gewenste huurperiode..."
                    className="w-full border border-[#E8EBE9] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2B6E4F] transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full text-base py-4">
                  Offerte Aanvragen →
                </button>
                <p className="text-[#7a8882] text-xs text-center">Wij reageren binnen 24 uur op uw aanvraag.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
