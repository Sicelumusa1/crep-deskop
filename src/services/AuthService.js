import { axiosInstance } from "../axiosConfig";

export const Register = async (userData) => {
  try {
    const response = await axiosInstance.post('auth/signup/', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const LoginService = async (email, password) => {
  try {
    const response = await axiosInstance.post('auth/login/', {email, password});
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};