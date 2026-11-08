import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, Award, FileText } from "lucide-react";

export default function AboutOverview() {
  const highlights = [
    "Empanelled Authority Engineer for NHAI & MoRTH projects",
    "Specialized in Hybrid Annuity Mode (HAM), DBFOT & EPC supervision",
    "Comprehensive in-house non-destructive testing equipment (NSV, FWD, MBIU)",
    "Led by former PWD Chief Engineers & IRC Empanelled Arbitrators",
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/proabout1.56d14503.jpeg"
                alt="CDF Infra Con Highway Engineering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  Engineering Precision
                </span>
                <p className="text-base font-bold sm:text-lg">
                  Over Two Decades of Pioneering Highway Engineering in India
                </p>
              </div>
            </div>

            {/* Overlapping secondary badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-navy text-white p-5 rounded-xl shadow-xl border border-white/10 hidden sm:flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/20 flex items-center justify-center shrink-0">
                <Award className="w-7 h-7 text-brand-gold" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">100+ Key Projects</div>
                <div className="text-xs text-slate-300">
                  Delivered with Zero Quality Compromise
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                About Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Building Durable Infrastructure with Vision & Integrity
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              <strong className="text-slate-900 font-semibold">CDF Infra Con Private Limited</strong> has
              laid its foundation on the promise of non-compromised commitment, technical rigor, and
              rapid turnaround in infrastructure development.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Backed by specialized non-destructive pavement testing fleets and an elite team of former
              PWD Chief Engineers, we spearhead independent supervision, DPR preparation, and
              concessionaire compliance across major national corridors.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    {h}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navyLight text-white font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-md transition-all"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/equipment"
                className="text-xs font-semibold text-brand-navy hover:text-amber-600 transition-colors"
              >
                Explore Testing Fleets →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
