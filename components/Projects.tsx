"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import resumeData from "@/data/resume.json";
import { ArrowUpRight, ExternalLink, Filter } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const CATEGORIES = ["All", "Security & Cryptography", "AI & Data Science", "Full-Stack Systems"];

interface ProjectLink {
  name: string;
  url: string;
}

interface Project {
  title: string;
  dates: string;
  stack: string[];
  bullets: string[];
  links?: ProjectLink[];
  isFeatured?: boolean;
}

const mapProjectTheme = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("cipher") || lower.includes("encrypted") || lower.includes("security")) {
    return {
      categories: ["Security & Cryptography", "Full-Stack Systems"],
      colorClass: "border-cyan-500/20 bg-cyan-500/5 text-cyan-300",
      textColor: "text-cyan-400",
      accentGlow: "group-hover:text-cyan-400"
    };
  } else if (lower.includes("rag") || lower.includes("10-k")) {
    return {
      categories: ["AI & Data Science", "Full-Stack Systems"],
      colorClass: "border-purple-500/20 bg-purple-500/5 text-purple-300",
      textColor: "text-purple-400",
      accentGlow: "group-hover:text-purple-400"
    };
  } else if (lower.includes("tax") || lower.includes("gentrification")) {
    return {
      categories: ["AI & Data Science"],
      colorClass: "border-emerald-500/20 bg-emerald-500/5 text-emerald-300",
      textColor: "text-emerald-400",
      accentGlow: "group-hover:text-emerald-400"
    };
  } else if (lower.includes("benchmarking") || lower.includes("sequence")) {
    return {
      categories: ["AI & Data Science", "Full-Stack Systems"],
      colorClass: "border-pink-500/20 bg-pink-500/5 text-pink-300",
      textColor: "text-pink-400",
      accentGlow: "group-hover:text-pink-400"
    };
  } else if (lower.includes("traffic") || lower.includes("crash")) {
    return {
      categories: ["AI & Data Science"],
      colorClass: "border-amber-500/20 bg-amber-500/5 text-amber-300",
      textColor: "text-amber-400",
      accentGlow: "group-hover:text-amber-400"
    };
  } else if (lower.toLowerCase().includes("fairness") || lower.toLowerCase().includes("targeted")) {
    return {
      categories: ["AI & Data Science"],
      colorClass: "border-indigo-500/20 bg-indigo-500/5 text-indigo-300",
      textColor: "text-indigo-400",
      accentGlow: "group-hover:text-indigo-400"
    };
  }
  return {
    categories: ["AI & Data Science"],
    colorClass: "border-cyan-500/20 bg-cyan-500/5 text-cyan-300",
    textColor: "text-cyan-400",
    accentGlow: "group-hover:text-cyan-400"
  };
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Combine primary and exploratory projects for filter coverage
  const allProjects = [
    ...resumeData.projects.map(p => ({ ...p, isFeatured: true })),
    ...(resumeData.otherProjects || []).map(p => ({ ...p, isFeatured: false }))
  ].map((p: Project) => {
    const meta = mapProjectTheme(p.title);
    return {
      ...p,
      categories: meta.categories,
      colorClass: meta.colorClass,
      textColor: meta.textColor,
      accentGlow: meta.accentGlow
    };
  });

  const filteredProjects = allProjects.filter(project =>
    selectedCategory === "All" || project.categories.includes(selectedCategory)
  );

  return (
    <section id="projects" className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 sm:text-4xl">
            Technical Project Portfolio
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Filter key initiatives covering systems programming, responsible ML, and advanced data analytics.
          </p>
        </motion.div>

        {/* Category Filter Controls */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-2"
        >
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 uppercase tracking-wider font-semibold mr-2 bg-zinc-800/20 px-2 py-1.5 rounded-md border border-zinc-700/30">
            <Filter className="h-3 w-3" />
            <span>Scope:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                  : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 mb-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              <SpotlightCard className="group flex flex-col md:flex-row md:gap-8">
                <div className="mb-2 md:mb-0 md:w-1/4 shrink-0 flex flex-col justify-between">
                  <span className={`text-sm font-semibold ${project.textColor}`}>
                    {project.dates}
                  </span>
                  
                  {project.isFeatured && (
                    <span className="hidden md:inline-flex w-max items-center rounded bg-cyan-900/30 px-2 py-0.5 text-[10px] font-bold tracking-wider text-cyan-400 ring-1 ring-inset ring-cyan-500/20 uppercase mt-4">
                      Primary System
                    </span>
                  )}
                </div>
                
                <div className="md:w-3/4 flex flex-col">
                  <h3 className={`text-xl font-semibold text-zinc-100 transition-colors flex items-center gap-2 ${project.accentGlow}`}>
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </h3>
                  
                  <ul className="mt-4 flex flex-col gap-3">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm leading-relaxed text-zinc-400">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${project.colorClass}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.links && project.links.length > 0 && (
                    <div className="mt-6 flex gap-4">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 text-sm font-semibold transition-colors ${project.textColor} hover:brightness-110`}
                        >
                          <ExternalLink className="h-4 w-4" />
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
