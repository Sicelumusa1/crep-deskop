import React, { useState } from 'react';
import { Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import '../styles/Perspectives.css'
import provinces from '../data/Locations';

const LocationSwiper = ({ onSelectWard }) => {

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);

  const handleBackButton = () => {
    if (selectedMunicipality) {
      setSelectedMunicipality(null);
    } else if (selectedProvince) {
      setSelectedProvince(null);
    }
  };

  const handleProvinceClick = (province) => { 
    setSelectedProvince(province);
    setSelectedMunicipality(null);
  };

  const handleMunicipalityClick = (municipality) => {
    setSelectedMunicipality(municipality);
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
          {selectedMunicipality.wards.map((ward, index) => (
            <SwiperSlide key={index} onClick={() => handleWardClick(ward)}>
              {ward}
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
