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
        className="mb-5"
      >
        <h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
          Publications & Research
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative overflow-hidden rounded-xl border border-zinc-800/40 bg-zinc-900/10 p-6 transition-colors hover:border-emerald-500/10"
      >
        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="mb-4 md:mb-0 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/5 text-emerald-400 border border-emerald-500/10">
              <BookOpen className="h-5 w-5" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <h3 className="text-lg font-bold text-zinc-100">
                ACM Peer-Reviewed Publication
              </h3>
              <span className="text-[10px] font-bold tracking-wider text-emerald-300 uppercase bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-0.5 rounded">
                Peer-Reviewed
              </span>
            </div>
            <h4 className="text-base font-medium text-emerald-400 mb-3">
              Fairness in Targeted Advertisements
            </h4>
            <p className="text-xs leading-relaxed text-zinc-400 mb-4">
              Co-authored an 11-page paper contributing to responsible AI and algorithmic fairness in production advertising systems. Combines Meta&apos;s Ad Library, FairJobs benchmark datasets, and synthetic bias mitigation strategies to achieve significant statistical parity improvements while maintaining near-perfect model performance. Includes full ablation studies across 3 datasets with mathematical formalization and statistical significance testing.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
