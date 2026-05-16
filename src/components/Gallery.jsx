"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/univeristy images/JGYCF.webp";
import img2 from "@/assets/univeristy images/JGYCF21.webp";
import img3 from "@/assets/univeristy images/Untitled-10.webp";
import img4 from "@/assets/univeristy images/Untitled-12.webp";
import img5 from "@/assets/univeristy images/Untitled-2 (2).webp";
import img6 from "@/assets/univeristy images/Untitled-3.webp";
import img7 from "@/assets/univeristy images/Untitled-4.webp";
import img8 from "@/assets/univeristy images/Untitled-5.webp";
import img9 from "@/assets/univeristy images/Untitled-8.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#FAFAFA] pt-32 pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-12 text-center">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-deep font-semibold uppercase tracking-wider mb-4 text-sm"
        >
          Life at Campus
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-heading font-bold text-slate-900"
        >
          Experience <span className="text-gradient">JG University</span>
        </motion.h2>
      </div>

      <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={images[currentIndex]}
              alt={`Campus Image ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${
                idx === currentIndex ? "bg-brand-orange scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
