"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function AnimatedText({ text, className = "", delay = 0, once = true }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      className={`flex flex-wrap justify-center gap-x-2 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
