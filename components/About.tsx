"use client";

import { motion } from "framer-motion";
import { aboutCards } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const stats = [
  { value: "4.00", label: "Best CGPA" },
  { value: "5+", label: "Projects Built" },
  { value: "3+", label: "Research Areas" },
  { value: "2+", label: "Brands Launched" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #a855f7, transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="// about.me"
          title="Who I"
          highlight="Am"
          subtitle="A technology enthusiast from Bangladesh building things that matter at the edge of software, intelligence, and security."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <p
                className="text-3xl font-bold gradient-text mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.value}
              </p>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Building at the intersection of{" "}
              <span className="text-[#00d4ff]">intelligence</span> and{" "}
              <span className="text-[#a855f7]">security</span>
            </h3>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a CSE student at Port City International University,
                Bangladesh, with a strong academic record and a deeper interest
                in building systems that solve real problems.
              </p>
              <p>
                My work spans full-stack web development, machine learning
                research, and UAV cybersecurity. I fine-tune language models for
                Bangla NLP, build adversarial detection systems for military
                drones, and ship production-grade web platforms.
              </p>
              <p>
                Outside research, I run LOOR and Tijor — two product brands on
                Odoo eCommerce — bridging technology with business execution.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Python",
                "Next.js",
                "Machine Learning",
                "UAV Security",
                "NLP",
                "Full Stack",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full font-mono text-slate-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-6 cursor-default group"
                style={{
                  borderColor: `${card.color}20`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${card.color}15` }}
                >
                  {card.icon}
                </div>
                <h4
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {card.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${card.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
