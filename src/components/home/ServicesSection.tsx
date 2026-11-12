"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileSpreadsheet,
  Wrench,
  AlertTriangle,
  Layers,
  Compass,
  Scale,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { servicesData } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  "authority-engineer": <ShieldCheck className="w-6 h-6 text-brand-gold" />,
  dpr: <FileSpreadsheet className="w-6 h-6 text-brand-gold" />,
  maintenance: <Wrench className="w-6 h-6 text-brand-gold" />,
  safety: <AlertTriangle className="w-6 h-6 text-brand-gold" />,
  "project-management": <Layers className="w-6 h-6 text-brand-gold" />,
  "design-engineering": <Compass className="w-6 h-6 text-brand-gold" />,
  Arbitration: <Scale className="w-6 h-6 text-brand-gold" />,
};

export default function ServicesSection() {
  const originalServices = Object.values(servicesData);
  const totalOriginal = originalServices.length;

  // Triplicate list for seamless infinite looping
  const extendedServices = [
    ...originalServices,
    ...originalServices,
    ...originalServices,
  ];

  // Start in the middle set
  const [currentIndex, setCurrentIndex] = useState(totalOriginal);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const transitionRef = useRef<boolean>(true);
  transitionRef.current = isTransitioning;

  // Detect responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Auto-shift 1 place towards the left every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Seamless wrap-around after transition ends
  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - totalOriginal);
    } else if (currentIndex < totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + totalOriginal);
    }
  };

  const activeDotIndex = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;

  return (
    <section
      className="py-20 bg-brand-dark text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-navy/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Comprehensive Engineering Solutions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Delivering specialized consulting, supervision, and dispute resolution across the entire
              infrastructure lifecycle—from feasibility planning to operational concession auditing.
            </p>
          </div>

          {/* Controls: Prev / Next Arrows & View All Link */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Service"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Service"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-amber-300 transition-colors pl-2"
            >
              <span>All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden -mx-3 px-3 py-2">
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-700 ease-out"
                : "transition-none"
            }`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="px-3 shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="h-full bg-slate-900/60 backdrop-blur-sm border border-white/10 hover:border-brand-gold/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/5 group">
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-brand-gold/20 transition-all duration-300">
                      {iconMap[service.id] || (
                        <ShieldCheck className="w-6 h-6 text-brand-gold" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-gold transition-colors line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold group-hover:text-amber-300 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {originalServices.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(totalOriginal + idx);
              }}
              aria-label={`Go to ${service.title}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === idx
                  ? "w-8 bg-brand-gold"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
