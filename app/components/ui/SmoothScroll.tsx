"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide smooth scroll. Mounts once at the root and hands the browser's
 * native scroll off to Lenis so wheel / trackpad / keyboard scrolling all
 * feels buttery. Honors prefers-reduced-motion by not initializing at all.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      // Time (in seconds) it takes the scroll to settle after each input tick.
      duration: 1.15,
      // easeOutExpo — starts fast, decelerates into rest. Feels "premium."
      easing: (t) => 1 - Math.pow(2, -10 * t),
      // Mouse wheel + trackpad both go through Lenis for consistent feel.
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      // Don't hijack touch on mobile — native inertial scroll is already smooth.
      syncTouch: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
