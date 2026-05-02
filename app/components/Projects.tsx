"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaCode, FaMobileAlt, FaLayerGroup, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TiltCard from "./ui/TiltCard";
import beeHome from "@/app/screenshots/01-home-screen.png";
import beeHomeScrolled from "@/app/screenshots/01b-home-scrolled.png";
import beeTap from "@/app/screenshots/02-tap-the-bee.png";
import beeMemory from "@/app/screenshots/03-memory-match.png";
import beeStroop from "@/app/screenshots/04-stroop-master.png";
import beeMath from "@/app/screenshots/05-math-blitz.png";
import beeLeaderboard from "@/app/screenshots/06-leaderboard.png";
import beeSettings from "@/app/screenshots/07-settings.png";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string | StaticImageData;
  screenshots?: { src: string | StaticImageData; label: string }[];
  tech: string;
  category: "Web" | "Mobile";
}

const projects: Project[] = [
  {
    title: "PropGenius AI – Real Estate CRM Platform",
    description: "Full-stack SaaS platform for Indian real estate agents with AI listing generation, smart CRM with Kanban pipeline, WhatsApp integration, analytics dashboard, and subscription billing.",
    link: "https://prop-genius-web.vercel.app",
    image: "/images/propgenius.png",
    tech: "Next.js, React, TypeScript, Supabase, Gemini AI, Razorpay, Tailwind CSS",
    category: "Web",
  },
  {
    title: "BumbleBee Arcade – PWA Game Hub",
    description: "Cross-platform installable PWA featuring 4 brain-training mini games with offline support, achievement system, and leaderboard. Built with a single codebase for Web, Android, and iOS.",
    link: "#",
    image: beeHome,
    screenshots: [
      { src: beeHome, label: "Home" },
      { src: beeHomeScrolled, label: "Games List" },
      { src: beeTap, label: "Tap the Bee" },
      { src: beeMemory, label: "Memory Match" },
      { src: beeStroop, label: "Stroop Master" },
      { src: beeMath, label: "Math Blitz" },
      { src: beeLeaderboard, label: "Leaderboard" },
      { src: beeSettings, label: "Settings" },
    ],
    tech: "React Native, Expo, React Navigation, AsyncStorage, Service Worker, PWA",
    category: "Mobile",
  },
  {
    title: "OM Tech Solutions – Company Website",
    description: "A fully responsive and dynamic company website built using React.js and Tailwind CSS.",
    link: "https://tarun0009.github.io/omconsulting/#/",
    image: "/images/omtech.PNG",
    tech: "React.js, Tailwind CSS",
    category: "Web",
  },

];

function ImageWithSkeleton({ src, alt, contain }: { src: string | StaticImageData; alt: string; contain?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`w-full ${contain ? "aspect-[9/16]" : "aspect-video"} relative bg-zinc-800/80 rounded-xl overflow-hidden`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-zinc-700/60" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`${contain ? "object-contain" : "object-cover"} transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function ScreenshotCarousel({ screenshots, alt }: { screenshots: { src: string | StaticImageData; label: string }[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1)), [screenshots.length]);
  const next = useCallback(() => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1)), [screenshots.length]);

  return (
    <div className="relative group/carousel">
      {/* Main image - mobile portrait aspect ratio */}
      <div className="w-full aspect-[9/16] max-h-[340px] relative bg-zinc-800/80 rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={screenshots[current].src}
              alt={`${alt} - ${screenshots[current].label}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover/carousel:opacity-100"
        >
          <FaChevronLeft className="text-xs" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover/carousel:opacity-100"
        >
          <FaChevronRight className="text-xs" />
        </button>

        {/* Label badge */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-semibold text-white/90">
          {screenshots[current].label}
        </div>

        {/* Counter */}
        <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-medium text-white/70">
          {current + 1}/{screenshots.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-2.5">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-blue-400 w-4" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Web" | "Mobile">("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const categories = [
    { name: "All",    icon: FaLayerGroup },
    { name: "Web",    icon: FaCode },
    { name: "Mobile", icon: FaMobileAlt },
  ] as const;

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 bg-(--bg-secondary) text-white border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Work
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A curated selection of my professional work and personal experiments.
          </motion.p>
        </div>

        {/* Filter pills */}
        <div className="flex justify-center mb-7">
          <div className="flex p-1.5 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-white/6 gap-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filter === cat.name ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {filter === cat.name && (
                  <motion.div
                    layoutId="projectFilter"
                    className="absolute inset-0 bg-zinc-700 border border-white/12 rounded-xl shadow-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10"><cat.icon /></span>
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.35 }}
              >
                <TiltCard
                  className="group h-full border border-white/6 rounded-2xl p-4 sm:p-5 bg-zinc-900/50 backdrop-blur-sm hover:border-blue-500/25 hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-500"
                  tiltAmount={5}
                >
                  {/* Image / Screenshot Carousel */}
                  <div className="relative overflow-hidden rounded-2xl">
                    {project.screenshots ? (
                      <ScreenshotCarousel screenshots={project.screenshots} alt={project.title} />
                    ) : (
                      <>
                        <ImageWithSkeleton src={project.image} alt={project.title} />
                        {/* Desktop hover overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-end p-5">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-white text-black font-bold text-xs rounded-xl flex items-center justify-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                          >
                            <FaExternalLinkAlt /> View Project
                          </a>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile always-visible link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 sm:hidden flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-gray-300 hover:text-white hover:border-white/25 active:bg-white/10 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> View Project
                  </a>

                  {/* Content */}
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/6 flex flex-wrap gap-1.5">
                      {project.tech.split(", ").map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-[11px] font-medium text-gray-400 bg-zinc-800/70 px-2.5 py-1 rounded-lg border border-white/6"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <p className="text-gray-500 italic">Coming soon: More {filter} projects in development!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
