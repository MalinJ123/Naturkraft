import axios from "axios";
import Cookies from "js-cookie";
import dotenv from "dotenv";

dotenv.config();

const AuthInstance = axios.create({
  baseURL: process.env.BACKEND_LOCATION,
  headers: {
    "Content-Type": "application/json",
  },
});

AuthInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AuthInstance;
