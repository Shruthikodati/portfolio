"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
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

interface ScrollSectionProps {
  children: React.ReactNode;
  isFirst?: boolean;
}

function ScrollSection({ children, isFirst = false }: ScrollSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isFirst ? 15 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isFirst ? "0px" : "-110px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

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
    <main className="relative min-h-screen bg-[#0a0f16] text-zinc-300 selection:bg-emerald-500/20 font-sans overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      <NavBar />
      
      {/* Soft & Soothing Background Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-[20%] -left-[10%] h-[70%] w-[50%] rounded-full bg-emerald-500/[0.03] blur-[150px]" />
        <div className="absolute top-[20%] -right-[10%] h-[60%] w-[50%] rounded-full bg-sky-500/[0.03] blur-[150px]" />
        <div className="absolute -bottom-[20%] left-[20%] h-[60%] w-[50%] rounded-full bg-indigo-500/[0.02] blur-[150px]" />
      </div>

      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-10 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 flex flex-col gap-16 md:gap-20">
        <ScrollSection isFirst>
          <Hero />
        </ScrollSection>
        <ScrollSection>
          <Achievements />
        </ScrollSection>
        <ScrollSection>
          <Publications />
        </ScrollSection>
        <ScrollSection>
          <Experience />
        </ScrollSection>
        <ScrollSection>
          <Projects />
        </ScrollSection>
        <ScrollSection>
          <Skills />
        </ScrollSection>
        <ScrollSection>
          <Education />
        </ScrollSection>
        <ScrollSection>
          <Contact />
        </ScrollSection>
      </div>
      <Footer />
    </main>
  );
}
