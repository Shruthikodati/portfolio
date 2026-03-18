"use client";

import { motion } from "motion/react";
import resumeData from "@/data/resume.json";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 sm:text-4xl">
          Featured Projects
        </h2>
      </motion.div>

      <div className="flex flex-col gap-12 mb-20">
        {resumeData.projects.map((project, index) => (
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
                  {project.dates}
                </span>
              </div>
              
              <div className="md:w-3/4 flex flex-col">
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-cyan-400" />
                </h3>
                
                <ul className="mt-4 flex flex-col gap-3">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm leading-relaxed text-zinc-400">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.links && project.links.length > 0 && (
                  <div className="mt-6 flex gap-4">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 sm:text-4xl">
          Other Technical Explorations
        </h2>
      </motion.div>

      <div className="flex flex-col gap-12">
        {/* @ts-ignore - otherProjects added dynamically */}
        {resumeData.otherProjects?.map((project: any, index: number) => (
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
                <span className="text-sm font-medium text-purple-400">
                  {project.dates}
                </span>
              </div>
              
              <div className="md:w-3/4 flex flex-col">
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-pink-400 transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-pink-400" />
                </h3>
                
                <ul className="mt-4 flex flex-col gap-3">
                  {project.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="text-sm leading-relaxed text-zinc-400">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
