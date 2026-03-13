import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOtp = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMsg("Email and password required");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const res = await api.sendOtp(email);

      console.log("OTP RESPONSE:", res);

      setMsg("OTP sent! Check your email.");
      setStep(2);
    } catch (err) {
      console.log("OTP ERROR:", err);

      setMsg(`Failed: ${err.data?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  const confirmSignup = async (e) => {
    e.preventDefault();

    if (!email || !password || !otp) {
      setMsg("All fields required");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      console.log("Signup payload", { email, otp, password });

      const res = await api.signUp(email, otp, password);

      console.log("SIGNUP SUCCESS:", res);

      localStorage.setItem("email", email);

      navigate("/user-details");
    } catch (err) {
      console.log("SIGNUP ERROR:", err);

      setMsg(`Signup failed: ${err.data?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <Navbar />

      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl bg-white/5 p-8 border border-white/10">
          <h1 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h1>

          {step === 1 && (
            <form onSubmit={sendOtp} className="space-y-4">
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

              <button className="w-full p-3 bg-indigo-500 text-black rounded-full">
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={confirmSignup} className="space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
              />

              <button className="w-full p-3 bg-indigo-500 text-black rounded-full">
                {loading ? "Creating..." : "Confirm Signup"}
              </button>
            </form>
          )}

          {msg && <p className="mt-4 text-center text-indigo-300">{msg}</p>}

          <p className="mt-6 text-center text-gray-400">
            Already have account?{" "}
            <Link to="/login" className="text-indigo-300">
              Login
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
