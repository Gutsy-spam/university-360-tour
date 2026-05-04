import React, { useState, useEffect } from "react";
import "./imageslider.css";

const imageData = [
  "images/chanderyanmain.png",
  "images/01.png",
  "images/02.png",
  "images/amritmahotsav.png",
  "images/03.png",
  "images/04.png",
  "images/05.png",
  "images/06.png",
];

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="image-slider1">
      <button type="button" className="bt1" onClick={prevSlide}>
        <i className="fa-solid fa-caret-left"></i>
      </button>
      {imageData.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          style={{ opacity: index === currentImageIndex ? 1 : 0 }}
        />
      ))}

      <button type="button" className="bt2" onClick={nextSlide}>
        <i className="fa-solid fa-caret-right"></i>
      </button>
    </div>
  );
}

export default ImageSlider;
