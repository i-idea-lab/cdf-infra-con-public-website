"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  CheckCircle2,
  Gauge,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Zap,
} from "lucide-react";
import { equipmentData, EquipmentItem } from "@/data/equipment";

export default function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem>(
    equipmentData[0]
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleSelect = (item: EquipmentItem) => {
    setSelectedEquipment(item);
    setActiveImageIndex(0);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="relative bg-brand-dark text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            Technological Assets & Fleets
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            High-Tech Survey Fleets & Non-Destructive Testing
          </h1>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Equipped with proprietary laser profilometers, falling weight deflectometers, automated
            traffic classifiers, and mobile bridge inspection units adhering to strict IRC & MoRTH guidelines.
          </p>
        </div>
      </section>

      {/* Equipment Type Filter Pills - Styled identically to Homepage */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {equipmentData.map((item) => {
              const isSelected = selectedEquipment.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                    isSelected
                      ? "bg-brand-navy text-brand-gold shadow-lg ring-2 ring-amber-400/40"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span className="font-mono mr-1.5 font-bold">[{item.acronym}]</span>
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Showcase Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Active Unit Feature Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Gallery */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center p-4">
                  <Image
                    src={selectedEquipment.images[activeImageIndex] || selectedEquipment.images[0]}
                    alt={selectedEquipment.name}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-lg text-xs font-black bg-brand-navy text-brand-gold font-mono shadow">
                      {selectedEquipment.acronym}
                    </span>
                  </div>
                </div>

                {/* Thumbnails if multiple images */}
                {selectedEquipment.images.length > 1 && (
                  <div className="flex items-center gap-3">
                    {selectedEquipment.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 bg-slate-50 transition-all ${
                          activeImageIndex === idx
                            ? "border-amber-500 ring-2 ring-amber-400/30"
                            : "border-slate-200 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-contain p-1"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Technical Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {selectedEquipment.category}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      Asset Code: {selectedEquipment.acronym}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-1">
                    {selectedEquipment.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-amber-800 font-medium">
                    {selectedEquipment.tagline}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
                    {selectedEquipment.description}
                  </p>
                </div>

                {/* Specifications Grid */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Technical Specifications
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedEquipment.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs"
                      >
                        <div className="text-slate-400 font-medium">{spec.label}</div>
                        <div className="font-bold text-slate-800 mt-0.5">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Primary Infrastructure Applications
                  </div>
                  <div className="space-y-2">
                    {selectedEquipment.applications.map((app, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick comparison grid of all 5 */}
          <div className="pt-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Complete Highway Survey & Testing Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {equipmentData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    handleSelect(item);
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    selectedEquipment.id === item.id
                      ? "bg-brand-navy text-white border-brand-gold shadow-lg"
                      : "bg-white text-slate-800 border-slate-200 hover:border-amber-400"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          selectedEquipment.id === item.id
                            ? "bg-amber-400 text-brand-dark"
                            : "bg-slate-100 text-amber-700"
                        }`}
                      >
                        {item.acronym}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold leading-snug">{item.name}</h4>
                    <p
                      className={`text-[11px] leading-tight ${
                        selectedEquipment.id === item.id ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {item.category}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-500 flex items-center gap-1 pt-1">
                    <span>Inspect Unit</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
