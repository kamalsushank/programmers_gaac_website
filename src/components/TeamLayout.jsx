import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ─────────────────────────────────────────────────────────────────────────────
// Scroll-reveal wrapper
// ─────────────────────────────────────────────────────────────────────────────

function FadeInWhenVisible({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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

// ─────────────────────────────────────────────────────────────────────────────
// Glowing cursor
// ─────────────────────────────────────────────────────────────────────────────

function GlowCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
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

// ─────────────────────────────────────────────────────────────────────────────
// Member Card
// Only displays the member's name
// ─────────────────────────────────────────────────────────────────────────────

function MemberCard({ name, highlight = false, index = 0 }) {
  return (
    <FadeInWhenVisible
      delay={index * 0.08}
      direction={index % 2 === 0 ? "left" : "right"}
    >
      <motion.div
        whileHover={{
          y: -6,
          boxShadow: "0 0 50px rgba(99,102,241,0.2)",
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
        }}
        className={`group relative rounded-2xl border bg-white/5 backdrop-blur-sm overflow-hidden transition-colors duration-500 ${
          highlight
            ? "border-indigo-400/40 hover:border-indigo-400/80"
            : "border-white/10 hover:border-indigo-400/60"
        }`}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Corner accent */}
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-indigo-400/20 rounded-br-lg" />

        <div className="relative z-10 p-7 text-center">
          {/* Initial */}
          <div
            className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center font-orbitron font-bold text-lg mb-5 ${
              highlight
                ? "bg-indigo-500/30 border border-indigo-400/50 text-indigo-200"
                : "bg-white/10 border border-white/20 text-gray-300"
            }`}
          >
            {name?.charAt(0).toUpperCase() || "?"}
          </div>

          {/* Name */}
          <h4 className="font-orbitron text-base font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
            {name}
          </h4>
        </div>
      </motion.div>
    </FadeInWhenVisible>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Team Layout
// ─────────────────────────────────────────────────────────────────────────────

export default function TeamLayout({
  emoji,
  teamName,
  description,
  mission,
  vision,
  activities,

  // Static members
  lead,
  members = [],
}) {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GlowCursor />
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}

      <section className="relative bg-gradient-to-b from-[#05070d] to-black pt-36 pb-20 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)] pointer-events-none" />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
            style={{
              top: `${15 + i * 12}%`,
              left: `${8 + i * 15}%`,
            }}
            animate={{
              y: [0, -16, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
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
              {emoji}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300">
                {teamName}
              </span>
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="font-space text-gray-300 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
              {description}
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

      {/* ═══════════════════════════════════════════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════════════════════════════════════════ */}

      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              label: "Mission",
              text: mission,
            },
            {
              label: "Vision",
              text: vision,
            },
          ].map((item, i) => (
            <FadeInWhenVisible
              key={i}
              delay={i * 0.12}
              direction={i === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 50px rgba(99,102,241,0.18)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 22,
                }}
                className="relative border border-white/10 rounded-2xl p-10 bg-white/5 backdrop-blur-sm hover:border-indigo-400/60 transition-colors duration-300"
              >
                <span className="absolute -top-4 left-6 bg-black px-4 py-1 text-sm tracking-widest uppercase text-indigo-400 font-space">
                  {item.label}
                </span>

                <p className="font-space text-gray-300 text-lg leading-relaxed">
                  {item.text}
                </p>

                <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-indigo-400/20 rounded-br-lg" />
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ACTIVITIES
      ═══════════════════════════════════════════════════════════════════════ */}

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
                What We Do
              </p>

              <h2 className="font-orbitron text-3xl md:text-4xl font-extrabold">
                Our <span className="text-indigo-400">Activities</span>
              </h2>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((act, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1} direction="up">
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
                  className="group relative p-7 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-400/60 transition-colors duration-500 text-center"
                >
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <h3 className="font-orbitron text-lg font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                      {act.title}
                    </h3>

                    <p className="font-space text-gray-300 text-sm leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TEAM MEMBERS
      ═══════════════════════════════════════════════════════════════════════ */}

      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#02030a] pointer-events-none" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <FadeInWhenVisible>
              <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
                The People
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <h2 className="font-orbitron text-3xl md:text-4xl font-extrabold">
                Team <span className="text-indigo-400">Members</span>
              </h2>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="w-20 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto mt-6"
              />
            </FadeInWhenVisible>
          </div>

          {/* ═════════════════════════════════════════════════════════════════
              TEAM LEAD
          ═════════════════════════════════════════════════════════════════ */}

          {lead && (
            <div className="mb-16">
              <FadeInWhenVisible>
                <h3 className="text-center font-orbitron text-xl font-bold mb-8 text-indigo-300 tracking-wide">
                  Team Lead
                </h3>
              </FadeInWhenVisible>

              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <MemberCard name={lead} highlight index={0} />
                </div>
              </div>
            </div>
          )}

          {/* Connector */}
          {lead && members.length > 0 && (
            <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-indigo-400/50 to-transparent mx-auto mb-12" />
          )}

          {/* ═════════════════════════════════════════════════════════════════
              OTHER MEMBERS
          ═════════════════════════════════════════════════════════════════ */}

          {members.length > 0 && (
            <div>
              <FadeInWhenVisible>
                <h3 className="text-center font-orbitron text-xl font-bold mb-8 text-gray-300 tracking-wide">
                  Members
                </h3>
              </FadeInWhenVisible>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((name, i) => (
                  <MemberCard key={`${name}-${i}`} name={name} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* No members */}
          {!lead && members.length === 0 && (
            <p className="text-center text-gray-400 font-space py-8">
              No members added yet.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
