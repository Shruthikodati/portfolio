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
    <section id="contact" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center text-center text-zinc-100"
      >
        <h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl mb-4">
          Let&apos;s Connect
        </h2>
        <p className="max-w-lg text-zinc-400 mb-6 text-xs sm:text-sm leading-relaxed">
          I&apos;m currently open to new roles and exciting collaborations. Whether you have a question, an opportunity in mind, or just want to connect, my inbox is always open. I&apos;d love to hear from you!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`mailto:${resumeData.basics.email}`}
            className="group relative inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-2.5 text-xs font-semibold text-zinc-950 transition-transform hover:scale-103 shadow-[0_4px_15px_rgba(16,185,129,0.1)] cursor-pointer"
            id="mailto-contact"
          >
            <Mail className="h-4 w-4" />
            Say Hello
          </a>

          <button
            onClick={handleCopy}
            className="group relative flex items-center justify-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/10 px-5 py-2.5 text-xs font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:border-zinc-700 active:scale-97 cursor-pointer"
            id="copy-email-btn"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 group-hover:text-emerald-400 transition-colors" />
                <span>{resumeData.basics.email}</span>
              </>
            )}

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: -40, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none bg-zinc-950 text-white border border-zinc-800 rounded px-2.5 py-1 text-[10px] font-semibold shadow-xl whitespace-nowrap"
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

