import { Award, Shield, Truck, Route } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function StatsBar() {
  const icons = [
    <Award className="w-6 h-6 text-brand-gold" key="1" />,
    <Shield className="w-6 h-6 text-brand-gold" key="2" />,
    <Route className="w-6 h-6 text-brand-gold" key="3" />,
    <Truck className="w-6 h-6 text-brand-gold" key="4" />,
  ];

  return (
    <section className="bg-brand-navy border-y border-white/10 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {companyInfo.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i !== 0 ? "pt-4 md:pt-0" : ""
              }`}
            >
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 mb-3 shadow-inner">
                {icons[i % icons.length]}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                <span>{stat.value}</span>
                {stat.suffix && (
                  <span className="text-base font-semibold text-brand-gold">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-300 max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
