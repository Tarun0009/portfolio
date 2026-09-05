"use client";

import { motion } from "framer-motion";
import SplitText from "./ui/SplitText";
import type { IconType } from "react-icons";
import {
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRemix,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

interface Skill {
  label: string;
  category: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { label: "React Native", category: "Mobile", icon: SiReact, color: "#61dafb" },
  { label: "Expo", category: "Mobile", icon: SiExpo, color: "#f4f1e8" },
  { label: "React", category: "Frontend", icon: SiReact, color: "#61dafb" },
  { label: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#f4f1e8" },
  { label: "Remix", category: "Frontend", icon: SiRemix, color: "#f4f1e8" },
  { label: "TypeScript", category: "Language", icon: SiTypescript, color: "#3178c6" },
  { label: "Tailwind CSS", category: "Styling", icon: SiTailwindcss, color: "#38bdf8" },
  { label: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5fa04e" },
  { label: "Express", category: "Backend", icon: SiExpress, color: "#f4f1e8" },
  { label: "REST APIs", category: "Backend", icon: TbApi, color: "#c9f31d" },
  { label: "Prisma", category: "Data", icon: SiPrisma, color: "#8ea1bb" },
  { label: "Supabase", category: "Data", icon: SiSupabase, color: "#3ecf8e" },
  { label: "Firebase", category: "Data", icon: SiFirebase, color: "#ffca28" },
  { label: "MongoDB", category: "Data", icon: SiMongodb, color: "#47a248" },
  { label: "Git", category: "Workflow", icon: SiGit, color: "#f05032" },
  { label: "Vercel", category: "Deployment", icon: SiVercel, color: "#f4f1e8" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-[#080a07]">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-10"
        >
          <div>
            <span className="section-kicker">My skills</span>
            <SplitText
              as="h2"
              stagger={0.05}
              className="display-heading mt-4 max-w-lg text-[clamp(1.7rem,2.6vw,2.6rem)] text-[var(--foreground)]"
            >
              A focused toolkit for product work.
            </SplitText>
          </div>

          <p className="max-w-xl text-xs leading-6 text-[var(--muted)] sm:text-sm md:justify-self-end">
            Technologies I use across mobile development, frontend systems, backend services, and production delivery.
          </p>
        </motion.div>

        <div className="mt-7 grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                viewport={{ once: true, margin: "-60px" }}
                className="group relative min-h-24 overflow-hidden border-b border-r border-white/10 p-3 transition duration-300 hover:bg-white/[0.035] sm:min-h-28 sm:p-4"
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />

                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />

                <h3 className="mt-4 text-sm font-bold text-[var(--foreground)] sm:text-base">
                  {skill.label}
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {skill.category}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


