"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type AutoCarouselProps = {
  images: { src: string; alt: string }[]; // Array of images passed as props
  type: "mockup" | "hero"; // Type to determine layout style
};

const AutoCarousel: React.FC<AutoCarouselProps> = ({ images, type }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Set styles based on type (mockup or hero)
  const containerStyles =
    type === "mockup"
      ? "relative w-full max-w-[400px] h-full aspect-[9/16] rounded-xl"
      : "relative w-full max-w-[700px] h-[450px] overflow-hidden rounded-lg";

  return (
    <div className={containerStyles}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={700} // Ensure the width is specified for optimization
            height={450} // Same for height
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default AutoCarousel;
