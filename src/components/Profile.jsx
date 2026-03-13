import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collegeId: "",
    mobileNumber: "",
    branch: "",
    yearOfStudy: "",
  });

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setProfile(res);

        setFormData({
          name: res.name || "",
          email: res.email || "",
          collegeId: res.collegeId || "",
          mobileNumber: res.mobileNumber || "",
          branch: res.branch || "",
          yearOfStudy: res.yearOfStudy || "",
        });
      })
      .catch(() => navigate("/signup"));
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!formData.name?.trim() || !formData.collegeId?.trim()) {
      alert("Name and College ID are required.");
      return;
    }

    try {
      setLoading(true);

      // remove email from payload
      const payload = {
        name: formData.name,
        collegeId: formData.collegeId,
        mobileNumber: formData.mobileNumber,
        branch: formData.branch,
        yearOfStudy: formData.yearOfStudy,
      };

      await api.updateProfile(payload);

      const updated = await api.getProfile();

      setProfile(updated);

      setFormData({
        name: updated.name || "",
        email: updated.email || "",
        collegeId: updated.collegeId || "",
        mobileNumber: updated.mobileNumber || "",
        branch: updated.branch || "",
        yearOfStudy: updated.yearOfStudy || "",
      });

      setEditMode(false);
    } catch (err) {
      console.error(err);
      alert("Profile update failed");
    } finally {
      setLoading(false);
    }
  };
  if (!profile) {
    return (
      <div className="min-h-screen bg-black pt-20 text-white">
        <Navbar />
        <section className="min-h-[80vh] flex items-center justify-center">
          <p className="text-gray-400 text-lg">Loading profile...</p>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <Navbar />

      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="w-full max-w-lg rounded-3xl bg-white/5 p-8 border border-white/10">
          <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>

          {!editMode && (
            <>
              <div className="space-y-3 text-gray-300">
                <ProfileRow label="Name" value={profile.name} />
                <ProfileRow label="Email" value={profile.email} />
                <ProfileRow label="College ID" value={profile.collegeId} />
                <ProfileRow
                  label="Mobile Number"
                  value={profile.mobileNumber}
                />
                <ProfileRow label="Branch" value={profile.branch} />
                <ProfileRow label="Year Of Study" value={profile.yearOfStudy} />
              </div>

              <button
                onClick={() => setEditMode(true)}
                className="w-full mt-6 px-6 py-3 rounded-full bg-indigo-500 text-black"
              >
                Edit Profile
              </button>
            </>
          )}

          {editMode && (
            <form onSubmit={handleUpdate} className="space-y-4">
              <InputField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <InputField
                label="Email"
                name="email"
                value={formData.email}
                disabled
              />

              <InputField
                label="College ID"
                name="collegeId"
                value={formData.collegeId}
                onChange={handleChange}
                required
              />

              <InputField
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />

              <InputField
                label="Branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              />

              <InputField
                label="Year Of Study"
                name="yearOfStudy"
                value={formData.yearOfStudy}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 px-6 py-3 rounded-full bg-indigo-500 text-black"
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>

              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="w-full px-6 py-3 rounded-full border border-white/20"
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-white/10 pb-2">
      <span className="text-gray-400">{label}</span>
      <span className="text-white">{value || "-"}</span>
    </div>
  );
}

function InputField({ label, name, value, onChange, required, disabled }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-1">
        {label} {required && "*"}
      </label>

      <input
        type="text"
        name={name}
        value={value || ""}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10"
      />
    </div>
  );
}

export default Profile;
