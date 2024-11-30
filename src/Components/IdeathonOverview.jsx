import React from "react";
import { useNavigate } from "react-router-dom";

const IdeathonOverview = () => {
  const navigate = useNavigate();
  const navigateToIdeathon = () => {
    navigate("/ideathon");
  };

  return (
    <section id="ideathon" className="py-16 bg-[#111622] text-white relative">
      <div className="container mx-auto px-4 text-center">
        {/* Enhanced Title with Gradient */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
          Ideathon: Fikirlerden Geleceğe
        </h2>
        {/* Slogan below the title */}
        <p className="text-lg md:text-xl text-gray-400 italic mb-8">
          "Birlikte düşün, birlikte üret, şehirlerin geleceğini tasarla!"
        </p>

        <div className="max-w-3xl mx-auto relative">
          {/* Enhanced Paragraph with Visual Hierarchy */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            İnovasyon dolu bir yarışma maratonu! Katılımcılar açık inovasyon
            ortamında bir araya gelerek,{" "}
            <span className="text-blue-300">yenilikçi fikirler</span> ve{" "}
            <span className="text-teal-300">projeler</span> üretmek için
            çalışacak. Yarışma sonunda fikirler jüri tarafından
            değerlendirilecek ve{" "}
            <span className="font-semibold text-white">
              en iyi projeler ödüllendirilecek.
            </span>{" "}
            Takım çalışmasını teşvik eden, geleceğin teknolojilerini ve kentsel
            çözümleri bir araya getiren bu etkinlikte katılımcılar{" "}
            <span className="underline text-gray-100">
              sınırlarını zorlayacak.
            </span>{" "}
            Teknoloji, yaratıcılık ve iş birliğini birleştirerek, şehirlerin
            karşılaştığı zorluklara yenilikçi çözümler sunmayı hedefliyoruz...
          </p>
          {/* Fade Out Effect */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#111622] to-transparent pointer-events-none"></div>
        </div>

        {/* Button */}
        <button
          onClick={navigateToIdeathon}
          className="mt-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition-transform transform hover:scale-105"
        >
          Detayları Gör
        </button>
      </div>
    </section>
  );
};

export default IdeathonOverview;