"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  Filter,
  MapPin,
  Gauge,
  Building2,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Layers,
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";

const categories = [
  "All",
  "Expressway",
  "National Highway",
  "State Highway",
  "Corridor",
  "Feasibility & DPR",
] as const;

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.mode.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-brand-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/Vadodra1.85753e81.jpeg"
            alt="Highway Projects"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            Portfolio & Key Assignments
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Landmark Highway Infrastructure Projects
          </h1>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Delivering independent Authority Engineer supervision, DPR solutions, and structural
            design for over 100 high-capacity expressways and state highways across India.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-[73px] z-40 bg-white border-b border-slate-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search highway, package, location (e.g. NH-50, Vadodara)..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? "bg-brand-navy text-white shadow"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Directory Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>
              Showing <strong className="text-slate-900">{filteredProjects.length}</strong> highway
              projects
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-amber-600 hover:underline"
              >
                Clear search
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Image Banner */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={p.image}
                    alt={p.shortTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-gold text-brand-dark shadow">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span className="truncate">{p.location}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-snug">
                      {p.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {p.title}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    {p.length && (
                      <div className="flex items-center gap-2">
                        <Gauge className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="font-semibold text-slate-800">{p.length}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate font-medium">{p.mode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate text-slate-500">{p.clientAuthority}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(p)}
                    className="w-full mt-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-700 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              ✕
            </button>

            <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.shortTitle}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-gold text-brand-dark">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                {selectedProject.shortTitle}
              </h3>
              <p className="text-xs text-slate-600 font-mono bg-slate-50 p-3 rounded-xl border border-slate-200">
                {selectedProject.title}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="text-slate-400 font-medium">Location</div>
                <div className="font-bold text-slate-800 mt-0.5">{selectedProject.location}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="text-slate-400 font-medium">Contract Framework</div>
                <div className="font-bold text-slate-800 mt-0.5">{selectedProject.mode}</div>
              </div>
              {selectedProject.length && (
                <div className="p-3 bg-slate-50 rounded-xl">
                  <div className="text-slate-400 font-medium">Length / Carriageway</div>
                  <div className="font-bold text-slate-800 mt-0.5">{selectedProject.length}</div>
                </div>
              )}
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="text-slate-400 font-medium">Client Authority</div>
                <div className="font-bold text-slate-800 mt-0.5">
                  {selectedProject.clientAuthority}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-navyLight"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
