"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

interface TimelineEntry {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string[];
  tech?: string[];
}

const timeline: TimelineEntry[] = [
  {
    type: "work",
    title: "React Native Developer",
    organization: "Appeneure",
    period: "Jul 2025 - Present",
    description: [
      "Developing cross-platform mobile applications using React Native and Expo with a focus on performance, reusable components, and responsive UI for Android and iOS platforms.",
      "Contributing to frontend development of a Remix-based web project by implementing server-side rendering, nested routes, and data-fetching patterns.",
      "Integrating REST APIs, building reusable UI components, and optimizing user flows to enhance overall application experience.",
      "Collaborating with team members on debugging, feature implementation, and code reviews across mobile and web projects.",
      "Successfully transitioned from intern to full-time role after demonstrating strong technical contributions.",
    ],
    tech: ["Next.js", "JavaScript", "TypeScript", "Node.js", "MongoDB Atlas", "React.js", "React Native", "Expo"],
  },
  {
    type: "education",
    title: "B.Tech in Computer Science and Engineering (CSE)",
    organization: "Noida Institute of Engineering & Technology, Greater Noida",
    period: "2020 - 2024",
    description: [
      "Bachelor of Technology / Engineering",
      "Full Time",
    ],
  },
];

const cardMeta = {
  work: {
    label: "Work Experience",
    Icon: FaBriefcase,
    iconGradient: "from-blue-500 to-cyan-500",
    topLine: "via-blue-500/50",
    pill: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    org: "text-blue-400",
    bullet: "text-blue-400",
    tag: "bg-blue-500/8 text-blue-300/80 border-blue-500/12",
    glow: "rgba(59,130,246,0.06)",
  },
  education: {
    label: "Education",
    Icon: FaGraduationCap,
    iconGradient: "from-purple-500 to-violet-600",
    topLine: "via-purple-500/50",
    pill: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    org: "text-purple-400",
    bullet: "text-purple-400",
    tag: "bg-purple-500/8 text-purple-300/80 border-purple-500/12",
    glow: "rgba(168,85,247,0.06)",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-(--bg-primary) text-gray-100 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            className="flex items-center justify-center mb-3"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Journey
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience & Education
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-400 max-w-md mx-auto text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            My professional journey and academic background.
          </motion.p>
        </div>

        {/* Horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {timeline.map((entry, i) => {
            const m = cardMeta[entry.type];
            const { Icon } = m;
            const isCurrent = entry.period.toLowerCase().includes("present");

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl border border-white/8 bg-zinc-900/50 overflow-hidden group hover:border-white/14 hover:bg-zinc-900/70 transition-all duration-400 h-full">

                  {/* Top accent line */}
                  <div className={`h-px bg-linear-to-r from-transparent ${m.topLine} to-transparent`} />

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${m.glow}, transparent 70%)` }}
                  />

                  <div className="relative p-5 sm:p-6 flex flex-col gap-4">

                    {/* Header: icon + label + period + current */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className={`w-7 h-7 rounded-lg bg-linear-to-br ${m.iconGradient} flex items-center justify-center shrink-0`}>
                        <Icon className="text-white text-[10px]" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded-full ${m.pill}`}>
                        {m.label}
                      </span>
                      <div className="flex-1" />
                      {isCurrent && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                      <span className={`text-[10px] font-bold border px-2 py-0.5 rounded-full ${m.pill}`}>
                        {entry.period}
                      </span>
                    </div>

                    {/* Title + org */}
                    <div>
                      <h3 className="text-base font-bold text-white leading-snug">
                        {entry.title}
                      </h3>
                      <p className={`text-xs font-medium mt-0.5 ${m.org}`}>
                        {entry.organization}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/6" />

                    {/* Description */}
                    {entry.type === "work" ? (
                      <ul className="space-y-1.5">
                        {entry.description.map((desc, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                            <span className={`mt-[5px] shrink-0 text-[7px] ${m.bullet}`}>◆</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-gray-400">
                        {entry.description.join(" · ")}
                      </p>
                    )}

                    {/* Tech tags */}
                    {entry.tech && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/6">
                        {entry.tech.map((t) => (
                          <span
                            key={t}
                            className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${m.tag}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
