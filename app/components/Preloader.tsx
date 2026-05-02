"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("preloaded")) {
      const frame = requestAnimationFrame(() => setIsLoading(false));
      return () => cancelAnimationFrame(frame);
    }

    // Skip long animation for users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 0 : 2800;

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("preloaded", "true");
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Name animation */}
          <div className="flex overflow-hidden">
            {"Tarun Pratap Singh".split("").map((char, i) => (
              <motion.span
                key={i}
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Frontend & React Native Developer
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="mt-8 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "min(200px, 60vw)" }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
