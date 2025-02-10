// Slider.js
import React, { useState, useEffect } from 'react';
import { slideData } from '../../assets/frontend-img/assets';
import './slider.css';  // Importing the CSS file

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length
    );
  };

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);  // Change slide every 3 seconds
    return () => clearInterval(interval);  // Cleanup on component unmount
  }, []);

  return (
    <div className="slider-container">
      {/* Displaying the current slide */}
      <div>
        <img
          src={slideData[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
        />
        <div className="text-overlay">
          <h2  data-aos="fade-right" >{slideData[currentIndex].heading}</h2>
          <p>{slideData[currentIndex].paragraph}</p>
          <button id='btn'>Shop now</button>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className='slider-button'>
      <button onClick={prevSlide}>&#10094;</button>
      <button onClick={nextSlide}>&#10095;</button>
    </div>
    </div>
            
  );
};

export default Slider;
