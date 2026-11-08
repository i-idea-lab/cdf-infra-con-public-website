import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  FileSpreadsheet,
  Wrench,
  AlertTriangle,
  Layers,
  Compass,
  Scale,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  PhoneCall,
  HardHat,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { companyInfo } from "@/data/company";

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({
    id,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const service = servicesData[params.id];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | CDF Infra Con Pvt. Ltd.`,
    description: service.shortDescription,
  };
}

const iconMap: Record<string, React.ReactNode> = {
  "authority-engineer": <ShieldCheck className="w-10 h-10 text-brand-gold" />,
  dpr: <FileSpreadsheet className="w-10 h-10 text-brand-gold" />,
  maintenance: <Wrench className="w-10 h-10 text-brand-gold" />,
  safety: <AlertTriangle className="w-10 h-10 text-brand-gold" />,
  "project-management": <Layers className="w-10 h-10 text-brand-gold" />,
  "design-engineering": <Compass className="w-10 h-10 text-brand-gold" />,
  Arbitration: <Scale className="w-10 h-10 text-brand-gold" />,
};

export default function ServiceDetailPage({ params }: PageProps) {
  const service = servicesData[params.id];

  if (!service) {
    notFound();
  }

  const otherServices = Object.values(servicesData).filter((s) => s.id !== service.id);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/services" className="hover:text-brand-gold transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">{service.title}</span>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 shadow-lg">
              {iconMap[service.id]}
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                Consulting Vertical
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Detailed Vertical Overview
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {service.fullDescription}
              </p>

              {/* Key Highlights Box */}
              <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-6 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Engineering Value Proposition
                </div>
                <div className="space-y-2">
                  {service.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scope of Work */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Scope of Work & Deliverables
              </h2>
              <div className="space-y-4">
                {service.scopeOfWork.map((scope, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-150 flex items-start gap-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Consultation Box */}
            <div className="bg-brand-navy rounded-3xl p-6 text-white shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Engage Our Consultants
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our senior partners regarding technical tenders,
                independent engineering, or dispute advisory.
              </p>
              <div className="pt-2 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-300 font-medium">
                  <PhoneCall className="w-4 h-4 text-brand-gold" />
                  <span>{companyInfo.phones[0].display}</span>
                </div>
                <div className="text-slate-400">
                  {companyInfo.emails.general}
                </div>
              </div>
              <Link
                href="/contact"
                className="block text-center w-full py-3 bg-brand-gold hover:bg-amber-400 text-brand-dark font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
              >
                Inquire About {service.title}
              </Link>
            </div>

            {/* Other Services Menu */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                All Consulting Verticals
              </h4>
              <div className="space-y-1">
                {otherServices.map((other) => (
                  <Link
                    key={other.id}
                    href={`/services/${other.id}`}
                    className="block px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-navy transition-colors"
                  >
                    {other.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
