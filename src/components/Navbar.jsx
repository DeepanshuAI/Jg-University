"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoImg from "@/assets/logo/jg-logo.svg";

import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Campus", href: "/campus" },
  { name: "Collaborations", href: "/collaborations" },
  { name: "Discover Us", href: "/discover-us" },
  { name: "Media", href: "/media" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-lg border-b ${
        scrolled ? "py-3 shadow-md border-slate-200" : "py-5 border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src={logoImg} 
              alt="JG University Logo" 
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-deep font-medium transition-colors duration-200 text-sm tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-primary text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5 transition-all duration-300 ease-out active:scale-95">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-700 hover:text-brand-deep transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100"
          >
            <div className="flex flex-col px-6 py-6 space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 font-medium text-lg hover:text-brand-deep transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-full font-medium shadow-md w-full mt-4">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
