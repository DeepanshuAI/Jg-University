import { Globe, Share2, MessageCircle, Rss, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo/jg-logo.svg";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FAFAFA] pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:pr-8">
            <Link href="/" className="mb-6 block w-max">
              <Image 
                src={logoImg} 
                alt="JG University Logo" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-slate-500 leading-relaxed mb-8">
              Empowering the next generation of innovators with modern education, practical experience, and a global perspective.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, MessageCircle, Rss].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-orange hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Academic Programs', 'Admissions', 'Campus Life', 'Scholarships', 'Mandatory Disclosure'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-500 hover:text-brand-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6 text-lg">Resources</h4>
            <ul className="space-y-4">
              {['Student Portal', 'Library', 'Alumni Network', 'Career Center', 'News & Events'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-500 hover:text-brand-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6 text-lg">Contact Information</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 mb-1">Campus</strong>
                  <span className="text-slate-500">ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat, India.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 mb-1">Official Email-ID</strong>
                  <span className="text-slate-500 block">connect@jguni.in</span>
                  <span className="text-slate-500 block">admission@jguni.in</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 mb-1">Phone Number</strong>
                  <span className="text-slate-500">+91 75 6775 6758 / 59</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center lg:text-left">
            Copyright ©2022 JG University All Rights Reserved <span className="hidden lg:inline mx-2">|</span> <br className="lg:hidden" />
            Powered by: N2N Solutions
          </p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-sm">
            <a href="#" className="text-slate-500 hover:text-brand-orange transition-colors">Terms and Conditions</a>
            <a href="#" className="text-slate-500 hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-brand-orange transition-colors">A Handbook on Basics of Cyber Hygiene</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
