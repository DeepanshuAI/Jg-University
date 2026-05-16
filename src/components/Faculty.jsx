"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import imgNamika from "@/assets/faculty/namika2o.webp";
import imgHarshil from "@/assets/faculty/harshil-1 (1).jpg";
import imgHitesh from "@/assets/faculty/hitesh-1.png";
import imgPratik from "@/assets/faculty/pratik-1 (1).jpg";

const facultyMembers = [
  { name: "Namika", role: "Design & Media", image: imgNamika },
  { name: "Harshil", role: "Computer Science", image: imgHarshil },
  { name: "Hitesh", role: "Business Management", image: imgHitesh },
  { name: "Pratik", role: "Engineering & IT", image: imgPratik }
];

export default function Faculty() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-deep font-semibold uppercase tracking-wider mb-4 text-sm"
          >
            Academic Excellence
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            Meet Our <span className="text-gradient">Faculty Members</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-lg border border-slate-100 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md border-4 border-slate-50 group-hover:border-brand-orange/20 transition-colors duration-300">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-brand-orange text-sm font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
