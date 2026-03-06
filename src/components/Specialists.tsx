// src/components/Specialists.tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const specialistsData = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Chief of Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Michael Chen",
    role: "Lead Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Emily Carter",
    role: "Pediatric Surgery",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=800&auto=format&fit=crop", 
  },
  {
    name: "Dr. James Wilson",
    role: "Orthopedics & Sports Medicine",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Alisha Patel",
    role: "Holistic Wellness",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Specialists() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".specialist-card");
    const images = gsap.utils.toArray(".specialist-image");

    // 1. Calculate exactly how far the track needs to move horizontally
    const getScrollAmount = () => {
      const carousel = carouselRef.current;
      if (!carousel) return 0;
      return -(carousel.scrollWidth - window.innerWidth);
    };

    // 2. Pin the section and translate it horizontally based on vertical scroll
    const tween = gsap.to(carouselRef.current, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Pin exactly when the section hits the top of the viewport
        end: () => `+=${Math.abs(getScrollAmount())}`, // Scroll length matches the width of the cards
        pin: true,
        scrub: 1, // Smooth dragging interpolation
        invalidateOnRefresh: true, // Recalculate if user resizes the window
      },
    });

    // 3. Parallax Swipe Effect using containerAnimation
    images.forEach((img: any, i) => {
      gsap.to(img, {
        x: 60, // Image slides right inside the frame
        ease: "none",
        scrollTrigger: {
          trigger: cards[i] as Element,
          containerAnimation: tween, // Magic: links this trigger to our horizontal movement
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });
    });
  }, { scope: sectionRef });

  return (
    // Reverted to min-h-screen for universal compatibility
    <section id="our-doctors" ref={sectionRef} className="w-full min-h-screen bg-[#022C22] text-[#FAFAFA] overflow-hidden flex flex-col justify-center pt-24 pb-12">
      
      {/* Section Header - Reduced bottom margin to mb-8 to save vertical space */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 flex-shrink-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Meet the <span className="italic text-emerald-400 font-light">Specialists</span>
          </h2>
          <p className="text-emerald-100/60 max-w-xl text-lg">
            Our global team of pioneering doctors and researchers are here to guide your healing journey.
          </p>
        </div>
        <button className="flex items-center gap-2 text-emerald-300 hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-medium">
          View All Directory <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* The Track */}
      <div 
        ref={carouselRef}
        className="flex gap-6 px-6 lg:px-12 w-max items-center"
      >
        {specialistsData.map((doctor, index) => (
          <div 
            key={index} 
            // Slightly tightened widths so they look elegant when height is capped
            className="specialist-card relative shrink-0 w-[75vw] md:w-70 lg:w-[320px] group"
          >
            {/* THE MAGIC BULLET: max-h-[45vh] on mobile, max-h-[50vh] on desktop. */}
            <div className="relative w-full aspect-4/5 max-h-[45vh] lg:max-h-[50vh] overflow-hidden rounded-3xl mb-4 bg-emerald-900 shadow-xl">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="specialist-image absolute top-0 -left-12 w-[130%] h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
            
            <h3 className="text-xl lg:text-2xl font-medium mb-1">{doctor.name}</h3>
            <p className="text-emerald-400/80 text-sm lg:text-base tracking-wide">{doctor.role}</p>
          </div>
        ))}
        
        {/* Spacer */}
        <div className="w-[10vw]" />
      </div>

    </section>
  );
}