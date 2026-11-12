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
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/services";

export const metadata = {
  title: "Our Services | CDF Infra Con Pvt. Ltd.",
  description:
    "Explore our 7 core infrastructure consulting verticals: Authority Engineer, DPR Feasibility, O&M Supervision, Road Safety Audits, PMC, Design Engineering, and Arbitration.",
};

const iconMap: Record<string, React.ReactNode> = {
  "authority-engineer": <ShieldCheck className="w-8 h-8 text-brand-gold" />,
  dpr: <FileSpreadsheet className="w-8 h-8 text-brand-gold" />,
  maintenance: <Wrench className="w-8 h-8 text-brand-gold" />,
  safety: <AlertTriangle className="w-8 h-8 text-brand-gold" />,
  "project-management": <Layers className="w-8 h-8 text-brand-gold" />,
  "design-engineering": <Compass className="w-8 h-8 text-brand-gold" />,
  Arbitration: <Scale className="w-8 h-8 text-brand-gold" />,
};

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Building Infrastructure, Connecting Communities
          </h1>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Delivering innovative engineering solutions that transform transportation infrastructure
            with precision, safety, and sustainable design across India.
          </p>
        </div>
      </section>

      {/* Services List Detailed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center shadow-md">
                      {iconMap[s.id]}
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      CDF Vertical
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {s.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.fullDescription}
                  </p>

                  {/* Scope of Work Sample */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Scope Elements
                    </div>
                    {s.scopeOfWork.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${s.id}`}
                    className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navyLight text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-sm"
                  >
                    <span>Full Vertical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
