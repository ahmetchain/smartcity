import React from "react";
import Tuzla from "../assets/tuzla-logo.webp";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#111622] text-white py-8 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <img src={Tuzla} alt="Tuzla Logo" className="mx-auto mb-6 h-16" />
        <p className="mb-6 text-gray-400">
          &copy; 2024 Tuzla Belediyesi. Tüm Hakları Saklıdır.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaFacebookF size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedinIn size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
