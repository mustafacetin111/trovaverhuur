import type {
  Equipment,
  EquipmentSpec,
  FirecrawlEquipmentResult,
  ScrapeResult,
} from "@/types/equipment";
import { equipmentData } from "@/data/equipment";

// ── Helpers ────────────────────────────────────────────────────────────────

function normalizeFirecrawlResponse(
  raw: unknown
): FirecrawlEquipmentResult[] {
  if (!raw) return [];
  const arr = Array.isArray(raw) ? raw : [raw];
  return arr.map((item: Record<string, unknown>) => ({
    name:        typeof item.name        === "string" ? item.name        : undefined,
    brand:       typeof item.brand       === "string" ? item.brand       : undefined,
    category:    typeof item.category    === "string" ? item.category    : undefined,
    dailyRate:   item.dailyRate !== undefined ? Number(item.dailyRate)   : undefined,
    description: typeof item.description === "string" ? item.description : undefined,
    imageUrl:    typeof item.imageUrl    === "string" ? item.imageUrl    :
                 typeof item.image       === "string" ? item.image       : undefined,
    specs:       typeof item.specs === "object" && item.specs !== null
                   ? (item.specs as Record<string, string>)
                   : undefined,
  }));
}

function toFirecrawlShape(e: Equipment): FirecrawlEquipmentResult {
  return {
    name:        e.name,
    brand:       e.brand,
    category:    e.category,
    dailyRate:   e.dailyRate,
    description: e.shortDescription,
    imageUrl:    e.image,
    specs:       Object.fromEntries(e.specs.map((s) => [s.label, s.value])),
  };
}

// ── Public API ──────────────────────────────────────────────────────────────

/**
 * Scrape a URL for a list of equipment items.
 * Falls back to static data if Firecrawl is unavailable (e.g. during build).
 *
 * NOTE: Firecrawl MCP tools are only available at runtime via the MCP server,
 * not as npm imports. Gate behind FIRECRAWL_ENABLED env var and call from a
 * Route Handler (/api/equipment/scrape) rather than directly in Server Components.
 */
export async function scrapeEquipmentFromUrl(
  url: string
): Promise<ScrapeResult<FirecrawlEquipmentResult[]>> {
  if (!url || process.env.FIRECRAWL_ENABLED !== "true") {
    return {
      data:   equipmentData.map(toFirecrawlShape),
      source: "fallback",
      error:  "Firecrawl disabled – using static data",
    };
  }

  try {
    const response = await fetch(
      `/api/equipment/scrape?url=${encodeURIComponent(url)}`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json = await response.json();
    const normalized = normalizeFirecrawlResponse(json.data);
    return { data: normalized, source: "firecrawl" };
  } catch (err) {
    console.warn("[firecrawlService] scrapeEquipmentFromUrl failed:", err);
    return {
      data:   equipmentData.map(toFirecrawlShape),
      source: "fallback",
      error:  err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Extract structured specs from a product URL.
 */
export async function extractEquipmentSpecs(
  url: string
): Promise<ScrapeResult<EquipmentSpec[]>> {
  if (!url || process.env.FIRECRAWL_ENABLED !== "true") {
    return {
      data:   null,
      source: "fallback",
      error:  "Firecrawl disabled",
    };
  }

  try {
    const response = await fetch(
      `/api/equipment/specs?url=${encodeURIComponent(url)}`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json = await response.json();
    const specs: EquipmentSpec[] = Object.entries(
      (json.data ?? {}) as Record<string, string>
    ).map(([label, value]) => ({ label, value }));
    return { data: specs, source: "firecrawl" };
  } catch (err) {
    console.warn("[firecrawlService] extractEquipmentSpecs failed:", err);
    return {
      data:   null,
      source: "fallback",
      error:  err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Get live pricing for a single machine from a competitor / CMS URL.
 */
export async function scrapeEquipmentPricing(
  url: string,
  equipmentName: string
): Promise<ScrapeResult<{ dailyRate: number; weeklyRate: number } | null>> {
  if (!url || process.env.FIRECRAWL_ENABLED !== "true") {
    return { data: null, source: "fallback", error: "Firecrawl disabled" };
  }

  try {
    const response = await fetch(
      `/api/equipment/pricing?url=${encodeURIComponent(url)}&name=${encodeURIComponent(equipmentName)}`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json = await response.json();
    return {
      data: {
        dailyRate:  Number(json.dailyRate)  || 0,
        weeklyRate: Number(json.weeklyRate) || 0,
      },
      source: "firecrawl",
    };
  } catch (err) {
    console.warn("[firecrawlService] scrapeEquipmentPricing failed:", err);
    return {
      data:   null,
      source: "fallback",
      error:  err instanceof Error ? err.message : "Unknown error",
    };
  }
}
