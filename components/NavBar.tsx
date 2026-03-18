"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import resumeData from "@/data/resume.json";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "w-full max-w-lg px-4" : "w-full max-w-xl px-6"
      }`}
    >
      <div className="flex items-center justify-center gap-4 sm:gap-6 rounded-full border border-white/10 bg-[#0a0a0e]/80 px-6 py-3 backdrop-blur-md shadow-lg shadow-black/50">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-xs sm:text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400"
          >
            {item.name}
          </Link>
        ))}
        
        <div className="h-4 w-px bg-white/20 mx-1 sm:mx-2" />
        
        <a
          href={resumeData.basics.links.find(l => l.name === "GitHub")?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href={resumeData.basics.links.find(l => l.name === "LinkedIn")?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </motion.nav>
  );
}
