"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  highlight: string;
  subtitle?: string;
}

export default function SectionHeader({
  tag,
  title,
  highlight,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-[#00d4ff] border border-[#00d4ff]/25 bg-[#00d4ff]/5 mb-6"
      >
        {tag}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}{" "}
        <span className="gradient-text">{highlight}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
