"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // Small delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Minimal Monogram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="font-sans text-4xl font-light tracking-widest">SK</span>
          <motion.div
            className="absolute inset-0 rounded-2xl border border-white/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>

        {/* Loading Bar */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
          <motion.span
            className="font-mono text-xs tracking-widest text-white/50 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Initializing System
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
