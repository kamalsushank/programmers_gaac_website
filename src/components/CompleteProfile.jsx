import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

function CompleteProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
  });

  const isValid = formData.name.trim() !== "";

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      name: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setMessage("Name is required.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await api.completeProfile({ name: formData.name });

      const profile = await api.getProfile();

      localStorage.setItem("username", profile.name || "");

      navigate("/");
    } catch (err) {
      console.log("PROFILE ERROR:", err);
      setMessage("Profile creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <Navbar />

      <section className="relative min-h-[85vh] flex items-center justify-center px-6">
        <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold">Complete Your Profile</h1>
            <p className="text-gray-300 mt-2 text-sm">Just enter your name</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Enter your name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10"
              />
            </div>

            {message && (
              <p className="text-sm text-center text-red-400">{message}</p>
            )}

            <button
              type="submit"
              disabled={loading || !isValid}
              className="w-full mt-4 px-6 py-3 rounded-full bg-indigo-500 text-black disabled:opacity-50"
            >
              {loading ? "Saving..." : "Continue →"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CompleteProfile;
