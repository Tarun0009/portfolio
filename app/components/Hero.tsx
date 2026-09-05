"use client";


import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import HeroSkillsTicker from "./HeroSkillsTicker";
import SplitText from "./ui/SplitText";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

const stats = [
  { value: "1+", label: "Years Of Experience" },
  { value: "3+", label: "Project Complete" },
  { value: "100%", label: "Client Satisfactions" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.94]);

  return (
    <header
      id="home"
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#121312] text-white xl:h-[100svh] xl:min-h-[560px]"
    >
      {/* Three.js particle field — interactive lime dots that react to cursor */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden sm:block">
        <HeroCanvas />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-50 z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.075) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "clamp(72px, 10vw, 190px) 100%, 100% 100%",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-white/12 z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/12 z-[2]" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1540px] min-w-0 items-center gap-x-6 gap-y-7 px-4 pb-24 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:grid-cols-[minmax(0,0.88fr)_minmax(330px,0.9fr)] lg:gap-y-4 lg:px-8 lg:pb-20 lg:pt-20 xl:h-full xl:min-h-0 xl:grid-cols-[minmax(0,0.9fr)_minmax(390px,0.92fr)_minmax(240px,0.46fr)] xl:gap-x-2 xl:pb-24 xl:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 max-w-[560px] lg:self-center xl:-mr-10"
        >
          <p className="text-[clamp(1.55rem,2.1vw,2.65rem)] font-medium leading-none tracking-[-0.055em] text-white/42">
            Hello, i&apos;m
          </p>

          <h1 className="mt-4 max-w-[560px] font-black leading-[0.98] tracking-[-0.055em]">
            <SplitText
              as="span"
              delay={0.15}
              stagger={0.05}
              className="block text-[clamp(2rem,10vw,2.35rem)] text-[var(--accent)] sm:text-[clamp(2.35rem,3.25vw,3.85rem)]"
            >
              Tarun Pratap Singh
            </SplitText>
            <SplitText
              as="span"
              delay={0.35}
              stagger={0.05}
              className="mt-3 block text-[clamp(1.75rem,8.5vw,2.05rem)] font-semibold tracking-[-0.055em] text-white sm:text-[clamp(2.05rem,2.95vw,3.45rem)]"
            >
              React Native Developer
            </SplitText>
          </h1>

          <p className="mt-5 max-w-[500px] text-sm font-semibold leading-7 text-white/62 sm:text-base">
            Frontend developer specializing in high-performance mobile apps and modern web technologies like Next.js, Remix and Expo.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#contact"
              style={{ color: "#000" }}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[0.9rem] bg-[var(--accent)] px-7 text-sm font-black transition hover:-translate-y-1"
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {/*
            <a
              href="/images/Tarun_resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2.5 text-sm font-bold text-white underline decoration-white/60 decoration-1 underline-offset-4 transition hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            >
              Download Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
            */}
          </div>
        </motion.div>

        <motion.div
          ref={portraitRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: portraitY, scale: portraitScale }}
          className="relative z-10 mx-auto aspect-square w-[min(80vw,400px)] sm:w-[min(58vw,480px)] lg:w-[min(35vw,460px)] lg:self-end xl:w-[min(31vw,calc(100svh-11rem),560px)] 2xl:w-[min(31vw,calc(100svh-11rem),580px)]"
        >
          <div
            className="absolute inset-[1%] rounded-full"
            style={{
              background:
                "conic-gradient(from 18deg, transparent 0deg, transparent 28deg, var(--accent) 28deg, var(--accent) 143deg, transparent 143deg, transparent 238deg, var(--accent) 238deg, var(--accent) 280deg, transparent 280deg)",
            }}
          />
          <div className="absolute inset-[7%] overflow-hidden rounded-full border border-white/10 bg-black">
            <Image
              src="/images/img.png"
              alt="Tarun Pratap Singh"
              fill
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 58vw, (max-width: 1280px) 35vw, 560px"
              className="object-cover object-[50%_35%]"
            />
          </div>
        </motion.div>
        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 mx-auto grid w-full max-w-[860px] grid-cols-3 rounded-[1.35rem] bg-black p-3 shadow-2xl shadow-black/45 sm:p-4 lg:col-span-2 xl:col-span-1 xl:mx-0 xl:block xl:max-w-[250px] xl:justify-self-end xl:p-5"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0 border-r border-white/12 px-2 py-1 last:border-r-0 sm:px-4 xl:border-r-0 xl:border-b xl:px-0 xl:py-6 xl:first:pt-1 xl:last:border-b-0 xl:last:pb-1">
              <p className="text-[clamp(1.55rem,8vw,2rem)] font-black leading-none tracking-[-0.06em] text-[var(--accent)] sm:text-[clamp(1.85rem,3.7vw,2.85rem)] xl:text-[clamp(2rem,2.5vw,2.85rem)]">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-medium leading-4 text-white/72 sm:text-xs sm:leading-5 xl:mt-3 xl:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.aside>
      </div>

      <HeroSkillsTicker />
    </header>
  );
}




