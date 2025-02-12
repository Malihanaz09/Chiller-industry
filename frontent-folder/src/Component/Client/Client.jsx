import React from 'react';
import './client.css'
import Slider from 'react-slick';  // Import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const images = [
    "https://via.placeholder.com/150",  // Replace with your actual image URLs
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  const settings = {
    dots: true,         // Show navigation dots
    infinite: true,     // Infinite loop
    speed: 500,         // Transition speed (in milliseconds)
    autoplay: true,     // Enable auto-scrolling
    autoplaySpeed: 2000, // Time interval between each slide (in milliseconds)
    slidesToShow: 3,    // Show 3 images at a time
    slidesToScroll: 1,  // Scroll one image at a time
    centerMode: true,   // Center the active image
    focusOnSelect: true // Allow clicking on images to focus on them
  };

  return (
    <div className="client-container" id='client'>
      <h2>Our <span style={{color:"rgb(71, 166, 255"}}>Client</span></h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slider image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Client;
