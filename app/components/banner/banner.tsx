"use client";
import React, { useState } from "react";

interface ImagesProp {
  images: string[];
}

const Banner = ({ images }: ImagesProp) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mb-12">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-l"
        onClick={prevSlide}
        style={{
          background: "#ffffff30",
          height: "50px",
          width: "51px",
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "white",
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            textAlign: "center",
          }}
        ></div>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-r"
        onClick={nextSlide}
        style={{
          background: "#ffffff30",
          height: "50px",
          width: "51px",
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "white",
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            textAlign: "center",
          }}
        ></div>
      </button>
      <div className="flex overflow-hidden h-96">
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } w-full transition-opacity duration-1000`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
