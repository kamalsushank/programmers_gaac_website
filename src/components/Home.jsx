import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AchievementsCarousel from "./AchievementsCarousel";

// ─── Reusable scroll-reveal wrapper ───────────────────────────────────────────
function FadeInWhenVisible({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated starfield canvas ────────────────────────────────────────────────
function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.004 + 0.001,
      drift: (Math.random() - 0.5) * 0.12,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
        s.x += s.drift;
        if (s.x > canvas.width) s.x = 0;
        if (s.x < 0) s.x = canvas.width;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 190, 255, ${s.alpha * 0.85})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

// ─── Glowing cursor ───────────────────────────────────────────────────────────
function GlowCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
    >
      <div className="w-6 h-6 rounded-full bg-indigo-400 opacity-80 blur-lg" />
    </motion.div>
  );
}

// ─── 3D Orbit Ring ────────────────────────────────────────────────────────────
function OrbitRing({ size, duration, delay, color = "rgba(99,102,241,0.35)", dotColor = "#818cf8", showDot = true, tiltX = 72, tiltY = 10 }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "50%",
        marginLeft: -size / 2,
        marginTop: -size / 2,
        perspective: 900,
        perspectiveOrigin: "center center",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border"
        style={{
          borderColor: color,
          boxShadow: `0 0 14px 2px ${color}`,
          transformStyle: "preserve-3d",
          rotateX: tiltX,
          rotateY: tiltY,
        }}
        animate={{ rotateZ: 360 }}
        initial={{ rotateZ: 0 }}
        transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
      >
        {showDot && (
          <div
            className="absolute rounded-full"
            style={{
              width: 9,
              height: 9,
              background: dotColor,
              boxShadow: `0 0 14px 6px ${dotColor}88`,
              top: -4.5,
              left: "50%",
              marginLeft: -4.5,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Typewriter for tagline
  const words = ["Engineering.", "Code.", "Curiosity."];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  // Pillar icons
  const pillars = [
    { label: "Hands-on Exposure", icon: "🛠️", desc: "Real builds, real results — not just theory." },
    { label: "Interdisciplinary Learning", icon: "🔭", desc: "Where aerospace meets code meets curiosity." },
    { label: "Curiosity Beyond Classrooms", icon: "🚀", desc: "Push ideas further than the syllabus allows." },
  ];

  const domains = [
    { title: "Astronomy", desc: "Observing celestial objects and exploring space science.", img: "/astro_bg1.jpg", accent: "#6366f1" },
    { title: "Robotics", desc: "Designing autonomous systems and intelligent machines.", img: "/robo_bg.jpg", accent: "#818cf8" },
    { title: "Programming", desc: "Developing software, tools, and intelligent systems.", img: "/prog_bg.jpg", accent: "#a5b4fc" },
  ];

  const exploreCards = [
    { title: "Our Projects", desc: "See the robots, software, and systems built by our members.", cta: "View Projects", link: "/projects", emoji: "⚙️" },
    { title: "Our Blogs", desc: "Insights, experiences, and technical write-ups from the team.", cta: "Read Blogs", link: "/blogs", emoji: "✍️" },
    { title: "Our Team", desc: "Get to know the students driving GAAC forward.", cta: "Meet the Team", link: "/teams", emoji: "👥" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GlowCursor />
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5,10,20,0.82),rgba(5,10,20,0.96)), url(./pexels-minan1398-920534.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <StarField />

        {/* Orbit decoration rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 2 }}>
          <OrbitRing size={380} duration={18} delay={0} color="rgba(99,102,241,0.55)" dotColor="#a5b4fc" tiltX={68} tiltY={5} />
          <OrbitRing size={560} duration={30} delay={2} color="rgba(129,140,248,0.30)" dotColor="#6366f1" tiltX={55} tiltY={20} />
          <OrbitRing size={750} duration={50} delay={5} color="rgba(99,102,241,0.15)" dotColor="#818cf8" tiltX={75} tiltY={-10} showDot={false} />
          <OrbitRing size={950} duration={80} delay={8} color="rgba(99,102,241,0.07)" dotColor="#6366f1" tiltX={40} tiltY={15} showDot={false} />
        </div>

        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_65%)]" style={{ zIndex: 2 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" style={{ zIndex: 2 }} />

        <motion.div
          className="relative max-w-5xl px-6 pt-28"
          style={{ y: heroY, opacity: heroOpacity, zIndex: 10 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-indigo-400/30 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-indigo-300 bg-indigo-900/20 backdrop-blur-sm mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            GITAM · Student Life · Aero Astro Society MIT
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-orbitron text-4xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow-[0_0_40px_rgba(99,102,241,0.4)] leading-tight mb-6"
          >
            GITAM AERO
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300">
              ASTRO CLUB
            </span>
          </motion.h1>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto my-8"
          />

          {/* Typewriter tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="font-space text-gray-300 text-base md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Exploring the skies through{" "}
            <span className="text-indigo-300 font-semibold">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            <span className="text-gray-400 text-sm md:text-base mt-2 block">
              A student-led community in{" "}
              <span className="text-white font-medium">aerospace, robotics, programming & astronomy</span>.
            </span>
          </motion.p>



        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATEMENT SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="w-full bg-black text-white py-28 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
              Engineering shouldn't stop at{" "}
              <br />
              <span className="text-indigo-400">textbooks.</span>
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.15}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              We give students a space to build, experiment, and explore ideas related to{" "}
              <span className="text-white font-semibold">space</span>,{" "}
              <span className="text-white font-semibold">technology</span>, and{" "}
              <span className="text-white font-semibold">innovation</span>.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item, i) => (
              <FadeInWhenVisible key={i} delay={0.1 * i + 0.2} direction="up">
                <motion.div
                  whileHover={{ y: -6, borderColor: "rgba(99,102,241,0.7)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="border border-gray-700 rounded-2xl p-7 bg-white/[0.03] text-left group cursor-default"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <p className="text-lg font-semibold mb-2 group-hover:text-indigo-300 transition-colors">{item.label}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MISSION / VISION SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-black text-white py-32 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.09),transparent_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-20">
              <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
                Mission · Vision · Values
              </p>
              <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
                What <span className="text-indigo-400">guides</span> us
              </h2>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {[
              { label: "Mission", text: "Cultivate innovation, technical excellence, and collaborative learning in aerospace and computational sciences." },
              { label: "Vision", text: "Become a nationally recognized student hub for research, prototyping, and space science outreach." },
            ].map((item, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.15} direction={i === 0 ? "right" : "left"}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 0 50px rgba(99,102,241,0.18)" }}
                  transition={{ type: "spring", stiffness: 250, damping: 22 }}
                  className="relative border border-white/10 rounded-2xl p-10 bg-white/5 backdrop-blur-sm hover:border-indigo-400/60 transition-colors duration-300"
                >
                  <span className="absolute -top-4 left-6 bg-black px-4 py-1 text-sm tracking-widest uppercase text-indigo-400 font-space">
                    {item.label}
                  </span>
                  <p className="font-space text-gray-300 text-lg leading-relaxed">{item.text}</p>
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-indigo-400/20 rounded-br-lg" />
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Carousel */}
      <AchievementsCarousel />

      {/* ═══════════════════════════════════════════════════
          CORE DOMAINS SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-black to-[#02030a] text-white py-28 px-6 md:px-20 overflow-hidden">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">Our Core Domains</p>
            <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
              How we <span className="text-indigo-400">organize</span> our work
            </h2>
            <p className="font-space text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
              The club is structured into focused domains to help members collaborate and grow.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="relative h-72 rounded-2xl overflow-hidden border border-white/10 cursor-pointer group"
                style={{ backgroundImage: `url(${domain.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <motion.div className="absolute inset-0 bg-black/70" whileHover={{ opacity: 0.5 }} transition={{ duration: 0.4 }} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div className="absolute inset-0 rounded-2xl" whileHover={{ boxShadow: `0 0 40px ${domain.accent}55` }} transition={{ duration: 0.4 }} />
                <div className="relative z-10 h-full flex flex-col justify-end p-6">

                  <h3 className="font-orbitron text-2xl font-bold mb-2 group-hover:text-indigo-300 transition-colors duration-300">{domain.title}</h3>
                  <p className="font-space text-gray-300 text-sm leading-relaxed">{domain.desc}</p>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-3 text-xs text-indigo-300 font-space tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Explore domain →
                  </motion.div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EXPLORE SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-black text-white py-28 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.07),transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-20">
              <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">Explore Our Club</p>
              <h2 className="font-orbitron text-4xl md:text-6xl font-extrabold">
                Discover what <span className="text-indigo-400">we create</span>
              </h2>
              <p className="font-space text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
                Dive deeper into our work, ideas, and the people behind GAAC.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {exploreCards.map((item, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 0 50px rgba(99,102,241,0.15)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="border border-white/10 rounded-2xl p-10 bg-white/5 backdrop-blur-sm text-center hover:border-indigo-400/60 transition-colors duration-300 group flex flex-col items-center"
                >
                  <motion.div className="text-4xl mb-5" whileHover={{ scale: 1.2, rotate: [-5, 5, 0] }} transition={{ duration: 0.4 }}>
                    {item.emoji}
                  </motion.div>
                  <h3 className="font-orbitron text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">{item.title}</h3>
                  <p className="font-space text-gray-300 text-base leading-relaxed mb-8 flex-1">{item.desc}</p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-400/50 text-indigo-300 rounded-full font-space text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  >
                    {item.cta}
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
                  </Link>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          JOIN CTA BANNER
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-black py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_65%)]" />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <FadeInWhenVisible>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-widest uppercase text-indigo-400 mb-4">Ready to launch?</p>
            <h2 className="font-orbitron text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Become part of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">GAAC</span>
            </h2>
            <p className="font-space text-gray-300 text-lg mb-10 leading-relaxed">
              Applications are open. Join a team of curious minds building the future of aerospace at GITAM.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/recruitments"
                className="inline-flex items-center gap-3 px-10 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-space font-semibold rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.55)]"
              >
                🚀 Apply Now
              </Link>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </section>

      <Footer />
    </div>
  );
}

export default Home;