import React from "react";
import { FaLinkedin } from "react-icons/fa";
import SpeakerPhoto from "../assets/osmankuzucu.webp";

const Speakers = () => {
  const speakers = [
    {
      name: "Osman Kuzucu",
      title: "CEO",
      company: "Omchain Foundation",
      photo: SpeakerPhoto,
      session: "Açılış Konuşması: Kentsel İnovasyonun Geleceği",
      linkedin: "https://www.linkedin.com/in/osmankuzucu", // LinkedIn URL
    },
    // Daha fazla konuşmacı eklenebilir
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
              className="relative group transform hover:-translate-y-2 transition duration-300 w-[350px] h-[500px]"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl p-1"></div>
              {/* Card Content */}
              <div className="relative bg-[#1A2236] rounded-3xl overflow-hidden shadow-lg w-full h-full flex flex-col justify-between">
                <div className="w-full h-[100%] overflow-hidden rounded-t-3xl">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 text-center flex flex-col justify-between h-[40%]">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {speaker.name}
                  </h3>
                  <div className="flex flex-col items-center text-blue-300 text-lg">
                    <span className="font-medium">{speaker.title}</span>
                    <span className="text-gray-400 mt-1">
                      {speaker.company}
                    </span>
                  </div>
                  <div className="mt-4">
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-blue-500 hover:text-blue-600 transition duration-300"
                    >
                      <FaLinkedin className="mr-2" size={20} />
                      <span className="text-sm font-medium">
                        LinkedIn Profiline Git
                      </span>
                    </a>
                  </div>
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
