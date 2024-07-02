import axios from "axios";

// Base URL for the main application endpoints
const CREP_URL = "https://web-production-81ec5.up.railway.app/";

// Axios for open access requests
export const axiosInstance = axios.create(
  {
    baseURL: CREP_URL,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json"
    }
  }
)