import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Ons | Trova Verhuur & Transport",
  description: "Meer dan 10 jaar specialist in grondverzet machine verhuur.",
};

const milestones = [
  { year: "2013", title: "Oprichting", text: "Trovaverhuur opgericht met één minigraver en een duidelijke missie: kwaliteitsmachines bereikbaar voor iedereen." },
  { year: "2016", title: "Uitbreiding", text: "Machinepark uitgebreid naar 5 machines. Start met certificering van onze eerste machinisten." },
  { year: "2019", title: "Transport", text: "Lancering eigen transportafdeling voor levering door heel Nederland." },
  { year: "2024", title: "Vandaag", text: "Meer dan 500 tevreden klanten, 10+ machines en een team van gecertificeerde specialisten." },
];

export default function OverOnsPage() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      {/* Header */}
      <section
        className="py-20"
        style={{ background: "var(--white)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="label mb-4">Over ons</div>
          <h1
            className="heading mb-5"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Uw partner in<br />
            <span style={{ color: "var(--orange)" }}>grondverzet</span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-muted)" }}>
            Trova Verhuur & Transport is opgericht vanuit passie voor vakmanschap.
            Wij zijn meer dan een verhuurder — wij zijn uw partner op de bouwplaats.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-lg" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="heading mb-5" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}>
                Vakmanschap staat voorop
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                Met meer dan 10 jaar ervaring weten wij wat er nodig is op een bouwlocatie.
                Onze machines zijn van merken als Caterpillar, Volvo, Bobcat en Kubota —
                regelmatig gekeurd en volledig verzekerd.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                Van kleine tuinrenovatie tot grootschalige infraprojecten — wij leveren
                altijd de juiste machine voor de juiste prijs.
              </p>
              <div className="space-y-3">
                {[
                  "A-merk machines, altijd goed onderhouden",
                  "VCA-gecertificeerde machinisten beschikbaar",
                  "Levering door heel Nederland",
                  "Persoonlijk contact en eerlijk advies",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle size={15} style={{ color: "var(--orange)", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-soft)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "10+", label: "Jaar ervaring" },
                { num: "500+", label: "Tevreden klanten" },
                { num: "10+", label: "Machines" },
                { num: "24u", label: "Responstijd" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-8 text-center"
                  style={{ background: "var(--white)", border: "1px solid var(--border)" }}
                >
                  <div className="font-extrabold text-4xl" style={{ color: "var(--orange)" }}>
                    {num}
                  </div>
                  <div className="text-sm font-medium mt-2" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-lg" style={{ background: "var(--white)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="label mb-4">Onze geschiedenis</div>
          <h2 className="heading mb-12" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}>
            Hoe wij zijn gegroeid
          </h2>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="grid sm:grid-cols-5 gap-0 rounded-xl overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
              >
                <div
                  className="sm:col-span-1 flex items-center justify-center p-6"
                  style={{ background: i % 2 === 0 ? "var(--orange)" : "var(--bg)" }}
                >
                  <span
                    className="font-extrabold text-2xl"
                    style={{ color: i % 2 === 0 ? "white" : "var(--orange)" }}
                  >
                    {m.year}
                  </span>
                </div>
                <div className="sm:col-span-4 p-6" style={{ background: "var(--bg)" }}>
                  <h3 className="font-bold text-base mb-1.5" style={{ color: "var(--text)" }}>
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "var(--orange)" }}>
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-extrabold text-3xl text-white mb-4">
            Klaar om samen te werken?
          </h2>
          <p className="text-white/75 mb-8">
            Vraag vandaag een vrijblijvende offerte aan.
          </p>
          <Link
            href="/contact"
            className="btn inline-flex items-center gap-2 font-semibold"
            style={{ background: "white", color: "var(--orange)" }}
          >
            Offerte aanvragen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
