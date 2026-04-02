"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const machines = [
  {
    id: "minigraver-1-7",
    name: "Minigraver 1.7T",
    brand: "Kubota",
    weight: "1.700 kg",
    depth: "230 cm",
    dailyRate: "vanaf €180",
    tags: ["Compact", "Tuin", "Stedelijk"],
    popular: false,
  },
  {
    id: "minigraver-3-5",
    name: "Minigraver 3.5T",
    brand: "Bobcat",
    weight: "3.500 kg",
    depth: "320 cm",
    dailyRate: "vanaf €240",
    tags: ["Meest verhuurd"],
    popular: true,
  },
  {
    id: "minigraver-6t",
    name: "Minigraver 6T",
    brand: "Volvo",
    weight: "6.000 kg",
    depth: "410 cm",
    dailyRate: "vanaf €320",
    tags: ["Fundatie", "Zwaarder werk"],
    popular: false,
  },
  {
    id: "shovel-13t",
    name: "Shovel 13T",
    brand: "Caterpillar",
    weight: "13.000 kg",
    depth: "510 cm",
    dailyRate: "vanaf €480",
    tags: ["Infrastractuur", "Wegenbouw"],
    popular: false,
  },
];

export default function Machines() {
  return (
    <section className="section-lg" style={{ background: "var(--white)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="label mb-5">Machinepark</div>
            <h2 className="heading" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
              Onze machines
            </h2>
          </div>
          <Link href="/machines" className="btn btn-secondary text-sm">
            Alles bekijken <ChevronRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {machines.map((m) => (
            <Link
              key={m.id}
              href={`/machines#${m.id}`}
              className="group rounded-2xl overflow-hidden transition-all duration-250 flex flex-col"
              style={{
                background: "var(--bg)",
                border: m.popular ? "2px solid var(--orange)" : "1px solid var(--border)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Popular badge */}
              {m.popular && (
                <div
                  className="px-4 py-1.5 text-xs font-bold text-white text-center"
                  style={{ background: "var(--orange)" }}
                >
                  Meest verhuurd
                </div>
              )}

              {/* Illustration */}
              <div
                className="flex items-center justify-center"
                style={{
                  height: "140px",
                  background: m.popular
                    ? "linear-gradient(135deg, #FFF4EE, #FFE8D6)"
                    : "var(--surface-2)",
                }}
              >
                <svg viewBox="0 0 220 140" className="w-4/5" fill="none">
                  <rect x="0" y="110" width="220" height="30" fill={m.popular ? "rgba(232,96,10,0.08)" : "rgba(0,0,0,0.04)"} rx="3" />
                  <rect x="20" y="88" width="100" height="26" rx="14" fill={m.popular ? "#F5C9A8" : "#D6D0C8"} />
                  <rect x="25" y="92" width="90" height="18" rx="9" fill={m.popular ? "#EDBA92" : "#C8C2BA"} />
                  {[32, 52, 72, 92, 112].map((x, i) => (
                    <rect key={i} x={x} y="92" width="10" height="18" rx="3" fill={m.popular ? "#E0A870" : "#B8B0A6"} />
                  ))}
                  <rect x="36" y="62" width="84" height="32" rx="6" fill={m.popular ? "#E8BF9A" : "#D0CAC2"} />
                  <rect x="80" y="42" width="44" height="28" rx="4" fill={m.popular ? "#D4AB82" : "#C0B8B0"} />
                  <rect x="85" y="48" width="14" height="10" rx="2" fill={m.popular ? "rgba(232,96,10,0.4)" : "rgba(0,0,0,0.12)"} />
                  <rect x="103" y="48" width="14" height="10" rx="2" fill={m.popular ? "rgba(232,96,10,0.3)" : "rgba(0,0,0,0.08)"} />
                  <rect x="46" y="42" width="8" height="52" rx="4" fill={m.popular ? "#C8A882" : "#B8B0A8"} transform="rotate(-22 46 42)" />
                  <rect x="78" y="24" width="7" height="44" rx="3.5" fill={m.popular ? "#C0A07A" : "#ACA69E"} transform="rotate(14 78 24)" />
                  <path d={`M96 98 L112 96 L116 105 L106 111 L94 108 Z`} fill={m.popular ? "var(--orange)" : "#A0968E"} />
                  {[97, 104, 110].map((x, i) => (
                    <rect key={i} x={x} y="110" width="4" height="6" rx="1.5" fill={m.popular ? "var(--orange-dark)" : "#8A8480"} />
                  ))}
                </svg>
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-semibold mb-2" style={{ color: "var(--text-dim)" }}>
                  {m.brand}
                </div>
                <h3 className="font-bold text-base mb-4" style={{ color: "var(--text)" }}>
                  {m.name}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Gewicht", value: m.weight },
                    { label: "Graafdiepte", value: m.depth },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-lg p-3 text-center"
                      style={{ background: "var(--white)", border: "1px solid var(--border)" }}
                    >
                      <div className="text-xs" style={{ color: "var(--text-dim)" }}>{label}</div>
                      <div className="text-sm font-semibold mt-0.5" style={{ color: "var(--text-soft)" }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        background: m.popular ? "var(--orange-bg)" : "var(--surface-2)",
                        color: m.popular ? "var(--orange)" : "var(--text-muted)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="font-bold text-base" style={{ color: "var(--orange)" }}>
                    {m.dailyRate}
                  </div>
                  <span
                    className="text-xs font-semibold flex items-center gap-1"
                    style={{ color: "var(--orange)" }}
                  >
                    Offerte <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-sm mt-12" style={{ color: "var(--text-dim)" }}>
          Tarieven exclusief BTW. —{" "}
          <Link href="/contact" style={{ color: "var(--orange)" }}>
            Vraag een vrijblijvende offerte aan
          </Link>
        </p>
      </div>
    </section>
  );
}
