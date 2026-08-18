import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";

// ─── Glowing cursor ───────────────────────────────────────────────────────────
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

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GlowCursor />

      <Navbar />

      {/* ═══════════════════════════════════════════════════
          LOGIN HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-24 bg-gradient-to-b from-[#05070d] to-black overflow-hidden">
        {/* Same shaded semicircle / radial glow as Blogs page */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)] pointer-events-none" />

        {/* Additional subtle center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04),transparent_70%)] pointer-events-none" />

        {/* Floating particles */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
            style={{
              top: `${12 + i * 10}%`,
              left: `${5 + i * 14}%`,
            }}
            animate={{
              y: [0, -16, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 overflow-hidden">
            {/* Card glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              <h1 className="font-orbitron text-3xl font-bold text-center mb-2">
                Admin Login
              </h1>

              <p className="font-space text-gray-400 text-sm text-center mb-8">
                Sign in to access the admin panel
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-space">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3.5 rounded-xl bg-black/40 border border-white/10 outline-none font-space text-white placeholder-gray-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/30 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-space">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-3.5 rounded-xl bg-black/40 border border-white/10 outline-none font-space text-white placeholder-gray-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/30 transition-all duration-300"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center font-space">
                    {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full p-3.5 rounded-full bg-indigo-500 text-black font-semibold font-space hover:bg-indigo-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging in..." : "Login"}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
