"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiArrowDown,
} from "react-icons/fi";
import Particles from "./Particles";

const socials = [
  {
    icon: FiGithub,
    href: "https://github.com/Fatehin03",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/alam-fatehin-4b1314396",
    label: "LinkedIn",
  },
  {
    icon: FiFacebook,
    href: "https://www.facebook.com/share/1DcxZ6jFZF/",
    label: "Facebook",
  },
  {
    icon: FiMail,
    href: "mailto:alamfatehin@gmail.com",
    label: "Email",
  },
];

const roles = [
  "Full Stack Developer",
  "AI Researcher",
  "Cybersecurity Enthusiast",
  "UAV Security Researcher",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles */}
      <Particles />

      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #a855f7 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/25 bg-[#00d4ff]/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              <span
                className="text-sm text-[#00d4ff] font-mono"
              >
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block text-white">Fatehin</span>
              <span className="block gradient-text">Alam</span>
            </motion.h1>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-xs px-3 py-1 rounded-full font-mono"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "#94a3b8",
                  }}
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              I build intelligent systems at the intersection of software
              engineering, AI research, and cybersecurity — focused on
              real-world impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-7 py-3.5 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                  boxShadow: "0 0 30px rgba(0,212,255,0.3)",
                }}
              >
                <span className="relative z-10 text-white">View Projects</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </button>

              <a
                href="/fatehin.jpg"
                download
                className="group px-7 py-3.5 rounded-full font-semibold text-sm border border-[#00d4ff]/30 text-slate-300 hover:text-white hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300"
              >
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-5"
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-[#00d4ff] border border-white/10 hover:border-[#00d4ff]/40 transition-all duration-300"
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
              <span className="text-slate-700 text-xs ml-2 font-mono">
                / let&apos;s connect
              </span>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Outer ring animated */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00d4ff, #a855f7, transparent, #00d4ff)",
                  opacity: 0.4,
                }}
              />

              {/* Middle ring */}
              <div
                className="absolute -inset-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.3), rgba(168,85,247,0.3))",
                }}
              />

              {/* Image container */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(0,212,255,0.4)",
                  boxShadow:
                    "0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(168,85,247,0.1)",
                }}
              >
                <Image
                  src="/fatehin.jpg"
                  alt="Fatehin Alam"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(3,7,18,0.4))",
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 glass px-3 py-2 rounded-xl text-xs"
              >
                <span className="text-[#00d4ff] font-mono">AI Research</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -right-8 bottom-1/4 glass px-3 py-2 rounded-xl text-xs"
              >
                <span className="text-[#a855f7] font-mono">UAV Security</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass px-3 py-2 rounded-xl text-xs whitespace-nowrap"
              >
                <span className="text-green-400 font-mono">4.00 CGPA</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-[#00d4ff] transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
