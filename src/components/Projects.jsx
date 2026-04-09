import React, { useMemo, useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ─── Scroll-reveal wrapper ────────────────────────────────────────────────────
function FadeInWhenVisible({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Glowing cursor ───────────────────────────────────────────────────────────
function GlowCursor() {
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
    >
      <div className="w-6 h-6 rounded-full bg-indigo-400 opacity-60 blur-lg" />
    </motion.div>
  );
}

// ─── Category → accent colour ─────────────────────────────────────────────────
const CATEGORY_COLOR = {
  Robusta: "text-blue-300 border-blue-400/40 bg-blue-400/10",
  Programmers: "text-violet-300 border-violet-400/40 bg-violet-400/10",
  Stargazers: "text-indigo-300 border-indigo-400/40 bg-indigo-400/10",
};

const CATEGORIES = ["All", "Stargazers", "Robusta", "Programmers"];

const PROJECTS = [
  {
    id: 1,
    title: "Autonomous Drone Navigation",
    desc: "AI-powered drone system for autonomous navigation and obstacle avoidance using vision and learning.",
    category: "Robusta",
    icon: "🚁",
  },
  {
    id: 2,
    title: "CubeSat Attitude Control",
    desc: "Compact attitude control system for CubeSats using reaction wheels and sensor fusion.",
    category: "Programmers",
    icon: "🛰️",
  },
  {
    id: 3,
    title: "Deep Sky Survey Pipeline",
    desc: "Processing telescope data to detect faint celestial objects and transient events.",
    category: "Stargazers",
    icon: "🔭",
  },
  {
    id: 4,
    title: "Swarm Drone Coordination",
    desc: "Algorithms enabling multiple drones to coordinate for mapping and exploration.",
    category: "Robusta",
    icon: "🤖",
  },
  {
    id: 5,
    title: "High-Gain Antenna Prototype",
    desc: "Prototype antenna for improved communication with small satellites.",
    category: "Programmers",
    icon: "📡",
  },
  {
    id: 6,
    title: "Variable Star Analysis",
    desc: "Time-series analysis tools to detect and classify variable stars.",
    category: "Stargazers",
    icon: "⭐",
  },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gitam-aero-astro-club/", icon: "in" },
  { label: "GitHub", href: "https://github.com/g-aeroastro-c", icon: "⌥" },
  { label: "Instagram", href: "https://www.instagram.com/gitam.aeroastro?igsh=MTFrb3o4b3BieDdlYw==", icon: "📷" },
];

export default function Projects() {
  const [selected, setSelected] = useState("All");

  const filtered = useMemo(() => {
    if (selected === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === selected);
  }, [selected]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GlowCursor />
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#05070d] to-black pt-36 pb-20 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)] pointer-events-none" />

        {/* Floating particles */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
            style={{ top: `${10 + i * 11}%`, left: `${6 + i * 13}%` }}
            animate={{ y: [0, -16, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.45 }}
          />
        ))}

        <div className="relative z-10">
          <FadeInWhenVisible>
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">Our Work</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.1}>
            <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold leading-tight">
              Projects that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300">
                define
              </span>{" "}
              GAAC
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <p className="font-space text-gray-300 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
              A collection of hands-on engineering, research, and exploration
              projects built by GAAC members.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.3}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto mt-8"
            />
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FILTERS + CARDS
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Filter Pills */}
          <FadeInWhenVisible>
            <div className="flex justify-center gap-3 flex-wrap mb-14">
              {CATEGORIES.map((c) => {
                const active = selected === c;
                return (
                  <motion.button
                    key={c}
                    onClick={() => setSelected(c)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-5 py-2 rounded-full text-sm font-space font-medium border transition-all duration-300
                      ${active
                        ? "bg-indigo-500 text-white border-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.45)]"
                        : "border-white/20 text-gray-300 hover:border-indigo-400 hover:text-indigo-300"
                      }`}
                  >
                    {c}
                  </motion.button>
                );
              })}
            </div>
          </FadeInWhenVisible>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <FadeInWhenVisible key={p.id} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 0 50px rgba(99,102,241,0.18)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-indigo-400/60 transition-colors duration-500 flex flex-col"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Corner accent */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-indigo-400/20 rounded-br-lg" />

                  <div className="relative z-10 p-8 flex flex-col flex-1">
                    {/* Icon + Category */}
                    <div className="flex items-center justify-between mb-5">
                      <motion.span
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: [-5, 5, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        {p.icon}
                      </motion.span>
                      <span className={`text-xs font-space tracking-wider px-3 py-1 rounded-full border ${CATEGORY_COLOR[p.category]}`}>
                        {p.category}
                      </span>
                    </div>

                    <h3 className="font-orbitron text-lg font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="font-space text-gray-300 text-sm leading-relaxed flex-1">
                      {p.desc}
                    </p>

                    <motion.a
                      href="https://github.com/g-aeroastro-c"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-indigo-400/50 text-indigo-300 font-space text-sm rounded-full hover:bg-indigo-400 hover:text-black transition-all duration-300"
                    >
                      Know More
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 font-space mt-20"
            >
              No projects match this category.
            </motion.p>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EXPLORE MORE / SOCIAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_65%)]" />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInWhenVisible>
            <p className="text-sm tracking-widest uppercase text-indigo-400 mb-4">Stay Connected</p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-extrabold mb-5">
              Explore More <span className="text-indigo-400">Projects</span>
            </h2>
            <p className="font-space text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Stay connected with GITAM Aero Astro Club and explore our latest
              projects, updates, and technical work across platforms.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              {SOCIAL_LINKS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, boxShadow: "0 0 28px rgba(99,102,241,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-indigo-400/50 text-indigo-300 font-space hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
                >
                  {s.label} →
                </motion.a>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <Footer />
    </div>
  );
}
