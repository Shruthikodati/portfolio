"use client";

import { useState, useEffect } from "react";
import Splash from "@/components/Splash";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  // Prevent scrolling while splash is active
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSplash]);

  return (
    <main className="relative min-h-screen bg-[#0a0a0e] text-zinc-300 selection:bg-cyan-500/30 font-sans overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      <NavBar />
      
      {/* Colorful Background Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-[20%] -left-[10%] h-[70%] w-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[60%] w-[50%] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] h-[60%] w-[50%] rounded-full bg-pink-600/10 blur-[120px]" />
      </div>

      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-24 lg:py-32 flex flex-col gap-24 md:gap-32">
        <Hero />
        <Achievements />
        <Publications />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
