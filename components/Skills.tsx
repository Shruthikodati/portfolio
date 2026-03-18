"use client";

import { motion } from "motion/react";
import resumeData from "@/data/resume.json";

export default function Skills() {
  return (
    <section id="skills" className="w-full scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 sm:text-4xl">
          Technical Arsenal
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {resumeData.skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col rounded-2xl border border-purple-500/10 bg-purple-500/5 p-6 hover:border-purple-500/30 transition-colors"
          >
            <h3 className="mb-4 text-sm font-semibold text-purple-300 uppercase tracking-wider">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-100 transition-colors hover:bg-cyan-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
