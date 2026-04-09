"use client";

import {
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase, FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMysql, SiMongodb, SiExpress, SiTypescript, SiRemix, SiNextdotjs, SiExpo,
} from "react-icons/si";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import TiltCard from "./ui/TiltCard";

interface Skill {
  name: string;
  icon: IconType;
  level: number;
  color: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
}

const skills: Skill[] = [
  { name: "React.js",      icon: FaReact,      level: 100, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js",       icon: SiNextdotjs,  level: 100, color: "#ffffff", category: "Frontend" },
  { name: "React Native",  icon: FaReact,      level: 85,  color: "#61DAFB", category: "Frontend" },
  { name: "JavaScript",    icon: FaJsSquare,   level: 100, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript",    icon: SiTypescript, level: 95,  color: "#3178C6", category: "Frontend" },
  { name: "Remix",         icon: SiRemix,      level: 85,  color: "#ffffff", category: "Frontend" },
  { name: "HTML5",         icon: FaHtml5,      level: 100, color: "#E34F26", category: "Frontend" },
  { name: "CSS3",          icon: FaCss3Alt,    level: 95,  color: "#1572B6", category: "Frontend" },
  { name: "Tailwind CSS",  icon: SiTailwindcss,level: 95,  color: "#06B6D4", category: "Frontend" },
  { name: "Expo",          icon: SiExpo,       level: 90,  color: "#ffffff", category: "Frontend" },
  { name: "Node.js",       icon: FaNodeJs,     level: 90,  color: "#339933", category: "Backend"  },
  { name: "Express.js",    icon: SiExpress,    level: 90,  color: "#ffffff", category: "Backend"  },
  { name: "Java",          icon: FaDatabase,   level: 100, color: "#ED8B00", category: "Backend"  },
  { name: "MySQL",         icon: SiMysql,      level: 100, color: "#4479A1", category: "Database" },
  { name: "MongoDB Atlas", icon: SiMongodb,    level: 90,  color: "#47A248", category: "Database" },
];

const categories = ["Frontend", "Backend", "Database"] as const;

const categoryMeta: Record<string, { label: string; accent: string }> = {
  Frontend: { label: "Frontend",  accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/8" },
  Backend:  { label: "Backend",   accent: "text-purple-400 border-purple-500/20 bg-purple-500/8" },
  Database: { label: "Database",  accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/8" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-(--bg-secondary) text-gray-100 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Stack
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="mt-4 text-sm sm:text-base text-gray-400 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Tools and technologies I use regularly in my development work.
          </motion.p>
        </div>

        {/* Category groups */}
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          const meta = categoryMeta[category];
          return (
            <div key={category} className="mb-10 last:mb-0">
              {/* Category label */}
              <motion.div
                className="flex items-center gap-4 mb-5"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border ${meta.accent}`}>
                  {meta.label}
                </span>
                <div className="flex-1 h-px bg-white/6" />
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categorySkills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      viewport={{ once: true }}
                    >
                      <TiltCard
                        className="group relative rounded-2xl border border-white/8 bg-black/50 p-5 backdrop-blur-sm cursor-default hover:border-white/18 hover:bg-black/70 transition-all duration-300"
                        tiltAmount={10}
                      >
                        {/* Color glow */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                          style={{ backgroundColor: `${skill.color}12` }}
                        />

                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
                            style={{ color: skill.color }}
                          >
                            <Icon />
                          </div>

                          <p className="text-[13px] font-semibold text-white text-center leading-tight">{skill.name}</p>

                          {/* Circular progress */}
                          <div className="relative w-9 h-9">
                            <svg className="w-9 h-9 -rotate-90" viewBox="0 0 36 36">
                              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2.5" />
                              <motion.circle
                                cx="18" cy="18" r="14"
                                fill="none"
                                stroke={skill.color}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray={`${2 * Math.PI * 14}`}
                                initial={{ strokeDashoffset: 2 * Math.PI * 14 }}
                                whileInView={{ strokeDashoffset: 2 * Math.PI * 14 * (1 - skill.level / 100) }}
                                transition={{ duration: 1.2, delay: i * 0.06, ease: "easeOut" }}
                                viewport={{ once: true }}
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-300">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </TiltCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
