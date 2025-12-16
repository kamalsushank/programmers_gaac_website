import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f16] text-white">
      <Navbar />
      {/* HERO / DOMAINS SECTION (starts from top, no empty header) */}
      <section className="w-full bg-[#0b1a33] pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            GITAM AERO ASTRO CLUB
          </h1>

          <p className="text-gray-400 text-base md:text-lg mt-4 max-w-3xl mx-auto">
            A community of curious minds passionate about Robotics, Programming,
            and Astronomy — building, learning, and exploring together.
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-bold text-[#4da3ff]">
            Explore GAAC Domains
          </h2>

          <p className="text-gray-300 mt-2 text-sm max-w-2xl mx-auto">
            Discover the areas driving innovation at GAAC.
          </p>

          <div className="w-16 h-1 bg-[#4da3ff] mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-xl bg-[#112244] border border-[#1e3a66] hover:border-[#4da3ff] transition">
            <h3 className="text-xl font-semibold text-[#4da3ff] mb-2">
              🤖 Robotics
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mechanical design, embedded systems, autonomous robots and drones.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#112244] border border-[#1e3a66] hover:border-[#4da3ff] transition">
            <h3 className="text-xl font-semibold text-[#4da3ff] mb-2">
              💻 Programming
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Software engineering, automation, tools, and scalable systems.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#112244] border border-[#1e3a66] hover:border-[#4da3ff] transition">
            <h3 className="text-xl font-semibold text-[#4da3ff] mb-2">
              🔭 Astronomy
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Stargazing, celestial observations, and space data analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#071a33] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9cd7ff]">
            About Our Club
          </h3>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-[#e6f7ff]">
            Innovate. Explore. Elevate.
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            The{" "}
            <span className="font-semibold text-[#cfefff]">
              GITAM Aero Astro Club
            </span>{" "}
            is a student-driven community focused on aerospace, robotics,
            programming, and astronomy. We conduct workshops, build impactful
            projects, and collaborate with mentors to grow together.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
            <div className="p-5 rounded-lg bg-[#0e2a4a]/60 border border-[#123654]">
              <h4 className="font-semibold text-[#bfe9ff]">Mission</h4>
              <p className="text-sm text-gray-300 mt-2">
                Cultivate innovation and collaborative learning.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#0e2a4a]/60 border border-[#123654]">
              <h4 className="font-semibold text-[#bfe9ff]">Vision</h4>
              <p className="text-sm text-gray-300 mt-2">
                Become a recognized hub for student-led research.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#0e2a4a]/60 border border-[#123654]">
              <h4 className="font-semibold text-[#bfe9ff]">Values</h4>
              <p className="text-sm text-gray-300 mt-2">
                Integrity, collaboration, hands-on learning, community impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} GITAM Aero Astro Club. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
