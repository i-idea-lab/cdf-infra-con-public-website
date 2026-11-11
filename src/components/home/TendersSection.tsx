import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { tenderPortals } from "@/data/tenders";

export default function TendersSection() {
  return (
    <section className="py-16 bg-slate-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-4xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Government Procurement & Tender Portals
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight whitespace-normal sm:whitespace-nowrap">
            Central & State Highway Portals Quick Access
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Direct gateways to official national and state infrastructure procurement authorities.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {tenderPortals.map((t) => (
            <a
              key={t.name}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-gold/50 rounded-xl p-4 flex flex-col items-center text-center justify-between transition-all group hover:-translate-y-1 shadow-sm"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/90 p-1 flex items-center justify-center mb-3">
                <Image
                  src={t.logo}
                  alt={t.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-center gap-1">
                  <span>{t.name}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-gold" />
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1">
                  {t.category}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
