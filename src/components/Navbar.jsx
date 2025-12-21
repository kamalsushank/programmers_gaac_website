import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const navItem = (to, label, mobile = false) => (
    <li className="relative">
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className={`
          font-space text-sm tracking-wide
          transition-all duration-300
          ${
            pathname === to
              ? "text-[#4da3ff]"
              : "text-gray-300 hover:text-[#4da3ff]"
          }
          ${
            !mobile &&
            `
            after:absolute after:left-1/2 after:-bottom-1
            after:h-[2px] after:w-0 after:bg-[#4da3ff]
            after:transition-all after:duration-300
            hover:after:w-full hover:after:left-0
          `
          }
        `}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <div className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-[90%] mx-auto px-2">
        <div
          className="
          relative bg-[#0a1220]/80 backdrop-blur-xl
          border border-white/10 rounded-full
          px-4 py-3 flex items-center
          shadow-[0_0_40px_rgba(77,163,255,0.08)]
        "
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4da3ff]/10 via-transparent to-[#4da3ff]/10 opacity-60 pointer-events-none" />

          {/* Logo */}
          <Link to="/" className="relative z-10 flex-shrink-0">
            <div
              className="
      w-10 h-10 rounded-full
      bg-[#071019]
      flex items-center justify-center
      ring-1 ring-white/10
      bg-center bg-no-repeat bg-contain
    "
              style={{
                backgroundImage: "url('/gaac_logo.png')",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="relative z-10 hidden md:flex flex-1 justify-center items-center gap-12">
            {navItem("/teams", "Teams")}
            {navItem("/projects", "Projects")}
            {navItem("/blogs", "Blogs")}
            {navItem("/recruitments", "Recruitments")}
          </ul>

          {/* Desktop CTA */}
          <div className="relative z-10 hidden md:flex ml-6">
            <Link to="/signin">
              <button
                className="
                px-5 py-2 rounded-full
                font-orbitron text-xs tracking-widest
                bg-[#4da3ff] text-black
                hover:bg-[#7bbcff]
                shadow-[0_0_20px_rgba(77,163,255,0.45)]
                transition-all
              "
              >
                SIGN IN
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-10 ml-auto md:hidden text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
            mt-3 md:hidden
            bg-[#0a1220]/90 backdrop-blur-xl
            border border-white/10
            rounded-2xl px-6 py-6
            shadow-[0_0_30px_rgba(77,163,255,0.12)]
          "
          >
            <ul className="flex flex-col gap-5 text-center">
              {navItem("/teams", "Teams", true)}
              {navItem("/projects", "Projects", true)}
              {navItem("/blogs", "Blogs", true)}
              {navItem("/recruitments", "Recruitments", true)}

              <Link to="/signin" onClick={() => setOpen(false)}>
                <button
                  className="
                  mt-4 w-full py-2 rounded-full
                  bg-[#4da3ff] text-black
                  font-orbitron text-xs tracking-widest
                "
                >
                  SIGN IN
                </button>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
