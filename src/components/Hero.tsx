"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic"; // <-- Import Next.js dynamic

// Safely import the 3D component so it only loads in the browser
const HeroScene = dynamic(() => import("./HeroScene"), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-emerald-900/10 w-full h-full rounded-3xl" />
});
export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // A sophisticated stagger animation for the text elements
    gsap.from(".hero-element", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
    });
    
    // Subtle scale animation for the image/graphic placeholder
    // Change this from gsap.from() to gsap.fromTo()
    gsap.fromTo(".hero-image", 
      { 
        scale: 0.95, 
        opacity: 0 
      }, 
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.6,
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start space-y-6">
          <div className="hero-element inline-flex items-center px-3 py-1 rounded-full border border-emerald-900/20 text-sm tracking-wide text-emerald-800 uppercase">
            A New Era of Healthcare
          </div>
          
          <h1 className="hero-element text-5xl md:text-7xl font-semibold tracking-tight text-[#022C22] leading-[1.1]">
            Experience <br/> 
            <span className="text-emerald-600 font-light italic">World-Class</span> <br/>
            Healing.
          </h1>
          
          <p className="hero-element text-lg text-emerald-900/70 max-w-md leading-relaxed">
            At Swasth, we blend cutting-edge medical technology with compassionate, holistic care to prioritize your well-being.
          </p>
          
          <div className="hero-element pt-4">
            <button className="group flex items-center gap-3 bg-[#022C22] text-[#FAFAFA] px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-800 transition-colors duration-300">
              Book an Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

{/* The 3D Canvas Container - COMPLETELY SEAMLESS */}
        <div className="hero-image relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
           
           {/* The 3D Scene */}
           <div className="absolute inset-0 w-full h-full z-10">
              <HeroScene />
           </div>

           {/* A larger, ultra-soft glowing orb behind the 3D object to give it depth */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-400/10 blur-[120px] rounded-full z-0 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}