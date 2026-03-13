import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Load user ONLY if token exists
  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        // 🔥 No token → skip API call
        if (!token) {
          setLoading(false);
          return;
        }

        const profile = await api.getProfile();
        setUser(profile);
      } catch (err) {
        // backend returns 403 when the token is invalid/expired or the
        // profile simply doesn't exist yet.  we were seeing crashes and
        // repeated network errors because the invalid token stayed in
        // localStorage, so every time the app mounted it kept trying
        // to fetch the profile and got another 403.
        console.log("PROFILE ERROR:", err.status, err.data);

        // clear any bad session so subsequent mounts are clean
        api.clearSession();

        // make sure user is considered logged out
        setUser(null);

        // 🔥 If profile not ready → just ignore (don't surface an error to
        // the user, we'll prompt them to complete the form later).
        if (err.status === 400 || err.status === 403 || err.status === 404) {
          console.log("Profile not ready yet");
        } else {
          // other unexpected errors could be shown with a toast/alert if
          // desired. for now we just log them.
          console.warn("Unexpected profile error", err);
        }
      } finally {
        // always stop the loading spinner regardless of outcome
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // 🔥 Login flow
  const login = async (email, password) => {
    await api.login(email, password);

    try {
      const profile = await api.getProfile();
      setUser(profile);
    } catch {
      // profile not created yet → allow app
      setUser(null);
    }
  };

  // 🔥 Logout flow
  const logout = async () => {
    try {
      await api.logout();
    } catch {}
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
