import React, { useState, useEffect } from "react";

function Slider() {
  const slides = [
    {
      id: 1,
      title: "SUMMER 2020",
      subtitle: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      buttonText: "SHOP NOW",
      image:
        "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FejtigIOws8eu86j53A9M5dXOKwpfNbOYYmYBbwg46T6F~sBE601qt0fKwXD7d0xIjAwPUKrx2~HXMR7Ficu05Hcx4X5aryA1fj9ljSq1s1xIAALuqJj2-E9Q1vyck4tV6v~uKZCM26l3DPRokPuMvQ-mKSxDvkkK9GDv6tvk4fVakHJzCgS~06G0306FElyJsQ79ED5EDdyxiJgCAZ6f7nnWV~zQ~QaB~-xJUGh70jiAh6lSk55CAWOZ~xzmYoT4GsPEYly5U3owlJqk2KkI5pIOGzaKH1w~oDFC0k9Sh40dbL2~fr6Cw9XgbL894Ao4d1lvckyZyajLZoMevulPg__", // Replace with your actual image URL
    },
    {
      id: 2,
      title: "WINTER SALE",
      subtitle: "HOT DEALS",
      description: "Discover our winter collection with amazing discounts.",
      buttonText: "SHOP NOW",
      image:
        "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FejtigIOws8eu86j53A9M5dXOKwpfNbOYYmYBbwg46T6F~sBE601qt0fKwXD7d0xIjAwPUKrx2~HXMR7Ficu05Hcx4X5aryA1fj9ljSq1s1xIAALuqJj2-E9Q1vyck4tV6v~uKZCM26l3DPRokPuMvQ-mKSxDvkkK9GDv6tvk4fVakHJzCgS~06G0306FElyJsQ79ED5EDdyxiJgCAZ6f7nnWV~zQ~QaB~-xJUGh70jiAh6lSk55CAWOZ~xzmYoT4GsPEYly5U3owlJqk2KkI5pIOGzaKH1w~oDFC0k9Sh40dbL2~fr6Cw9XgbL894Ao4d1lvckyZyajLZoMevulPg__", // Use the same image or different ones if desired
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideCount]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  return (
    <div className="relative w-full font-monts">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0"
            >
              <div
                className="relative h-192 bg-center bg-cover"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-center px-4 lg:px-12">
                  <h3 className="text-xs sm:text-sm uppercase text-white mb-2">
                    {slide.title}
                  </h3>
                  <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                    {slide.subtitle}
                  </h1>
                  <p className="text-sm sm:text-lg text-white mb-6">
                    {slide.description}
                  </p>
                  <button className="px-5 py-2 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transition">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
