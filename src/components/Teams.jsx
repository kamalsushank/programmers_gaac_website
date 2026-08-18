import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ─────────────────────────────────────────────────────────────
// EXECUTIVE BODY
// ─────────────────────────────────────────────────────────────

const EXECUTIVE_BODY = [
  {
    role: "Founder",
    name: "VVS BASANTH PEDAPATI",
    blurb: "The visionary behind GAAC's journey, foundation, and mission.",
  },

  {
    role: "President",
    name: "SAMPATH VARMA DATLA",
    blurb: "Leading GAAC's vision, direction, and strategic growth.",
  },

  {
    role: "Vice President — Operations And Outreach",
    name: "DIL BARASH MOHAMMED",
    blurb:
      "Managing execution, coordination, and smooth functioning across GAAC.",
  },

  {
    role: "Vice President — Technical Affairs",
    name: "NARAYANA GUPTA BODDU",
    blurb: "Leading GAAC's technical vision, innovation, and development.",
  },

  {
    role: "Secretary",
    name: "RAAGNI MOULIKA",
    blurb:
      "Coordinating communication, documentation, and organizational activities.",
  },
];

// ─────────────────────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────────────────────

function FadeInWhenVisible({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },

    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// GLOW CURSOR
// ─────────────────────────────────────────────────────────────

function GlowCursor() {
  const [pos, setPos] = React.useState({
    x: -100,
    y: -100,
  });

  React.useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
        mass: 0.3,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-indigo-400 opacity-60 blur-lg" />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GlowCursor />

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative bg-gradient-to-b from-[#05070d] to-black text-white pt-36 pb-20 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)] pointer-events-none" />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
            style={{
              top: `${15 + i * 10}%`,
              left: `${8 + i * 12}%`,
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

          <FadeInWhenVisible delay={0.3}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto mt-8"
            />
          </FadeInWhenVisible>
        </div>
      </section>

      {/* =====================================================
          TEAMS
      ===================================================== */}

      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-14">
              <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
                Our Wings
              </p>

              <h2 className="font-orbitron text-3xl md:text-5xl font-extrabold">
                Explore our <span className="text-indigo-400">divisions</span>
              </h2>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teams.map((team, i) => (
              <FadeInWhenVisible
                key={team.title}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 0 50px rgba(99,102,241,0.18)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-indigo-400/60 transition-colors duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 p-10 flex flex-col items-center text-center gap-4">
                    <h3 className="font-orbitron text-2xl md:text-3xl font-bold group-hover:text-indigo-300 transition-colors">
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
                      <span>→</span>
                    </Link>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXECUTIVE BODY
      ===================================================== */}

      <section className="relative bg-gradient-to-b from-black to-[#02030a] py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.10),transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* HEADER */}

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
          </div>

          {/* =================================================
              FOUNDER
          ================================================= */}

          <div className="flex justify-center">
            <FadeInWhenVisible>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 0 60px rgba(99,102,241,0.22)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="w-full max-w-md rounded-2xl border border-indigo-400/30 bg-white/5 backdrop-blur-sm p-8 text-center"
              >
                {/* First letter */}

                <div className="w-24 h-24 mx-auto mb-6 rounded-full border border-indigo-400/40 bg-indigo-500/10 flex items-center justify-center">
                  <span className="font-orbitron text-4xl text-indigo-300">
                    {EXECUTIVE_BODY[0].name.charAt(0)}
                  </span>
                </div>

                <p className="text-xs tracking-widest uppercase text-indigo-400 font-space">
                  {EXECUTIVE_BODY[0].role}
                </p>

                <h3 className="font-orbitron text-2xl font-bold mt-2">
                  {EXECUTIVE_BODY[0].name}
                </h3>

                <p className="font-space text-gray-400 text-sm mt-4 leading-relaxed">
                  {EXECUTIVE_BODY[0].blurb}
                </p>
              </motion.div>
            </FadeInWhenVisible>
          </div>

          {/* Connector */}

          <div className="hidden md:block w-px h-12 bg-indigo-400/30 mx-auto" />

          {/* =================================================
              REMAINING EXECUTIVE BODY
          ================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXECUTIVE_BODY.slice(1).map((member, i) => (
              <FadeInWhenVisible
                key={member.name}
                delay={i * 0.1}
                direction="up"
              >
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 0 40px rgba(99,102,241,0.18)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className="group h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 text-center hover:border-indigo-400/60 transition-colors duration-500"
                >
                  {/* First letter */}

                  <div className="w-20 h-20 mx-auto mb-5 rounded-full border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center">
                    <span className="font-orbitron text-3xl text-indigo-300">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  {/* Position */}

                  <p className="text-xs tracking-widest uppercase text-indigo-400 font-space">
                    {member.role}
                  </p>

                  {/* Name */}

                  <h3 className="font-orbitron text-lg font-bold mt-2 group-hover:text-indigo-300 transition-colors">
                    {member.name}
                  </h3>

                  {/* Blurb */}

                  <p className="font-space text-gray-500 text-sm leading-relaxed mt-4">
                    {member.blurb}
                  </p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
