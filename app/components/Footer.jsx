"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            Tarun Pratap Singh
          </h2>
          <p className="text-sm mt-1">
            Full-Stack Developer · Problem Solver
          </p>
          <p className="text-xs text-gray-500 mt-3">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-medium text-white mb-4">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Projects", "Skills", "Certificates", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-medium text-white mb-4">
            Connect
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Tarun0009"
              target="_blank"
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 hover:bg-white/5 transition"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/tarun-pratap-singh/"
              target="_blank"
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 hover:bg-white/5 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:tarunpratapsingh097@gmail.com"
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 hover:bg-white/5 transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-gray-500">
        Designed & built by{" "}
        <span className="text-white">Tarun Pratap Singh</span>
      </div>
    </footer>
  );
}
