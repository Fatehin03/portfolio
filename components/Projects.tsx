"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = ((e.clientX - cx) / rect.width) * 10;
    const y = -((e.clientY - cy) / rect.height) * 10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: tilt.y,
          rotateY: tilt.x,
          transformStyle: "preserve-3d",
          transition: hovered ? "none" : "all 0.5s cubic-bezier(0.23,1,0.32,1)",
        }}
        className="glass rounded-3xl overflow-hidden h-full"
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${project.color}, ${project.color}44)`,
          }}
        />

        <div className="p-7">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                style={{ background: `${project.color}15` }}
              >
                {project.icon}
              </div>
              <p className="text-xs font-mono text-slate-500 mb-1">
                {project.subtitle}
              </p>
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </h3>
            </div>

            <div className="flex gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </motion.a>
              <motion.a
                href={project.demo}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
                aria-label="Live demo"
              >
                <FiExternalLink size={16} />
              </motion.a>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full font-mono text-slate-400"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: project.color }}
          >
            View on GitHub
            <FiArrowRight size={14} />
          </motion.a>
        </div>

        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={
            hovered
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at center, ${project.color}08, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00d4ff, transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="// featured.projects"
          title="What I've"
          highlight="Built"
          subtitle="Selected projects across full-stack development, AI research, and cybersecurity."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://github.com/Fatehin03"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300"
          >
            <FiGithub size={18} />
            View All on GitHub
            <FiArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
