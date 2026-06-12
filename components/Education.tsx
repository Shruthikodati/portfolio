"use client";

import { motion } from "motion/react";
import resumeData from "@/data/resume.json";

export default function Education() {
  return (
    <section id="education" className="w-full">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5"
          >
            <h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
              Education
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col border border-zinc-800/20 bg-zinc-900/5 hover:border-emerald-500/10 rounded-xl p-5 transition-colors duration-300"
              >
                <h3 className="text-base font-semibold text-zinc-100">{edu.degree}</h3>
                <p className="mt-1 text-xs font-semibold text-emerald-400 uppercase tracking-wider">{edu.institution}</p>
                <p className="mt-2 text-xs text-zinc-500 font-medium">{edu.dates}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5"
          >
            <h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
              Certifications
            </h2>
          </motion.div>

          <ul className="flex flex-col gap-3">
            {resumeData.certifications.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-xs leading-relaxed text-zinc-400 border border-zinc-850 bg-zinc-900/10 px-4 py-2.5 rounded-xl hover:border-emerald-500/10 hover:bg-zinc-900/20 transition-all duration-300"
              >
                • {cert}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
