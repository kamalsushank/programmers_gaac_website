import React from "react";
import Navbar from "./Navbar";
function Recruitments() {
  return (
    <section className="relative py-36 px-6 bg-black overflow-hidden">
      <Navbar />
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_65%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
          Recruitments
        </p>

        <h2 className="font-orbitron text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Recruitments are <span className="text-indigo-400">Closed</span>
        </h2>

        {/* Main Card */}
        <div
          className="
        mt-10 relative rounded-3xl p-10
        border border-white/10
        bg-white/5 backdrop-blur-sm
      "
        >
          {/* Card glow */}
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_70%)]" />

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Thank You for Your Interest! 🙏
            </h3>

            <p className="font-space text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              The <span className="text-indigo-300">GITAM Aero Astro Club</span>{" "}
              recruitment process for{" "}
              <span className="text-indigo-300">2025</span> has officially
              concluded. We received an overwhelming response and are truly
              grateful for the enthusiasm and applications from students across
              the university.
            </p>

            {/* Divider */}
            <div className="mt-10 w-24 h-[2px] bg-indigo-400 mx-auto rounded-full" />

            {/* Stay Connected */}
            <div className="mt-10">
              <p className="text-sm tracking-widest uppercase text-gray-400 mb-6">
                Stay Connected
              </p>

              <p className="font-space text-gray-300 mb-8">
                Follow us on social media to stay informed about upcoming
                recruitment announcements.
              </p>

              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                inline-flex items-center gap-2
                px-6 py-2.5 rounded-full
                border border-indigo-400/40
                text-indigo-300
                hover:bg-indigo-400 hover:text-black
                transition
              "
                >
                  Instagram
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                inline-flex items-center gap-2
                px-6 py-2.5 rounded-full
                border border-indigo-400/40
                text-indigo-300
                hover:bg-indigo-400 hover:text-black
                transition
              "
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recruitments;
