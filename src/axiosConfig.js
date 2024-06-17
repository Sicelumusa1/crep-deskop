import axios from "axios";

// Base URL for the main application endpoints
const CREP_URL = "http://127.0.0.1:8000/";

// Axios for open access requests
export const axiosInstance = axios.create(
  {
    baseURL: CREP_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  }
)