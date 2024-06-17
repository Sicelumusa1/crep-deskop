import { axiosInstance } from "../axiosConfig";

export const getProvince = async () => {
  try {
    const response = await axiosInstance.get('crep/provinces/');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getMunicipality = async (provinceId) => {
  try {
    const response = await axiosInstance.get(`crep/provinces/${provinceId}/municipalities/`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getWard = async (municipalityId) => {
  try {
    const response = await axiosInstance.get(`crep/municipalities/${municipalityId}/wards/`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getCouncilor = async (wardNumber) => {
  try {
    const response = await axiosInstance.get(`crep/wards/${wardNumber}/councilors/`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to resolve ward number into ward ID
export const resolveWardId = async (selectedWardNumber) => {
  const response = await axiosInstance.get(`/crep/wards/${selectedWardNumber}`);
  return response;
};