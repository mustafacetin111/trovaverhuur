import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, ArrowRight } from "lucide-react";
import {
  getAllEquipmentIds,
  getEquipmentById,
  getRelatedEquipment,
} from "@/services/equipmentService";
import EquipmentCard from "@/components/equipment/EquipmentCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Next.js 16: params is async
interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = await getAllEquipmentIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata(
  { params }: PageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const equipment = await getEquipmentById(id);
  if (!equipment) return {};
  return {
    title:       equipment.seoTitle       ?? `${equipment.name} Verhuur | Trova Verhuur`,
    description: equipment.seoDescription ?? equipment.shortDescription,
    openGraph: {
      title:       equipment.name,
      description: equipment.shortDescription,
      images:      [equipment.image],
    },
  };
}

function formatPrice(amount: number): string {
  return `€\u00a0${amount.toLocaleString("nl-NL")},\u2013`;
}

export default async function EquipmentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const equipment = await getEquipmentById(id);
  if (!equipment) notFound();

  const related = await getRelatedEquipment(equipment, 3);

  return (
    <>
      <Header />
      <main style={{ paddingTop: "4rem" }}>

        {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
        <nav
          className="py-3.5"
          style={{ background: "#f7f9f8", borderBottom: "1px solid #E8EBE9" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-medium">
              <Link
                href="/"
                className="transition-colors duration-150"
                style={{ color: "#7a8882" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#F3812A")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#7a8882")
                }
              >
                Home
              </Link>
              <span style={{ color: "#E8EBE9" }}>/</span>
              <Link
                href="/machines"
                className="transition-colors duration-150"
                style={{ color: "#7a8882" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#F3812A")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#7a8882")
                }
              >
                Machines
              </Link>
              <span style={{ color: "#E8EBE9" }}>/</span>
              <span className="font-semibold" style={{ color: "#111" }}>
                {equipment.name}
              </span>
            </div>
          </div>
        </nav>

        {/* ── Detail hero ──────────────────────────────────────────────────── */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">

              {/* ── Left: image + info (2 cols) ─────────────────────────── */}
              <div className="lg:col-span-2">
                {/* Back link */}
                <Link
                  href="/machines"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mb-6 transition-colors duration-150"
                  style={{ color: "#7a8882" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#F3812A")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#7a8882")
                  }
                >
                  <ArrowLeft size={13} />
                  Terug naar machines
                </Link>

                {/* Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                    style={{ background: "#0f1d16", color: "white" }}
                  >
                    {equipment.brand}
                  </span>
                  <span
                    className="text-[10px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full"
                    style={{ background: "#f7f9f8", border: "1px solid #E8EBE9", color: "#7a8882" }}
                  >
                    {equipment.category}
                  </span>
                  {equipment.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                      style={{
                        background:
                          tag === "Meest verhuurd" || tag === "Nieuw" || tag === "Elektrisch"
                            ? "#F3812A"
                            : "#f0f4f2",
                        color:
                          tag === "Meest verhuurd" || tag === "Nieuw" || tag === "Elektrisch"
                            ? "white"
                            : "#7a8882",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h1
                  className="font-extrabold mb-4"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    color: "#111",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.05,
                  }}
                >
                  {equipment.name}
                </h1>
                <div className="w-14 h-1 mb-8" style={{ background: "#F3812A" }} />

                {/* Main image */}
                <div
                  className="relative rounded-2xl overflow-hidden mb-8"
                  style={{
                    aspectRatio: "16/10",
                    background: "#f7f9f8",
                    border: "1px solid #E8EBE9",
                  }}
                >
                  <Image
                    src={equipment.image}
                    alt={equipment.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <p
                  className="text-base leading-relaxed mb-10"
                  style={{ color: "#7a8882" }}
                >
                  {equipment.description}
                </p>

                {/* Specs table */}
                <div className="mb-10">
                  <h2
                    className="font-extrabold text-lg mb-4"
                    style={{ color: "#111", letterSpacing: "-0.02em" }}
                  >
                    Technische specificaties
                  </h2>
                  <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E8EBE9" }}>
                    {equipment.specs.map((spec, i) => (
                      <div
                        key={spec.label}
                        className="grid grid-cols-2 px-5 py-3.5"
                        style={{ background: i % 2 === 0 ? "white" : "#f7f9f8" }}
                      >
                        <span className="text-sm font-medium" style={{ color: "#7a8882" }}>
                          {spec.label}
                        </span>
                        <span
                          className="text-sm font-bold"
                          style={{ color: spec.highlight ? "#F3812A" : "#111" }}
                        >
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Toepassingen */}
                <div>
                  <h2
                    className="font-extrabold text-lg mb-4"
                    style={{ color: "#111", letterSpacing: "-0.02em" }}
                  >
                    Toepassingen
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {equipment.toepassingen.map((t) => (
                      <div key={t} className="flex items-center gap-3 text-sm">
                        <CheckCircle
                          size={15}
                          className="shrink-0"
                          style={{ color: "#2B6E4F" }}
                        />
                        <span style={{ color: "#7a8882" }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right: sticky price card ─────────────────────────────── */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{ border: "2px solid #F3812A" }}
                  >
                    {/* Price header */}
                    <div className="px-6 py-6" style={{ background: "#F3812A" }}>
                      <div
                        className="text-[10px] font-bold uppercase tracking-widest mb-1"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        Dagtarief (excl. BTW)
                      </div>
                      <div
                        className="font-extrabold text-4xl text-white"
                        style={{ letterSpacing: "-0.04em" }}
                      >
                        {formatPrice(equipment.dailyRate)}
                      </div>
                    </div>

                    <div className="bg-white p-6 space-y-4">
                      {/* Weekly rate */}
                      <div
                        className="flex items-center justify-between py-3"
                        style={{ borderBottom: "1px solid #E8EBE9" }}
                      >
                        <span className="text-sm" style={{ color: "#7a8882" }}>
                          Weektarief
                        </span>
                        <span className="font-bold text-sm" style={{ color: "#111" }}>
                          {formatPrice(equipment.weeklyRate)}
                        </span>
                      </div>

                      {/* Availability */}
                      <div className="flex items-center gap-2 text-sm pb-1">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ background: "#22c55e" }}
                        />
                        <span style={{ color: "#7a8882" }}>Direct beschikbaar</span>
                      </div>

                      {/* CTA buttons */}
                      <Link
                        href={`/contact?machine=${equipment.id}`}
                        className="btn-primary w-full text-center block"
                      >
                        Offerte aanvragen
                      </Link>

                      <a
                        href="tel:0203086849"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold text-sm uppercase tracking-wide transition-all duration-200"
                        style={{
                          border: "2px solid #2B6E4F",
                          color: "#2B6E4F",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#2B6E4F";
                          (e.currentTarget as HTMLElement).style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "#2B6E4F";
                        }}
                      >
                        <Phone size={14} />
                        020-3086849
                      </a>

                      {/* Trust signals */}
                      <div className="pt-2 space-y-2.5">
                        {[
                          "Geen minimale huurperiode",
                          "Transport mogelijk",
                          "VCA machinist beschikbaar",
                        ].map((t) => (
                          <div
                            key={t}
                            className="flex items-center gap-2 text-xs"
                            style={{ color: "#7a8882" }}
                          >
                            <CheckCircle
                              size={12}
                              className="shrink-0"
                              style={{ color: "#2B6E4F" }}
                            />
                            {t}
                          </div>
                        ))}
                      </div>

                      {/* Pricing note */}
                      <p
                        className="text-[10px] text-center pt-2"
                        style={{ color: "#a8b4ae" }}
                      >
                        Tarieven exclusief BTW en transportkosten
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related equipment ────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="py-16" style={{ background: "#f7f9f8" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2
                  className="font-extrabold text-2xl"
                  style={{ color: "#111", letterSpacing: "-0.03em" }}
                >
                  Gerelateerde machines
                </h2>
                <Link
                  href="/machines"
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-150"
                  style={{ color: "#F3812A" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#d4701f")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#F3812A")
                  }
                >
                  Alles bekijken <ArrowRight size={13} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((eq) => (
                  <EquipmentCard key={eq.id} equipment={eq} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
