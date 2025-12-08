import React from "react";
import Navbar from "./Navbar";

function AboutSectionSimple() {
  return (
    <section className="bg-[#071a33] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-sm font-semibold text-[#9cd7ff] tracking-wider">
          About Our Club
        </h3>
        <h2 className="text-3xl font-extrabold mt-2 text-[#e6f7ff]">
          Innovate. Explore. Elevate.
        </h2>
        <p className="mt-4 text-gray-300">
          The{" "}
          <span className="font-semibold text-[#cfefff]">
            GITAM Aero Astro Club
          </span>{" "}
          is a student-driven community focused on aerospace, robotics,
          programming and astronomy. We run workshops, build projects, and
          collaborate with mentors to help students learn and create.
        </p>

        <div className="mt-6 grid sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-lg bg-[#0e2a4a]/50 border border-[#123654]">
            <h4 className="font-bold text-[#bfe9ff]">Mission</h4>
            <p className="text-sm text-gray-300 mt-1">
              Cultivate innovation and collaborative learning.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#0e2a4a]/50 border border-[#123654]">
            <h4 className="font-bold text-[#bfe9ff]">Vision</h4>
            <p className="text-sm text-gray-300 mt-1">
              Become a recognized hub for student-led research.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#0e2a4a]/50 border border-[#123654]">
            <h4 className="font-bold text-[#bfe9ff]">Values</h4>
            <p className="text-sm text-gray-300 mt-1">
              Integrity, collaboration, hands-on learning, community impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="bg-[#0b0f16] min-h-screen">
      <Navbar />

      <header className="pt-20 pb-8 text-center px-6">
        <h1 className="text-white text-4xl font-bold">GITAM AERO ASTRO CLUB</h1>
        <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
          A community of curious minds passionate about Robotics, Programming,
          and Astronomy — building, learning, and exploring together.
        </p>
      </header>

      <section className="w-full bg-[#0b1a33] py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-extrabold tracking-wide text-[#4da3ff]">
            Explore GITAM AERO ASTRO CLUB
          </h2>
          <p className="text-gray-300 mt-3 text-sm max-w-2xl mx-auto">
            Discover the domains driving innovation at GAAC.
          </p>
          <div className="w-20 h-1 bg-[#4da3ff] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#112244] border border-[#1e3a66]">
            <h3 className="text-xl font-bold text-[#4da3ff] mb-2">
              🤖 Robotics
            </h3>
            <p className="text-gray-300 text-sm">
              Mechanical design, embedded systems, autonomous bots and drones.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#112244] border border-[#1e3a66]">
            <h3 className="text-xl font-bold text-[#4da3ff] mb-2">
              💻 Programming
            </h3>
            <p className="text-gray-300 text-sm">
              Software, tools, automation and projects that scale.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#112244] border border-[#1e3a66]">
            <h3 className="text-xl font-bold text-[#4da3ff] mb-2">
              🔭 Astronomy
            </h3>
            <p className="text-gray-300 text-sm">
              Stargazing, data analysis, and exploring celestial events.
            </p>
          </div>
        </div>
      </section>

      <AboutSectionSimple />

      <footer className="text-center py-8 text-gray-400">
        © {new Date().getFullYear()} GITAM Aero Astro Club — All rights reserved
      </footer>
    </div>
  );
}

export default Home;
