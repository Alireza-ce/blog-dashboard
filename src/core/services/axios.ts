import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config if needed, e.g., add an authorization token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Optional: Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally if needed, e.g., redirect to login on 401
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors
      // Example: redirect to login page
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
