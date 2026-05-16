import { MapPin, Phone, Mail, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | JG University",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="bg-brand-deep/5 py-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900">Get in Touch</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">We are here to answer all your questions and help you with admissions.</p>
      </div>
      
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-8">Contact Information</h3>
              <ul className="space-y-8">
                <li className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                    <MapPin className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                    <span className="text-slate-600">ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat, India.</span>
                  </div>
                </li>
                <li className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-full bg-brand-deep/10 flex items-center justify-center shrink-0 group-hover:bg-brand-deep transition-colors">
                    <Phone className="w-6 h-6 text-brand-deep group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <span className="text-slate-600">+91 75 6775 6758 / 59</span>
                  </div>
                </li>
                <li className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow transition-colors">
                    <Mail className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <span className="text-slate-600">connect@jguni.in<br/>admission@jguni.in</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="glass-card rounded-[2rem] p-8 lg:p-12 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
