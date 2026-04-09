"use client";

import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import type { IconType } from "react-icons";
import TiltCard from "./ui/TiltCard";

interface Service {
  title: string;
  description: string;
  icon: IconType;
  gradient: string;
  glow: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Building modern, responsive websites with React, Next.js, and cutting-edge technologies.",
    icon: FaCode,
    gradient: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.12)",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps using React Native with seamless user experiences.",
    icon: FaMobileAlt,
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.12)",
  },
  {
    title: "Performance Optimization",
    description: "Speed up your applications with best practices in caching, lazy loading, and code splitting.",
    icon: FaRocket,
    gradient: "from-indigo-500 to-purple-500",
    glow: "rgba(99,102,241,0.12)",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-(--bg-primary) text-gray-100 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Services
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 max-w-md mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Services I offer to bring your ideas to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <TiltCard
                  className="group relative h-full rounded-2xl border border-white/8 bg-zinc-900/60 p-7 sm:p-8 backdrop-blur-sm hover:border-white/18 transition-all duration-400 overflow-hidden"
                  tiltAmount={8}
                >
                  {/* Card glow bg */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${service.glow}, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <div className={`relative inline-flex p-4 rounded-2xl bg-linear-to-br ${service.gradient} mb-6 shadow-lg`}>
                    <Icon className="text-2xl text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-400`} />
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
