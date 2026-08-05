"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import beeHome from "@/app/screenshots/01-home-screen.png";

interface Project {
  title: string;
  type: string;
  description: string;
  link: string;
  image: string | StaticImageData;
  tech: string[];
  role: string;
  year: string;
  contain?: boolean;
}

const projects: Project[] = [
  {
    title: "PropGenius AI",
    type: "Real Estate CRM / SaaS",
    description:
      "Full-stack SaaS product for Indian real-estate agents, combining AI listing generation, CRM workflows, analytics and subscription billing.",
    link: "https://prop-genius-web.vercel.app",
    image: "/images/propgenius.png",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini AI", "Razorpay", "Tailwind"],
    role: "Full-stack & UX",
    year: "2025",
  },
  {
    title: "BumbleBee Arcade",
    type: "Cross-platform PWA / Game Hub",
    description:
      "Installable game hub with four brain-training mini games, offline support, achievements and a leaderboard across web and mobile surfaces.",
    link: "#",
    image: beeHome,
    tech: ["React Native", "Expo", "PWA", "AsyncStorage", "Service Worker"],
    role: "Mobile & PWA",
    year: "2025",
    contain: true,
  },
  {
    title: "OM Tech Solutions",
    type: "Company Website / Corporate",
    description:
      "Responsive company website with clean content structure, reusable UI patterns and fast static deployment.",
    link: "https://tarun0009.github.io/omconsulting/#/",
    image: "/images/omtech.PNG",
    tech: ["React.js", "Tailwind CSS", "GitHub Pages"],
    role: "Frontend",
    year: "2024",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell bg-[#0b0e09]">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <span className="section-kicker">Latest works</span>
            <h2 className="display-heading mt-4 text-[clamp(1.7rem,2.6vw,2.6rem)] text-[var(--foreground)]">
              Selected product work.
            </h2>
          </div>
          <a
            href="#contact"
            className="pill-link pill-secondary w-fit !min-h-10 !text-xs"
          >
            Discuss a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        <div className="mt-10 grid gap-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group grid overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:bg-white/[0.055] lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative min-h-[200px] overflow-hidden bg-[#151a12] sm:min-h-[260px] lg:min-h-[300px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 94vw, 480px"
                  className={`${project.contain ? "object-contain p-6" : "object-cover"} transition duration-700 group-hover:scale-[1.035]`}
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#080a07]/82 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent)] backdrop-blur-md">
                  {project.year}
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">{project.type}</p>
                  <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-[-0.045em] text-[var(--foreground)] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">{project.description}</p>
                </div>

                <div className="mt-6">
                  <div className="grid gap-3 border-y border-white/10 py-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Role</p>
                      <p className="mt-0.5 text-sm font-bold text-[var(--foreground)]">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Year</p>
                      <p className="mt-0.5 text-sm font-bold text-[var(--foreground)]">{project.year}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--muted-strong)]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link === "#" ? (
                    <span className="mt-5 inline-flex items-center text-xs font-bold text-[var(--muted)]">
                      Case study in progress
                    </span>
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)]">
                      View project
                      <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

