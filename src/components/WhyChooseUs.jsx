"use client";

import { motion } from "framer-motion";
import { Laptop, TrendingUp, UserCheck, Plane, Award, Building } from "lucide-react";

const features = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Smart Learning",
    description: "High-tech classrooms and interactive digital resources."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Placement Support",
    description: "Dedicated cell ensuring top-tier company placements."
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Industry Mentors",
    description: "Learn directly from active professionals and leaders."
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "International Exposure",
    description: "Global exchange programs and foreign internships."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Scholarships",
    description: "Merit and need-based financial support for students."
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Modern Campus",
    description: "State-of-the-art labs, libraries, and sports facilities."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Text */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-brand-deep font-semibold uppercase tracking-wider mb-4 text-sm"
              >
                The JnUNI Advantage
              </motion.h4>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight"
              >
                Why Choose <br /> <span className="text-gradient">Our Campus?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 text-lg leading-relaxed mb-8"
              >
                We provide an ecosystem that goes beyond traditional education, fostering innovation, creativity, and real-world problem-solving skills.
              </motion.p>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-slate-200"
              >
                Discover More
              </motion.button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-slate-100 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-orange/5 to-brand-red/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                  
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-orange mb-6 relative z-10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 relative z-10 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
