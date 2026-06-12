"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import resumeData from "@/data/resume.json";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

const updateDocumentTheme = (newTheme: "dark" | "light") => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (newTheme === "light") {
    root.classList.add("light");
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
    root.classList.remove("light");
  }
};

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio-theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    updateDocumentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-300 ${
          scrolled ? "w-full max-w-lg px-4" : "w-full max-w-xl px-6"
        }`}
      >
        <div className="flex items-center justify-center gap-4 sm:gap-6 rounded-full border border-white/5 bg-[#0f1215]/80 px-6 py-3 backdrop-blur-md shadow-lg shadow-black/30">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs sm:text-xs font-semibold text-zinc-400 transition-colors hover:text-emerald-300"
            >
              {item.name}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-white/10 mx-1 sm:mx-2" />
          
          <a
            href={resumeData.basics.links.find(l => l.name === "GitHub")?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-300 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
          <a
            href={resumeData.basics.links.find(l => l.name === "LinkedIn")?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-300 transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
        </div>
      </motion.nav>

      {/* Floating Theme Toggle button aligned with the top navigation plane */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed right-4 top-6 sm:right-6 lg:right-10 z-50"
      >
        <button
          onClick={toggleTheme}
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/5 bg-[#0f1215]/80 text-zinc-400 transition-all hover:text-emerald-300 hover:border-emerald-500/25 active:scale-90 shadow-md shadow-black/20 backdrop-blur-md cursor-pointer hover:shadow-emerald-500/5 group"
          id="theme-toggle-btn"
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
          ) : (
            <Moon className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-12" />
          )}
        </button>
      </motion.div>
    </>
  );
}
