"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const getInitial = (direction: string) => {
  const offset = 40;
  switch (direction) {
    case "up": return { opacity: 0, y: offset } as const;
    case "down": return { opacity: 0, y: -offset } as const;
    case "left": return { opacity: 0, x: offset } as const;
    case "right": return { opacity: 0, x: -offset } as const;
    default: return { opacity: 0, y: offset } as const;
  }
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}

// Staggered container for child animations
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({ children, staggerDelay = 0.1, className = "" }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

// Child item for staggered animation
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
