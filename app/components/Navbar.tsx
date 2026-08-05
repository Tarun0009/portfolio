"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Resume" },
  // { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 140;
    setScrolled(window.scrollY > 24);

    for (const item of navItems) {
      const section = document.getElementById(item.id);
      if (!section) continue;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < bottom) {
        setActiveSection(item.id);
        return;
      }
    }

    setActiveSection("home");
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [updateActiveSection]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - 96,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div
        className={`mx-auto flex max-w-[1180px] items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-white/12 bg-[#080a07]/88 shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "border-white/8 bg-[#080a07]/55 backdrop-blur-md"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 text-left"
          aria-label="Scroll to hero"
        >
          <span
            style={{ color: "#000" }}
            className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] text-sm font-black"
          >
            T
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-bold tracking-[-0.02em] text-[var(--foreground)]">
              Tarun Pratap
            </span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Developer
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="relative rounded-full px-4 py-2 text-sm font-semibold transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive
                      ? "text-black"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                  style={isActive ? { color: "#000" } : undefined}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            style={{ color: "#000" }}
            className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-black transition hover:-translate-y-0.5 md:inline-flex"
          >
            Hire me
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-[var(--foreground)] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-h-[calc(100svh-6.5rem)] max-w-[1180px] overflow-y-auto overscroll-contain rounded-3xl border border-white/12 bg-[#0d100b]/96 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold ${
                      isActive
                        ? "bg-[var(--accent)]"
                        : "text-[var(--muted)] hover:bg-white/5 hover:text-[var(--foreground)]"
                    }`}
                    style={isActive ? { color: "#000" } : undefined}
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}



