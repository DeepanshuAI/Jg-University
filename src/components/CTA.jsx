"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-brand-orange via-brand-red to-brand-deep rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl mix-blend-overlay" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-3xl mix-blend-overlay" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
              Ready to Shape Your Future?
            </h2>
            <p className="text-white/90 text-xl lg:text-2xl mb-12 leading-relaxed">
              Join thousands of students who have already taken the leap towards a brighter, more innovative career.
            </p>
            
            <button className="bg-white text-brand-deep px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mx-auto group">
              Start Your Journey
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
