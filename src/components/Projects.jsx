import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CATEGORIES = ["All", "Stargazers", "Robusta", "Programmers"];

const PROJECTS = [
  {
    id: 1,
    title: "Autonomous Drone Navigation",
    desc: "AI-powered drone system for autonomous navigation and obstacle avoidance using vision and learning.",
    category: "Robusta",
  },
  {
    id: 2,
    title: "CubeSat Attitude Control",
    desc: "Compact attitude control system for CubeSats using reaction wheels and sensor fusion.",
    category: "Programmers",
  },
  {
    id: 3,
    title: "Deep Sky Survey Pipeline",
    desc: "Processing telescope data to detect faint celestial objects and transient events.",
    category: "Stargazers",
  },
  {
    id: 4,
    title: "Swarm Drone Coordination",
    desc: "Algorithms enabling multiple drones to coordinate for mapping and exploration.",
    category: "Robusta",
  },
  {
    id: 5,
    title: "High-Gain Antenna Prototype",
    desc: "Prototype antenna for improved communication with small satellites.",
    category: "Programmers",
  },
  {
    id: 6,
    title: "Variable Star Analysis",
    desc: "Time-series analysis tools to detect and classify variable stars.",
    category: "Stargazers",
  },
];

export default function ProjectsShowcase() {
  const [selected, setSelected] = useState("All");

  const filtered = useMemo(() => {
    if (selected === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === selected);
  }, [selected]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_65%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
            Our Work
          </p>
          <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold">
            Projects that <span className="text-indigo-400">define</span> GAAC
          </h1>
          <p className="font-space text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
            A collection of hands-on engineering, research, and exploration
            projects built by GAAC members.
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="relative px-6 pb-20">
        <div className="max-w-6xl mx-auto flex justify-center gap-4 flex-wrap mb-16">
          {CATEGORIES.map((c) => {
            const active = selected === c;
            return (
              <button
                key={c}
                onClick={() => setSelected(c)}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium
                  border transition
                  ${
                    active
                      ? "bg-indigo-400 text-black border-indigo-400"
                      : "border-white/20 text-gray-300 hover:border-indigo-400 hover:text-indigo-300"
                  }
                `}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* ================= PROJECT CARDS ================= */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="
                relative rounded-3xl p-8
                border border-white/10
                bg-white/5 backdrop-blur-sm
                hover:border-indigo-400/60
                transition
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_70%)] opacity-0 hover:opacity-100 transition" />

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-wider text-indigo-300">
                  {p.category}
                </span>

                <h3 className="font-orbitron text-xl font-bold mt-3 mb-4">
                  {p.title}
                </h3>

                <p className="font-space text-gray-300 leading-relaxed mb-6">
                  {p.desc}
                </p>

                <button
                  className="
                    inline-flex items-center gap-2
                    px-5 py-2.5 rounded-full
                    border border-indigo-400/50
                    text-indigo-300
                    hover:bg-indigo-400 hover:text-black
                    transition
                  "
                >
                  {" "}
                  <a href="https://github.com/g-aeroastro-c"> Know More →</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-20 text-center text-gray-400">
            No projects match this category.
          </div>
        )}
      </section>
      <section className="relative py-24 px-6 bg-black overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-extrabold mb-6">
            Explore More Projects
          </h2>

          <p className="font-space text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Stay connected with GITAM Aero Astro Club and explore our latest
            projects, updates, and technical work across platforms.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/gitam-aero-astro-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="
          inline-flex items-center gap-2
          px-6 py-3 rounded-full
          border border-indigo-400/50
          text-indigo-300
          hover:bg-indigo-400 hover:text-black
          transition-all duration-300
          hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
        "
            >
              LinkedIn →
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/g-aeroastro-c"
              target="_blank"
              rel="noopener noreferrer"
              className="
          inline-flex items-center gap-2
          px-6 py-3 rounded-full
          border border-indigo-400/50
          text-indigo-300
          hover:bg-indigo-400 hover:text-black
          transition-all duration-300
          hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
        "
            >
              GitHub →
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/gitam.aeroastro?igsh=MTFrb3o4b3BieDdlYw=="
              target="_blank"
              rel="noopener noreferrer"
              className="
          inline-flex items-center gap-2
          px-6 py-3 rounded-full
          border border-indigo-400/50
          text-indigo-300
          hover:bg-indigo-400 hover:text-black
          transition-all duration-300
          hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
        "
            >
              Instagram →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
