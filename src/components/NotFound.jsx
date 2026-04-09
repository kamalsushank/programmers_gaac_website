import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] text-white pt-20">
      <Navbar />

      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="w-full max-w-xl text-center rounded-3xl bg-white/5 border border-white/10 p-10 backdrop-blur-xl">
          <h1 className="text-7xl font-extrabold text-indigo-400 mb-4">404</h1>

          <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>

          <p className="text-gray-400 mb-8">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full bg-indigo-500 text-black font-semibold hover:bg-indigo-400 transition"
          >
            Go Back Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
