"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Equipment, EquipmentCategory, FilterState } from "@/types/equipment";
import CategoryFilter from "./CategoryFilter";
import EquipmentCard from "./EquipmentCard";

interface EquipmentGridProps {
  equipment: Equipment[];
  initialCategory?: EquipmentCategory | "Alle";
}

export default function EquipmentGrid({
  equipment,
  initialCategory = "Alle",
}: EquipmentGridProps) {
  const [filter, setFilter] = useState<FilterState>({
    category: initialCategory,
    sortBy: "default",
  });

  const categories = useMemo(() => {
    const cats = [
      "Alle",
      ...Array.from(new Set(equipment.map((e) => e.category))),
    ] as Array<EquipmentCategory | "Alle">;

    return cats.map((name) => ({
      name,
      count:
        name === "Alle"
          ? equipment.length
          : equipment.filter((e) => e.category === name).length,
    }));
  }, [equipment]);

  const filtered = useMemo(() => {
    let result =
      filter.category === "Alle"
        ? equipment
        : equipment.filter((e) => e.category === filter.category);

    if (filter.sortBy === "price-asc")  result = [...result].sort((a, b) => a.dailyRate - b.dailyRate);
    if (filter.sortBy === "price-desc") result = [...result].sort((a, b) => b.dailyRate - a.dailyRate);
    if (filter.sortBy === "name")       result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [equipment, filter]);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <CategoryFilter
          categories={categories}
          active={filter.category}
          onChange={(cat) => setFilter((f) => ({ ...f, category: cat }))}
        />

        {/* Sort */}
        <select
          value={filter.sortBy}
          onChange={(e) =>
            setFilter((f) => ({ ...f, sortBy: e.target.value as FilterState["sortBy"] }))
          }
          className="text-sm font-medium rounded-lg px-3 py-2 border shrink-0"
          style={{
            border: "1.5px solid #E8EBE9",
            color: "#7a8882",
            background: "white",
            outline: "none",
          }}
        >
          <option value="default">Standaard volgorde</option>
          <option value="price-asc">Prijs: laag → hoog</option>
          <option value="price-desc">Prijs: hoog → laag</option>
          <option value="name">Naam A–Z</option>
        </select>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="font-bold text-xl mb-2" style={{ color: "#111" }}>
            Geen machines gevonden
          </h3>
          <p className="text-sm" style={{ color: "#7a8882" }}>
            Probeer een andere categorie of neem contact op voor maatwerk.
          </p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((eq, i) => (
          <EquipmentCard key={eq.id} equipment={eq} priority={i < 3} />
        ))}
      </div>

      {/* Footnote */}
      <p className="text-center text-xs mt-10" style={{ color: "#a8b4ae" }}>
        Alle tarieven zijn exclusief BTW en transport. —{" "}
        <Link href="/contact" style={{ color: "#F3812A" }}>
          Vraag een vrijblijvende offerte aan
        </Link>
      </p>
    </div>
  );
}
