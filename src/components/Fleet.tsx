"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";

const machines = [
  {
    name: "Graafmachine 5T",
    category: "Graafmachine",
    specs: ["5.000 kg", "Max. bereik 6m", "Diepte 4m"],
    tag: "Populair",
  },
  {
    name: "Mini-Digger 1.5T",
    category: "Mini-Digger",
    specs: ["1.500 kg", "Breedte 99cm", "Diepte 2.5m"],
    tag: "Nieuw",
  },
  {
    name: "Graafmachine 8T",
    category: "Graafmachine",
    specs: ["8.000 kg", "Max. bereik 8m", "Diepte 5.5m"],
    tag: null,
  },
  {
    name: "Mini-Digger 3T",
    category: "Mini-Digger",
    specs: ["3.000 kg", "Breedte 150cm", "Diepte 3.5m"],
    tag: null,
  },
];

export default function Fleet() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      id="materieel"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#23282d]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#dc3545] text-sm font-bold uppercase tracking-widest">
            Ons Wagenpark
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Beschikbaar Materieel
          </h2>
          <div className="w-16 h-1 bg-[#dc3545] mx-auto" />
          <p className="text-[#82828B] mt-6 max-w-xl mx-auto">
            Professioneel onderhouden machines klaar voor uw project.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((machine, i) => (
            <div
              key={machine.name}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="group bg-[#2c3338] rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-[#dc3545]/20 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-44 bg-[#23282d] overflow-hidden">
                <Image
                  src="https://trovaverhuur.nl/wp-content/uploads/2025/03/excavator-digging-ground-day-light.webp"
                  alt={machine.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {machine.tag && (
                  <span className="absolute top-3 left-3 bg-[#dc3545] text-white text-xs font-bold px-2 py-1 rounded">
                    {machine.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-[#23282d]/80 text-[#E6E6EB] text-xs px-2 py-1 rounded">
                  {machine.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-3 group-hover:text-[#dc3545] transition-colors">
                  {machine.name}
                </h3>
                <ul className="space-y-1 mb-4">
                  {machine.specs.map((spec) => (
                    <li key={spec} className="text-[#82828B] text-xs flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dc3545] flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center text-sm font-semibold text-[#dc3545] border border-[#dc3545] rounded py-2 hover:bg-[#dc3545] hover:text-white transition-colors"
                >
                  Offerte Aanvragen
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
