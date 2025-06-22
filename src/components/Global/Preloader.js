import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  });
  return (
    isLoading && (
      <div className="preloader">
        <div className="loading-container">
          <div className="loading-text">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>N</span>
            <span>L</span>
            <span>I</span>
            <span>F</span>
            <span>T</span>
          </div>
        </div>
      </div>
    )
  );
};
export default Preloader;
