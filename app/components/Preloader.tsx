"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const progressScale = useTransform(progress, [0, 100], [0, 1]);

  useMotionValueEvent(progress, "change", (latest) => {
    setDisplayProgress(Math.round(latest));
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    progress.set(0);

    const progressControls = animate(progress, 100, {
      duration: reduceMotion ? 0.01 : 1.8,
      ease: [0.22, 1, 0.36, 1],
    });

    const timer = window.setTimeout(
      () => {
        document.body.style.overflow = previousOverflow;
        setVisible(false);
      },
      reduceMotion ? 120 : 2100,
    );

    return () => {
      progressControls.stop();
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [progress, reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label={"Loading portfolio " + displayProgress + "%"}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#121312] text-white"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: reduceMotion ? 0.01 : 0.55,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-55"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "clamp(72px, 10vw, 190px) 100%, 100% 100%",
            }}
          />

          <div className="relative grid min-h-[100svh] place-items-center px-5">
            <div className="w-full max-w-xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[var(--accent)] text-base font-black text-black"
              >
                T
              </motion.div>

              <div className="mt-6 overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.55,
                    delay: reduceMotion ? 0 : 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[clamp(1.75rem,6vw,3.25rem)] font-bold leading-none tracking-[-0.045em]"
                >
                  Tarun Pratap Singh
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.4,
                  delay: reduceMotion ? 0 : 0.28,
                }}
                className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/48 sm:text-xs"
              >
                React Native & Frontend Developer
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.3,
                  delay: reduceMotion ? 0 : 0.18,
                }}
                className="mx-auto mt-8 flex max-w-xs items-center gap-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <div className="h-px flex-1 overflow-hidden bg-white/12">
                  <motion.div
                    className="h-full origin-left bg-[var(--accent)]"
                    style={{ scaleX: progressScale }}
                  />
                </div>
                <span className="w-12 text-right text-xs font-bold tabular-nums text-[var(--accent)]">
                  {String(displayProgress).padStart(3, "0")}%
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
