"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 bg-(--bg-secondary) text-gray-100 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 lg:gap-16">

          {/* Image */}
          <motion.div
            className="w-full md:w-5/12 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-[340px] md:max-w-none">
              {/* Decorative border ring */}
              <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-blue-500/20 via-transparent to-purple-500/20 blur-sm" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_64px_-12px_rgba(59,130,246,0.15)]"
              >
                <Image
                  src="/images/about.jpg"
                  alt="Tarun Pratap Singh"
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-7/12 text-center md:text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section pill */}
            <motion.div
              className="flex items-center justify-center md:justify-start mb-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                About Me
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text mb-6 leading-tight">
              About Me
            </h2>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 space-y-4">
              I&apos;m <span className="font-semibold text-blue-400">Tarun Pratap Singh</span> — a passionate developer focused on building intuitive, scalable, and performant apps.
              <br /><br />
              Skilled in <span className="font-semibold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">React.js, React Native, Tailwind CSS, and Java</span>, I aim to deliver solutions that matter.
              <br /><br />
              I completed my <span className="text-blue-400 font-semibold">B.Tech in Computer Science</span> in 2024. I also love sports, gaming, and exploring new ideas.
            </p>

            {/* Quote card */}
            <motion.div
              className="mt-8 px-5 py-4 rounded-2xl border-l-2 border-blue-500/60 bg-blue-500/5 border border-blue-500/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic text-gray-400 text-sm leading-relaxed">
                &ldquo;Code is like poetry — each line should have purpose and elegance.&rdquo;
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <a
                href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 text-sm font-semibold bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/25 text-center"
              >
                Let&apos;s Connect
              </a>
              <a
                href="/images/Tarun_resume.pdf"
                download
                className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-blue-400 border border-blue-500/30 bg-blue-500/8 hover:bg-blue-500/15 rounded-2xl transition-all duration-300 text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
