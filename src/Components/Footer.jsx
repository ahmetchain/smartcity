import React from "react";
import Tuzla from "../assets/tuzla-logo.webp";

const Footer = () => {
  return (
    <footer
      id="footer"
      className=" text-gray-700 py-8 border-t border-gray-200"
    >
      <div className="container mx-auto text-center">
        <img src={Tuzla} alt="Tuzla Logo" className="mx-auto mb-6 h-16" />
        <p className="mb-6 text-gray-500">
          &copy; 2024 Tuzla Belediyesi. Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
