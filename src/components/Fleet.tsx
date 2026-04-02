"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";

const machines = [
  {
    name: "Giant 2500 X-TRA",
    category: "Wiellader",
    image: "https://trovaverhuur.nl/wp-content/uploads/2025/05/g2500_x-tra-1-300x300.webp",
    specs: ["Wiellader", "Compacte bouw", "Hoge capaciteit"],
    tag: "Populair",
  },
  {
    name: "Giant G1500 X-TRA",
    category: "Wiellader",
    image: "https://trovaverhuur.nl/wp-content/uploads/2025/05/G1500-Xtra.jpg",
    specs: ["Wiellader", "Licht & wendbaar", "Ideaal voor smalle ruimtes"],
    tag: null,
  },
  {
    name: "Giant 2700 X-TRA HD+",
    category: "Wiellader",
    image: "https://trovaverhuur.nl/wp-content/uploads/2025/05/g2700.webp",
    specs: ["Wiellader", "Heavy Duty", "Groot hefvermogen"],
    tag: "Nieuw",
  },
  {
    name: "Giant 3500 X-TRA",
    category: "Wiellader",
    image: "https://trovaverhuur.nl/wp-content/uploads/2025/05/g3500_x-tra_tobroco-giant-300x300.webp",
    specs: ["Wiellader", "Zwaar materieel", "Top prestaties"],
    tag: null,
  },
  {
    name: "Giant 2200E X-TRA",
    category: "Elektrisch",
    image: "https://trovaverhuur.nl/wp-content/uploads/2025/05/g2200e_x-tra_tobroco-giant-2-300x300.webp",
    specs: ["Elektrisch", "Emissieloos", "Stil & krachtig"],
    tag: "Elektrisch",
  },
  {
    name: "Giant V6004 X-TRA",
    category: "Wiellader",
    image: "https://trovaverhuur.nl/wp-content/uploads/2025/05/wielladers-v-6004-t-giant-1-300x300.webp",
    specs: ["Wiellader", "Verreiker optie", "Veelzijdig inzetbaar"],
    tag: null,
  },
  {
    name: "Tandemasser met kipper",
    category: "Aanhanger",
    image: "https://trovaverhuur.nl/wp-content/uploads/2025/05/Proline-tandemas-kipper-300x300.webp",
    specs: ["Tandem-as", "Kipper uitvoering", "Zwaar transport"],
    tag: null,
  },
  {
    name: "Transport aanhanger",
    category: "Aanhanger",
    image: "https://trovaverhuur.nl/wp-content/uploads/2025/05/Machinetransporter-300x300.webp",
    specs: ["Machinetransport", "Breed laadvlak", "Veilig transport"],
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
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section id="materieel" ref={sectionRef} className="py-20 md:py-28 bg-[#0f1d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F3812A] text-sm font-bold uppercase tracking-widest">
            Ons Wagenpark
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Beschikbaar Materieel
          </h2>
          <div className="w-16 h-1 bg-[#F3812A] mx-auto" />
          <p className="text-[#7a8882] mt-6 max-w-xl mx-auto text-base">
            A-merk Giant wielladers, elektrische machines en aanhangers — direct beschikbaar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {machines.map((machine, i) => (
            <div
              key={machine.name}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="group bg-[#172315] rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              style={{ boxShadow: "0 0 0 1px rgba(43,110,79,0.2)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(243,129,42,0.18), 0 0 0 1px rgba(243,129,42,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(43,110,79,0.2)"; }}
            >
              {/* Image */}
              <div className="relative h-44 bg-[#0f1d16] overflow-hidden">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-contain p-3 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {machine.tag && (
                  <span className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded"
                    style={{ background: machine.tag === "Elektrisch" ? "#2B6E4F" : "#F3812A" }}>
                    {machine.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded"
                  style={{ background: "rgba(15,29,22,0.85)", color: "#7a8882" }}>
                  {machine.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-sm mb-3 group-hover:text-[#F3812A] transition-colors">
                  {machine.name}
                </h3>
                <ul className="space-y-1 mb-4">
                  {machine.specs.map((spec) => (
                    <li key={spec} className="text-[#7a8882] text-xs flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2B6E4F] shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center text-xs font-bold uppercase tracking-wider py-2.5 rounded transition-all duration-200"
                  style={{ border: "1px solid rgba(243,129,42,0.4)", color: "#F3812A" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F3812A"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#F3812A"; }}
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
