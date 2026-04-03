import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Equipment } from "@/types/equipment";

interface EquipmentCardProps {
  equipment: Equipment;
  priority?: boolean;
}

function formatPrice(amount: number): string {
  return `€\u00a0${amount.toLocaleString("nl-NL")},\u2013`;
}

export default function EquipmentCard({
  equipment,
  priority = false,
}: EquipmentCardProps) {
  const previewSpecs = equipment.specs.slice(0, 3);

  return (
    <div
      className="group rounded-2xl border border-[#E8EBE9] overflow-hidden bg-white flex flex-col transition-all duration-300"
      style={{
        borderColor: equipment.featured ? "#F3812A" : "#E8EBE9",
        borderWidth: equipment.featured ? "2px" : "1px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 40px rgba(243,129,42,0.15), 0 0 0 1px rgba(243,129,42,0.2)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <Link href={`/machines/${equipment.id}`} className="block relative aspect-[16/10] overflow-hidden bg-[#f7f9f8]">
        <Image
          src={equipment.image}
          alt={equipment.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ background: "#0f1d16", color: "white" }}
          >
            {equipment.brand}
          </span>
          {equipment.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{
                background: tag === "Meest verhuurd" || tag === "Nieuw" || tag === "Elektrisch"
                  ? "#F3812A"
                  : "rgba(0,0,0,0.55)",
                color: "white",
                backdropFilter: "blur(4px)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <span
          className="text-[10px] font-bold uppercase tracking-widest mb-2"
          style={{ color: "#F3812A" }}
        >
          {equipment.category}
        </span>

        {/* Name */}
        <Link
          href={`/machines/${equipment.id}`}
          className="font-extrabold text-lg leading-tight mb-2 transition-colors duration-200"
          style={{ color: "#111", letterSpacing: "-0.02em" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F3812A")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#111")}
        >
          {equipment.name}
        </Link>

        {/* Short description */}
        <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "#7a8882" }}>
          {equipment.shortDescription}
        </p>

        {/* Key specs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {previewSpecs.map((spec) => (
            <div
              key={spec.label}
              className="rounded-lg p-2.5 text-center"
              style={{ background: "#f7f9f8", border: "1px solid #E8EBE9" }}
            >
              <div className="text-[9px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#a8b4ae" }}>
                {spec.label}
              </div>
              <div
                className="text-xs font-bold"
                style={{ color: spec.highlight ? "#F3812A" : "#111" }}
              >
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Toepassingen preview */}
        <ul className="space-y-1 mb-5">
          {equipment.toepassingen.slice(0, 2).map((t) => (
            <li key={t} className="flex items-center gap-2 text-xs" style={{ color: "#7a8882" }}>
              <CheckCircle size={11} className="shrink-0" style={{ color: "#2B6E4F" }} />
              {t}
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price + CTA */}
        <div
          className="flex items-center justify-between pt-4 mt-auto"
          style={{ borderTop: "1px solid #E8EBE9" }}
        >
          <div>
            <div className="text-xl font-extrabold" style={{ color: "#F3812A", letterSpacing: "-0.03em" }}>
              {formatPrice(equipment.dailyRate)}
            </div>
            <div className="text-[10px] font-medium" style={{ color: "#a8b4ae" }}>
              per dag · excl. BTW
            </div>
          </div>
          <Link
            href={`/contact?machine=${equipment.id}`}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide px-4 py-2.5 rounded transition-all duration-200"
            style={{ background: "#F3812A", color: "white" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#d4701f")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#F3812A")}
          >
            Offerte <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
