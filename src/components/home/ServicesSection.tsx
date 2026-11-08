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
  const servicesList = Object.values(servicesData);

  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-navy/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Comprehensive Engineering Solutions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Delivering specialized consulting, supervision, and dispute resolution across the entire
              infrastructure lifecycle—from feasibility planning to operational concession auditing.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-amber-300 transition-colors shrink-0"
          >
            <span>Explore All 7 Verticals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-gold/50 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {iconMap[service.id]}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-brand-gold group-hover:text-amber-300">
                <span>View Scope of Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
