import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorstCouncilors = () => {
  const [councilors, setCouncilors] = useState([]);

  const settings = {
    // dots: false,
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

  useEffect(() => {
    const fetchCouncilors = async () => {
      try {
        // Fetch data from backend
        const response = await fetch(`http://127.0.0.1:8000/crep/councilors/?rating_type=worst`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCouncilors(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCouncilors();
  }, []);

  return (
    <div className="bestCouncilors-carousel">
      <h2>Worst Rated Councilors</h2>
      <Slider {...settings}>
        {councilors.map((councilor) => (
          <div key={councilor.id} className="councilor-item">
            <h4>Name:  {councilor.names} {councilor.surname}</h4>
            {/* {selectedProvinceName && <h4>Province:  {selectedProvinceName} </h4>}
        {selectedMunicipalityName && <h4>Municipality:  {selectedMunicipalityName} </h4>} */}
        <h4>Ward:  {councilor.ward_number}</h4>
        <h4>Councilor Affiliation:  {councilor.affiliation}</h4>
        <h4>Average Ratings:  {councilor.avg_ratings}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorstCouncilors;