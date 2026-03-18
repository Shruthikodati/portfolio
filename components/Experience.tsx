"use client";

import { motion } from "motion/react";
import resumeData from "@/data/resume.json";
import SpotlightCard from "./SpotlightCard";

export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 sm:text-4xl">
          Experience
        </h2>
      </motion.div>

      <div className="flex flex-col gap-12">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="w-full"
          >
            <SpotlightCard className="group flex flex-col md:flex-row md:gap-8">
              <div className="mb-2 md:mb-0 md:w-1/4 shrink-0">
                <span className="text-sm font-medium text-zinc-500">
                  {exp.dates}
                </span>
              </div>
              
              <div className="md:w-3/4 flex flex-col">
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-purple-400 transition-colors">
                  {exp.role}
                </h3>
                <div className="text-sm font-medium text-cyan-400 mb-4">
                  {exp.company}
                </div>
                
                <ul className="flex flex-col gap-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm leading-relaxed text-zinc-400">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
