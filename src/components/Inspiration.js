import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

import feedback  from '../assets/images/feedback.jpg'
import education from '../assets/images/education-3670453_1920.jpg'
import poverty from '../assets/images/poverty-509601_1920.jpg'
import road from '../assets/images/road-414462_1920.jpg'
import africa from '../assets/images/africa-1783786_1920.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


const Inspiration = () => {
  return (
      <div className='inspiration-container'>
          <div className="insp-story">
            <h3>You Have Hired A Councilor Through Your Vote</h3>
            <h4>Now evaluate and rate the work conducted by your employee.</h4>
            <p></p>
            <h4>Ready To Start Contributing Towards Your Ward Governance?:</h4>
            <p>Get Your Free Account: <Link to="/signup"><button>Register</button></Link></p>
          </div>
          <div className='image-swiper'>
            <Swiper
              effect={'cube'}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className='inspImages'
            >
              <SwiperSlide>
                <img src={feedback} alt="" className='image' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={africa} alt="" className='image' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={education} alt="" className='image' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={poverty} alt="" className='image' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={road} alt="" className='image' />
              </SwiperSlide>
            </Swiper>
          </div>
      </div>
  );
}
export default Inspiration;