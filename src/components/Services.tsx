"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const steps = [
  {
    num: "01",
    title: "Kies je machine",
    description: "Bekijk ons aanbod en selecteer de machine die bij uw project past. A-merk Giant wielladers & minigravers.",
  },
  {
    num: "02",
    title: "Plan je huurperiode",
    description: "Geef eenvoudig de gewenste huur- en retourdatum aan. Flexibele perioden, geen minimale huurperiode.",
  },
  {
    num: "03",
    title: "Regel het transport",
    description: "Wil je de machine laten bezorgen? Voeg transport toe aan je reservering — wij zorgen voor de rest.",
  },
];

const usps = [
  { icon: "✓", label: "Flexibel inzetbaar" },
  { icon: "✓", label: "Duurzame werkwijze" },
  { icon: "✓", label: "Kwaliteit & vakmanschap" },
  { icon: "✓", label: "Machinist beschikbaar" },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="diensten" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F3812A] text-sm font-bold uppercase tracking-widest">
            Hoe het werkt
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111] mt-3 mb-4">
            In 3 stappen geregeld
          </h2>
          <div className="w-16 h-1 bg-[#F3812A] mx-auto" />
          <p className="text-[#7a8882] mt-6 max-w-xl mx-auto text-base">
            Van machine selectie tot levering op locatie — snel, eenvoudig en professioneel.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="group relative bg-white border border-[#E8EBE9] rounded-lg p-8 hover:shadow-xl transition-all duration-300"
              style={{ borderTop: "3px solid transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderTop = "3px solid #F3812A"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderTop = "3px solid transparent"; }}
            >
              <div className="text-5xl font-black mb-4" style={{ color: "rgba(43,110,79,0.12)", letterSpacing: "-0.04em" }}>
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-[#111] mb-3 group-hover:text-[#2B6E4F] transition-colors">
                {step.title}
              </h3>
              <p className="text-[#7a8882] text-sm leading-relaxed">{step.description}</p>
              <div className="mt-5 w-8 h-0.5 bg-[#F3812A] group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* USP bar */}
        <div className="rounded-xl p-6 flex flex-wrap justify-center gap-6" style={{ background: "#2B6E4F" }}>
          {usps.map((usp) => (
            <div key={usp.label} className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: "#F3812A", color: "#fff" }}>
                {usp.icon}
              </span>
              <span className="text-sm font-semibold text-white">{usp.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
