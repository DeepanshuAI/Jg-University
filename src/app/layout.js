import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata = {
  title: "JG University | Education for Innovators",
  description: "Empowering Future Innovators Through Modern Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-slate-800 bg-[#FAFAFA]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
