import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ─── Reusable scroll-reveal wrapper ───────────────────────────────────────────
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
  React.useEffect(() => {
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

// ─── Team emoji icon map ───────────────────────────────────────────────────────
const TEAM_META = {
  Stargazers: { icon: "🔭", color: "from-violet-500/20 to-indigo-500/10", accent: "#818cf8" },
  Robusta:    { icon: "🤖", color: "from-blue-500/20 to-indigo-500/10",   accent: "#60a5fa" },
  Programmers:{ icon: "💻", color: "from-indigo-500/20 to-purple-500/10", accent: "#a5b4fc" },
  CoreTeam:   { icon: "🌟", color: "from-amber-500/10 to-indigo-500/10",  accent: "#fbbf24" },
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Teams() {
  const teams = [
    {
      title: "Stargazers",
      label: "🔭 Stargazers",
      desc: "Exploring the cosmos through observation, research, and astronomy outreach.",
      cta: "Meet Stargazers",
      path: "/teams/Stargazers",
    },
    {
      title: "Robusta",
      label: "🤖 Robusta",
      desc: "Building autonomous systems and robotic solutions for aerospace applications — from rovers to drones.",
      cta: "Meet Robusta",
      path: "/teams/Robusta",
    },
    {
      title: "Programmers",
      label: "💻 Programmers",
      desc: "Developing flight software, simulations, and data-driven tools that power intelligent systems.",
      cta: "Meet Programmers",
      path: "/teams/Programmers",
    },
    {
      title: "CoreTeam",
      label: "🌟 Core Team",
      desc: "Ensuring smooth coordination, leadership, and execution across all GAAC initiatives.",
      cta: "Meet Core Team",
      path: "/teams/CoreTeam",
    },
  ];

  // ── Executive Body State ──────────────────────────────────────
  const [execs, setExecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExecutiveBody = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://gaac-backend.onrender.com/api/public/get-team-members/EB"
        );
        if (!res.ok) throw new Error("Failed to fetch executive body");
        const data = await res.json();
        setExecs(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load Executive Body.");
      } finally {
        setLoading(false);
      }
    };
    fetchExecutiveBody();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GlowCursor />
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#05070d] to-black text-white pt-36 pb-20 text-center px-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)] pointer-events-none" />

        {/* Floating particle dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        <div className="relative z-10">
          <FadeInWhenVisible>
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
              GAAC · The People
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold leading-tight">
              Teams that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300">
                build
              </span>{" "}
              GAAC
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="font-space text-gray-300 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
              Focused teams. Passionate individuals. One mission — advancing
              aerospace, robotics, and space science.
            </p>
          </FadeInWhenVisible>

          {/* Animated underline */}
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
          TEAMS GRID
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-14">
              <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
                Our Wings
              </p>
              <h2 className="font-orbitron text-3xl md:text-5xl font-extrabold">
                Explore our{" "}
                <span className="text-indigo-400">divisions</span>
              </h2>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teams.map((team, i) => {
              const meta = TEAM_META[team.title] || {};
              return (
                <FadeInWhenVisible
                  key={i}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <motion.div
                    whileHover={{ y: -8, boxShadow: `0 0 50px rgba(99,102,241,0.18)` }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-indigo-400/60 transition-colors duration-500"
                  >
                    {/* Gradient sheen on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${meta.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Corner accent */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-indigo-400/20 rounded-br-xl" />

                    <div className="relative z-10 p-10 flex flex-col items-center text-center gap-4">


                      <h3 className="font-orbitron text-2xl md:text-3xl font-bold group-hover:text-indigo-300 transition-colors duration-300">
                        {team.label}
                      </h3>

                      <p className="font-space text-gray-300 text-base leading-relaxed max-w-sm">
                        {team.desc}
                      </p>

                      <Link
                        to={team.path}
                        className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 border border-indigo-400/50 text-indigo-300 font-space rounded-full text-sm hover:bg-indigo-400 hover:text-black transition-all duration-300"
                      >
                        {team.cta}
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                          className="text-base"
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>
                  </motion.div>
                </FadeInWhenVisible>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EXECUTIVE BODY
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-black to-[#02030a] py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.09),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
                Leadership
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <h2 className="font-orbitron text-4xl md:text-5xl font-extrabold">
                Executive Body{" "}
                <span className="text-indigo-400">(2025–26)</span>
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <p className="font-space text-gray-400 mt-4 max-w-xl mx-auto">
                The people steering GAAC's vision, operations, and growth.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-24 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto mt-6"
              />
            </FadeInWhenVisible>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex justify-center items-center gap-3 py-16">
              <motion.div
                className="w-3 h-3 rounded-full bg-indigo-400"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-indigo-400"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-indigo-400"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          )}

          {/* Error state */}
          {error && (
            <p className="text-center text-red-400 font-space py-8">{error}</p>
          )}

          {/* Empty state */}
          {!loading && execs.length === 0 && !error && (
            <p className="text-center text-gray-400 font-space py-8">
              No Executive Members added yet.
            </p>
          )}

          {/* Exec Cards */}
          {!loading && execs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {execs.map((e, i) => (
                <FadeInWhenVisible
                  key={e._id}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 0 50px rgba(99,102,241,0.2)" }}
                    transition={{ type: "spring", stiffness: 250, damping: 22 }}
                    className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-indigo-400/60 transition-colors duration-500"
                  >
                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Corner accent */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-indigo-400/20 rounded-br-lg" />

                    <div className="relative z-10 p-8">

                      {/* Avatar placeholder */}
                      <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-orbitron font-bold text-lg mb-5">
                        {e.name?.charAt(0) || "?"}
                      </div>

                      <h4 className="font-orbitron text-lg font-bold group-hover:text-indigo-300 transition-colors duration-300">
                        {e.name}
                      </h4>
                      <p className="text-sm text-indigo-300 mt-1 font-space">{e.role}</p>
                      <p className="text-xs text-gray-500 mt-1 font-space">{e.course}</p>

                      {e.blurb && (
                        <p className="font-space text-gray-300 mt-4 text-sm leading-relaxed">
                          {e.blurb}
                        </p>
                      )}

                      {/* CTA Links */}
                      {(e.email || e.linkedin) && (
                        <div className="mt-5 flex flex-wrap gap-3">
                          {e.email && (
                            <motion.a
                              href={`mailto:${e.email}`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.97 }}
                              className="px-4 py-1.5 text-xs font-space rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition-all duration-300"
                            >
                              ✉ Email
                            </motion.a>
                          )}
                          {e.linkedin && (
                            <motion.a
                              href={e.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.97 }}
                              className="px-4 py-1.5 text-xs font-space rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition-all duration-300"
                            >
                              in LinkedIn
                            </motion.a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </FadeInWhenVisible>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
