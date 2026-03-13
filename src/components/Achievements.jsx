import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CATEGORIES = ["All", "Programmers", "Robusta", "Stargazers", "CoreTeam"];

/* 🔥 THESE 4 ARE PERMANENT COMMON CONTAINERS */
const COMMON_LEADERSHIP = [
  {
    id: "president",
    name: "President",
    designation: "Club President",
    team: "CoreTeam",
    email: "#",
    linkedin: "#",
  },
  {
    id: "vp-tech",
    name: "Vice President - Technical",
    designation: "VP Technical",
    team: "Programmers",
    email: "#",
    linkedin: "#",
  },
  {
    id: "vp-ops",
    name: "Vice President - Operations",
    designation: "VP Operations",
    team: "Robusta",
    email: "#",
    linkedin: "#",
  },
  {
    id: "secretary",
    name: "Secretary",
    designation: "Club Secretary",
    team: "CoreTeam",
    email: "#",
    linkedin: "#",
  },
];

/* 🔥 DYNAMIC ACHIEVEMENTS (AUTO INCREASE / DECREASE) */
const ACHIEVEMENTS = [
  {
    id: 1,
    name: "Anita G",
    designation: "Research Lead",
    team: "Stargazers",
    email: "anita@example.com",
    linkedin: "#",
  },
];

export default function Achievements() {
  const [selected, setSelected] = useState("All");

  /* 🔥 Merge Common + Dynamic */
  const ALL_DATA = [...COMMON_LEADERSHIP, ...ACHIEVEMENTS];

  const filtered = useMemo(() => {
    if (selected === "All") return ALL_DATA;
    return ALL_DATA.filter((a) => a.team === selected);
  }, [selected]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_65%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
            Achievements
          </p>
          <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold">
            Recognizing <span className="text-indigo-400">Excellence</span>
          </h1>
          <p className="font-space text-gray-300 mt-6 text-lg">
            Celebrating members who drive innovation and leadership in GAAC.
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="px-6 pb-20">
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

        {/* ================= CARDS ================= */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((a) => (
            <div
              key={a.id}
              className="
                relative rounded-3xl
                p-8
                min-h-[260px]
                border border-white/10
                bg-white/5 backdrop-blur-sm
                hover:border-indigo-400/60
                hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]
                hover:-translate-y-1
                transition duration-300
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_70%)] opacity-0 hover:opacity-100 transition" />

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-wider text-indigo-300">
                  {a.team}
                </span>

                <h3 className="font-orbitron text-xl font-bold mt-3 mb-2">
                  {a.name}
                </h3>

                <p className="text-gray-300 text-sm mb-6">{a.designation}</p>

                <div className="flex gap-3">
                  <a
                    href={`mailto:${a.email}`}
                    className="px-4 py-1.5 text-sm rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                  >
                    Email
                  </a>

                  <a
                    href={a.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 text-sm rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-20 text-center text-gray-400">
            No achievements found.
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
