import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Scale, Briefcase } from "lucide-react";
import { leadershipData } from "@/data/leadership";

export default function LeadershipSection() {
  const executives = leadershipData.filter((l) => l.isExecutive);
  const advisors = leadershipData.filter((l) => !l.isExecutive);

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Executive Direction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight whitespace-normal sm:whitespace-nowrap">
            Leadership That Drives Engineering Excellence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Guided by former Chief Engineers of PWD Maharashtra and senior infrastructure
            arbitrators with unmatched domain mastery.
          </p>
        </div>

        {/* Executive Directors Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {executives.map((exec) => (
            <div
              key={exec.slug}
              className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Photo Area */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-200">
                <Image
                  src={exec.photo}
                  alt={exec.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {exec.role}
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-white">{exec.name}</h3>
                  <p className="text-xs text-slate-300">{exec.designation}</p>
                </div>
              </div>

              {/* Bio Summary */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {exec.shortBio}
                </p>

                {/* Primary Credential Pill */}
                {exec.credentials[0] && (
                  <div className="pt-2 border-t border-slate-200">
                    <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{exec.credentials[0]}</span>
                    </div>
                  </div>
                )}

                <Link
                  href={`/leadership/${exec.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-amber-600 transition-colors uppercase tracking-wider pt-2"
                >
                  <span>View Leadership Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Advisory Panel Showcase */}
        <div className="pt-8 border-t border-slate-200">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              Senior Technical Advisory Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Distinguished bridge engineers, materials specialists, and planning authorities.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {advisors.map((adv) => (
              <Link
                key={adv.slug}
                href={`/leadership/${adv.slug}`}
                className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:border-brand-gold/60 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-slate-200 group-hover:border-brand-gold transition-colors">
                  <Image
                    src={adv.photo}
                    alt={adv.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-sm font-bold text-brand-navy">
                  {adv.name}
                </h4>
                <p className="text-[11px] font-medium text-amber-600 mt-0.5">
                  {adv.designation}
                </p>
                <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {adv.shortBio}
                </p>
                <span className="mt-3 text-[11px] font-bold text-brand-navy group-hover:text-amber-600 inline-flex items-center gap-1 transition-colors">
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
