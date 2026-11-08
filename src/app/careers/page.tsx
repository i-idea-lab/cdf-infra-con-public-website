"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Send,
  Building,
  GraduationCap,
  Users,
  ShieldCheck,
} from "lucide-react";
import { careerOpenings, CareerOpening } from "@/data/careers";
import { companyInfo } from "@/data/company";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantExp, setApplicantExp] = useState("");
  const [applicationSent, setApplicationSent] = useState(false);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSent(true);
    // Construct pre-filled mailto link for direct delivery
    const subject = encodeURIComponent(
      `Job Application: ${selectedJob?.title} - ${applicantName}`
    );
    const body = encodeURIComponent(
      `Dear HR Team,\n\nI wish to apply for the position of ${selectedJob?.title}.\n\nName: ${applicantName}\nEmail: ${applicantEmail}\nPhone: ${applicantPhone}\nExperience: ${applicantExp} years\n\n(Resume attached)`
    );
    window.open(`mailto:${companyInfo.emails.careers}?subject=${subject}&body=${body}`);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-brand-dark text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            Join Our Engineering Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Building Careers & National Corridors
          </h1>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Be part of an elite consultancy shaping India’s premier expressways, bridge structures,
            and highway asset management systems.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Why Join CDF Infra Con?
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              A Culture of Technical Rigor, Mentorship & Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-gold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Direct Mentorship</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Work alongside former Chief Engineers of PWD Maharashtra and IRC Arbitrators,
                gaining forensic engineering expertise on monumental contracts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-gold">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Landmark National Portfolios</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Supervise landmark national projects—including 8-lane Bharatmala Expressways,
                DBFOT tollways, and major river bridges.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Cutting-Edge Instruments</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hands-on exposure to high-tech Network Survey Vehicles (NSV), Falling Weight
                Deflectometers (FWD), and Mobile Bridge Inspection Units (MBIU).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Openings Directory */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Current Open Positions</h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Explore specialized vacancies across project sites and Pune corporate office.
              </p>
            </div>
            <div className="text-xs text-slate-500">
              Direct resume submission:{" "}
              <a
                href={`mailto:${companyInfo.emails.careers}`}
                className="font-bold text-amber-600 hover:underline"
              >
                {companyInfo.emails.careers}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{job.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setApplicationSent(false);
                    }}
                    className="w-full py-3 rounded-xl bg-brand-navy hover:bg-brand-navyLight text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Apply for Position</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              ✕
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Job Application
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {selectedJob.location} • {selectedJob.experience}
              </p>
            </div>

            {applicationSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">
                  Application Initiated!
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Your email client should open with pre-filled details to send your resume directly to{" "}
                  <strong>{companyInfo.emails.careers}</strong>.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="mt-4 px-6 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Years of Relevant Civil / Highway Experience
                  </label>
                  <input
                    type="text"
                    value={applicantExp}
                    onChange={(e) => setApplicantExp(e.target.value)}
                    placeholder="e.g. 6 Years"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Submitting will connect you with CDF Infra Con HR at{" "}
                  <strong>{companyInfo.emails.careers}</strong> with your application profile.
                </p>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand-gold hover:bg-amber-400 text-brand-dark font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Submit & Email Resume</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
