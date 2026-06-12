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
        className="mb-5"
      >
        <h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
          Experience
        </h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05 }}
            className="w-full"
          >
            <SpotlightCard className="group flex flex-col md:flex-row md:gap-8 !p-6">
              <div className="mb-2 md:mb-0 md:w-1/4 shrink-0">
                <span className="text-xs font-semibold text-zinc-500 tracking-wider">
                  {exp.dates}
                </span>
              </div>
              
              <div className="md:w-3/4 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                  {exp.role}
                </h3>
                <div className="text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
                  {exp.company}
                </div>
                
                <ul className="flex flex-col gap-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-xs leading-relaxed text-zinc-400">
                      • {bullet}
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
