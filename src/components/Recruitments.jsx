import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
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

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/aeroastro.gitam/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gitam-aero-astro-club/" },
];

export default function Recruitments() {
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
            style={{ top: `${12 + i * 10}%`, left: `${5 + i * 14}%` }}
            animate={{ y: [0, -16, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}

        <div className="relative z-10">
          <FadeInWhenVisible>
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">Join GAAC</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.1}>
            <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold leading-tight">
              Recruitments are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-rose-400">
                Closed
              </span>
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <p className="font-space text-gray-300 mt-5 text-lg max-w-xl mx-auto leading-relaxed">
              Stay connected — we'll announce the next recruitment cycle on our
              social channels.
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
          MAIN CARD
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeInWhenVisible delay={0.1}>
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 0 60px rgba(99,102,241,0.18)" }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-indigo-400/60 transition-colors duration-500 p-10 md:p-14 text-center"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_70%)] opacity-0 hover:opacity-100 transition-opacity duration-500" />
              {/* Corner accent */}
              <div className="absolute bottom-5 right-5 w-10 h-10 border-b border-r border-indigo-400/20 rounded-br-lg" />

              <div className="relative z-10">
                {/* Pulsing closed indicator */}
                <motion.div
                  className="inline-flex items-center gap-2 border border-red-400/30 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-red-300 bg-red-900/20 backdrop-blur-sm mb-8"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  Recruitment Closed
                </motion.div>

                <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-5">
                  Thank You for Your Interest! 🙏
                </h3>

                <p className="font-space text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                  The{" "}
                  <span className="text-indigo-300 font-semibold">GITAM Aero Astro Club</span>{" "}
                  recruitment process for{" "}
                  <span className="text-indigo-300 font-semibold">2025</span> has officially
                  concluded. We received an overwhelming response and are truly grateful
                  for the enthusiasm and applications from students across the university.
                </p>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-20 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto my-10"
                />

                {/* Stay Connected */}
                <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
                  Stay Connected
                </p>
                <p className="font-space text-gray-300 mb-8">
                  Follow us on social media to stay informed about upcoming
                  recruitment announcements.
                </p>

                <div className="flex items-center justify-center gap-5 flex-wrap">
                  {SOCIAL_LINKS.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.06, boxShadow: "0 0 28px rgba(99,102,241,0.5)" }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-indigo-400/50 text-indigo-300 font-space hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
                    >
                      {s.label} →
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </section>

      <Footer />
    </div>
  );
}
