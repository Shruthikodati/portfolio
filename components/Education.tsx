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
            className="mb-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Education
            </h2>
          </motion.div>

          <div className="flex flex-col gap-8">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <h3 className="text-lg font-semibold text-zinc-100">{edu.degree}</h3>
                <p className="mt-1 text-sm font-medium text-zinc-400">{edu.institution}</p>
                <p className="mt-2 text-sm text-zinc-500">{edu.dates}</p>
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
            className="mb-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Certifications
            </h2>
          </motion.div>

          <ul className="flex flex-col gap-4">
            {resumeData.certifications.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-sm leading-relaxed text-zinc-400"
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
