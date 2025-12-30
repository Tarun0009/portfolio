"use client";

import { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    setTimeout(() => {
      setLoading(false);
      setStatus("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-black text-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto">
          Open to freelance, full-time roles, collaborations, or just a conversation.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        
        {/* Contact Info */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
          <h3 className="text-lg font-medium text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-4 text-sm text-gray-400">
            <a
              href="mailto:tarunpratapsingh097@gmail.com"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Mail className="w-4 h-4" />
              tarunpratapsingh097@gmail.com
            </a>

            <a
              href="tel:+919717862329"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Phone className="w-4 h-4" />
              +91 97178 62329
            </a>

            <a
              href="https://www.linkedin.com/in/tarun-pratap-singh/"
              target="_blank"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/tarunpratapsingh"
              target="_blank"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-lg font-medium text-white mb-5">
            Send a Message
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2.5 bg-black border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full px-4 py-2.5 bg-black border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
            />

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              className="w-full px-4 py-2.5 bg-black border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:border-white/30"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-gray-200 transition disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send message"}
            </button>

            {status && (
              <p className="text-xs text-green-400 text-center mt-2">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
