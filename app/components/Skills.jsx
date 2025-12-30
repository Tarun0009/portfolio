"use client";

import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiRemix,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-10 bg-[#0c0c0c] text-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
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
                className="flex flex-col items-center text-sm sm:text-base p-4 rounded-lg border border-white/10 bg-black/80 transition duration-300 hover:bg-white/5 hover:scale-[1.03]"
              >
                <Icon className="text-3xl mb-2 text-gray-200" />

                <p className="mb-2 font-medium text-white">{skill.name}</p>

                <div className="w-full h-2 bg-white/10 rounded-full">
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
    red: "bg-red-500",
    green: "bg-green-500",
    gray: "bg-gray-500",
  };
  return map[color] || "bg-blue-500";
};

const skills = [
  { name: "React.js", icon: FaReact, level: "100%", color: "blue" },
  { name: "Next.js", icon: SiNextdotjs, level: "100%", color: "gray" },
  { name: "React Native", icon: FaReact, level: "85%", color: "indigo" },
  { name: "JavaScript", icon: FaJsSquare, level: "100%", color: "yellow" },
  { name: "TypeScript", icon: SiTypescript, level: "95%", color: "blue" },
  { name: "Remix", icon: SiRemix, level: "85%", color: "gray" },
  { name: "HTML5", icon: FaHtml5, level: "100%", color: "orange" },
  { name: "CSS3", icon: FaCss3Alt, level: "95%", color: "blue" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "95%", color: "sky" },
  { name: "MySQL", icon: SiMysql, level: "100%", color: "blue" },
  { name: "Java", icon: FaDatabase, level: "100%", color: "red" },
  { name: "Node.js", icon: FaNodeJs, level: "90%", color: "green" },
  { name: "Express.js", icon: SiExpress, level: "90%", color: "gray" },
  { name: "MongoDB", icon: SiMongodb, level: "90%", color: "green" },
];
