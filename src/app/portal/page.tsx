// src/app/portal/page.tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PatientPortal() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Fade in the ambient glowing background orbs
    gsap.from(".bg-orb", {
      scale: 0.5,
      opacity: 0,
      duration: 2,
      stagger: 0.3,
      ease: "power2.out",
    });

    // 2. Slide the frosted glass card up into view
    gsap.from(".glass-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // 3. Stagger the form elements sliding in from the left
    gsap.from(".form-element", {
      x: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.6,
    });
  }, { scope: container });

  return (
    <main ref={container} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#022C22]">
      
      {/* Background Ambient Orbs for 3D Depth */}
      <div className="bg-orb absolute top-[-10%] left-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="bg-orb absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[150px]" />

      {/* Glassmorphism Login Card */}
      <div className="glass-card relative z-10 w-full max-w-md mx-6 p-8 md:p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl shadow-black/50">
        
        {/* Header */}
        <div className="form-element flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/30 shadow-inner">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-serif text-[#FAFAFA] mb-2 tracking-wide">Patient Portal</h1>
          <p className="text-emerald-100/60 text-sm text-center leading-relaxed">
            Securely access your medical records, test results, and appointments.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          <div className="form-element space-y-2">
            <label className="text-xs font-medium text-emerald-100/70 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-100/40" />
              <input 
                type="email" 
                placeholder="patient@example.com"
                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-emerald-100/30 focus:outline-none focus:border-emerald-500/50 focus:bg-black/40 transition-all duration-300"
              />
            </div>
          </div>

          <div className="form-element space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-medium text-emerald-100/70 uppercase tracking-widest">Password</label>
              <a href="#" className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">Forgot?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-100/40" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-emerald-100/30 focus:outline-none focus:border-emerald-500/50 focus:bg-black/40 transition-all duration-300"
              />
            </div>
          </div>

          <button className="form-element w-full group flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-2xl font-medium transition-all duration-300 mt-8 shadow-lg shadow-emerald-900/50">
            Sign In to Portal
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="form-element mt-8 text-center">
          <p className="text-emerald-100/50 text-sm">
            New patient? <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Register here</a>
          </p>
        </div>

        {/* Back to Home Link */}
        <div className="form-element mt-10 text-center">
            <Link href="/" className="inline-flex text-xs text-emerald-100/40 hover:text-white transition-colors uppercase tracking-widest">
              ← Return to Home
            </Link>
        </div>
      </div>
    </main>
  );
}