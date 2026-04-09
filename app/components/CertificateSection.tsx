"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: "Web Development",
    issuer: "Coursera",
    date: "Oct 17, 2022",
    image: "/images/webdev.png",
  },
  {
    title: "Object Oriented Programming In Java",
    issuer: "Coursera",
    date: "Jan 13, 2022",
    image: "/images/oops.png",
  },
  {
    title: "Developing Cloud Apps Using Node.js and React",
    issuer: "Coursera",
    date: "Mar 16, 2023",
    image: "/images/node.png",
  },
  {
    title: "Programming using Java",
    issuer: "Infosys",
    date: "Aug 29, 2022",
    image: "/images/java.png",
  },
  {
    title: "Data Structures",
    issuer: "Coursera",
    date: "Apr 06, 2022",
    image: "/images/data.png",
  },
  {
    title: "Algorithmic Toolbox",
    issuer: "Coursera",
    date: "Apr 09, 2022",
    image: "/images/algo.png",
  },
];

export default function CertificateSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 bg-(--bg-secondary) text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Here are some of the certifications I&apos;ve earned to enhance my technical expertise.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 p-4 flex flex-col items-center hover:border-white/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={400}
                height={300}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onClick={() => setModalImage(cert.image)}
                className="cursor-pointer w-full h-48 object-contain rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
              />

              <h3 className="text-base font-semibold text-white text-center">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate preview"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={modalImage}
                alt="Certificate Preview"
                width={900}
                height={700}
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              />
            </motion.div>

            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300 transition"
              onClick={() => setModalImage(null)}
              aria-label="Close certificate preview"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
