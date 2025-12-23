"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 py-8 px-4 border-t border-white/10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-white">Tarun Pratap Singh</h2>
          <p className="text-xs text-gray-400 mt-1">
            Full-Stack Developer | Problem Solver
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#certificates" className="hover:text-blue-400">Certificates</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold text-white mb-2">Connect with Me</h3>

          <div className="flex justify-center sm:justify-start gap-5">
            <a href="https://github.com/Tarun0009" target="_blank" className="hover:text-blue-400">
              <Github className="w-4 h-4" />
            </a>

            <a href="https://www.linkedin.com/in/tarun-pratap-singh/" target="_blank" className="hover:text-blue-400">
              <Linkedin className="w-4 h-4" />
            </a>

            <a href="mailto:tarunpratapsingh097@gmail.com" className="hover:text-blue-400">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-6 text-center text-xs text-gray-600">
        Designed & built by <span className="text-white">Tarun Pratap Singh</span>
      </div>

    </footer>
  );
}
