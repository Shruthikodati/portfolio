"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import resumeData from "@/data/resume.json";
import { ArrowUpRight, ExternalLink, Filter, Search, X } from "lucide-react";
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
      colorClass: "border-emerald-500/15 bg-emerald-500/5 text-emerald-300",
      textColor: "text-emerald-400",
      accentGlow: "group-hover:text-emerald-300"
    };
  } else if (lower.includes("rag") || lower.includes("10-k")) {
    return {
      categories: ["AI & Data Science", "Full-Stack Systems"],
      colorClass: "border-sky-500/15 bg-sky-500/5 text-sky-300",
      textColor: "text-sky-400",
      accentGlow: "group-hover:text-sky-300"
    };
  } else if (lower.includes("tax") || lower.includes("gentrification")) {
    return {
      categories: ["AI & Data Science"],
      colorClass: "border-teal-500/15 bg-teal-500/5 text-teal-300",
      textColor: "text-teal-400",
      accentGlow: "group-hover:text-teal-300"
    };
  } else if (lower.includes("benchmarking") || lower.includes("sequence")) {
    return {
      categories: ["AI & Data Science", "Full-Stack Systems"],
      colorClass: "border-emerald-500/15 bg-emerald-500/5 text-emerald-300",
      textColor: "text-emerald-400",
      accentGlow: "group-hover:text-emerald-300"
    };
  } else if (lower.includes("traffic") || lower.includes("crash")) {
    return {
      categories: ["AI & Data Science"],
      colorClass: "border-indigo-500/15 bg-indigo-500/5 text-indigo-300",
      textColor: "text-indigo-400",
      accentGlow: "group-hover:text-indigo-300"
    };
  } else if (lower.toLowerCase().includes("fairness") || lower.toLowerCase().includes("targeted")) {
    return {
      categories: ["AI & Data Science"],
      colorClass: "border-sky-500/15 bg-sky-500/5 text-sky-300",
      textColor: "text-sky-400",
      accentGlow: "group-hover:text-sky-300"
    };
  }
  return {
    categories: ["AI & Data Science"],
    colorClass: "border-emerald-500/15 bg-emerald-500/5 text-emerald-300",
    textColor: "text-emerald-400",
    accentGlow: "group-hover:text-emerald-300"
  };
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [expandedTitles, setExpandedTitles] = useState<Record<string, boolean>>({});

  // Hear skill click from Skills section
  useEffect(() => {
    const handleSelectSkill = (e: Event) => {
      const skillName = (e as CustomEvent).detail;
      setSelectedSkill(skillName);
      setSelectedCategory("All"); // Reset category filter
      setSearchQuery(skillName); // Prepopulate search terms to trigger matching stack filter
    };
    window.addEventListener("select-skill", handleSelectSkill);
    return () => window.removeEventListener("select-skill", handleSelectSkill);
  }, []);

  const toggleExpand = (title: string) => {
    setExpandedTitles(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  // Combine primary and exploratory projects for filter coverage
  const allProjects = [
    ...(resumeData.projects as any[]).map(p => ({ ...p, isFeatured: true })),
    ...((resumeData.otherProjects || []) as any[]).map(p => ({ ...p, isFeatured: false }))
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

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.categories.includes(selectedCategory);
    
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch = 
      project.title.toLowerCase().includes(query) ||
      project.bullets.some(b => b.toLowerCase().includes(query)) ||
      project.stack.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="w-full">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
            Projects
          </h2>
        </motion.div>

        {/* Filters/Search Row */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto"
        >
          {/* Live Search Field */}
          <div className="relative flex-1 sm:w-60">
            <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search stack or description..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (selectedSkill) setSelectedSkill(null);
              }}
              className="w-full bg-zinc-900/40 border border-zinc-800/60 rounded-full px-3.5 py-1.5 pl-8.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 focus:border-emerald-500/40 transition-all font-semibold"
            />
            {(searchQuery || selectedSkill) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSkill(null);
                }}
                className="absolute right-3 top-1.5 hover:text-emerald-400 text-zinc-500 transition-colors p-0.5 cursor-pointer"
                title="Clear filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            <div className="flex items-center gap-1 text-[9px] text-zinc-500 uppercase tracking-wider font-bold bg-zinc-900/40 px-2 py-1 rounded border border-zinc-800/40 shrink-0">
              <Filter className="h-2.5 w-2.5" />
              <span>Scope:</span>
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.08)]"
                    : "bg-zinc-900/40 border-zinc-850 text-zinc-400 hover:text-zinc-200 hover:border-zinc-750 hover:bg-zinc-800/20"
                }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedSkill && (
        <div className="mb-4 flex items-center gap-2 text-xs text-zinc-400 bg-emerald-950/10 border border-emerald-500/10 px-3 py-1.5 rounded-lg w-fit">
          <span>Filtering projects using skill:</span>
          <span className="font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px]">
            {selectedSkill}
          </span>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedSkill(null);
            }}
            className="text-zinc-500 hover:text-emerald-400 ml-1 cursor-pointer transition-colors"
          >
            Clear
          </button>
        </div>
      )}

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 border border-zinc-800/40 bg-zinc-900/5 rounded-xl">
          <p className="text-sm text-zinc-500 font-medium">No projects found matching the criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedSkill(null);
            }}
            className="mt-3 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
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
                <SpotlightCard className="group flex flex-col md:flex-row md:gap-8 !p-6">
                  <div className="mb-2 md:mb-0 md:w-1/4 shrink-0 flex flex-col justify-between">
                    <span className={`text-xs font-semibold ${project.textColor}`}>
                      {project.dates}
                    </span>
                    
                    {project.isFeatured && (
                      <span className="hidden md:inline-flex w-max items-center rounded bg-emerald-950/20 px-2 py-0.5 text-[9px] font-bold tracking-wider text-emerald-400 ring-1 ring-inset ring-emerald-500/10 uppercase mt-4">
                        Primary System
                      </span>
                    )}
                  </div>
                  
                  <div className="md:w-3/4 flex flex-col">
                    <h3 className={`text-base sm:text-lg font-semibold text-zinc-100 transition-colors flex items-center gap-1.5 ${project.accentGlow}`}>
                      {project.title}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-emerald-400" />
                    </h3>
                    
                    <ul className="mt-3 flex flex-col gap-2.5">
                      {project.bullets.map((bullet, i) => {
                        const isExpanded = expandedTitles[project.title];
                        if (i >= 2 && !isExpanded) return null;
                        return (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs leading-relaxed text-zinc-400"
                          >
                            • {bullet}
                          </motion.li>
                        );
                      })}
                    </ul>

                    {project.bullets.length > 2 && (
                      <button
                        onClick={() => toggleExpand(project.title)}
                        className="mt-3 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer flex items-center gap-1 w-fit bg-transparent border-none outline-none"
                      >
                        {expandedTitles[project.title] ? "Show Fewer Details" : `Show More Details (${project.bullets.length - 2} more entries)`}
                      </button>
                    )}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${project.colorClass}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.links && project.links.length > 0 && (
                      <div className="mt-4 flex gap-4">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${project.textColor} hover:brightness-110`}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
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
      )}
    </section>
  );
}
