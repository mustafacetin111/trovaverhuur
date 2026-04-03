"use client";

import type { EquipmentCategory } from "@/types/equipment";

interface CategoryFilterProps {
  categories: Array<{ name: EquipmentCategory | "Alle"; count: number }>;
  active: EquipmentCategory | "Alle";
  onChange: (category: EquipmentCategory | "Alle") => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="overflow-x-auto pb-1 -mx-1">
      <div className="flex gap-2 px-1 min-w-max">
        {categories.map(({ name, count }) => {
          const isActive = name === active;
          return (
            <button
              key={name}
              onClick={() => onChange(name)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
              style={{
                background:   isActive ? "#F3812A" : "white",
                color:        isActive ? "white"   : "#7a8882",
                border:       isActive ? "1.5px solid #F3812A" : "1.5px solid #E8EBE9",
                boxShadow:    isActive ? "0 2px 12px rgba(243,129,42,0.3)" : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.borderColor = "#F3812A";
                  (e.currentTarget as HTMLElement).style.color = "#F3812A";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E8EBE9";
                  (e.currentTarget as HTMLElement).style.color = "#7a8882";
                }
              }}
            >
              {name}
              <span
                className="text-[11px] font-bold rounded-full px-1.5 py-0.5 leading-none"
                style={{
                  background: isActive ? "rgba(255,255,255,0.25)" : "#f0f4f2",
                  color:      isActive ? "white" : "#7a8882",
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
