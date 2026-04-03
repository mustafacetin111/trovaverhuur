import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { getAllEquipment } from "@/services/equipmentService";
import EquipmentGrid from "@/components/equipment/EquipmentGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Machinepark | Trova Verhuur & Transport",
  description:
    "Huur A-merk grondverzetmachines: minigravers, shovels, wielladers en aanhangers. Directe beschikbaarheid, scherpe tarieven. Trovaverhuur Amsterdam.",
  keywords:
    "minigraver verhuur, shovel verhuur, wiellader verhuur, grondverzet machine huren, Amsterdam",
};

export default async function MachinesPage() {
  const equipment = await getAllEquipment();

  const stats = [
    { num: `${equipment.length}`, label: "Machines beschikbaar" },
    { num: "A-merk", label: "Kubota · Bobcat · Volvo · CAT · Giant" },
    { num: "24u", label: "Responstijd offerte" },
  ];

  return (
    <>
      <Header />
      <main style={{ paddingTop: "4rem" }}>

        {/* ── Page hero ───────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-20 lg:py-28"
          style={{ background: "linear-gradient(135deg, #0a1510 0%, #0f1d16 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 80% at 110% 50%, rgba(243,129,42,0.1) 0%, transparent 60%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-medium mb-8">
              <Link
                href="/"
                className="transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#F3812A")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")
                }
              >
                Home
              </Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Machines</span>
            </nav>

            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(243,129,42,0.15)",
                color: "#F3812A",
                border: "1px solid rgba(243,129,42,0.3)",
              }}
            >
              Ons machinepark
            </span>

            <h1
              className="font-extrabold text-white mb-4"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              Onze{" "}
              <span style={{ color: "#F3812A" }}>machines</span>
            </h1>

            <div className="w-14 h-1 mb-6" style={{ background: "#F3812A" }} />

            <p
              className="text-base leading-relaxed max-w-xl mb-10"
              style={{ color: "rgba(255,255,255,0.58)" }}
            >
              A-merk grondverzetmachines voor elk project — van compacte minigraver
              tot zware shovel. Alle machines zijn goed onderhouden en direct beschikbaar.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="font-extrabold text-2xl"
                    style={{ color: "#F3812A", letterSpacing: "-0.03em" }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="text-xs mt-0.5 uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "#F3812A" }} />
        </section>

        {/* ── Equipment grid ───────────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EquipmentGrid equipment={equipment} />
          </div>
        </section>

        {/* ── CTA section ─────────────────────────────────────────────────── */}
        <section className="py-16" style={{ background: "#f7f9f8" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl overflow-hidden grid lg:grid-cols-2"
              style={{ background: "linear-gradient(135deg, #0f1d16, #1a3324)" }}
            >
              <div className="p-10 lg:p-14">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] mb-4 block"
                  style={{ color: "#F3812A" }}
                >
                  Specifieke wensen?
                </span>
                <h2
                  className="font-extrabold text-white mb-4"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.03em" }}
                >
                  Machine niet gevonden?
                  <br />
                  <span style={{ color: "#F3812A" }}>Neem contact op.</span>
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Wij hebben een uitgebreid netwerk van partnermachineparken.
                  Vrijwel elke machine is bespreekbaar — ook voor langdurige verhuur.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Offerte aanvragen
                  </Link>
                  <a
                    href="tel:0203086849"
                    className="flex items-center gap-2 px-5 py-3 rounded font-bold text-sm uppercase tracking-wide transition-all duration-200"
                    style={{ border: "2px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#F3812A";
                      (e.currentTarget as HTMLElement).style.color = "#F3812A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                    }}
                  >
                    <Phone size={14} />
                    020-3086849
                  </a>
                </div>
              </div>

              <div
                className="p-10 lg:p-14 flex flex-col justify-center gap-4"
                style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}
              >
                {[
                  "Geen minimale huurperiode",
                  "Transport & bezorging mogelijk",
                  "VCA-gecertificeerde machinisten",
                  "Offerte binnen 24 uur",
                  "Flexibele dag-, week- en maandtarieven",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold"
                      style={{ background: "#F3812A", color: "white" }}
                    >
                      ✓
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
