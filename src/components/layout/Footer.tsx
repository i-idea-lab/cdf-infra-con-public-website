import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import { companyInfo } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Decorative top accent glow */}
      <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-gold to-brand-amber flex items-center justify-center text-brand-dark font-black text-xl shadow-lg">
                CDF
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  CDF INFRA CON
                </span>
                <p className="text-[11px] uppercase tracking-wider text-slate-400">
                  Private Limited
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              A premier infrastructure and highway engineering consultancy in India.
              Delivering independent Authority Engineer supervision, DPR solutions,
              Operation & Maintenance oversight, and techno-legal arbitration for monumental
              national highway corridors.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  {companyInfo.address.line1}, {companyInfo.address.line2},{" "}
                  {companyInfo.address.city}, {companyInfo.address.state} -{" "}
                  {companyInfo.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <div className="flex gap-3">
                  <a
                    href={`tel:${companyInfo.phones[0].value}`}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {companyInfo.phones[0].display}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:${companyInfo.phones[1].value}`}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {companyInfo.phones[1].display}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <div className="flex gap-3">
                  <a
                    href={`mailto:${companyInfo.emails.general}`}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {companyInfo.emails.general}
                  </a>
                  <span>/</span>
                  <a
                    href={`mailto:${companyInfo.emails.careers}`}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {companyInfo.emails.careers}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{companyInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Consulting Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-400 border-b border-white/10 pb-2">
              Services
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/services/authority-engineer"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  Authority Engineer
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dpr"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  Detailed Project Report (DPR)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  O&M Supervision
                </Link>
              </li>
              <li>
                <Link
                  href="/services/safety"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  Road Safety Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/project-management"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  Project Management (PMC)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design-engineering"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  Design Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/Arbitration"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  Arbitration & Dispute Resolution
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Sectors & Equipment */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-400 border-b border-white/10 pb-2">
              Sectors & Assets
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-400">Expressways & Greenfield Corridors</li>
              <li className="text-slate-400">Highways, Bridges & Tunnels</li>
              <li className="text-slate-400">Urban Bypass Infrastructure</li>
              <li className="text-slate-400">Industrial & Tourist Circuits</li>
              <li className="pt-2 font-medium text-slate-200">
                <Link
                  href="/equipment"
                  className="text-brand-gold hover:underline inline-flex items-center gap-1"
                >
                  Advanced Testing Equipment
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li className="text-slate-400">NSV (Network Survey Vehicle)</li>
              <li className="text-slate-400">FWD (Falling Weight Deflectometer)</li>
              <li className="text-slate-400">ATCC & Mobile Bridge Inspection</li>
            </ul>
          </div>

          {/* Column 4: Key Projects & Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-400 border-b border-white/10 pb-2">
              Flagship Projects
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/projects/vadodara-mumbai-expressway-pkg16"
                  className="hover:text-brand-gold transition-colors block"
                >
                  Vadodara Mumbai Expressway PKG-16
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/khed-sinnar-nh50"
                  className="hover:text-brand-gold transition-colors block"
                >
                  NH-50 Khed - Sinnar 4-Laning (138 Km)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/fagne-gujarat-border-nh6"
                  className="hover:text-brand-gold transition-colors block"
                >
                  NH-6 Fagne to Gujarat Border (141 Km)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/mahabaleshwar-satara-sh140"
                  className="hover:text-brand-gold transition-colors block"
                >
                  SH-140 Mahabaleshwar - Satara (71 Km)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/malharpeth-pandharpur-sh143"
                  className="hover:text-brand-gold transition-colors block"
                >
                  SH-143 Malharpeth - Pandharpur (98 Km)
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/projects"
                  className="text-brand-gold hover:underline font-medium inline-flex items-center gap-1"
                >
                  View All Projects Portfolio
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li className="pt-3 border-t border-white/10">
                <Link
                  href="/careers"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  Careers & Job Openings
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  Our Clients & Authorities
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-10 mt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} CDF Infracon Private Limited. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/careers"
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/clients"
              className="hover:text-white transition-colors"
            >
              Our Clients
            </Link>
            <a
              href={companyInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={companyInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              X (Twitter)
            </a>
            <a
              href={companyInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href={companyInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
