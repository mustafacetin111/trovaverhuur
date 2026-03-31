"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.fromTo(
      imageRef.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    ).fromTo(
      contentRef.current,
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      "-=0.7"
    );

    gsap.fromTo(
      statsRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section id="over-ons" ref={sectionRef} className="py-20 md:py-28 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://trovaverhuur.nl/wp-content/uploads/2025/03/excavator-digging-ground-day-light.webp"
                alt="Trova Verhuur in actie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#dc3545] rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-[#dc3545] rounded-lg" />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <span className="text-[#dc3545] text-sm font-bold uppercase tracking-widest">
              Over Trova
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#23282d] mt-3 mb-6">
              Betrouwbaar partner
              <br />
              <span className="text-[#dc3545]">al 10+ jaar</span>
            </h2>
            <div className="w-16 h-1 bg-[#dc3545] mb-6" />
            <p className="text-[#82828B] leading-relaxed mb-4">
              Trova Verhuur & Transport is uw betrouwbare partner voor de verhuur van
              grondverzet machines. Wij leveren hoogwaardige graafmachines en mini-diggers
              voor elke klus, groot of klein.
            </p>
            <p className="text-[#82828B] leading-relaxed mb-8">
              Met meer dan 10 jaar ervaring in de branche kennen wij de uitdagingen van
              uw project. Onze gecertificeerde machinisten staan garant voor veilig en
              efficiënt werk op elke locatie.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "10+", label: "Jaar ervaring" },
                { value: "500+", label: "Tevreden klanten" },
                { value: "50+", label: "Machines" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  ref={(el) => {
                    if (el) statsRef.current[i] = el;
                  }}
                  className="text-center p-3 bg-white rounded-lg shadow-sm border border-[#E6E6EB]"
                >
                  <p className="text-[#dc3545] text-2xl font-bold">{stat.value}</p>
                  <p className="text-[#82828B] text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-block">
              Neem Contact Op
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
