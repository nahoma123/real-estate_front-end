import axios from "axios";
import { BASE_URL } from "../constants/api";
const axiosInstance = axios.create({
    baseURL: BASE_URL, // Replace with your API base URL
});
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Replace with your token retrieval logic
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    // Handle request error
    return Promise.reject(error);
});
export default axiosInstance;
