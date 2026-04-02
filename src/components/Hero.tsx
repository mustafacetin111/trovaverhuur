"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [machineType, setMachineType] = useState("");
  const [periode, setPeriode] = useState("");

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "4.5rem" }}>

      {/* Achtergrond */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 110% 55%, rgba(232,96,10,0.13) 0%, transparent 65%)",
        }}
      />

      {/* Inhoud */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 relative">
        <div className="py-20 lg:py-28" style={{ maxWidth: "52rem" }}>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold mb-10 animate-fade-up animate-delay-1"
            style={{
              background: "rgba(232,96,10,0.15)",
              color: "var(--orange)",
              border: "1px solid rgba(232,96,10,0.3)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "var(--orange)" }}
            />
            A-merk machines beschikbaar
          </div>

          {/* Koptekst */}
          <h1
            className="heading mb-7 animate-fade-up animate-delay-2"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              color: "white",
              lineHeight: 1.05,
            }}
          >
            Grondverzet{" "}
            <span style={{ color: "var(--orange)" }}>machines</span>{" "}
            huren
          </h1>

          <p
            className="text-lg mb-12 leading-relaxed animate-fade-up animate-delay-3"
            style={{ color: "rgba(255,255,255,0.62)", maxWidth: "34rem" }}
          >
            Shovels en minigravers van topmerken voor scherpe tarieven.
            Optioneel met gecertificeerde machinist. Snel geleverd, direct inzetbaar.
          </p>

          {/* Zoekbalk – Loxam-stijl */}
          <div
            className="flex flex-col sm:flex-row rounded-xl overflow-hidden mb-10 animate-fade-up animate-delay-4"
            style={{
              background: "white",
              boxShadow: "0 16px 48px rgba(0,0,0,0.28)",
            }}
          >
            <select
              value={machineType}
              onChange={(e) => setMachineType(e.target.value)}
              className="flex-1 px-5 py-4 text-sm font-medium"
              style={{
                background: "transparent",
                color: machineType ? "var(--text)" : "var(--text-muted)",
                border: "none",
                borderRight: "1.5px solid var(--border)",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="" disabled>Machine type...</option>
              <option value="minigraver-1.7t">Minigraver 1.7T</option>
              <option value="minigraver-3.5t">Minigraver 3.5T</option>
              <option value="minigraver-6t">Minigraver 6T</option>
              <option value="shovel-13t">Shovel 13T</option>
            </select>

            <select
              value={periode}
              onChange={(e) => setPeriode(e.target.value)}
              className="flex-1 px-5 py-4 text-sm font-medium"
              style={{
                background: "transparent",
                color: periode ? "var(--text)" : "var(--text-muted)",
                border: "none",
                outline: "none",
                cursor: "pointer",
                borderTop: "1.5px solid var(--border)",
              }}
            >
              <option value="" disabled>Huurperiode...</option>
              <option value="1-dag">1 dag</option>
              <option value="2-3-dagen">2–3 dagen</option>
              <option value="1-week">1 week</option>
              <option value="2-weken">2 weken</option>
              <option value="1-maand">1 maand of langer</option>
            </select>

            <Link
              href="/contact"
              className="btn btn-primary justify-center"
              style={{
                borderRadius: "0 8px 8px 0",
                padding: "0 2rem",
                whiteSpace: "nowrap",
                borderTop: "none",
              }}
            >
              Zoek machine <ArrowRight size={16} />
            </Link>
          </div>

          {/* Kenmerken */}
          <ul className="flex flex-wrap gap-x-8 gap-y-3 animate-fade-up animate-delay-5">
            {[
              "Caterpillar, Volvo, Kubota & Bobcat",
              "Met of zonder machinist",
              "Levering door heel Nederland",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle size={14} style={{ color: "var(--orange)", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.68)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Statistieken balk */}
      <div
        style={{
          background: "rgba(0,0,0,0.22)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "3px solid var(--orange)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-3 py-5">
            {[
              { num: "10+", label: "Jaar ervaring" },
              { num: "500+", label: "Tevreden klanten" },
              { num: "24u", label: "Responstijd" },
            ].map(({ num, label }, i) => (
              <div
                key={label}
                className="text-center px-4 py-1"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div className="font-extrabold text-2xl" style={{ color: "var(--orange)" }}>
                  {num}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.48)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
