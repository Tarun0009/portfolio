"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  const inputClass = "w-full px-4 py-3.5 bg-white/3 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 hover:border-white/20 transition-all duration-300";

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-(--bg-secondary) text-gray-100 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Say Hello
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 max-w-md mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Open to freelance, full-time roles, collaborations, or just a conversation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/60 backdrop-blur-sm p-7 sm:p-8 rounded-2xl border border-white/8 hover:border-white/15 transition-colors duration-300 flex-1">
              <h3 className="text-lg font-bold text-white mb-7">Contact Information</h3>

              <div className="space-y-5">
                {[
                  { href: "mailto:tarunpratapsingh097@gmail.com", icon: Mail,    label: "tarunpratapsingh097@gmail.com", color: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20" },
                  { href: "tel:+919717862329",                    icon: Phone,   label: "+91 97178 62329",                color: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20" },
                  { href: "https://www.linkedin.com/in/tarun-pratap-singh-941b91220/", icon: Linkedin, label: "LinkedIn", color: "bg-blue-600/10 text-blue-500 group-hover:bg-blue-600/20", external: true },
                  { href: "https://github.com/Tarun0009",          icon: Github,  label: "GitHub",                        color: "bg-gray-500/10 text-gray-300 group-hover:bg-gray-500/20", external: true },
                ].map(({ href, icon: Icon, label, color, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <span className={`p-3 rounded-xl ${color} transition-colors duration-300 shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-zinc-900/60 backdrop-blur-sm p-7 sm:p-8 rounded-2xl border border-white/8 hover:border-white/15 transition-colors duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-7">Send a Message</h3>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                autoComplete="name"
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                autoComplete="email"
                className={inputClass}
              />
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className={`${inputClass} resize-none`}
              />

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-sm font-bold bg-linear-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
                whileHover={{ scale: loading ? 1 : 1.01 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </motion.button>

              {status === "success" && (
                <motion.p className="text-sm text-emerald-400 text-center font-medium" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                  Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p className="text-sm text-red-400 text-center" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                  Failed to send. Please try again or email directly.
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
