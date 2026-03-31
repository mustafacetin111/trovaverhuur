"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      overlayRef.current,
      { opacity: 0.8 },
      { opacity: 0.6, duration: 1.5, ease: "power2.out" }
    )
      .fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      );

    // Parallax on scroll
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.set(".hero-bg", { y: self.progress * 150 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 scale-110">
        <Image
          src="https://trovaverhuur.nl/wp-content/uploads/2025/03/excavator-digging-ground-day-light.webp"
          alt="Trova Verhuur - Graafmachine aan het werk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#23282d]"
        style={{ opacity: 0.6 }}
      />

      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#dc3545]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block bg-[#dc3545] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-6">
          Verhuur van Grondverzet Machines
        </div>

        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Professionele
          <span className="text-[#dc3545]"> Verhuur</span>
          <br />& Transport
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-[#E6E6EB] mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Trova levert betrouwbare graafmachines en mini-diggers voor uw bouw-
          en grondverzetprojecten. Snel beschikbaar, professioneel en met
          optionele machinist.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Gratis Offerte Aanvragen
          </a>
          <a href="#materieel" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white hover:text-[#23282d]">
            Bekijk Materieel
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "10+", label: "Jaar Ervaring" },
            { value: "500+", label: "Projecten" },
            { value: "24/7", label: "Beschikbaar" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[#dc3545] text-2xl md:text-3xl font-bold">{stat.value}</p>
              <p className="text-[#E6E6EB] text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#E6E6EB] text-xs">Scroll</span>
        <svg className="w-4 h-4 text-[#dc3545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
