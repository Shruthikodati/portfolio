"use client";

import { motion } from "motion/react";
import resumeData from "@/data/resume.json";

// Theme-aligned colors and icons derived from the user's preferred layout
const categoryMetadata: Record<
  string,
  { emoji: string; title: string; bgClass: string; textClass: string; borderClass: string }
> = {
  "Languages": {
    emoji: "💻",
    title: "Languages",
    bgClass: "bg-emerald-950/30",
    textClass: "text-emerald-400",
    borderClass: "border-emerald-500/10"
  },
  "Databases": {
    emoji: "🛢️",
    title: "Databases",
    bgClass: "bg-teal-950/30",
    textClass: "text-teal-400",
    borderClass: "border-teal-500/10"
  },
  "Frontend & Backend": {
    emoji: "🎨",
    title: "Frontend & Backend",
    bgClass: "bg-indigo-950/30",
    textClass: "text-indigo-300",
    borderClass: "border-indigo-500/10"
  },
  "Data & ML": {
    emoji: "🧠",
    title: "Data & ML",
    bgClass: "bg-emerald-950/20",
    textClass: "text-emerald-300",
    borderClass: "border-emerald-500/10"
  },
  "Security": {
    emoji: "🔒",
    title: "Security",
    bgClass: "bg-indigo-950/30",
    textClass: "text-indigo-400",
    borderClass: "border-indigo-500/10"
  },
  "Cloud & DevOps": {
    emoji: "🗄️",
    title: "Cloud & DevOps",
    bgClass: "bg-sky-950/30",
    textClass: "text-sky-300",
    borderClass: "border-sky-500/10"
  },
  "Visualization": {
    emoji: "📊",
    title: "Visualization",
    bgClass: "bg-teal-950/30",
    textClass: "text-teal-300",
    borderClass: "border-teal-500/10"
  },
  "Core Concepts": {
    emoji: "🎯",
    title: "Core Concepts",
    bgClass: "bg-zinc-800/30",
    textClass: "text-zinc-400",
    borderClass: "border-zinc-700/10"
  }
};

export default function Skills() {
  return (
    <section id="skills" className="w-full scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-5"
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
          Technical Arsenal
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {resumeData.skills.map((skillGroup, index) => {
          const meta = categoryMetadata[skillGroup.category] || {
            emoji: "✨",
            title: skillGroup.category,
            bgClass: "bg-zinc-900/40",
            textClass: "text-zinc-400",
            borderClass: "border-zinc-800"
          };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col rounded-xl border border-zinc-800/40 bg-zinc-900/10 p-5 hover:border-emerald-500/15 hover:bg-zinc-900/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${meta.bgClass} ${meta.borderClass} ${meta.textClass}`}>
                  <span className="text-lg select-none leading-none">{meta.emoji}</span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-100 tracking-tight">
                  {meta.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((skill, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      // Dispatch custom event for projects filtering
                      window.dispatchEvent(new CustomEvent("select-skill", { detail: skill }));
                      // Smooth scroll to projects section
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-full border border-zinc-800/50 bg-zinc-900/40 px-2.5 py-1 text-xs font-medium text-zinc-450 transition-all hover:bg-emerald-500/10 hover:border-emerald-500/35 hover:text-emerald-300 hover:scale-103 cursor-pointer active:scale-97"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
