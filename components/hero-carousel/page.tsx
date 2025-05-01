// src/components/HeroCarousel.jsx
"use client";

import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  const images = [
    {
      src: "/images/test-2.jpg",
      alt: "Person lifting weights",
    },
    {
      src: "/images/test-6.jpg",
      alt: "Person running outdoors",
    },
    {
      src: "/images/test-3.jpg",
      alt: "Person doing yoga",
    },
    {
      src: "/images/test-1.jpg",
      alt: "Person running outdoors",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-[700px] h-[450px] overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
