"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
} from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#00d4ff",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "#a855f7",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "Fatehin03",
    href: personalInfo.github,
    color: "#f59e0b",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "alam-fatehin",
    href: personalInfo.linkedin,
    color: "#10b981",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    value: "Fatehin Alam",
    href: personalInfo.facebook,
    color: "#3b82f6",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");

    // Reset after 3s
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div
        className="absolute top-1/2 right-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #a855f7, transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="// get.in.touch"
          title="Let's"
          highlight="Connect"
          subtitle="Available for projects, research collaboration, and full-time roles."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Work with me
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you&apos;re building something ambitious, need AI research
              expertise, or want to discuss cybersecurity architecture — I&apos;m open
              to interesting conversations.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${link.color}15` }}
                  >
                    <link.icon size={18} style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8"
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-6"
                  >
                    <FiCheck size={28} className="text-green-400" />
                  </motion.div>
                  <h4
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Message sent!
                  </h4>
                  <p className="text-slate-400 text-sm">
                    I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`form-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 ${
                          errors.name ? "border-red-500/50" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`form-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 ${
                          errors.email ? "border-red-500/50" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's it about?"
                      className={`form-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 ${
                        errors.subject ? "border-red-500/50" : ""
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className={`form-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 resize-none ${
                        errors.message ? "border-red-500/50" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-60"
                    style={{
                      background:
                        "linear-gradient(135deg, #00d4ff, #a855f7)",
                      boxShadow: "0 0 30px rgba(0,212,255,0.25)",
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
