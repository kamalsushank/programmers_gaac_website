import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // ✅ Token + Email
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  const dropdownRef = useRef();

  // ✅ Sync navbar after login/signup/logout
  useEffect(() => {
    const syncAuth = () => {
      setToken(localStorage.getItem("accessToken"));
      setEmail(localStorage.getItem("email"));
    };

    // When login happens in same tab
    window.addEventListener("authChanged", syncAuth);

    // When login happens in another tab
    window.addEventListener("storage", syncAuth);

    syncAuth();

    return () => {
      window.removeEventListener("authChanged", syncAuth);
      window.removeEventListener("storage", syncAuth);
    };
  }, []);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");

    window.dispatchEvent(new Event("authChanged"));
    navigate("/login");
  };

  const navItem = (to, label) => (
    <li>
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className={`font-space text-sm tracking-wide transition-all duration-300 ${
          pathname === to
            ? "text-[#4da3ff]"
            : "text-gray-300 hover:text-[#4da3ff]"
        }`}
      >
        {label}
      </Link>
    </li>
  );

  const firstLetter = email?.charAt(0).toUpperCase() || "U";

  return (
    <div className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-[90%] mx-auto px-2">
        <div className="relative bg-[#0a1220]/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 flex items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div
              className="w-10 h-10 rounded-full bg-[#071019] bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/gaac_logo.png')" }}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex flex-1 justify-center gap-12">
            {navItem("/teams", "Teams")}
            {navItem("/projects", "Projects")}
            {navItem("/blogs", "Blogs")}
            {navItem("/recruitments", "Recruitments")}
          </ul>

          {/* Login / Profile */}
          <div className="hidden md:flex ml-6">
            {!token ? (
              <Link to="/login">
                <button className="px-5 py-2 rounded-full bg-[#4da3ff] text-black">
                  LOGIN
                </button>
              </Link>
            ) : (
              <div className="relative" ref={dropdownRef}>
                {/* Avatar */}
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className="w-10 h-10 rounded-full bg-[#4da3ff] text-black flex items-center justify-center cursor-pointer font-bold text-lg hover:scale-105 transition"
                >
                  {firstLetter}
                </div>

                {/* Dropdown */}
                {dropdown && (
                  <div className="absolute right-0 mt-2 bg-white text-black rounded-xl shadow-lg w-40 overflow-hidden">
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Profile
                    </button>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto md:hidden text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 bg-[#0a1220] border border-white/10 rounded-2xl p-4 md:hidden">
            <ul className="space-y-4">
              {navItem("/teams", "Teams")}
              {navItem("/projects", "Projects")}
              {navItem("/blogs", "Blogs")}
              {navItem("/recruitments", "Recruitments")}

              {!token ? (
                <Link to="/login">
                  <button className="w-full px-5 py-2 rounded-full bg-[#4da3ff] text-black">
                    LOGIN
                  </button>
                </Link>
              ) : (
                <button
                  onClick={logout}
                  className="w-full px-5 py-2 rounded-full bg-red-500 text-black"
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
