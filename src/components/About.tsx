"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
    });
    tl.fromTo(imageRef.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" })
      .fromTo(contentRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.7");

    gsap.fromTo(
      statsRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      }
    );
  }, []);

  return (
    <section id="over-ons" ref={sectionRef} className="py-20 md:py-28 bg-[#f7f9f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative h-80 md:h-[420px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://trovaverhuur.nl/wp-content/uploads/2025/05/Foto_homepagina_kopie.webp"
                alt="Trova Verhuur in actie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-lg -z-10" style={{ background: "#F3812A" }} />
            <div className="absolute -top-4 -left-4 w-18 h-18 border-4 rounded-lg" style={{ borderColor: "#2B6E4F" }} />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <span className="text-[#F3812A] text-sm font-bold uppercase tracking-widest">Over Trova</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111] mt-3 mb-5">
              Betrouwbare partner
              <br />
              <span style={{ color: "#2B6E4F" }}>in grondverzet</span>
            </h2>
            <div className="w-16 h-1 mb-6" style={{ background: "#F3812A" }} />
            <p className="text-[#7a8882] leading-relaxed mb-4">
              Trova Verhuur & Transport is uw betrouwbare partner voor de verhuur van grondverzet machines.
              Wij verhuren A-merk shovels en minigravers voor scherpe tarieven — met of zonder machinist.
            </p>
            <p className="text-[#7a8882] leading-relaxed mb-8">
              Onze machines zijn professioneel onderhouden en direct beschikbaar. Transport naar uw locatie in
              Amsterdam en omgeving regelen wij voor u.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "A-merk", label: "Giant machines" },
                { value: "020-3086849", label: "Direct bereikbaar" },
                { value: "Ma–Vr", label: "07:00 – 17:00" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  ref={(el) => { if (el) statsRef.current[i] = el; }}
                  className="text-center p-3 bg-white rounded-lg shadow-sm border border-[#E8EBE9]"
                >
                  <p className="font-bold text-sm" style={{ color: "#2B6E4F" }}>{stat.value}</p>
                  <p className="text-[#7a8882] text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-block">Neem Contact Op</a>
          </div>
        </div>
      </div>
    </section>
  );
}
