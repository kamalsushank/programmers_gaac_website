// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function Teams() {
//   const teams = [
//     {
//       title: "🔭 Stargazers",
//       desc: "Exploring the cosmos through observation, research, and astronomy outreach.",
//       cta: "Meet Stargazers →",
//     },
//     {
//       title: "🤖 Robusta",
//       desc: "Building autonomous systems and robotic solutions for aerospace applications — from rovers to drones.",
//       cta: "Meet Robusta →",
//     },
//     {
//       title: "💻 Programmers",
//       desc: "Developing flight software, simulations, and data-driven tools that power intelligent systems.",
//       cta: "Meet Programmers →",
//     },
//     {
//       title: "🌟 Core Team",
//       desc: "Ensuring smooth coordination, leadership, and execution across all GAAC initiatives.",
//       cta: "Meet the Core Team →",
//     },
//   ];

//   const execs = [
//     {
//       name: "Sampath Varma Datla",
//       role: "President",
//       course: "B.Tech CSE, 4th Year",
//       blurb:
//         "Leading GAAC with a vision for innovation, impact, and technical excellence.",
//     },
//     {
//       name: "Dil Barash Mohammad",
//       role: "Vice President (Operations & Outreach)",
//       course: "B.Tech CSE (IoT), 3rd Year",
//       blurb:
//         "Managing events, operations, and expanding GAAC’s presence within and beyond campus.",
//     },
//     {
//       name: "Narayana Gupta",
//       role: "Vice President (Technical Affairs)",
//       course: "B.Tech CSE (IoT), 3rd Year",
//       blurb:
//         "Driving technical direction, mentoring projects, and ensuring engineering depth.",
//     },
//     {
//       name: "B Raagni Moulika",
//       role: "Secretary",
//       course: "BBA Financial Markets, 3rd Year",
//       blurb:
//         "Handling communications, documentation, and organizational workflows.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Global background */}
//       {/* <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" /> */}

//       <Navbar />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_65%)]" />

//       {/* ================= HERO ================= */}
//       <section className="pt-32 pb-20 text-center px-6">
//         <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold">
//           Teams that <span className="text-indigo-400">build</span> GAAC
//         </h1>
//         <p className="font-space text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
//           Focused teams. Passionate individuals. One mission — advancing
//           aerospace, robotics, and space science.
//         </p>
//       </section>

//       {/* ================= TEAMS ================= */}
//       <section className="py-28 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
//           {teams.map((team, i) => (
//             <div
//               key={i}
//               className="
//                 group relative rounded-3xl p-10
//                 border border-white/10
//                 bg-white/5 backdrop-blur-md
//                 transition-all duration-500
//                 hover:-translate-y-2
//                 hover:border-indigo-400/60
//                 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
//               "
//             >
//               {/* Glow overlay */}
//               <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_70%)] opacity-0 group-hover:opacity-100 transition" />

//               <div className="relative z-10 text-center">
//                 <h3 className="font-orbitron text-3xl font-bold mb-5">
//                   {team.title}
//                 </h3>
//                 <p className="font-space text-gray-300 text-lg leading-relaxed max-w-xl mx-auto mb-8">
//                   {team.desc}
//                 </p>

//                 <button
//                   className="
//                   inline-flex items-center gap-2
//                   px-7 py-3 rounded-full
//                   border border-indigo-400/50
//                   text-indigo-300
//                   hover:bg-indigo-400 hover:text-black
//                   transition
//                 "
//                 >
//                   {team.cta}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= EXECUTIVE BODY ================= */}
//       <section className="py-28 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
//               Leadership
//             </p>
//             <h2 className="font-orbitron text-4xl md:text-5xl font-extrabold">
//               Executive Body <span className="text-indigo-400">(2025–26)</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//             {execs.map((e, i) => (
//               <div
//                 key={i}
//                 className="
//                   group relative rounded-3xl p-8
//                   border border-white/10
//                   bg-white/5 backdrop-blur-md
//                   transition-all duration-500
//                   hover:-translate-y-2
//                   hover:border-indigo-400/60
//                   hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
//                 "
//               >
//                 <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition" />

//                 <div className="relative z-10">
//                   <h4 className="font-semibold text-lg">{e.name}</h4>
//                   <p className="text-sm text-indigo-300">{e.role}</p>
//                   <p className="text-xs text-gray-400 mt-1">{e.course}</p>

//                   <p className="font-space text-gray-300 mt-4 leading-relaxed">
//                     {e.blurb}
//                   </p>

//                   <div className="mt-5 flex gap-3">
//                     <button className="px-4 py-1.5 text-sm rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition">
//                       Email
//                     </button>
//                     <button className="px-4 py-1.5 text-sm rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition">
//                       LinkedIn
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Teams() {
  const teams = [
    {
      title: "🔭 Stargazers",
      desc: "Exploring the cosmos through observation, research, and astronomy outreach.",
      cta: "Meet Stargazers →",
      path: "/teams/Stargazers",
    },
    {
      title: "🤖 Robusta",
      desc: "Building autonomous systems and robotic solutions for aerospace applications — from rovers to drones.",
      cta: "Meet Robusta →",
      path: "/teams/Robusta",
    },
    {
      title: "💻 Programmers",
      desc: "Developing flight software, simulations, and data-driven tools that power intelligent systems.",
      cta: "Meet Programmers →",
      path: "/teams/Programmers",
    },
    {
      title: "🌟 Core Team",
      desc: "Ensuring smooth coordination, leadership, and execution across all GAAC initiatives.",
      cta: "Meet the Core Team →",
      path: "/teams/CoreTeam",
    },
  ];

  // 🔥 Executive Body State
  const [execs, setExecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExecutiveBody = async () => {
      try {
        setLoading(true);

        // 🔥 Replace with real backend URL after deploy
        const res = await fetch(
          "https://gaac-backend.onrender.com/api/public/get-team-members/EB",
        );

        if (!res.ok) throw new Error("Failed to fetch executive body");

        const data = await res.json();

        setExecs(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load Executive Body.");
      } finally {
        setLoading(false);
      }
    };

    fetchExecutiveBody();
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#020a12] relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-20 text-center px-6">
        <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold">
          Teams that <span className="text-indigo-400">build</span> GAAC
        </h1>
        <p className="font-space text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
          Focused teams. Passionate individuals. One mission — advancing
          aerospace, robotics, and space science.
        </p>
      </section>

      {/* ================= TEAMS ================= */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {teams.map((team, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-10 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_70%)] opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10 text-center">
                <h3 className="font-orbitron text-3xl font-bold mb-5">
                  {team.title}
                </h3>
                <p className="font-space text-gray-300 text-lg leading-relaxed max-w-xl mx-auto mb-8">
                  {team.desc}
                </p>

                <Link
                  to={team.path}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400 hover:text-black transition text-sm"
                >
                  {team.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXECUTIVE BODY ================= */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
              Leadership
            </p>
            <h2 className="font-orbitron text-4xl md:text-5xl font-extrabold">
              Executive Body <span className="text-indigo-400">(2025–26)</span>
            </h2>
          </div>

          {loading && (
            <p className="text-center text-gray-400">
              Fetching Executive Body...
            </p>
          )}

          {error && <p className="text-center text-red-400">{error}</p>}

          {!loading && execs.length === 0 && (
            <p className="text-center text-gray-400">
              No Executive Members added yet.
            </p>
          )}

          {!loading && execs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {execs.map((e) => (
                <div
                  key={e._id}
                  className="group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
                >
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition" />

                  <div className="relative z-10">
                    <h4 className="font-semibold text-lg">{e.name}</h4>
                    <p className="text-sm text-indigo-300">{e.role}</p>
                    <p className="text-xs text-gray-400 mt-1">{e.course}</p>

                    <p className="font-space text-gray-300 mt-4 leading-relaxed">
                      {e.blurb}
                    </p>

                    <div className="mt-5 flex gap-3">
                      {e.email && (
                        <a
                          href={`mailto:${e.email}`}
                          className="px-4 py-1.5 text-sm rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                        >
                          Email
                        </a>
                      )}

                      {e.linkedin && (
                        <a
                          href={e.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-1.5 text-sm rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
