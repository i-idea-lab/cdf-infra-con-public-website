import { Award, Shield, Route, Truck } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function StatsBar() {
  const icons = [
    <Award className="w-6 h-6 text-brand-gold shrink-0" key="1" />,
    <Shield className="w-6 h-6 text-brand-gold shrink-0" key="2" />,
    <Route className="w-6 h-6 text-brand-gold shrink-0" key="3" />,
    <Truck className="w-6 h-6 text-brand-gold shrink-0" key="4" />,
  ];

  return (
    <section className="bg-brand-navy border-y border-white/10 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {companyInfo.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center justify-start sm:justify-center gap-3.5 sm:gap-4 ${
                i % 2 === 1 && i < 2 ? "sm:pl-6" : ""
              } ${i > 1 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
            >
              {/* Icon Badge on the left */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                {icons[i % icons.length]}
              </div>

              {/* Numeric Data & Text to the right of the icon */}
              <div className="text-left">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-none">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-xs sm:text-sm lg:text-base font-bold text-brand-gold">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-300 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
