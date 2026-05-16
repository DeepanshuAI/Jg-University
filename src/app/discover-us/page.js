import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Discover Us | JG University",
};

export default function DiscoverUsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="bg-brand-deep/5 py-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900">Discover JG University</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Learn about our vision, mission, and the people behind our success.</p>
      </div>
      
      <About />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
