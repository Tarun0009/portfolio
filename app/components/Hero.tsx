"use client";

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import Squares from "./Squares";
import ProfilePic from "@/public/images/img.png";

const socials = [
  { href: "https://www.linkedin.com/in/tarun-pratap-singh-941b91220", icon: FaLinkedin, label: "LinkedIn", hover: "hover:text-blue-400 hover:border-blue-400/40" },
  { href: "https://github.com/Tarun0009", icon: FaGithub, label: "GitHub", hover: "hover:text-gray-200 hover:border-white/30" },
  { href: "mailto:tarunpratapsingh097@gmail.com", icon: FaEnvelope, label: "Email", hover: "hover:text-cyan-400 hover:border-cyan-400/40" },
];

const floatVariant = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatVariant2 = {
  animate: {
    y: [0, 8, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
  },
};

export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-start lg:items-center text-white"
    >
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <Squares direction="diagonal" speed={0.4} borderColor="#222" hoverFillColor="#0f0" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-20 lg:py-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left: Text ─────────────────────────────── */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Navbar spacer - slight clearance from fixed navbar */}
            <div className="h-20" />

            {/* Availability badge */}
            <motion.div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide mb-6 relative z-20"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hello, I&apos;m{" "}
              <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                Tarun Pratap Singh
              </span>
            </motion.h1>

            {/* Typed role */}
            <motion.div
              className="text-base sm:text-lg lg:text-xl text-blue-300/80 font-medium min-h-[1.8em] mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <ReactTyped
                strings={[
                  "React Native & Frontend Developer",
                  "Next.js & Remix Specialist",
                  "Aspiring FullStack Developer | Java Developer",
                  "I build performant mobile & web applications",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Passionate about crafting intuitive, scalable, and accessible web solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 mb-8 w-full sm:w-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white py-3.5 px-9 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-500/30"
              >
                Explore My Work
              </a>
              <a
                href="/images/Tarun_resume.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-blue-400 border border-blue-500/30 bg-blue-500/8 hover:bg-blue-500/15 hover:border-blue-500/50 py-3.5 px-9 rounded-2xl text-sm font-bold transition-all duration-300"
              >
                <FaDownload className="text-xs" />
                Download CV
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {socials.map(({ href, icon: Icon, label, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 ${hover} transition-all duration-300 text-base`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              ))}

              <div className="w-px h-5 bg-white/10 mx-1" />
              <span className="text-[11px] text-gray-600 uppercase tracking-widest font-medium">Follow me</span>
            </motion.div>
          </div>

          {/* ── Right: Image ───────────────────────────── */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-blue-500/25 via-cyan-400/10 to-purple-500/25 blur-xl pointer-events-none" />

              {/* Profile image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_-12px_rgba(59,130,246,0.2)] w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px]"
              >
                <Image
                  src={ProfilePic}
                  alt="Tarun Pratap Singh"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          className="w-px h-8 bg-linear-to-b from-gray-600 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </header>
  );
}
