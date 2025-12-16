import React from "react";
import Navbar from "./Navbar";

export default function Teams() {
  const teams = [
    {
      title: "🤖 Robusta",
      desc: "Building autonomous systems and robotic solutions for aerospace applications — from rovers to drones, we create the machines of tomorrow.",
    },
    {
      title: "💻 Programmers",
      desc: "Developing flight software, data-processing tools and simulations that make missions possible — elegant code for complex systems.",
    },
    {
      title: "🔭 Stargazers",
      desc: "Exploring the cosmos through observation, research and outreach — unlocking the mysteries of space and celestial phenomena.",
    },
  ];

  const execs = [
    {
      name: "Sampath Varma Datla",
      role: "President",
      blurb:
        "Leading GAAC with a vision for innovation and excellence in aerospace technology.",
      course: "B.Tech CSE, 4th Year",
    },
    {
      name: "Dil Barash Mohammad",
      role: "Vice President (Operations and Outreach)",
      blurb:
        "Oraganizing events, managing operations, and expanding GAAC's reach within and beyond the campus.",
      course: "B.Tech CSE (IOT), 3rd Year",
    },
    {
      name: "Narayana Gupta ",
      role: "Vice President (Technical Affairs)",
      blurb:
        "Overseeing technical projects, fostering innovation, and ensuring excellence in all GAAC's engineering endeavors.",
      course: "B.Tech CSE (IOT), 3rd Year",
    },
    {
      name: "B Raagni Moulika",
      role: "Secretary",
      blurb:
        "Managing communications, documentation, and organizational tasks to keep GAAC running smoothly.",
      course: "BBA Financial Markets, 3rd Year",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#031025] via-[#071633] to-[#0b1726] text-slate-100">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#9ad1ff]">
              Our Teams
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Discover the passionate teams that drive innovation and
              exploration at GITAM Aero Astro Club. Each team brings unique
              expertise to push the boundaries of aerospace technology.
            </p>
            <div className="w-20 h-1 bg-[#4da3ff] mx-auto mt-4 rounded-full shadow-sm" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teams.map((t) => (
              <article
                key={t.title}
                className="group p-6 rounded-2xl bg-gradient-to-tr from-[#081830] to-[#0c2746] border border-[#143052] shadow-lg transform transition duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-[#bfe9ff] mb-3">
                  {t.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                  {t.desc}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2f7fd6] to-[#4da3ff] text-white text-sm font-medium shadow-md transition-opacity duration-200 hover:opacity-90"
                  >
                    Know More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#021425]/40 to-transparent py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e6f7ff]">
            Executive Body (2025 - 26)
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Meet the visionary leaders driving innovation and excellence at
            GAAC. Our executive team combines technical expertise with strategic
            leadership.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-8 text-left">
            {execs.map((e, i) => (
              <div
                key={i}
                className="p-4 w-full rounded-xl bg-gradient-to-b from-[#08273f]/60 to-[#062033]/40 border border-[#12364a] shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#134c74] flex items-center justify-center  shadow-inner"></div>
                  <div>
                    <h4 className="font-bold text-[#bfe9ff]">{e.name}</h4>
                    <p className="text-sm text-slate-300">{e.role}</p>
                    <p className="text-xs text-slate-500 mt-1">{e.course}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mt-3">{e.blurb}</p>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    className="text-sm px-3 py-1 rounded-md bg-transparent border border-[#235b82] text-[#9ed7ff] hover:bg-[#123c58]/40"
                  >
                    Email
                  </a>
                  <a
                    href="#"
                    className="text-sm px-3 py-1 rounded-md bg-transparent border border-[#235b82] text-[#9ed7ff] hover:bg-[#123c58]/40"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-slate-400">
        © {new Date().getFullYear()} GITAM Aero Astro Club — All rights reserved
      </footer>
    </div>
  );
}
