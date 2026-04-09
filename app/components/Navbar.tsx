"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaPhone,
  FaBriefcase,
  FaServer,
} from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import ProfilePic from "@/public/images/img.png";
import ThemeToggle from "./ui/ThemeToggle";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "services", label: "Services", icon: <FaServer /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "contact", label: "Contact", icon: <FaPhone /> },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: closeMobileMenu,
    trackMouse: true,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 120;

    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.clientHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(item.id);
        }
      }
    }
    if (scrollPosition < 100) setActiveSection("home");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: pos, behavior: "smooth" });
    closeMobileMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "py-4" : "py-6 bg-black/50 backdrop-blur-sm"
      }`}
    >
      <div 
        className={`mx-auto px-6 transition-all duration-500 flex justify-between items-center ${
          scrolled 
            ? "max-w-4xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 py-2.5 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
            : "max-w-7xl"
        }`}
      >
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 group-hover:border-blue-400 transition-colors duration-300">
            <Image src={ProfilePic} alt="Tarun" fill className="object-cover" priority />
          </div>
          {!scrolled && (
            <span className="text-white font-bold text-lg hidden sm:inline tracking-tight group-hover:text-blue-400 transition-colors duration-300">
              TPS<span className="text-blue-500">.</span>
            </span>
          )}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center space-x-3">
          <ThemeToggle />
          <div className="h-4 w-px bg-white/10 mx-1" />
          <a
            href="https://github.com/Tarun0009"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all shadow-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            <motion.div
              {...swipeHandlers}
              className="absolute right-4 top-20 w-[280px] bg-zinc-900 border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col"
              style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
              initial={{ x: 100, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-white/5">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-white/20">
                  <Image src={ProfilePic} alt="Tarun" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold tracking-tight">Tarun Pratap</p>
                  <p className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold">Dev</p>
                </div>
              </div>

              <div className="space-y-1.5 overflow-y-auto mb-6 flex-grow">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium tracking-wide">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5">
                {[
                  { icon: FaGithub, href: "https://github.com/Tarun0009" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/tarun-pratap-singh-941b91220/" },
                  { icon: FaEnvelope, href: "mailto:tarunpratapsingh097@gmail.com" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-white transition"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
