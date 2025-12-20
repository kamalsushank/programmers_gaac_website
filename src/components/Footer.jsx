import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Identity */}
        <div>
          <h3 className="font-orbitron text-xl font-bold mb-4">
            GITAM Aero Astro Club
          </h3>
          <p className="font-space text-gray-400 text-sm leading-relaxed">
            A student-led technical community exploring aerospace, robotics,
            programming, and astronomy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-orbitron text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 font-space text-gray-400 text-sm">
            <li>
              <Link to="/teams" className="hover:text-white transition">
                Teams
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/recruitments" className="hover:text-white transition">
                Recruitments
              </Link>
            </li>
            <li>
              <Link to="/signin" className="hover:text-white transition">
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-orbitron text-lg mb-4">Contact Us</h4>
          <ul className="space-y-2 font-space text-gray-400 text-sm leading-relaxed">
            <li>aeroastro_vzg@gitam.in</li>
            <li>+91 70364 42464</li>
            <li>+91 73823 36771</li>
            <li>
              Location - Industrial Engineering Bhavan, GITAM University,
              Visakhapatnam
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-orbitron text-lg mb-4">Connect</h4>
          <div className="flex space-x-5 text-gray-400">
            <a
              href="https://www.instagram.com/gitam.aeroastro?igsh=MTFrb3o4b3BieDdlYw=="
              className="hover:text-white transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/gitam-aero-astro-club/posts/?feedView=all"
              className="hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/g-aeroastro-c"
              className="hover:text-white transition"
            >
              <Github size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-gray-500 text-sm font-space">
        © {new Date().getFullYear()} GITAM Aero Astro Club. All rights reserved.
      </div>
    </footer>
  );
}
