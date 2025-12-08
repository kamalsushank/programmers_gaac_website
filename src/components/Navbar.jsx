import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // page background similar to your screenshot
    <div className="w-full h-16 py-6">
      <div className="max-w-[80%] mx-auto px-4">
        {/* rounded "pill" container */}
        <div className="bg-[#0b0b0b] rounded-full px-6 py-3 flex items-center shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
          {/* Logo in a small circular box */}
          <Link to="/" className="flex-shrink-0 mr-6">
            <div className="w-10 h-10 rounded-full bg-[#071019] flex items-center justify-center overflow-hidden ring-1 ring-black/40">
              <img
                src="/gaac_logo.png"
                alt="GAAC Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Centered links */}
          <ul className="flex flex-1 justify-center items-center gap-12 text-gray-200 text-sm font-medium">
            <li>
              <Link to="/teams" className="hover:text-[#4ea8de] transition">
                Teams
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-[#4ea8de] transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-[#4ea8de] transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/recruitments"
                className="hover:text-[#4ea8de] transition"
              >
                Recruitments
              </Link>
            </li>
          </ul>

          {/* Sign In button (right) */}
          <div className="flex-shrink-0 ml-6">
            <Link to="/signin">
              <button className="px-4 py-1.5 bg-[#00f0ff] text-black rounded-md font-semibold hover:bg-[#00d6db] transition">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
