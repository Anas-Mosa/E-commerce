// src/ProductSlider.js
import React, { useState, useEffect } from 'react';

const ProductSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [images.length, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[3000px] h-[300px] max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="w-full h-auto object-cover transition-opacity duration-1000 ease-in-out"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4  text-white">
        <h2 className="text-2xl font-bold mb-2">{images[currentIndex].title}</h2>
        <p className="text-lg">{images[currentIndex].subtitle}</p>
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
        <button 
          onClick={handlePrev} 
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        >
          &lt;
        </button>
        <button 
          onClick={handleNext} 
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        >
          &gt;
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};




const productImages = [
  { 
    url: 'https://bazzarry-s3-bucket-prod.s3.me-south-1.amazonaws.com/media/mf_webp/png/media/slideshow/cache/1750x590/wysiwyg/Designs2024/August/Aug_Offers_-_1750x590.webp', 
 
  },
  { 
    url: 'https://bazzarry-s3-bucket-prod.s3.me-south-1.amazonaws.com/media/mf_webp/png/media/slideshow/cache/1750x590/wysiwyg/Designs2024/July/Jul_-_Aden_-_Sign_In_B_01.webp', 
  },
  { 
    url: 'https://bazzarry-s3-bucket-prod.s3.me-south-1.amazonaws.com/media/mf_webp/png/media/slideshow/cache/1750x590/wysiwyg/Designs2024/August/School_HSB_01.webp', 
  }
];

function Slider() {
  return (
    <div className="App  flex items-center justify-center">
      <div className="text-center">
        <ProductSlider images={productImages} />
      </div>
    </div>
  );
}
export default Slider