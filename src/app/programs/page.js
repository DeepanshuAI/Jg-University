import Programs from "@/components/Programs";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Academic Programs | JG University",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="bg-brand-deep/5 py-12 text-center">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900">Academic Programs</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Discover the pathways designed for the next generation of industry leaders.</p>
      </div>
      <Programs />
      <CTA />
    </main>
  );
}
