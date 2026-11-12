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
  CheckCircle2,
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
      "Independent Authority Engineer Supervision for 8-Lane Access Controlled Greenfield Expressway",
    stats: "Km 103.400 to Km 154.600 • Hybrid Annuity Mode (HAM)",
    length: "51.20 Km Total Supervised Stretch",
    client: "National Highways Authority of India (NHAI)",
    link: "/projects",
  },
  {
    id: 2,
    image: "/assets/Khed1.597ebadc.jpeg",
    tag: "National Highway Development Project (NHDP Phase IV)",
    headline: "Four Laning of Khed - Sinnar NH-50",
    subheadline:
      "Heavy industrial freight corridor connecting Pune, Narayangaon, Alephata, Sangamner, and Sinnar with major bypasses.",
    stats: "Design Length 137.946 Km • DBFOT Toll Concession",
    length: "137.95 Km (4-Lane)",
    client: "NHAI / Ministry of Road Transport & Highways",
    link: "/projects",
  },
  {
    id: 3,
    image: "/assets/MahabaleshwarSataraRahimatpur71km1.eba7f8c5.jpeg",
    tag: "High-Altitude Western Ghats Corridor",
    headline: "State Highway 140 Mahabaleshwar - Satara",
    subheadline:
      "Specialized pavement engineering, white topping overlays, retaining breast walls, and deep-cut ghat drainage.",
    stats: "71 Km Scenic & Commercial Arterial Corridor",
    length: "71.00 Km",
    client: "Maharashtra State Road Improvement Project (MRIP)",
    link: "/projects",
  },
  {
    id: 4,
    image: "/assets/MalharpethUmbrajMasurMayani1.359e3842.jpeg",
    tag: "MRIP Hybrid Annuity Mode (HAM)",
    headline: "Malharpeth - Pandharpur SH-143",
    subheadline:
      "High-capacity 2-lane paved shoulder upgrade linking Western Maharashtra freight and pilgrimage centers.",
    stats: "Km 55/000 to Km 153/420 on Hybrid Annuity Mode",
    length: "98.42 Km",
    client: "PWD Maharashtra / MRIP",
    link: "/projects",
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
      className="relative w-full h-[580px] sm:h-[640px] lg:h-[700px] bg-brand-dark overflow-hidden select-none border-t border-white/10"
    >
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
          {/* Background Project Image */}
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Removed blue gradient overlay - pure authentic image with subtle bottom vignette for pagination visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
      ))}

      {/* Content Container - Sleek frosted glass panel for perfect text legibility without tinting the photo */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl bg-black/50 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/15 shadow-2xl space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Tag Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{slides[current].tag}</span>
              </div>

              {/* Main Title */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {slides[current].headline}
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed">
                {slides[current].subheadline}
              </p>

              {/* Meta specs row */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-mono">
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm text-amber-300">
                  <Gauge className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>{slides[current].length}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <Building2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>{slides[current].client}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA stays steady and responsive */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-amber hover:from-amber-400 hover:to-amber-600 text-brand-dark font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore All 100+ Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Manual Slide Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-brand-gold hover:text-brand-dark text-white border border-white/15 backdrop-blur-md transition-all shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-brand-gold hover:text-brand-dark text-white border border-white/15 backdrop-blur-md transition-all shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Progress Bars */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrent(idx)}
            className="group py-2 px-1 focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-10 bg-brand-gold"
                  : "w-3 bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
