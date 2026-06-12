"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import resumeData from "@/data/resume.json";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const imageSources = ["/profile.jpg", "/profile.png", "/profile.jpeg", "/profile.webp"];
  const [imgIndex, setImgIndex] = useState(0);
  const [hasFallback, setHasFallback] = useState(false);

  const handleImageError = () => {
    if (imgIndex < imageSources.length - 1) {
      setImgIndex(prev => prev + 1);
    } else {
      setHasFallback(true);
    }
  };

  const handleScroll = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full pt-6 md:pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        {/* Left Column: Text bio information */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
          {/* Actionable Opportunities Badge */}
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/5 px-2.5 py-1 text-xs font-medium text-emerald-400/90 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          {/* Full Name Headings with accurate Gradient */}
          <h1 className="bg-gradient-to-r from-emerald-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight pb-1">
            {resumeData.basics.name}
          </h1>

          {/* Subheading Header */}
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
            {resumeData.basics.title}
          </h2>

          {/* Highlight Status Row */}
          <div className="text-xs sm:text-xs font-extrabold text-sky-400/90 tracking-wider uppercase max-w-2xl">
            NEW GRAD | ACTIVELY SEEKING FULL TIME ROLES | OPEN TO SOFTWARE ENGINEER & DATA ROLES
          </div>

          {/* Uncompromised Resume Summary Paragraph */}
          <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {resumeData.basics.summary}
          </p>

          {/* Links Row */}
          <div className="flex items-center gap-3 mt-1">
            {resumeData.basics.links.map((link, i) => {
              const Icon = link.name.toLowerCase().includes("linkedin")
                ? Linkedin
                : link.name.toLowerCase().includes("github")
                ? Github
                : Mail;
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors p-1.5 -ml-1.5"
                  aria-label={link.name}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              );
            })}
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="text-zinc-400 hover:text-emerald-400 transition-colors p-1.5"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Control Call-to-Actions */}
          <div className="mt-3 flex flex-row flex-wrap gap-3.5 w-full sm:w-auto">
            <button
              onClick={handleScroll}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-5.5 py-2.5 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500/10 active:scale-97 cursor-none-hover"
            >
              View Experience
            </button>

            <Link
              href="/resume"
              target="_blank"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-sky-500/20 bg-sky-500/5 px-5.5 py-2.5 text-xs font-semibold text-sky-300 transition-all hover:bg-sky-500/10 active:scale-97 cursor-none-hover"
            >
              <Download className="h-3.5 w-3.5" />
              Download Resume
            </Link>
          </div>
        </div>

        {/* Right Column: Beautiful animated graduation photo container matching example 3 */}
        <div className="lg:col-span-5 flex justify-center items-center py-4 lg:py-0">
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[3/4] rounded-2xl p-1 bg-gradient-to-br from-emerald-500/10 via-zinc-805 to-sky-500/10 border border-zinc-800 shadow-[0_0_50px_rgba(16,185,129,0.04)] group">
            {/* Inner frame container for crisp rounded cropping */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
              {!hasFallback ? (
                <Image
                  src={imageSources[imgIndex]}
                  alt="Shruthi Kodati Graduation Portrait"
                  fill
                  sizes="(max-width: 1024px) 300px, 340px"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                  priority
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-emerald-950/20 to-zinc-950 text-emerald-300 font-bold p-6 text-center select-none">
                  <span className="text-4xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-300 font-extrabold">SK</span>
                  <span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">Shruthi Kodati</span>
                </div>
              )}
            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-xl pointer-events-none" />
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-xl pointer-events-none" />
            <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b-2 border-l-2 border-sky-500/30 rounded-bl-xl pointer-events-none" />
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b-2 border-r-2 border-sky-500/30 rounded-br-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
