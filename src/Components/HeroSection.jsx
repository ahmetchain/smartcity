// Updated HeroSection Component

import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-[#111622] text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      {/* Soft Glowing Light Behind Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-10 blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-300 mb-4 max-w-3xl">
          Akıllı Şehir Teknolojileri Zirvesi & Ideathon
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 max-w-2xl">
          Etkinliğimiz, sürdürülebilir şehirlerin geleceğini şekillendirmek ve
          kentsel inovasyonun potansiyelini keşfetmek için tasarlanmıştır.
        </p>
        <a
          href="#register"
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-6 lg:px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition-transform transform hover:scale-105"
        >
          Şimdi Kaydol
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
