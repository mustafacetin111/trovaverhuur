"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const services = [
  {
    icon: "🚜",
    title: "Graafmachine Verhuur",
    description:
      "Verhuur van graafmachines in diverse tonnages voor grondverzet, sloop en bouwprojecten. Optioneel met ervaren machinist.",
  },
  {
    icon: "🔧",
    title: "Mini-Digger Verhuur",
    description:
      "Compacte mini-diggers voor werken in smalle ruimtes, tuinen en kleinschalige grondwerkzaamheden.",
  },
  {
    icon: "🚛",
    title: "Transport",
    description:
      "Volledige transportservice voor uw materieel. Wij zorgen voor tijdige levering en ophaal op locatie.",
  },
  {
    icon: "👷",
    title: "Met Machinist",
    description:
      "Huur inclusief gecertificeerde machinist. Onze professionals zorgen voor veilig en efficiënt werk.",
  },
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#dc3545] text-sm font-bold uppercase tracking-widest">
            Wat wij doen
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#23282d] mt-3 mb-4">
            Onze Diensten
          </h2>
          <div className="w-16 h-1 bg-[#dc3545] mx-auto" />
          <p className="text-[#82828B] mt-6 max-w-xl mx-auto text-base md:text-lg">
            Van grondverzet tot transport — wij bieden complete oplossingen voor
            uw bouwproject.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="group bg-white border border-[#E6E6EB] rounded-lg p-6 hover:shadow-xl hover:border-[#dc3545] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-[#23282d] mb-3 group-hover:text-[#dc3545] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#82828B] text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 w-8 h-0.5 bg-[#dc3545] group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
