import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TeamLayout({
  emoji,
  teamName,
  description,
  mission,
  vision,
  activities,
  // 🔥 IMPORTANT: unique key like "stargazers"
}) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 Backend Fetch (Future Ready)
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        // 🔥 Replace this URL after backend deploy
        const res = await fetch(
          `https://gaac-backend.onrender.com/api/get-team-members/${teamName}`,
        );

        if (!res.ok) throw new Error("Failed to fetch members");

        const data = await res.json();

        setMembers(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load members.");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [teamName]);

  // 🔥 Separate Leads from Members automatically
  const leads = members.filter(
    (m) => m.role?.toLowerCase().includes("president") || m.isLead,
  );
  const others = members.filter((m) => !leads.includes(m));

  return (
    <div className="min-h-screen bg-[#020a12] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          {emoji} <span className="text-indigo-400">{teamName}</span> Team
        </h1>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { label: "Mission", text: mission },
            { label: "Vision", text: vision },
          ].map((item, i) => (
            <div
              key={i}
              className="relative border border-white/10 rounded-2xl p-10
                           bg-white/5 backdrop-blur-sm
                           hover:border-indigo-400/60
                           hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]
                           hover:-translate-y-1 transition"
            >
              <span className="absolute -top-4 left-6 bg-black px-4 py-1 text-sm uppercase tracking-widest text-indigo-400">
                {item.label}
              </span>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {activities.map((act, i) => (
            <div
              key={i}
              className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-md
                         border border-white/10
                         hover:border-indigo-400/60
                         hover:-translate-y-2
                         hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
                         transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-4">{act.title}</h3>
              <p className="text-gray-300 leading-relaxed">{act.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MEMBERS ================= */}

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Team Members
          </p>
        </div>

        {/* 🔄 Loading State */}
        {loading && (
          <p className="text-center text-gray-400 animate-pulse">
            Fetching team members...
          </p>
        )}

        {/* ❌ Error State */}
        {error && <p className="text-center text-red-400">{error}</p>}

        {/* 🚫 Empty State */}
        {!loading && !error && members.length === 0 && (
          <div className="text-center text-gray-400">
            <p className="text-lg">No members added yet.</p>
          </div>
        )}

        {/* ✅ If Members Exist */}
        {!loading && members.length > 0 && (
          <>
            {/* 🔥 LEADERSHIP SECTION */}
            {leads.length > 0 && (
              <div className="max-w-6xl mx-auto mb-20">
                <h3 className="text-center text-2xl font-semibold mb-12 text-indigo-300">
                  Leadership
                </h3>

                <div className="grid md:grid-cols-2 gap-10">
                  {leads.map((m) => (
                    <MemberCard key={m._id} member={m} highlight />
                  ))}
                </div>
              </div>
            )}

            {/* 👥 OTHER MEMBERS */}
            {others.length > 0 && (
              <div className="max-w-6xl mx-auto">
                <h3 className="text-center text-2xl font-semibold mb-12 text-gray-300">
                  Members
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {others.map((m) => (
                    <MemberCard key={m._id} member={m} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}

/* ================= MEMBER CARD COMPONENT ================= */

function MemberCard({ member, highlight }) {
  return (
    <div
      className={`relative p-8 rounded-3xl bg-white/5 backdrop-blur-md
      border ${highlight ? "border-indigo-400/50" : "border-white/10"}
      hover:border-indigo-400/60
      hover:-translate-y-2
      hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
      transition duration-500`}
    >
      <h4 className="text-lg font-semibold">{member.name}</h4>
      <p className="text-indigo-300 text-sm">{member.role}</p>
      <p className="text-gray-400 text-xs mt-1">{member.course}</p>
      <p className="mt-4 text-gray-300">{member.blurb}</p>

      <div className="mt-6 flex gap-3">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="px-4 py-1.5 text-sm rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
          >
            Email
          </a>
        )}

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 text-sm rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-400 hover:text-black transition"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
