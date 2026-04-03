export type EquipmentCategory =
  | "Minigraver"
  | "Shovel"
  | "Wiellader"
  | "Aanhanger"
  | "Elektrisch"
  | "Overig";

export interface EquipmentSpec {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Equipment {
  id: string;
  name: string;
  brand: string;
  category: EquipmentCategory;
  shortDescription: string;
  description: string;
  image: string;
  images?: string[];
  specs: EquipmentSpec[];
  toepassingen: string[];
  tags: string[];
  dailyRate: number;
  weeklyRate: number;
  monthlyRate?: number;
  featured?: boolean;
  available?: boolean;
  relatedIds?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface FilterState {
  category: EquipmentCategory | "Alle";
  sortBy: "default" | "price-asc" | "price-desc" | "name";
}

export interface FirecrawlEquipmentResult {
  name?: string;
  brand?: string;
  category?: string;
  dailyRate?: string | number;
  specs?: Record<string, string>;
  description?: string;
  imageUrl?: string;
}

export interface ScrapeResult<T> {
  data: T | null;
  source: "firecrawl" | "fallback";
  error?: string;
}
