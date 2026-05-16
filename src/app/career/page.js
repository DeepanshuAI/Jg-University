import CTA from "@/components/CTA";

export const metadata = {
  title: "Career Opportunities | JG University",
};

export default function CareerPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="bg-brand-deep/5 py-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900">Join Our Team</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Shape the future of education by building a career with us.</p>
      </div>
      
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {["Professor of Artificial Intelligence", "Senior UI/UX Designer", "Student Counselor", "Research Assistant"].map((job, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">{job}</h3>
                <p className="text-slate-500">Full-time • On-site</p>
              </div>
              <button className="px-6 py-3 bg-brand-orange text-white font-medium rounded-full hover:bg-brand-deep transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
