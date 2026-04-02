import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github } from "lucide-react";
import Footer from "./Footer";
import React, { useEffect } from "react";
import AchievementsCarousel from "./AchievementsCarousel";

function Home() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Glowing Cursor */}
      <div className="pointer-events-none fixed inset-0 z-[9999]">
        <div
          className="absolute w-4 h-4 rounded-full bg-indigo-400 opacity-100 blur-xl"
          style={{
            transform: "translate(calc(var(--x) - 8px), calc(var(--y) - 8px))",
          }}
        />
      </div>

      <main
        className="
    relative pt-28 min-h-screen
    flex items-center justify-center
    text-center overflow-hidden
  "
        style={{
          backgroundImage: `
      linear-gradient(
        rgba(5, 10, 20, 0.85),
        rgba(5, 10, 20, 0.95)
      ),
      url(./pexels-minan1398-920534.jpg)
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Soft cosmic glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_60%)]" />

        {/* Vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

        <div className="relative z-10 max-w-5xl px-6">
          {/* Club Name */}
          <h1
            className="
        font-orbitron
        text-3xl md:text-7xl
        font-extrabold
        tracking-wide
        text-white
        drop-shadow-[0_0_30px_rgba(99,102,241,0.35)]
      "
          >
            GITAM AERO ASTRO CLUB
          </h1>

          {/* Divider */}
          <div className="w-24 h-[2px] bg-indigo-400 mx-auto my-8 opacity-70" />

          {/* Tagline */}
          <p
            className="
        font-space
        text-gray-300
        text-base md:text-xl
        leading-relaxed
        max-w-3xl mx-auto
      "
          >
            Exploring the skies through engineering, code, and curiosity.
            <br />A student-led community building in{" "}
            <span className="text-white font-medium">
              aerospace, robotics, programming, and astronomy
            </span>
            .
          </p>
          {/* {explanation} */}
          <div className="mt-10 border border-white/10 rounded-xl px-6 py-4 max-w-3xl mx-auto bg-white/5 backdrop-blur-sm">
            <p className="font-space text-gray-300 text-base md:text-lg leading-relaxed text-center">
              Officially affiliated with{" "}
              <span className="text-white font-medium">
                Student Life, GITAM
              </span>{" "}
              and the{" "}
              <span className="text-white font-medium">
                Aero Astro Society, MIT
              </span>
              .
            </p>
          </div>
        </div>
      </main>

      <section className="w-full bg-black text-white py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Statement */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            Engineering shouldn’t stop at <br />
            <span className="text-indigo-400">textbooks.</span>
          </h2>

          {/* Explanation */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-14">
            We give students a space to build, experiment, and explore ideas
            related to <span className="text-white font-semibold">space</span>,
            <span className="text-white font-semibold"> technology</span>, and
            <span className="text-white font-semibold"> innovation</span>.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Hands-on Exposure",
              "Interdisciplinary Learning",
              "Curiosity Beyond Classrooms",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-xl p-6 hover:border-indigo-400 transition"
              >
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-black text-white py-32 px-6 md:px-20 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
              Mission · Vision · Values
            </p>
            <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
              What <span className="text-indigo-400">guides</span> us
            </h2>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Mission */}
            <div
              className="
  relative border border-white/10 rounded-2xl p-10
  bg-white/5 backdrop-blur-sm
  transition-all duration-300
  hover:border-indigo-400/60
  hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]
  hover:-translate-y-1
"
            >
              <span className="absolute -top-4 left-6 bg-black px-4 py-1 text-sm tracking-widest uppercase text-indigo-400">
                Mission
              </span>
              <p className="font-space text-gray-300 text-lg leading-relaxed">
                Cultivate innovation, technical excellence, and collaborative
                learning in aerospace and computational sciences.
              </p>
            </div>

            {/* Vision */}
            <div
              className="
  relative border border-white/10 rounded-2xl p-10
  bg-white/5 backdrop-blur-sm
  transition-all duration-300
  hover:border-indigo-400/60
  hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]
  hover:-translate-y-1
"
            >
              <span className="absolute -top-4 left-6 bg-black px-4 py-1 text-sm tracking-widest uppercase text-indigo-400">
                Vision
              </span>
              <p className="font-space text-gray-300 text-lg leading-relaxed">
                Become a nationally recognized student hub for research,
                prototyping, and space science outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* this needs to be changed to show achievements  */}

      <AchievementsCarousel />
      {/* ================= CORE DOMAINS ================= */}

      <section className="relative bg-gradient-to-b from-black to-[#02030a] text-white py-20 px-6 md:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
            Our Core Domains
          </p>

          <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
            How we <span className="text-indigo-400">organize</span> our work
          </h2>

          <p className="font-space text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            The club is structured into focused domains to help members
            collaborate and grow.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Astronomy",
              desc: "Observing celestial objects and exploring space science.",
              img: "/astro_bg1.jpg",
            },
            {
              title: "Robotics",
              desc: "Designing autonomous systems and intelligent machines.",
              img: "/robo_bg.jpg",
            },
            {
              title: "Programming",
              desc: "Developing software, tools, and intelligent systems.",
              img: "/prog_bg.jpg",
            },
          ].map((domain, index) => (
            <div
              key={index}
              className="
        relative h-64 rounded-2xl overflow-hidden
        border border-white/10
        group
        transition-all duration-500
        hover:border-indigo-400/60
        hover:-translate-y-2
        hover:shadow-[0_0_35px_rgba(99,102,241,0.15)]
      "
              style={{
                backgroundImage: `url(${domain.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/50 transition duration-500" />

              {/* glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_70%)] opacity-80" />

              {/* content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="font-orbitron text-2xl font-bold mb-2">
                  {domain.title}
                </h3>

                <p className="font-space text-gray-300 text-sm leading-relaxed">
                  {domain.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-black text-white py-28 px-6 md:px-20">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
              Explore Our Club
            </p>
            <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
              Discover what <span className="text-indigo-400">we create</span>
            </h2>
            <p className="font-space text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
              Dive deeper into our work, ideas, and the people behind GAAC.
            </p>
          </div>

          {/* Explore Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Explore Our Projects",
                desc: "See the robots, software, and systems built by our members.",
                cta: "View Projects",
                link: "/projects",
              },
              {
                title: "Read Our Blogs",
                desc: "Insights, experiences, and technical write-ups .",
                cta: "Read Blogs",
                link: "/blogs",
              },
              {
                title: "Meet Our Team",
                desc: "Get to know the students driving GAAC forward.",
                cta: "Meet the Team",
                link: "/teams",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            border border-white/10 rounded-2xl
            p-10
            bg-white/5 backdrop-blur-sm
            text-center
            hover:border-indigo-400/60
            transition
          "
              >
                <h3 className="font-orbitron text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="font-space text-gray-300 text-base leading-relaxed mb-8">
                  {item.desc}
                </p>

                <a
                  href={item.link}
                  className="
              inline-flex items-center gap-2
              px-6 py-3
              border border-indigo-400/50
              text-indigo-300
              rounded-full
              font-space
              hover:bg-indigo-400 hover:text-black
              transition-all duration-300
            "
                >
                  {item.cta}
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
