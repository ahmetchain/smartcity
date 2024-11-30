import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTags } from "react-icons/fa";

const EventDetails = () => {
  return (
    <section id="details" className="py-16 bg-[#111622]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-300 mb-12">
          Etkinlik Detayları
        </h2>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-12">
          <div className="flex items-start mb-8 md:mb-0 md:w-1/3">
            <FaCalendarAlt className="text-blue-500 text-5xl md:text-6xl mr-4" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Tarihler
              </h3>
              <p className="text-lg md:text-xl text-gray-400">
                23-24-25 Aralık 2024
              </p>
            </div>
          </div>
          <div className="flex items-start mb-8 md:mb-0 md:w-1/3">
            <FaMapMarkerAlt className="text-blue-500 text-5xl md:text-6xl mr-4" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Konum
              </h3>
              <p className="text-lg md:text-xl text-gray-400">
                Tuzla Belediyesi Teknoloji Geliştirme Merkezi
              </p>
            </div>
          </div>
          <div className="flex items-start md:w-1/3">
            <FaTags className="text-blue-500 text-5xl md:text-6xl mr-4" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Konular
              </h3>
              <p className="text-lg md:text-xl text-gray-400">
                Sürdürülebilirlik, IoT, Blockchain, Büyük Veri, Dijital İkizler
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
