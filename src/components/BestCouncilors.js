import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestCouncilors = () => {
  // Backend data
  const councilors = [
    {id: 1, name: "John Doe", Municipality: "Nelson Mandela Bay", Ward: 25684523, rating: 4.5},
    {id: 2, name: "Peter Bower", Municipality: "Nelson Mandela Bay", Ward: 25684523, rating: 4.8},
    {id: 3, name: "Tom Smith", Municipality: "Nelson Mandela Bay", Ward: 25684523, rating: 4.7},
    {id: 4, name: "Jo Hudla", Municipality: "Nelson Mandela Bay", Ward: 25684523, rating: 4.6},
    {id: 5, name: "Losef Chaine", Municipality: "Nelson Mandela Bay", Ward: 25684523, rating: 4.9},
    {id: 6, name: "Jane Jackson", Municipality: "Nelson Mandela Bay", Ward: 25684523, rating: 4.0},
    {id: 7, name: "Cole Alex", Municipality: "Nelson Mandela Bay", Ward: 25684523, rating: 4.2},
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
    <div className="bestCouncilors-carousel">
      <h2>Best Rated Councilors</h2>
      <Slider {...settings}>
        {councilors.map((councilor) => (
          <div key={councilor.id} className="councilor-item">
            <h3>{councilor.name}</h3>
            <h4>Municipality: {councilor.Municipality}</h4>
            <h4>Ward_Number: {councilor.Ward}</h4>
            <h4>Rating: {councilor.rating}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestCouncilors;