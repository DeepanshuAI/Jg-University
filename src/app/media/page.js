import CTA from "@/components/CTA";

export const metadata = {
  title: "Media & News | JG University",
};

export default function MediaPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="bg-brand-deep/5 py-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900">Media & News</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Stay updated with the latest happenings at our campus.</p>
      </div>
      
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-video bg-slate-100 rounded-xl mb-6 animate-pulse" />
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Campus Event Highlights {item}</h3>
              <p className="text-slate-600 mb-4 line-clamp-2">Read about the recent achievements of our students and the spectacular events that took place...</p>
              <span className="text-brand-orange font-medium text-sm">Read More →</span>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
