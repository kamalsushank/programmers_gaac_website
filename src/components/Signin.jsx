import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Signin() {
  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <Navbar />

      {/* ================= SIGN IN SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_70%)]" />

        {/* Card */}
        <div
          className="
            relative z-10
            w-full max-w-md
            rounded-3xl
            border border-white/10
            bg-white/5 backdrop-blur-xl
            p-8 md:p-10
            shadow-lg
          "
        >
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="font-orbitron text-3xl font-extrabold">
              Welcome Back
            </h1>
            <p className="font-space text-gray-300 mt-2 text-sm">
              Sign in to continue exploring GAAC
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@gitam.in"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-black/40
                  border border-white/10
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:ring-2 focus:ring-indigo-400/70
                  transition
                "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-black/40
                  border border-white/10
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:ring-2 focus:ring-indigo-400/70
                  transition
                "
              />
            </div>

            {/* Forgot */}
            <div className="flex justify-end">
              <Link
                to="#"
                className="text-sm text-indigo-300 hover:text-indigo-400 transition"
              >
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full mt-4
                px-6 py-3 rounded-full
                bg-indigo-500 text-black
                font-medium
                hover:bg-indigo-400
                transition
                hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]
              "
            >
              Sign In →
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Sign up */}
          <p className="text-center text-sm text-gray-400">
            New to GAAC?{" "}
            <Link
              to="/signup"
              className="text-indigo-300 hover:text-indigo-400 transition"
            >
              Create an account
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
