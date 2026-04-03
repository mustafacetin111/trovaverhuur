import type { Equipment, EquipmentCategory } from "@/types/equipment";
import {
  equipmentData,
  getEquipmentById as getById,
  getEquipmentByCategory as getByCategory,
  getFeaturedEquipment as getFeatured,
  getRelatedEquipment as getRelated,
} from "@/data/equipment";

// Revalidate every hour so Firecrawl can refresh data via ISR
export const revalidate = 3600;

/**
 * Returns all equipment.
 * Extend this to call firecrawlService when FIRECRAWL_ENABLED=true.
 */
export async function getAllEquipment(): Promise<Equipment[]> {
  return equipmentData;
}

/** Returns a single equipment item by slug, or null. */
export async function getEquipmentById(id: string): Promise<Equipment | null> {
  return getById(id) ?? null;
}

/** Returns equipment filtered by category. */
export async function getEquipmentByCategory(
  category: EquipmentCategory | "Alle"
): Promise<Equipment[]> {
  return getByCategory(category);
}

/** Returns featured equipment items (for homepage Fleet cross-link). */
export async function getFeaturedEquipment(): Promise<Equipment[]> {
  return getFeatured();
}

/**
 * Returns related machines for a detail page.
 * Uses relatedIds first, then falls back to same-category items.
 */
export async function getRelatedEquipment(
  equipment: Equipment,
  limit = 3
): Promise<Equipment[]> {
  return getRelated(equipment, limit);
}

/** Returns all valid equipment IDs — used in generateStaticParams. */
export async function getAllEquipmentIds(): Promise<string[]> {
  return equipmentData.map((e) => e.id);
}
