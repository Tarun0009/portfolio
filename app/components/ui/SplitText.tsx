"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  /** Delay before the first word starts animating (seconds). */
  delay?: number;
  /** How much each subsequent word is offset (seconds). Smaller = faster stagger. */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

/* Pre-built motion components. Building them per-render would remount the
 * subtree every re-render, killing the animation. */
const motionByTag = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

/**
 * Word-level reveal on view. Splits the string into words, wraps each in
 * an overflow:hidden mask, and lifts each word from y:110% → 0.
 *
 * Uses `useInView` with a low amount + zero-margin so the trigger fires
 * reliably for above-the-fold headings on load AND for below-the-fold
 * headings as they scroll into view.
 */
export default function SplitText({
  children,
  className,
  delay = 0,
  stagger = 0.06,
  as = "h2",
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1, margin: "0px" });

  const words = children.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionOuter = motionByTag[as];

  return (
    <MotionOuter
      ref={ref as never}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      aria-label={children}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom leading-[inherit]"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block will-change-transform leading-[inherit]"
            variants={word}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionOuter>
  );
}
