import React from "react";
import '../App.css';

const Background = ({ images }) => {
  // Use state to keep track of current picture index
  const [picIndex, setPicIndex] = React.useState(0);

  // Update the index and loop through pictures
  const nextPic = () => {
    setPicIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Switch to next image after a specified time
  React.useEffect(() => {
    const interval = setInterval(nextPic, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`background-${index}`}
          className={picIndex === index ? 'active' : 'inactive'}
        />
      ))}
    </div>
  );
};

export default Background;