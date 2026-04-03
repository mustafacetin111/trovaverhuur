import Header from "@/components/Header";
import { SkeletonDetailHero } from "@/components/ui/Skeleton";

export default function LoadingEquipmentDetail() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "4rem" }}>
        {/* Breadcrumb skeleton */}
        <div className="py-3" style={{ background: "#f7f9f8", borderBottom: "1px solid #E8EBE9" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="h-4 w-48 rounded animate-pulse"
              style={{ background: "#E8EBE9" }}
            />
          </div>
        </div>

        <SkeletonDetailHero />
      </main>
    </>
  );
}
