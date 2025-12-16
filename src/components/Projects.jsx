import React, { useMemo, useState } from "react";
import Navbar from "./Navbar"; // keep your Navbar if you have one

const CATEGORIES = ["All", "Robotics", "Space Tech", "Astronomy"];

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: "Autonomous Drone Navigation",
    blurb:
      "Advanced AI-powered drone system for autonomous navigation and obstacle avoidance using computer vision and machine learning.",
    tags: ["Python", "OpenCV", "TensorFlow", "ROS"],
    category: "Robotics",
  },
  {
    id: 2,
    title: "CubeSat Attitude Control",
    blurb:
      "A compact attitude control system for CubeSats using reaction wheels and sensor fusion.",
    tags: ["Embedded", "C", "Control"],
    category: "Space Tech",
  },
  {
    id: 3,
    title: "Deep Sky Survey Pipeline",
    blurb:
      "Pipeline for processing telescope data to detect faint celestial objects and transient events.",
    tags: ["Python", "AstroPy", "Data"],
    category: "Astronomy",
  },
  {
    id: 4,
    title: "Swarm Drone Coordination",
    blurb:
      "Algorithms enabling multiple drones to coordinate for mapping and search tasks.",
    tags: ["Algorithms", "ROS", "Sim"],
    category: "Robotics",
  },
  {
    id: 5,
    title: "High-Gain Antenna Prototype",
    blurb: "A prototyped antenna for improved downlink from small satellites.",
    tags: ["RF", "CAD", "Fabrication"],
    category: "Space Tech",
  },
  {
    id: 6,
    title: "Variable Star Analysis",
    blurb:
      "Time-series analysis tools to find and classify variable stars from survey data.",
    tags: ["Python", "Statistics", "Visualization"],
    category: "Astronomy",
  },
];

export default function ProjectsShowcase() {
  const [selected, setSelected] = useState("All");

  const filtered = useMemo(() => {
    if (selected === "All") return SAMPLE_PROJECTS;
    return SAMPLE_PROJECTS.filter((p) => p.category === selected);
  }, [selected]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041526] via-[#071633] to-[#0b1726] text-slate-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-sm tracking-wider text-[#9ad1ff]">OUR WORK</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Innovative Projects
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our cutting-edge projects in robotics, space technology, and
            astronomy. Each project represents our commitment to pushing the
            boundaries of innovation.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
          {CATEGORIES.map((c) => {
            const active = selected === c;
            return (
              <button
                key={c}
                onClick={() => setSelected(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    active
                      ? "bg-[#00d1ff] text-[#042033] shadow-lg"
                      : "bg-[#07283e] text-[#9ad1ff] ring-1 ring-transparent hover:ring-[#154b67]"
                  }
                `}
                aria-pressed={active}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl p-5 bg-gradient-to-tr from-[#081830] to-[#0b2746] border border-[#12344a] shadow-inner hover:shadow-lg transform transition hover:-translate-y-1"
            >
              <div className="flex justify-between items-start">
                <span className="px-2 py-0.5 text-xs rounded-full bg-[#062b44] text-[#bfe9ff] border border-[#0f4b63]">
                  {p.category}
                </span>
                <div className="text-xs text-slate-400">
                  {/* optional date */}
                </div>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#e6f7ff]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {p.blurb}
              </p>

              {/* tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-[#0e2a42] text-slate-200 border border-[#12364a]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* actions */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex gap-3">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Open code for "${p.title}"`);
                    }}
                    className="inline-block px-3 py-1.5 text-xs rounded-md bg-[#e6f7ff] text-[#042033] font-medium shadow-sm"
                  >
                    Code
                  </a>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Open demo for "${p.title}"`);
                    }}
                    className="inline-block px-3 py-1.5 text-xs rounded-md bg-transparent border border-[#235b82] text-[#9ed7ff] hover:bg-[#123c58]/40"
                  >
                    Demo
                  </a>
                </div>

                <button
                  onClick={() => {
                    // example interaction: add to favourites (demo)
                    alert(`Added "${p.title}" to favourites`);
                  }}
                  className="text-xs px-2 py-1 rounded-md bg-[#07283e] text-[#9ad1ff] border border-[#134c74]"
                >
                  + Save
                </button>
              </div>
            </article>
          ))}

          {/* If no projects after filtering */}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16 rounded-xl bg-[#061626] border border-[#123044]">
              <p className="text-slate-300">No projects match that category.</p>
            </div>
          )}
        </section>

        {/* CTA box */}
        <div className="mt-10 bg-[#021825]/60 border border-[#10364a] rounded-xl p-8 text-center shadow-md">
          <h3 className="text-xl font-bold text-[#e6f7ff]">
            Want To Collaborate ?
          </h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Join us in building the future of technology. Whether you're a
            beginner or expert, there's a place for you in our innovative
            projects.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => alert("Get in touch clicked")}
              className="px-5 py-2 rounded-full bg-[#00d1ff] text-[#042033] font-semibold shadow-md"
            >
              Get In Touch
            </button>

            <button
              onClick={() => alert("Join our club clicked")}
              className="px-5 py-2 rounded-full bg-transparent border border-[#235b82] text-[#9ed7ff] hover:bg-[#123c58]/30"
            >
              Join Our Club
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-slate-400">
        © {new Date().getFullYear()} GITAM Aero Astro Club — All rights reserved
      </footer>
    </div>
  );
}
