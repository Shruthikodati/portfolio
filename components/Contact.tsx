"use client";

import { motion } from "motion/react";
import resumeData from "@/data/resume.json";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 sm:text-5xl md:text-6xl mb-6">
          Let's Connect
        </h2>
        <p className="max-w-xl text-zinc-400 mb-10 text-lg">
          I'm currently open to new roles and exciting collaborations. Whether you have a question, a project in mind, or just want to connect, my inbox is always open. I'd love to hear from you!
        </p>
        <a
          href={`mailto:${resumeData.basics.email}`}
          className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        >
          <Mail className="h-5 w-5" />
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
