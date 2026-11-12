"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Building2,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/assets/Vadodra1.85753e81.jpeg",
    tag: "Bharatmala Pariyojana Flagship Corridor",
    headline: "Vadodara Mumbai Expressway",
    subheadline:
      "Independent Authority Engineer Supervision for 8-Lane Access Controlled Greenfield Expressway (Km 103.400 to Km 154.600 on HAM).",
    length: "51.20 Km Supervised Stretch",
    client: "National Highways Authority of India (NHAI)",
  },
  {
    id: 2,
    image: "/assets/Khed1.597ebadc.jpeg",
    tag: "National Highway Development Project (NHDP Phase IV)",
    headline: "Four Laning of Khed - Sinnar NH-50",
    subheadline:
      "Heavy industrial freight corridor connecting Pune, Narayangaon, Alephata, Sangamner, and Sinnar with major bypasses.",
    length: "137.95 Km (4-Lane DBFOT)",
    client: "NHAI / MoRTH",
  },
  {
    id: 3,
    image: "/assets/MahabaleshwarSataraRahimatpur71km1.eba7f8c5.jpeg",
    tag: "High-Altitude Western Ghats Corridor",
    headline: "State Highway 140 Mahabaleshwar - Satara",
    subheadline:
      "Specialized pavement engineering, white topping overlays, retaining breast walls, and deep-cut ghat drainage.",
    length: "71.00 Km Arterial Corridor",
    client: "Maharashtra State Road Improvement Project (MRIP)",
  },
  {
    id: 4,
    image: "/assets/MalharpethUmbrajMasurMayani1.359e3842.jpeg",
    tag: "MRIP Hybrid Annuity Mode (HAM)",
    headline: "Malharpeth - Pandharpur SH-143",
    subheadline:
      "High-capacity 2-lane paved shoulder upgrade linking Western Maharashtra freight and pilgrimage centers.",
    length: "98.42 Km Supervised Stretch",
    client: "PWD Maharashtra / MRIP",
  },
];

export default function FlagshipProjectsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="flagship-projects"
      className="bg-brand-dark py-8 sm:py-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contained Cinema Showcase Frame */}
        <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 select-none bg-slate-950">
          {/* Stacked background images for instantaneous, flicker-free crossfading */}
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                idx === current
                  ? "opacity-100 z-10 scale-100"
                  : "opacity-0 z-0 pointer-events-none scale-105"
              }`}
            >
              {/* Authentic Highway Project Photography */}
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority={idx === 0}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />

              {/* Controlled gradient: only darkens the lower ~40% for text legibility, leaving top 60% completely unobstructed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-40% to-transparent pointer-events-none" />
            </div>
          ))}

          {/* Top-Right Badge: Current Slide Counter */}
          <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-white font-mono shadow-lg">
            <span className="text-brand-gold font-bold">0{current + 1}</span>
            <span className="text-white/40">/</span>
            <span className="text-slate-300">0{slides.length}</span>
          </div>

          {/* Bottom-Anchored Content: Keeps the photo open and avoids hiding the road */}
          <div className="absolute bottom-0 inset-x-0 z-20 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
              >
                {/* Text Details */}
                <div className="max-w-3xl space-y-3">
                  {/* Tag Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>{slides[current].tag}</span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                    {slides[current].headline}
                  </h2>

                  {/* Short Subheadline */}
                  <p className="text-xs sm:text-sm md:text-base text-slate-200 font-light leading-relaxed max-w-2xl drop-shadow line-clamp-2">
                    {slides[current].subheadline}
                  </p>

                  {/* Key Metadata Pills */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs sm:text-sm text-slate-300 font-mono">
                    <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-sm text-amber-300 shadow-sm">
                      <Gauge className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{slides[current].length}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-sm text-slate-200 shadow-sm">
                      <Building2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{slides[current].client}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side CTA and Controls */}
                <div className="flex items-center gap-4 shrink-0 pt-2 lg:pt-0">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-amber hover:from-amber-400 hover:to-amber-600 text-brand-dark font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Explore All Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Slide Indicators inside control area */}
                  <div className="flex items-center space-x-1.5 pl-2">
                    {slides.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => setCurrent(idx)}
                        className="py-2 focus:outline-none cursor-pointer"
                        aria-label={`Go to slide ${idx + 1}`}
                      >
                        <div
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === current
                              ? "w-8 bg-brand-gold"
                              : "w-2 bg-white/40 hover:bg-white/70"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-brand-gold hover:text-brand-dark text-white border border-white/15 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-brand-gold hover:text-brand-dark text-white border border-white/15 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
