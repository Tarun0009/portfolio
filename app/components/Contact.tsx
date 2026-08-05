"use client";

import { useMemo, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Check, Mail, MessageSquare, Phone, Tag, User } from "lucide-react";

type Field = "name" | "email" | "phone" | "subject" | "message";
type FormState = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Touched = Partial<Record<Field, boolean>>;

const focusPoints = [
  "1+ Years Of Experience",
  "React Native & Frontend",
  "Mobile Apps Development",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+\d][\d\s()-]{6,20}$/;

function validate(form: FormState): Errors {
  const errors: Errors = {};

  const name = form.name.trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name is too short.";

  const email = form.email.trim();
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Enter a valid email address.";

  const phone = form.phone.trim();
  if (phone && !PHONE_REGEX.test(phone)) errors.phone = "Enter a valid phone number.";

  const subject = form.subject.trim();
  if (subject && subject.length < 3) errors.subject = "Subject is too short.";

  const message = form.message.trim();
  if (!message) errors.message = "Message is required.";
  else if (message.length < 10) errors.message = "Message should be at least 10 characters.";

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState<Touched>({});
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [loading, setLoading] = useState(false);

  const errors = useMemo(() => validate(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Mark every field touched so all errors surface on submit
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });
    if (!isValid) return;

    setLoading(true);
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          ...form,
          from_name: "Portfolio Contact Form",
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="section-shell scroll-mt-24 bg-[#080a07]">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 xl:gap-16">
          {/* Left column — intro + checklist */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/58 sm:text-sm">
              Get In Touch
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(1.85rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
              Let&apos;s Talk For your{" "}
              <span className="text-[var(--accent)]">Next Projects</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm font-medium leading-6 text-white/58">
              Open to freelance projects, full-time roles, and collaborations. Send a message and
              I&apos;ll get back within a day.
            </p>

            <ul className="mt-8 grid gap-4">
              {focusPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span
                    style={{ color: "#000" }}
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--accent)]"
                  >
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right column — form */}
          <motion.form
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
              <FormField
                label="Full Name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={onChange}
                onBlur={onBlur}
                Icon={User}
                autoComplete="name"
                error={touched.name ? errors.name : undefined}
              />
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={onChange}
                onBlur={onBlur}
                Icon={Mail}
                autoComplete="email"
                error={touched.email ? errors.email : undefined}
                inputMode="email"
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={onChange}
                onBlur={onBlur}
                Icon={Phone}
                autoComplete="tel"
                error={touched.phone ? errors.phone : undefined}
                inputMode="tel"
              />
              <FormField
                label="Subject"
                name="subject"
                type="text"
                placeholder="Enter a subject"
                value={form.subject}
                onChange={onChange}
                onBlur={onBlur}
                Icon={Tag}
                error={touched.subject ? errors.subject : undefined}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-bold tracking-tight text-[var(--foreground)]"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Enter your message"
                  aria-invalid={Boolean(touched.message && errors.message)}
                  aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                  className={inputClasses(Boolean(touched.message && errors.message), "textarea")}
                />
                <MessageSquare className="pointer-events-none absolute right-4 top-5 h-5 w-5 text-white/55 sm:right-8" />
              </div>
              {touched.message && errors.message && (
                <FieldError id="message-error">{errors.message}</FieldError>
              )}
            </div>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={loading}
                style={{ color: "#000" }}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-3.5 w-3.5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" opacity="0.25" />
                      <path d="M4 12a8 8 0 018-8" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Us Message
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 text-xs font-bold text-[var(--accent)] sm:text-sm"
              >
                Message sent successfully &mdash; I&apos;ll be in touch soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 text-xs font-bold text-red-400 sm:text-sm"
              >
                Failed to send. Please email me directly at tarunpratapsingh097@gmail.com.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Field primitives ---------------- */

interface FormFieldProps {
  label: string;
  name: Field;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  Icon: React.ComponentType<{ className?: string }>;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url" | "none";
  error?: string;
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  Icon,
  autoComplete,
  inputMode,
  error,
}: FormFieldProps) {
  const hasError = Boolean(error);
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-bold tracking-tight text-[var(--foreground)]">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
          className={inputClasses(hasError, "input")}
        />
        <Icon
          className={`pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors sm:right-8 ${
            hasError ? "text-red-400/80" : "text-white/75"
          }`}
        />
      </div>
      {hasError && <FieldError id={`${name}-error`}>{error}</FieldError>}
    </div>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.p
      id={id}
      role="alert"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-red-400"
    >
      <AlertCircle className="h-3 w-3" />
      {children}
    </motion.p>
  );
}

function inputClasses(hasError: boolean, kind: "input" | "textarea") {
  const base =
    "contact-field min-h-[68px] w-full appearance-none rounded-[1.25rem] border border-white/15 bg-black/45 px-4 py-4 pr-12 text-base font-medium text-[var(--foreground)] shadow-none outline-none ring-0 placeholder-white/75 transition duration-200 sm:min-h-[76px] sm:px-9 sm:pr-16 focus:border-[var(--accent)] focus:shadow-none focus:outline-none focus:ring-0 focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0";
  const errored = hasError
    ? "border-red-400/65 focus:border-red-400/90"
    : "hover:border-white/25";
  const modifier = kind === "textarea" ? " min-h-[170px] resize-none py-5 pr-12 sm:pr-16" : "";
  return `${base} ${errored}${modifier}`;
}







