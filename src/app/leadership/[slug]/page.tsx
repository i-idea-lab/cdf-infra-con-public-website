import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Scale,
  Briefcase,
  Building,
  CheckCircle2,
} from "lucide-react";
import { leadershipData, LeaderMember } from "@/data/leadership";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return leadershipData.map((l) => ({
    slug: l.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const leader = leadershipData.find((l) => l.slug === params.slug);
  if (!leader) return { title: "Leadership Profile Not Found" };
  return {
    title: `${leader.name} - ${leader.role} | CDF Infra Con Pvt. Ltd.`,
    description: leader.shortBio,
  };
}

export default function LeadershipDetailPage({ params }: PageProps) {
  const leader = leadershipData.find((l) => l.slug === params.slug);

  if (!leader) {
    notFound();
  }

  const otherLeaders = leadershipData.filter((l) => l.slug !== leader.slug);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/about-us" className="hover:text-brand-gold transition-colors">
              Leadership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">{leader.name}</span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            {leader.role}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {leader.name}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            {leader.designation}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg p-3">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-xs text-amber-600 font-semibold mt-0.5">
                  {leader.role}
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-brand-navy">100+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Highways Supervised
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-brand-navy">20+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Credentials, Committees */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio Narrative */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Executive Biography & Background
              </h2>
              <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                {leader.fullBio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Formatted Credentials Badges */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
                <Award className="w-5 h-5 text-amber-600" />
                <span>Professional Empanelments & Accreditations</span>
              </div>
              <div className="space-y-2.5 pt-2">
                {leader.credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-150 flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Committees (if present) */}
            {leader.committees && leader.committees.length > 0 && (
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-3xl p-8 space-y-4">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-lg">
                  <Scale className="w-5 h-5 text-amber-700" />
                  <span>Key Committee Appointments</span>
                </div>
                <div className="space-y-2">
                  {leader.committees.map((com, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/80 border border-amber-200 text-xs text-amber-900 font-medium flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      <span>{com}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other Leaders Directory */}
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Other Executive & Technical Leaders
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {otherLeaders.slice(0, 3).map((other) => (
                  <Link
                    key={other.slug}
                    href={`/leadership/${other.slug}`}
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-500 transition-colors block text-xs"
                  >
                    <div className="font-bold text-slate-900 truncate">{other.name}</div>
                    <div className="text-[11px] text-amber-600 truncate">{other.role}</div>
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
