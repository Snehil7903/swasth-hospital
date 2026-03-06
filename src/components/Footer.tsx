// src/components/Footer.tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Phone, MapPin } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // A soft, staggered reveal for the footer content
    gsap.from(".footer-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%", // Triggers right as the footer enters the bottom of the screen
      },
    });
  }, { scope: container });

  return (
    // We use a slightly darker shade (#011F18) to contrast with the Specialists section
    <footer ref={container} className="bg-[#011F18] text-[#FAFAFA] pt-24 pb-8 px-6 lg:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        {/* Brand Section */}
        <div className="md:col-span-5 footer-item">
          <h2 className="text-4xl font-serif italic tracking-wide mb-6">Swasth.</h2>
          <p className="text-emerald-100/60 max-w-sm leading-relaxed mb-8">
            Pioneering the future of holistic and technological healthcare. World-class healing, exactly when and where you need it.
          </p>
          <div className="flex gap-6">
            {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
              <a key={social} href="#" className="text-xs tracking-widest uppercase text-emerald-500 hover:text-white transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 md:col-start-7 footer-item">
          <h3 className="text-xs tracking-widest uppercase text-emerald-500/80 mb-6 font-medium">Explore</h3>
          <ul className="space-y-4">
            {['Home', 'Specialties', 'Our Doctors', 'Patient Portal'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-emerald-100/70 hover:text-white transition-colors duration-300 text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Emergency Info */}
        <div className="md:col-span-4 md:col-start-9 footer-item">
          <h3 className="text-xs tracking-widest uppercase text-emerald-500/80 mb-6 font-medium">Contact & Emergency</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-emerald-100/70">
              <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white mb-1">24/7 Emergency</p>
                <p className="text-xl tracking-wide">+91 1800-SWASTH</p>
              </div>
            </li>
            <li className="flex items-start gap-4 text-emerald-100/70">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white mb-1">Main Campus</p>
                <p className="leading-relaxed">123 Health Avenue, Medical District<br/>New Delhi, India 110001</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-100/40 footer-item">
        <p>© {new Date().getFullYear()} Swasth Hospital. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-emerald-100 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-100 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}