"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, ChevronDown, HardHat, PhoneCall } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function VideoHero() {
  const scrollToProjects = () => {
    const el = document.getElementById("flagship-projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[640px] sm:h-[720px] lg:h-[820px] bg-brand-dark overflow-hidden select-none flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-85"
          src="/videos/herosection_new_part1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/Vadodra1.85753e81.jpeg"
        />
      </div>

      {/* Cinematic Dark & Gradient Overlays for High Legibility */}
      <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <div className="max-w-3xl space-y-6">
          {/* Accreditation Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>ISO 9001:2015 Certified • Premier Infrastructure Firm</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineering for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-300 to-amber-500">
              Sustainable Infrastructure
            </span>{" "}
            & Highway Excellence
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
            Delivering independent Authority Engineer supervision, DPR solutions, O&amp;M oversight,
            and techno-legal arbitration for landmark expressways and national freight corridors across India.
          </p>

          {/* Quick Metrics & Callout */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium bg-black/40 px-3.5 py-2 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>100+ Major Highways Supervised</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium bg-black/40 px-3.5 py-2 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>Over Two Decades of Excellence</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-amber hover:from-amber-400 hover:to-amber-600 text-brand-dark font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Landmark Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-md transition-all"
            >
              <span>Consulting Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Pulsing Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-slate-300 hover:text-brand-gold transition-colors focus:outline-none group"
        aria-label="Scroll to Landmark Projects"
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 group-hover:text-brand-gold">
          View Flagship Corridors
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-brand-gold" />
      </button>
    </section>
  );
}
