import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded bg-[#E8EBE9]", className)}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-[#E8EBE9] overflow-hidden bg-white">
      {/* Image */}
      <Skeleton className="w-full aspect-[16/10]" />
      <div className="p-5 space-y-3">
        {/* Category + brand */}
        <div className="flex gap-2">
          <Skeleton className="h-4 w-20 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
        </div>
        {/* Name */}
        <Skeleton className="h-6 w-3/4" />
        {/* Description */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <Skeleton className="h-12 rounded-lg" />
          <Skeleton className="h-12 rounded-lg" />
          <Skeleton className="h-12 rounded-lg" />
        </div>
        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-[#E8EBE9]">
          <Skeleton className="h-7 w-24" />
          <Skeleton className="h-9 w-32 rounded" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonDetailHero() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Left col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <Skeleton className="h-12 w-2/3" />
            <Skeleton className="h-1 w-14" />
            <Skeleton className="w-full aspect-[16/10] rounded-xl" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            {/* Specs table */}
            <div className="rounded-xl border border-[#E8EBE9] overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 px-5 py-3.5 gap-4 ${i % 2 === 0 ? "bg-white" : "bg-[#f7f9f8]"}`}
                >
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
          {/* Right col: price card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border-2 border-[#E8EBE9] overflow-hidden">
              <Skeleton className="h-28 w-full" />
              <div className="bg-white p-6 space-y-4">
                <Skeleton className="h-10 w-full rounded" />
                <Skeleton className="h-10 w-full rounded" />
                <div className="space-y-2 pt-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
