"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

import heroImg from "@/assets/univeristy images/Untitled-12.webp";

export default function Hero() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-yellow/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-deep/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left z-10"
          >
            <motion.div variants={fadeUpVariant} className="inline-block mb-6 px-4 py-2 rounded-full bg-white shadow-sm border border-brand-orange/20">
              <span className="text-brand-deep font-medium text-sm tracking-wide">
                Welcome to the Future of Learning
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUpVariant}
              className="text-5xl lg:text-7xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
            >
              Empowering Future <br className="hidden lg:block" />
              <span className="text-gradient">Innovators</span> Through <br className="hidden lg:block" />
              Modern Education
            </motion.h1>

            <motion.p 
              variants={fadeUpVariant}
              className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Join a vibrant community of thinkers and creators. We blend cutting-edge curriculum with global exposure to accelerate your career in the modern world.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button className="w-full sm:w-auto bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-brand-orange/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all duration-300 flex items-center justify-center gap-2 group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-slate-700 bg-white shadow-sm border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <Play className="w-3 h-3 text-brand-orange fill-brand-orange" />
                </div>
                Take a Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/20 to-transparent z-10" />
              <Image 
                src={heroImg} 
                alt="JG University Campus" 
                fill 
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Stat 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -left-6 lg:-left-12 top-20 glass-card p-4 lg:p-5 rounded-2xl z-20 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <span className="text-brand-deep font-bold text-xl">15K</span>
                </div>
                <div>
                  <p className="text-slate-800 font-bold">Active Students</p>
                  <p className="text-slate-500 text-sm">From 40+ countries</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stat 2 */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 lg:-right-12 bottom-20 glass-card p-4 lg:p-5 rounded-2xl z-20 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                  <span className="text-brand-orange font-bold text-xl">98%</span>
                </div>
                <div>
                  <p className="text-slate-800 font-bold">Placements</p>
                  <p className="text-slate-500 text-sm">Top Tier Companies</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
