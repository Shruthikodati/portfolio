"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import resumeData from "@/data/resume.json";
import { Mail, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resumeData.basics.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center text-center text-zinc-100"
      >
        <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 sm:text-5xl md:text-6xl mb-6">
          Let&apos;s Connect
        </h2>
        <p className="max-w-xl text-zinc-400 mb-8 text-lg">
          I&apos;m currently open to new roles and exciting collaborations. Whether you have a question, a project in mind, or just want to connect, my inbox is always open. I&apos;d love to hear from you!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${resumeData.basics.email}`}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            id="mailto-contact"
          >
            <Mail className="h-5 w-5" />
            Say Hello
          </a>

          <button
            onClick={handleCopy}
            className="group relative flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-6 py-4 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-800 hover:border-zinc-500 active:scale-95"
            id="copy-email-btn"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 group-hover:text-cyan-400 transition-colors" />
                <span>{resumeData.basics.email}</span>
              </>
            )}

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: -45, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none bg-zinc-950 text-white border border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-semibold shadow-xl whitespace-nowrap"
                >
                  Copied to Clipboard!
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
