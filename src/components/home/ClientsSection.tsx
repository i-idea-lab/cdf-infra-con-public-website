import Image from "next/image";
import { ExternalLink, ShieldCheck, Building2, CheckCircle2 } from "lucide-react";
import { clientsData } from "@/data/clients";

export default function ClientsSection() {
  return (
    <section id="our-clients" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Trusted Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Clients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Proud to have worked with some of the best in the industry — partnering with India’s leading
            national highway authorities, central ministries, and state public works departments.
          </p>
        </div>

        {/* Clients Cards Grid */}
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

          {/* Quick Credential Callout Card */}
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
      </div>
    </section>
  );
}
