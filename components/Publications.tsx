"use client";

import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 sm:text-4xl">
          Publications & Research
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]"
      >
        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="mb-4 md:mb-0 shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <BookOpen className="h-6 w-6" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <h3 className="text-xl font-bold text-zinc-100">
                ACM Peer-Reviewed Publication
              </h3>
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider bg-purple-500/10 px-2.5 py-1 rounded-full">
                Peer-Reviewed
              </span>
            </div>
            <h4 className="text-lg font-medium text-purple-300 mb-3">
              Fairness in Targeted Advertisements
            </h4>
            <p className="text-sm leading-relaxed text-zinc-400 mb-4">
              Co-authored an 11-page paper contributing to responsible AI and algorithmic fairness in production advertising systems. Combines Meta&apos;s Ad Library, FairJobs benchmark datasets, and synthetic bias mitigation strategies to achieve significant statistical parity improvements while maintaining near-perfect model performance. Includes full ablation studies across 3 datasets with mathematical formalization and statistical significance testing.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
