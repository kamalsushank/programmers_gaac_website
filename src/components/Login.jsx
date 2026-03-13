import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <Navbar />

      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl bg-white/5 p-8 border border-white/10">
          <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
            />

            {error && <p className="text-red-400">{error}</p>}

            <button className="w-full p-3 rounded-full bg-indigo-500 text-black">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            New here?{" "}
            <Link to="/signup" className="text-indigo-300">
              Signup
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
