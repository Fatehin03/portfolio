"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeader from "./SectionHeader";

type SkillCategory = keyof typeof skills;

const categoryColors: Record<SkillCategory, string> = {
  Frontend: "#00d4ff",
  Backend: "#a855f7",
  Database: "#f59e0b",
  Programming: "#10b981",
  Research: "#f43f5e",
  Tools: "#6366f1",
};

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Frontend");

  return (
    <section id="skills" className="section-padding relative">
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00d4ff, transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="// skills.stack"
          title="Technical"
          highlight="Skills"
          subtitle="Technologies and tools I use to build and research."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(Object.keys(skills) as SkillCategory[]).map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200 glass"
              }`}
              style={
                activeCategory === cat
                  ? {
                      background: `linear-gradient(135deg, ${categoryColors[cat]}cc, ${categoryColors[cat]}66)`,
                      boxShadow: `0 0 20px ${categoryColors[cat]}40`,
                    }
                  : {}
              }
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-8 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: categoryColors[activeCategory] }}
              />
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {activeCategory}
              </h3>
            </div>

            <div className="space-y-5">
              {skills[activeCategory].map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={categoryColors[activeCategory]}
                  delay={i * 0.07}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All skills overview grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16"
        >
          <p className="text-center text-slate-500 text-sm font-mono mb-8">
            // full overview
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {(Object.keys(skills) as SkillCategory[]).map((cat) => (
              <div
                key={cat}
                className="glass rounded-2xl p-4 cursor-pointer hover:border-[#00d4ff]/30 transition-colors"
                onClick={() => setActiveCategory(cat)}
              >
                <div
                  className="w-2 h-2 rounded-full mb-3"
                  style={{ background: categoryColors[cat] }}
                />
                <p
                  className="text-xs font-bold text-slate-300 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat}
                </p>
                <div className="flex flex-wrap gap-1">
                  {skills[cat].slice(0, 3).map((s) => (
                    <span
                      key={s.name}
                      className="text-xs text-slate-500 font-mono"
                    >
                      {s.name.split(" ")[0]}
                    </span>
                  ))}
                  {skills[cat].length > 3 && (
                    <span className="text-xs text-slate-600 font-mono">
                      +{skills[cat].length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
