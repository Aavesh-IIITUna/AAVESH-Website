import { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = () => {
  const slides = [
    {
      title: "First Slide Label",
      content: "Some representative placeholder content for the first slide.",
      img: "https://via.placeholder.com/300",
    },
    {
      title: "Second Slide Label",
      content: "Some representative placeholder content for the second slide.",
      img: "https://via.placeholder.com/300",
    },
    {
      title: "Third Slide Label",
      content: "Some representative placeholder content for the third slide.",
      img: "https://via.placeholder.com/300",
    },
  ];

  const totalSlides = slides.length;
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
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col items-center justify-center bg-gray-800 py-8 px-4"
          >
            <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg shadow-lg overflow-hidden text-white">
              <img
                src={slide.img}
                alt={`${slide.title} image`}
                className="w-full md:w-1/2 h-auto object-cover"
              />
              <div className="p-6 md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                <p className="text-gray-300">{slide.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
