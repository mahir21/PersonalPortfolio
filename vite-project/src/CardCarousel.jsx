// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// const CardCarousel = () => {
//   const cards = [
//     {
//       title: "Card 1",
//       text: "This is my first project",
//       image: "my_portfolio/vite-projectsrcimages/image1.png",
//       link: "https://mahir21.github.io/TicTacToe/",
//     },
//     {
//       title: "Card 2",
//       text: "This is form validation project",
//       image: "my_portfolio/vite-projectsrcimages/image2.png",
//       link: "https://mahir21.github.io/form-validation/",
//     },
//     {
//       title: "Card 3",
//       text: "This is weather app project",
//       image: "/images/card3.jpg",
//       link: "http://127.0.0.1:5500/WeatherApp/index.html",
//     },
//     {
//       title: "Card 4",
//       text: "This is the fourth card.",
//       image: "/images/card4.jpg",
//     },
//   ];

//   return (
//     <Swiper
//       spaceBetween={20}
//       slidesPerView={1} // Show 1 card on small screens
//       breakpoints={{
//         640: { slidesPerView: 2 }, // Show 2 cards on medium screens
//         1024: { slidesPerView: 3 }, // Show 3 cards on large screens
//       }}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }}
//       loop={true}
//       modules={[Navigation, Pagination, Autoplay]}
//       className="w-full max-w-5xl mx-auto"
//     >
//       {cards.map((card, index) => (
//         <SwiperSlide key={index}>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h3 className="text-xl font-bold mt-4">{card.title}</h3>
//             <p className="text-gray-600 mt-2">{card.text}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default CardCarousel;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const CardCarousel = () => {
  const cards = [
    {
      title: "Card 1",
      text: "This is my first project",
      image: "/images/image1.png", // ✅ Use proper path
      link: "https://mahir21.github.io/TicTacToe/",
    },
    {
      title: "Card 2",
      text: "This is form validation project",
      image: "/images/image2.png",
      link: "https://mahir21.github.io/form-validation/",
    },
    {
      title: "Card 3",
      text: "This is weather app project",
      image: "/images/card3.jpg",
      link: "http://127.0.0.1:5500/WeatherApp/index.html",
    },
    {
      title: "Card 4",
      text: "This is the fourth card.",
      image: "/images/card4.jpg",
    },
  ];

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="w-full max-w-5xl mx-auto"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <a
            href={card.link || "#"} // ✅ Link wrapper (fallback to # if no link)
            target={card.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-4">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.text}</p>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
