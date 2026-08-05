"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#experience" },
  // { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Tarun0009", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tarun-pratap-singh-941b91220/", icon: Linkedin },
  { label: "Email", href: "mailto:tarunpratapsingh097@gmail.com", icon: Mail },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/10 bg-[#080a07] py-10">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold tracking-[-0.03em] text-[var(--foreground)]">Tarun Pratap Singh</p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              React Native & Frontend Developer based in Noida, India.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-[var(--muted)]">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-[var(--accent)]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{ color: "#000" }}
              className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent)] transition hover:-translate-y-1"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}



