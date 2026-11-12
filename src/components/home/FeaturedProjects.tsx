"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Gauge, Building2 } from "lucide-react";
import { projectsData } from "@/data/projects";

const categories = [
  "All",
  "Expressway",
  "National Highway",
  "State Highway",
  "Corridor",
] as const;

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData.slice(0, 6)
      : projectsData.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header and Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight whitespace-normal sm:whitespace-nowrap">
              Monumental Infrastructure Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              A track record of supervising and delivering critical national freight corridors,
              hybrid annuity expressways, and state highway networks.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-brand-navy text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.shortTitle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-gold text-brand-dark shadow">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-snug line-clamp-2">
                    {project.shortTitle}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Meta details */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  {project.length && (
                    <div className="flex items-center gap-2">
                      <Gauge className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="font-semibold text-slate-800">
                        {project.length}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">{project.mode}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-amber-600 uppercase tracking-wider transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Footer */}
        <div className="text-center pt-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navyLight text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-lg transition-all"
          >
            <span>View Complete Project Directory (100+ Works)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
