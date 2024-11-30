// Header.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Importing the hamburger icon
import Tuzla from "../assets/tuzla-logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu state
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

  return (
    <>
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
            <img
              src={Tuzla}
              alt="Tuzla Logo"
              className="h-14 mr-3 cursor-pointer"
              onClick={handleNavigateHome}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
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
              className="ml-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg shadow hover:from-blue-600 hover:to-teal-400 transition duration-300"
            >
              İdeathon Başvuru
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-[#94a3b8] hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Content */}
          <div className="fixed top-0 right-0 mt-16 mr-6 w-48 bg-[#1A2236] rounded-md shadow-lg py-2 z-50">
            <a
              href="#"
              onClick={(e) => handleNavigateHome(e)}
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Anasayfa
            </a>
            <button
              onClick={handleNavigateToApply}
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
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
