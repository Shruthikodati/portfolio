"use client";

import { motion } from "motion/react";
import resumeData from "@/data/resume.json";

export default function Achievements() {
  return (
    <section id="achievements" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-4"
      >
        <span className="text-xs font-bold tracking-widest text-emerald-400/85 uppercase">
          Impact & Metrics
        </span>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {resumeData.achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.03 }}
            className="flex flex-col gap-1 rounded-lg border border-zinc-800/30 bg-zinc-950/20 p-3 transition-all hover:border-emerald-500/10 hover:bg-zinc-900/25 shadow-sm"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              {item.metric}
            </span>
            <p className="text-[10px] sm:text-[11px] leading-tight text-zinc-400 font-medium tracking-wide">
              {item.context}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
