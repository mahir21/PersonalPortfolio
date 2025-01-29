import React from "react";
import CardCarousel from "./CardCarousel";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <CardCarousel></CardCarousel>
    </div>
  );
};

export default Home;
