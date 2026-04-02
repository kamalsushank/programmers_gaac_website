const API_BASE = "https://gaac-backend.onrender.com";

class GAACApiClient {
  constructor() {
    this.accessToken = localStorage.getItem("accessToken");
  }

  // Save token in BOTH localStorage + cookie
  setToken(token) {
    this.accessToken = token;

    localStorage.setItem("accessToken", token);

    // Store in cookie (7 days example)
    document.cookie = `accessToken=${token}; path=/; max-age=${7 * 24 * 60 * 60}`;
  }

  // Clear everywhere
  clearSession() {
    this.accessToken = null;

    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");

    // Remove cookie
    document.cookie =
      "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }

  getHeaders(includeAuth = true) {
    const headers = { "Content-Type": "application/json" };

    const token = localStorage.getItem("accessToken");

    if (includeAuth && token) {
      headers["Authorization"] = `Bearer ${token}`;
      this.accessToken = token;
    }

    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;

    const config = {
      ...options,
      headers: {
        ...this.getHeaders(options.includeAuth !== false),
        ...(options.headers || {}),
      },
      credentials: "include",
    };

    const response = await fetch(url, config);

    // If token invalid → logout directly
    if (
      (response.status === 401 || response.status === 403) &&
      !endpoint.includes("/login") &&
      !endpoint.includes("/sign-in")
    ) {
      this.clearSession();
      window.location.href = "/login"; // optional redirect
    }

    return response;
  }

  // ---------- AUTH ----------

  async sendOtp(email) {
    const res = await this.request(`/api/auth/send-otp/SIGNIN`, {
      method: "POST",
      body: JSON.stringify({ email }),
      includeAuth: false,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data.message || "OTP failed");
    }

    return data;
  }

  async signUp(email, otp, password) {
    const res = await this.request("/api/auth/sign-in", {
      method: "POST",
      body: JSON.stringify({ email, otp, password }),
      includeAuth: false,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Signup failed");
    }

    this.setToken(data.accessToken);

    return data;
  }

  async login(email, password) {
    const res = await this.request("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      includeAuth: false,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    this.setToken(data.accessToken);

    return data;
  }

  async logout() {
    try {
      await this.request("/api/auth/logout", { method: "POST" });
    } catch {
      console.log("Logout request failed");
    } finally {
      this.clearSession();
    }
  }

  // ---------- USER ----------

  async getProfile() {
    const res = await this.request("/api/user/profile");

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Profile fetch failed");
    }

    return data;
  }

  async completeProfile(data) {
    const res = await this.request("/api/user/new-profile", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error(response.message || "Profile creation failed");
    }

    return response;
  }

  async updateProfile(data) {
    const res = await this.request("/api/user/update-profile", {
      method: "PUT",
      body: JSON.stringify(data),
    });
    const response = await res.json().catch(() => ({}));
    if (!res.ok) {
      const error = new Error(response.message || "Profile update failed");
      error.status = res.status;
      error.data = response;
      throw error;
    }
    return response;
  }
}

export default new GAACApiClient();
