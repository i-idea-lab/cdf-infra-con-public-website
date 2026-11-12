import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ShieldCheck, CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import { clientsData } from "@/data/clients";

export const metadata: Metadata = {
  title: "Our Clients & Public Sector Authorities | CDF Infra Con Pvt. Ltd.",
  description:
    "Proud to partner with India’s leading national highway authorities, central ministries, and state public works departments including NHAI, MoRTH, and PWD Maharashtra.",
};

export default function ClientsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="relative bg-brand-dark text-white py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            Trusted Partnerships
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Clients & Public Sector Authorities
          </h1>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Proud to have worked with some of the best in the industry — partnering with India’s leading
            national highway authorities, central ministries, and state public works departments on
            monumental infrastructure corridors.
          </p>
        </div>
      </section>

      {/* Main Clients Grid Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Institutional Empanelment
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Statutory Highway Bodies & Government Clients
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Providing independent Authority Engineer supervision, DPR solutions, O&M audits, and
              quality assurance for apex central and state agencies nationwide.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientsData.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl hover:border-amber-400 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Logo Container */}
                  <div className="relative w-full h-24 rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center justify-center group-hover:bg-amber-50/40 transition-colors">
                    <Image
                      src={client.logo}
                      alt={client.fullName}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Authority Info */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {client.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-navy transition-colors line-clamp-1">
                      {client.fullName}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 pt-1">
                      {client.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Tag */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-600">{client.category}</span>
                  <span className="text-amber-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Official Portal</span>
                  </span>
                </div>
              </a>
            ))}

            {/* Empanelment Credentials Card */}
            <div className="bg-gradient-to-br from-brand-navy to-brand-dark text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg border border-white/10">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Grade-1 Highway Empanelment
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Empaneled as Authority Engineer & Independent Consultant across central and state
                  statutory bodies with an unbroken record of zero-fatality project audits.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-amber-300 font-mono font-bold">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>100+ Supervised Corridors</span>
              </div>
            </div>
          </div>

          {/* Quick CTA to Portfolio */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Explore Projects Executed with These Authorities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Browse our comprehensive track record across national expressways, greenfield corridors,
                and state highway white-topping upgrades.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navyLight text-brand-gold font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-md transition-all shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
