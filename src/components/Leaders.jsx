"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import imgDani from "@/assets/incharges/dr-ca-achyut-dani-director-general.jpg";
import imgChandran from "@/assets/incharges/m-p-chandran-president.jpg";

const leaders = [
  {
    name: "M. P. Chandran",
    role: "President",
    image: imgChandran,
    quote: "Education is not just about academics; it's about building character and fostering innovation for a better tomorrow."
  },
  {
    name: "Dr. CA Achyut Dani",
    role: "Director General",
    image: imgDani,
    quote: "We aim to bridge the gap between industry and academia by nurturing talent with practical exposure and modern skills."
  }
];

export default function Leaders() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-deep font-semibold uppercase tracking-wider mb-4 text-sm"
          >
            Guiding Vision
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            Our <span className="text-gradient">Leaders</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-64 h-64 lg:w-72 lg:h-72 mb-8 rounded-full overflow-hidden shadow-2xl border-8 border-slate-50 group-hover:border-brand-yellow/30 transition-all duration-500">
                <Image 
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-2">{leader.name}</h3>
              <p className="text-brand-orange font-semibold tracking-wide uppercase text-sm mb-6">{leader.role}</p>
              <p className="text-slate-600 leading-relaxed italic relative">
                <span className="absolute -top-4 -left-6 text-5xl text-slate-200 font-serif">"</span>
                {leader.quote}
                <span className="absolute -bottom-6 -right-6 text-5xl text-slate-200 font-serif">"</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
