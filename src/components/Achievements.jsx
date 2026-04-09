import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";

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

export default function Achievements() {
  const achievements = [
    {
      title: "Andhra Pradesh SpaceTech Summit",
      desc: `Sreyas Malla and Priyangshu Ghosh secured 2nd Prize at the Andhra Pradesh SpaceTech Summit 2026 Project Expo held at Vignan University, Guntur.`,
      img: "/gemini_gaac_robo.png",
      cta: "Know More",
      path: "/achievements",
      reverse: false,
    },
    {
      title: "IIT Madras Robosoccer",
      desc: `Narayana Gupta achieved 2nd place in the RoboSoccer competition at IIT Madras in June 2025.`,
      img: "/gemini_gaac_workshop.png",
      cta: "Know More",
      path: "/achievements",
      reverse: true,
    },
    {
      title: "GDG WOW Hackathon",
      desc: `K Akash Kishan won the GDG WOW 2025 Hackathon by ideating and building a placement preparation application.`,
      img: "/gaac_starnival.jpeg",
      cta: "Know More",
      path: "/achievements",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GlowCursor />
      <Navbar />

      <section className="relative bg-gradient-to-b from-[#05070d] to-black text-white py-24">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_60%)] pointer-events-none" />

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

        {/* ── Section Header ── */}
        <div className="text-center px-6 mb-16 relative z-10">
          <FadeInWhenVisible>
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
              What We Do
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
              Our <span className="text-indigo-400">Achievements</span>
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="font-space text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
              Each achievement at GAAC represents the passion, innovation, and
              dedication of our members.
            </p>
          </FadeInWhenVisible>

          {/* Animated underline */}
          <FadeInWhenVisible delay={0.3}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto mt-6"
            />
          </FadeInWhenVisible>
        </div>

        {/* ── Achievement Blocks ── */}
        <div className="relative z-10 px-6">
          {achievements.map((item, index) => (
            <FadeInWhenVisible
              key={index}
              delay={index * 0.1}
              direction={item.reverse ? "right" : "left"}
            >
              <div
                className={`
                  relative flex items-center
                  ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"}
                  flex-col
                  max-w-6xl mx-auto
                  mb-16
                  group
                `}
              >
                {/* Card Wrapper */}
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 0 50px rgba(99,102,241,0.2)" }}
                  transition={{ type: "spring", stiffness: 250, damping: 22 }}
                  className="
                    relative flex items-center
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-white/5 backdrop-blur-sm
                    overflow-hidden
                    transition-all duration-500
                    group-hover:border-indigo-400/60
                    group-hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]
                  "
                >
                  {/* Image Side */}
                  <div className="md:w-1/2 w-full h-[35vh] md:h-[40vh] relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                      "
                    />
                    <div className="absolute inset-0 bg-black/50" />

                  </div>

                  {/* Text Side */}
                  <div className="md:w-1/2 w-full px-8 md:px-12 py-8">
                    {/* Index number */}


                    <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="font-space text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                      {item.desc}
                    </p>

                    {/* CTA Button */}
                    {item.path.startsWith("/") ? (
                      <Link
                        to={item.path}
                        className="
                          mt-6 inline-flex items-center gap-2
                          px-6 py-2.5
                          border border-indigo-400/50
                          text-indigo-300
                          font-space
                          rounded-full
                          hover:bg-indigo-400 hover:text-black
                          transition-all duration-300
                        "
                      >
                        {item.cta}
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                          className="text-lg"
                        >
                          →
                        </motion.span>
                      </Link>
                    ) : (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-6 inline-flex items-center gap-2
                          px-6 py-2.5
                          border border-indigo-400/50
                          text-indigo-300
                          font-space
                          rounded-full
                          hover:bg-indigo-400 hover:text-black
                          transition-all duration-300
                        "
                      >
                        {item.cta}
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                          className="text-lg"
                        >
                          →
                        </motion.span>
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Ambient glow — original */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}