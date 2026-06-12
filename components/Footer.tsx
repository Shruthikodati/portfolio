"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import resumeData from "@/data/resume.json";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505]/80 py-12 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl px-6 flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="font-sans text-lg font-medium tracking-tight text-white">
            {resumeData.basics.name}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <motion.a
            href={`mailto:${resumeData.basics.email}`}
            className="text-white/50 transition-colors hover:text-emerald-400"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={`tel:${resumeData.basics.phone}`}
            className="text-white/50 transition-colors hover:text-emerald-400"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </motion.a>
          {resumeData.basics.links.map((link, i) => {
            const Icon = link.name === "LinkedIn" ? Linkedin : Github;
            return (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-emerald-400"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
