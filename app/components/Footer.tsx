"use client";

import { Github, Linkedin, Mail, ArrowUp, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative bg-(--bg-primary) text-gray-400 border-t border-white/5 overflow-hidden"
      style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom, 0px))" }}
    >
      {/* Top accent glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12 md:pb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-white tracking-tight leading-tight">
                Tarun Pratap Singh
              </h2>
              <p className="text-blue-400/80 font-semibold text-[11px] mt-1.5 uppercase tracking-[0.18em]">
                React Native & Frontend Developer
              </p>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-xs">
                Passionate about building high-performance mobile applications and immersive web experiences with modern technologies.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm text-gray-500">
                  <MapPin className="w-3.5 h-3.5 text-blue-500/60 shrink-0" />
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-500">
                  <Globe className="w-3.5 h-3.5 text-blue-500/60 shrink-0" />
                  <span>Available for global opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              className="text-white text-sm font-bold mb-5 uppercase tracking-widest flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {[
                { label: "About",      href: "#about"      },
                { label: "Experience", href: "#experience" },
                { label: "Projects",   href: "#projects"   },
                { label: "Contact",    href: "#contact"    },
              ].map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-0 group"
                  >
                    <span className="inline-block w-0 group-hover:w-3 h-px bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2 shrink-0" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <motion.h3
              className="text-white text-sm font-bold mb-5 uppercase tracking-widest flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Let&apos;s Connect
            </motion.h3>

            <div className="flex gap-3">
              {[
                { icon: Github,   href: "https://github.com/Tarun0009",                             label: "GitHub"   },
                { icon: Linkedin, href: "https://www.linkedin.com/in/tarun-pratap-singh-941b91220/", label: "LinkedIn" },
                { icon: Mail,     href: "mailto:tarunpratapsingh097@gmail.com",                     label: "Email"    },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-2xl bg-zinc-900/60 border border-white/6 text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-zinc-800 transition-all duration-400 shadow-sm"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35, delay: 0.25 + i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </motion.a>
                );
              })}
            </div>

            <motion.button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2.5 text-xs text-gray-600 hover:text-white transition-all duration-300 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="p-1.5 rounded-full border border-gray-700 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-400">
                <ArrowUp className="w-3 h-3" />
              </span>
              Back to Top
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Tarun Pratap Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-gray-700 uppercase tracking-widest text-[10px]">Built with</span>
            <span className="text-gray-500 font-medium">Next.js &middot; TypeScript &middot; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
