"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function About() {
  return (
    <section
      id="about"
      className="relative py-10 sm:py-12 md:py-14 bg-[#0c0c0c] text-gray-100 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800 opacity-40 -z-10" />

      {/* Soft Blob Effect */}
      <div className="absolute top-[-60px] left-[-40px] w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/images/about.jpg" alt="Tarun" width={500} height={500} />

            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
              About Me
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              I’m <span className="font-semibold text-blue-400">Tarun Pratap Singh</span> — a passionate developer focused on building intuitive, scalable, and performant apps.
              <br /><br />
              Skilled in <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">React.js, React Native, Tailwind CSS, and Java</span>, I aim to deliver solutions that matter.
              <br /><br />
              I completed my <span className="text-blue-400 font-semibold">B.Tech in Computer Science</span> in 2024. I also love sports, gaming, and exploring new ideas.
            </p>

            <p className="italic text-gray-500 mt-4 text-sm">
              “Code is like poetry — each line should have purpose and elegance.”
            </p>

            {/* CTA Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-3">
              <a
                href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                Let’s Connect
              </a>
              <a
                href="/TarunResume.pdf"
                download
                className="px-5 py-2 text-sm font-medium text-blue-500 border border-blue-600 bg-black hover:bg-gray-900 rounded-md transition"
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
