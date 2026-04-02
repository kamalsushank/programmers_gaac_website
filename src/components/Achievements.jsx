import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Achievements() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative bg-gradient-to-b from-[#05070d] to-black text-white py-24 ">
        {/* Section Header */}
        <div className="text-center px-6 mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
            What We Do
          </p>

          <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
            Our <span className="text-indigo-400">Achievements</span>
          </h2>

          <p className="font-space text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Each achievement at GAAC represents the passion, innovation, and
            dedication of our members.
          </p>
        </div>

        {/* Activity Blocks */}
        {[
          {
            title: "Andhra Pradesh SpaceTech Summit",
            desc: `Sreyas Malla and Priyangshu Ghosh secured 2nd Prize at the Andhra Pradesh SpaceTech Summit 2026 Project Expo held at Vignan University, Guntur.`,
            img: "/gemini_gaac_robo.png",
            cta: "Know More",
            path: "/achievements",
            reverse: false,
          },
          {
            title: "IIT Madras Robosoccer",
            desc: `Narayana Gupta achieved 2nd place in the RoboSoccer competition at IIT Madras in June 2025.`,
            img: "/gemini_gaac_workshop.png",
            cta: "Know More",
            path: "/achievements",
            reverse: true,
          },
          {
            title: "GDG WOW Hackathon",
            desc: `K Akash Kishan won the GDG WOW 2025 Hackathon by ideating and building a placement preparation application.`,
            img: "/gaac_starnival.jpeg",
            cta: "Know More",
            path: "/achievements",
            reverse: false,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`
          relative flex items-center
          ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"}
          flex-col
          max-w-6xl mx-auto
          mb-16
          group
        `}
          >
            {/* Card Wrapper */}
            <div
              className="
            relative flex items-center
            w-full
            rounded-2xl
            border border-white/10
            bg-white/5 backdrop-blur-sm
            overflow-hidden
            transition-all duration-500
            group-hover:border-indigo-400/60
            group-hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]
          "
            >
              {/* Image Side */}
              <div className="md:w-1/2 w-full h-[35vh] md:h-[40vh] relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-transform duration-700
                group-hover:scale-110
                "
                />

                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Text Side */}
              <div className="md:w-1/2 w-full px-8 md:px-12 py-8">
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="font-space text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                  {item.desc}
                </p>

                {/* CTA Button */}
                {item.path.startsWith("/") ? (
                  <Link
                    to={item.path}
                    className="
                  mt-6 inline-flex items-center gap-2
                  px-6 py-2.5
                  border border-indigo-400/50
                  text-indigo-300
                  font-space
                  rounded-full
                  hover:bg-indigo-400 hover:text-black
                  transition-all duration-300
                "
                  >
                    {item.cta}
                    <span className="text-lg">→</span>
                  </Link>
                ) : (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  mt-6 inline-flex items-center gap-2
                  px-6 py-2.5
                  border border-indigo-400/50
                  text-indigo-300
                  font-space
                  rounded-full
                  hover:bg-indigo-400 hover:text-black
                  transition-all duration-300
                "
                  >
                    {item.cta}
                    <span className="text-lg">→</span>
                  </a>
                )}
              </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
