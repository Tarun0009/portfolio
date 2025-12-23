"use client";

import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-10 bg-[#0c0c0c] text-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Skills
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          Tools and technologies I use regularly in my development work.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, i) => {
            const colorClass = getColorClass(skill.color);
            const Icon = skill.icon;

            return (
              <div
                key={i}
                className={`flex flex-col items-center text-sm sm:text-base group p-3 rounded-lg shadow-md border border-white/10 bg-black/80 transition duration-300 hover:scale-105`}
              >
                <Icon className="text-3xl mb-1" />

                <p className="mb-1 font-medium">{skill.name}</p>

                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div
                    className={`h-2 rounded-full ${colorClass}`}
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Tailwind-safe static color map
const getColorClass = (color) => {
  const map = {
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    sky: "bg-sky-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    green: "bg-green-500",
    gray: "bg-gray-500",
  };
  return map[color] || "bg-blue-500";
};

const skills = [
  { name: "React.js", icon: FaReact, level: "100%", color: "blue" },
  { name: "React Native", icon: FaReact, level: "85%", color: "indigo" },
  { name: "JavaScript", icon: FaJsSquare, level: "100%", color: "yellow" },
  { name: "HTML5", icon: FaHtml5, level: "100%", color: "orange" },
  { name: "CSS3", icon: FaCss3Alt, level: "95%", color: "blue" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "95%", color: "sky" },
  { name: "MySQL", icon: SiMysql, level: "100%", color: "blue" },
  { name: "Bootstrap", icon: FaBootstrap, level: "95%", color: "purple" },
  { name: "Java", icon: FaDatabase, level: "100%", color: "red" },
  { name: "Node.js", icon: FaNodeJs, level: "90%", color: "green" },
  { name: "Express.js", icon: SiExpress, level: "90%", color: "gray" },
  { name: "MongoDB", icon: SiMongodb, level: "90%", color: "green" },
];
