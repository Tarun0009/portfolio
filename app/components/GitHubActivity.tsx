"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from "react-icons/fa";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  totalStars: number;
}

export default function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/Tarun0009"),
          fetch("https://api.github.com/users/Tarun0009/repos?per_page=100"),
        ]);
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        const totalStars = Array.isArray(reposData)
          ? reposData.reduce((sum: number, repo: { stargazers_count: number }) => sum + repo.stargazers_count, 0)
          : 0;
        setStats({
          public_repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          totalStars,
        });
      } catch {
        setStats(null);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHub();
  }, []);

  const statCards = stats ? [
    { label: "Repositories", value: stats.public_repos, icon: FaCodeBranch, gradient: "from-blue-500 to-cyan-500",    glow: "rgba(59,130,246,0.15)"  },
    { label: "Stars Earned",  value: stats.totalStars,  icon: FaStar,       gradient: "from-yellow-500 to-orange-500", glow: "rgba(234,179,8,0.15)"   },
    { label: "Followers",     value: stats.followers,   icon: FaUsers,      gradient: "from-purple-500 to-pink-500",   glow: "rgba(168,85,247,0.15)"  },
    { label: "Following",     value: stats.following,   icon: FaUsers,      gradient: "from-emerald-500 to-teal-500",  glow: "rgba(16,185,129,0.15)"  },
  ] : [];

  return (
    <section id="github" className="py-16 sm:py-20 lg:py-24 bg-(--bg-primary) text-gray-100 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-gray-400 bg-white/5 border border-white/10">
              <FaGithub className="text-[10px]" />
              Open Source
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            GitHub Activity
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Live stats from my GitHub profile.
          </motion.p>
        </div>

        {/* Stats */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-white/15 border-t-white/60 rounded-full animate-spin" />
          </div>
        ) : stats ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {statCards.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="relative group bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-white/8 p-6 text-center hover:border-white/18 transition-all duration-400 overflow-hidden"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Glow bg on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center, ${stat.glow}, transparent 70%)` }}
                  />
                  <div className={`relative inline-flex p-3 rounded-2xl bg-linear-to-br ${stat.gradient} mb-4 shadow-lg`}>
                    <Icon className="text-white text-base" />
                  </div>
                  <motion.p
                    className="relative text-2xl sm:text-3xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="relative text-xs text-gray-400 mt-1.5 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-sm py-12">Unable to load GitHub stats.</p>
        )}

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Tarun0009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-2xl bg-zinc-800/80 border border-white/10 text-sm font-semibold text-gray-300 hover:text-white hover:bg-zinc-700/80 hover:border-white/20 transition-all duration-300 shadow-lg"
          >
            <FaGithub className="text-base" />
            View Full Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
