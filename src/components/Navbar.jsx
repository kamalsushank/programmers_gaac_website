import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const navItem = (to, label) => (
    <li className="relative">
      <Link
        to={to}
        className={`
          font-space text-sm tracking-wide
          transition-all duration-300
          ${
            pathname === to
              ? "text-[#4da3ff]"
              : "text-gray-300 hover:text-[#4da3ff]"
          }
          after:absolute after:left-1/2 after:-bottom-1
          after:h-[2px] after:w-0 after:bg-[#4da3ff]
          after:transition-all after:duration-300
          hover:after:w-full hover:after:left-0
        `}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <div className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-[85%] mx-auto px-4">
        {/* Glass pill container */}
        <div
          className="
            relative
            bg-[#0a1220]/80 backdrop-blur-xl
            border border-white/10
            rounded-full px-6 py-3
            flex items-center
            shadow-[0_0_40px_rgba(77,163,255,0.08)]
          "
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4da3ff]/10 via-transparent to-[#4da3ff]/10 opacity-60 pointer-events-none" />

          {/* Logo */}
          <Link to="/" className="relative z-10 flex-shrink-0 mr-6">
            <div className="w-10 h-10 rounded-full bg-[#071019] flex items-center justify-center overflow-hidden ring-1 ring-white/10 hover:ring-[#4da3ff]/60 transition">
              <img
                src="/gaac_logo.png"
                alt="GAAC Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Navigation */}
          <ul className="relative z-10 flex flex-1 justify-center items-center gap-12">
            {navItem("/teams", "Teams")}
            {navItem("/projects", "Projects")}
            {navItem("/blogs", "Blogs")}
            {navItem("/recruitments", "Recruitments")}
          </ul>

          {/* CTA */}
          <div className="relative z-10 flex-shrink-0 ml-6">
            <Link to="/signin">
              <button
                className="
                  px-5 py-2 rounded-full
                  font-orbitron text-xs tracking-widest
                  bg-[#4da3ff] text-black
                  hover:bg-[#7bbcff]
                  shadow-[0_0_20px_rgba(77,163,255,0.45)]
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(77,163,255,0.8)]
                "
              >
                SIGN IN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
