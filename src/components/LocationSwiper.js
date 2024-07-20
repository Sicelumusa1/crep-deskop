import React, { useState, useEffect } from 'react';
import { Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { publicAxiosInstance } from '../axiosConfig';

import 'swiper/swiper-bundle.css';
import '../styles/Perspectives.css'

const LocationSwiper = ({ onSelectWard }) => {

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    // Fetch provinces when components mounts
    const fetchProvinces = async () => {
      try {
        const response = await publicAxiosInstance.get('crep/provinces/');
        setProvinces(response.data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    }
    
    fetchProvinces();
  }, []);

  const handleBackButton = () => {
    if (selectedMunicipality) {
      setSelectedMunicipality(null);
    } else if (selectedProvince) {
      setSelectedProvince(null);
    }
  };

  const handleProvinceClick = async (province) => { 
    try {
      const response = await publicAxiosInstance.get(`crep/provinces/${province.id}/municipalities/`)
      setSelectedProvince({
        ...province,
        municipalities: response.data
      }); 
    } catch(error) {
      console.error('Error fetching municipalities:', error);
    }
  };

  const handleMunicipalityClick = async (municipality) => {
    try {
      const response = await publicAxiosInstance.get(`crep/municipalities/${municipality.id}/wards/`)
      setSelectedMunicipality({
        ...municipality,
        wards: response.data
      }); 
    } catch(error) {
      console.error('Error fetching wards:', error);
    }
  };

  const handleWardClick = (ward) => {
    onSelectWard(ward);
  }

  return (
    <div className='grid'>
      {selectedProvince === null ? (
        <Swiper
          slidesPerView={4}
          grid={{ rows: 2 , fill: 'row'}}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Grid, Pagination]}
          className='perspectives'
        >
          <h2>Residents Perspectives On Local Governance Per Province</h2>
          {provinces.map((province, index) => (
            <SwiperSlide key={index} onClick={() => handleProvinceClick(province)}>
              {province.name}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : selectedMunicipality === null ? (
        <Swiper
          slidesPerView={4}
          grid={{ rows: 2, fill: 'row'}}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Grid, Pagination]}
          className='perspectives'
        >
          <h2>Residents Perspectives On Local Governance Per Municipality</h2>
          {selectedProvince.municipalities.map((municipality, index) => (
            <SwiperSlide key={index} onClick={() => handleMunicipalityClick(municipality)}>
              {municipality.name}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={4}
          grid={{ rows: 2, fill: 'row'}}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Grid, Pagination]}
          className='perspectives'
        >
          <h2>Residents Perspectives On Local Governance Per Ward</h2>
          {selectedMunicipality.wards.map((ward, index) => (
            <SwiperSlide key={index} onClick={() => handleWardClick(ward)}> Ward:
              {ward.ward_number}
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {selectedProvince || selectedMunicipality ? (
        <button  className="backButton"  onClick={handleBackButton}>Back</button>
      ) : null}
    </div>
  );
};

export default LocationSwiper;
