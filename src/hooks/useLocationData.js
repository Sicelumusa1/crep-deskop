import { useState, useEffect } from "react";
import { publicAxiosInstance } from '../axiosConfig';

const useLocationData = () => {
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [wards, setWards] = useState([]);
  const [provinceName, setProvinceName] = useState('');
  const [municipalityName, setMunicipalityName] = useState('');
  const [councilor, setCouncilor] = useState(null);

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await publicAxiosInstance.get('crep/provinces/');
      setProvinces(response.data);
    
    } catch (error) {
      console.error('Error fetching provinces:', error);
    } 
  };

  const fetchProvinceName = async (provinceId) => {
    try {
      const response = await publicAxiosInstance.get(`crep/provinces/${provinceId}`);
      setProvinceName(response.data.name);
    
    } catch (error) {
      console.error('Error fetching province name:', error);
    } 
  };

  const fetchMunicipalities = async (provinceId) => {
    try {
      const response = await publicAxiosInstance.get(`crep/provinces/${provinceId}/municipalities/`);
      setMunicipalities(response.data);
    
    } catch (error) {
      console.error('Error fetching municipalities:', error);
    }
  };

  const fetchMunicipalityName = async (municipalityId) => {
    try {
      const response = await publicAxiosInstance.get(`crep/municipalities/${municipalityId}/`);
      setMunicipalityName(response.data.name);
    
    } catch (error) {
      console.error('Error fetching municipalities:', error);
    }
  };

  const fetchWards = async (municipalityId) => {
    try {
      const response = await publicAxiosInstance.get(`crep/municipalities/${municipalityId}/wards/`);
      setWards(response.data);
    
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  const fetchCouncilorDetails = async (wardNumber) => {
    try {
      const response = await publicAxiosInstance.get(`crep/wards/${wardNumber}/councilors/`);
      setCouncilor(response.data[0]);
    
    } catch (error) {
      console.error('Error fetching councilor details:', error);
    }
  }

  return {
    provinces,
    municipalities,
    wards,
    councilor,
    fetchProvinces,
    provinceName,
    municipalityName,
    fetchMunicipalities,
    fetchWards,
    fetchProvinceName,
    fetchMunicipalityName,
    fetchCouncilorDetails,
  };

};

export default useLocationData;