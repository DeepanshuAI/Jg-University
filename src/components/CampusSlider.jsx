"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CampusSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white bg-slate-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={images[currentIndex]}
            alt={`Campus View ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-white hover:text-brand-orange hover:scale-110 transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-white hover:text-brand-orange hover:scale-110 transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 shadow-md ${
              idx === currentIndex 
                ? "w-8 h-3 bg-brand-yellow rounded-full" 
                : "w-3 h-3 bg-white/70 hover:bg-white rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
