import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Leaders from "@/components/Leaders";
import Faculty from "@/components/Faculty";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Gallery />
      <Hero />
      <About />
      <Programs />
      <Leaders />
      <Faculty />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
