"use client";

import { Shield, Clock, Star, Headphones, Award, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "A-merk materieel",
    description: "Caterpillar, Volvo, Kubota en Bobcat. Altijd goed onderhouden en veilig gecertificeerd.",
  },
  {
    icon: Shield,
    title: "Volledig verzekerd",
    description: "Al onze machines zijn volledig verzekerd. U huurt zonder zorgen.",
  },
  {
    icon: Clock,
    title: "Flexibele planning",
    description: "Dag-, week- of maandtarief. Wij passen ons aan uw planning aan.",
  },
  {
    icon: Headphones,
    title: "Persoonlijk contact",
    description: "Direct contact met onze specialisten — geen callcenter, wel eerlijk advies.",
  },
  {
    icon: Star,
    title: "Gecertificeerde machinisten",
    description: "VCA-gecertificeerd met jarenlange ervaring in grondverzet en fundaties.",
  },
  {
    icon: MapPin,
    title: "Levering op locatie",
    description: "Wij bezorgen en halen op. Snel, betrouwbaar en op het afgesproken tijdstip.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-lg" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="label mb-5">Waarom Trova?</div>
            <h2 className="heading" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
              Uw partner in grondverzet
            </h2>
          </div>
          <p className="text-base leading-relaxed lg:pb-2" style={{ color: "var(--text-muted)" }}>
            Met meer dan 10 jaar ervaring helpen wij bouwbedrijven, aannemers en
            particulieren bij elk grondverzet project — groot of klein.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-8 transition-all duration-200"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--orange)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "var(--orange-bg)" }}
                >
                  <Icon size={20} style={{ color: "var(--orange)" }} />
                </div>
                <h3 className="font-bold text-base mb-3" style={{ color: "var(--text)" }}>
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 p-10 rounded-2xl"
          style={{ background: "var(--white)", border: "1px solid var(--border)" }}
        >
          {[
            { num: "10+", label: "Jaar ervaring" },
            { num: "500+", label: "Tevreden klanten" },
            { num: "10+", label: "Machines" },
            { num: "24u", label: "Responstijd" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center py-4">
              <div className="font-extrabold text-3xl" style={{ color: "var(--orange)" }}>
                {num}
              </div>
              <div className="text-sm font-medium mt-2" style={{ color: "var(--text-muted)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
