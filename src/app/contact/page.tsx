"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
  QrCode,
} from "lucide-react";
import { companyInfo } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open email client with message pre-filled to info@cdfic.com
      const mailSubject = encodeURIComponent(
        formData.subject
          ? `Inquiry: ${formData.subject}`
          : `Website Inquiry from ${formData.name}`
      );
      const mailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      window.open(
        `mailto:${companyInfo.emails.general}?subject=${mailSubject}&body=${mailBody}`
      );
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="relative bg-brand-dark text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
            Headquarters & Inquiries
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Connect with Our Infrastructure Specialists
          </h1>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out regarding independent engineer tenders, DPR preparation, pavement testing
            equipment mobilization, or techno-legal dispute advisory.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Direct Dispatch
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Send Us a Project Inquiry
                </h2>
                <p className="text-xs text-slate-500">
                  Our engineering team will respond within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-950">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Your inquiry has been generated. Your email client will send this directly to{" "}
                    <strong>{companyInfo.emails.general}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="rajesh@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 93717 49999"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service Discipline of Interest
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none text-slate-700"
                      >
                        <option value="">Select a vertical...</option>
                        <option value="Authority / Independent Engineer">
                          Authority / Independent Engineer
                        </option>
                        <option value="Detailed Project Report (DPR)">
                          Detailed Project Report (DPR)
                        </option>
                        <option value="Operation & Maintenance (O&M)">
                          Operation & Maintenance (O&M)
                        </option>
                        <option value="Road Safety Audits">Road Safety Audits</option>
                        <option value="Pavement Testing / NSV / FWD">
                          Pavement Testing / NSV / FWD
                        </option>
                        <option value="Technical Arbitration & Claims">
                          Technical Arbitration & Claims
                        </option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Details / Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please specify project stretch, package, client authority, and scope..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-brand-gold hover:bg-amber-400 text-brand-dark font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <span>
                      {isSubmitting ? "Dispatching Inquiry..." : "Dispatch Message"}
                    </span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Verified Corporate Contacts & QR */}
            <div className="lg:col-span-5 space-y-6">
              {/* Corporate Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-md space-y-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Head Office Information
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-navy/10 text-brand-navy shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Corporate Address</div>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {companyInfo.address.line1}, {companyInfo.address.line2},{" "}
                        {companyInfo.address.city}, {companyInfo.address.state} -{" "}
                        {companyInfo.address.pincode}, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-navy/10 text-brand-navy shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Direct Telephones</div>
                      <div className="mt-1 flex flex-col gap-1">
                        <a
                          href={`tel:${companyInfo.phones[0].value}`}
                          className="text-amber-700 hover:underline font-mono text-xs font-semibold"
                        >
                          {companyInfo.phones[0].display}
                        </a>
                        <a
                          href={`tel:${companyInfo.phones[1].value}`}
                          className="text-amber-700 hover:underline font-mono text-xs font-semibold"
                        >
                          {companyInfo.phones[1].display}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-navy/10 text-brand-navy shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Official Emails</div>
                      <div className="mt-1 flex flex-col gap-1 text-xs">
                        <a
                          href={`mailto:${companyInfo.emails.general}`}
                          className="text-amber-700 hover:underline"
                        >
                          {companyInfo.emails.general}
                        </a>
                        <a
                          href={`mailto:${companyInfo.emails.careers}`}
                          className="text-amber-700 hover:underline"
                        >
                          {companyInfo.emails.careers}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-navy/10 text-brand-navy shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Operating Hours</div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {companyInfo.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Digital Contact Scanner */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0">
                    <Image
                      src="/assets/scanner.jpeg"
                      alt="CDF Infra Con Digital vCard QR"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <QrCode className="w-3.5 h-3.5 text-amber-600" />
                      <span>Instant Digital vCard</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Scan with your smartphone camera to save CDF Infra Con credentials directly to your contacts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Section */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Office Location • Viman Nagar, Pune</span>
              </span>
              <a
                href="https://maps.google.com/?q=CDF+INFRA+CON+PVT+LTD+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>
            <iframe
              src={companyInfo.mapUrl}
              className="w-full h-80 sm:h-96 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CDF Infra Con Pune Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
