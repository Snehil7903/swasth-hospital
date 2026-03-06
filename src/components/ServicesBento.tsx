"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HeartPulse, Brain, Baby, Activity, Microscope } from "lucide-react";

// Register the plugin so GSAP knows how to track the scroll position
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesBento() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".bento-card");

    // Using fromTo guarantees it always ends fully visible (opacity: 1)
    gsap.fromTo(
      cards,
      { 
        y: 80, 
        opacity: 0 
      }, // The START state
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15, // Slightly increased stagger for a more elegant cascade
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      } // The END state
    );
  }, { scope: container });

  return (
    <section 
      id="specialties" 
      ref={container} 
      className="w-full py-32 px-6 lg:px-12 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#022C22] mb-4">
            Centers of <span className="italic text-emerald-600 font-light">Excellence</span>
          </h2>
          <p className="text-emerald-900/60 max-w-xl text-lg">
            World-class medical expertise delivered through state-of-the-art technology and compassionate care.
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
          
          {/* Card 1: Cardiology (Large Feature) */}
          <div className="bento-card md:col-span-6 md:row-span-2 relative overflow-hidden rounded-3xl bg-emerald-100/50 border border-emerald-900/10 p-8 flex flex-col justify-between group hover:bg-emerald-100 transition-colors duration-500">
            <div className="bg-white/60 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-sm">
              <HeartPulse className="w-7 h-7 text-emerald-700" />
            </div>
            <div>
              <h3 className="text-3xl font-medium text-[#022C22] mb-2">Cardiology</h3>
              <p className="text-emerald-800/70 text-lg max-w-sm">
                Advanced heart care, from non-invasive diagnostics to complex robotic surgeries.
              </p>
            </div>
          </div>

          {/* Card 2: Neurology */}
          <div className="bento-card md:col-span-3 md:row-span-1 rounded-3xl bg-white border border-emerald-900/10 shadow-sm p-8 flex flex-col justify-between group hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500">
            <Brain className="w-8 h-8 text-emerald-600 mb-4" />
            <div>
              <h3 className="text-xl font-medium text-[#022C22]">Neurology</h3>
              <p className="text-emerald-900/60 text-sm mt-2">Comprehensive brain and spine treatments.</p>
            </div>
          </div>

          {/* Card 3: Pediatrics */}
          <div className="bento-card md:col-span-3 md:row-span-1 rounded-3xl bg-white border border-emerald-900/10 shadow-sm p-8 flex flex-col justify-between group hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500">
            <Baby className="w-8 h-8 text-emerald-600 mb-4" />
            <div>
              <h3 className="text-xl font-medium text-[#022C22]">Pediatrics</h3>
              <p className="text-emerald-900/60 text-sm mt-2">Gentle, expert care for your little ones.</p>
            </div>
          </div>

          {/* Card 4: Emergency (Dark Highlight) */}
          <div className="bento-card md:col-span-6 md:row-span-1 rounded-3xl bg-[#022C22] text-[#FAFAFA] p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-6 -top-6 text-white/5 pointer-events-none">
               <Activity className="w-48 h-48" />
            </div>
            <h3 className="text-2xl font-medium mb-2 relative z-10">24/7 Emergency & Trauma</h3>
            <p className="text-white/70 relative z-10 max-w-md">
              Rapid response critical care teams on standby around the clock with top-tier life support systems.
            </p>
          </div>

          {/* Card 5: Diagnostics */}
          <div className="bento-card md:col-span-12 lg:col-span-12 md:row-span-1 rounded-3xl bg-emerald-50 border border-emerald-900/10 p-8 flex flex-col justify-center group hover:bg-emerald-100/60 transition-colors duration-500">
            <div className="flex items-center gap-4 mb-3">
              <Microscope className="w-8 h-8 text-emerald-700" />
              <h3 className="text-2xl font-medium text-[#022C22]">Advanced Diagnostics</h3>
            </div>
            <p className="text-emerald-800/70 max-w-2xl">
              High-precision imaging, AI-assisted pathology, and comprehensive laboratory services for rapid results.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}