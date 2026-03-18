"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with a fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-[2px] md:block"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering
          ? "rgba(6, 182, 212, 0.2)"
          : "rgba(6, 182, 212, 0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
    </motion.div>
  );
}
