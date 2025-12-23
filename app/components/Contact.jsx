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
      setStatus("✅ Message sent! I’ll get back to you shortly.");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 bg-[#0c0c0c] text-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Get in Touch</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Open to freelance, collaborations, or just a chat. Drop a message or connect on socials.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Left Box */}
        <div className="bg-black/80 p-5 rounded-lg border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.08)]">
          <h3 className="text-lg font-semibold text-white mb-3">Let’s Connect</h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <a href="mailto:tarunpratapsingh097@gmail.com" className="hover:underline text-blue-400">
                tarunpratapsingh097@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <a href="tel:+919717862329" className="hover:underline text-blue-400">
                +91 97178 62329
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-blue-500" />
              <a href="https://www.linkedin.com/in/tarun-pratap-singh/" target="_blank" className="hover:underline text-blue-400">
                LinkedIn
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Github className="w-4 h-4 text-gray-200" />
              <a href="https://github.com/tarunpratapsingh" target="_blank" className="hover:underline text-gray-300">
                GitHub
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/80 p-5 rounded-lg border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.08)]"
        >
          <h3 className="text-base font-semibold text-white mb-3">Send a Message</h3>

          <div className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-2.5 bg-gray-900 border border-white/10 rounded text-sm text-white"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-2.5 bg-gray-900 border border-white/10 rounded text-sm text-white"
            />

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-2.5 bg-gray-900 border border-white/10 rounded text-sm text-white resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 text-sm font-medium rounded transition ${
                loading ? "bg-gray-700" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-green-400 mt-2 text-xs">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
