import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  const images = [
    {
      image: "/images/image1.jpg",
      link: "https://mahir21.github.io/TicTacToe/",
    },
    {
      image: "/images/image2.jpg",
      link: "https://mahir21.github.io/form-validation/",
    },
  ];

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="w-full max-w-3xl mx-auto"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-20 h-24 object-cover rounded-lg"
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
