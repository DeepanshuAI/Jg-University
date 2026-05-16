import Image from "next/image";
import CTA from "@/components/CTA";
import CampusSlider from "@/components/CampusSlider";

import img3 from "@/assets/campus/3.jpg";
import img4 from "@/assets/campus/4.jpg";
import img5 from "@/assets/campus/5.jpg";
import img6 from "@/assets/campus/6.jpg";
import img7 from "@/assets/campus/7.jpg";
import img8 from "@/assets/campus/8.jpg";
import img9 from "@/assets/campus/9.jpg";
import img10 from "@/assets/campus/10.jpg";
import img11 from "@/assets/campus/11.jpg";
import img12 from "@/assets/campus/12.jpg";
import img13 from "@/assets/campus/13.jpg";

export const metadata = {
  title: "Our Campus | JG University",
};

const campusImages = [img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

export default function CampusPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="bg-brand-deep/5 py-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900">Our Campus</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Explore our state-of-the-art facilities and vibrant student life.</p>
      </div>
      
      <section className="py-20 px-6 lg:px-20 bg-slate-50">
        <CampusSlider images={campusImages} />
      </section>

      <CTA />
    </main>
  );
}
