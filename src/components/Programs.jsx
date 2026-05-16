"use client";

import { motion } from "framer-motion";
import { Monitor, Briefcase, Cpu, Database, Shield, PenTool, ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Computer Science",
    description: "Master the fundamentals of software engineering and scalable systems.",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50 text-blue-600"
  },
  {
    id: 2,
    title: "Business Management",
    description: "Develop leadership skills and strategic thinking for the modern enterprise.",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-brand-orange to-brand-red",
    bgLight: "bg-orange-50 text-brand-orange"
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: "Dive into machine learning, neural networks, and future technologies.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-50 text-purple-600"
  },
  {
    id: 4,
    title: "Data Science",
    description: "Transform raw data into actionable insights using advanced analytics.",
    icon: <Database className="w-8 h-8" />,
    color: "from-emerald-400 to-teal-500",
    bgLight: "bg-emerald-50 text-emerald-600"
  },
  {
    id: 5,
    title: "Cyber Security",
    description: "Protect digital assets and learn advanced threat mitigation strategies.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-rose-600",
    bgLight: "bg-red-50 text-red-600"
  },
  {
    id: 6,
    title: "Design & Media",
    description: "Create stunning visual experiences and master digital storytelling.",
    icon: <PenTool className="w-8 h-8" />,
    color: "from-brand-yellow to-brand-orange",
    bgLight: "bg-yellow-50 text-yellow-600"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-yellow/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
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
            Explore Our <span className="text-gradient">Programs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Discover pathways designed for the next generation of industry leaders. We offer a diverse range of specializations to suit your ambition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${program.bgLight} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {program.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-red transition-colors">
                {program.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {program.description}
              </p>
              
              <button className="flex items-center gap-2 text-slate-900 font-semibold group-hover:text-brand-orange transition-colors">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
