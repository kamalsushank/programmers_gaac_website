import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AchievementsCarousel() {
  const achievements = [
    {
      title: "Andhra Pradesh SpaceTech Summit",
      desc: `Sreyas Malla and Priyangshu Ghosh secured 2nd Prize at the Andhra Pradesh SpaceTech Summit 2026 Project Expo held at Vignan University, Guntur.`,
      img: "/gemini_gaac_robo.png",
      path: "/achievements",
    },
    {
      title: "IIT Madras Robosoccer",
      desc: `Narayana Gupta achieved 2nd place in the RoboSoccer competition at IIT Madras in June 2025.`,
      img: "/gemini_gaac_workshop.png",
      path: "/achievements",
    },
    {
      title: "GDG WOW Hackathon",
      desc: `K Akash Kishan won the GDG WOW 2025 Hackathon by ideating and building a placement preparation application.`,
      img: "/gaac_starnival.jpeg",
      path: "/achievements",
    },
    {
      title: "Hackathons",
      desc: `Hackathons push members to collaborate under pressure, solve real problems, and transform ideas into working prototypes.`,
      img: "/gaac_hack.jpeg",
      path: "/achievements",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
  };

  const item = achievements[index];

  return (
    <section className="relative bg-gradient-to-b from-[#05070d] to-black text-white py-16">
      {/* Header */}
      <div className="text-center px-6 mb-12">
        <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
          What We Do
        </p>

        <h2 className="font-orbitron text-3xl md:text-5xl font-extrabold">
          Our <span className="text-indigo-400">Achievements</span>
        </h2>

        <p className="font-space text-gray-300 mt-3 max-w-xl mx-auto text-base md:text-lg">
          Each achievement at GAAC represents the passion and innovation of our
          members.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto px-6">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-indigo-500 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-indigo-500 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Card */}
        <div
          key={index}
          className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]"
        >
          {/* Image */}
          <div className="relative h-[200px] md:h-[260px] overflow-hidden group">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          {/* Content */}
          <div className="px-6 py-6">
            {/* Title + Button Row */}
            <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
              <h3 className="font-orbitron text-xl md:text-2xl font-bold">
                {item.title}
              </h3>

              <Link
                to={item.path}
                className="
      px-4 py-1.5
      rounded-full
      border border-indigo-400/50
      text-indigo-300
      text-sm
      whitespace-nowrap
      hover:bg-indigo-400 hover:text-black
      transition-all duration-300
      hover:scale-105
      "
              >
                Know More →
              </Link>
            </div>

            {/* Description */}
            <p className="font-space text-gray-300 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)]" />
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {achievements.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-indigo-400 w-6" : "bg-gray-500/40 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
