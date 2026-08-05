"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import { TbApi } from "react-icons/tb";
import {
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

interface Skill {
  label: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { label: "Git", icon: SiGit, color: "#f05032" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { label: "React.js", icon: SiReact, color: "#61dafb" },
  { label: "Next.js", icon: SiNextdotjs, color: "#f4f1e8" },
  { label: "React Native", icon: SiReact, color: "#61dafb" },
  { label: "Expo", icon: SiExpo, color: "#f4f1e8" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { label: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
  { label: "Firebase", icon: SiFirebase, color: "#ffca28" },
  { label: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { label: "Express", icon: SiExpress, color: "#f4f1e8" },
  { label: "REST API", icon: TbApi, color: "#c9f31d" },
  { label: "Prisma", icon: SiPrisma, color: "#8ea1bb" },
  { label: "Vercel", icon: SiVercel, color: "#f4f1e8" },
  { label: "Framer Motion", icon: SiFramer, color: "#4d75ff" },
];

function SkillList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 sm:gap-11 sm:pr-11 lg:gap-14 lg:pr-14"
    >
      {skills.map((skill) => {
        const Icon = skill.icon;

        return (
          <li
            key={skill.label}
            className="flex min-w-max items-center gap-2.5 text-xs font-medium text-white/60 sm:text-sm"
          >
            <Icon
              aria-hidden="true"
              className="h-4 w-4 shrink-0 sm:h-[1.1rem] sm:w-[1.1rem]"
              style={{ color: skill.color }}
            />
            <span>{skill.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default function HeroSkillsTicker() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-label="Technology skills"
      className="absolute inset-x-0 bottom-2 z-30 h-14 overflow-hidden bg-transparent sm:h-16"
    >

      <motion.div
        className="relative flex h-full w-max items-center will-change-transform"
        animate={reduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? undefined
            : {
                x: {
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                },
              }
        }
      >
        <SkillList />
        <SkillList hidden />
      </motion.div>
    </div>
  );
}






