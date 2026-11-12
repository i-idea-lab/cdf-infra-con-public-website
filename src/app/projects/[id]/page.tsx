import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  Gauge,
  Building2,
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  Layers,
  ArrowRight,
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: "Project Not Found | CDF Infra Con",
    };
  }
  return {
    title: `${project.shortTitle} | Project Details | CDF Infra Con Pvt. Ltd.`,
    description: project.description.slice(0, 160),
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Related projects in the same category
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/projects" className="hover:text-brand-gold transition-colors">
            Projects
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
            {project.shortTitle}
          </span>
        </nav>

        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy hover:text-amber-600 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Main Details Card (Derived directly from Project Modal) */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-8">
          {/* Main Photo Banner */}
          <div className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <Image
              src={project.image}
              alt={project.shortTitle}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold text-brand-dark shadow">
                {project.category}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl text-white text-xs sm:text-sm font-medium flex items-center gap-2 border border-white/10 w-fit">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>

          {/* Additional Gallery Images if available */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Project Gallery Photos
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-slate-200 bg-slate-100"
                  >
                    <Image
                      src={img}
                      alt={`${project.shortTitle} view ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Title & Official Contract Designation */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              {project.shortTitle}
            </h1>
            <div className="text-xs sm:text-sm text-slate-700 font-mono bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-relaxed">
              <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-sans font-semibold mb-1">
                Official Contract Scope
              </span>
              {project.title}
            </div>
          </div>

          {/* 4 Specifications Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Location</span>
              </div>
              <div className="font-bold text-slate-800 text-sm mt-1">{project.location}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <Building2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Contract Framework</span>
              </div>
              <div className="font-bold text-slate-800 text-sm mt-1">{project.mode}</div>
            </div>

            {project.length ? (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                  <Gauge className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Length / Carriageway</span>
                </div>
                <div className="font-bold text-slate-800 text-sm mt-1">{project.length}</div>
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                  <Layers className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Category</span>
                </div>
                <div className="font-bold text-slate-800 text-sm mt-1">{project.category}</div>
              </div>
            )}

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Client Authority</span>
              </div>
              <div className="font-bold text-slate-800 text-sm mt-1">
                {project.clientAuthority}
              </div>
            </div>
          </div>

          {/* Detailed Scope & Description */}
          <div className="space-y-3 pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Project Description & Engineering Scope
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects List</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navyLight text-brand-gold font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Consult with Authority Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Related Projects in same category if any */}
        {relatedProjects.length > 0 && (
          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-bold text-slate-900">
              More {project.category} Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/projects/${rel.id}`}
                  className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="relative h-40 rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={rel.image}
                      alt={rel.shortTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {rel.shortTitle}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {rel.location}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Project Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
