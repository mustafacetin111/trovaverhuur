"use client";

import Link from "next/link";
import { Shovel, Users, Truck, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Shovel,
    title: "Machine verhuur",
    description:
      "A-merk shovels en minigravers voor elk project. Van compacte minigravers tot grote shovels — altijd goed onderhouden en klaar voor gebruik.",
    features: ["Dag- en weektarieven", "Alle gewichtsklassen", "Inclusief keuring"],
    href: "/machines",
    highlight: false,
  },
  {
    icon: Users,
    title: "Met machinist",
    description:
      "Huur uw machine inclusief een ervaren, VCA-gecertificeerde machinist voor veilig en efficiënt werken op elke bouwlocatie.",
    features: ["VCA-gecertificeerde operators", "Ruime grondverzet ervaring", "Flexibel inzetbaar"],
    href: "/contact",
    highlight: true,
  },
  {
    icon: Truck,
    title: "Transport & levering",
    description:
      "Wij bezorgen de machine bij u op locatie en halen deze na afloop op. Snel, betrouwbaar en op het afgesproken tijdstip.",
    features: ["Heel Nederland", "Eigen transport", "Flexibele planning"],
    href: "/contact",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section className="section-lg" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="label justify-center mb-5">Onze diensten</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
            Alles voor uw bouwproject
          </h2>
          <p className="mt-5 text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Van machinelevering tot vakkundige operator — wij ontzorgen u volledig.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-10 flex flex-col transition-all duration-250"
                style={{
                  background: s.highlight ? "var(--navy)" : "var(--white)",
                  border: s.highlight ? "none" : "1px solid var(--border)",
                  boxShadow: s.highlight ? "0 12px 40px rgba(27,52,100,0.3)" : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-8"
                  style={{
                    background: s.highlight ? "rgba(255,255,255,0.12)" : "var(--orange-bg)",
                  }}
                >
                  <Icon size={22} style={{ color: s.highlight ? "white" : "var(--orange)" }} />
                </div>

                <h3
                  className="font-bold text-xl mb-4"
                  style={{ color: s.highlight ? "white" : "var(--text)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-8 flex-1"
                  style={{ color: s.highlight ? "rgba(255,255,255,0.8)" : "var(--text-muted)" }}
                >
                  {s.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle
                        size={14}
                        style={{ color: s.highlight ? "rgba(255,255,255,0.8)" : "var(--orange)", flexShrink: 0 }}
                      />
                      <span style={{ color: s.highlight ? "rgba(255,255,255,0.85)" : "var(--text-soft)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold mt-auto"
                  style={{ color: s.highlight ? "white" : "var(--orange)" }}
                >
                  Meer informatie <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
