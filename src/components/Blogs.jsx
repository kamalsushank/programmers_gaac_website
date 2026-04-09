import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import api from "../services/api";

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
  const [pos, setPos] = useState({ x: -100, y: -100 });
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

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await api.request("/api/public/get-all-blogs", {
          method: "GET",
          includeAuth: false,
        });
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

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
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">Insights & Stories</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.1}>
            <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold leading-tight">
              GAAC{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300">
                Blogs
              </span>
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <p className="font-space text-gray-300 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
              Ideas, experiences, and learnings shared by GAAC members — from
              aerospace insights to hands-on engineering journeys.
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
          BLOG LIST
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">

          <FadeInWhenVisible>
            <h2 className="font-orbitron text-3xl md:text-4xl font-extrabold text-center mb-14">
              Featured <span className="text-indigo-400">Blogs</span>
            </h2>
          </FadeInWhenVisible>

          {/* Loading dots */}
          {loading && (
            <div className="flex justify-center items-center gap-3 py-16">
              {[0, 0.2, 0.4].map((d, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-indigo-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                />
              ))}
            </div>
          )}

          {error && (
            <p className="text-center text-red-400 font-space py-8">{error}</p>
          )}

          {!loading && !error && blogs.length === 0 && (
            <p className="text-center text-gray-400 font-space py-8">
              No blogs published yet. Check back soon!
            </p>
          )}

          {!loading && blogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((b, i) => (
                <FadeInWhenVisible key={i} delay={i * 0.08} direction="up">
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
                      {/* Team tag */}
                      {b.team && (
                        <span className="text-xs font-space tracking-wider px-3 py-1 rounded-full border border-indigo-400/40 bg-indigo-400/10 text-indigo-300 self-start mb-5">
                          {b.team}
                        </span>
                      )}

                      <h3 className="font-orbitron text-lg font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                        {b.title}
                      </h3>
                      <p className="font-space text-gray-300 text-sm leading-relaxed flex-1">
                        {b.content}
                      </p>

                      {/* Author footer */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center font-orbitron font-bold text-sm text-indigo-300">
                          {b.authorName?.charAt(0) || "?"}
                        </div>
                        <div>
                          <p className="font-orbitron text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors">
                            {b.authorName}
                          </p>
                          {b.team && (
                            <p className="text-xs text-gray-500 font-space">{b.team}</p>
                          )}
                        </div>
                      </div>
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
