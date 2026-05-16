import CTA from "@/components/CTA";

export const metadata = {
  title: "Collaborations | JG University",
};

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="bg-brand-deep/5 py-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900">Global Collaborations</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Partnering with leading institutions and industries worldwide.</p>
      </div>
      
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="glass-card rounded-[2rem] p-12 shadow-xl border border-slate-100">
          <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">Expanding Horizons</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Our strategic partnerships with global universities and multinational corporations provide our students with unparalleled opportunities for international exchange, joint research, and premium internships.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder for partner logos */}
             <div className="h-16 bg-slate-200 rounded-lg animate-pulse" />
             <div className="h-16 bg-slate-200 rounded-lg animate-pulse" />
             <div className="h-16 bg-slate-200 rounded-lg animate-pulse" />
             <div className="h-16 bg-slate-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
