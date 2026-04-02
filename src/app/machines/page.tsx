import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Machines | Trova Verhuur & Transport",
  description: "Ons volledige machinepark: minigravers en shovels van A-merken.",
};

const machines = [
  {
    id: "minigraver-1-7",
    name: "Minigraver 1.7T",
    brand: "Kubota",
    category: "Minigraver",
    weight: "1.700 kg",
    power: "11.6 kW",
    depth: "230 cm",
    width: "100 cm",
    reach: "360 cm",
    bucket: "0.04 m³",
    dailyRate: "€ 180,–",
    weeklyRate: "€ 750,–",
    description: "Ideaal voor werkzaamheden op kleine, moeilijk bereikbare locaties. Past door smalle toegangspoorten en is perfect voor werk in tuinen en binnenruimtes.",
    toepassingen: ["Tuinaanleg & herinrichting", "Rioleringswerk smalle ruimtes", "Sloopwerk binnenshuis", "Fundatie kleine bouwwerken"],
    tags: ["Compact", "Tuin", "Stedelijk"],
  },
  {
    id: "minigraver-3-5",
    name: "Minigraver 3.5T",
    brand: "Bobcat",
    category: "Minigraver",
    weight: "3.500 kg",
    power: "24.4 kW",
    depth: "320 cm",
    width: "160 cm",
    reach: "530 cm",
    bucket: "0.10 m³",
    dailyRate: "€ 240,–",
    weeklyRate: "€ 980,–",
    description: "Onze meest verhuurde machine. Veelzijdig, krachtig en compact. Geschikt voor vrijwel elk grondverzet project van kleine tot middelgrote omvang.",
    toepassingen: ["Grondwerk nieuwbouw & verbouw", "Riolering & leidingwerk", "Vijver & drainage aanleg", "Fundaties & kelderwerk"],
    tags: ["Meest verhuurd", "Veelzijdig"],
    featured: true,
  },
  {
    id: "minigraver-6t",
    name: "Minigraver 6T",
    brand: "Volvo",
    category: "Minigraver",
    weight: "6.000 kg",
    power: "40.5 kW",
    depth: "410 cm",
    width: "220 cm",
    reach: "660 cm",
    bucket: "0.22 m³",
    dailyRate: "€ 320,–",
    weeklyRate: "€ 1.280,–",
    description: "Voor zwaarder grondverzet en grotere diepten. Ideaal voor aannemers die meer vermogen nodig hebben zonder over te stappen op een volwaardige shovel.",
    toepassingen: ["Zwaar grondverzet", "Fundatiegraven", "Sloopwerkzaamheden", "Agrarisch grondwerk"],
    tags: ["Fundatie", "Zwaarder werk"],
  },
  {
    id: "shovel-13t",
    name: "Shovel 13T",
    brand: "Caterpillar",
    category: "Shovel",
    weight: "13.000 kg",
    power: "67.3 kW",
    depth: "510 cm",
    width: "260 cm",
    reach: "870 cm",
    bucket: "0.57 m³",
    dailyRate: "€ 480,–",
    weeklyRate: "€ 1.900,–",
    description: "De krachtpatser van ons machinepark. Voor grootschalige grondverzetprojecten, wegenbouw en zware infrastructuurwerken. Altijd beschikbaar met of zonder machinist.",
    toepassingen: ["Wegenbouw & infrastructuur", "Grootschalig grondverzet", "Industrieel sloopwerk", "Baggerwerkzaamheden"],
    tags: ["Zwaar", "Infrastructuur"],
  },
];

export default function MachinesPage() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      {/* Header */}
      <section
        className="py-20"
        style={{ background: "var(--white)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="label mb-4">Machinepark</div>
          <h1
            className="heading mb-5"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Onze <span style={{ color: "var(--orange)" }}>machines</span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-muted)" }}>
            A-merk grondverzet machines voor elk project — van minigraver tot shovel.
            Alle machines zijn goed onderhouden en direct beschikbaar.
          </p>
        </div>
      </section>

      {/* Machines list */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-6">
            {machines.map((m, i) => (
              <div
                key={m.id}
                id={m.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "var(--white)",
                  border: m.featured ? "2px solid var(--orange)" : "1px solid var(--border)",
                }}
              >
                {m.featured && (
                  <div
                    className="px-6 py-2 text-xs font-bold text-white text-center"
                    style={{ background: "var(--orange)" }}
                  >
                    Meest verhuurd
                  </div>
                )}
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left visual */}
                  <div
                    className="flex items-center justify-center p-8"
                    style={{
                      background: m.featured
                        ? "linear-gradient(135deg, #FFF4EE, #FFE8D6)"
                        : "var(--bg)",
                      borderRight: "1px solid var(--border)",
                    }}
                  >
                    <svg viewBox="0 0 260 180" className="w-full max-w-xs" fill="none">
                      <ellipse cx="130" cy="162" rx="100" ry="12" fill="rgba(0,0,0,0.05)" />
                      <rect x="0" y="148" width="260" height="32" fill={m.featured ? "rgba(232,96,10,0.06)" : "#ECEAE6"} rx="4" />
                      <rect x="25" y="118" width="110" height="32" rx="16" fill={m.featured ? "#F5C9A8" : "#D0CAC2"} />
                      <rect x="30" y="122" width="100" height="24" rx="12" fill={m.featured ? "#EDBA92" : "#C2BAB0"} />
                      {[38, 56, 74, 94, 112].map((x, j) => (
                        <rect key={j} x={x} y="122" width="12" height="24" rx="3" fill={m.featured ? "#E0A870" : "#B4ACA4"} />
                      ))}
                      <rect x="38" y="80" width="94" height="42" rx="7" fill={m.featured ? "#E8BF9A" : "#CACED4"} />
                      <rect x="52" y="90" width="66" height="26" rx="4" fill={m.featured ? "#D4AB82" : "#BEB6AC"} />
                      <rect x="92" y="52" width="48" height="36" rx="5" fill={m.featured ? "#CDAD85" : "#B8B0A8"} />
                      <rect x="98" y="60" width="16" height="12" rx="2" fill={m.featured ? "rgba(232,96,10,0.35)" : "rgba(0,0,0,0.1)"} />
                      <rect x="118" y="60" width="15" height="12" rx="2" fill={m.featured ? "rgba(232,96,10,0.25)" : "rgba(0,0,0,0.07)"} />
                      <rect x="46" y="48" width="9" height="64" rx="4.5" fill={m.featured ? "#BEA880" : "#B0A8A0"} transform="rotate(-22 46 48)" />
                      <rect x="86" y="28" width="8" height="52" rx="4" fill={m.featured ? "#B89C74" : "#A8A09A"} transform="rotate(14 86 28)" />
                      <path d="M106 116 L126 112 L131 126 L114 135 L100 130 Z" fill={m.featured ? "var(--orange)" : "#8A8480"} />
                      {[108, 116, 124].map((x, j) => (
                        <rect key={j} x={x} y="133" width="5" height="7" rx="1.5" fill={m.featured ? "var(--orange-dark)" : "#767070"} />
                      ))}
                    </svg>
                  </div>

                  {/* Middle: info */}
                  <div className="p-8">
                    <div className="text-xs font-semibold mb-1" style={{ color: "var(--text-dim)" }}>
                      {m.brand} — {m.category}
                    </div>
                    <h2 className="font-extrabold text-2xl mb-3" style={{ color: "var(--text)" }}>
                      {m.name}
                    </h2>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                      {m.description}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {[
                        { label: "Gewicht", value: m.weight },
                        { label: "Vermogen", value: m.power },
                        { label: "Graafdiepte", value: m.depth },
                        { label: "Breedte", value: m.width },
                        { label: "Bereik", value: m.reach },
                        { label: "Bak", value: m.bucket },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="rounded-lg p-2.5 text-center"
                          style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                        >
                          <div className="text-xs" style={{ color: "var(--text-dim)" }}>{label}</div>
                          <div className="text-xs font-bold mt-0.5" style={{ color: "var(--text-soft)" }}>
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{
                            background: m.featured ? "var(--orange-bg)" : "var(--surface-2)",
                            color: m.featured ? "var(--orange)" : "var(--text-muted)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: price + CTA */}
                  <div
                    className="p-8 flex flex-col justify-between"
                    style={{ borderLeft: "1px solid var(--border)" }}
                  >
                    <div>
                      <div className="text-xs font-semibold mb-1" style={{ color: "var(--text-dim)" }}>
                        Dagtarief
                      </div>
                      <div className="font-extrabold text-3xl mb-1" style={{ color: "var(--orange)" }}>
                        {m.dailyRate}
                      </div>
                      <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {m.weeklyRate} / week
                      </div>

                      <div className="mt-6">
                        <div className="text-xs font-semibold mb-3" style={{ color: "var(--text-soft)" }}>
                          Toepassingen
                        </div>
                        <div className="space-y-1.5">
                          {m.toepassingen.map((t) => (
                            <div key={t} className="flex items-center gap-2 text-xs">
                              <CheckCircle size={12} style={{ color: "var(--orange)", flexShrink: 0 }} />
                              <span style={{ color: "var(--text-muted)" }}>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="btn btn-primary mt-6 justify-center"
                    >
                      Huur deze machine <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-8" style={{ color: "var(--text-dim)" }}>
            Tarieven exclusief BTW. —{" "}
            <Link href="/contact" style={{ color: "var(--orange)" }}>
              Vraag een vrijblijvende offerte aan
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
