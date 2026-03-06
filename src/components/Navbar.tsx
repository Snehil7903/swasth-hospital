
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Single source of truth for our navigation links
  const scrollLinks = ["Home", "Specialties", "Our Doctors"];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 py-6 mix-blend-difference text-white">
        <div className="text-2xl font-serif italic tracking-wide">Swasth.</div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {scrollLinks.map((link) => (
            <a 
              key={link} 
              href={`/#${link.toLowerCase().replace(" ", "-")}`} 
              className="text-xs uppercase tracking-[0.2em] hover:text-emerald-400 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          {/* Direct link to our new Portal page */}
          <a 
            href="/portal" 
            className="text-xs uppercase tracking-[0.2em] text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium"
          >
            Patient Portal
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-50 text-white relative" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Transparent Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-40 flex justify-end transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Subtle Blur Backdrop (Click to close) */}
        <div 
          className="absolute inset-0 bg-black/10 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)} 
        />
        
        {/* Transparent Glassmorphism Sidebar Panel */}
        <div 
          className={`relative w-3/4 max-w-sm h-full bg-white/5 backdrop-blur-lg border-l border-white/10 flex flex-col pt-32 px-10 transform transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-10">
            {/* 1. Mapped Scroll Links */}
            {scrollLinks.map((link) => (
              <a 
                key={link} 
                // Added .replace(" ", "-") so links like "Our Doctors" work perfectly
                href={`/#${link.toLowerCase().replace(" ", "-")}`} 
                onClick={() => setIsOpen(false)}
                className="text-3xl text-white font-light tracking-wide hover:text-emerald-400 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
            
            {/* 2. Direct link to the Patient Portal */}
            <a 
              href="/portal" 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-medium tracking-wide text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            >
              Patient Portal
            </a>
          </div>
          
          <div className="mt-auto pb-12">
            <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Emergency</p>
            <p className="text-white text-xl font-medium">+91 1800-SWASTH</p>
          </div>
        </div>
      </div>
    </>
  );
}