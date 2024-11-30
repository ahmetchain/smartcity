import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için import
import Tuzla from "../assets/tuzla-logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // useNavigate kullanımı

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (event, id) => {
    event.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigateHome = () => {
    navigate("/"); // Anasayfaya yönlendirme
  };

  const handleNavigateToApply = () => {
    navigate("/ideathon-apply"); // Başvuru sayfasına yönlendirme
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Tuzla} alt="Tuzla Logo" className="h-14 mr-3" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <a
            href="#"
            onClick={handleNavigateHome}
            className="text-[#94a3b8] hover:text-white"
          >
            Anasayfa
          </a>
          <a
            href="#details"
            onClick={(e) => handleSmoothScroll(e, "#details")}
            className="text-[#94a3b8] hover:text-white"
          >
            Etkinlik Detayları
          </a>
          <a
            href="#agenda"
            onClick={(e) => handleSmoothScroll(e, "#agenda")}
            className="text-[#94a3b8] hover:text-white"
          >
            Program
          </a>
          <a
            href="#speakers"
            onClick={(e) => handleSmoothScroll(e, "#speakers")}
            className="text-[#94a3b8] hover:text-white"
          >
            Konuşmacılar
          </a>
          <a
            href="#sponsors"
            onClick={(e) => handleSmoothScroll(e, "#sponsors")}
            className="text-[#94a3b8] hover:text-white"
          >
            Sponsorlar
          </a>
          <a
            href="#footer"
            onClick={(e) => handleSmoothScroll(e, "#footer")}
            className="text-[#94a3b8] hover:text-white"
          >
            İletişim
          </a>
          <button
            onClick={handleNavigateToApply}
            className="ml-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg shadow hover:from-blue-500 hover:to-teal-400 transition duration-300"
          >
            İdeathon Başvuru
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
