"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: FaFacebook, href: personalInfo.facebook, label: "Facebook" },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-2xl font-bold gradient-text mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Fatehin Alam
              </p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Full Stack Developer, AI Researcher, and Cybersecurity
                Enthusiast based in Bangladesh.
              </p>
            </motion.div>
          </div>

          {/* Quick links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-widest">
                Navigation
              </p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-slate-400 hover:text-[#00d4ff] text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-widest">
                Connect
              </p>
              <div className="flex gap-3 mb-4">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-[#00d4ff] border border-white/10 hover:border-[#00d4ff]/40 transition-all duration-300"
                  >
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-[#00d4ff] text-sm transition-colors font-mono"
              >
                {personalInfo.email}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-xs font-mono"
          >
            &copy; {new Date().getFullYear()} Fatehin Alam. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-700 text-xs font-mono"
          >
            Built with Next.js 15, TypeScript, Framer Motion
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-[#00d4ff] border border-white/10 hover:border-[#00d4ff]/40 transition-all duration-300"
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
