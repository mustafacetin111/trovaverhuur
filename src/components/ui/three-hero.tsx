"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ThreeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b160e); // deep forest green-black
    scene.fog = new THREE.FogExp2(0x0b160e, 0.038);

    // ── Camera ─────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      58,
      window.innerWidth / window.innerHeight,
      0.1,
      140
    );
    camera.position.set(0, 12, 22);
    camera.lookAt(0, 0, 0);

    // ── Renderer ───────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    // ── Lighting ───────────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const sunLight = new THREE.DirectionalLight(0xfff3d4, 2.5);
    sunLight.position.set(8, 20, 10);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x2B6E4F, 0.8);
    fillLight.position.set(-10, 5, -10);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xF3812A, 0.6);
    rimLight.position.set(0, -5, -15);
    scene.add(rimLight);

    // ── Ground terrain ─────────────────────────────────────────────────────
    const buildTerrain = (
      size: number,
      segs: number,
      offsetY: number,
      noiseScale: number,
      amplitude: number,
      phase: number,
      opacity: number
    ) => {
      const geo = new THREE.PlaneGeometry(size, size, segs, segs);
      geo.rotateX(-Math.PI / 2);
      const pos = geo.attributes.position as THREE.BufferAttribute;
      const colors: number[] = [];

      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const y =
          Math.sin(x * noiseScale * 0.4 + phase) * Math.cos(z * noiseScale * 0.4) * amplitude +
          Math.sin(x * noiseScale * 1.1 + phase * 0.5) * Math.cos(z * noiseScale * 0.9) * amplitude * 0.4 +
          Math.sin(x * noiseScale * 2.2) * amplitude * 0.15;
        pos.setY(i, y + offsetY);

        const norm = Math.min(Math.max((y + amplitude * 1.5) / (amplitude * 3), 0), 1);
        if (norm > 0.75) {
          colors.push(0.953, 0.506, 0.165); // orange highlight #F3812A
        } else if (norm > 0.55) {
          colors.push(0.169, 0.431, 0.31);  // brand green #2B6E4F
        } else if (norm > 0.35) {
          colors.push(0.1, 0.22, 0.15);     // dark green
        } else {
          colors.push(0.05, 0.09, 0.06);    // near black-green
        }
      }
      geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
      geo.computeVertexNormals();
      const mat = new THREE.MeshBasicMaterial({ wireframe: true, vertexColors: true, transparent: opacity < 1, opacity });
      return { mesh: new THREE.Mesh(geo, mat), geo, mat };
    };

    const { mesh: t1, geo: g1, mat: m1 } = buildTerrain(55, 140, 0, 1, 3.4, 0, 1);
    const { mesh: t2, geo: g2, mat: m2 } = buildTerrain(55, 70, -0.7, 0.6, 2.1, 1.9, 0.32);
    const { mesh: t3, geo: g3, mat: m3 } = buildTerrain(85, 42, -1.4, 0.32, 1.3, 3.7, 0.14);
    scene.add(t1, t2, t3);

    // ── Giant wiellader (boxy construction machine) ────────────────────────
    const machineGroup = new THREE.Group();

    const bodyMat = new THREE.MeshPhongMaterial({ color: 0x2d5a3d, shininess: 40 });
    const yellowMat = new THREE.MeshPhongMaterial({ color: 0xF3812A, shininess: 60 });
    const darkMat = new THREE.MeshPhongMaterial({ color: 0x111a14, shininess: 20 });
    const glassMat = new THREE.MeshPhongMaterial({ color: 0x88ccff, transparent: true, opacity: 0.6, shininess: 120 });
    const wheelMat = new THREE.MeshPhongMaterial({ color: 0x1a1a1a, shininess: 10 });
    const rimMat = new THREE.MeshPhongMaterial({ color: 0x888888, shininess: 80 });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.2, 3.2), bodyMat);
    body.position.set(0, 1.2, 0);
    machineGroup.add(body);

    // Engine hood
    const hood = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.6, 1.6), bodyMat);
    hood.position.set(0, 1.9, -0.9);
    machineGroup.add(hood);

    // Cab
    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.0, 1.4), bodyMat);
    cab.position.set(0, 2.3, 0.5);
    machineGroup.add(cab);

    // Cab glass front
    const glassFront = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.75, 0.05), glassMat);
    glassFront.position.set(0, 2.3, 1.22);
    machineGroup.add(glassFront);

    // Orange accents / stripe
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.22, 0.18, 3.22), yellowMat);
    stripe.position.set(0, 0.65, 0);
    machineGroup.add(stripe);

    // Lift arms (two parallel arms)
    [-0.85, 0.85].forEach((x) => {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 2.4), yellowMat);
      arm.position.set(x, 1.9, 1.8);
      arm.rotation.x = -0.35;
      machineGroup.add(arm);
    });

    // Bucket
    const bucket = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.55, 0.7), yellowMat);
    bucket.position.set(0, 1.1, 3.1);
    machineGroup.add(bucket);
    const bucketBack = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.7, 0.12), darkMat);
    bucketBack.position.set(0, 1.1, 2.78);
    machineGroup.add(bucketBack);

    // 4 wheels
    const wheelGeo = new THREE.CylinderGeometry(0.62, 0.62, 0.5, 22);
    const rimGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.52, 12);
    [[-1.2, 0.62, -1.1], [1.2, 0.62, -1.1], [-1.2, 0.62, 1.1], [1.2, 0.62, 1.1]].forEach(([x, y, z]) => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, y, z);
      machineGroup.add(wheel);
      const rim = new THREE.Mesh(rimGeo, rimMat);
      rim.rotation.z = Math.PI / 2;
      rim.position.set(x, y, z);
      machineGroup.add(rim);
    });

    // Headlights
    [[-0.6, 1.6, 1.61], [0.6, 1.6, 1.61]].forEach(([x, y, z]) => {
      const light = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.05), new THREE.MeshPhongMaterial({ color: 0xffffdd, emissive: 0xffffaa, emissiveIntensity: 0.8 }));
      light.position.set(x, y, z);
      machineGroup.add(light);
    });

    machineGroup.position.set(2, 0.62, 1);
    machineGroup.rotation.y = -0.35;
    machineGroup.scale.set(1.15, 1.15, 1.15);
    scene.add(machineGroup);

    // ── Scroll: camera flies through terrain + machine rotates ─────────────
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.6,
      onUpdate: (self) => {
        const p = self.progress;
        const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        camera.position.y = 12 - eased * 10;
        camera.position.z = 22 - eased * 18;
        camera.lookAt(0, 0, -eased * 12);
        machineGroup.rotation.y = -0.35 + eased * 1.2;
        machineGroup.position.x = 2 - eased * 1.5;
      },
    });

    // ── Animate ────────────────────────────────────────────────────────────
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      t1.rotation.y = t * 0.005;
      t2.rotation.y = t * -0.003;
      t3.rotation.y = t * 0.0025;
      // Subtle machine float
      machineGroup.position.y = 0.62 + Math.sin(t * 0.8) * 0.04;
      renderer.render(scene, camera);
    };
    animate();

    // ── Entrance ───────────────────────────────────────────────────────────
    camera.position.y = 24;
    machineGroup.scale.set(0, 0, 0);
    gsap.to(camera.position, { y: 12, duration: 2.5, ease: "power3.out", delay: 0.2 });
    gsap.to(machineGroup.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 1.4, ease: "back.out(1.4)", delay: 0.8 });

    // ── Text entrance ──────────────────────────────────────────────────────
    const tl = gsap.timeline({ delay: 0.4 });
    tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5");

    // ── Resize ─────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      st.kill();
      renderer.dispose();
      g1.dispose(); m1.dispose();
      g2.dispose(); m2.dispose();
      g3.dispose(); m3.dispose();
    };
  }, []);

  return (
    <div ref={sectionRef} id="home" style={{ height: "240vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Three.js Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-white to-transparent z-4" />
        {/* Brand stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F3812A] z-5" />

        {/* Content — NOT fixed, flows in document */}
        <div className="relative z-10 h-full flex flex-col justify-between px-8 py-8 md:px-16 md:py-14 pt-24 md:pt-28">

          {/* Top: USPs */}
          <div className="flex flex-wrap gap-3 justify-end">
            {["Flexibel inzetbaar", "Kwaliteit & vakmanschap", "Machinist beschikbaar"].map((usp) => (
              <span key={usp} className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                style={{ background: "rgba(43,110,79,0.85)", color: "#fff", backdropFilter: "blur(4px)" }}>
                {usp}
              </span>
            ))}
          </div>

          {/* Center: main heading */}
          <div className="max-w-2xl">
            <div ref={badgeRef} className="opacity-0 inline-block text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 mb-6 rounded"
              style={{ background: "#F3812A" }}>
              Verhuur van Grondverzet Machines
            </div>

            <h1 ref={titleRef} className="opacity-0 font-bold text-white leading-none tracking-tight mb-5"
              style={{ fontSize: "clamp(3.2rem, 11vw, 8.5rem)", letterSpacing: "-0.04em", textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
              Trova
              <br />
              <span style={{ color: "#F3812A" }}>Verhuur</span>
            </h1>

            <p ref={subtitleRef} className="opacity-0 font-medium mb-8"
              style={{ color: "rgba(255,255,255,0.82)", fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", lineHeight: 1.65, maxWidth: "480px", textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
              Wij verhuren A-merk shovels en minigravers voor scherpe tarieven.
              Met of zonder machinist. Direct beschikbaar in Amsterdam en omgeving.
            </p>

            <div ref={ctaRef} className="opacity-0 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary text-sm px-8 py-3.5">
                Vraag een offerte aan
              </a>
              <a href="#materieel"
                className="text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded border-2 transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.9)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#F3812A";
                  (e.currentTarget as HTMLElement).style.color = "#F3812A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
                }}
              >
                Bekijk materieel
              </a>
            </div>
          </div>

          {/* Bottom: stats row */}
          <div className="flex flex-wrap gap-6 pb-4">
            {[
              { v: "020-3086849", l: "Bel ons direct" },
              { v: "Flexibel", l: "Huurperioden" },
              { v: "A-merk", l: "Machines" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-bold text-lg" style={{ color: "#F3812A" }}>{s.v}</p>
                <p className="text-xs tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="uppercase text-[9px] tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.3)" }}>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#F3812A] to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
