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
  FaCertificate,
  FaPhone,
} from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import ProfilePic from "@/public/images/img.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "certificates", label: "Certificates", icon: <FaCertificate /> },
    { id: "contact", label: "Contact", icon: <FaPhone /> },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: closeMobileMenu,
    trackMouse: true,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 120;

    for (let item of navItems) {
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
  }, [navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: pos, behavior: "smooth" });
    closeMobileMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-2 shadow-lg"
          : "bg-black py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
            <Image src={ProfilePic} alt="Tarun" fill className="object-cover" />
          </div>
          <span className="text-white font-semibold text-lg">
            Tarun Pratap Singh
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-1 bg-zinc-900 px-2 py-2 rounded-lg border border-white/10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition ${
                  activeSection === item.id
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://github.com/Tarun0009"
            target="_blank"
            className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
            target="_blank"
            className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-white/10 text-gray-300 hover:text-white"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/90" onClick={closeMobileMenu} />

          <div
            {...swipeHandlers}
            className="absolute right-0 top-0 h-full w-80 bg-black border-l border-white/10 p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <Image src={ProfilePic} alt="Tarun" fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-semibold">Tarun Pratap Singh</p>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>

            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition ${
                    activeSection === item.id
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex justify-center space-x-4">
              <a
                href="https://github.com/Tarun0009"
                target="_blank"
                className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-gray-400 hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
                target="_blank"
                className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-gray-400 hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-gray-400 hover:text-white"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
