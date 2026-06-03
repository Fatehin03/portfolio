"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "projects", "timeline", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong py-3 shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="text-xl font-bold gradient-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FA
            </span>
            <span className="ml-2 text-sm text-slate-400 font-mono hidden sm:inline">
              ./portfolio
            </span>
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#00d4ff]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[#00d4ff] to-[#a855f7] transition-all duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:alamfatehin@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#00d4ff] border border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300"
            >
              Hire Me
            </motion.a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 glass-strong border-b border-[#00d4ff]/10 md:hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-6 py-3 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="px-6 pt-2 pb-4">
                <a
                  href="mailto:alamfatehin@gmail.com"
                  className="block text-center py-2 rounded-full text-sm font-medium text-[#00d4ff] border border-[#00d4ff]/40"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
