"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

import student1 from "@/assets/students/medium-shot-graduate-student_23-2148950577.avif";
import student2 from "@/assets/students/images.jpg";
import student3 from "@/assets/students/istockphoto-2150133163-612x612.jpg";

const testimonials = [
  {
    id: 1,
    name: "Aditi Kumari",
    course: "B.Tech Computer Science, Class of 2023",
    review: "My experience at JG University was truly transformative. The hands-on projects and brilliant professors prepared me perfectly for my software engineering role at a top tech company.",
    rating: 5,
    avatar: student1
  },
  {
    id: 2,
    name: "Nithik Solanki",
    course: "BBA Business Management, Class of 2022",
    review: "The vibrant campus life and collaborative environment shaped not just my career, but my personality. The leadership programs here are unmatched.",
    rating: 5,
    avatar: student2
  },
  {
    id: 3,
    name: "Aisha Patel",
    course: "B.Des Design & Media, Class of 2024",
    review: "A truly modern campus with state-of-the-art facilities. Every day here pushed me to be more creative and innovative. I'll always cherish these years.",
    rating: 5,
    avatar: student3
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-brand-orange/10 to-brand-yellow/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-deep font-semibold uppercase tracking-wider mb-4 text-sm"
          >
            Alumni Voices
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            JG Alumni <span className="text-gradient">Testimonials</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-[2rem] p-8 lg:p-10 hover:-translate-y-2 transition-transform duration-300 relative group border border-slate-100 shadow-xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              
              <p className="text-slate-700 text-lg mb-8 leading-relaxed relative z-10 italic">
                "{testimonial.review}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
