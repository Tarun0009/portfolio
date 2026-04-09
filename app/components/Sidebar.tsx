"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaEnvelope,
  FaUser, FaBriefcase, FaCode, FaProjectDiagram, FaPhone, FaServer, FaDownload,
} from "react-icons/fa";
import ProfilePic from "@/public/images/img.png";
import ThemeToggle from "./ui/ThemeToggle";

const navLinks = [
  { id: "about",      label: "About",      icon: FaUser        },
  { id: "experience", label: "Experience", icon: FaBriefcase   },
  { id: "skills",     label: "Skills",     icon: FaCode        },
  { id: "services",   label: "Services",   icon: FaServer      },
  { id: "projects",   label: "Projects",   icon: FaProjectDiagram },
  { id: "contact",    label: "Contact",    icon: FaPhone       },
];

const topSkills = [
  "React.js", "React Native", "Next.js",
  "TypeScript", "Node.js", "Java", "Tailwind CSS",
];

const socials = [
  { href: "https://github.com/Tarun0009",                               icon: FaGithub,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/tarun-pratap-singh-941b91220/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:tarunpratapsingh097@gmail.com",                      icon: FaEnvelope, label: "Email"    },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 160;
      // Walk links in reverse to find the deepest active section
      for (const nav of [...navLinks].reverse()) {
        const el = document.getElementById(nav.id);
        if (el && offset >= el.offsetTop) {
          setActive(nav.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 xl:w-80 flex-col bg-zinc-950 border-r border-white/6 z-40 overflow-y-auto">

      {/* ── Profile ─────────────────────────────── */}
      <div className="px-7 pt-8 pb-6 border-b border-white/6">

        {/* Avatar + online dot */}
        <div className="relative inline-block mb-5">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500 via-cyan-400 to-purple-500 blur-md opacity-50 scale-110 pointer-events-none" />
          <Image
            src={ProfilePic}
            alt="Tarun Pratap Singh"
            width={88}
            height={88}
            priority
            className="relative w-20 h-20 rounded-full border-2 border-white/20 object-cover"
          />
          <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-zinc-950 shadow-lg shadow-emerald-400/60" />
        </div>

        {/* Name */}
        <h1 className="text-white font-bold text-[17px] leading-tight tracking-tight">
          Tarun Pratap Singh
        </h1>
        <p className="text-blue-400/80 text-[10px] font-bold uppercase tracking-[0.18em] mt-1">
          React Native & Frontend Dev
        </p>

        {/* Availability badge */}
        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Bio */}
        <p className="mt-4 text-[12px] text-gray-500 leading-relaxed">
          Passionate about crafting intuitive, scalable, and accessible web & mobile solutions.
        </p>
      </div>

      {/* ── Top skills ──────────────────────────── */}
      <div className="px-7 py-5 border-b border-white/6">
        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-gray-600 mb-3">
          Top Skills
        </p>
        <div className="flex flex-wrap gap-1.5">
          {topSkills.map((skill) => (
            <span
              key={skill}
              className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/4 border border-white/8 text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ── Navigation ──────────────────────────── */}
      <div className="px-4 py-5 flex-1">
        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-gray-600 mb-3 px-3">
          Navigation
        </p>
        <nav className="space-y-0.5">
          {navLinks.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-250 group ${
                active === id
                  ? "bg-blue-500/10 text-white border border-blue-500/20"
                  : "text-gray-500 hover:text-gray-200 hover:bg-white/4 border border-transparent"
              }`}
            >
              <Icon
                className={`text-sm shrink-0 transition-colors duration-250 ${
                  active === id ? "text-blue-400" : "text-gray-600 group-hover:text-gray-400"
                }`}
              />
              <span>{label}</span>
              {active === id && (
                <motion.span
                  layoutId="sidebarActivePill"
                  className="ml-auto w-1 h-4 rounded-full bg-blue-400"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* ── Social + CV + Theme ─────────────────── */}
      <div className="px-6 py-6 border-t border-white/6 space-y-3">
        {/* Download CV */}
        <a
          href="/images/Tarun_resume.pdf"
          download
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-wide hover:bg-blue-500/18 hover:border-blue-500/40 transition-all duration-300"
        >
          <FaDownload className="text-[11px]" />
          Download CV
        </a>

        {/* Social icons row + theme toggle */}
        <div className="flex items-center gap-2">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex-1 flex items-center justify-center py-2.5 rounded-xl bg-white/4 border border-white/6 text-gray-400 hover:text-white hover:bg-white/8 hover:border-white/15 transition-all duration-300"
            >
              <Icon className="text-sm" />
            </a>
          ))}
          <div className="flex-1 flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
}
