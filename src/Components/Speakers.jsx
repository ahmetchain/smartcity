import React from "react";
import SpeakerPhoto from "../assets/osmankuzucu.webp";

const Speakers = () => {
  const speakers = [
    {
      name: "Osman Kuzucu",
      title: "Akıllı Şehirler Uzmanı",
      photo: SpeakerPhoto,
      session: "Açılış Konuşması: Kentsel İnovasyonun Geleceği",
    },
    // Add more speakers if needed
  ];

  return (
    <section id="speakers" className="py-16 bg-dots">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-300 mb-12">
          Konuşmacılar
        </h2>
        <div
          className={`grid ${
            speakers.length === 1
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          }`}
        >
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="relative group transform hover:-translate-y-2 transition duration-300"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl p-1"></div>
              {/* Card Content */}
              <div className="relative bg-[#1A2236] rounded-3xl overflow-hidden shadow-lg">
                <div className="w-full h-[300px] overflow-hidden rounded-t-3xl">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-blue-300 text-lg">{speaker.title}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {speaker.session}
                  </p>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl border border-gray-700 opacity-30 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
