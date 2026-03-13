import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

function CompleteProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    collegeId: "",
    course: "",
    yearOfStudy: "",
  });

  const requiredFields = ["name", "collegeId", "course", "yearOfStudy"];
  const isValid = requiredFields.every((field) => formData[field]?.trim());

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setMessage("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await api.completeProfile(formData);

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
            <p className="text-gray-300 mt-2 text-sm">
              Just a few quick details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10"
              />
            </div>

            {/* College ID */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                College ID *
              </label>
              <input
                type="text"
                name="collegeId"
                value={formData.collegeId}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Course *
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Year of Study *
              </label>
              <input
                type="text"
                name="yearOfStudy"
                value={formData.yearOfStudy}
                onChange={handleChange}
                required
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
