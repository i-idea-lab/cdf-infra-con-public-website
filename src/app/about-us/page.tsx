import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HardHat,
  ArrowRight,
  TrendingUp,
  Target,
  Compass,
} from "lucide-react";
import StatsBar from "@/components/home/StatsBar";
import LeadershipSection from "@/components/home/LeadershipSection";

export const metadata = {
  title: "About Us | CDF Infra Con Pvt. Ltd.",
  description:
    "Learn about CDF Infra Con's history, executive leadership, technical expertise, and two decades of infrastructure engineering excellence across India.",
};

const expertiseAreas = [
  {
    title: "Highway & Expressway Construction",
    description:
      "Specializing in multi-lane national and state corridors, Greenfield expressways under Bharatmala Pariyojana, rigid concrete pavements, and high-speed interchanges.",
    icon: <Compass className="w-6 h-6 text-brand-gold" />,
  },
  {
    title: "Bridges, Tunnels & Elevated Viaducts",
    description:
      "Meticulous structural engineering, hydraulic design, and construction supervision for river bridges, flyovers, ROBs, and mountainous ghat alignments.",
    icon: <HardHat className="w-6 h-6 text-brand-gold" />,
  },
  {
    title: "Urban Infrastructure & Ring Roads",
    description:
      "Modern arterial road bypasses, grade-separated junctions, and freight bypasses diverting intercity traffic around dense municipal centers.",
    icon: <TrendingUp className="w-6 h-6 text-brand-gold" />,
  },
  {
    title: "Comprehensive Drainage & Slope Stabilization",
    description:
      "Advanced hydrological modeling, reinforced retaining structures, breast walls, and deep-cut drainage systems engineered for extreme monsoon conditions.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="relative bg-brand-dark text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/proabout1.56d14503.jpeg"
            alt="About CDF Infra Con"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            About Our Organization
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Building Futures with Vision, Precision & Integrity
          </h1>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            CDF Infra Con Private Limited has established itself as an uncompromised benchmark in
            highway consultancy, construction supervision, and infrastructure dispute resolution.
          </p>
        </div>
      </section>

      {/* Main Corporate Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Two Decades of Non-Compromised Quality & Service Delivery
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                CDF Infra Con Private Limited was incorporated to fulfill the critical demand for
                rigorous, neutral, and technically advanced engineering oversight in India’s
                rapidly modernizing highway sector.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Operating successfully across India—with major footprint in Maharashtra, Gujarat,
                and Uttar Pradesh—we excel in some of the country’s most demanding highway contracts
                delivered within compressed turnaround times. Our deep experience spans Public-Private
                Partnership (PPP) models, Hybrid Annuity Mode (HAM), and EPC concessions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Target className="w-4 h-4 text-amber-600" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    To deliver sustainable, safe, and durable transportation corridors by applying
                    forensic engineering standards and proactive on-site supervision.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Our Quality Credo</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Zero compromise on materials specifications, IRC design compliance, and
                    safety benchmarks across all project milestones.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/assets/about2.e0c50f34.jpeg"
                  alt="CDF Infra Con Highway Inspection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-xl overflow-hidden shadow border-2 border-white">
                  <Image
                    src="/assets/proabout1.56d14503.jpeg"
                    alt="Highway site inspection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 rounded-xl overflow-hidden shadow border-2 border-white">
                  <Image
                    src="/assets/Vadodra4.d8559947.jpeg"
                    alt="Expressway Pavement Concrete"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Pillars of Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Technical Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Engineering Domains
            </h2>
            <p className="text-slate-600 text-sm">
              Tailored civil and structural engineering solutions delivered across the asset lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* CTA Box */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Collaborate on Your Next Major Infrastructure Assignment?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Contact our Pune headquarters to engage our Authority Engineers, DPR teams, or
            technical dispute resolution consultants.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-brand-gold hover:bg-amber-400 text-brand-dark font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Get in Touch with Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
