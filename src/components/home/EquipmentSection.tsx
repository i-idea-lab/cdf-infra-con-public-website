"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Wrench, ShieldCheck } from "lucide-react";
import { equipmentData } from "@/data/equipment";

export default function EquipmentSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = equipmentData[activeTab];

  return (
    <section className="py-20 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Advanced Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight whitespace-normal sm:whitespace-nowrap">
            High-Tech Fleet & Testing Equipment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            In-house specialized testing instruments ensuring millimeter-level accuracy for
            pavement structural integrity, international roughness (IRI), and safety auditing.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {equipmentData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === idx
                  ? "bg-brand-navy text-brand-gold shadow-lg ring-2 ring-amber-400/40"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span className="font-mono mr-1.5 font-bold">[{item.acronym}]</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Active Item Showcase Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Box */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
              <Image
                src={current.images[0]}
                alt={current.name}
                fill
                className="object-contain p-4"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-lg text-xs font-black bg-brand-navy text-brand-gold font-mono shadow">
                  {current.acronym}
                </span>
              </div>
            </div>

            {/* Details Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {current.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm text-amber-700 font-medium">
                  {current.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                  {current.description}
                </p>
              </div>

              {/* Technical Specs 2-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.specs.map((sp) => (
                  <div
                    key={sp.label}
                    className="p-3 rounded-xl bg-white border border-slate-200 text-xs"
                  >
                    <div className="text-slate-400 font-medium">{sp.label}</div>
                    <div className="font-bold text-slate-800 mt-0.5">{sp.value}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/equipment"
                  className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navyLight text-white font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <span>Explore Full Equipment Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
