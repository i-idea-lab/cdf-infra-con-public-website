import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { clientsData } from "@/data/clients";

export default function ClientLogosSection() {
  return (
    <section id="our-clients" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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

        {/* Clean Client Logos Row / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
          {clientsData.map((client) => (
            <Link
              key={client.name}
              href="/clients"
              className="bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-amber-400 transition-all duration-300 group hover:-translate-y-1 h-36"
              title={`${client.fullName} - View Details`}
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.fullName}
                  fill
                  className="object-contain p-1 filter group-hover:contrast-125 transition-all"
                />
              </div>
              <span className="mt-3 text-xs font-bold text-slate-700 group-hover:text-amber-600 transition-colors font-mono line-clamp-1">
                {client.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Link to Full Clients Page */}
        <div className="text-center pt-2">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy hover:text-amber-600 transition-colors uppercase tracking-wider group"
          >
            <span>View All Statutory Authorities & Empanelments</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
