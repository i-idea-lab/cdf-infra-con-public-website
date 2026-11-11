import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Gaurav Malewar",
    role: "SQME",
    comment:
      "Working with M/s CDF Infra has been a professionally enriching experience, showcasing their unwavering commitment to quality and engineering excellence.",
  },
  {
    name: "Krushandev Mahadkar",
    role: "SQME",
    comment:
      "M/s CDF Infra’s professionalism and commitment to engineering excellence are evident in every phase of the project.",
  },
  {
    name: "Digvijay F. Patankar",
    role: "Senior Pavement Specialist",
    comment:
      "Working with M/s CDF Infra as a Senior Pavement Specialist has been a rewarding experience, marked by technical excellence and strong project execution. Their commitment to quality, coordination, and timely decisions ensures smooth and impactful infrastructure development.",
  },
  {
    name: "Dilip Palve",
    role: "Resident Engineer",
    comment:
      "A benchmark organization in infrastructure consultancy. The leadership team leads from the front with rigorous on-site supervision, structural proof checking, and total commitment to quality.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Industry Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client & Partner Testimonials
          </h2>
          <p className="text-slate-600 text-sm">
            What project authorities, contractors, and concessionaires say about our technical rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-sm font-bold text-slate-900">{t.name}</div>
                <div className="text-[11px] text-amber-700 font-medium">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
