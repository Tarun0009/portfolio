"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Github, Linkedin, Mail, Phone } from "lucide-react";
import SplitText from "./ui/SplitText";

const focusAreas = [
  "React Native Apps",
  "Web Development",
  "Next.js & Remix",
  "Product UI",
];

export default function About() {
  return (
    <section id="about" className="section-shell bg-[#050605]">
      <div className="site-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-[640px]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/58 sm:text-sm">
            About Me
          </p>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.7rem,2.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-white">
            <SplitText as="span" stagger={0.05}>
              Professional
            </SplitText>{" "}
            <SplitText
              as="span"
              stagger={0.05}
              delay={0.15}
              className="text-[var(--accent)]"
            >
              Web & Mobile Solutions
            </SplitText>
            <br />
            <SplitText as="span" stagger={0.05} delay={0.35}>
              For Digital Products
            </SplitText>
          </h2>
          <p className="mt-5 max-w-[560px] text-xs font-medium leading-6 text-white/58 sm:text-sm">
            I&apos;m Tarun, a developer focused on modern web and mobile products. My work sits at the intersection of clean interfaces, thoughtful motion, and code that scales.
          </p>

          <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 text-sm font-semibold text-white sm:text-base"
              >
                <Check className="h-4 w-4 shrink-0 stroke-[3] text-[var(--accent)]" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/12 bg-white/[0.08] p-2.5 shadow-2xl shadow-black/30 backdrop-blur sm:grid-cols-2 sm:p-3">
            <a
              href="mailto:tarunpratapsingh097@gmail.com"
              className="group flex items-center gap-2.5 rounded-xl p-2.5 transition hover:bg-white/[0.04]"
            >
              <span style={{ color: "#000" }} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]">
                <Mail className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-tight text-white/46">
                  Email Us
                </span>
                <span className="mt-0.5 block break-all text-xs font-semibold text-white group-hover:text-[var(--accent)] sm:text-sm">
                  tarunpratapsingh097@gmail.com
                </span>
              </span>
            </a>

            <a
              href="tel:+919717862329"
              className="group flex items-center gap-2.5 rounded-xl p-2.5 transition hover:bg-white/[0.04]"
            >
              <span style={{ color: "#000" }} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-tight text-white/46">
                  Make A Call
                </span>
                <span className="mt-0.5 block text-xs font-semibold text-white group-hover:text-[var(--accent)] sm:text-sm">
                  +91 97178 62329
                </span>
              </span>
            </a>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <a
              href="mailto:tarunpratapsingh097@gmail.com"
              aria-label="Email"
              title="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/62 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Tarun0009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/62 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/62 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:justify-self-end xl:max-w-[360px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#171915] shadow-2xl shadow-black/45">
            <Image
              src="/images/about.jpg"
              alt="Tarun Pratap Singh"
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 360px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}



