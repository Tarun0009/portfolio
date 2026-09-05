"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Lime signature cursor.
 * - Small solid dot follows the pointer 1:1 (no lag).
 * - Larger ring follows via spring physics (subtle lag = "premium").
 * - Ring fills solid lime on interactive elements (a / button / [data-cursor]).
 * - Auto-hides on touch devices.
 */
export default function CustomCursor() {
  const [isReady, setIsReady] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 320, mass: 0.5 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const frame = requestAnimationFrame(() => setIsReady(true));

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const isInteractive = (el: HTMLElement | null): boolean => {
      if (!el) return false;
      if (el.closest("a, button, [role='button'], [data-cursor], input, textarea, label")) {
        return true;
      }
      return false;
    };

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as HTMLElement)) setIsHovering(true);
    };

    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target as HTMLElement)) setIsHovering(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [cursorX, cursorY]);

  if (!isReady) return null;

  return (
    <>
      {/* Precise dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#c9f31d",
        }}
      />

      {/* Follower ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "#c9f31d",
        }}
        animate={{
          width: isHovering ? 44 : 30,
          height: isHovering ? 44 : 30,
          borderWidth: isHovering ? 0 : 1.5,
          backgroundColor: isHovering ? "rgba(201, 243, 29, 0.85)" : "rgba(201, 243, 29, 0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
    </>
  );
}
