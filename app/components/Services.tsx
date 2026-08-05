"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Gauge, MonitorSmartphone, Sparkles } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web apps built with React, Next.js and Remix. Server-side rendering, clean architecture and polished UI as standard.",
    icon: Code2,
    tags: ["Next.js", "React", "Remix", "TypeScript", "Tailwind"],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform iOS and Android apps with React Native and Expo. Native-feeling UX with a shared product-minded codebase.",
    icon: MonitorSmartphone,
    tags: ["React Native", "Expo", "PWA", "AsyncStorage"],
  },
  {
    title: "Motion & UX",
    description:
      "Framer Motion micro-interactions, scroll-triggered animations, and refined product flows that make interfaces feel intentional.",
    icon: Sparkles,
    tags: ["Framer Motion", "Interaction", "UX", "Polish"],
  },
  {
    title: "Performance & Polish",
    description:
      "Caching, lazy loading, code splitting, Lighthouse audits, and a practical eye for the details users actually feel.",
    icon: Gauge,
    tags: ["Performance", "SEO", "A11y", "Web Vitals"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell bg-[#0b0e09]">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl"
        >
          <span className="section-kicker">Popular services</span>
          <h2 className="display-heading mt-4 text-[clamp(1.7rem,2.6vw,2.6rem)] text-[var(--foreground)]">
            What I can help build.
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:bg-white/[0.055] sm:p-6"
              >
                <div className="absolute right-5 top-5 text-4xl font-bold tracking-[-0.08em] text-white/[0.035] transition group-hover:text-[var(--accent)]/10">
                  {String(index + 1).padStart(2, "0")}.
                </div>
                <div className="relative z-10">
                  <span
                    style={{ color: "#000" }}
                    className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent)]"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-6 max-w-xs text-lg font-bold tracking-[-0.035em] text-[var(--foreground)] sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[var(--muted)] sm:text-sm">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--muted-strong)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)]"
                  >
                    Let&apos;s discuss
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

