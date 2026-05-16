"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Users, Globe2 } from "lucide-react";

import aboutImg from "@/assets/univeristy images/Untitled-10.webp";

export default function About() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-brand-orange" />,
      title: "Industry-focused Curriculum",
      description: "Learn what matters. Our programs are designed with top industry leaders."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-deep" />,
      title: "Experienced Faculty",
      description: "Mentorship from professionals who have made real-world impact."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-brand-yellow" />,
      title: "Global Opportunities",
      description: "Connect with worldwide networks and international exchange programs."
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative w-full"
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src={aboutImg} 
                alt="Students collaborating" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Overlay Card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 glass-card p-6 lg:p-8 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <h3 className="text-4xl font-heading font-bold text-gradient mb-2">25+</h3>
              <p className="text-slate-800 font-medium">Years of Excellence in Global Education</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h4 className="text-brand-deep font-semibold uppercase tracking-wider mb-4 text-sm">About JnUNI</h4>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Redefining the standard of <span className="text-gradient">modern education</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
                We believe in nurturing talent through practical experience, innovative thinking, and a supportive community. Our campus is a hub for the next generation of leaders, creators, and entrepreneurs.
              </p>

              <div className="space-y-8">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
