// // // this one is to test the backend integration for blogs.
import { useEffect, useState } from "react";
import api from "../services/api";

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const res = await api.request("/api/public/get-all-blogs", {
//         method: "GET",
//         includeAuth: false,
//       });

//       const data = await res.json();
//       setBlogs(data);
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div>
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>{blog.content}</p>
//           <p>{blog.authorName}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// this one is  the one currently live in the website
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await api.request("/api/public/get-all-blogs", {
        method: "GET",
        includeAuth: false,
      });

      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_65%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 ">
          <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold">
            GAAC <span className="text-indigo-400">Blogs</span>
          </h1>
          <p className="font-space text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
            Ideas, experiences, and learnings shared by GAAC members — from
            aerospace insights to hands-on engineering journeys.
          </p>
        </div>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="relative  px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16">
            Featured Blogs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.map((b, idx) => (
              <div
                key={idx}
                className="
                  relative rounded-3xl p-7
                  border border-white/10
                  bg-white/5 backdrop-blur-md
                  hover:border-indigo-400/60
                  transition-all duration-300
                  hover:-translate-y-2
                "
              >
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_70%)] opacity-0 hover:opacity-100 transition" />

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-orbitron text-xl font-bold mb-3">
                    {b.title}
                  </h3>

                  <p className="font-space text-gray-300 leading-relaxed mb-6">
                    {b.content}
                  </p>

                  <div className="mt-auto border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">{b.authorName}</p>
                    <p className="text-sm text-indigo-300">{b.team}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WRITE BLOG ================= */}
      {/* <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.12),transparent_70%)]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5 backdrop-blur-xl
              p-8 md:p-10
            "
          >
            <h2 className="font-orbitron text-3xl font-bold mb-4 text-center">
              Write a Blog
            </h2>
            <p className="font-space text-gray-300 text-center mb-8">
              Have something to share? Write about your learnings, projects, or
              experiences with GAAC.
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Blog Title"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-black/40 border border-white/10
                  text-white placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-indigo-400/70
                "
              />

              <textarea
                rows="6"
                placeholder="Write your blog content here..."
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-black/40 border border-white/10
                  text-white placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-indigo-400/70
                  resize-none
                "
              />

              <button
                type="submit"
                className="
                  w-full mt-4
                  px-6 py-3 rounded-full
                  bg-indigo-500 text-black
                  font-medium
                  hover:bg-indigo-400
                  transition
                  hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]
                "
              >
                Submit Blog →
              </button>
            </form>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

// this one contains sorting based on teams

// import React, { useMemo, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const CATEGORIES = ["All", "Robotics", "Space Tech", "Astronomy"];

// const SAMPLE_BLOGS = [
//   {
//     id: 1,
//     title: "Building Your First Drone: A Complete Guide",
//     excerpt:
//       "Step-by-step tutorial on building a custom drone from scratch: component selection, assembly, and programming.",
//     author: "Alex Rodriguez",
//     date: "January 12, 2025",
//     tags: ["Python", "OpenCV", "TensorFlow", "ROS"],
//     category: "Robotics",
//   },
//   {
//     id: 2,
//     title: "CubeSat Design Fundamentals",
//     excerpt:
//       "A beginner-friendly walkthrough on CubeSat subsystems, power budgets, and communication strategies.",
//     author: "Priya Menon",
//     date: "March 04, 2025",
//     tags: ["Embedded", "RF", "CAD"],
//     category: "Space Tech",
//   },
//   {
//     id: 3,
//     title: "Photometry Techniques for Variable Stars",
//     excerpt:
//       "How to process survey images, extract light curves, and classify variability with open-source tools.",
//     author: "Dr. S. Rao",
//     date: "February 02, 2025",
//     tags: ["AstroPy", "Python", "Statistics"],
//     category: "Astronomy",
//   },
//   {
//     id: 4,
//     title: "Swarm Mapping with Multi-UAVs",
//     excerpt:
//       "Cooperative strategies and communication patterns that let many small drones produce high-fidelity maps.",
//     author: "Meera Shah",
//     date: "April 18, 2025",
//     tags: ["ROS", "Algorithms", "Simulation"],
//     category: "Robotics",
//   },
//   {
//     id: 5,
//     title: "Antenna Tuning for Small Satellites",
//     excerpt:
//       "Design trade-offs and prototyping tips for compact high-gain antennas in nanosatellite platforms.",
//     author: "R. Kumar",
//     date: "May 08, 2025",
//     tags: ["RF", "Fabrication"],
//     category: "Space Tech",
//   },
//   {
//     id: 6,
//     title: "Imaging Nebulae: From Capture to Publish",
//     excerpt:
//       "Capture techniques, stacking workflows, and basic post-processing for astrophotography beginners.",
//     author: "Anita G",
//     date: "June 10, 2025",
//     tags: ["Imaging", "Processing"],
//     category: "Astronomy",
//   },
// ];

// export default function Blogs() {
//   const [selected, setSelected] = useState("All");

//   const filtered = useMemo(() => {
//     if (selected === "All") return SAMPLE_BLOGS;
//     return SAMPLE_BLOGS.filter((b) => b.category === selected);
//   }, [selected]);

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />

//       <main className="max-w-6xl mx-auto px-6 pt-20 pb-16">
//         {/* small label */}
//         <div className="text-center mb-6">
//           <p className="text-xs text-[#9ad1ff] font-medium">Knowledge Hub</p>
//           <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
//             Latest Insights
//           </h1>
//           <p className="mt-3 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
//             Dive deep into the world of technology, space exploration, and
//             robotics with our expert articles and research insights.
//           </p>
//         </div>

//         {/* filters */}
//         <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
//           {CATEGORIES.map((c) => {
//             const active = selected === c;
//             return (
//               <button
//                 key={c}
//                 onClick={() => setSelected(c)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all
//                   ${
//                     active
//                       ? "bg-[#00d1ff] text-[#042033] shadow-lg"
//                       : "bg-[#07283e] text-[#9ad1ff] ring-1 ring-transparent hover:ring-[#154b67]"
//                   }
//                 `}
//                 aria-pressed={active}
//               >
//                 {c}
//               </button>
//             );
//           })}
//         </div>

//         {/* blog cards grid */}
//         <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((post) => (
//             <article
//               key={post.id}
//               className="rounded-2xl p-5 bg-gradient-to-tr from-[#081830] to-[#0b2746] border border-[#12344a] shadow-inner hover:shadow-lg transform transition hover:-translate-y-1"
//             >
//               <div className="flex justify-between items-start">
//                 <span className="px-2 py-0.5 text-xs rounded-full bg-[#062b44] text-[#bfe9ff] border border-[#0f4b63]">
//                   Robusta
//                 </span>
//                 <div className="text-xs text-slate-400">{/* optional */}</div>
//               </div>

//               <h3 className="mt-3 text-lg font-semibold text-[#e6f7ff]">
//                 {post.title}
//               </h3>

//               <p className="mt-2 text-sm text-slate-300 leading-relaxed min-h-[3.2rem]">
//                 {post.excerpt}
//               </p>

//               {/* tags */}
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {post.tags.map((t) => (
//                   <span
//                     key={t}
//                     className="text-xs px-2 py-1 rounded-md bg-[#0e2a42] text-slate-200 border border-[#12364a]"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* author / date row */}
//               <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-[#134c74] flex items-center justify-center text-sm font-semibold text-white">
//                     {post.author
//                       .split(" ")
//                       .map((n) => n[0])
//                       .slice(0, 2)
//                       .join("")}
//                   </div>
//                   <div>
//                     <div className="font-medium text-sm text-[#bfe9ff]">
//                       {post.author}
//                     </div>
//                     <div className="text-xs text-slate-400">{post.date}</div>
//                   </div>
//                 </div>

//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     alert(`Read more: "${post.title}"`);
//                   }}
//                   className="inline-block px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-[#2f7fd6] to-[#4da3ff] text-white font-medium shadow-sm"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </article>
//           ))}

//           {filtered.length === 0 && (
//             <div className="col-span-full text-center py-16 rounded-xl bg-[#061626] border border-[#123044]">
//               <p className="text-slate-300">
//                 No articles found for this category.
//               </p>
//             </div>
//           )}
//         </section>

//         {/* CTA box */}
//         {/* <div className="mt-10 bg-[#021825]/60 border border-[#10364a] rounded-xl p-8 text-center shadow-md">
//           <h3 className="text-xl font-bold text-[#e6f7ff]">
//             Want To Collaborate ?
//           </h3>
//           <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
//             Join us in building the future of technology. Whether you're a
//             beginner or expert, there's a place for you to contribute and learn.
//           </p>

//           <div className="mt-6 flex items-center justify-center gap-4">
//             <button
//               onClick={() => alert("Get in touch clicked")}
//               className="px-5 py-2 rounded-full bg-[#00d1ff] text-[#042033] font-semibold shadow-md"
//             >
//               Get In Touch
//             </button>

//             <button
//               onClick={() => alert("Join our club clicked")}
//               className="px-5 py-2 rounded-full bg-transparent border border-[#235b82] text-[#9ed7ff] hover:bg-[#123c58]/30"
//             >
//               Join Our Club
//             </button>
//           </div>
//         </div> */}
//       </main>

//       <Footer />
//     </div>
//   );
// }
