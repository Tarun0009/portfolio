"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import SplitText from "./ui/SplitText";

const entries = [
  {
    type: "Experience",
    icon: BriefcaseBusiness,
    period: "Jul 2025 - Present",
    title: "React Native Developer",
    organization: "Appeneure",
    location: "On-site / India",
    points: [
      "Cross-platform mobile apps in React Native and Expo with focus on performance, reusable components, and responsive UI.",
      "Frontend work on a Remix web project with SSR, nested routes, and data-fetching patterns.",
      "REST API integration, user-flow optimization, debugging, and code reviews across mobile and web.",
    ],
    tags: ["React Native", "Expo", "Remix", "Next.js", "TypeScript", "Node.js", "Prisma", "MongoDB"],
  },
  {
    type: "Education",
    icon: GraduationCap,
    period: "2020 - 2024",
    title: "B.Tech in Computer Science",
    organization: "Noida Institute of Engineering & Technology",
    location: "Greater Noida, India",
    points: ["Bachelor of Technology in Computer Science & Engineering.", "Full-time, on-campus program."],
    tags: ["Computer Science", "Engineering", "2024"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-[#080a07]">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="section-kicker">My resume</span>
            <SplitText
              as="h2"
              stagger={0.05}
              className="display-heading mt-4 text-[clamp(1.7rem,2.6vw,2.6rem)] text-[var(--foreground)]"
            >
              Practical product experience.
            </SplitText>
            <p className="mt-4 max-w-md text-xs leading-6 text-[var(--muted)] sm:text-sm">
              A concise view of my current role and academic foundation, focused on the parts that matter for product development.
            </p>
          </motion.div>

          <div className="grid gap-3">
            {entries.map((entry, index) => {
              const Icon = entry.icon;
              return (
                <motion.article
                  key={entry.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="group grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-[var(--accent)]/45 hover:bg-white/[0.055] sm:grid-cols-[8.5rem_1fr] sm:p-5"
                >
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span
                        style={{ color: "#000" }}
                        className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)]"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                        {entry.type}
                      </span>
                    </div>
                    <p className="mt-3.5 text-xs font-semibold text-[var(--muted)]">
                      {entry.period}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.035em] text-[var(--foreground)] sm:text-xl">
                      {entry.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold text-[var(--accent)]">
                      {entry.organization}{" "}
                      <span className="text-[var(--muted)]">/ {entry.location}</span>
                    </p>
                    <ul className="mt-4 grid gap-2 text-xs leading-6 text-[var(--muted)]">
                      {entry.points.map((point) => (
                        <li key={point} className="grid grid-cols-[0.6rem_1fr] gap-2.5">
                          <span className="mt-[9px] h-1 w-1 rounded-full bg-[var(--accent)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--muted-strong)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

