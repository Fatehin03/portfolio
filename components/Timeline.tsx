"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const typeColors: Record<string, string> = {
  education: "#00d4ff",
  development: "#a855f7",
  research: "#10b981",
  achievement: "#f59e0b",
};

const typeLabels: Record<string, string> = {
  education: "Education",
  development: "Development",
  research: "Research",
  achievement: "Achievement",
};

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding relative overflow-hidden">
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #a855f7, transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          tag="// my.journey"
          title="The"
          highlight="Timeline"
          subtitle="Education, research, and development milestones."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px timeline-line opacity-30" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              const color = typeColors[item.type];

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`relative flex flex-col sm:flex-row ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  } items-start sm:items-center gap-6`}
                >
                  {/* Content box */}
                  <div
                    className={`flex-1 ml-14 sm:ml-0 ${
                      isEven ? "sm:text-right sm:pr-12" : "sm:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      className="glass rounded-2xl p-6 inline-block text-left w-full max-w-sm"
                      style={{ borderColor: `${color}25` }}
                    >
                      {/* Type badge */}
                      <span
                        className="inline-block text-xs font-mono px-2 py-0.5 rounded-full mb-3"
                        style={{
                          background: `${color}15`,
                          color,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        {typeLabels[item.type]}
                      </span>

                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">{item.icon}</span>
                        <p
                          className="text-xs font-mono text-slate-500"
                          style={{ color }}
                        >
                          {item.year}
                        </p>
                      </div>

                      <h3
                        className="font-bold text-white mb-2"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                      className="w-5 h-5 rounded-full border-2 border-[#030712] z-10"
                      style={{ background: color, boxShadow: `0 0 15px ${color}60` }}
                    />
                  </div>

                  {/* Year label on opposite side (desktop) */}
                  <div
                    className={`hidden sm:flex flex-1 items-center ${
                      isEven ? "pl-12" : "pr-12 justify-end"
                    }`}
                  >
                    <span
                      className="text-4xl font-bold opacity-15"
                      style={{
                        fontFamily: "var(--font-display)",
                        color,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
