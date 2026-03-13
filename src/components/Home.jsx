// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
// import { Instagram, Linkedin, Github } from "lucide-react";
// import Footer from "./Footer";
// import React, { useEffect } from "react";

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0 },
// // };

// // const fadeLeft = {
// //   hidden: { opacity: 0, x: -60 },
// //   visible: { opacity: 1, x: 0 },
// // };

// // const fadeRight = {
// //   hidden: { opacity: 0, x: 60 },
// //   visible: { opacity: 1, x: 0 },
// // };

// function Home() {
//   useEffect(() => {
//     const move = (e) => {
//       document.documentElement.style.setProperty("--x", `${e.clientX}px`);
//       document.documentElement.style.setProperty("--y", `${e.clientY}px`);
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
//       {/* Glowing Cursor */}
//       <div className="pointer-events-none fixed inset-0 z-[9999]">
//         <div
//           className="absolute w-4 h-4 rounded-full bg-indigo-400 opacity-100 blur-xl"
//           style={{
//             transform: "translate(calc(var(--x) - 8px), calc(var(--y) - 8px))",
//           }}
//         />
//       </div>

//       <main
//         className="
//     relative pt-28 min-h-screen
//     flex items-center justify-center
//     text-center overflow-hidden
//   "
//         style={{
//           backgroundImage: `
//       linear-gradient(
//         rgba(5, 10, 20, 0.85),
//         rgba(5, 10, 20, 0.95)
//       ),
//       url(./pexels-minan1398-920534.jpg)
//     `,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Soft cosmic glow */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_60%)]" />

//         {/* Vignette for depth */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

//         <div className="relative z-10 max-w-5xl px-6">
//           {/* Club Name */}
//           <h1
//             className="
//         font-orbitron
//         text-3xl md:text-7xl
//         font-extrabold
//         tracking-wide
//         text-white
//         drop-shadow-[0_0_30px_rgba(99,102,241,0.35)]
//       "
//           >
//             GITAM AERO ASTRO CLUB
//           </h1>

//           {/* Divider */}
//           <div className="w-24 h-[2px] bg-indigo-400 mx-auto my-8 opacity-70" />

//           {/* Tagline */}
//           <p
//             className="
//         font-space
//         text-gray-300
//         text-base md:text-xl
//         leading-relaxed
//         max-w-3xl mx-auto
//       "
//           >
//             Exploring the skies through engineering, code, and curiosity.
//             <br />A student-led community building in{" "}
//             <span className="text-white font-medium">
//               aerospace, robotics, programming, and astronomy
//             </span>
//             .
//           </p>
//           {/* {explanation} */}
//           <div className="mt-10 border border-white/10 rounded-xl px-6 py-4 max-w-3xl mx-auto bg-white/5 backdrop-blur-sm">
//             <p className="font-space text-gray-300 text-base md:text-lg leading-relaxed text-center">
//               Officially affiliated with{" "}
//               <span className="text-white font-medium">
//                 Student Life, GITAM
//               </span>{" "}
//               and the{" "}
//               <span className="text-white font-medium">
//                 Aero Astro Society, MIT
//               </span>
//               .
//             </p>
//           </div>
//         </div>
//       </main>

//       <section className="w-full bg-black text-white py-24 px-6 md:px-20">
//         <div className="max-w-5xl mx-auto text-center">
//           {/* Main Statement */}
//           <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
//             Engineering shouldn’t stop at <br />
//             <span className="text-indigo-400">textbooks.</span>
//           </h2>

//           {/* Explanation */}
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-14">
//             We give students a space to build, experiment, and explore ideas
//             related to <span className="text-white font-semibold">space</span>,
//             <span className="text-white font-semibold"> technology</span>, and
//             <span className="text-white font-semibold"> innovation</span>.
//           </p>

//           {/* Pillars */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               "Hands-on Exposure",
//               "Interdisciplinary Learning",
//               "Curiosity Beyond Classrooms",
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-700 rounded-xl p-6 hover:border-indigo-400 transition"
//               >
//                 <p className="text-lg font-semibold">{item}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative bg-black text-white">
//         {/* Section Header */}
//         <div className="py-28 text-center px-6">
//           <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
//             What We Do
//           </p>
//           <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
//             Learning by <span className="text-indigo-400">doing</span>
//           </h2>
//           <p className="font-space text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
//             Every activity at GAAC is designed to move students from theory to
//             hands-on execution.
//           </p>
//         </div>

//         {/* Activity Blocks */}
//         {[
//           {
//             title: "Projects",
//             desc: `
//       Members work on real engineering projects — from robots and drones
//       to intelligent systems and experimental builds. The focus is on
//       designing, building, testing, and iterating.
//     `,
//             img: "/gemini_gaac_robo.png",
//             cta: "Explore Projects",
//             path: "/projects",
//             reverse: false,
//           },
//           {
//             title: "Workshops",
//             desc: `
//       We conduct hands-on workshops to introduce tools, technologies, and
//       concepts across aerospace, robotics, programming, and automation.
//       Learning here is practical, not passive.
//     `,
//             img: "/gemini_gaac_workshop.png",
//             cta: "Follow us on LinkedIn for workshop updates!",
//             path: "https://www.linkedin.com/company/gitam-aero-astro-club/posts/?feedView=all",
//             reverse: true,
//           },
//           {
//             title: "Events",
//             desc: `
//       From technical talks and guest lectures to stargazing sessions and
//       community events — we create spaces for learning, discussion, and
//       inspiration beyond classrooms.
//     `,
//             img: "/gaac_starnival.jpeg",
//             cta: "Follow us on LinkedIn for event updates!",
//             path: "https://www.linkedin.com/company/gitam-aero-astro-club/posts/?feedView=all",
//             reverse: false,
//           },
//           {
//             title: "Hackathons",
//             desc: `
//       Hackathons push members to collaborate under pressure, solve real
//       problems, and transform ideas into working prototypes within limited
//       timeframes.
//     `,
//             img: "/gaac_hack.jpeg",
//             cta: "Follow us on LinkedIn for hackathon updates!",
//             path: "https://www.linkedin.com/company/gitam-aero-astro-club/posts/?feedView=all",
//             reverse: true,
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className={`
//   relative flex items-center
//   ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"}
//   flex-col
//   max-w-7xl mx-auto
//   py-20
//   transition-transform duration-500
//   hover:scale-[1.01]
// `}
//           >
//             {/* Image Side */}
//             <div className="md:w-1/2 w-full h-[40vh] md:h-[50vh] relative group">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl"
//               />
//               <div className="absolute inset-0 bg-black/50 rounded-xl" />
//             </div>

//             {/* Text Side */}
//             <div className="md:w-1/2 w-full px-8 md:px-16 py-10">
//               <h3 className="font-orbitron text-2xl md:text-4xl font-bold mb-5">
//                 {item.title}
//               </h3>

//               <p className="font-space text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
//                 {item.desc}
//               </p>

//               {/* CTA Button */}
//               {item.path.startsWith("/") ? (
//                 <Link
//                   to={item.path}
//                   className="
//       mt-8 inline-flex items-center gap-2
//       px-6 py-3
//       border border-indigo-400/50
//       text-indigo-300
//       font-space
//       rounded-full
//       hover:bg-indigo-400 hover:text-black
//       transition-all duration-300
//     "
//                 >
//                   {item.cta}
//                   <span className="text-lg">→</span>
//                 </Link>
//               ) : (
//                 <a
//                   href={item.path}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//       mt-8 inline-flex items-center gap-2
//       px-6 py-3
//       border border-indigo-400/50
//       text-indigo-300
//       font-space
//       rounded-full
//       hover:bg-indigo-400 hover:text-black
//       transition-all duration-300
//     "
//                 >
//                   {item.cta}
//                   <span className="text-lg">→</span>
//                 </a>
//               )}
//             </div>

//             {/* Ambient glow */}
//             <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_70%)]" />
//           </div>
//         ))}
//       </section>
//       <section className="relative bg-black text-white py-28 px-6 md:px-20">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
//             Our Core Domains
//           </p>
//           <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
//             How we <span className="text-indigo-400">organize</span> our work
//           </h2>
//           <p className="font-space text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
//             The club is structured into focused domains to help members
//             collaborate and grow with clarity.
//           </p>
//         </div>

//         {/* Domain Cards */}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Astronomy",
//               desc: "Observing celestial objects, analyzing data, and exploring space science.",
//               img: "/astro_bg1.jpg",
//             },
//             {
//               title: "Robotics",
//               desc: "Designing and building autonomous systems and intelligent machines.",
//               img: "/robo_bg.jpg",
//             },
//             {
//               title: "Programming",
//               desc: "Developing software, tools, and intelligent systems that power ideas.",
//               img: "/prog_bg.jpg",
//             },
//           ].map((domain, index) => (
//             <div
//               key={index}
//               className="
//           relative h-64 rounded-2xl overflow-hidden
//           border border-white/10
//           group
//         "
//               style={{
//                 backgroundImage: `url(${domain.img})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Dark overlay */}
//               <div className="absolute inset-0 bg-black/65 group-hover:bg-black/50 transition" />

//               {/* Glow */}
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_70%)] opacity-70" />

//               {/* Content */}
//               <div className="relative z-10 h-full flex flex-col justify-end p-6">
//                 <h3 className="font-orbitron text-2xl font-bold mb-2">
//                   {domain.title}
//                 </h3>
//                 <p className="font-space text-gray-300 text-sm leading-relaxed">
//                   {domain.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="relative bg-black text-white py-32 px-6 md:px-20 overflow-hidden">
//         {/* Ambient glow */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_70%)]" />

//         <div className="relative z-10 max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-24">
//             <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
//               Mission · Vision · Values
//             </p>
//             <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
//               What <span className="text-indigo-400">guides</span> us
//             </h2>
//           </div>

//           {/* Mission & Vision */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
//             {/* Mission */}
//             <div
//               className="
//   relative border border-white/10 rounded-2xl p-10
//   bg-white/5 backdrop-blur-sm
//   transition-all duration-300
//   hover:border-indigo-400/60
//   hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]
//   hover:-translate-y-1
// "
//             >
//               <span className="absolute -top-4 left-6 bg-black px-4 py-1 text-sm tracking-widest uppercase text-indigo-400">
//                 Mission
//               </span>
//               <p className="font-space text-gray-300 text-lg leading-relaxed">
//                 Cultivate innovation, technical excellence, and collaborative
//                 learning in aerospace and computational sciences.
//               </p>
//             </div>

//             {/* Vision */}
//             <div
//               className="
//   relative border border-white/10 rounded-2xl p-10
//   bg-white/5 backdrop-blur-sm
//   transition-all duration-300
//   hover:border-indigo-400/60
//   hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]
//   hover:-translate-y-1
// "
//             >
//               <span className="absolute -top-4 left-6 bg-black px-4 py-1 text-sm tracking-widest uppercase text-indigo-400">
//                 Vision
//               </span>
//               <p className="font-space text-gray-300 text-lg leading-relaxed">
//                 Become a nationally recognized student hub for research,
//                 prototyping, and space science outreach.
//               </p>
//             </div>
//           </div>

//           {/* Core Values */}
//           <div className="text-center mb-14">
//             <h3 className="font-orbitron text-3xl md:text-4xl font-bold">
//               Our Core Values
//             </h3>
//             <p className="font-space text-gray-400 mt-4">
//               The principles that shape our culture and decisions
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               "Integrity & Curiosity",
//               "Inclusive Collaboration",
//               "Hands-on Experimentation",
//               "Community Impact",
//             ].map((value, index) => (
//               <div
//                 key={index}
//                 className="
//             border border-white/10 rounded-xl
//             py-8 px-6
//             bg-white/5
//             text-center
//             hover:border-indigo-400/60
//             transition
//           "
//               >
//                 <p className="font-space text-gray-300 text-lg">{value}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="relative bg-black text-white py-28 px-6 md:px-20">
//         {/* Ambient glow */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

//         <div className="relative z-10 max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-20">
//             <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
//               Explore Our Club
//             </p>
//             <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
//               Discover what <span className="text-indigo-400">we create</span>
//             </h2>
//             <p className="font-space text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
//               Dive deeper into our work, ideas, and the people behind GAAC.
//             </p>
//           </div>

//           {/* Explore Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {[
//               {
//                 title: "Explore Our Projects",
//                 desc: "See the robots, software, and systems built by our members.",
//                 cta: "View Projects",
//                 link: "/projects",
//               },
//               {
//                 title: "Read Our Blogs",
//                 desc: "Insights, experiences, and technical write-ups .",
//                 cta: "Read Blogs",
//                 link: "/blogs",
//               },
//               {
//                 title: "Meet Our Team",
//                 desc: "Get to know the students driving GAAC forward.",
//                 cta: "Meet the Team",
//                 link: "/teams",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="
//             border border-white/10 rounded-2xl
//             p-10
//             bg-white/5 backdrop-blur-sm
//             text-center
//             hover:border-indigo-400/60
//             transition
//           "
//               >
//                 <h3 className="font-orbitron text-2xl font-bold mb-4">
//                   {item.title}
//                 </h3>

//                 <p className="font-space text-gray-300 text-base leading-relaxed mb-8">
//                   {item.desc}
//                 </p>

//                 <a
//                   href={item.link}
//                   className="
//               inline-flex items-center gap-2
//               px-6 py-3
//               border border-indigo-400/50
//               text-indigo-300
//               rounded-full
//               font-space
//               hover:bg-indigo-400 hover:text-black
//               transition-all duration-300
//             "
//                 >
//                   {item.cta}
//                   <span>→</span>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default Home;

// {
//   /* <section className="w-full bg-transparent pt-24 pb-16 px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           variants={fadeUp}
//           className="max-w-6xl mx-auto text-center mb-12"
//           style={{
//             backgroundImage: `url(./pexels-minan1398-920534.jpg)`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           {" "}
//           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
//             GITAM AERO ASTRO CLUB
//           </h1>
//           <p className="text-gray-400 text-base md:text-lg mt-4 max-w-3xl mx-auto">
//             A community of curious minds passionate about Robotics, Programming,
//             and Astronomy — building, learning, and exploring together.
//           </p>
//           <h2 className="mt-10 text-2xl md:text-3xl font-bold text-[#4da3ff]">
//             Explore GAAC Domains
//           </h2>
//           <p className="text-gray-300 mt-2 text-sm max-w-2xl mx-auto">
//             Discover the areas driving innovation at GAAC.
//           </p>
//           <div className="w-16 h-1 bg-[#4da3ff] mx-auto mt-4 rounded-full" />
//         </motion.div>

//         <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
//           <motion.div
//             variants={fadeLeft}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="p-6 rounded-xl bg-[#112244] border border-[#1e3a66] hover:border-[#4da3ff] transition
//             "
//             whileHover={{
//               y: -8,
//               boxShadow: "0 20px 40px rgba(77,163,255,0.25)",
//             }}
//           >
//             {" "}
//             <h3 className="text-xl font-semibold text-[#4da3ff] mb-2">
//               🤖 Robotics
//             </h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Mechanical design, embedded systems, autonomous robots and drones.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             className="p-6 rounded-xl bg-[#112244] border border-[#1e3a66] hover:border-[#4da3ff] transition"
//             whileHover={{
//               y: -8,
//               boxShadow: "0 20px 40px rgba(77,163,255,0.25)",
//             }}
//           >
//             {" "}
//             <h3 className="text-xl font-semibold text-[#4da3ff] mb-2">
//               💻 Programming
//             </h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Software engineering, automation, tools, and scalable systems.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={fadeRight}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="p-6 rounded-xl bg-[#112244] border border-[#1e3a66] hover:border-[#4da3ff] transition"
//             whileHover={{
//               y: -8,
//               boxShadow: "0 20px 40px rgba(77,163,255,0.25)",
//             }}
//           >
//             <h3 className="text-xl font-semibold text-[#4da3ff] mb-2">
//               🔭 Astronomy
//             </h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Stargazing, celestial observations, and space data analysis.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ABOUT SECTION */
// }
// {
//   /* <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="max-w-4xl mx-auto text-center"
//       >
//         <section className="bg-transparent py-16 px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9cd7ff]">
//               About Our Club
//             </h3>

//             <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-[#e6f7ff]">
//               Innovate. Explore. Elevate.
//             </h2>

//             <p className="mt-5 text-gray-300 leading-relaxed">
//               The{" "}
//               <span className="font-semibold text-[#cfefff]">
//                 GITAM Aero Astro Club
//               </span>{" "}
//               is a student-driven community focused on aerospace, robotics,
//               programming, and astronomy. We conduct workshops, build impactful
//               projects, and collaborate with mentors to grow together.
//             </p>

//             <div className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
//               <div className="p-5 rounded-lg bg-[#0e2a4a]/60 border border-[#123654]">
//                 <h4 className="font-semibold text-[#bfe9ff]">Mission</h4>
//                 <p className="text-sm text-gray-300 mt-2">
//                   Cultivate innovation and collaborative learning.
//                 </p>
//               </div>

//               <div className="p-5 rounded-lg bg-[#0e2a4a]/60 border border-[#123654]">
//                 <h4 className="font-semibold text-[#bfe9ff]">Vision</h4>
//                 <p className="text-sm text-gray-300 mt-2">
//                   Become a recognized hub for student-led research.
//                 </p>
//               </div>

//               <div className="p-5 rounded-lg bg-[#0e2a4a]/60 border border-[#123654]">
//                 <h4 className="font-semibold text-[#bfe9ff]">Values</h4>
//                 <p className="text-sm text-gray-300 mt-2">
//                   Integrity, collaboration, hands-on learning, community impact.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </motion.div> */
// }
// {
//   /* FOOTER */
// }
// {
//   /* <footer className="border-t border-white/10 text-center py-6 text-gray-400 text-sm">
//         © {new Date().getFullYear()} GITAM Aero Astro Club. All rights reserved.
//       </footer> */
// }

// // <section className="relative bg-black py-28 px-6 md:px-20 overflow-hidden">
// //         {/* Ambient glow */}
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

// //         <div className="relative z-10 max-w-6xl mx-auto">
// //           {/* Section Header */}
// //           <div className="text-center mb-20">
// //             <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
// //               What We Do
// //             </p>
// //             <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold text-white">
// //               Turning curiosity into{" "}
// //               <span className="text-indigo-400">action</span>
// //             </h2>
// //             <p className="font-space text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
// //               At GAAC, members don’t just learn — they build, experiment,
// //               compete, and explore beyond the classroom.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github } from "lucide-react";
import Footer from "./Footer";
import React, { useEffect } from "react";

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

      <section className="relative bg-black text-white">
        {/* Section Header */}
        <div className="py-28 text-center px-6">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
            What We Do
          </p>
          <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
            Learning by <span className="text-indigo-400">doing</span>
          </h2>
          <p className="font-space text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
            Every activity at GAAC is designed to move students from theory to
            hands-on execution.
          </p>
        </div>

        {/* Activity Blocks */}
        {[
          {
            title: "Projects",
            desc: `
      Members work on real engineering projects — from robots and drones
      to intelligent systems and experimental builds. The focus is on
      designing, building, testing, and iterating.
    `,
            img: "/gemini_gaac_robo.png",
            cta: "Explore Projects",
            path: "/projects",
            reverse: false,
          },
          {
            title: "Workshops",
            desc: `
      We conduct hands-on workshops to introduce tools, technologies, and
      concepts across aerospace, robotics, programming, and automation.
      Learning here is practical, not passive.
    `,
            img: "/gemini_gaac_workshop.png",
            cta: "Follow us on LinkedIn for workshop updates!",
            path: "https://www.linkedin.com/company/gitam-aero-astro-club/posts/?feedView=all",
            reverse: true,
          },
          {
            title: "Events",
            desc: `
      From technical talks and guest lectures to stargazing sessions and
      community events — we create spaces for learning, discussion, and
      inspiration beyond classrooms.
    `,
            img: "/gaac_starnival.jpeg",
            cta: "Follow us on LinkedIn for event updates!",
            path: "https://www.linkedin.com/company/gitam-aero-astro-club/posts/?feedView=all",
            reverse: false,
          },
          {
            title: "Hackathons",
            desc: `
      Hackathons push members to collaborate under pressure, solve real
      problems, and transform ideas into working prototypes within limited
      timeframes.
    `,
            img: "/gaac_hack.jpeg",
            cta: "Follow us on LinkedIn for hackathon updates!",
            path: "https://www.linkedin.com/company/gitam-aero-astro-club/posts/?feedView=all",
            reverse: true,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`
  relative flex items-center
  ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"}
  flex-col
  max-w-7xl mx-auto
  py-20
  transition-transform duration-500
  hover:scale-[1.01]
`}
          >
            {/* Image Side */}
            <div className="md:w-1/2 w-full h-[40vh] md:h-[50vh] relative group">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/50 rounded-xl" />
            </div>

            {/* Text Side */}
            <div className="md:w-1/2 w-full px-8 md:px-16 py-10">
              <h3 className="font-orbitron text-2xl md:text-4xl font-bold mb-5">
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
      mt-8 inline-flex items-center gap-2
      px-6 py-3
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
      mt-8 inline-flex items-center gap-2
      px-6 py-3
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

            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_70%)]" />
          </div>
        ))}
      </section>
      <section className="relative bg-black text-white py-28 px-6 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
            Our Core Domains
          </p>
          <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
            How we <span className="text-indigo-400">organize</span> our work
          </h2>
          <p className="font-space text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
            The club is structured into focused domains to help members
            collaborate and grow with clarity.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Astronomy",
              desc: "Observing celestial objects, analyzing data, and exploring space science.",
              img: "/astro_bg1.jpg",
            },
            {
              title: "Robotics",
              desc: "Designing and building autonomous systems and intelligent machines.",
              img: "/robo_bg.jpg",
            },
            {
              title: "Programming",
              desc: "Developing software, tools, and intelligent systems that power ideas.",
              img: "/prog_bg.jpg",
            },
          ].map((domain, index) => (
            <div
              key={index}
              className="
          relative h-64 rounded-2xl overflow-hidden
          border border-white/10
          group
        "
              style={{
                backgroundImage: `url(${domain.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/50 transition" />

              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_70%)] opacity-70" />

              {/* Content */}
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

      {/* ================= ACHIEVEMENTS PREVIEW ================= */}
      <section className="relative bg-black text-white py-32 px-6 md:px-20 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-32">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
              Achievements
            </p>
            <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
              Recognizing <span className="text-indigo-400">Excellence</span>
            </h2>
          </div>

          {/* Achievement 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Image */}
            <div className="md:w-1/2 w-full h-[350px] relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/achievement1.jpg"
                alt="Achievement"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 w-full">
              <p className="text-xs uppercase tracking-widest text-indigo-300 mb-3">
                Core Team
              </p>
              <h3 className="font-orbitron text-3xl font-bold mb-4">
                Sampath Varma Datla
              </h3>
              <p className="text-gray-400 mb-6">
                President – Recognized for strategic leadership and innovation
                in GAAC.
              </p>

              <div className="flex gap-4">
                <a
                  href="mailto:email@example.com"
                  className="px-5 py-2 rounded-full border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                >
                  Email
                </a>

                <a
                  href="#"
                  className="px-5 py-2 rounded-full border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Achievement 2 (Reverse Layout) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            {/* Image */}
            <div className="md:w-1/2 w-full h-[350px] relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/achievement2.jpg"
                alt="Achievement"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full">
              <p className="text-xs uppercase tracking-widest text-indigo-300 mb-3">
                Robusta
              </p>
              <h3 className="font-orbitron text-3xl font-bold mb-4">
                Member Name
              </h3>
              <p className="text-gray-400 mb-6">
                Lead – Excellence in autonomous drone innovation and research.
              </p>

              <div className="flex gap-4">
                <a
                  href="mailto:email@example.com"
                  className="px-5 py-2 rounded-full border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                >
                  Email
                </a>

                <a
                  href="#"
                  className="px-5 py-2 rounded-full border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Achievement 3 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Image */}
            <div className="md:w-1/2 w-full h-[350px] relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/achievement1.jpg"
                alt="Achievement"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 w-full">
              <p className="text-xs uppercase tracking-widest text-indigo-300 mb-3">
                Core Team
              </p>
              <h3 className="font-orbitron text-3xl font-bold mb-4">
                Sampath Varma Datla
              </h3>
              <p className="text-gray-400 mb-6">
                President – Recognized for strategic leadership and innovation
                in GAAC.
              </p>

              <div className="flex gap-4">
                <a
                  href="mailto:email@example.com"
                  className="px-5 py-2 rounded-full border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                >
                  Email
                </a>

                <a
                  href="#"
                  className="px-5 py-2 rounded-full border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Achievement 4 (Reverse Layout) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            {/* Image */}
            <div className="md:w-1/2 w-full h-[350px] relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/achievement2.jpg"
                alt="Achievement"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full">
              <p className="text-xs uppercase tracking-widest text-indigo-300 mb-3">
                Robusta
              </p>
              <h3 className="font-orbitron text-3xl font-bold mb-4">
                Member Name
              </h3>
              <p className="text-gray-400 mb-6">
                Lead – Excellence in autonomous drone innovation and research.
              </p>

              <div className="flex gap-4">
                <a
                  href="mailto:email@example.com"
                  className="px-5 py-2 rounded-full border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                >
                  Email
                </a>

                <a
                  href="#"
                  className="px-5 py-2 rounded-full border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              to="/achievements"
              className="
          inline-flex items-center gap-2
          px-8 py-3
          border border-indigo-400/50
          text-indigo-300
          rounded-full
          hover:bg-indigo-400 hover:text-black
          transition-all duration-300
        "
            >
              View All Achievements →
            </Link>
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

          {/* Core Values */}
          <div className="text-center mb-14">
            <h3 className="font-orbitron text-3xl md:text-4xl font-bold">
              Our Core Values
            </h3>
            <p className="font-space text-gray-400 mt-4">
              The principles that shape our culture and decisions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Integrity & Curiosity",
              "Inclusive Collaboration",
              "Hands-on Experimentation",
              "Community Impact",
            ].map((value, index) => (
              <div
                key={index}
                className="
            border border-white/10 rounded-xl
            py-8 px-6
            bg-white/5
            text-center
            hover:border-indigo-400/60
            transition
          "
              >
                <p className="font-space text-gray-300 text-lg">{value}</p>
              </div>
            ))}
          </div>
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
