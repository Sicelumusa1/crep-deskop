import { axiosInstance } from "../axiosConfig";

export const signup = async (userData) => {
  try {
    const response = await axiosInstance.post('api/v1/auth/signup/', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};