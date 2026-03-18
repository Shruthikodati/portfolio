"use client";

import { motion } from "motion/react";
import resumeData from "@/data/resume.json";

export default function Achievements() {
  return (
    <section id="achievements" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
          Impact & Metrics
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resumeData.achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-2 rounded-lg border border-zinc-800/50 bg-zinc-900/20 p-6 transition-colors hover:bg-zinc-900/50"
          >
            <span className="text-3xl font-bold tracking-tight text-zinc-100">
              {item.metric}
            </span>
            <p className="text-sm leading-relaxed text-zinc-400">
              {item.context}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
