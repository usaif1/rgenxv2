// apiClient.ts
import axios, { AxiosInstance } from "axios";

// store
import { useAuthStore } from "@/globalStore";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000", // Replace with your base URL
  timeout: 0, // 0 => no timeout (infinite)
});

// 2) Set up the Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const authUser = useAuthStore.getState().authUser;
    // 3) Retrieve the token from storage (localStorage example)
    const token = authUser?.token;
    // Or read from a cookie, or Redux store, etc.

    if (token && config.headers) {
      // 4) Attach the token to the Authorization header
      config.headers["rdxtoken"] = `${token}`;
    }

    return config; // Important: return the config so the request can proceed
  },
  (error) => {
    // If something goes wrong before sending the request,
    // you can do logging or other error handling here
    return Promise.reject(error);
  }
);

export default apiClient;
