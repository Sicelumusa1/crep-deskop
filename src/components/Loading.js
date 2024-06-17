import React, { useState, useEffect } from "react";
import '../styles/loader.css';

const Loading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          if (onLoadingComplete) {
            onLoadingComplete();
          }
          return 100;
        }
        return prevProgress + 1;
      });
    }, 35);

    return () => {
      clearInterval(interval);
    };
  }, [onLoadingComplete]);
  
  return (
    <div className="loading-page" style={{ width: `${progress}%` }}>
      <div className="counter">
        <h1></h1>
        <h2>LOADED...</h2>
      </div>
    </div>
  );
};

export default Loading;