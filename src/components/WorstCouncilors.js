import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background from '../components/Background';
import berg from '../assets/images/berg.jpg';
import mother from '../assets/images/mother.jpg';

const WorstCouncilors = () => {
  const images = [berg, mother];
  <Background images={images} />
  // Backend data
  const councilors = [
    {id: 1, name: "John Doe", rating: 2.5},
    {id: 2, name: "Peter Bower", rating: 2.8},
    {id: 3, name: "Tom Smith", rating: 1.7},
    {id: 4, name: "Jo Hudla", rating: 1.6},
    {id: 5, name: "Losef Chaine", rating: 2.9},
    {id: 6, name: "Jane Jackson", rating: 2.0},
    {id: 7, name: "Cole Alex", rating: 1.2},
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakepoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="worstCouncilor-carousel">
      <h2>Worst Rated Councilors</h2>
      <Slider {...settings}>
        {councilors.map((councilor) => (
          <div key={councilor.id} className="councilor-item">
            <h3>{}councilor.name</h3>
            <p>Rating: {councilor.rating}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorstCouncilors;