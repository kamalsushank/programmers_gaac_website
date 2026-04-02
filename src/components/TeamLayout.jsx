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
}) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);

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

  const leads = members.filter(
    (m) => m.role?.toLowerCase().includes("president") || m.isLead,
  );
  const others = members.filter((m) => !leads.includes(m));

  return (
    <div className="min-h-screen bg-[#020a12] text-white relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          {emoji} <span className="text-indigo-400">{teamName}</span> Team
        </h1>

        <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { label: "Mission", text: mission },
            { label: "Vision", text: vision },
          ].map((item, i) => (
            <div
              key={i}
              className="relative border border-white/10 rounded-2xl p-7
              bg-white/5 backdrop-blur-sm
              hover:border-indigo-400/60
              hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]
              hover:-translate-y-1 transition"
            >
              <span className="absolute -top-4 left-6 bg-black px-4 py-1 text-sm uppercase tracking-widest text-indigo-400">
                {item.label}
              </span>

              <p className="text-gray-300 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <div
              key={i}
              className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-md
              border border-white/10
              hover:border-indigo-400/60
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
              transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-3">{act.title}</h3>
              <p className="text-gray-300 leading-relaxed">{act.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MEMBERS ================= */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Team Members
          </p>
        </div>

        {loading && (
          <p className="text-center text-gray-400 animate-pulse">
            Fetching team members...
          </p>
        )}

        {error && <p className="text-center text-red-400">{error}</p>}

        {!loading && !error && members.length === 0 && (
          <div className="text-center text-gray-400">
            <p className="text-lg">No members added yet.</p>
          </div>
        )}

        {!loading && members.length > 0 && (
          <>
            {leads.length > 0 && (
              <div className="max-w-6xl mx-auto mb-14">
                <h3 className="text-center text-2xl font-semibold mb-8 text-indigo-300">
                  Leadership
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {leads.map((m) => (
                    <MemberCard key={m._id} member={m} highlight />
                  ))}
                </div>
              </div>
            )}

            {others.length > 0 && (
              <div className="max-w-6xl mx-auto">
                <h3 className="text-center text-2xl font-semibold mb-8 text-gray-300">
                  Members
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

/* ================= MEMBER CARD ================= */

function MemberCard({ member, highlight }) {
  return (
    <div
      className={`relative p-6 rounded-3xl bg-white/5 backdrop-blur-md
      border ${highlight ? "border-indigo-400/50" : "border-white/10"}
      hover:border-indigo-400/60
      hover:-translate-y-2
      hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
      transition duration-500`}
    >
      <h4 className="text-lg font-semibold">{member.name}</h4>
      <p className="text-indigo-300 text-sm">{member.role}</p>
      <p className="text-gray-400 text-xs mt-1">{member.course}</p>

      <p className="mt-3 text-gray-300">{member.blurb}</p>

      <div className="mt-5 flex gap-3">
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
