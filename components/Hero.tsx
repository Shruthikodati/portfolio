"use client";

import { motion } from "motion/react";
import { ArrowRight, Download, Terminal, Github, Linkedin, Mail } from "lucide-react";
import resumeData from "@/data/resume.json";
import Link from "next/link";

export default function Hero() {
  const handleScroll = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-start justify-center text-left pt-10 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-6 w-full"
      >
        <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl pb-2">
          {resumeData.basics.name}
        </h1>
        
        <h2 className="text-xl font-medium text-purple-200 sm:text-2xl md:text-3xl max-w-2xl">
          {resumeData.basics.title}
        </h2>

        <div className="text-sm sm:text-base font-semibold text-cyan-400 tracking-wide uppercase max-w-2xl">
          New Grad - Open to Software Engineer & Full-Stack roles | Actively Seeking Full time roles
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {resumeData.basics.summary}
        </p>

        <div className="flex items-center gap-4 mt-2">
          {resumeData.basics.links.map((link, i) => {
            const Icon = link.name.toLowerCase().includes('linkedin') ? Linkedin : 
                         link.name.toLowerCase().includes('github') ? Github : Mail;
            return (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors p-2 -ml-2"
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
          <a 
            href={`mailto:${resumeData.basics.email}`}
            className="text-zinc-400 hover:text-zinc-100 transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
          <button
            onClick={handleScroll}
            className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 text-sm font-medium text-white transition-transform hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            View Experience
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <Link
            href="/resume"
            target="_blank"
            className="group flex items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-8 py-3 text-sm font-medium text-purple-200 transition-colors hover:bg-purple-500/20 backdrop-blur-sm"
          >
            <Download className="h-4 w-4" />
            Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
