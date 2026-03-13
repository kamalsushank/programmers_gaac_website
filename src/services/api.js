const API_BASE = "https://gaac-backend.onrender.com";

class GAACApiClient {
  constructor() {
    this.accessToken = localStorage.getItem("accessToken");
    this.refreshPromise = null;
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
      headers: this.getHeaders(options.includeAuth !== false),
    };

    if (endpoint.includes("/refresh") || endpoint.includes("/logout")) {
      config.credentials = "include";
    }

    let response = await fetch(url, config);

    if (
      response.status === 401 &&
      !endpoint.includes("/login") &&
      !endpoint.includes("/sign-in")
    ) {
      const newToken = await this.refreshToken();

      if (newToken) {
        config.headers["Authorization"] = `Bearer ${newToken}`;
        response = await fetch(url, config);
      }
    }

    return response;
  }

  async refreshToken() {
    if (this.refreshPromise) return this.refreshPromise;

    this.refreshPromise = fetch(`${API_BASE}/api/auth/refresh`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        if (!res.ok) {
          this.clearSession();
          return null;
        }

        const data = await res.json();

        this.accessToken = data.accessToken;
        localStorage.setItem("accessToken", this.accessToken);

        return this.accessToken;
      })
      .finally(() => {
        this.refreshPromise = null;
      });

    return this.refreshPromise;
  }

  clearSession() {
    this.accessToken = null;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");
  }

  // ---------- AUTH ----------

  async sendOtp(email) {
    const res = await this.request("/api/auth/send-otp", {
      method: "POST",
      body: JSON.stringify({ email }),
      includeAuth: false,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const error = new Error(data.message || "OTP failed");
      error.status = res.status;
      error.data = data;
      throw error;
    }

    return { status: res.status, data };
  }

  async signUp(email, otp, password) {
    const payload = {
      email,
      otp,
      password,
    };

    console.log("SIGNUP REQUEST:", payload);

    const res = await this.request("/api/auth/sign-in", {
      method: "POST",
      body: JSON.stringify(payload),
      includeAuth: false,
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      const text = await res.text().catch(() => "");
      data = { message: text || `HTTP ${res.status}` };
    }

    if (!res.ok) {
      const error = new Error(data.message || "Signup failed");
      error.status = res.status;
      error.data = data;
      throw error;
    }

    this.accessToken = data.accessToken;
    localStorage.setItem("accessToken", this.accessToken);

    return { status: res.status, data };
  }

  async login(email, password) {
    const res = await this.request("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      includeAuth: false,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const error = new Error(data.message || "Login failed");
      error.status = res.status;
      error.data = data;
      throw error;
    }

    this.accessToken = data.accessToken;
    localStorage.setItem("accessToken", this.accessToken);

    return { status: res.status, data };
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
    const res = await this.request("/api/user/profile", { method: "GET" });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const error = new Error(data.message || "Profile fetch failed");
      error.status = res.status;
      error.data = data;
      throw error;
    }

    return data;
  }

  async completeProfile(data) {
    const res = await this.request("/api/user/new-profile", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await res.json().catch(() => ({}));

    if (!res.ok) {
      const error = new Error(response.message || "Profile creation failed");
      error.status = res.status;
      error.data = response;
      throw error;
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
