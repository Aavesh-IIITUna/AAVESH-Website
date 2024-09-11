import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const totalSlides = 3; // Variable to define the number of slides
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const updateCarousel = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * width
      }px)`;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener("resize", updateCarousel);
    return () => {
      window.removeEventListener("resize", updateCarousel);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Carousel Wrapper */}
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {/* Slide 1 */}
        <div className="min-w-full flex flex-col items-center justify-center bg-gray-100 py-8 px-4">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300"
              alt="First Slide"
              className="w-full md:w-1/2 h-auto object-cover"
            />
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">First Slide Label</h2>
              <p className="text-gray-600">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">First Slide Label</h2>
              <p className="text-gray-600">
                Some representative placeholder content for the first slide.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/300"
              alt="First Slide"
              className="w-full md:w-1/2 h-auto object-cover"
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="min-w-full flex flex-col items-center justify-center bg-gray-100 py-8 px-4">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300"
              alt="First Slide"
              className="w-full md:w-1/2 h-auto object-cover"
            />
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Second Slide Label</h2>
              <p className="text-gray-600">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Second Slide Label</h2>
              <p className="text-gray-600">
                Some representative placeholder content for the first slide.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/300"
              alt="First Slide"
              className="w-full md:w-1/2 h-auto object-cover"
            />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="min-w-full flex flex-col items-center justify-center bg-gray-100 py-8 px-4">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300"
              alt="First Slide"
              className="w-full md:w-1/2 h-auto object-cover"
            />
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Third Slide Label</h2>
              <p className="text-gray-600">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Third Slide Label</h2>
              <p className="text-gray-600">
                Some representative placeholder content for the first slide.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/300"
              alt="First Slide"
              className="w-full md:w-1/2 h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
