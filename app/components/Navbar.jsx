"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaEnvelope, FaHome, FaUser, FaCode, FaProjectDiagram, FaCertificate, FaPhone } from "react-icons/fa";
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
    { id: "contact", label: "Contact", icon: <FaPhone /> }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => closeMobileMenu(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section with improved logic
  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    // Find which section is currently in view
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    }

    // Fallback: if at the very top, set to home
    if (scrollPosition < 100) {
      setActiveSection("home");
    }
  }, [navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    closeMobileMenu();
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
      ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-3"
      : "bg-gray-900 py-4"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Logo with professional styling */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/50">
            <Image
              src={ProfilePic}
              alt="Tarun Pratap Singh"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Tarun Pratap Singh
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1 bg-gray-800/50 rounded-full px-2 py-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeSection === item.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
              >
                <span className="text-xs">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/Tarun0009"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Menu Panel */}
          <div
            {...swipeHandlers}
            className="absolute right-0 top-0 h-full w-80 bg-gray-900 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400">
                  <Image
                    src={ProfilePic}
                    alt="Profile"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Tarun Pratap Singh</h3>
                  <p className="text-sm text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-4 w-full p-4 rounded-xl text-left transition-all ${activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border-l-4 border-cyan-400"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-4">Connect with me</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/Tarun0009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} Tarun Pratap Singh. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}