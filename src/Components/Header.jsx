// Header.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Menü ikonu
import Tuzla from "../assets/tuzla-logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü durumu
  const navigate = useNavigate();

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
      setIsMenuOpen(false);
    }
  };

  const handleNavigateHome = (event) => {
    event.preventDefault();
    const isOnHomePage = window.location.pathname === "/";
    if (isOnHomePage) {
      handleSmoothScroll(event, "#");
    } else {
      navigate("/");
    }
    setIsMenuOpen(false);
  };

  const handleNavigateToApply = () => {
    navigate("/ideathon-apply");
    setIsMenuOpen(false);
  };

  const handleNavigateToRegister = () => {
    navigate("/register");
    setIsMenuOpen(false);
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Tuzla}
              alt="Tuzla Logo"
              className="h-14 mr-3 cursor-pointer"
              onClick={handleNavigateHome}
            />
          </div>

          {/* Masaüstü Navigasyon */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a
              href="#"
              onClick={handleNavigateHome}
              className="text-gray-700 hover:text-gray-900"
            >
              Anasayfa
            </a>
            <a
              href="#details"
              onClick={(e) => handleSmoothScroll(e, "#details")}
              className="text-gray-700 hover:text-gray-900"
            >
              Etkinlik Detayları
            </a>
            <a
              href="#agenda"
              onClick={(e) => handleSmoothScroll(e, "#agenda")}
              className="text-gray-700 hover:text-gray-900"
            >
              Program
            </a>
            <a
              href="#speakers"
              onClick={(e) => handleSmoothScroll(e, "#speakers")}
              className="text-gray-700 hover:text-gray-900"
            >
              Konuşmacılar
            </a>
            <a
              href="#sponsors"
              onClick={(e) => handleSmoothScroll(e, "#sponsors")}
              className="text-gray-700 hover:text-gray-900"
            >
              Sponsorlar
            </a>
            <a
              href="#footer"
              onClick={(e) => handleSmoothScroll(e, "#footer")}
              className="text-gray-700 hover:text-gray-900"
            >
              İletişim
            </a>
            <button
              onClick={handleNavigateToApply}
              className="ml-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 px-4 rounded-lg shadow hover:from-blue-700 hover:to-teal-600 transition duration-300"
            >
              İdeathon Başvuru
            </button>
          </nav>

          {/* Mobil Menü Butonu */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <>
          {/* Arkaplan Kapatıcı */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menü İçeriği */}
          <div className="fixed top-0 right-0 mt-16 mr-6 w-48 bg-white rounded-md shadow-lg py-2 z-50">
            <a
              href="#"
              onClick={(e) => handleNavigateHome(e)}
              className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Anasayfa
            </a>
            <button
              onClick={handleNavigateToRegister}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Etkinlik Kayıt
            </button>
            <button
              onClick={handleNavigateToApply}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              İdeathon Başvuru
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
