"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  HardHat,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { companyInfo } from "@/data/company";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Projects", href: "/projects" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Authority Engineer", href: "/services/authority-engineer" },
      { name: "Detailed Project Report (DPR)", href: "/services/dpr" },
      { name: "O&M Supervision", href: "/services/maintenance" },
      { name: "Road Safety Consulting", href: "/services/safety" },
      { name: "Project Management (PMC)", href: "/services/project-management" },
      { name: "Design Engineering", href: "/services/design-engineering" },
      { name: "Technical Arbitration", href: "/services/Arbitration" },
    ],
  },
  { name: "Our Clients", href: "/clients" },
  { name: "Equipment", href: "/equipment" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Contact Bar */}
      <div className="bg-brand-dark border-b border-white/10 text-xs text-slate-300 py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Sakore Nagar, Viman Nagar, Pune, Maharashtra</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <HardHat className="w-3.5 h-3.5 text-brand-gold" />
              <span>ISO 9001:2015 Certified Infrastructure Firm</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${companyInfo.phones[0].value}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-brand-gold transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{companyInfo.phones[0].display}</span>
            </a>
            <a
              href={`mailto:${companyInfo.emails.general}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-brand-gold transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>{companyInfo.emails.general}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10"
            : "bg-brand-navy py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-gold to-brand-amber flex items-center justify-center text-brand-dark font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              CDF
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                CDF INFRA CON
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-300 font-medium">
                Pvt. Ltd. • Infrastructure Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.submenu) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-all ${
                        isActive
                          ? "text-brand-gold bg-white/10"
                          : "text-slate-200 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-brand-gold" />
                    </Link>

                    {/* Services Submenu Mega-flyout */}
                    <div
                      className={`absolute left-0 top-full pt-2 w-72 transition-all duration-200 transform origin-top-left ${
                        servicesDropdown
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="bg-brand-dark border border-white/10 rounded-xl shadow-2xl p-2 backdrop-blur-xl space-y-1">
                        <div className="px-3 py-2 border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400">
                          Consulting Verticals
                        </div>
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-3 py-2 text-xs rounded-lg font-medium transition-all ${
                              pathname === sub.href
                                ? "bg-brand-gold text-brand-dark font-semibold"
                                : "text-slate-300 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "text-brand-gold bg-white/10 font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Header CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-amber hover:from-amber-400 hover:to-amber-600 text-brand-dark font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${companyInfo.phones[0].value}`}
              className="p-2 text-brand-gold hover:text-white rounded-lg bg-white/5"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-brand-gold text-brand-dark font-semibold"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-1 space-y-1 border-l-2 border-amber-500/30 ml-4 mb-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block px-3 py-1.5 text-xs rounded-md transition-colors ${
                          pathname === sub.href
                            ? "text-brand-gold font-semibold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/contact"
              className="w-full text-center bg-brand-gold text-brand-dark font-semibold py-2.5 rounded-lg text-sm"
            >
              Request Project Consultation
            </Link>
            <div className="text-center text-xs text-slate-400 mt-2">
              📞 {companyInfo.phones[0].display} | ✉️ {companyInfo.emails.general}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
