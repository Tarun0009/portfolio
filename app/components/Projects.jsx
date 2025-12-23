"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


// // Import Next.js-safe images from public folder
// import portfolioImg from "@/public/images/portfolio.png";
// // import classTrackerImg from "/public/images/classTracker.png";
// import passGenImg from "@/public/images/passGen.png";
// import shpSphereImg from "@/public/images/shpsphere.png";
// import omTechImg from "@/public/images/omtech.png";


const projects = [
  {
    title: "OM Tech Solutions – Company Website",
    description:
      "A fully responsive and dynamic company website built using React.js and Tailwind CSS.",
    link: "https://tarun0009.github.io/omconsulting/#/",
    image: "/images/omtech.png",
    tech: "React.js, Tailwind CSS",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React.js and Tailwind CSS to showcase my skills.",
    link: "https://tarun0009.github.io/myportfolio/",
    image: "/images/portfolio.png",
    tech: "React.js, Tailwind CSS",
  },
  {
    title: "Class Tracker",
    description:
      "A system for managing student attendance with an intuitive UI.",
    link: "https://tarun0009.github.io/ClassTracker/",
    image: "/images/classTracker.png",
    tech: "React, Node.js",
  },
  {
    title: "Password Generator",
    description:
      "Secure password generator with copy & customization features.",
    link: "https://tarun0009.github.io/Password-Generator/",
    image: "/images/passGen.png",
    tech: "JavaScript, HTML, CSS",
  },
  {
    title: "ShopSphere - E-commerce Website",
    description:
      "A clean and responsive e-commerce UI built with React + Tailwind.",
    link: "https://tarun0009.github.io/shopsphere/",
    image: "/images/shpsphere.png",
    tech: "React.js, Tailwind CSS",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="py-10 px-4 sm:px-6 lg:px-12 bg-[#0c0c0c] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            A selection of my recent web and mobile development work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative border border-white/10 rounded-xl p-3 bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.06)] hover:shadow-blue-500/10 hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ImageWithSkeleton src={project.image} alt={project.title} />

              <div className="mt-3">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.split(", ").map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-3">
                  <a
                    href={project.link}
                    className="inline-block bg-blue-600 text-white px-4 py-1.5 text-xs sm:text-sm rounded-md hover:bg-blue-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Image component with skeleton
-------------------------------- */
function ImageWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full aspect-video relative bg-gray-700 rounded-lg overflow-hidden">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-600" />}

      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
